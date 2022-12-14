'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Artists', [{
      artist: 'Ludovico Einaudi',
      title: 'Experience',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048516c8ef0538e04f2e28380dcc5',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Bob Dylan',
      title: "Knockin' On Heaven's Door",
      albumUrl: 'https://i.scdn.co/image/ab67616d000048516c86683d20c72e3874c11c6d',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Luxiem',
      title: 'Jazz on the Clock!!',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851e2e1391fb2cf5b6b02f7d03c',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Бутырка',
      title: 'Аттестат',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851396c6fd4f729a8693bf8e211',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Король и Шут',
      title: 'Наблюдатель',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851ab541c8fff5dbd3d496e97ee',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Кровосток',
      title: 'Биография',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048515227948e57febd6a7be2b9c4',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Каста',
      title: 'Вокруг Шум',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851c2fff3a20cb7765f1b57159b',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Members Of Mayday',
      title: 'Sonic Empire - Short Mix',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851884ac1154fd2145927d032dc',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'The Chemical Brothers',
      title: 'Go',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851befecaa2c30a3302c88cbe88',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Daft Punk',
      title: 'Da Funk',
      albumUrl: 'https://i.scdn.co/image/ab67616d0000485187aa91b6ba6b4fded7bf3293',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Metallica',
      title: 'Enter Sandman',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851cf84c5b276431b473e924802',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Aerosmith',
      title: 'Combination',
      albumUrl: 'https://i.scdn.co/image/ab67616d0000485187d4e1a562b395b647ff8c6a',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'MORGENSHTERN',
      title: 'Cadillac',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851b19565a46d15bff07d399fbf',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Макsим',
      title: 'Знаешь ли ты',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048519a1057c9df78bdfe40996701',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Oxxxymiron',
      title: 'Где нас нет',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851b0ae3859408c3968f713bf2c',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Michael Jackson',
      title: 'Billie Jean',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048514121faee8df82c526cbab2be',
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Oxxxymiron',
      title: 'Где нас нет',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851b0ae3859408c3968f713bf2c',
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Rammstein',
      title: 'Du hast',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851a715d32590424cd667879ba3',
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Children Of Bodom',
      title: 'Downfall',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851c157aff312b4ceda54f94ea4',
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Slipknot',
      title: 'Duality',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048516b3463e7160d333ada4b175a',
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'David Guetta',
      title: 'Memories (feat. Kid Cudi)',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851f45c50e7cff5f2376c1e36ea',
      user_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Oxxxymiron',
      title: 'Где нас нет',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851b0ae3859408c3968f713bf2c',
      user_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Pink Floyd',
      title: 'Wish You Were Here',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851b3ca136e83344321ebd3de01',
      user_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Ludovico Einaudi',
      title: 'Experience',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048516c8ef0538e04f2e28380dcc5',
      user_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Bob Dylan',
      title: "Knockin' On Heaven's Door",
      albumUrl: 'https://i.scdn.co/image/ab67616d000048516c86683d20c72e3874c11c6d',
      user_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Luxiem',
      title: 'Jazz on the Clock!!',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851e2e1391fb2cf5b6b02f7d03c',
      user_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Бутырка',
      title: 'Аттестат',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851396c6fd4f729a8693bf8e211',
      user_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Король и Шут',
      title: 'Наблюдатель',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851ab541c8fff5dbd3d496e97ee',
      user_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Кровосток',
      title: 'Биография',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048515227948e57febd6a7be2b9c4',
      user_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Каста',
      title: 'Вокруг Шум',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851c2fff3a20cb7765f1b57159b',
      user_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Members Of Mayday',
      title: 'Sonic Empire - Short Mix',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851884ac1154fd2145927d032dc',
      user_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'The Chemical Brothers',
      title: 'Go',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851befecaa2c30a3302c88cbe88',
      user_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Daft Punk',
      title: 'Da Funk',
      albumUrl: 'https://i.scdn.co/image/ab67616d0000485187aa91b6ba6b4fded7bf3293',
      user_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Metallica',
      title: 'Enter Sandman',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851cf84c5b276431b473e924802',
      user_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Aerosmith',
      title: 'Combination',
      albumUrl: 'https://i.scdn.co/image/ab67616d0000485187d4e1a562b395b647ff8c6a',
      user_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'MORGENSHTERN',
      title: 'Cadillac',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851b19565a46d15bff07d399fbf',
      user_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Макsим',
      title: 'Знаешь ли ты',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048519a1057c9df78bdfe40996701',
      user_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Oxxxymiron',
      title: 'Где нас нет',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851b0ae3859408c3968f713bf2c',
      user_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Michael Jackson',
      title: 'Billie Jean',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048514121faee8df82c526cbab2be',
      user_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Rammstein',
      title: 'Du hast',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851a715d32590424cd667879ba3',
      user_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Children Of Bodom',
      title: 'Downfall',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851c157aff312b4ceda54f94ea4',
      user_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Slipknot',
      title: 'Duality',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048516b3463e7160d333ada4b175a',
      user_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'David Guetta',
      title: 'Memories (feat. Kid Cudi)',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851f45c50e7cff5f2376c1e36ea',
      user_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Oxxxymiron',
      title: 'Где нас нет',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851b0ae3859408c3968f713bf2c',
      user_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Pink Floyd',
      title: 'Wish You Were Here',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851b3ca136e83344321ebd3de01',
      user_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Ludovico Einaudi',
      title: 'Experience',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048516c8ef0538e04f2e28380dcc5',
      user_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Bob Dylan',
      title: "Knockin' On Heaven's Door",
      albumUrl: 'https://i.scdn.co/image/ab67616d000048516c86683d20c72e3874c11c6d',
      user_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Michael Jackson',
      title: 'Billie Jean',
      albumUrl: 'https://i.scdn.co/image/ab67616d000048514121faee8df82c526cbab2be',
      user_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Oxxxymiron',
      title: 'Где нас нет',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851b0ae3859408c3968f713bf2c',
      user_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      artist: 'Rammstein',
      title: 'Du hast',
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851a715d32590424cd667879ba3',
      user_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Artists', null, {});
  }
};
