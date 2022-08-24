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
      user_text: 'ецкуцку',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 3,
      user_text: 'преаапавпавивет',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 8,
      user_text: 'вапвпапавпа',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 8,
      user_text: 'вапвап',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 8,
      user_text: 'вапывй',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      chat_id: 30,
      user_id: 3,
      user_text: 'ываакуц',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:3,
      user_text:'авыва',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:8,
      user_text:'ываыва',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:3,
      user_text:'аываы',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:8,
      user_text:'поаааааывака',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:3,
      user_text:'пыпрвкеуц',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      chat_id: 30,
      user_id:8,
      user_text:'ываывацуауц',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface) {

    await queryInterface.bulkDelete('Messages', null, {});

  }
};
