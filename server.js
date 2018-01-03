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

let server = app.listen(PORT);

console.log(`Running on http://localhost:${PORT}`);

isTestFinish.closeServer = function(){
    server.close();
};