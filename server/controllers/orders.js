var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return{
		add: function(req, res){
			var new_order = new Order(req.body);
			new_order.save(function(err, data){
				if(err){
					console.log(err);
					console.log("order not saved!")
				}else{
					res.redirect('/index_orders')
				}
			})
		},
		index: function(req, res){
			Order.find({}, function(err, orders){
				if(err){
					console.log(err);
					console.log("unable to retrieve orders!");
				}else{
					res.json(orders);
				}
			})  
		}
	}
})(); ///<<<<------- INVOKE THE FUNCTION!