import { Router } from "express";
import Event from "../models/EVENT";
import Speaker from "../models/SPEAKER";
import Ubication from '../models/UBICATION';

const eventRouter = Router();


eventRouter.get('/', async (req, res) => {
  try {
      const events = await Event.findAll({
        include: [
          {
            model: Ubication,
            attributes: ['ubicationId', 'locationName', 'locationDescription']
          }
        ]
      });
      
      // Group events by day
      const groupedEvents = events.reduce<Record<string, { dia: string; eventos: any[] }>>((acc, event) => {
          const day = event.get('event_day') as string;
          if (!acc[day]) {
              acc[day] = {
                  dia: day,
                  eventos: []
              };
          }

          const room = event.get('ubication') ? event.get('ubication').get('locationName') : 'Unknown Room';

          console.log(event);

          acc[day].eventos.push({
              event_id: event.get('eventId'),
              event_title: event.get('title'),
              event_description: event.get('description'),
              hour: event.get('hours'),
              room: room
            });

          return acc;
      }, {});

      // Convert the grouped events object into an array
      const result = Object.values(groupedEvents);

      res.json(result);
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch events' + error });
  }
});



eventRouter.get('/:id', async (req, res) => {
    try {
      const eventId = req.params.id;
      const event = await Event.findByPk(eventId, {
        include: [
          {
            model: Speaker,
            through: { attributes: [] }, 
            attributes: ['speakerName'],
        },
        ]
      });
  
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }


      const formattedResponse = [
        {
            charla: event.get('title'),
            presentadores: event.get('speakers').map(speaker => ({
                nombre: speaker.get('speakerName'), 
                hora: event.get('hours'),
                nivel: "Intermedio",
                descripcion: event.get('description')
            }))
        }
    ];

    res.json(formattedResponse);
    } catch (error) {
      console.error('Error fetching Event:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


export default eventRouter;