import { CronJob } from "cron";
import Event from "./models/EVENT";
import { OneSignal } from "./services/OneSignal";
import { Op } from "sequelize";

/**
 * Variable to control how many minutes to wait between cronjob invocations.
 */
const CRONJOB_DELTA_MINS = 10;

/**
 * Variable to control how many minutes to wait before sending a notification for a meeting.
 */
const EVENT_DELTA_MINS = 10;

const formatToHour = (date: Date) => {
	return `${date.getHours()}:${date.getMinutes()}`;
};

const alreadyAlertedEvents = new Set();

new CronJob(
	`*/${CRONJOB_DELTA_MINS} * * * *`, // every 10 minutes
	async () => {
		const now = new Date();
		// We add +1 because BETWEEN is exclusive in sequelize
		const future = new Date(now.getTime() + (EVENT_DELTA_MINS + 1) * 60 * 1000);
		const events = await Event.findAll({
			where: {
				eventDay: now.getDate(),
				hourStart: {
					[Op.between]: [formatToHour(now), formatToHour(future)],
				},
				id: {
					[Op.notIn]: Array.from(alreadyAlertedEvents),
				},
			},
		});

		const tasks = events.map((ev) => {
			alreadyAlertedEvents.add(ev.id);

			OneSignal.sendPushNotification({
				title: ev.title,
				body: ev.description,
				external_id: [], // TODO: Fill this with an external id.
			});
		});

		await Promise.all(tasks);
	}, // onTick
	null, // onComplete
	true, // autostart
	"America/Guatemala", // timeZone
);
