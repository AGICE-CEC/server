import { Router } from "express";
import Speaker from "../models/SPEAKER";

const speakerRouter = Router();

speakerRouter.get('/', async (req, res) => {
    try {
        const speakers = await Speaker.findAll();
        res.json(speakers);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch FAQs'});
    }
});


export default speakerRouter;