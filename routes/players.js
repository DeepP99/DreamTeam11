// const express = require('express');
// const router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

// routes/players.js
const express = require('express');
const router = express.Router();

// Players page route
router.get('/players', (req, res) => {
    res.render('players');
});

module.exports = router;
