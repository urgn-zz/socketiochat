var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('balabaka', function(message) {
        console.log(message);
        io.emit('zaza', message);
    });
});

http.listen(3000, () => {
    console.log("listening on *:3000");
});