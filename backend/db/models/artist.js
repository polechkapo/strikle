const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Artist.belongsToMany(User, ({ foreignKey: 'artist_id', through: 'Favorite_Artist', otherKey: 'user_id' }));
    }
  }
  Artist.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    photo: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    genre: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Artist',
    tableName: 'Artists',
  });
  return Artist;
};
