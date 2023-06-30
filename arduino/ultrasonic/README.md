# Arduino Pro Micro in Windows

## Electrical connections

Connect Arduino Pro Micro to your computer with USB cable.<br>
Connect Ultrasonic Sensor HC-SR04 pins to Arduino:<br>
HC-SR04 pin VCC to Arduino pin VCC<br>
HC-SR04 pin GND to Arduino pin GND<br>
HC-SR04 pin Trig to Arduino pin 3<br>
HC-SR04 pin Echo to Arduino pin 2<br>

Electrical scheme available in electrical_scheme.jpg.

## Download Arduino IDE

Go to:
https://www.arduino.cc/en/software

And download Arduino IDE for your OS.

## Setup

In Arduino IDE software, pick your Arduino from menu: Tools -> Port -> example "COM2 (Arduino Micro)"

In Arduino IDE software, pick your Board from menu: Tools -> Board -> Arduino AVR Boards -> example "Arduino Micro"

## Code

Open ./ultrasonic/ultrasonic.ino file in Arduino IDE.

Click "upload" button to upload it to the board.

Don't run IDE serial monitor in parallel with Node JS code, since port will not be available.

## Setting up Arduino in Windows

If you are experiencing issues with connection, you may need to pick COM port manually. Go to Windows device manager and expand "Ports (COM & LPT)" section. Click right mouse button on COM port to which Arduino is connected and then pick "Properties". In "Port settings" tab you may want to reduce port speed to 9600bps. In the same tab, by clicking "Advanced" button, you can pick port manually. You may need to restart your computer for changes to take effect.