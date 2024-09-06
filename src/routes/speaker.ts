import { Router } from 'express';
import Speaker from '../models/SPEAKER';

const speakerRouter = Router();

speakerRouter.get('/', async (req, res) => {
  try {
    const speakers = await Speaker.findAll({
      order: [['speakerId', 'ASC']],
    });
    res.json(speakers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch speakers' });
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

speakerRouter.post('/', async (req, res) => {
  try {
    const speaker = await Speaker.create(req.body);
    res.status(201).json(speaker);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create speaker' });
  }
});

speakerRouter.put('/:id', async (req, res) => {
  try {
    const speakerId = req.params.id;
    const speaker = await Speaker.update(req.body, { where: { speakerId } });
    res.status(200).json(speaker);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update speaker' });
  }
});

export default speakerRouter;
