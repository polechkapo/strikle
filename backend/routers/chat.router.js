const router = require('express').Router()
const { Chat, User, Message } = require('../db/models')

router.route('/chat')
  .put(async (req, res) => {
    try {
      const room_id = req.body.payload
      const allMessage = await Message.findAll({
        where: { chat_id: room_id }, order: [
          ['createdAt', 'ASC']
        ], raw: true, include: [{
          model: User
        }]
      })
      if (allMessage) {
        res.status(200).json({ message: true, allMessage })
      } else {
        res.status(403).json({ message: false })
      }
    } catch (error) {
      res.status(500).json({ getChat: false, message: error.message })
    }
  })
  .post(async (req, res) => {
    try {
      const user_id_1 = req.session.userId
      const { user_id_2 } = req.body
      const users = await User.findAll({ where: { id: [user_id_1, user_id_2] }, raw: true })
      const chat = await Chat.findOne({ where: { user_id_1, user_id_2 }, raw: true })
      const chat1 = await Chat.findOne({ where: { user_id_1: user_id_2, user_id_2: user_id_1 }, raw: true })
      if (chat || chat1) {
        chat ? res.status(200).json({ addedChat: true, chat, users }) : res.status(200).json({ addedChat: true, chat: chat1, users })
      } else {
        const chat = await Chat.create({ user_id_1, user_id_2 }, { raw: true })
        if (chat) {
          res.status(200).json({ addedChat: true, chat, users })
        } else {
          res.status(403).json({ addedChat: false })
        }
      }

    } catch (error) {
      res.status(500).json({ addedUserIdInChat: false })
    }
  })

module.exports = router