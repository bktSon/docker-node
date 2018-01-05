'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const isTestFinish = module.exports = {};

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/run', (req, res) => {
    res.send('Hello run');
});

app.get('/start', (req, res) => {
    res.send('Hello run');
});

app.get('/start2', (req, res) => {
    res.send('Hello run');
});

let server = app.listen(PORT);

console.log(`Running on http://localhost:${PORT}`);

isTestFinish.closeServer = function(){
    server.close();
};