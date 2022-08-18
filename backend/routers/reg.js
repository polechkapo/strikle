const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/reg')
  .post(async (req, res) => {
    try {
      const {
        username, email, password, checkPassword,
      } = req.body;

      if (password !== checkPassword) {
        return res.status(403).json({ validate: false, message: 'Пароли не совпадают' });
      }

      const userRegFailed = await User.findOne({ where: { email } });

      if (userRegFailed) {
        return res.status(403).json({ registration: false, message: 'Пользователь с таким email уже существует' });
      }

      const user = await User.create({ username, email, password: await bcrypt.hash(password, saltRounds) });
      req.session.userId = user.id;
      return res.status(201).json({ registration: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })
  .put(async (req, res) => {
    try {
      const {
        user_id, gender, birthdate, city, bio,
      } = req.body;

      const updateUser = await User.update({
        gender, birth_date: birthdate, city, bio,
      }, { where: { id: user_id } });

      if (updateUser) {
        return res.status(203).json({ updateUser: true });
      }
      return res.status(404).json({ updateUser: false });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
