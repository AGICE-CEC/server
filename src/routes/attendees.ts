import { Router } from 'express';
import { checkCredentials } from '../auth/autenticacion';

const attendeesRouter = Router();

attendeesRouter.get('/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const paymentAccepted = await checkCredentials(email);
    const daysAdmitted = paymentAccepted ? [10, 11, 12] : [];

    res.json({ daysAdmitted, email });
  } catch (error) {
    // @ts-ignore
    console.log(error?.message);
    res.status(500).json({ error: 'Failed to fetch attendees data' });
  }
});

export default attendeesRouter;
