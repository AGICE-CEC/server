import { Router } from 'express';
import Event from '../models/EVENT';
import Location from '../models/LOCATION';
import Speaker from '../models/SPEAKER';

const eventRouter = Router();

eventRouter.get('/', async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [
        {
          model: Location,
        },
      ],
      order: [['hourStart', 'ASC']],
    });

    const groupedEvents = events.reduce<
      Record<number, { day: number; events: any[] }>
    >((acc, event) => {
      const day = event.eventDay;
      const formattedEvent = {
        event_id: event.eventId,
        event_title: event.title,
        event_description: event.description,
        hour: event.hourStart,
        hour_end: event.hourEnd,
        room: event.location ? event.location.locationName : 'Desconocido',
      };

      if (!acc[day]) {
        acc[day] = {
          day,
          events: [],
        };
      }

      acc[day].events.push(formattedEvent);

      return acc;
    }, {});

    const eventsByDayArray = Object.values(groupedEvents);

    res.json(eventsByDayArray);
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