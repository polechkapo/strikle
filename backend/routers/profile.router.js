const router = require('express').Router();
const { User } = require('../db/models');


router.route('/profile')
  .put(async (req, res) => {
    try {
      const id = req.session.userId;
      const { email, username, city, bio } = req.body;

      const editUser = await User.update({ email, username, city, bio }, { where: { id } });
      if (editUser) {
        const user = await User.findOne({ where: { id } })
        res.status(203).json(user)
      } else {
        res.status(404).json({ updateUser: false })
      }
    } catch (error) {
      res.status(500).json({ message: error.message });

    }
  })

module.exports = router;
