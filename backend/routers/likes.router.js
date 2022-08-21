const router = require('express').Router();
const { Like } = require('../db/models');

router.route('/like')
    .post( async (req, res) => {
      const {user_id_take, user_id_get} = req.body
      console.log(req.body)
      const like = await Like.create({
         user_id_take,
         user_id_get
      });
      like.save();
      console.log(like.id, like.user_id_take, like.user_id_get);
      res.send({id: like.id, user_id_take: like.user_id_take, user_id_get: like.user_id_get});
      res.end();
  })

  router.route('/likes')
  .get(async (req, res) => {
    try {
      const allLikes = await Like.findAll({ where: { user_id_take: req.session.userId }})
        return res.status(200).json(allLikes)

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })


  module.exports = router;