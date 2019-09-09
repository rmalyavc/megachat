const util = require('util');
var db = require('../config/connection.js');
const query = util.promisify(db.query).bind(db);
const helper = require('./Helper.js');
var uuid = require('uuid/v4');

module.exports = {
	get_messages: async function(req, res) {
		try {
			let sql = "SELECT m.id, m.author, m.text, m.time, CONCAT(u.first_name, ' ', u.last_name) AS author_name\
						FROM messages m\
						INNER JOIN users u ON u.id = m.author\
						WHERE m.room_id = ?\
						ORDER BY m.time";
			let rows = await query(sql, req.query.room_id);
			helper.send_success(res, {
				room_id: req.query.room_id,
				messages: rows.length > 0 ? rows : []
			});
		}
		catch(err) {
			console.log(err);
			helper.send_error(res);
		}
	},
	post_message: async function(req, res) {
		try {
			let sql = "INSERT INTO messages SET ?";
			let message = {
				id: uuid(),
				author: req.body.user_id,
				text: req.body.message,
				room_id: req.body.room_id
			}
			await query(sql, message);
			helper.send_success(res, message);
		}
		catch(err) {
			console.log(err);
			helper.send_error(res);
		}
	}
}