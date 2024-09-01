import { CronJob } from "cron";
import Event from "./models/EVENT";
import { OneSignal } from "./services/OneSignal";

new CronJob(
	"*/10 * * * *", // every 10 minutes
	async () => {
		const events = await Event.findAll({
			where: {
				eventDay: new Date().getDate(),
			},
		});

		const tasks = events.map((ev) => {
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
