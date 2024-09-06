import { Router } from 'express';
import Faq from '../models/FAQ';
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

  return res.status(200).json({ message: 'FAQs created' });
});

export default pushRouter;
