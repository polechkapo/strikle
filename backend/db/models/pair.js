const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pair extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Pair.belongsTo(User, ({ foreignKey: 'user_id_1' }));
      Pair.belongsTo(User, ({ foreignKey: 'user_id_2' }));
    }
  }
  Pair.init({
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
    match_percent: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Pair',
    tableName: 'Pairs',
  });
  return Pair;
};
