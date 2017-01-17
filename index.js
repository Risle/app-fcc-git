var http = require('http');
var express = require('express');


var app = express();

app.get('/', function(req, res) {
    res.end(`
        <h1>This is the beginning</h1>
    `)
})