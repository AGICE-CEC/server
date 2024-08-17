'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('EVENT', [
      {
        title: 'Concert at Central Park',
        description: 'A large concert at Central Park in New York City.',
        ubicationId: 1,  // Assuming this corresponds to an existing ubicacionId in the Ubication table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Louvre Art Exhibition',
        description: 'A special art exhibition at the Louvre Museum in Paris.',
        ubicationId: 2,  // Assuming this corresponds to an existing ubicacionId in the Ubication table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sydney Opera House Tour',
        description: 'A guided tour of the Sydney Opera House.',
        ubicationId: 3,  // Assuming this corresponds to an existing ubicacionId in the Ubication table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('EVENT', null, {});
  }
};
