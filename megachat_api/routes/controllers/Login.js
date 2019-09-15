const util = require('util');
var db = require('../config/connection.js');
const query = util.promisify(db.query).bind(db);
var hash = require('password-hash');
const helper = require('./Helper.js');

module.exports = {
	login: async function(req, res) {
		let sql = "SELECT id, password\
					FROM users\
					WHERE login = ?";
		try {
			// Checking if user exists
			let rows = await query(sql, req.body.login);
			if (rows.length == 0) {
				helper.send_error(res, 'User not found');
			}
			else {
				let user = rows[0];
				if (!hash.verify(req.body.password, user.password)) {
					helper.send_error(res, 'Invalid Password');
				}
				// If verified, then creating session record in db
				else {
					let del_sql = "DELETE FROM logged_users WHERE user_id = ?";
					let ins_sql = "INSERT INTO logged_users (id, user_id, token) VALUES (UUID(), ?, UUID())";
					let select_sql = "SELECT u.id, u.login, u.first_name, u.last_name, u.email, lu.token\
									FROM users u\
									INNER JOIN logged_users lu ON lu.user_id = u.id AND lu.last_seen >= DATE_SUB(NOW(), INTERVAL 1 HOUR)\
									WHERE u.id = ?";
					try {
						await query(del_sql, user.id);
						await query(ins_sql, user.id);
						rows = await query(select_sql, user.id);
						if (rows.length > 0) {
							helper.send_success(res, rows[0]);
						}
						else {
							helper.send_error(res, 'Failed to login user. Please contact your administrator');
						}
					}
					catch(err) {
						console.log(err);
						helper.send_error(res);
					}
				}
			}
		}
		catch(err) {
			console.log(err);
			helper.send_error(res);
		}
	},
	is_logged: async function(req, res) {
		try {
			// Checking if session is not expired. If no, then refresh the token
			let sql = "SELECT id, user_id\
						FROM logged_users\
						WHERE token = ?\
						AND last_seen > DATE_SUB(NOW(), INTERVAL 1 HOUR)";
			let rows = await query(sql, req.query.token);
			let param = req.query.token;
			if (rows.length > 0) {
				sql = "UPDATE logged_users\
						SET last_seen = NOW()\
						WHERE token = ?";
			}
			else {
				param = req.query.user_id;
				sql = "DELETE FROM logged_users WHERE user_id = ?";
			}
			await query(sql, param);
			helper.send_success(res, {
				is_logged: rows.length > 0
			});
		}
		catch (err) {
			console.log(err);
			helper.send_error(res);
		}
	}
}