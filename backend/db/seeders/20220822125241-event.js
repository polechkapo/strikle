https://мояоколица.рф/wp-content/uploads/2018/10/8d457e0b65-e1539335542265-768x716.jpg'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [{
      user_id: 1,
      title: 'День дня',
      photo: 'https://мояоколица.рф/wp-content/uploads/2018/10/8d457e0b65-e1539335542265-768x716.jpg',
      description: 'Идем отмечать день дня!',
      date: '2022-08-26',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      title: 'День пива',
      photo: 'https://мояоколица.рф/wp-content/uploads/2018/10/8d457e0b65-e1539335542265-768x716.jpg',
      description: 'Идем отмечать день дня!',
      date: '2022-09-26',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 4,
      title: 'День кода',
      photo: 'https://мояоколица.рф/wp-content/uploads/2018/10/8d457e0b65-e1539335542265-768x716.jpg',
      description: 'Идем отмечать день дня!',
      date: '2022-09-16',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      title: 'День пива',
      photo: 'https://мояоколица.рф/wp-content/uploads/2018/10/8d457e0b65-e1539335542265-768x716.jpg',
      description: 'Идем отмечать день дня!',
      date: '2022-08-24',
      createdAt: new Date(),
      updatedAt: new Date()
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
