# Arduino Pro Micro serial connection web server (NodeJS) and client (Vanilla JS)

## Project

<br>

A simple JS game which uses Arduino ultrasonic sensor HC-SR04 as a controller. Position the sensor right below your squatting position. Duck image will be displayed in random periods between 1 and 3 seconds. When image appears, you will reset the timer and hide the duck image by squatting.

<br>

## Installation

<br>

To install packages needed for server application, in the project directory, run:

### `npm install`

<br>

To run the server, run:

### `npm start`

<br>

Game is available at http://localhost:3000/ in the browser after the server is started.

<br>

## Setup

<br>

Web server communicates with web client by means of Web Socket. Default port is 443. This setting should be synchronized between server ./server/webSocket.js and client ./client/js/script.js

You need to syncronize baud rate in Arduino setup, Windows port setup and serial port setup in index.js file of web server. COM port should also be synchronized between all mentioned settings.

Default baud rate is fairly slow, 9600bps, to prevent data glitches. Default COM port is COM2.

Detailed Arduino setup can be found in ./arduino/ultrasonic/README.md

## Troubleshooting

1. If you keep getting numbers instead of strings from Arduino writing to serial port, you should use double quotations "some_string" instead of single quotations 'some_string'

2. Error: Opening COM2: File not found - your device isn't present at COM port