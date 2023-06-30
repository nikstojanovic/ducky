const { ReadlineParser } = require('@serialport/parser-readline')
const { SerialPort } = require('serialport')
const ws = require('ws');

const serialPort = 'COM2';
const baudRate = 9600;
const webSocketPort = 443;

// SERIAL CONNECTION PART
const port = new SerialPort({
    path: serialPort,
    baudRate: baudRate, // pair this value to windows com port setting and arduino setting
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

port.pipe(parser);

// WEBSOCKET PART
const server = new ws.WebSocketServer({ port: webSocketPort });

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