const router = require('express').Router();
const { User } = require('../db/models');


router.route('/profile')
  .put(async (req, res) => {
    try {
      const  id  = req.session.userId;
      console.log('ID CHECK', req.session);
      const { email, username, city, bio } = req.body;
      console.log('SERVER START', req.body);
      
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
