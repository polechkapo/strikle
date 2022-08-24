'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pairs', [{
      user_id_1: 1,
      user_id_2: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_1: 4,
      user_id_2: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_1: 5,
      user_id_2: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
