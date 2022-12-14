const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Like.belongsTo(User, ({ foreignKey: 'user_id_take', onDelete: 'cascade' }));
      Like.belongsTo(User, ({ foreignKey: 'user_id_get', onDelete: 'cascade' }));
    }
  }
  Like.init({
    user_id_take: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    user_id_get: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
  }, {
    sequelize,
    modelName: 'Like',
    tableName: 'Likes',
  });
  return Like;
};
