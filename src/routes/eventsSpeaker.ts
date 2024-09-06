import { Router } from 'express';
import EventSpeaker from '../models/EVENTSPEAKER';

const eventSpeakerRouter = Router();

eventSpeakerRouter.get('/', async (req, res) => {
  try {
    const eventSpeakers = await EventSpeaker.findAll();
    res.json(eventSpeakers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch speakers of the event' });
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

eventSpeakerRouter.post('/', async (req, res) => {
  try {
    const { eventId, speakerId } = req.body;
    const eventSpeaker = await EventSpeaker.create({ eventId, speakerId });
    res.status(201).json(eventSpeaker);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event speaker' });
  }
});

eventSpeakerRouter.delete('/', async (req, res) => {
  try {
    const { eventId, speakerId } = req.body;
    await EventSpeaker.destroy({ where: { eventId, speakerId } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete event speaker' });
  }
});

export default eventSpeakerRouter;
