var mysql = require('mysql');
var conn = require('./connection.js');

function create_users() {
	var sql = "CREATE TABLE IF NOT EXISTS users (\
		id INT(6) AUTO_INCREMENT PRIMARY KEY,\
		login VARCHAR(50) NOT NULL UNIQUE,\
		password VARCHAR(100) NOT NULL,\
		email VARCHAR(255) NOT NULL UNIQUE,\
		first_name VARCHAR(50),\
		last_name VARCHAR(50),\
		last_seen DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,\
		connected TINYINT(1) NOT NULL DEFAULT 0\
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
		id INT(11) AUTO_INCREMENT PRIMARY KEY,\
		author INT(6) NOT NULL,\
		dest_user INT(6),\
		text VARCHAR(500) NOT NULL,\
		time TIMESTAMP NOT NULL DEFAULT now(),\
		room_id INT(6) NOT NULL\
	)";
	var rel_sql = "CREATE TABLE IF NOT EXISTS message_user (\
		id INT(11) AUTO_INCREMENT PRIMARY KEY,\
		message_id INT(6) NOT NULL,\
		user_id INT(6) NOT NULL,\
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
	    id INT(6) AUTO_INCREMENT PRIMARY KEY,\
	    active TINYINT(1) NOT NULL DEFAULT 1,\
	    private TINYINT(1) NOT NULL DEFAULT 1\
	)";
	var room_user_sql = "CREATE TABLE IF NOT EXISTS room_user (\
		id INT(6) AUTO_INCREMENT PRIMARY KEY,\
		room_id INT(6) NOT NULL,\
	    user_id INT(6) NOT NULL\
	)";
	var queries = [room_sql, room_user_sql];
	for (var i = 0; i < queries.length; i++) {
		conn.query(queries[i], function(err) {
			if (err)
				console.log(err);
		});
	}
}


module.exports = {
	install: function(res) {
		create_users();
		// create_photo();
		create_messages();
		create_rooms();
	}
}
