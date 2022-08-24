const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Chat.belongsTo(User, ({ foreignKey: 'user_who', onDelete: 'cascade' }));
    }
  }
  Chat.init({
    user_who: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    message: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    user_which: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Chat',
    tableName: 'Chats',
  });
  return Chat;
};
