module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', [{
      title: 'Фолк-музыка',
      createdAt: new Date(1),
      updatedAt: new Date(),
    },
    {
      title: 'Кантри',
      createdAt: new Date(2),
      updatedAt: new Date(),
    },
    {
      title: 'Метал',
      createdAt: new Date(3),
      updatedAt: new Date(),
    },
    {
      title: 'Ритм-н-блюз',
      createdAt: new Date(4),
      updatedAt: new Date(),
    },
    {
      title: 'Джаз',
      createdAt: new Date(5),
      updatedAt: new Date(),
    },
    {
      title: 'Шансон',
      createdAt: new Date(6),
      updatedAt: new Date(),
    },
    {
      title: 'Электронная музыка',
      createdAt: new Date(7),
      updatedAt: new Date(),
    },
    {
      title: 'Рок',
      createdAt: new Date(8),
      updatedAt: new Date(),
    },
    {
      title: 'Хип-хоп',
      createdAt: new Date(9),
      updatedAt: new Date(),
    },
    {
      title: 'Фанк',
      createdAt: new Date(10),
      updatedAt: new Date(),
    },
    {
      title: 'Соул',
      createdAt: new Date(11),
      updatedAt: new Date(),
    },
    {
      title: 'Диско',
      createdAt: new Date(12),
      updatedAt: new Date(),
    },
    {
      title: 'Поп-музыка',
      createdAt: new Date(13),
      updatedAt: new Date(),
    },
    {
      title: 'Альтернативный рок',
      createdAt: new Date(14),
      updatedAt: new Date(),
    },
    {
      title: 'Пост-рок',
      createdAt: new Date(15),
      updatedAt: new Date(),
    },
    {
      title: 'Русский реп',
      createdAt: new Date(16),
      updatedAt: new Date(),
    },
    {
      title: 'Техно',
      createdAt: new Date(17),
      updatedAt: new Date(),
    },
    {
      title: 'Хаус',
      createdAt: new Date(18),
      updatedAt: new Date(),
    },
    {
      title: 'Панк',
      createdAt: new Date(19),
      updatedAt: new Date(),
    },
    {
      title: 'Нью-Метал',
      createdAt: new Date(20),
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
