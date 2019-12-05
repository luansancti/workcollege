var express = require('express');
var serialport = require('serialport')

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');

  

});
app.get('/off', function (req, res) {
  res.send('Desligado!');
  console.log("lampada desligada")

});

app.get('/on', function (req, res) {
  res.send('Ligado!');
  console.log('lampada ligada')

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});