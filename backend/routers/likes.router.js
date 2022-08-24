const router = require('express').Router();
const { Like, Pair, User } = require('../db/models');

router.route('/like')
    .post( async (req, res) => {
      const {user_id_take, user_id_get} = req.body
      const like = await Like.create({
         user_id_take,
         user_id_get
      });
      like.save();
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

  router.route('/match')
    .post( async (req, res) => {
      const {card_id } = req.body
      const like = await Like.findOne({ 
        where: {
         user_id_take: card_id,
         user_id_get: req.session.userId
        },
      });

      if(like) {
        const match = await Pair.create({
          user_id_1:card_id,
          user_id_2:req.session.userId,
        },
        )
        match.save()
        res.send(match)
      } else {
        res.send(false)
      }

      // like.save();
      // console.log(like.id, like.user_id_take, like.user_id_get);
      // res.send({id: like.id, user_id_take: like.user_id_take, user_id_get: like.user_id_get});
      // res.end();
  })


  module.exports = router;