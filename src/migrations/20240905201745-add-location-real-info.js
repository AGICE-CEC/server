'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'LOCATION',
      [
        {
          locationId: 1,
          locationName: 'CIT - Plaza Dra. Isabel Gutiérrez de Bosch',
          locationDescription: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          locationId: 2,
          locationName: 'Plaza Paiz Riera',
          locationDescription: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          locationId: 3,
          locationName: 'CIT - Plaza',
          locationDescription: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          locationId: 4,
          locationName: 'I - 100',
          locationDescription: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          locationId: 5,
          locationName: 'CIT - 727',
          locationDescription: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          locationId: 6,
          locationName: 'CIT - 705',
          locationDescription: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          locationId: 7,
          locationName: 'Terraza Cardenal, Zona 10',
          locationDescription: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          locationId: 8,
          locationName: 'F - 101',
          locationDescription: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('LOCATION', null, {});
  },
};
