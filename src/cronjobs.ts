import { CronJob } from 'cron';
import { Op } from 'sequelize';
import Event from './models/EVENT';
import { OneSignal } from './services/OneSignal';

/**
 * Variable to control how many minutes to wait between cronjob invocations.
 */
const CRONJOB_DELTA_MINS = 10;

const formatToHour = (date: Date) => {
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
};

const alreadyAlertedEvents = new Set();

new CronJob(
  `*/${CRONJOB_DELTA_MINS} * * * *`, // every 10 minutes
  async () => {
    const now = new Date();
    const future = new Date(now.getTime() + CRONJOB_DELTA_MINS * 60 * 1000);
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

    const tasks = events.map(ev => {
      alreadyAlertedEvents.add(ev.id);

      OneSignal.sendPushNotification({
        title: ev.title,
        body: ev.description,
      });
    });

    await Promise.all(tasks);
  }, // onTick
  null, // onComplete
  true, // autostart
  'America/Guatemala' // timeZone
);
