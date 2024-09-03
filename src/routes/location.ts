import { Router } from 'express';
import Location from '../models/LOCATION';

const locationRouter = Router();

locationRouter.get('/', async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
});

locationRouter.get('/:id', async (req, res) => {
  try {
    const locationId = req.params.id;
    const location = await Location.findByPk(locationId);

    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }

    res.json(location);
  } catch (error) {
    console.error('Error fetching Location:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default locationRouter;
