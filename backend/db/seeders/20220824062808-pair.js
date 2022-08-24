'use strict';

module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert('Pairs', [{
      user_id_1: 3,
      user_id_2: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      user_id_1: 4,
      user_id_2: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      user_id_1: 7,
      user_id_2: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      user_id_1: 4,
      user_id_2: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      user_id_1: 3,
      user_id_2: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      user_id_1: 3,
      user_id_2: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      user_id_1: 3,
      user_id_2: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      user_id_1: 3,
      user_id_2: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});

  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Pairs', null, {});
  }
};
