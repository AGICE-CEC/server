import { Router } from "express";
import faqRouter from "./faq";
import eventRouter from "./event";
import ubicationRouter from "./ubication";
import speakerRouter from "./speaker";
import eventSpeakerRouter from "./eventsSpeaker";

const routes = Router();

routes.get('/live', (req, res) => {
  return res.status(200).send('Agice API');
});


routes.use('/faqs',faqRouter);
routes.use('/events', eventRouter);routes.use('/ubications', ubicationRouter);
routes.use('/speakers', speakerRouter);
routes.use('/event-speakers', eventSpeakerRouter);

export default routes;
