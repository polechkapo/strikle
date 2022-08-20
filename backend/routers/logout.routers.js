const router = require('express').Router();
// удаляем сессию и чистим куки

router.route('/logout')
  .delete((req, res) => {
      req.session.destroy((error) => {
        if (error) {
          console.log(error.message);
        }
        res.clearCookie('user_sid'); // чистим куки
        res.send({ delete: true })
      });
  });

module.exports = router;
