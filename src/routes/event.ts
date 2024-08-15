import { Router } from "express";
import Event from "../models/EVENT";

const eventRouter = Router();


eventRouter.get('/', async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch events'});
    }
});

eventRouter.get('/:id', async (req, res) => {
    try {
      const eventId = req.params.id;
      const event = await Event.findByPk(eventId);
  
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      res.json(event);
    } catch (error) {
      console.error('Error fetching Event:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


export default eventRouter;