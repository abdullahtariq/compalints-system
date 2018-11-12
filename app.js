var express = require('express');
var app = express();
var db = require('./db');
var path = require("path");
var fs = require('fs');

global.__root   = __dirname + '/';
app.use(express.static(__dirname + '/public'));

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

app.get('/apidoc', function(req, res) {
    fs.readFile(__dirname + '/apidoc/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;
