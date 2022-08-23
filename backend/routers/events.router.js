const router = require('express').Router()
const { Event, Comment, User, Participant } = require('../db/models')

router.route('/events')
  .get(async (req, res) => {
    try {
      const allEvents = await Event.findAll({ raw: true })

      if (allEvents) {
        return res.status(200).json(allEvents)
      } else {
        return res.status(404).json({ message: 'Events in not defined' })
      }

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })

  router.route('/comments')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const allComments = await Comment.findAll({ 
        raw: true,
        include: {
          raw: true,
          model: User,
          attributes: ['id', 'username'],
        }, 
       })
 
       if (allComments) {
        return res.status(200).json(allComments)
      } else {
        return res.status(404).json({ message: 'Comments in not defined' })
      }

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })

  router.route('/participants')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const allParticipants = await Participant.findAll({ 
        raw: true,
        include: {
          raw: true,
          model: User,
          attributes: ['id', 'username', 'avatar'],
        }, 
       })
 
       if (allParticipants) {
        return res.status(200).json(allParticipants)
      } else {
        return res.status(404).json({ message: 'Participants in not defined' })
      }

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })

  router.route('/comment')
    .post( async (req, res) => {
      const {event_id, user_id, comment} = req.body
      const newComment = await Comment.create({
         event_id,
         user_id,
         comment
      });

      const resultComment = await Comment.findOne({where: {event_id,
        user_id,
        comment
      },
      raw: true,
      include: {
        model: User,
        attributes: ['id', 'username'],
      }, 
      });
      res.send(resultComment);
      res.end();
  })

  router.route('/participant')
    .post( async (req, res) => {
      const { user_id, event_id } = req.body
      console.log(user_id, event_id, 'asdfghjghjkdfghjkdfghjdfghjdfghj');
      const newParticipant = await Participant.create({
         user_id,
         event_id,
      });
      newParticipant.save();
      const sendParticipant = await Participant.findOne({ 
        where: {user_id,
          event_id
          },
        raw: true,
        include: {
          raw: true,
          model: User,
          attributes: ['id', 'username', 'avatar'],
        }, 
       })
      res.send(sendParticipant);
      res.end();
  })


module.exports = router