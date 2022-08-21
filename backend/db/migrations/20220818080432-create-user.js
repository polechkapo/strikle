module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT,
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      birth_date: {
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.TEXT,
      },
      bio: {
        type: Sequelize.TEXT,
      },
      avatar: {
        type: Sequelize.TEXT,
        defaultValue: 'https://cdn.store-assets.com/s/391095/f/5163613.jpeg?width=1500',
      },
      city: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  },
};
