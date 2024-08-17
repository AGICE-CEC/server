import { Router } from 'express';
import Ubication from '../models/UBICATION';

const ubicationRouter = Router();

ubicationRouter.get('/', async (req, res) => {
  try {
    const ubications = await Ubication.findAll();
    res.json(ubications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ubications' });
  }
});

ubicationRouter.get('/:id', async (req, res) => {
  try {
    const ubicationId = req.params.id;
    const ubication = await Ubication.findByPk(ubicationId);

    if (!ubication) {
      return res.status(404).json({ message: 'Ubication not found' });
    }

    res.json(ubication);
  } catch (error) {
    console.error('Error fetching Ubication:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default ubicationRouter;
