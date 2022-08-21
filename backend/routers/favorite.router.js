const router = require('express').Router();
const { User_Genre, Genre } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    try {
      const { genres } = req.body;
      const user_id = req.session.userId
      console.log('START',user_id,genres);
      if (genres) {
        console.log('SERVER GENRE', genres, user_id);
        for(let i = 0; i < genres.length; i++){
          await User_Genre.create({
            genre_id: Number(genres[i]), 
            user_id: Number(user_id)
          })
        }

        const resultUser = await User_Genre.findAll({
          where: {
            user_id
          },
          include: {
            raw: true,
            model: Genre,
            attributes: ['id', 'title'],
          }, 
        }
        )

        return res.status(200).json({ added: true, resultUser , user_id});
      } else {
        return res.status(404).json({ added: false });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
