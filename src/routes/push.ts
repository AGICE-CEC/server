import { Router } from 'express';
import { OneSignal } from '../services/OneSignal';

const pushRouter = Router();

pushRouter.post('/', async (req, res) => {
  const ids = req.body.ids;
  try {
    await OneSignal.sendPushNotification({
      title: 'Hello',
      body: 'World',
      external_id: ids,
    });
    res.status(200).json({ message: 'Push sent', ids });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch speakers' });
  }
});

export default pushRouter;
