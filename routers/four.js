var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', (req, res) => {
  let options = {
      root: __dirname,
      dotfiles: 'deny'
  }
  res.sendFile("four.html", options)
})



module.exports = router;