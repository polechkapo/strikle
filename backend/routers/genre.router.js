const router = require('express').Router()
const { Genre } = require('../db/models')

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

module.exports = router