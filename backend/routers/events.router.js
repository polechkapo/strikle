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
  .post(async (req, res) => {
    const { event_id, user_id, comment } = req.body
    const newComment = await Comment.create({
      event_id,
      user_id,
      comment
    });

    const resultComment = await Comment.findOne({
      where: {
        event_id,
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
  .post(async (req, res) => {
    try {
      const { user_id, event_id } = req.body
      // console.log(req.body, 'EVENT SERVER');
      const checkUserInEvent = await Participant.findOne({ where: { user_id, event_id } })
      // console.log(checkUserInEvent, 'checkUserInEvent');
      if (!checkUserInEvent) {
        const newParticipant = await Participant.create({
          user_id,
          event_id,
        });
        newParticipant.save();
        const allParticipants = await Participant.findAll({
          raw: true,
          include: {
            raw: true,
            model: User,
            attributes: ['id', 'username', 'avatar'],
          },
        })
        res.send(allParticipants);
        res.end();
      } else {
        const deleteUserInEvent = await Participant.destroy({ where: { user_id, event_id } })
        // console.log(deleteUserInEvent, 'deleteUserInEvent');
        if (deleteUserInEvent) {
          const allParticipants = await Participant.findAll({
            raw: true,
            include: {
              raw: true,
              model: User,
              attributes: ['id', 'username', 'avatar'],
            },
          })
          console.log('SERVERRRR', allParticipants);
          res.status(201).send(allParticipants)
          res.end();
        } else {
          res.status(403).json({ deleteUserInEvent: false })
        }
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }

  })

router.route('/events/new')
  .post(async (req, res) => {
    const { date, title, description, photo } = req.body
    console.log(req.body)
    const newEvent = await Event.create({
      user_id: req.session.userId,
      date,
      title,
      photo,
      description,

    });
    newEvent.save();
    res.send(newEvent);
  })

router.route('/events/delete')
  .delete(async (req, res) => {
    const { id } = req.body;
    await Event.destroy({ where: { id } });
    res.send(id);
  });

router.route('/events/edit')
  .put(async (req, res) => {
    try {
      const { date, title, description, photo, id } = req.body;
      if (date === '') {
        const editEvent = await Event.findOne({ where: { id } });
        editEvent.title = title,
          editEvent.description = description,
          editEvent.photo = photo,
          editEvent.save();
        res.status(203).json(editEvent);
        res.end();
      } else {
        const editEvent = await Event.findOne({ where: { id } });
        editEvent.title = title,
          editEvent.description = description,
          editEvent.photo = photo,
          editEvent.date = date,
          editEvent.save();
        res.status(203).json(editEvent);
        res.end();
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router