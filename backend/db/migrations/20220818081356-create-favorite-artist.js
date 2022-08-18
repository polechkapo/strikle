module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favorite_Artists', {
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
      },
      artist_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Artists',
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
    await queryInterface.dropTable('Favorite_Artists');
  },
};
