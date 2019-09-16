const mysql = require('mysql');
const util = require('util');


const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	// password: "11111111",
	database: "megachat"
});

const db_conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	// password: "11111111"
});

const query = util.promisify(db_conn.query).bind(db_conn);

db_conn.connect(async function(err) {
	if (err)
		throw err;
	else {
		// Checking if database exists. If no creating it and run install script. Else just returning connection
		let sql = "SHOW DATABASES LIKE 'megachat'";
		let res = await query(sql);
		sql = "CREATE DATABASE IF NOT EXISTS megachat";
		await query(sql);
		conn.connect(function(err) {
			if (err)
				throw err;
			else {
				if (res.length == 0) {
					const controller = require('./install.js');
					controller.install();
				}
				console.log('Connected to Database');
			}
		});
	}
});

module.exports = conn;