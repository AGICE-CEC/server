import { Router } from "express";
import faqRouter from "./faq";

const routes = Router();

routes.get('/live', (req, res) => {
  return res.status(200).send('Agice API');
});


routes.use('/faqs',faqRouter);

export default routes;
