var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var server = app.listen(3000, function(){
    console.log('Sever listening on port' + server.address().port)
});
module.exports = app;

var connection = require('./dbconnection');
var route = require('./route')

app.use('/',route)