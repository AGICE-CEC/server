import { Router } from 'express';
import { OneSignal } from '../services/OneSignal';

const pushRouter = Router();

pushRouter.post('/', async (req, res) => {
  try {
    await OneSignal.sendPushNotification({
      title: 'Hello',
      body: 'World',
    });
    res.status(200).json({ message: 'Push sent' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch speakers' });
  }
});

export default pushRouter;
