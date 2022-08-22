const router = require('express').Router();
const { Artist } = require('../db/models');

router.route('/artists')
  .get(async (req, res) => {
    try {
      const user_id = req.session.userId;
      const userArtist = await Artist.findAll({ where: { user_id }, raw: true });

      if (userArtist) {
        console.log(userArtist, 'SRERVER ARTUIST');
        res.status(200).json(userArtist);
      } else {
        res.status(403).json({ loadingArtists: false });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .post(async (req, res) => {
    try {
      const { artists } = req.body;
      const user_id = req.session.userId;
      const checkArtist = await Artist.findAll({ where: { user_id }, raw: true });

      if (checkArtist.length === 5) {
        res.status(404).json({ message: 'У вас уже добавленны 5 артистов.', addedArtist: false })
      } else {
        if (artists) {
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

          res.status(200).json({ added: true, answer, user_id });
        } else {
          res.status(404).json({ added: false });
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  .put(async (req, res) => {
    try {
      const { artists } = req.body;
      const user_id = req.session.userId;
      console.log('`eserve`r artist', artists);
      if (artists) {
        await Artist.destroy({ where: { user_id } })
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
        console.log('ARTIST END', answer);
        res.status(200).json({ edit: true, answer, user_id });
      } else {
        res.status(404).json({ edit: false });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })



module.exports = router;
