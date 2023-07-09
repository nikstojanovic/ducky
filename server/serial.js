const { ReadlineParser } = require('@serialport/parser-readline')
const { SerialPort } = require('serialport')
const SERIAL_PORT = 'COM2';
const BAUD_RATE = 9600;

const port = new SerialPort({
    path: SERIAL_PORT,
    baudRate: BAUD_RATE, // pair this value to windows com port setting and arduino setting
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

port.pipe(parser);

module.exports = parser;