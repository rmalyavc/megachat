const util = require('util');
var db = require('../config/connection.js');
const query = util.promisify(db.query).bind(db);
const helper = require('./Helper.js');

module.exports = {
	logout: async function(req, res) {
		try {
			let sql = "DELETE lu\
						FROM logged_users lu\
						INNER JOIN logged_users lu2 ON lu2.token = ?\
						WHERE lu.user_id = lu2.user_id";
			await query(sql, req.body.token);
			helper.send_success(res);
		}
		catch (err) {
			console.log(err);
			helper.send_error(res);
		}
	}
}