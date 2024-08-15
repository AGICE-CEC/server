import { Router } from "express";
import Event from "../models/EVENT";

const eventRouter = Router();


eventRouter.get('/', async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch FAQs'});
    }
});


export default eventRouter;