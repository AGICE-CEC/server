'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FAQ', [
      {
        question: 'What is your return policy?',
        answer: 'You can return any item within 30 days for a full refund.',
        faq_language: 'en', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'How do I track my order?',
        answer: 'You can track your order using the tracking number sent to your email.',
        faq_language: 'en', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Do you offer customer support?',
        answer: 'Yes, we offer 24/7 customer support through our website and phone line.',
        faq_language: 'en', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: '¿Cuál es su política de devoluciones?',
        answer: 'Puede devolver cualquier artículo dentro de los 30 días para un reembolso completo.',
        faq_language: 'es', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: '¿Cómo puedo rastrear mi pedido?',
        answer: 'Puede rastrear su pedido utilizando el número de seguimiento enviado a su correo electrónico.',
        faq_language: 'es', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: '¿Ofrecen soporte al cliente?',
        answer: 'Sí, ofrecemos soporte al cliente 24/7 a través de nuestro sitio web y línea telefónica.',
        faq_language: 'es', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FAQ', null, {});

  }
};
