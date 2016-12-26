var t = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.use(t.static(__dirname + '/public'));

io.on('connection', function (socket) {
  
 
  socket.on('data', function (data) {
    
    console.log(data);
    io.emit('data',data);
  });

  
 
});