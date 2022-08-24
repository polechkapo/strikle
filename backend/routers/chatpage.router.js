const router = require('express').Router()
const { Pair, User } = require('../db/models')
const { Op } = require('sequelize')

router.route('/chatpage')
  .get(async (req, res) => {
    try {
      const user_id_1 = req.session.userId
      const PairsUser = await Pair.findAll({
        attributes: ['user_id_1', 'user_id_2'],
        where: {
          [Op.or]: [{ user_id_1 }, { user_id_2: user_id_1 }]
        },
        raw: true
      })

      const arr = []
      PairsUser.forEach((el) => {
        el.user_id_1 === user_id_1 ? arr.push(el.user_id_2) : arr.push(el.user_id_1)
      })

      const allPairsUser = await User.findAll({ where: { id: arr } })
      console.log('PAIR arr', arr);
      if (allPairsUser) {
        res.status(200).json({allPairsUser , loadPairs: true })
      } else {
        res.status(403).json({ loadPairs: false })
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })


module.exports = router