const util = require('util');
var db = require('../config/connection.js');
const query = util.promisify(db.query).bind(db);
var uuid = require('uuid/v4');
var controller = require('./Message.js');

module.exports = {
	send_message: async function(io, clients, message) {
		try {
			var new_message = false;
			let sql = "SELECT ru.user_id, u.login\
						FROM room_user ru\
						INNER JOIN users u ON u.id = ru.user_id\
						WHERE ru.room_id = ?";

			let rows = await query(sql, message.room_id);
			rows.forEach(function(row, index) {
				if (row['login'] == 'echo_bot' || row['login'] == 'reverse_bot') {
					new_message = {
						id: uuid(),
						author: row['user_id'],
						text: row['login'] == 'echo_bot' ? message.text : message.text.split("").reverse().join(""),
						room_id: message.room_id
					};
					let result = controller.save_message(new_message);
				}
				if (clients[row['user_id']]) {
					console.log('SENDING TO ' + row['user_id']);
					io.sockets.connected[clients[row['user_id']]['socket']].emit('chat_message', message);
					if (new_message) {
						console.log('SENDING FROM BOT TO ' + row['login']);
						io.sockets.connected[clients[row['user_id']]['socket']].emit('chat_message', new_message);
					}
				}
			});


		}
		catch(err) {
			console.log(err);
		}
	}
}