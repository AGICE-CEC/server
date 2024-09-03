'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('SPEAKER', 'speaker_description', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('SPEAKER', 'country', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('SPEAKER', 'linkedin', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('SPEAKER', 'contact', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('SPEAKER', 'speaker_description');
    await queryInterface.removeColumn('SPEAKER', 'country');
    await queryInterface.removeColumn('SPEAKER', 'linkedin');
    await queryInterface.removeColumn('SPEAKER', 'contact');
  }
};
