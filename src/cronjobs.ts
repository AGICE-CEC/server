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
    include: [
      {
        model: Location,
      },
    ],
  });

  const tasks = events.map(ev => {
    alreadyAlertedEvents.add(ev.eventId);

    const location = ev.location.locationName;
    const title = `${ev.title} comienza en ${CRONJOB_DELTA_MINS} minutos`;
    const body = `Dirígete al ${location}. Presiona aquí para ver el mapa o encontrar más información.`;

    OneSignal.sendPushNotification({
      title,
      body,
    });
  });

    await Promise.all(tasks);
  }, // onTick
  null, // onComplete
  true, // autostart
  'America/Guatemala' // timeZone
);
