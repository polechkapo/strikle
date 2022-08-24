const router = require('express').Router();
const { User_Genre, Genre } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const id = req.session.userId;
      const userGenre = await User_Genre.findAll({
        attributes: ['id', 'user_id'],
        where: { user_id: id }, include: {
          raw: true,
          model: Genre,
          attributes: ['id', 'title']
        }
      });

      if (userGenre) {
        res.status(200).json(userGenre);
      } else {
        res.status(404).json({ loadUserGenre: false })
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  .put(async (req, res) => {
    try {
      const id = req.session.userId;
      const newGenre = req.body.genres;

      if (newGenre) {
        const deleteGenre = await User_Genre.destroy({ where: { user_id: id } })
        // if (deleteGenre) {
        //   // newGenre.map(async (genre) => await User_Genre.create({
        //   //   genre_id: Number(genre),
        //   //   user_id: Number(id)
        //   // }))
        // }

        for (let i = 0; i < newGenre.length; i++) {
          await User_Genre.create({
            user_id: id,
            genre_id: Number(newGenre[i]),
          })
        }

        const userGenre = await User_Genre.findAll({
          attributes: ['id', 'user_id'],
          where: { user_id: id }, include: {
            raw: true,
            model: Genre,
            attributes: ['id', 'title']
          }
        });
        console.log(userGenre, 'SERVER!E!@!E!@E!@');
        res.status(200).json(userGenre)

      } else {
        res.status(400).json({ edit: false })
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { genres } = req.body;
      const user_id = req.session.userId
      if (genres) {

        for (let i = 0; i < genres.length; i++) {
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

        res.status(200).json({ added: true, resultUser, user_id });
      } else {
        res.status(404).json({ added: false });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
