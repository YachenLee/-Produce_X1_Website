let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
    'YachenLee\'s home page'+'<br>'+
    '<a href="/user/YachenLee/about"> about </a>'+'<br>'+
    '<a href="/user/YachenLee/classA.html"> classA </a>'
    );
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About YachenLee </h1>'+
    '\n <img src="https://i.imgur.com/ZknkV35.jpg" height="100%">'
    );
});

module.exports = router;
