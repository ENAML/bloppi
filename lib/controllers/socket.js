'use strict';

var io = require('socket.io');

function chat (server) {

  var socket = io(server);

  socket.on('connection', function(userSocket){//socket and userSocket must be diff
    //console.log('a user connected');
    userSocket.on('post message', function(msg){
      console.log(msg);
      socket.emit('chat message', msg);
    });
  });

};

exports.chat = chat;