const util = require('util');
var db = require('../config/connection.js');
const query = util.promisify(db.query).bind(db);
var hash = require('password-hash');
const helper = require('./Helper.js');
const validator = require('../validators/Register.js');
var uuid = require('uuid/v4');

module.exports = {
	register: async function(req, res) {
		let data = req.body;
		// Validating input data
		if (!validator.valid_register_data(data)) {
			helper.send_error(res, 'Invalid Data');
		}
		else {
			try {
				// Checking if login and email are unique. If no, send error
				let sql = "SELECT login, email FROM users WHERE login = ? OR email = ?";
				let rows = await query(sql, [data['login'], data['email']]);
				if (rows.length > 0) {
					let error = '';
					if (rows[0]['login'] == data['login'] && rows[0]['email'] == data['email'])
						error = 'Login and email are already exist';
					else if (rows[0]['login'] == data['login'])
						error = 'Login already exists';
					else
						error = 'Email already exists';
					helper.send_error(res, error);
				}
				else {
					// Inserting new user to db
					sql = "INSERT INTO users SET ?";
					let new_user = {
						id: uuid(),
						login: data['login'],
						password: hash.generate(data['password'], {algorithm: 'sha256'}),
						email: data['email'],
						first_name: data['first_name'] || '',
						last_name: data['last_name'] || ''
					}
					await query(sql, new_user);
					// Creating default rooms for all bots
					sql = "SELECT id AS user_id, UUID() AS room_id\
							FROM users\
							WHERE is_bot = 1";
					let rows = await query(sql);

					let r_sql = "INSERT INTO rooms (id) VALUES ";
					let ru_sql = "INSERT INTO room_user (id, room_id, user_id) VALUES ";
					rows.forEach(function(row, index) {
						if (index > 0) {
							r_sql += ', ';
							ru_sql += ', ';
						}
						r_sql += `('${row["room_id"]}')`;
						ru_sql += `(UUID(), '${row["room_id"]}', '${new_user["id"]}')`;
						ru_sql += `, (UUID(), '${row["room_id"]}', '${row["user_id"]}')`;
					});
					await query(r_sql);
					await query(ru_sql);
					helper.send_success(res);
				}
			}
			catch(err) {
				console.log(err);
				helper.send_error(res);
			}
		}
	}
}