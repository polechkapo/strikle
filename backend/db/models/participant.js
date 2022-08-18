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
    static associate(models) {
      // define association here
    }
  }
  Participant.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    event_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Participant',
    tableName: 'Participants',
  });
  return Participant;
};
