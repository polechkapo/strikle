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
      Pair.belongsTo(User, ({ foreignKey: 'user_id_1', onDelete: 'cascade' }));
      Pair.belongsTo(User, ({ foreignKey: 'user_id_2', onDelete: 'cascade' }));
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
  }, {
    sequelize,
    modelName: 'Pair',
    tableName: 'Pairs',
  });
  return Pair;
};
