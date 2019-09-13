var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(function(req, res, next) {
	let controller = require('./controllers/Auth.js');
	controller.is_logged(req, res, next);
});

router.post('/create', function(req, res, next) {
	let controller = require('./controllers/Message.js');
	controller.post_message(req, res);
});

module.exports = router;