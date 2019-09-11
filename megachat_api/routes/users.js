var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/create', function(req, res, next) {
	let controller = require('./controllers/Register.js');
	controller.register(req, res);
});

router.post('/session/create', function(req, res, next) {
	let controller = require('./controllers/Login.js');
	controller.login(req, res);
});

router.post('/session/destroy', function(req, res, next) {
	let controller = require('./controllers/Logout.js');
	controller.logout(req, res);
});

router.get('/session/validate', function(req, res, next) {
	let controller = require('./controllers/Auth.js');
	controller.is_logged(req, res);
});

module.exports = router;
