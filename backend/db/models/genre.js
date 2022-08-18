const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Genre.belongsToMany(User, ({ foreignKey: 'genre_id', through: 'User_Genres', otherKey: 'user_id' }));
    }
  }
  Genre.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Genre',
    tableName: 'Genres',
  });
  return Genre;
};
