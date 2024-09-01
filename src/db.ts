import { Sequelize } from 'sequelize-typescript';
import Event from './models/EVENT';
import EventSpeaker from './models/EVENTSPEAKER';
import Faq from './models/FAQ';
import Location from './models/LOCATION';
import Speaker from './models/SPEAKER';

export const db = new Sequelize(process.env.POSTGRES_URL as string, {
  dialect: 'postgres',
  timezone: '-06:00',
  logging: false,
});

const initializeSequelize = async () => {
  try {
    db.addModels([Event, EventSpeaker, Location, Speaker, Faq]);
    // await db.sync({ force: true });
    console.log('Models loaded');
  } catch (err) {
    console.error('Error initializing Sequelize:', err);
  }
};

initializeSequelize();
