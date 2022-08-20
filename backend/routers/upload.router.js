const photoUploadFileRouter = require('express').Router();
const fileuploadphoto = require('../uploadFile');
const { User } = require('../db/models');

photoUploadFileRouter.post('/', async (req, res) => {
  try {
    const file = req.files.homesImg;
    const arrUrl = await fileuploadphoto(file);
    console.log(arrUrl, 'arrUrl');
    res.json(arrUrl);
  } catch { console.error; }
});

photoUploadFileRouter.put('/edit', async (req, res) => {
  try {
    const file = req.files.homesImg;
    console.log(file, 'afqk');
    const arrUrl = await fileuploadphoto(file);
    if (req.session.userId) {
      console.log('я тут')
      const user = await User.findOne({ where: { id: req.session.userId } });
      user.avatar = arrUrl;
      user.save();
      res.status(200);
      res.end();
    } 
  } catch { console.error; }
});


module.exports = photoUploadFileRouter;
