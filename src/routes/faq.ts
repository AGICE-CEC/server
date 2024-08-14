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


export default faqRouter;