import { Router } from 'express';
import Event from '../models/EVENT';
import Faq from '../models/FAQ';
import Location from '../models/LOCATION';
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

pushRouter.post('/faqs', async (req, res) => {
  await Faq.destroy({
    where: {},
    truncate: true,
  });

  const faqs = [
    {
      question: '¿Hay límite de edad para participar?',
      answer:
        'Pueden asistir tanto niños como adultos, los niños deben ser acompañados de un padre o tutor.',
      faq_language: 'es',
    },
    {
      question: 'Is there an age limit to participate?',
      answer:
        'Both children and adults can attend. Children must be accompanied by a parent or guardian.',
      faq_language: 'en',
    },
    {
      question: '¿Puedo asistir aunque no sea de Centroamérica?',
      answer:
        'Claro que sí, es increíble que nos podamos juntar a hacer networking',
      faq_language: 'es',
    },
    {
      question: "Can I attend even if I'm not from Central America?",
      answer:
        "Of course, it's incredible that we can get together for networking.",
      faq_language: 'en',
    },
    {
      question: '¿Qué incluye mi inscripción?',
      answer: 'Conferencias, paneles, sesiones técnicas y coffee breaks',
      faq_language: 'es',
    },
    {
      question: 'What does my registration include?',
      answer: 'Conferences, panels, technical sessions, and coffee breaks',
      faq_language: 'en',
    },
    {
      question:
        '¿Cuál es la tasa de cambio del dólar a la moneda nacional de Guatemala, el quetzal?',
      answer:
        '1 dólar equivale 7.5 quetzales guatemaltecos, en raras ocasiones aumenta hasta casi 8 quetzales',
      faq_language: 'es',
    },
    {
      question:
        'What is the exchange rate from dollars to the national currency of Guatemala, the quetzal?',
      answer:
        '1 dollar equals 7.5 Guatemalan quetzals, on rare occasions it increases to almost 8 quetzals',
      faq_language: 'en',
    },
    {
      question: '¿Es necesario que tenga dominio del idioma inglés?',
      answer:
        'No, de cualquier manera se colocan audífonos con traductores en tiempo real, o bien podrías usar traductor. Pero recuerda es mejor si tienes facilidad en el idioma, amplía tus oportunidades.',
      faq_language: 'es',
    },
    {
      question: 'Is it necessary to have a good command of English?',
      answer:
        "No, headphones with real-time translators are provided, or you could use a translator. But remember, it's better if you have facility with the language, it expands your opportunities.",
      faq_language: 'en',
    },
    {
      question: '¿Si soy menor de edad me pueden acompañar mis padres?',
      answer:
        'Claro que sí, es más pensando en ti se prepararon paquetes especiales adjunto',
      faq_language: 'es',
    },
    {
      question: "If I'm a minor, can my parents accompany me?",
      answer:
        'Of course, in fact, special packages have been prepared with you in mind',
      faq_language: 'en',
    },
    {
      question: '¿Puedo asistir sin ser miembro de ninguna asociación?',
      answer:
        'Claro, lo importante es que te integres al mundo tecnológico y científico. Recuerda que lo que nos une es el amor a las ciencias espaciales.',
      faq_language: 'es',
    },
    {
      question: 'Can I attend without being a member of any association?',
      answer:
        'Of course, the important thing is that you integrate into the technological and scientific world. Remember that what unites us is the love for space sciences.',
      faq_language: 'en',
    },
    {
      question: '¿Cómo surgió la idea de CEC?',
      answer:
        'Fue en el congreso del IAC, donde varios centroamericanos centrados en las STEM dialogaron sobre replicar congresos de este tipo en América y apoyar talentos que se interesen por este espacio.',
      faq_language: 'es',
    },
    {
      question: 'How did the idea of CEC come about?',
      answer:
        'It was at the IAC congress, where several Central Americans focused on STEM discussed replicating congresses of this type in America and supporting talents interested in this space.',
      faq_language: 'en',
    },
  ];

  await Faq.bulkCreate(faqs);

  return;
});

pushRouter.post('/events', async (req, res) => {
  // Create a Location entry
  await Location.create({
    locationId: 1,
    locationName: 'Main Venue',
    locationDescription: 'Primary location for all events',
  });

  await Event.bulkCreate([
    // Events from Day 1
    {
      eventId: 1,
      title: 'Análogos 1',
      description: 'Session on space analogs',
      eventDay: 1,
      hourStart: '10:30',
      hourEnd: '11:00',
      locationId: 1,
    },
    {
      eventId: 2,
      title: 'Astronomía 1',
      description: 'Introduction to astronomy',
      eventDay: 1,
      hourStart: '10:45',
      hourEnd: '12:00',
      locationId: 1,
    },
    {
      eventId: 3,
      title: 'Divulgación 1',
      description: 'Science communication techniques',
      eventDay: 1,
      hourStart: '11:00',
      hourEnd: '13:00',
      locationId: 1,
    },
    {
      eventId: 4,
      title: 'Educación 1',
      description: 'Educational methodologies in science',
      eventDay: 1,
      hourStart: '11:15',
      hourEnd: '14:00',
      locationId: 1,
    },
    {
      eventId: 5,
      title: 'Salud/Medicina 1',
      description: 'Health and medicine in space',
      eventDay: 1,
      hourStart: '11:30',
      hourEnd: '15:00',
      locationId: 1,
    },
    {
      eventId: 6,
      title: 'Politica Espacial 1',
      description: 'Space policy discussion',
      eventDay: 1,
      hourStart: '11:45',
      hourEnd: '16:00',
      locationId: 1,
    },
    {
      eventId: 7,
      title: 'Microbiología Espacial 1',
      description: 'Microbiology in space environments',
      eventDay: 1,
      hourStart: '16:00',
      hourEnd: '17:00',
      locationId: 1,
    },
    {
      eventId: 8,
      title: 'Satélites 1',
      description: 'Satellite technology and applications',
      eventDay: 1,
      hourStart: '17:00',
      hourEnd: '18:00',
      locationId: 1,
    },
    // Events from Day 2
    {
      eventId: 9,
      title: 'Análogos 2',
      description: 'Advanced session on space analogs',
      eventDay: 2,
      hourStart: '10:00',
      hourEnd: '11:00',
      locationId: 1,
    },
    {
      eventId: 10,
      title: 'Astronomía 2',
      description: 'Advanced astronomy topics',
      eventDay: 2,
      hourStart: '11:00',
      hourEnd: '12:00',
      locationId: 1,
    },
    // Additional events from extracted data, here are a few examples:
    {
      eventId: 11,
      title: 'Keynote 1: Máximo Roa',
      description: 'Keynote by Máximo Roa from DLR',
      eventDay: 1,
      hourStart: '09:00',
      hourEnd: '10:00',
      locationId: 1,
    },
    {
      eventId: 12,
      title: 'Panel 1: Sostenibilidad en Políticas Espaciales',
      description: 'Discussion on sustainability in space policies',
      eventDay: 1,
      hourStart: '10:15',
      hourEnd: '11:00',
      locationId: 1,
    },
    // Continue listing all other events as per the timings and locations provided in the PDF
  ]);
  return res.status(200).json({ message: 'Events created' });
});
export default pushRouter;
