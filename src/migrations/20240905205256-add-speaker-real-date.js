'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SPEAKER', [
      {speakerId: 1, speakerName: 'Rector UVG, M. A. Roberto Moreno Godoy', speakerDescription: 'Rector of Universidad del Valle de Guatemala', country: 'Guatemala', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 2, speakerName: 'Luis Zea', speakerDescription: 'Space Expert and Member of CEC Committee', country: 'Guatemala', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 3, speakerName: 'Comité Organizador', speakerDescription: 'Organizing Committee of the Event', country: 'Guatemala', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 4, speakerName: 'Dra. Gabriela Montenegro', speakerDescription: 'Expert in Space Nutrition and Science', country: 'Guatemala', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 5, speakerName: 'Guatemala - INGUAT', speakerDescription: 'National Tourism Institute of Guatemala', country: 'Guatemala', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 6, speakerName: 'Maximo Roa (DLR)', speakerDescription: 'Researcher at the German Aerospace Center (DLR)', country: 'Germany', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 7, speakerName: 'Invitados', speakerDescription: 'Invited Participants', country: 'Various', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 8, speakerName: 'AGICE y BeyondSight', speakerDescription: 'Representatives from AGICE and BeyondSight', country: 'Various', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 9, speakerName: 'Sandra Cauffmann (NASA)', speakerDescription: 'NASA Deputy Director', country: 'USA', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 10, speakerName: 'Kyouchi Arakane (JAXA)', speakerDescription: 'JAXA Representative', country: 'Japan', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 11, speakerName: "Akabxpal Yata'z", speakerDescription: 'Speaker on Indigenous Perspectives in Space', country: 'Guatemala', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 12, speakerName: 'Jason Reimuller', speakerDescription: 'Space Researcher and Educator', country: 'USA', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 13, speakerName: 'Miembro del Comité Organizador CEC', speakerDescription: 'Member of the CEC Organizing Committee', country: 'Guatemala', createdAt: new Date(), updatedAt: new Date()},
      {speakerId: 14, speakerName: 'Universales, Reorbit, IIAS', speakerDescription: 'Space and Science Collaborators', country: 'Various', createdAt: new Date(), updatedAt: new Date()}
    ], {}); 
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SPEAKER', null, {}); 
  }
};