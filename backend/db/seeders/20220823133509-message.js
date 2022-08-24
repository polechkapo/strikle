'use strict';

module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert('Messages', [{
      chat_id: 30,
      user_id: 8,
      user_text: 'привет',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 8,
      user_text: 'привет',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 8,
      user_text: 'привет',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 8,
      user_text: 'привет',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 3,
      user_text: 'привет',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 3,
      user_text: 'привет',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 3,
      user_text: 'привет',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:3,
      user_text:'пока',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:8,
      user_text:'пока',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:3,
      user_text:'пока',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:3,
      user_text:'пока',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:3,
      user_text:'пока',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:3,
      user_text:'пока',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface) {

    await queryInterface.bulkDelete('Messages', null, {});

  }
};
