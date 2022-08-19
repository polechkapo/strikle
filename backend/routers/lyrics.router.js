const router = require('express').Router();
const lyricsFinder = require("lyrics-finder");

router.route('/')
    .get( async (req, res) => {
    const lyrics =
      (await lyricsFinder(req.query.artist, req.query.track)) || "No Lyrics Found"
    res.json({ lyrics })
  })


  module.exports = router;