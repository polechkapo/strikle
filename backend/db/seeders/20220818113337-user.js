'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert('Users', [{
      username: 'Юлия',
      email: 'juliya@mail.ru',
      birth_date: '1992-03-03',
      avatar: '/avatars/2022-08-24_12.06.45.png',
      gender: 'Ж',
      bio: 'Читаю, играю на пианино, люблю рисовать, люблю музыку, природу, кофе со сливками и выращивать цветы.',
      city: 'Санкт-Петербург',
      password: await bcrypt.hash('123456Qq', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Марина',
      email: 'marina@mail.ru',
      birth_date: '1996-05-01',
      avatar: '/avatars/2022-08-24_12.07.29.png',
      gender: 'Ж',
      bio: 'Буду рада общению, друзьям и отношениям :)',
      city: 'Санкт-Петербург',
      password: await bcrypt.hash('123456Qq', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Алина',
      email: 'alina@mail.ru',
      birth_date: '1992-06-11',
      avatar: '/avatars/2022-08-24_12.08.08.png',
      gender: 'Ж',
      bio: 'Интроверт. Часто путешествую, работаю на себя удаленно. Изначальная цель - общение. Если это приведет к чему-то большему, буду только рада.',
      city: 'Санкт-Петербург',
      password: await bcrypt.hash('123456Qq', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Ольга',
      email: 'olga@mail.ru',
      birth_date: '1993-08-01',
      avatar: '/avatars/2022-08-24_12.09.02.png',
      gender: 'Ж',
      bio: 'Опыт нахождения на этой площадке доказал, что здесь есть классные, увлеченные, мыслящие люди! Жизнь одна, кайфуйте!',
      city: 'Санкт-Петербург',
      password: await bcrypt.hash('123456Qq', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Максим',
      email: 'maksim@mail.ru',
      birth_date: '2000-02-01',
      avatar: '/avatars/M2022-08-24_12.13.01.png',
      gender: 'М',
      bio: 'Специалист по ИТ-технологиям. Ищу интересную девушку любой внешности. Обожаю прогулки по вечерам и спорт, слабость – вкусная домашняя еда',
      city: 'Санкт-Петербург',
      password: await bcrypt.hash('123456Qq', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Пётр',
      email: 'petr@mail.ru',
      birth_date: '1994-01-01',
      avatar: '/avatars/M2022-08-24_12.13.49.png',
      gender: 'М',
      bio: 'Моя жизнь полна интересных событий. Единственное, чего мне не хватает – любимая девушка рядом. Я разделил бы с ней эту насыщенную жизнь, поэтому и решил завести здесь анкету. В интернете гораздо проще познакомиться с интересным собеседником',
      city: 'Санкт-Петербург',
      password: await bcrypt.hash('123456Qq', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Александр',
      email: 'aleksandr@mail.ru',
      birth_date: '1991-01-01',
      avatar: '/avatars/M2022-08-24_12.14.45.png',
      gender: 'М',
      bio: 'Я тут первый раз и не знаю, что писать. Всем хай!',
      city: 'Санкт-Петербург',
      password: await bcrypt.hash('123456Qq', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Даниил',
      email: 'daniil@mail.ru',
      birth_date: '1990-01-01',
      avatar: '/avatars/M2022-08-24_12.15.33.png',
      gender: 'М',
      bio: 'Привет всем! Люблю музыку, концерты, вечеринки и другой драйв! Хотел бы совместить это с личной жизнью, поэтому я тут.',
      city: 'Санкт-Петербург',
      password: await bcrypt.hash('123456Qq', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Георгий',
      email: 'georgiy@mail.ru',
      birth_date: '1985-06-01',
      avatar: '/avatars/M2022-08-24_12.16.44.png',
      gender: 'М',
      bio: 'Не люблю спорт – вместо этого я трачу время на инвестиции в будущее, которое мечтаю разделить с тобой. Кстати, я имел в виду просмотр футбола, концерты и всё остальное, что можно делать совместно',
      city: 'Санкт-Петербург',
      password: await bcrypt.hash('123456Qq', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },    {
      username: 'VItaliy',
      email: 'baga7@doma.ru',
      birth_date: '2004-01-01',
      avatar: 'https://cdn.store-assets.com/s/391095/f/5163613.jpeg?width=1500',
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
