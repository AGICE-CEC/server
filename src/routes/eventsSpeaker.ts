import { Router } from "express";
import EventSpeaker from "../models/EVENTSPEAKER";

const eventSpeakerRouter = Router();


eventSpeakerRouter.get('/', async (req, res) => {
    try {
        const eventSpeakers = await EventSpeaker.findAll();
        res.json(eventSpeakers);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch FAQs'});
    }
});


export default eventSpeakerRouter;