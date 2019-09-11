var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var messageRouter = require('./routes/messages');
var roomRouter = require('./routes/rooms');

var app = express();
var cors = require('cors');

var http = require('http').Server(app);
const config = {pingTimeout: 60000};
var io = require('socket.io')(http, config);

var clients = {};


const chat_controller = require('./routes/controllers/Chat.js')
io.on('connection', function(socket){
	socket.on('add_client', function(user_id){
		socket.user_id = user_id;
	    clients[user_id] = {
	    	"socket": socket.id
	    };
		console.log(clients);
	  //   var sql = "UPDATE users SET connected = 1 WHERE id = ?";
	  //   db.query(sql, socket.user_id, function(err) {
	  //   	if (err)
	  //   		console.log(err.sqlMessage);
	  //   	else {
			// 	var keys = Object.keys(clients);
			// 	for (var i = 0; i < keys.length; i++) {
			// 		if (io.sockets.connected[clients[keys[i]]['socket']] && keys[i] != socket.user_id)
			// 			io.sockets.connected[clients[keys[i]]['socket']].emit('user_connected', {user_id: socket.user_id});
			// 	}
			// }
	  //   });
	});
	socket.on('send_message', function(message){
		console.log(message);
		chat_controller.send_message(io, clients, message);
		
	});

	// socket.on('friend_request', function(query) {
	// 	if (clients[query['user_id']])
	// 		io.sockets.connected[clients[query['user_id']]['socket']].emit('friend_request');
	// });

	// socket.on('history_request', function(query) {
	// 	if (clients[query['user_id']])
	// 		io.sockets.connected[clients[query['user_id']]['socket']].emit('history_request');
	// 	else
	// 		console.log("User " + query['user_id'] + ' isn\'t connected');
	// });

	socket.on('disconnect', function () {
		console.log('User ' + socket.user_id + ' is disconnected!');
		if (!socket.user_id)
			return ;
		delete clients[socket.user_id];
	});
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/messages', messageRouter);
app.use('/rooms', roomRouter);
// app.use('/chat', chatRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
