const router = require('express').Router();
const { User, Genre, Artist } = require('../db/models');

router.route('/session')
  .get(async (req, res) => {
    let user = '';
    if (req.session.userId) {
      user = await User.findOne({ 
        where: { id: req.session.userId },
        include: {
          raw: true,
          model: Artist,
          attributes: ['id', 'title', 'artist', 'albumUrl'],
        }, 
      });
      res.send(user);
    } else {
      res.send(undefined);
    }
  });

  router.route('/all')
  .get(async (req, res) => {
    console.log('я на бэке')
    let users = '';
    if (req.session.userId) {
      users = await User.findAll( {
        // include: {
        //   raw: true,
        //   model: Genre,
        //   attributes: ['id', 'title'],
        // },
        include: {
          raw: true,
          model: Artist,
          attributes: ['id', 'title', 'artist', 'albumUrl'],
        }, 
      },);
      const resultUsers = users.filter(user => user.id !== req.session.userId);
      res.send(resultUsers);
    } else {
      res.send(undefined);
    }
  })
module.exports = router;
