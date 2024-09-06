'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert(
      'LOCATION',
      [
        {
          locationId: 1,
          locationName: 'CIT - Plaza Dra. Isabel Gutiérrez de Bosch',
          locationDescription: '',
          createdAt: now,
          updatedAt: now,
        },
        {
          locationId: 2,
          locationName: 'Plaza Paiz Riera',
          locationDescription: '',
          createdAt: now,
          updatedAt: now,
        },
        {
          locationId: 3,
          locationName: 'CIT - Plaza',
          locationDescription: '',
          createdAt: now,
          updatedAt: now,
        },
        {
          locationId: 4,
          locationName: 'I - 100',
          locationDescription: '',
          createdAt: now,
          updatedAt: now,
        },
        {
          locationId: 5,
          locationName: 'CIT - 727',
          locationDescription: '',
          createdAt: now,
          updatedAt: now,
        },
        {
          locationId: 6,
          locationName: 'CIT - 705',
          locationDescription: '',
          createdAt: now,
          updatedAt: now,
        },
        {
          locationId: 7,
          locationName: 'Terraza Cardenal, Zona 10',
          locationDescription: '',
          createdAt: now,
          updatedAt: now,
        },
        {
          locationId: 8,
          locationName: 'F - 101',
          locationDescription: '',
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('LOCATION', null, {});
  },
};
