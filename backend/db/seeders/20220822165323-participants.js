'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Participants', [{
      user_id: 1,
      event_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      event_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      event_id: 1,
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
