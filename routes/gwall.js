var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('gwall'); // render tells it to look for view engine setup in app.js, which tells it to look for the hbs doc in views directory for that file name
});

module.exports = router;
