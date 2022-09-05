const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, User }) {
      // Event.belongsToMany(User, ({ foreignKey: 'event_id', through: 'Participant', otherKey: 'user_id' }));
      Event.hasMany(Comment, ({ foreignKey: 'event_id', onDelete: 'cascade' }));
      Event.belongsTo(User, ({ foreignKey: 'user_id', onDelete: 'cascade' }));
    }
  }
  Event.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'Events',
  });
  return Event;
};
