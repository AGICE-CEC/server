'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'EVENT',
      [
        {
          eventId: 1,
          title: 'Acto Inaugural',
          description: null,
          eventDay: 1,
          hourStart: '8:00',
          hourEnd: '9:00',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          title: 'Acto Inaugural',
          description: 'Bienvenida a UVG',
          eventDay: 1,
          hourStart: '8:30',
          hourEnd: '8:45',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          title: 'Acto Inaugural',
          description: 'Bienvenida al CEC',
          eventDay: 1,
          hourStart: '8:45',
          hourEnd: '8:50',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          title: 'Acto Inaugural',
          description: 'Video Historia Espacial Guatemalteca',
          eventDay: 1,
          hourStart: '8:50',
          hourEnd: '8:55',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          title: 'Acto Inaugural',
          description: 'Importancia de la Ciencia y Tecnología para Guatemala',
          eventDay: 1,
          hourStart: '8:55',
          hourEnd: '9:00',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          title: 'Presentación Cultural',
          description: null,
          eventDay: 1,
          hourStart: '9:00',
          hourEnd: '9:30',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          title: 'Keynote 1',
          description: null,
          eventDay: 1,
          hourStart: '9:30',
          hourEnd: '10:00',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
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
          eventId: 9,
          title: 'Coffee Break',
          description: null,
          eventDay: 1,
          hourStart: '10:45',
          hourEnd: '11:00',
          locationId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          title: 'Sesión 1',
          description: 'Análogos 1',
          eventDay: 1,
          hourStart: '11:00',
          hourEnd: '12:00',
          locationId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          title: 'Sesión 2',
          description: 'Astronomía 1',
          eventDay: 1,
          hourStart: '11:00',
          hourEnd: '12:00',
          locationId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 12,
          title: 'Sesión 3',
          description: 'Divulgación 1',
          eventDay: 1,
          hourStart: '11:00',
          hourEnd: '12:00',
          locationId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          title: 'Sesión 4',
          description: 'Educación 1',
          eventDay: 1,
          hourStart: '11:00',
          hourEnd: '12:00',
          locationId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 14,
          title: 'Almuerzo',
          description: null,
          eventDay: 1,
          hourStart: '12:00',
          hourEnd: '13:00',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 15,
          title: 'Sesión 5',
          description: 'Satélites 1',
          eventDay: 1,
          hourStart: '13:00',
          hourEnd: '13:30',
          locationId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 16,
          title: 'Sesión 6',
          description: 'Robótica Espacial 1',
          eventDay: 1,
          hourStart: '13:00',
          hourEnd: '13:30',
          locationId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 17,
          title: 'Sesión 7',
          description: 'Divulgación 2',
          eventDay: 1,
          hourStart: '13:00',
          hourEnd: '13:30',
          locationId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 18,
          title: 'Sesión 8',
          description: 'Microbiología Espacial 1',
          eventDay: 1,
          hourStart: '13:00',
          hourEnd: '13:30',
          locationId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 19,
          title: 'Transición',
          description: null,
          eventDay: 1,
          hourStart: '13:30',
          hourEnd: '13:45',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 20,
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
          eventId: 21,
          title: 'Transición',
          description: null,
          eventDay: 1,
          hourStart: '14:15',
          hourEnd: '14:30',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 22,
          title: 'Sesión 9',
          description: 'Análogos 2',
          eventDay: 1,
          hourStart: '14:30',
          hourEnd: '15:30',
          locationId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 23,
          title: 'Sesión 10',
          description: 'Cohetería 1',
          eventDay: 1,
          hourStart: '14:30',
          hourEnd: '15:30',
          locationId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 24,
          title: 'Sesión 11',
          description: 'Sensado Remoto 1',
          eventDay: 1,
          hourStart: '14:30',
          hourEnd: '15:30',
          locationId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 25,
          title: 'Sesión 12',
          description: 'Educación 2',
          eventDay: 1,
          hourStart: '14:30',
          hourEnd: '15:30',
          locationId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 26,
          title: 'Coffee Break',
          description: null,
          eventDay: 1,
          hourStart: '15:30',
          hourEnd: '15:45',
          locationId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 27,
          title: 'Sesión 13',
          description: 'Análogos 3',
          eventDay: 1,
          hourStart: '15:45',
          hourEnd: '17:00',
          locationId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 28,
          title: 'Sesión 14',
          description: 'Cohetería 2',
          eventDay: 1,
          hourStart: '15:45',
          hourEnd: '17:00',
          locationId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 29,
          title: 'Sesión 15',
          description: 'Educación 3',
          eventDay: 1,
          hourStart: '15:45',
          hourEnd: '17:00',
          locationId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 30,
          title: 'Sesión 16',
          description: 'Hábitats',
          eventDay: 1,
          hourStart: '15:45',
          hourEnd: '17:00',
          locationId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 31,
          title: 'Transición',
          description: null,
          eventDay: 1,
          hourStart: '17:00',
          hourEnd: '17:15',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 32,
          title: 'Panel 3',
          description: 'Pequeños Sistemas Espaciales, Grandes Misiones',
          eventDay: 1,
          hourStart: '17:15',
          hourEnd: '18:00',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 33,
          title: 'Recepción de Bienvenida',
          description: null,
          eventDay: 1,
          hourStart: '18:00',
          hourEnd: '19:00',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 34,
          title: "Yuri's Night",
          description: 'No es un evento oficial del CEC',
          eventDay: 1,
          hourStart: '20:00',
          hourEnd: '23:59',
          locationId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 35,
          title: 'Keynote 4',
          description: null,
          eventDay: 3,
          hourStart: '9:00',
          hourEnd: '9:30',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      {
        eventId: 36,
        title: 'Panel 6',
        description: 'Mujeres en el Espacio',
        eventDay: 3,
        hourStart: '9:30',
        hourEnd: '10:00',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 37,
        title: 'Panel 7',
        description:
          'Proyectos Espaciales en la Región: Presente, Pasado y Futuro',
        eventDay: 3,
        hourStart: '10:00',
        hourEnd: '10:45',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 38,
        title: 'Coffee Break',
        description: null,
        eventDay: 3,
        hourStart: '10:45',
        hourEnd: '11:00',
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 39,
        title: 'Keynote 5',
        description: null,
        eventDay: 3,
        hourStart: '11:00',
        hourEnd: '11:30',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 40,
        title: 'Acto de Clausura',
        description: 'Intro al evento',
        eventDay: 3,
        hourStart: '11:30',
        hourEnd: '12:15',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 41,
        title: 'Acto de Clausura',
        description: 'Patrocinadores',
        eventDay: 3,
        hourStart: '11:30',
        hourEnd: '12:15',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 42,
        title: 'Acto de Clausura',
        description: 'Awards',
        eventDay: 3,
        hourStart: '11:30',
        hourEnd: '12:15',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 43,
        title: 'Acto de Clausura',
        description: 'Marimba UVG',
        eventDay: 3,
        hourStart: '11:30',
        hourEnd: '12:15',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 44,
        title: 'Acto de Clausura',
        description: 'Palabras de Cierre',
        eventDay: 3,
        hourStart: '11:30',
        hourEnd: '12:15',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 45,
        title: 'Keynote 2',
        description: null,
        eventDay: 2,
        hourStart: '09:00',
        hourEnd: '09:30',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 46,
        title: 'Panel 4',
        description: null,
        eventDay: 2,
        hourStart: '09:30',
        hourEnd: '10:15',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 47,
        title: 'Sesión 17',
        description: null,
        eventDay: 2,
        hourStart: '10:15',
        hourEnd: '11:00',
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 48,
        title: 'Sesión 18',
        description: null,
        eventDay: 2,
        hourStart: '11:00',
        hourEnd: '11:45',
        locationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 49,
        title: 'Sesión 19',
        description: null,
        eventDay: 2,
        hourStart: '11:45',
        hourEnd: '12:30',
        locationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 50,
        title: 'Sesión 20',
        description: null,
        eventDay: 2,
        hourStart: '12:30',
        hourEnd: '13:15',
        locationId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 51,
        title: 'Sesión 21',
        description: null,
        eventDay: 2,
        hourStart: '13:15',
        hourEnd: '14:00',
        locationId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 52,
        title: 'Sesión 22',
        description: null,
        eventDay: 2,
        hourStart: '14:00',
        hourEnd: '14:45',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 53,
        title: 'Sesión 23',
        description: null,
        eventDay: 2,
        hourStart: '14:45',
        hourEnd: '15:30',
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 54,
        title: 'Sesión 24',
        description: null,
        eventDay: 2,
        hourStart: '15:30',
        hourEnd: '16:15',
        locationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 55,
        title: 'Panel 5',
        description: null,
        eventDay: 2,
        hourStart: '16:15',
        hourEnd: '17:00',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 56,
        title: 'Sesión 25',
        description: null,
        eventDay: 2,
        hourStart: '17:00',
        hourEnd: '17:45',
        locationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 57,
        title: 'Sesión 26',
        description: null,
        eventDay: 2,
        hourStart: '17:45',
        hourEnd: '18:30',
        locationId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 58,
        title: 'Sesión 27',
        description: null,
        eventDay: 2,
        hourStart: '18:30',
        hourEnd: '19:15',
        locationId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 59,
        title: 'Sesión 28',
        description: null,
        eventDay: 2,
        hourStart: '19:15',
        hourEnd: '20:00',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 60,
        title: 'Sesión 29',
        description: null,
        eventDay: 2,
        hourStart: '20:00',
        hourEnd: '20:45',
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 61,
        title: 'Sesión 30',
        description: null,
        eventDay: 2,
        hourStart: '20:45',
        hourEnd: '21:30',
        locationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 62,
        title: 'Keynote 3',
        description: null,
        eventDay: 2,
        hourStart: '21:30',
        hourEnd: '22:00',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 63,
        title: 'Cena VIP',
        description: null,
        eventDay: 2,
        hourStart: '22:00',
        hourEnd: '23:00',
        locationId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('EVENT', null, {});
  },
};
