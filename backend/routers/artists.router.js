const router = require('express').Router();
const { Artist } = require('../db/models');

router.route('/artists')
  .post(async (req, res) => {
    try {
      const { artists } = req.body;
      const user_id = req.session.userId
      const checkArtist = await Artist.findAll({ where: { user_id }, raw: true })
      console.log('SERVER CHECKARTIST', checkArtist);
      console.log('START', user_id, artists);

      if (checkArtist.length === 5) {
        res.status(404).json({ message: 'У вас уже добавленны 5 артистов.', addedArtist: false })
      } else {
        if (artists) {
          console.log('SERVER ARTISTS', artists, user_id);
          for (let i = 0; i < artists.length; i++) {
            await Artist.create({
              artist: artists[i].artist,
              title: artists[i].title,
              albumUrl: artists[i].img,
              user_id: Number(user_id),
            })
          }

          const answer = await Artist.findAll({
            where: {
              user_id
            },
          }
          )

          return res.status(200).json({ added: true, answer, user_id });
        } else {
          return res.status(404).json({ added: false });
        }
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
