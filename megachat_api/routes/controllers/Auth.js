const util = require('util');
var db = require('../config/connection.js');
const query = util.promisify(db.query).bind(db);
const helper = require('./Helper.js');

module.exports = {
	is_logged: async function(req, res, next = false) {
		try {
			let token = req.query.token || req.body.token || '';
			let user_id = req.query.user_id || req.body.user_id || '';
			let sql = "SELECT id, user_id\
						FROM logged_users\
						WHERE token = ?\
						AND last_seen > DATE_SUB(NOW(), INTERVAL 1 HOUR)";
			let rows = await query(sql, token);
			let param = token;
			if (rows.length > 0) {
				sql = "UPDATE logged_users\
						SET last_seen = NOW()\
						WHERE token = ?";
			}
			else {
				param = user_id;
				sql = "DELETE FROM logged_users WHERE user_id = ?";
			}
			await query(sql, param);
			if (!next) {
				helper.send_success(res, {
					is_logged: rows.length > 0
				});
			}
			else if (rows.length > 0) {
				next();
			}
			else {
				helper.send_error(res, 401);
			}
		}
		catch (err) {
			console.log(err);
			helper.send_error(res);
		}
	}}