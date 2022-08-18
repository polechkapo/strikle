'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert('Users', [{
      username: 'baga',
      email: 'baga@doma.ru',
      password: await bcrypt.hash('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
