import { Router } from 'express';
import attendeesRouter from './attendees';
import eventRouter from './event';
import eventSpeakerRouter from './eventsSpeaker';
import faqRouter from './faq';
import locationRouter from './location';
import pushRouter from './push';
import qrGeneratorRouter from './QRgenerator';
import speakerRouter from './speaker';

const routes = Router();

routes.get('/live', (req, res) => {
  return res.status(200).send('Agice API');
});

routes.use('/attendees', attendeesRouter);
routes.use('/faqs', faqRouter);
routes.use('/events', eventRouter);
routes.use('/locations', locationRouter);
routes.use('/speakers', speakerRouter);
routes.use('/event-speakers', eventSpeakerRouter);
routes.use('/qr-generator', qrGeneratorRouter);
routes.use('/push', pushRouter);

export default routes;
