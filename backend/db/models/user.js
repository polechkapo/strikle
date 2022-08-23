const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Artist, Genre, Like, Pair, Comment, Event, Chat,
    }) {
      User.belongsToMany(Genre, ({ foreignKey: 'user_id', through: 'User_Genres', otherKey: 'genre_id', onDelete: 'cascade' }));
      User.belongsToMany(Event, ({ foreignKey: 'user_id', through: 'Participant', otherKey: 'event_id', onDelete: 'cascade' }));
      User.hasMany(Artist, ({ foreignKey: 'user_id', onDelete: 'cascade' }));
      User.hasMany(Like, ({ foreignKey: 'user_id_take', onDelete: 'cascade' }));
      User.hasMany(Like, ({ foreignKey: 'user_id_get', onDelete: 'cascade' }));
      User.hasMany(Pair, ({ foreignKey: 'user_id_1', onDelete: 'cascade' }));
      User.hasMany(Pair, ({ foreignKey: 'user_id_2', onDelete: 'cascade' }));
      User.hasMany(Comment, ({ foreignKey: 'user_id', onDelete: 'cascade' }));
      User.hasMany(Event, ({ foreignKey: 'user_id', onDelete: 'cascade' }));
      User.hasMany(Artist, ({ foreignKey: 'user_id', onDelete: 'cascade' }));
      User.hasMany(Chat, ({ foreignKey: 'user_who' , onDelete: 'cascade'}));
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        is: /^[a-zA-Zа-яА-ЯёЁ]{3,20}$/,
      },
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    birth_date: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.TEXT,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    avatar: {
      type: DataTypes.TEXT,
      defaultValue: 'https://cdn.store-assets.com/s/391095/f/5163613.jpeg?width=1500',
    },
    city: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
