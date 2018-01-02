const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res){
  res.send('Hello world from Distelli & Docker!');
});

app.get('/run', function (req, res) {
   res.send('hello world')
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

