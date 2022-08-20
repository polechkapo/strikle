const router = require('express').Router();
const { User } = require('../db/models');
const bcrypt = require('bcrypt');

router.route('/profile')
  .put(async (req, res) => {
    try {
      const  id  = req.session.userId;
      console.log('ID CHECK', req.session);
      const { email, username, oldPassword, password, checkPassword, city, bio } = req.body;
      console.log('SERVER START', req.body);
      if (oldPassword) {
        if (password !== checkPassword) {
          res.status(400).json({ validate: false, message: 'Пароли не совпадают!' })
        } else {
          const checkOldPassword = await User.findOne({ where: { id } }, { attributes: ['password'] });
          if (await bcrypt.compare(oldPassword, checkOldPassword)) {
            const newPassword = await User.update({ password });
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
      const editUser = await User.update({ email, username, city, bio }, { where: { id } });
      console.log('EDITUSER', editUser);
      if (editUser) {
        res.status(203).json({ updateUser: true })
      } else {
        res.status(404).json({ updateUser: false })
      }
    } catch (error) {
      res.status(500).json({ message: error.message });

    }
  })

module.exports = router;
