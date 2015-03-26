/**
 * Created by I060307 on 15/10/2014.
 */

var express = require('express');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/Pinboard'));
console.log('Running on localhost:' + port)
app.listen(port);