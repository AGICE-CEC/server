import { Router } from 'express';
import eventRouter from './event';
import eventSpeakerRouter from './eventsSpeaker';
import faqRouter from './faq';
import locationRouter from './location';
import speakerRouter from './speaker';

const routes = Router();

routes.get('/live', (req, res) => {
  return res.status(200).send('Agice API');
});

routes.use('/faqs', faqRouter);
routes.use('/events', eventRouter);
routes.use('/locations', locationRouter);
routes.use('/speakers', speakerRouter);
routes.use('/event-speakers', eventSpeakerRouter);

export default routes;
