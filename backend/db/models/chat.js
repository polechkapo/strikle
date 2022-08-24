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
    static associate({ User, Message }) {
      Chat.belongsTo(User, ({ foreignKey: 'user_id_1' }));
      Chat.belongsTo(User, ({ foreignKey: 'user_id_2' }));
      Chat.hasMany(Message, ({ foreignKey: 'chat_id' }))
    }
  }
  Chat.init({
    user_id_1: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    user_id_2: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
  }, {
    sequelize,
    modelName: 'Chat',
    tableName: 'Chats',
  });
  return Chat;
};
