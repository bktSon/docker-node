let express = require('express');
let app = express();
let isFinishTest = module.exports = {};

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/run', function (req, res) {
    res.send('Hello sonbkt');
});

let server = app.listen(3000, function () {
    console.log('Magic is happening on port 3000');
});

isFinishTest.closeServer = function () {
    server.close();
};
