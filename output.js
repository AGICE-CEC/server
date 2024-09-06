const events = [
  {
    eventId: 1,
    title: 'Acto Inaugural',
    eventDay: 10,
    hourStart: '08:00',
    hourEnd: '09:00',
    locationIdNumber: 1,
  },
  {
    eventId: 2,
    title: 'Presentación Cultural',
    eventDay: 10,
    hourStart: '09:00',
    hourEnd: '09:30',
    locationIdNumber: 1,
  },
  {
    eventId: 3,
    title: 'Keynote 1',
    eventDay: 10,
    hourStart: '09:30',
    hourEnd: '10:00',
    locationIdNumber: 1,
  },
  {
    eventId: 4,
    title: 'Sostenibilidad en las Políticas Espaciales de Países Emergentes',
    description: 'Panel 1',
    eventDay: 10,
    hourStart: '10:00',
    hourEnd: '10:45',
    locationIdNumber: 1,
  },
  {
    eventId: 5,
    title: 'Coffee Break',
    eventDay: 10,
    hourStart: '10:45',
    hourEnd: '11:00',
    locationIdNumber: 2,
  },
  {
    eventId: 6,
    title: 'Análogos 1',
    description: 'Sesión 1',
    eventDay: 10,
    hourStart: '11:00',
    hourEnd: '12:00',
    locationIdNumber: 3,
  },
  {
    eventId: 7,
    title: 'Astronomía 1',
    description: 'Sesión 2',
    eventDay: 10,
    hourStart: '11:00',
    hourEnd: '12:00',
    locationIdNumber: 4,
  },
  {
    eventId: 8,
    title: 'Divulgación 1',
    description: 'Sesión 3',
    eventDay: 10,
    hourStart: '11:00',
    hourEnd: '12:00',
    locationIdNumber: 5,
  },
  {
    eventId: 9,
    title: 'Educación 1',
    description: 'Sesión 4',
    eventDay: 10,
    hourStart: '11:00',
    hourEnd: '12:00',
    locationIdNumber: 6,
  },
  {
    eventId: 10,
    title: 'Satélites 1',
    description: 'Sesión 5',
    eventDay: 10,
    hourStart: '13:00',
    hourEnd: '13:30',
    locationIdNumber: 3,
  },
  {
    eventId: 11,
    title: 'Robótica Espacial 1',
    description: 'Sesión 6',
    eventDay: 10,
    hourStart: '13:00',
    hourEnd: '13:30',
    locationIdNumber: 4,
  },
  {
    eventId: 12,
    title: 'Divulgación 2',
    description: 'Sesión 7',
    eventDay: 10,
    hourStart: '13:00',
    hourEnd: '13:30',
    locationIdNumber: 5,
  },
  {
    eventId: 13,
    title: 'Microbiología Espacial 1',
    description: 'Sesión 8',
    eventDay: 10,
    hourStart: '13:00',
    hourEnd: '13:30',
    locationIdNumber: 6,
  },
  {
    eventId: 14,
    title: 'Latinoamericanos Alcanzando el Espacio',
    description: 'Panel 2',
    eventDay: 10,
    hourStart: '13:45',
    hourEnd: '14:15',
    locationIdNumber: 1,
  },
  {
    eventId: 15,
    title: 'Análogos 2',
    description: 'Sesión 9',
    eventDay: 10,
    hourStart: '14:30',
    hourEnd: '15:30',
    locationIdNumber: 3,
  },
  {
    eventId: 16,
    title: 'Cohetería 1',
    description: 'Sesión 10',
    eventDay: 10,
    hourStart: '14:30',
    hourEnd: '15:30',
    locationIdNumber: 4,
  },
  {
    eventId: 17,
    title: 'Sensado Remoto 1',
    description: 'Sesión 11',
    eventDay: 10,
    hourStart: '14:30',
    hourEnd: '15:30',
    locationIdNumber: 5,
  },
  {
    eventId: 18,
    title: 'Educación 2',
    description: 'Sesión 12',
    eventDay: 10,
    hourStart: '14:30',
    hourEnd: '15:30',
    locationIdNumber: 6,
  },
  {
    eventId: 19,
    title: 'Coffee Break',
    eventDay: 10,
    hourStart: '15:30',
    hourEnd: '15:45',
    locationIdNumber: 2,
  },
  {
    eventId: 20,
    title: 'Análogos 3',
    description: 'Sesión 13',
    eventDay: 10,
    hourStart: '15:45',
    hourEnd: '17:00',
    locationIdNumber: 3,
  },
  {
    eventId: 21,
    title: 'Cohetería 2',
    description: 'Sesión 14',
    eventDay: 10,
    hourStart: '15:45',
    hourEnd: '17:00',
    locationIdNumber: 4,
  },
  {
    eventId: 22,
    title: 'Educación 3',
    description: 'Sesión 15',
    eventDay: 10,
    hourStart: '15:45',
    hourEnd: '17:00',
    locationIdNumber: 5,
  },
  {
    eventId: 23,
    title: 'Hábitats',
    description: 'Sesión 16',
    eventDay: 10,
    hourStart: '15:45',
    hourEnd: '17:00',
    locationIdNumber: 6,
  },
  {
    eventId: 24,
    title: 'Pequeños Sistemas Espaciales, Grandes Misiones',
    description: 'Panel 3',
    eventDay: 10,
    hourStart: '17:15',
    hourEnd: '18:00',
    locationIdNumber: 1,
  },
  {
    eventId: 25,
    title: 'Recepción de Bienvenida',
    eventDay: 10,
    hourStart: '18:00',
    hourEnd: '19:00',
    locationIdNumber: 1,
  },
  {
    eventId: 26,
    title: "Yuri's Night",
    description: 'No es un evento oficial del CEC',
    eventDay: 10,
    hourStart: '20:00',
    hourEnd: '23:59',
    locationIdNumber: 7,
  },
  {
    eventId: 27,
    eventDay: 11,
    hourStart: null,
    hourEnd: null,
  },
  {
    eventId: 28,
    title: 'Keynote 2',
    eventDay: 11,
    hourStart: '09:00',
    hourEnd: '09:30',
    locationIdNumber: 1,
  },
  {
    eventId: 29,
    title: 'Líderes de Agencias Espaciales',
    description: 'Panel 4',
    eventDay: 11,
    hourStart: '09:30',
    hourEnd: '10:45',
    locationIdNumber: 1,
  },
  {
    eventId: 30,
    title: 'Coffee Break',
    eventDay: 11,
    hourStart: '10:45',
    hourEnd: '11:00',
    locationIdNumber: 2,
  },
  {
    eventId: 31,
    title: 'Salud/Medicina 1',
    description: 'Sesión 17',
    eventDay: 11,
    hourStart: '11:00',
    hourEnd: '12:00',
    locationIdNumber: 3,
  },
  {
    eventId: 32,
    title: 'Política Espacial 1',
    description: 'Sesión 18',
    eventDay: 11,
    hourStart: '11:00',
    hourEnd: '12:00',
    locationIdNumber: 4,
  },
  {
    eventId: 33,
    title: 'Robótica Espacial 2',
    description: 'Sesión 19',
    eventDay: 11,
    hourStart: '11:00',
    hourEnd: '12:00',
    locationIdNumber: 5,
  },
  {
    eventId: 34,
    title: 'Satélites 2',
    description: 'Sesión 20',
    eventDay: 11,
    hourStart: '11:00',
    hourEnd: '12:00',
    locationIdNumber: 8,
  },
  {
    eventId: 35,
    title: 'Salud/Medicina 2',
    description: 'Sesión 21',
    eventDay: 11,
    hourStart: '13:00',
    hourEnd: '13:30',
    locationIdNumber: 3,
  },
  {
    eventId: 36,
    title: 'Política Espacial 2',
    description: 'Sesión 22',
    eventDay: 11,
    hourStart: '13:00',
    hourEnd: '13:30',
    locationIdNumber: 4,
  },
  {
    eventId: 37,
    title: 'Tecnología Espacial 1',
    description: 'Sesión 23',
    eventDay: 11,
    hourStart: '13:00',
    hourEnd: '13:30',
    locationIdNumber: 5,
  },
  {
    eventId: 38,
    title: 'Microbiología Espacial 2',
    description: 'Sesión 24',
    eventDay: 11,
    hourStart: '13:00',
    hourEnd: '13:30',
    locationIdNumber: 8,
  },
  {
    eventId: 39,
    title: 'Tecnologías de Exploración Espacial y su Impacto en América Latina',
    description: 'Panel 5',
    eventDay: 11,
    hourStart: '14:00',
    hourEnd: '15:30',
    locationIdNumber: 1,
  },
  {
    eventId: 40,
    title: 'Salud/Medicina 3',
    description: 'Sesión 25',
    eventDay: 11,
    hourStart: '14:00',
    hourEnd: '15:30',
    locationIdNumber: 3,
  },
  {
    eventId: 41,
    title: 'Educación 4',
    description: 'Sesión 26',
    eventDay: 11,
    hourStart: '14:00',
    hourEnd: '15:30',
    locationIdNumber: 4,
  },
  {
    eventId: 42,
    title: 'Tecnología Espacial 2',
    description: 'Sesión 27',
    eventDay: 11,
    hourStart: '14:00',
    hourEnd: '15:30',
    locationIdNumber: 5,
  },
  {
    eventId: 43,
    title: 'Satélites 3',
    description: 'Sesión 28',
    eventDay: 11,
    hourStart: '15:45',
    hourEnd: '17:00',
    locationIdNumber: 8,
  },
  {
    eventId: 44,
    title: 'Coffee Break',
    eventDay: 11,
    hourStart: '15:30',
    hourEnd: '15:45',
    locationIdNumber: 2,
  },
  {
    eventId: 45,
    title: 'Robótica Espacial 3',
    description: 'Sesión 29',
    eventDay: 11,
    hourStart: '15:45',
    hourEnd: '17:00',
    locationIdNumber: 5,
  },
  {
    eventId: 46,
    title: 'Tecnología Espacial 3',
    description: 'Sesión 30',
    eventDay: 11,
    hourStart: '15:45',
    hourEnd: '17:00',
  },
  {
    eventId: 47,
    title: 'Keynote 3',
    eventDay: 11,
    hourStart: '17:15',
    hourEnd: '18:15',
    locationIdNumber: 1,
  },
  {
    eventId: 48,
    title: 'Cena VIP',
    description: 'Sólo por invitación',
    eventDay: 11,
    hourStart: '19:30',
    hourEnd: '20:00',
  },
  {
    eventId: 49,
    title: 'Keynote 4',
    eventDay: 12,
    hourStart: '09:00',
    hourEnd: '09:30',
    locationIdNumber: 1,
  },
  {
    eventId: 50,
    title: 'Mujeres en el Espacio',
    description: 'Panel 6',
    eventDay: 12,
    hourStart: '09:30',
    hourEnd: '10:00',
    locationIdNumber: 1,
  },
  {
    eventId: 51,
    title: 'Proyectos Espaciales en la Región: Presente, Pasado y Futuro',
    description: 'Panel 7',
    eventDay: 12,
    hourStart: '10:00',
    hourEnd: '10:45',
    locationIdNumber: 1,
  },
  {
    eventId: 52,
    title: 'Coffee Break',
    eventDay: 12,
    hourStart: '10:45',
    hourEnd: '11:00',
    locationIdNumber: 2,
  },
  {
    eventId: 53,
    title: 'Keynote 5',
    eventDay: 12,
    hourStart: '11:00',
    hourEnd: '11:30',
    locationIdNumber: 1,
  },
  {
    eventId: 54,
    title: 'Acto de Clausura',
    eventDay: 12,
    hourStart: '11:30',
    hourEnd: '12:15',
    locationIdNumber: 1,
  },
];

Event.bulkCreate(events)
  .then(() => {
    console.log('Events inserted successfully');
  })
  .catch(error => {
    console.error('Error inserting events:', error);
  });
