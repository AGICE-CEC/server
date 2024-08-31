'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('EVENT', 'event_day', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EVENT', 'hours', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
  }
};
