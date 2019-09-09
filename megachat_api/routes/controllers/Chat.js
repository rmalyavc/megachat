const util = require('util');
var db = require('../config/connection.js');
const query = util.promisify(db.query).bind(db);

module.exports = {
	send_message: async function(io, clients, message) {
		try {
			let sql = "SELECT user_id FROM room_user WHERE room_id = ?";

			let rows = await query(sql, message.room_id);

			rows.forEach(function(row, index) {
				if (clients[row['user_id']]) {
					console.log('SENDING TO ' + row['user_id']);
					io.sockets.connected[clients[row['user_id']]['socket']].emit('chat_message', message);
				}
			});
		}
		catch(err) {
			console.log(err);
		}
	}
}