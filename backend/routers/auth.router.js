const router = require('express').Router();
const { User } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    let user = '';
    if (req.session.userId) {
      user = await User.findOne({ where: { id: req.session.userId } });
      res.send(user);
    } else {
      res.send(undefined);
    }
  });
module.exports = router;
