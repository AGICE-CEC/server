import { Router } from 'express';

const attendeesRouter = Router();

attendeesRouter.get('/:email', async (req, res) => {
  try {
    const { email } = req.params;
    // TODO: Use Google Sheets API to fetch attendees data

    res.json({ daysAdmitted: [10, 11, 12], email });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch attendees data' });
  }
});

export default attendeesRouter;
