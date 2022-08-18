const router = require('express').Router();
const { Favorite_Artist, User_genre } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    try {
      const { genres, artists, user_id } = req.body;
      if (artists.length >= 5) {
        artists.map(async (artist) => await Favorite_Artist.create({ artist, user_id }));
        genres.map(async (genre) => await User_genre.create({ genre, user_id }))

        return res.status(200).json({ added: true });
      } else {
        return res.status(404).json({ added: false });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
