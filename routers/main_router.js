let express = require('express');
let router = express.Router();
let YachenLee = require('./YachenLee.js');
let PPkritt = require('./PPkritt.js');
let Billkin = require('./Billkin.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/YachenLee', YachenLee);
router.use('/PPkritt', PPkritt);
router.use('/Billkin', Billkin);

module.exports = router;