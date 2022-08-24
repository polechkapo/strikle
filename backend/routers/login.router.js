const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User } = require('../db/models')

router.route('/')
  .post(async (req, res) => {
    const { email, password } = req.body;
    const userCheck = await User.findOne({
      where: {
        email,
      },
      raw: true,
    });

console.log(userCheck, 'etrewuyrtuwyetruywatefuywteurytewuytueywtuf');
    if (!userCheck) {
      return res.json({ user: null, errorMessage: 'Такого пользователя нет!' });
    }

    const passwordCompare = await bcrypt.compare(password, userCheck.password);

    if (userCheck.email === email && passwordCompare) {
      req.session.userId = userCheck.id;
      const user = await User.findOne({ where: { id: req.session.userId } });
      return res.json({ user, errorMessage: null });

    }
    return res.json({ user: null, errorMessage: 'Неверный логин или пароль!' });
  });

module.exports = router;
