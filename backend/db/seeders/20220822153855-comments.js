'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [{
      event_id: 2,
      user_id: 1,
      comment: 'Клевое мероприятие, иду!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      event_id: 1,
      user_id: 2,
      comment: 'Кааайф, я с вами!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
    event_id: 1,
    user_id: 1,
    comment: 'Класс! Я в деле',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Comments', null, {});
 
   }
};
