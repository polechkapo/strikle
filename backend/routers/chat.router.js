const router = require('express').Router()
const { Chat } = require('../db/models')

router.route('/chat')
  .post(async (req, res) => {
    try {
      const user_id_1 = req.session.userId
      const { user_id_2 } = req.body
      const chat = await Chat.findOne({ where: { user_id_1, user_id_2 }, raw: true })
      const chat1 = await Chat.findOne({ where: { user_id_1: user_id_2, user_id_2: user_id_1 }, raw: true })
      console.log(chat, 'START');
      if (chat || chat1) {
        chat ? res.status(200).json({ addedChat: true, chat }) : res.status(200).json({ addedChat: true, chat: chat1 })
      } else {
        const chat = await Chat.create({ user_id_1, user_id_2 }, { raw: true })
        console.log(chat, 'MIDLE');
        if (chat) {
          res.status(200).json({ addedChat: true, chat })
        } else {
          res.status(403).json({ addedChat: false })
        }
      }

    } catch (error) {
      res.status(500).json({ addedUserIdInChat: false })
    }
  })

module.exports = router