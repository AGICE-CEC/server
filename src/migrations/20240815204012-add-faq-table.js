module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('FAQ', [
      {
        question: 'What is your return policy?',
        answer: 'You can return any item within 30 days for a full refund.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'How do I track my order?',
        answer: 'You can track your order using the tracking number sent to your email.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Do you offer customer support?',
        answer: 'Yes, we offer 24/7 customer support through our website and phone line.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UBICATION', null, {});
  }
};
