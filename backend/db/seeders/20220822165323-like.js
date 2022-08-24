'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Likes', [{
      user_id_take: 1,
      user_id_get: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 1,
      user_id_get: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 1,
      user_id_get: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 2,
      user_id_get: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 2,
      user_id_get: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 3,
      user_id_get: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 3,
      user_id_get: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 4,
      user_id_get: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 5,
      user_id_get: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 5,
      user_id_get: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 6,
      user_id_get: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 6,
      user_id_get: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 6,
      user_id_get: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 7,
      user_id_get: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 7,
      user_id_get: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 8,
      user_id_get: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 8,
      user_id_get: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 9,
      user_id_get: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id_take: 10,
      user_id_get: 5,
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
