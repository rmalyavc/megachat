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
		if (!validator.valid_register_data(data)) {
			helper.send_error(res, 'Invalid Data');
		}
		else {
			try {
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
					sql = "INSERT INTO users SET ?";
					var new_user = {
						id: uuid(),
						login: data['login'],
						password: hash.generate(data['password'], {algorithm: 'sha256'}),
						email: data['email'],
						first_name: data['first_name'] ? data['first_name'] : '',
						last_name: data['last_name'] ? data['last_name'] : ''
					}
					await query(sql, new_user);
					helper.send_success(res);
				}
			}
			catch(err) {
				helper.send_error(res);
			}
		}
	}
}