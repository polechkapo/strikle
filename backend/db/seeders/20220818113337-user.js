'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert('Users', [{
      username: 'baga',
      email: 'baga@doma.ru',
      birth_date: '2004-01-01',
      gender: 'Ж',
      bio: 'Я бага',
      city: 'Дагестан',
      password: await bcrypt.hash('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Bagster',
      email: 'baga1@doma.ru',
      birth_date: '2004-01-01',
      gender: 'M',
      bio: 'Я бага',
      city: 'Дагестан',
      password: await bcrypt.hash('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Vika',
      email: 'baga2@doma.ru',
      birth_date: '2004-01-01',
      gender: 'Ж',
      bio: 'Я бага',
      city: 'Дагестан',
      password: await bcrypt.hash('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Polina',
      email: 'baga3@doma.ru',
      birth_date: '2004-01-01',
      gender: 'Ж',
      bio: 'Я бага',
      city: 'Дагестан',
      password: await bcrypt.hash('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Anton',
      email: 'baga4@doma.ru',
      birth_date: '2004-01-01',
      gender: 'М',
      bio: 'Я бага',
      city: 'Дагестан',
      password: await bcrypt.hash('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'maxim',
      email: 'baga5@doma.ru',
      birth_date: '2004-01-01',
      gender: 'М',
      bio: 'Я бага',
      city: 'Дагестан',
      password: await bcrypt.hash('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Oksana',
      email: 'baga6@doma.ru',
      birth_date: '2004-01-01',
      gender: 'Ж',
      bio: 'Я бага',
      city: 'Дагестан',
      password: await bcrypt.hash('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },    {
      username: 'VItaliy',
      email: 'baga7@doma.ru',
      birth_date: '2004-01-01',
      gender: 'Ж',
      bio: 'Я бага',
      city: 'Дагестан',
      password: await bcrypt.hash('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});

  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
