import { Router } from 'express';
import Event from '../models/EVENT';
import EventSpeaker from '../models/EVENTSPEAKER';
import Faq from '../models/FAQ';
import Location from '../models/LOCATION';
import Speaker from '../models/SPEAKER';

const pushRouter = Router();

const createLocations = async () => {
  await Location.destroy({ where: {} });
  const locations = [
    {
      locationId: 1,
      locationName: 'CIT - Plaza Dra. Isabel Gutiérrez de Bosch',
      locationDescription:
        'https://app.mappedin.com/map/66b14e6126fe2b000a5045d0?embedded=true&location=s_6d7c401af6887089&floor=m_04ddd3f2bc46225d',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      locationId: 2,
      locationName: 'Plaza Paiz Riera',
      locationDescription:
        'https://app.mappedin.com/map/66b14e6126fe2b000a5045d0?embedded=true&location=s_1806094cec884bec&floor=m_04ddd3f2bc46225d',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      locationId: 3,
      locationName: 'I - 100',
      locationDescription:
        'https://app.mappedin.com/map/66b14e6126fe2b000a5045d0?embedded=true&location=s_0fe313ef6dd17ca7&floor=m_04ddd3f2bc46225d',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      locationId: 4,
      locationName: 'CIT - 727',
      locationDescription:
        'https://app.mappedin.com/map/66b14e6126fe2b000a5045d0?embedded=true&location=s_338fc9e8f0f2b41a&floor=m_e0ea228765fb86c2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      locationId: 5,
      locationName: 'CIT - 705',
      locationDescription:
        'https://app.mappedin.com/map/66b14e6126fe2b000a5045d0?embedded=true&location=s_cc37751ef53238a6+s_c32a988a328bef42&floor=m_e0ea228765fb86c2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      locationId: 6,
      locationName: 'Terraza Cardenal, Zona 10',
      locationDescription:
        'https://www.google.com/maps/@14.5766146,-90.5163323,14z?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      locationId: 7,
      locationName: 'F - 101',
      locationDescription:
        'https://app.mappedin.com/map/66b14e6126fe2b000a5045d0?embedded=true&floor=m_04ddd3f2bc46225d&location=s_19e743deddb07272',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await Location.bulkCreate(locations);
};

const createEvents = async () => {
  await Event.destroy({ where: {} });
  const events = [
    // Day 1 events
    {
      eventId: 1,
      title: 'Acto Inaugural',
      description: 'Acto Inaugural',
      eventDay: 1,
      hourStart: '08:00',
      hourEnd: '09:00',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 3,
      title: 'Presentación Cultural',
      description: 'Presentada por el Instituto Guatemalteco de Turismo',
      eventDay: 1,
      hourStart: '09:00',
      hourEnd: '09:30',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 4,
      title: 'Keynote 1',
      description: 'Keynote 1',
      eventDay: 1,
      hourStart: '09:30',
      hourEnd: '10:00',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 5,
      title: 'Panel 1',
      description:
        'Sostenibilidad en las Políticas Espaciales de Países Emergentes',
      eventDay: 1,
      hourStart: '10:00',
      hourEnd: '10:45',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 6,
      title: 'Coffee Break',
      description: 'Coffee Break',
      eventDay: 1,
      hourStart: '10:45',
      hourEnd: '11:00',
      locationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 7,
      title: 'Análogos 1',
      description: 'Sesión 1',
      eventDay: 1,
      hourStart: '11:00',
      hourEnd: '12:00',
      locationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 8,
      title: 'Astronomía 1',
      description: 'Sesión 2',
      eventDay: 1,
      hourStart: '11:00',
      hourEnd: '12:00',
      locationId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 9,
      title: 'Divulgación 1',
      description: 'Sesión 3',
      eventDay: 1,
      hourStart: '11:00',
      hourEnd: '12:00',
      locationId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 10,
      title: 'Educación 1',
      description: 'Sesión 4',
      eventDay: 1,
      hourStart: '11:00',
      hourEnd: '12:00',
      locationId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 11,
      title: 'Almuerzo',
      description: 'En cafetería del CIT',
      eventDay: 1,
      hourStart: '12:00',
      hourEnd: '13:00',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 12,
      title: 'Satélites 1',
      description: 'Sesión 5',
      eventDay: 1,
      hourStart: '13:00',
      hourEnd: '13:30',
      locationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 13,
      title: 'Robótica Espacial 1',
      description: 'Sesión 6',
      eventDay: 1,
      hourStart: '13:00',
      hourEnd: '13:30',
      locationId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 14,
      title: 'Divulgación 2',
      description: 'Sesión 7',
      eventDay: 1,
      hourStart: '13:00',
      hourEnd: '13:30',
      locationId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 15,
      title: 'Microbiología Espacial 1',
      description: 'Sesión 8',
      eventDay: 1,
      hourStart: '13:00',
      hourEnd: '13:30',
      locationId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 16,
      title: 'Panel 2',
      description: 'Latinoamericanos Alcanzando el Espacio',
      eventDay: 1,
      hourStart: '13:45',
      hourEnd: '14:15',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 17,
      title: 'Análogos 2',
      description: 'Sesión 9',
      eventDay: 1,
      hourStart: '14:30',
      hourEnd: '15:30',
      locationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 18,
      title: 'Cohetería 1',
      description: 'Sesión 10',
      eventDay: 1,
      hourStart: '14:30',
      hourEnd: '15:30',
      locationId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 19,
      title: 'Sensado Remoto 1',
      description: 'Sesión 11',
      eventDay: 1,
      hourStart: '14:30',
      hourEnd: '15:30',
      locationId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 20,
      title: 'Educación 2',
      description: 'Sesión 12',
      eventDay: 1,
      hourStart: '14:30',
      hourEnd: '15:30',
      locationId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 21,
      title: 'Coffee Break',
      description: 'En cafetería del CIT',
      eventDay: 1,
      hourStart: '15:30',
      hourEnd: '15:45',
      locationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 22,
      title: 'Análogos 3',
      description: 'Sesión 13',
      eventDay: 1,
      hourStart: '15:45',
      hourEnd: '17:00',
      locationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 23,
      title: 'Cohetería 2',
      description: 'Sesión 14',
      eventDay: 1,
      hourStart: '15:45',
      hourEnd: '17:00',
      locationId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 24,
      title: 'Educación 3',
      description: 'Sesión 15',
      eventDay: 1,
      hourStart: '15:45',
      hourEnd: '17:00',
      locationId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 25,
      title: 'Hábitats',
      description: 'Sesión 16',
      eventDay: 1,
      hourStart: '15:45',
      hourEnd: '17:00',
      locationId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 26,
      title: 'Panel 3',
      description: 'Panel 3',
      eventDay: 1,
      hourStart: '17:15',
      hourEnd: '18:00',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 27,
      title: 'Recepción de Bienvenida',
      description: 'Recepción de Bienvenida',
      eventDay: 1,
      hourStart: '18:00',
      hourEnd: '19:00',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 28,
      title: "Yuri's Night",
      description: 'No es un evento oficial del CEC',
      eventDay: 1,
      hourStart: '20:00',
      hourEnd: '23:59',
      locationId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Day 2 events
    {
      eventId: 29,
      title: 'Keynote 2',
      description: 'Keynote 2',
      eventDay: 2,
      hourStart: '09:00',
      hourEnd: '09:30',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 30,
      title: 'Panel 4',
      description: 'Panel 4',
      eventDay: 2,
      hourStart: '09:30',
      hourEnd: '10:15',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 31,
      title: 'Análogos 4',
      description: 'Sesión 17',
      eventDay: 2,
      hourStart: '10:15',
      hourEnd: '11:00',
      locationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 32,
      title: 'Astronomía 2',
      description: 'Sesión 18',
      eventDay: 2,
      hourStart: '11:00',
      hourEnd: '11:45',
      locationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 33,
      title: 'Divulgación 3',
      description: 'Sesión 19',
      eventDay: 2,
      hourStart: '11:45',
      hourEnd: '12:30',
      locationId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 34,
      title: 'Educación 4',
      description: 'Sesión 20',
      eventDay: 2,
      hourStart: '12:30',
      hourEnd: '13:15',
      locationId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 35,
      title: 'Hábitats 2',
      description: 'Sesión 21',
      eventDay: 2,
      hourStart: '13:15',
      hourEnd: '14:00',
      locationId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 36,
      title: 'Análogos 5',
      description: 'Sesión 22',
      eventDay: 2,
      hourStart: '14:00',
      hourEnd: '14:45',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 37,
      title: 'Cohetería 3',
      description: 'Sesión 23',
      eventDay: 2,
      hourStart: '14:45',
      hourEnd: '15:30',
      locationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 38,
      title: 'Sensado Remoto 2',
      description: 'Sesión 24',
      eventDay: 2,
      hourStart: '15:30',
      hourEnd: '16:15',
      locationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 39,
      title: 'Panel 5',
      description: 'Panel 5',
      eventDay: 2,
      hourStart: '16:15',
      hourEnd: '17:00',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 40,
      title: 'Hábitats 3',
      description: 'Sesión 25',
      eventDay: 2,
      hourStart: '17:00',
      hourEnd: '17:45',
      locationId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 41,
      title: 'Educación 5',
      description: 'Sesión 26',
      eventDay: 2,
      hourStart: '17:45',
      hourEnd: '18:30',
      locationId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 42,
      title: 'Salud/Medicina 1',
      description: 'Sesión 27',
      eventDay: 2,
      hourStart: '18:30',
      hourEnd: '19:15',
      locationId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 43,
      title: 'Salud/Medicina 2',
      description: 'Sesión 28',
      eventDay: 2,
      hourStart: '19:15',
      hourEnd: '20:00',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 48,
      title: 'Keynote 4',
      description: 'Keynote 4',
      eventDay: 3,
      hourStart: '9:00',
      hourEnd: '9:30',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 49,
      title: 'Mujeres en el Espacio',
      description: 'Panel 6',
      eventDay: 3,
      hourStart: '9:30',
      hourEnd: '10:00',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 50,
      title: 'Proyectos Espaciales en la Región: Presente, Pasado y Futuro',
      description: 'Panel 7',
      eventDay: 3,
      hourStart: '10:00',
      hourEnd: '10:45',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 51,
      title: 'Coffee Break',
      description: 'En cafetería del CIT',
      eventDay: 3,
      hourStart: '10:45',
      hourEnd: '11:00',
      locationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 52,
      title: 'Keynote 5',
      description: 'Keynote 5',
      eventDay: 3,
      hourStart: '11:00',
      hourEnd: '11:30',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      eventId: 53,
      title: 'Acto de Clausura',
      description: 'Acto de Clausura',
      eventDay: 3,
      hourStart: '11:30',
      hourEnd: '12:15',
      locationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await Event.bulkCreate(events);
};

const createFaqs = async () => {
  await Faq.destroy({ where: {} });
  const faqs = [
    {
      faqId: 1,
      question: '¿Cuál es el horario del evento?',
      answer:
        'El evento inicia a las 8:00 AM del día 1 y termina a las 8:00 PM del día 2.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      faqId: 2,
      question: '¿Cuál es el lugar del evento?',
      answer:
        'El evento se llevará a cabo en el Centro de Investigación y Tecnología (CIT) de la Universidad Francisco Marroquín (UFM).',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      faqId: 3,
      question: '¿Cuáles son los temas del evento?',
      answer:
        'Los temas del evento incluyen astronomía, divulgación científica, educación, hábitats, microbiología espacial, panel de discusión, robótica espacial, salud y medicina, sensado remoto, y tecnología espacial.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      faqId: 4,
      question: '¿Cuál es el costo del evento?',
      answer: 'El evento es gratuito y abierto al público en general.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      faqId: 5,
      question: '¿Cómo puedo participar en el evento?',
      answer:
        'Puedes participar en el evento registrándote a través de nuestra página web.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      faqId: 6,
      question: '¿Cuáles son los requisitos para participar en el evento?',
      answer: 'No hay requisitos específicos para participar en el evento.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      faqId: 7,
      question: '¿Cuáles son los beneficios de participar en el evento?',
      answer:
        'Los beneficios de participar en el evento incluyen la oportunidad de aprender sobre temas de ciencia y tecnología, interactuar con expertos en el campo, y disfrutar de actividades recreativas y culturales.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      faqId: 8,
      question: '¿Cuáles son las actividades del evento?',
      answer:
        'Las actividades del evento incluyen charlas, paneles de discusión, talleres, exposiciones, y actividades recreativas y culturales.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      faqId: 9,
      question: '¿Cuáles son los oradores invitados del evento?',
      answer:
        'Los oradores invitados del evento incluyen a expertos en ciencia y tecnología de renombre internacional.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      faqId: 10,
      question: '¿Cuáles son los patrocinadores del evento?',
      answer:
        'Los patrocinadores del evento incluyen a empresas y organizaciones comprometidas con la promoción de la ciencia y la tecnología.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await Faq.bulkCreate(faqs);
};

const createSpeakers = async () => {
  await Speaker.destroy({ where: {} });
  const speakers = [
    {
      speakerId: 1,
      speakerName: 'Rector UVG, M. A. Roberto Moreno Godoy',
      speakerDescription: 'Rector of Universidad del Valle de Guatemala',
      speakerImage:
        'https://nomada.gt/wp-content/uploads/2019/10/2019-08-02-RECTOR-UV-ROBERTO-MORENO-GODOY-005.jpg',
      country: 'Guatemala',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 2,
      speakerName: 'Luis Zea',
      speakerDescription: 'Space Expert and Member of CEC Committee',
      speakerImage:
        'https://www.prensalibre.com/wp-content/uploads/2021/09/Luis-Zea-foto-Brenda-Martinez.jpg?quality=52&w=760&h=430&crop=1',
      country: 'Guatemala',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 3,
      speakerName: 'Comité Organizador',
      speakerDescription: 'Organizing Committee of the Event',
      speakerImage:
        'https://i.ibb.co/RNMjy96/Screenshot-2024-09-18-at-6-53-05-PM.png',
      country: 'Guatemala',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 4,
      speakerName: 'Dra. Gabriela Montenegro',
      speakerDescription: 'Expert in Space Nutrition and Science',
      speakerImage:
        'https://guategram.com/wp-content/uploads/2023/03/guatemala-gabriela-montenegro-800x430.jpg',
      country: 'Guatemala',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 5,
      speakerName: 'Guatemala - INGUAT',
      speakerDescription: 'National Tourism Institute of Guatemala',
      speakerImage:
        'https://media.licdn.com/dms/image/v2/D4E0BAQGYBPrayaDGZw/company-logo_200_200/company-logo_200_200/0/1707407197932/inguatgt_logo?e=1734566400&v=beta&t=Wz8GtIfTe0-BtLFUkOrSr9ifguz_dvrMzCd1dlTCYoI',
      country: 'Guatemala',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 6,
      speakerName: 'Maximo Roa (DLR)',
      speakerDescription: 'Researcher at the German Aerospace Center (DLR)',
      speakerImage:
        'https://rmc.dlr.de/rm/de/staff/extcms/media/contentbuilder/plugins/image_scale/cache/6/Roa_Garzon_Maximo_0J4A8427_-_Webpage_200x0_cbresized.jpeg',
      country: 'Germany',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 7,
      speakerName: 'AGICE',
      speakerDescription:
        'Asosiación Guatemalteca de Ingeniería y Ciencias Espaciales',
      speakerImage:
        'https://media.licdn.com/dms/image/C4D0BAQH90ku-b4eZmg/company-logo_200_200/0/1675930450880/agice_gt_logo?e=2147483647&v=beta&t=uUwAPc2FoXQ8T7PqF98EpyL9AzhQmAEdYbGQQPrxn5E',
      country: 'Guatemala',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 8,
      speakerName: 'BeyondSight',
      speakerDescription: 'Representatives from AGICE and BeyondSight',
      speakerImage:
        'https://ugc.production.linktr.ee/7aa49f5b-cad3-4e68-aaae-2f01b19065b6_pfpBYS.jpeg?io=true&size=avatar-v3_0',
      country: 'Guatemala',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 9,
      speakerName: 'Sandra Cauffmann (NASA)',
      speakerDescription: 'NASA Deputy Director',
      speakerImage:
        'https://efeminista.com/wp-content/uploads/2022/09/sandra-cauffman-nasa-estereotipos-e1663767470122-700x466.jpeg',
      country: 'USA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 10,
      speakerName: 'Kyouchi Arakane (JAXA)',
      speakerDescription: 'JAXA Representative',
      speakerImage:
        'https://media.licdn.com/dms/image/C5603AQEhPMP5B7bcJQ/profile-displayphoto-shrink_800_800/0/1648528397761?e=2147483647&v=beta&t=NDUKlyWhO6VinrwP0A0BFpHkWc4Xfa6-W8s5fZ-K9kI',
      country: 'Japan',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 11,
      speakerName: "Akabxpal Yata'z",
      speakerDescription: 'Speaker on Indigenous Perspectives in Space',
      speakerImage:
        'https://media.licdn.com/dms/image/C4D03AQH5LBuEEkWwMw/profile-displayphoto-shrink_800_800/0/1664256005349?e=2147483647&v=beta&t=J6TxbmDIgy79MoBgm8tEPA-hEHk5IIFi-wkX7GWsL5c',
      country: 'Guatemala',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 12,
      speakerName: 'Jason Reimuller',
      speakerDescription: 'Space Researcher and Educator',
      speakerImage:
        'https://www.spacefoundation.org/wp-content/uploads/2021/01/Jason_wp.jpg',
      country: 'USA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      speakerId: 13,
      speakerName: 'Universales, Reorbit, IIAS',
      speakerDescription: 'Space and Science Collaborators',
      speakerImage:
        'https://camacoes.org.gt/wp-content/uploads/2022/12/logo-seguros-universales.jpg',
      country: 'Various',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await Speaker.bulkCreate(speakers);
};

const createEventSpeakers = async () => {
  await EventSpeaker.destroy({ where: {} });
  const eventSpeakers = [
    { eventId: 1, speakerId: 1 },
    { eventId: 3, speakerId: 5 },
    { eventId: 4, speakerId: 2 },
    { eventId: 29, speakerId: 4 },
    { eventId: 48, speakerId: 6 },
    { eventId: 52, speakerId: 9 },
    { eventId: 5, speakerId: 10 },
    { eventId: 16, speakerId: 11 },
    { eventId: 26, speakerId: 12 },
    { eventId: 30, speakerId: 2 },
    { eventId: 39, speakerId: 10 },
    { eventId: 28, speakerId: 7 },
    { eventId: 1, speakerId: 3 },
    { eventId: 28, speakerId: 8 },
  ];
  await EventSpeaker.bulkCreate(eventSpeakers);
};

// New route that calls all functions
pushRouter.post('/all', async (req, res) => {
  try {
    await createLocations();
    await createEvents();
    await createFaqs();
    await createSpeakers();
    await createEventSpeakers();
    res.status(200).json({ message: 'All data created successfully' });
  } catch (error) {
    console.error('Error creating all data:', error);
    res.status(500).json({ error: 'Failed to create all data' });
  }
});

// Original routes with their business logic
pushRouter.post('/locations', async (req, res) => {
  try {
    await createLocations();
    res.status(200).json({ message: 'All locations created successfully' });
  } catch (error) {
    console.error('Error creating locations:', error);
    res.status(500).json({ error: 'Failed to create locations' });
  }
});

pushRouter.post('/events', async (req, res) => {
  try {
    await createEvents();
    res.status(200).json({ message: 'All events created successfully' });
  } catch (error) {
    console.error('Error creating events:', error);
    res.status(500).json({ error: 'Failed to create events' });
  }
});

pushRouter.post('/faqs', async (req, res) => {
  try {
    await createFaqs();
    res.status(200).json({ message: 'All FAQs created successfully' });
  } catch (error) {
    console.error('Error creating FAQs:', error);
    res.status(500).json({ error: 'Failed to create FAQs' });
  }
});

pushRouter.post('/speakers', async (req, res) => {
  try {
    await createSpeakers();
    res.status(200).json({ message: 'All speakers created successfully' });
  } catch (error) {
    console.error('Error creating speakers:', error);
    res.status(500).json({ error: 'Failed to create speakers' });
  }
});

pushRouter.post('/event-speakers', async (req, res) => {
  try {
    await createEventSpeakers();
    res
      .status(200)
      .json({ message: 'All event speakers created successfully' });
  } catch (error) {
    console.error('Error creating event speakers:', error);
    res.status(500).json({ error: 'Failed to create event speakers' });
  }
});

export default pushRouter;
