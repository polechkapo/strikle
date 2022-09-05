const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Event }) {
      Participant.belongsTo(User, ({ foreignKey: 'user_id', onDelete: 'cascade' }));
      Participant.belongsTo(Event, ({ foreignKey: 'event_id', onDelete: 'cascade' }));
    }
  }
  Participant.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    event_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Events',
      },
    },
  }, {
    sequelize,
    modelName: 'Participant',
    tableName: 'Participants',
  });
  return Participant;
};
