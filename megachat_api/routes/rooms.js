var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
	let controller = require('./controllers/Auth.js');
	controller.is_logged(req, res, next);
});

router.get('/', function(req, res, next) {
	let controller = require('./controllers/Rooms.js');
	controller.get_rooms(req, res);
});

router.use('/:room_id', function(req, res, next) {
	let controller = require('./controllers/Rooms.js');
	controller.check_room(req, res, next);
});

router.get('/:room_id', function(req, res, next) {
	let controller = require('./controllers/Message.js');
	controller.get_messages(req, res);
});

module.exports = router;