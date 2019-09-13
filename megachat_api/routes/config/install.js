var mysql = require('mysql');
var conn = require('./connection.js');

function create_users() {
	var sql = "CREATE TABLE IF NOT EXISTS users (\
		id VARCHAR(36) NOT NULL PRIMARY KEY,\
		login VARCHAR(100) NOT NULL UNIQUE,\
		password VARCHAR(100) NOT NULL,\
		email VARCHAR(255) NOT NULL UNIQUE,\
		first_name VARCHAR(100),\
		last_name VARCHAR(100),\
		is_bot TINYINT(1) NOT NULL DEFAULT 0\
	)";
	conn.query(sql, function(err) {
		if (err)
			console.log(err);
	});
}

function create_logged_users() {
	var sql = "CREATE TABLE IF NOT EXISTS logged_users (\
		id VARCHAR(36) NOT NULL PRIMARY KEY,\
		user_id VARCHAR(36) NOT NULL,\
		token VARCHAR(36) NOT NULL,\
		last_seen TIMESTAMP NOT NULL DEFAULT NOW()\
	)";
	conn.query(sql, function(err) {
		if (err)
			console.log(err);
	});	
}

// function create_photo() {
// 	var sql = "CREATE TABLE IF NOT EXISTS photo (\
// 		id INT(6) AUTO_INCREMENT PRIMARY KEY,\
// 		user_id INT(6) NOT NULL,\
// 		url VARCHAR(255) NOT NULL,\
// 		avatar TINYINT(1) NOT NULL DEFAULT 0\
// 	)";
// 	conn.query(sql, function(err) {
// 		if (err)
// 			console.log(err);
// 	});
// }


// function create_friends() {
// 	var sql = "CREATE TABLE IF NOT EXISTS friends (\
// 		id1 INT(6) NOT NULL,\
// 		id2 INT(6) NOT NULL,\
// 		active TINYINT(1) NOT NULL DEFAULT 0\
// 	)";
// }

function create_messages() {
	var sql = "CREATE TABLE IF NOT EXISTS messages (\
		id VARCHAR(36) NOT NULL PRIMARY KEY,\
		author VARCHAR(36) NOT NULL,\
		text VARCHAR(1000) NOT NULL,\
		time TIMESTAMP NOT NULL DEFAULT NOW(),\
		room_id VARCHAR(36) NOT NULL\
	)";
	var rel_sql = "CREATE TABLE IF NOT EXISTS message_user (\
		id VARCHAR(36) NOT NULL PRIMARY KEY,\
		message_id VARCHAR(36) NOT NULL,\
		user_id VARCHAR(36) NOT NULL,\
		read_date TIMESTAMP NOT NULL DEFAULT now()\
	)";
	var queries = [sql, rel_sql];
	for (var i = 0; i < queries.length; i++) {
		conn.query(queries[i], function(err) {
			if (err)
				console.log(err);
		});
	}
}

function create_rooms() {
	var room_sql = "CREATE TABLE IF NOT EXISTS rooms (\
	    id VARCHAR(36) NOT NULL PRIMARY KEY,\
	    active TINYINT(1) NOT NULL DEFAULT 1,\
	    private TINYINT(1) NOT NULL DEFAULT 1\
	)";
	var room_user_sql = "CREATE TABLE IF NOT EXISTS room_user (\
		id VARCHAR(36) NOT NULL PRIMARY KEY,\
		room_id VARCHAR(36) NOT NULL,\
	    user_id VARCHAR(36) NOT NULL\
	)";
	var queries = [room_sql, room_user_sql];
	for (var i = 0; i < queries.length; i++) {
		conn.query(queries[i], function(err) {
			if (err)
				console.log(err);
		});
	}
}

function create_bots() {
	let sql = "INSERT INTO users (id, login, password, email, first_name, last_name, is_bot) VALUES\
		(UUID(), 'echo_bot', '', 'echo@bot.com', 'Echo', 'Bot', 1),\
		(UUID(), 'reverse_bot', '', 'reverse@bot.com', 'Reverse', 'Bot', 1),\
		(UUID(), 'spam_bot', '', 'spam@bot.com', 'Spam', 'Bot', 1),\
		(UUID(), 'ignore_bot', '', 'ignore@bot.com', 'Ignore', 'Bot', 1)";
	conn.query(sql, function(err) {
		if (err)
			console.log(err);
	});
}


module.exports = {
	install: function(res) {
		create_users();
		create_logged_users();
		// create_photo();
		create_messages();
		create_rooms();
		create_bots();
	}
}
