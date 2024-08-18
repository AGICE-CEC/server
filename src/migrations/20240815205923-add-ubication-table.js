'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('LOCATION', [
      {
        locationName: 'Central Park',
        locationDescription: 'A large public park in New York City.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        locationName: 'Louvre Museum',
        locationDescription:
          'The world’s largest art museum located in Paris, France.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        locationName: 'Sydney Opera House',
        locationDescription:
          'A multi-venue performing arts centre in Sydney, Australia.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('LOCATION', null, {});
  },
};
