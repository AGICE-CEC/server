import { Router } from 'express';
import Event from '../models/EVENT';
import EventSpeaker from '../models/EVENTSPEAKER';
import Faq from '../models/FAQ';
import Location from '../models/LOCATION';
import Speaker from '../models/SPEAKER';

const faqRouter = Router();

faqRouter.get('/', async (req, res) => {
  try {
    const faqs = await Faq.findAll({
      attributes: ['question', 'answer', 'faq_language'],
    });

    const groupedFaq = faqs.reduce<
      Record<string, { language: string; faqs: any[] }>
    >((lan, faq) => {
      const language = faq.faq_language;
      const formattedFaq = {
        question: faq.question,
        answer: faq.answer,
      };

      if (!lan[language]) {
        lan[language] = {
          language,
          faqs: [],
        };
      }

      lan[language].faqs.push(formattedFaq);

      return lan;
    }, {});

    res.json(groupedFaq);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
});

faqRouter.get('/:id', async (req, res) => {
  try {
    const faqId = req.params.id;
    const faq = await Faq.findByPk(faqId);

    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    res.json(faq);
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

faqRouter.post('/', async (req, res) => {
  try {
    const addLocations = true;
    const addEvents = true;
    const addSpeakers = true;
    const addEventSpakers = true;
    const addFaqs = true;

    const faqs =
      addFaqs &&
      (await Faq.bulkCreate([
        {
          question:
            'Un título muy largo para probar el tamaño de la caja y que no se nos pase y tengamo que correr después para ver que hacemos si en efecto tenemos uno muy largo?',
          answer:
            "Tunguska event circumnavigated explorations realm of the galaxies two ghostly white figures in coveralls and helmets are softly dancing laws of physics. Orion's sword how far away across the centuries Apollonius of Perga colonies dispassionate extraterrestrial observer. Made in the interiors of collapsing stars trillion descended from astronomers preserve and cherish that pale blue dot invent the universe extraordinary claims require extraordinary evidence. A still more glorious dawn awaits extraordinary claims require extraordinary evidence not a sunrise but a galaxyrise a mote of dust suspended in a sunbeam Sea of Tranquility vastness is bearable only through love and billions upon billions upon billions upon billions upon billions upon billions upon billions",
        },
        {
          question: 'How do I track my order?',
          answer:
            'You can track your order using the tracking number sent to your email.',
        },
        {
          question: 'Do you offer customer support?',
          answer:
            'Yes, we offer 24/7 customer support through our website and phone line.',
        },
      ]));
    const speakers =
      addSpeakers &&
      (await Speaker.bulkCreate([
        {
          speakerName: 'John Doe',
          speakerDescription: 'John Doe is a famous musician.',
          speakerImage:
            'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=',
          country: 'USA',
          linkedIn: 'linkedin.com/johndoe',
          contact: 'johndoe@gmail.com',
        },
        {
          speakerName: 'Jane Smith',
          speakerDescription: 'Jane Smith is a famous musician.',
          speakerImage:
            'https://www.venmond.com/demo/vendroid/img/avatar/big.jpg',
          country: 'USA',
          linkedIn: 'linkedin.com/janesmith',
          contact: 'janesmith@gmail.com',
        },
        {
          speakerName: 'Emily Johnson',
          speakerDescription: 'Emily Johnson is a famous musician.',
          speakerImage:
            'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png',
          country: 'USA',
          linkedIn: 'linkedin.com/emilyjohnson',
          contact: 'emilyjohnson@gmail.com',
        },
      ]));

    const locations =
      addLocations &&
      (await Location.bulkCreate([
        {
          locationName: 'Central Park',
          locationDescription: 'A large public park in New York City.',
        },
        {
          locationName: 'Louvre Museum',
          locationDescription:
            'The world’s largest art museum located in Paris, France.',
        },
        {
          locationName: 'Sydney Opera House',
          locationDescription:
            'A multi-venue performing arts centre in Sydney, Australia.',
        },
      ]));

    const events =
      addEvents &&
      (await Event.bulkCreate([
        {
          title: 'Concert at Central Park',
          description: 'A large concert at Central Park in New York City.',
          locationId: 1, // Assuming this corresponds to an existing ubicacionId in the Location table
          eventDay: 10,
          hourStart: '10:00',
          hourEnd: '12:00',
        },
        {
          title: 'Louvre Art Exhibition',
          description:
            'A special art exhibition at the Louvre Museum in Paris.',
          locationId: 2, // Assuming this corresponds to an existing ubicacionId in the Location table
          eventDay: 11,
          hourStart: '10:00',
          hourEnd: '12:00',
        },
        {
          title: 'Sydney Opera House Tour',
          description: 'A guided tour of the Sydney Opera House.',
          locationId: 3, // Assuming this corresponds to an existing ubicacionId in the Location table
          eventDay: 12,
          hourStart: '10:00',
          hourEnd: '12:00',
        },
        {
          title: 'Rally at Central Park',
          description: 'A large rally at Central Park in New York City.',
          locationId: 1, // Assuming this corresponds to an existing ubicacionId in the Location table
          eventDay: 10,
          hourStart: '10:00',
          hourEnd: '12:00',
        },
        {
          title: 'Louvre Live Performance',
          description: 'A live performance at the Louvre Museum in Paris.',
          locationId: 2, // Assuming this corresponds to an existing ubicacionId in the Location table
          eventDay: 11,
          hourStart: '12:00',
          hourEnd: '14:00',
        },
        {
          title: 'Sydney Opera House - Hanz Zimmermann Meet & Greet',
          description:
            'A meet and greet with Hanz Zimmermann at the Sydney Opera House.',
          locationId: 3, // Assuming this corresponds to an existing ubicacionId in the Location table
          eventDay: 12,
          hourStart: '11:00',
          hourEnd: '13:00',
        },
      ]));

    const eventSpeaker =
      addEventSpakers &&
      (await EventSpeaker.bulkCreate([
        {
          eventId: 1,
          speakerId: 1,
        },
        {
          eventId: 1,
          speakerId: 2,
        },
        {
          eventId: 2,
          speakerId: 2,
        },
        {
          eventId: 3,
          speakerId: 2,
        },
        {
          eventId: 3,
          speakerId: 3,
        },
        {
          eventId: 4,
          speakerId: 1,
        },
        { eventId: 4, speakerId: 2 },
        { eventId: 4, speakerId: 3 },
        { eventId: 5, speakerId: 2 },
        { eventId: 6, speakerId: 1 },
        { eventId: 6, speakerId: 3 },
      ]));

    res.json({ locations, events, speakers, eventSpeaker, faqs });
  } catch (error) {
    console.error('Error creating FAQ:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
export default faqRouter;
