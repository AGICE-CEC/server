import { Router } from 'express';

const pushRouter = Router();

pushRouter.post('/', async (req, res) => {
  try {
    // await alertAttendees();
    res.status(200).json({ message: 'Push sent' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch speakers' });
  }
});

export default pushRouter;
