'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_Genres', [{
      user_id: 1,
      genre_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      genre_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      genre_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      genre_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      genre_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      genre_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      genre_id: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      genre_id: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      genre_id: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      genre_id: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      genre_id: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      genre_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      genre_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      genre_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      genre_id: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 4,
      genre_id: 16,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 4,
      genre_id: 19,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 4,
      genre_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 4,
      genre_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 5,
      genre_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 5,
      genre_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 5,
      genre_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 5,
      genre_id: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 5,
      genre_id: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 6,
      genre_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 6,
      genre_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 6,
      genre_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 6,
      genre_id: 19,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 6,
      genre_id: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 7,
      genre_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 7,
      genre_id: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 7,
      genre_id: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 7,
      genre_id: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 7,
      genre_id: 18,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 8,
      genre_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 8,
      genre_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 8,
      genre_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 8,
      genre_id: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 8,
      genre_id: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 9,
      genre_id: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 9,
      genre_id: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 9,
      genre_id: 16,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 9,
      genre_id: 19,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 9,
      genre_id: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 10,
      genre_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 10,
      genre_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 10,
      genre_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 10,
      genre_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 10,
      genre_id: 19,
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
