const photoUploadFileRouter = require('express').Router();
const fileuploadphoto = require('../uploadFile');
const { User } = require('../db/models');

photoUploadFileRouter.post('/', async (req, res) => {
  try {
    const file = req.files.homesImg;
    const arrUrl = await fileuploadphoto(file);
    res.json(arrUrl);
  } catch { console.error; }
});

photoUploadFileRouter.put('/edit', async (req, res) => {
  try {
    const file = req.files.homesImg;
    const arrUrl = await fileuploadphoto(file);
    if (req.session.userId) {
      const user = await User.findOne({ where: { id: req.session.userId } });
      user.avatar = arrUrl;
      user.save();
      res.status(200);
      res.json({ loadedPhoto: true });
    }
  } catch { console.error; }
});


module.exports = photoUploadFileRouter;
