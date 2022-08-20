const router = require('express').Router();
const { Artist } = require('../db/models');

router.route('/artists')
  .post(async (req, res) => {
    try {
      const { artists } = req.body;
      const user_id = req.session.userId
      console.log('START',user_id,artists);
      if (artists) {
        console.log('SERVER ARTISTS', artists, user_id);
        for(let i = 0; i < artists.length; i++){
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

        return res.status(200).json({ added: true, answer, user_id});
      } else {
        return res.status(404).json({ added: false });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
