const util = require('util');
var db = require('../config/connection.js');
const query = util.promisify(db.query).bind(db);
var uuid = require('uuid/v4');
var controller = require('./Message.js');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
	wordsPerSentence: {
		min: 4,
		max: 16
	}
});

var spam_bot = '';

function get_random_number(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
				if (clients[row['user_id']]) {
					io.sockets.connected[clients[row['user_id']]['socket']].emit('chat_message', message);
				}
				if (row['login'] == 'echo_bot' || row['login'] == 'reverse_bot') {
					let timeout = row['login'] == 'reverse_bot' ? 3000 : 0;
					setTimeout(async function() {
						new_message = {
							id: uuid(),
							author: row['user_id'],
							text: row['login'] == 'echo_bot' ? message.text : message.text.split("").reverse().join(""),
							room_id: message.room_id
						};
						let result = await controller.save_message(new_message);
						if (clients[message.author]) {
							io.sockets.connected[clients[message.author]['socket']].emit('chat_message', new_message);
						}
					}, timeout);
				}
			});


		}
		catch(err) {
			console.log(err);
		}
	},
	start_spam_bot: async function(io, clients, timeout = 10000) {
		try {
			setTimeout(async () => {
				let users = Object.keys(clients);
				if (users.length > 0) {
					if (!spam_bot) {
						let sql = "SELECT id FROM users WHERE is_bot = 1 AND login = 'spam_bot'";
						let rows = await query(sql);
						spam_bot = rows[0]['id'];
					}
					let user_list = "'" + users.join("','") + "'";
					let sql = `SELECT room_id, user_id\
								FROM room_user \
								WHERE room_id IN (SELECT DISTINCT ru1.room_id AS room_id\
											FROM room_user ru1, room_user ru2\
											WHERE ru1.user_id = '${spam_bot}' AND ru2.user_id IN (${user_list})\
											AND ru1.room_id = ru2.room_id)\
								AND user_id <> '${spam_bot}'`;
					let rows = await query(sql);
					let messages = [];
					let values = '';
					sql = "INSERT INTO messages (id, author, text, room_id) VALUES ";
					rows.forEach(function(row, index) {
						let new_message = {
							id: uuid(),
							author: spam_bot,
							text: lorem.generateSentences(get_random_number(1, 6)),
							room_id: row['room_id'],
							send_to: row['user_id']
						};
						if (values)
							values += ', ';
						values += `('${new_message['id']}', '${spam_bot}', '${new_message['text']}', '${new_message['room_id']}')`;
						messages.push(new_message);
					});
					if (values) {
						sql += values;
						await query(sql);
						messages.forEach(function(message, index) {
							if (clients[message.send_to]) {
								io.sockets.connected[clients[message.send_to]['socket']].emit('chat_message', message);
							}
						});
					}
				}
				this.start_spam_bot(io, clients, get_random_number(10000, 120000));
			}, timeout);
		}
		catch(err) {
			console.log(err);
		}
	}
}