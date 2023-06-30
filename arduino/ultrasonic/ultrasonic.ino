const int trigPin = 3; // sensor trigger
const int echoPin = 2; // sensor echo

long duration, distanceInCentimeters;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
}

void loop() {
    digitalWrite(trigPin, LOW);
    delayMicroseconds(200);
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(1000);
    digitalWrite(trigPin, LOW);
    duration = pulseIn(echoPin, HIGH);
    distanceInCentimeters = (duration / 2) / 29.1;
    
    if (distanceInCentimeters < 40 && distanceInCentimeters > 10) {
      Serial.println("near");
    } else {
      Serial.println("far");
    }
    delay(50);
}
