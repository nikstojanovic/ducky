const ws = require('ws');
const parser = require('./serial');

const WEB_SOCKET_PORT = 443;

const server = new ws.WebSocketServer({ port: WEB_SOCKET_PORT });

server.on('connection', (socket) => {
    parser.on('data', function(data) {
        // data will be 'near' or 'far' from Arduino COM port
        const message = { type: data, content: data };
        socket.send(JSON.stringify(message));
    });

    // receive a message from the client
    socket.on('message', (data) => {
        const message = JSON.parse(data);
        console.log(message);
    });

    socket.on('close', (data) => {
        const message = JSON.parse(data);
        console.log('Connection closed');
    });
});