const router = require('express').Router()
const { Genre, User_Genre } = require('../db/models')

router.route('/genre')
  .get(async (req, res) => {
    try {
      const allGenres = await Genre.findAll({ raw: true })

      if (allGenres) {
        return res.status(200).json(allGenres)
      } else {
        return res.status(404).json({ message: 'Genres in not defined' })
      }

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })


  router.route('/genres')
  .get(async (req, res) => {
    try {
      const allUsersGenres = await User_Genre.findAll({
        include: {
          raw: true,
          model: Genre,
          attributes: ['id', 'title'],
        }, 
    });
      if (allUsersGenres) {
        return res.status(200).json(allUsersGenres)
      } else {
        return res.status(404).json({ message: 'usersGenres in not defined' })
      }

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })


  router.route('/genres/user')
  .get(async (req, res) => {
    try {
      const allUserGenres = await User_Genre.findAll({
        where: { user_id: req.session.userId },
        include: {
          raw: true,
          model: Genre,
          attributes: ['id', 'title'],
        }, 
    });
      if (allUserGenres) {
        return res.status(200).json(allUserGenres)
      } else {
        return res.status(404).json({ message: 'usersGenres in not defined' })
      }

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }) 
module.exports = router