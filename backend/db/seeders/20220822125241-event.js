https://мояоколица.рф/wp-content/uploads/2018/10/8d457e0b65-e1539335542265-768x716.jpg'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [{
      user_id: 1,
      title: 'Квартирник',
      photo: '/events/kvartirnik.png',
      description: 'Квартирник для друзей и друзей друзей! В гостях музыканты и вокалисты топовых кавер-коллективов. Уютно и лампово, подпевает зал, поют и играют приглашённые гости и даже зрители, для которых парни сыграют любимые песни. Вход: свободный. Начало в 20:00',
      date: '2022-09-10',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      title: 'Пенная вечеринка',
      photo: '/events/pennaya.png',
      description: 'ПРОВОДИМ ЛЕТО ВМЕСТЕ! ПЕННАЯ ВЕЧЕРИНКА Goodbye Summer. Будем провожать теплые деньки с пеной и музыкой на пляже Ласковый в Санкт-Петербурге.',
      date: '2022-08-28',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 6,
      title: 'Strikle-fest',
      photo: '/events/strikle_fest.png',
      description: 'Масштабный городской Open-Air strikle-fest пройдет в Петербурге в парке 300-летия, на нем соберутся несколько тысяч жителей и гостей столицы. На фестивале будет работать несколько музыкальных сцен: синяя — мейнстрим, белая — рэп и альтернатива, фиолетовая — инди-музыка.',
      date: '2022-09-17',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 9,
      title: 'Экскурсия по Санкт-Петербургу',
      photo: '/events/nigth_museum.png',
      description: 'Предлагаем любителям истории Санкт-Петербурга провести выходной в нашей компании. У нас есть очень крутые гиды, которые с удовольствием поделяться с Вами самыми интересными историями',
      date: '2022-09-23',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 10,
      title: 'Present Perfect Festival 2022',
      photo: '/events/ppf.png',
      description: 'Шестой фестиваль электронной музыки и современного искусства Present Perfect пройдет в Санкт-Петербурге. Основная локация фестиваля — место силы Roots United последних трех лет, проект K-30 и прилегающая территория нового культурного квартала «Брусницын» в гавани Васильевского острова. PPF 2022 сохранит структурный вид и развернет насыщенную программу в течение трех дней.',
      date: '2022-09-04',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
