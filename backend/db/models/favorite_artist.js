const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite_Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Artist }) {
      Favorite_Artist.belongsTo(User, ({ foreignKey: 'user_id' }));
      Favorite_Artist.belongsTo(Artist, ({ foreignKey: 'artist_id' }));
    }
  }
  Favorite_Artist.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    artist_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Artists',
      },
    },
  }, {
    sequelize,
    modelName: 'Favorite_Artist',
    tableName: 'Favorite_Artists',
  });
  return Favorite_Artist;
};
