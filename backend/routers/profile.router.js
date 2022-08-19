const router = require('express').Router();
const {User} = require('../db/models');
const bcrypt = require('bcrypt');

router.route('/profile')
  .put(async(req, res) => {
    try {
      const {id} = req.session.userId;
      const {email, username, oldPassword, password, checkPassword, gender, birthdate, city, bio} = req.body;
      if (oldPassword) {
        if (password !== checkPassword) {
          res.status(400).json({validate: false, message: 'Пароли не совпадают!'})
        } else {
          const checkOldPassword = await User.findOne({where: {id}}, {attributes: ['password']});
        if (await bcrypt.compare(oldPassword, checkOldPassword)) {
          const newPassword = await User.update({password});
          if (newPassword) {
            res.status(203).json({updatePassword: true})
          } else {
            res.status(404).json({updatePassword: false})
          }
        }
        }
        
      }
      const editUser = await User.update({email, username, gender, birth_date: birthdate, city, bio}, {where: {id}});
      if (editUser) {
        res.status(203).json({updateUser: true})
      } else {
        res.status(404).json({updateUser: false})
      }
    } catch (error) {
      res.status(500).json({message: error.message});
    
    }
  })

module.exports = router;
