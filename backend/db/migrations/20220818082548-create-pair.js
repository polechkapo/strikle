module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pairs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id_1: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        },
      },
      user_id_2: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        },
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
    await queryInterface.dropTable('Pairs');
  },
};
