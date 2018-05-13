const PORT = 8000;

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.use('/src', express.static(__dirname + '/src'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, function () {
    console.log('Listening on ' + server.address().port);
});

// -------- main ---------

server.lastClientId = 0;

io.on('connection', function (client) {
    client.id = ++server.lastClientId;
    console.log('Client #' + idToStr(client.id, 3) + ' connected...');

    client.on('disconnect', function () {
        console.log();
    });
});


// ------- Tools --------

function idToStr(id, minDigits) {
    let str = id.toString();
    let times = minDigits - str.length;
    for (let i = 0; i < times; i++) {
        str = '0' + str;
    }
    return str;
}
