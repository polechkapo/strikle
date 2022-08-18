const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Event }) {
      Comment.belongsTo(User, ({ foreignKey: 'user_id' }));
      Comment.belongsTo(Event, ({ foreignKey: 'event_id' }));
    }
  }
  Comment.init({
    event_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Events',
      },
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    comment: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'Comments',
  });
  return Comment;
};
