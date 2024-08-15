import { Router } from "express";
import EventSpeaker from "../models/EVENTSPEAKER";

const eventSpeakerRouter = Router();


eventSpeakerRouter.get('/', async (req, res) => {
    try {
        const eventSpeakers = await EventSpeaker.findAll();
        res.json(eventSpeakers);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch Speakers of the event'});
    }
});


eventSpeakerRouter.get('/:id', async (req, res) => {
    try {
      const eventSpeakerId = req.params.id;
      const eventSpeaker = await EventSpeaker.findByPk(eventSpeakerId);
  
      if (!eventSpeaker) {
        return res.status(404).json({ message: 'Event speaker not found' });
      }
  
      res.json(eventSpeaker);
    } catch (error) {
      console.error('Error fetching Event Speaker:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


export default eventSpeakerRouter;