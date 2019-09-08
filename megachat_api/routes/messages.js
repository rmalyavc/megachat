var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/*', function(req, res, next) {
	let controller = require('./controllers/Auth.js');
	controller.is_logged(req, res, next);
});


router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/get_rooms', function(req, res, next) {
	let controller = require('./controllers/Rooms.js');
	controller.get_rooms(req, res);
});

router.use('/get_messages', function(req, res, next) {
	let controller = require('./controllers/Rooms.js');
	controller.check_room(req, res, next);
});

router.get('/get_messages', function(req, res, next) {
	let controller = require('./controllers/Message.js');
	controller.get_messages(req, res);
});

router.post('/post', function(req, res, next) {
	let controller = require('./controllers/Message.js');
	controller.post_message(req, res);
});

module.exports = router;