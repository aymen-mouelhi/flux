/**
 * Created by I060307 on 15/10/2014.
 */

var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(express.static(__dirname + '/Pinboard'));
app.listen(process.env.PORT || 5000);