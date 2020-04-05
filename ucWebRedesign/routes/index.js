var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home.html')
});

router.get('/contactus', function(req, res, next) {
  res.redirect('/contact.html')
});


module.exports = router;
