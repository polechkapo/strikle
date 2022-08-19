const photoUploadFileRouter = require('express').Router();
const fileuploadphoto = require('../uploadFile');

photoUploadFileRouter.post('/', async (req, res) => {
  try {
    const file = req.files.homesImg;
    const arrUrl = await fileuploadphoto(file);
    res.json(arrUrl);
  } catch { console.error; }
});

module.exports = photoUploadFileRouter;
