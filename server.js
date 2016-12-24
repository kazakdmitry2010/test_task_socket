var express = require('express');
var app = express();
var server = app.listen(3000); 
console.log("server is started")
app.use(express.static(__dirname + '/public'));





var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection',newConnection)

function newConnection(socket){
  console.log(socket.id);
};
