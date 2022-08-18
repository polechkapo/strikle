const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/avatars')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

// const upload = multer({ storage: storage })

module.exports = multer({storage, fileFilter});
