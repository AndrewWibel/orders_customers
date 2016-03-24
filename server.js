var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');


app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

//require mongoose.js file
require('./config/mongoose.js');
//require routes file
var routes_setter = require('./config/routes.js');
routes_setter(app);

// var Customer = mongoose.model('Customer');
// var Order = mongoose.model('Order');

app.listen(9001, function(){
	console.log('server is over 9000!')
});