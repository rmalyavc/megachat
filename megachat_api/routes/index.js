var express = require('express');
var router = express.Router();
var install = require('./config/install.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/install', function(req, res, next) {
	install.install(res);
});

module.exports = router;
