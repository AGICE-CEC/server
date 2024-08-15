import { Router } from "express";
import Faq from "../models/FAQ";

const faqRouter = Router();


faqRouter.get('/', async (req, res) => {
    try {
        const faqs = await Faq.findAll();
        res.json(faqs);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch FAQs'});
    }
});

faqRouter.get('/:id', async (req, res) => {
    try {
      const faqId = req.params.id;
      const faq = await Faq.findByPk(faqId);
  
      if (!faq) {
        return res.status(404).json({ message: 'FAQ not found' });
      }
  
      res.json(faq);
    } catch (error) {
      console.error('Error fetching FAQ:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


export default faqRouter;