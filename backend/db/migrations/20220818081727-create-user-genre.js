module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_Genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        },
        onDelete: 'cascade',
      },
      genre_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Genres',
        },
        onDelete: 'cascade',
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
    await queryInterface.dropTable('User_Genres');
  },
};
