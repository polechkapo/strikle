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
      Artist, Genre, Like, Pair, Comment, Event, Chat, Message,
    }) {
      User.belongsToMany(Genre, ({ foreignKey: 'user_id', through: 'User_Genres', otherKey: 'genre_id' }));
      User.belongsToMany(Event, ({ foreignKey: 'user_id', through: 'Participant', otherKey: 'event_id' }));
      User.hasMany(Artist, ({ foreignKey: 'user_id' }));
      User.hasMany(Like, ({ foreignKey: 'user_id_take' }));
      User.hasMany(Like, ({ foreignKey: 'user_id_get' }));
      User.hasMany(Pair, ({ foreignKey: 'user_id_1' }));
      User.hasMany(Pair, ({ foreignKey: 'user_id_2' }));
      User.hasMany(Comment, ({ foreignKey: 'user_id' }));
      User.hasMany(Event, ({ foreignKey: 'user_id' }));
      User.hasMany(Artist, ({ foreignKey: 'user_id' }));
      User.hasMany(Chat, ({ foreignKey: 'user_id_1' }));
      User.hasMany(Chat, ({ foreignKey: 'user_id_2' }));
      User.hasMany(Message, ({ foreignKey: 'user_id' }));
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
