const util = require('util');
var db = require('../config/connection.js');
const query = util.promisify(db.query).bind(db);
const helper = require('./Helper.js');
var uuid = require('uuid/v4');

module.exports = {
	get_rooms: async function(req, res) {
		try {
			// Getting all rooms or users' ids if rooms are not created for them yet
			let sql = "SELECT r.id AS room_id, u.id AS user_id, u.login, CONCAT(u.first_name, ' ', u.last_name) AS full_name,\
							(SELECT COUNT(*)\
							FROM messages\
							WHERE room_id = r.id\
							AND author <> ?\
							AND id NOT IN (SELECT message_id FROM message_user WHERE user_id = ?)) AS unread_messages,\
							UPPER(CONCAT(SUBSTRING(u.first_name, 1, 1), SUBSTRING(u.last_name, 1, 1))) AS initials\
						FROM users u\
						LEFT JOIN room_user ru ON ru.user_id = u.id AND ru.room_id IN (SELECT DISTINCT room_id FROM room_user WHERE user_id = ?)\
						LEFT JOIN rooms r ON r.id = ru.room_id\
						WHERE u.id <> ?\
						GROUP BY r.id, u.id";
			let rows = await query(sql, [req.query.user_id, req.query.user_id, req.query.user_id, req.query.user_id]);
			helper.send_success(res, rows);
		}
		catch(err) {
			console.log(err);
			helper.send_error(res);
		}
	},
	check_room: async function (req, res, next) {
		try {
			// Checking if room is already exists.
			let sql = "SELECT r.id\
						FROM rooms r\
						WHERE r.id = ?\
						OR r.id IN (SELECT DISTINCT ru1.room_id AS room_id\
									FROM room_user ru1, room_user ru2\
									WHERE ru1.user_id = ? AND ru2.user_id = ?\
									AND ru1.room_id = ru2.room_id)";
			let rows = await query(sql, [req.params.room_id, req.params.room_id, req.query.user_id]);
			// If room exists, passing request further
			if (rows.length > 0) {
				req.query.room_id = rows[0]['id'];
				// This should never happen, but just to make sure...
				if (rows.length > 1) {
					let ids = [];
					rows.forEach(function(row, index) {
						if (index > 0)
							ids.push(row['id']);
					});
					let id_list = "'" + ids.join("', '") + "'";
					sql = `DELETE r, ru\
							FROM rooms r\
							INNER JOIN room_user ru ON ru.room_id = r.id\
							WHERE r.id IN (${id_list})`;
					await query(sql, id_list);
				}
				next();
			}
			else {
				// Checking if user_id passed instead of room_id
				sql = "SELECT id FROM users WHERE id = ?";
				rows = await query(sql, req.params.room_id);
				// If user is not found too, then return error
				if (rows.length == 0) {
					helper.send_error(res, 'Room not found');
				}
				else {
					// If user is found, then create new room and relationships
					let user_id = req.params.room_id;
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