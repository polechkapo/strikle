const router = require('express').Router()
const { Pair, User } = require('../db/models')
const { Op } = require('sequelize')

router.route('/chatpage')
  .get(async (req, res) => {
    try {
      const user_id_1 = req.session.userId
      const allPairsUser = await Pair.findAll({
        where: {
          [Op.or]: [{ user_id_1 }, { user_id_2: user_id_1 }]
        },
        include: [{
          model: User,
        }],
        raw: true
      })
      console.log('PAIR SERVER', allPairsUser);
      if (allPairsUser) {
        res.status(200).json({ allPairsUser, loadPairs: true })
      } else {
        res.status(403).json({ loadPairs: false })
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })


module.exports = router