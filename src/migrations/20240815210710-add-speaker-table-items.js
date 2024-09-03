'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SPEAKER', [
      {
        speakerName: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        speakerName: 'Jane Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        speakerName: 'Emily Johnson',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SPEAKER', null, {});
  }
};
