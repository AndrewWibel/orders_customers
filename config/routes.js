var orders = require('../server/controllers/orders.js');
var customers = require('../server/controllers/customers.js');

module.exports = function(app){
	app.get('/index_customers', function(req, res){
		customers.index(req, res);
	});
	app.post('/add_customer', function(req, res){
		customers.add(req, res);
	});
	app.post('/delete_customer', function(req, res){
		customers.remove(req, res);
	});
	app.post('/add_order', function(req, res){
		orders.add(req, res);
	});
	app.get('/index_orders', function(req, res){
		orders.index(req, res);
	});
};