'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('EVENTSPEAKER', [
      {
        eventId: 1,  // Assuming this corresponds to an existing eventId in the Event table
        speakerId: 1,  // Assuming this corresponds to an existing speakerId in the Speaker table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 2,  // Assuming this corresponds to an existing eventId in the Event table
        speakerId: 2,  // Assuming this corresponds to an existing speakerId in the Speaker table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 3,  // Assuming this corresponds to an existing eventId in the Event table
        speakerId: 3,  // Assuming this corresponds to an existing speakerId in the Speaker table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('EVENTSPEAKER', null, {});
  }
};
