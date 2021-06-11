let express = require('express');
let router = express.Router();
let one = require('./one.js');
let two = require('./two.js');
let three = require('./three.js');
let four = require('./four.js');
let five = require('./five.js');
let six = require('./six.js');
let seven = require('./seven.js');
let eight = require('./eight.js');
let nine = require('./nine.js');
let ten = require('./ten.js');
let eleven = require('./eleven.js');

router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/one', one);
router.use('/two', two);
router.use('/three', three);
router.use('/four', four);
router.use('/five', five);
router.use('/six', six);
router.use('/seven', seven);
router.use('/eight', eight);
router.use('/nine', nine);
router.use('/ten', ten);
router.use('/eleven', eleven);





module.exports = router;