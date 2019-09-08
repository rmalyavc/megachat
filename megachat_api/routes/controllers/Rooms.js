const util = require('util');
var db = require('../config/connection.js');
const query = util.promisify(db.query).bind(db);
const helper = require('./Helper.js');
var uuid = require('uuid/v4');

module.exports = {
	get_rooms: async function(req, res) {
		try {
			let sql = "SELECT r.id AS room_id, u.id AS user_id, u.login, CONCAT(u.first_name, ' ', u.last_name) AS full_name,\
							(SELECT COUNT(*)\
							FROM messages\
							WHERE room_id = r.id\
							AND author <> ?\
							AND id NOT IN (SELECT message_id FROM message_user WHERE user_id = ?)) AS unread_messages,\
							UPPER(CONCAT(SUBSTRING(u.first_name, 1, 1), SUBSTRING(u.last_name, 1, 1))) AS initials\
						FROM users u\
						LEFT JOIN room_user ru ON ru.user_id = u.id\
						LEFT JOIN rooms r ON r.id = ru.room_id\
						WHERE u.id <> ?\
						GROUP BY r.id, u.id";
			let rows = await query(sql, [req.query.user_id, req.query.user_id, req.query.user_id]);
			helper.send_success(res, rows);
		}
		catch(err) {
			console.log(err);
			helper.send_error(res);
		}
	},
	check_room: async function (req, res, next) {
		try {
			let sql = "SELECT r.id\
						FROM rooms r\
						WHERE r.id = ?\
						OR (SELECT COUNT(*)\
							FROM room_user\
							WHERE room_id = r.id\
							AND user_id IN (?, ?)) = 2";
			let rows = await query(sql, [req.query.room_id, req.query.room_id, req.query.user_id]);
			if (rows.length > 0) {
				next('route');
			}
			else {
				sql = "SELECT id FROM users WHERE id = ?";
				rows = await query(sql, req.query.room_id);
				if (rows.length == 0) {
					helper.send_error(res, 'Room not found');
				}
				else {
					let user_id = req.query.room_id;
					let room_id = uuid();
					let r_sql = "INSERT INTO rooms SET ?";
					let ru_sql = "INSERT INTO room_user (id, room_id, user_id)\
									VALUES (UUID(), ?, ?), (UUID(), ?, ?)";
					await query(r_sql, {id: room_id});
					await query(ru_sql, [room_id, user_id, room_id, req.query.user_id]);
					req.query.room_id = room_id;
					next('route');
				}
			}
		}
		catch(err) {
			console.log(err);
			helper.send_error(res);
		}
	}
}