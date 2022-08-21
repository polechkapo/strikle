const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/editpass')
  .put(async (req, res) => {
    try {
      const id = req.session.userId;
      const { oldPassword, password, checkPassword } = req.body;
      if (oldPassword) {
        if (password !== checkPassword) {
          res.status(400).json({ validate: false, message: 'Пароли не совпадают!' })
        } else {
          const checkOldPassword = await User.findOne({ where: { id } , attributes: ['password'] });
          console.log(checkOldPassword,'SERVER PADSSSSSS');
          if (await bcrypt.compare(oldPassword, checkOldPassword)) {
            const newPassword = await User.update({ password: await bcrypt.hash(password, 10) });
            if (newPassword) {
              res.status(203).json({ updatePassword: true })
            } else {
              console.log('CHECk serv PASS');
              res.status(404).json({ updatePassword: false })
            }
          }
        }
        console.log('CHeCK MIdL SeVER');
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

module.exports = router;
