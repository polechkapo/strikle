'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Chat }) {
      Message.belongsTo(User, ({ foreignKey: 'user_id' }))
      Message.belongsTo(Chat, ({ foreignKey: 'chat_id' }))
    }
  }
  Message.init({
    chat_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Chats',
      },
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    user_text: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'Messages'
  });
  return Message;
};