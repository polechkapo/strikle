const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Genre }) {
      User_Genre.belongsTo(User, ({ foreignKey: 'user_id' }));
      User_Genre.belongsTo(Genre, ({ foreignKey: 'genre_id' }));
    }
  }
  User_Genre.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    genre_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Genres',
      },
    },
  }, {
    sequelize,
    modelName: 'User_Genre',
    tableName: 'User_Genres',
  });
  return User_Genre;
};
