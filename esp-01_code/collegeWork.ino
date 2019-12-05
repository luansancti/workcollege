ESP8266WebServer server;

int pinB = 2;

  void setup()
  {
    Serial.begin(115200);
    WiFi.mode(WIFI_AP);
    WiFi.setSleepMode(WIFI_NONE_SLEEP);
    createAP();
    pinMode(pinA, OUTPUT);
    digitalWrite(pinB, LOW);
    delay(300); 
    server.on("/", []() {
     server.send(200, "text/plain", "Listening!");
    });
    server.on("/ligar", turnon);
    server.on("/desligar", turnoff);
    server.begin();
  }

  void loop()
  {
   server.handleClient();  
  }

  void turnon() {
    digitalWrite(pinB, LOW);
    server.send(200, "text/json", "ligado");
  }


  void turnoff() {
    digitalWrite(pinB, HIGH);
    server.send(200, "text/json", "desligado");
  }

  void createAP() {
   IPAddress ip(192, 168, 4, 1);
   IPAddress gateway(192, 168, 4, 1);
   IPAddress subnet(255, 255, 255, 0);

   WiFi.softAPConfig(ip, gateway, subnet);
   Serial.print("Setting soft-AP ... ");
   Serial.println(WiFi.softAP("IOTDEVICE", "abacate123") ? "Ready" : "Failed!");
  }
