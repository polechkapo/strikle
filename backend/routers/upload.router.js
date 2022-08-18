const router = require('express').Router();
const fileMiddleware = require('../mw/file')


router.post('/', fileMiddleware.single('avatar'), (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
      console.log(error);
    }
  
})

module.exports = router;
