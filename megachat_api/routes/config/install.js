const util = require('util');
var db = require('./connection.js');
const query = util.promisify(db.query).bind(db);

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
	return query(sql);
}

function create_logged_users() {
	var sql = "CREATE TABLE IF NOT EXISTS logged_users (\
		id VARCHAR(36) NOT NULL PRIMARY KEY,\
		user_id VARCHAR(36) NOT NULL,\
		token VARCHAR(36) NOT NULL,\
		last_seen TIMESTAMP NOT NULL DEFAULT NOW()\
	)";
	return query(sql);
}

function create_messages() {
	var sql = "CREATE TABLE IF NOT EXISTS messages (\
		id VARCHAR(36) NOT NULL PRIMARY KEY,\
		author VARCHAR(36) NOT NULL,\
		text VARCHAR(1000) NOT NULL,\
		time TIMESTAMP NOT NULL DEFAULT NOW(),\
		room_id VARCHAR(36) NOT NULL\
	)";
	return query(sql);
}

function create_message_user() {
	var sql = "CREATE TABLE IF NOT EXISTS message_user (\
		id VARCHAR(36) NOT NULL PRIMARY KEY,\
		message_id VARCHAR(36) NOT NULL,\
		user_id VARCHAR(36) NOT NULL,\
		read_date TIMESTAMP NOT NULL DEFAULT now()\
	)";
	return query(sql);
}

function create_rooms() {
	var sql = "CREATE TABLE IF NOT EXISTS rooms (\
	    id VARCHAR(36) NOT NULL PRIMARY KEY,\
	    active TINYINT(1) NOT NULL DEFAULT 1,\
	    private TINYINT(1) NOT NULL DEFAULT 1\
	)";
	return query(sql);
}

function create_room_user() {
	var sql = "CREATE TABLE IF NOT EXISTS room_user (\
		id VARCHAR(36) NOT NULL PRIMARY KEY,\
		room_id VARCHAR(36) NOT NULL,\
	    user_id VARCHAR(36) NOT NULL\
	)";
	return query(sql);
}

function create_bots() {
	let sql = "INSERT INTO users (id, login, password, email, first_name, last_name, is_bot) VALUES\
		(UUID(), 'echo_bot', '', 'echo@bot.com', 'Echo', 'Bot', 1),\
		(UUID(), 'reverse_bot', '', 'reverse@bot.com', 'Reverse', 'Bot', 1),\
		(UUID(), 'spam_bot', '', 'spam@bot.com', 'Spam', 'Bot', 1),\
		(UUID(), 'ignore_bot', '', 'ignore@bot.com', 'Ignore', 'Bot', 1)";
	return query(sql);
}


module.exports = {
	install: async function() {
		try {
			await create_users();
			await create_logged_users();
			await create_messages();
			await create_message_user()
			await create_rooms();
			await create_room_user();
			await create_bots();
		}
		catch(err) {
			throw err;
		}
	}
}
