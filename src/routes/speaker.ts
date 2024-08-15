import { Router } from "express";
import Speaker from "../models/SPEAKER";

const speakerRouter = Router();

speakerRouter.get('/', async (req, res) => {
    try {
        const speakers = await Speaker.findAll();
        res.json(speakers);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch speakers'});
    }
});

speakerRouter.get('/:id', async (req, res) => {
    try {
      const speakerId = req.params.id;
      const speaker = await Speaker.findByPk(speakerId);
  
      if (!speaker) {
        return res.status(404).json({ message: 'Speaker not found' });
      }
  
      res.json(speaker);
    } catch (error) {
      console.error('Error fetching Speaker:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});


export default speakerRouter;