let express = require('express');
const app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', function(socket){

    socket.on('sendMessage', function (msg) {
        console.log(JSON.stringify(msg,null,2));
        io.emit('sendMessage', msg);
    });
});

http.listen(3001);