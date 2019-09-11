var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(function(req, res, next) {
	let controller = require('./controllers/Auth.js');
	controller.is_logged(req, res, next);
});

// router.use('/', function(req, res, next) {
// 	if (req.query.room_id) {
// 		let controller = require('./controllers/Rooms.js');
// 		controller.check_room(req, res, next);
// 	}
// 	else
// 		next();
// });

router.post('/create', function(req, res, next) {
	let controller = require('./controllers/Message.js');
	controller.post_message(req, res);
});


// router.get('/get_messages', function(req, res, next) {
// 	let controller = require('./controllers/Message.js');
// 	controller.get_messages(req, res);
// });


module.exports = router;