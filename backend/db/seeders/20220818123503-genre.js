module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', [{
      title: 'Фолк-музыка',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Кантри',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Метал',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ритм-н-блюз',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Джаз',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Шансон',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Электронная музыка',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Рок',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Хип-хоп',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Фанк',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Соул',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Диско',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Поп-музыка',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Альтернативный рок',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Пост-рок',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Русский реп',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Техно',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Хаус',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Панк',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Нью-Метал',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
