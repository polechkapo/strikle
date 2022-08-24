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

    if (!userCheck) {
      return res.json({ login: false });
    }

    const passwordCompare = await bcrypt.compare(password, userCheck.password);

    if (userCheck.email === email && passwordCompare) {
      req.session.userId = userCheck.id;
      const user = await User.findOne({ where: { id: req.session.userId } });
      return res.json({ user, login: true });

    }
    return res.json({ login: false });
  });

module.exports = router