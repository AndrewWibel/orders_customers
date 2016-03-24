var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return{
		index: function(req, res){
			Customer.find({}, function(err, customers){
				if(err){
					console.log(err);  
					console.log("customers INDEX ERROR");
				}else{
					res.json(customers);
					console.log(customers);
				}
			})
		},
		add: function(req, res){
			var new_cust = new Customer(req.body);
			new_cust.save(function(err, data){
				if(err){
					console.log(err)
					console.log("failed to save new_cust to DB!")
				}else{
					res.redirect('/index_customers');
				}
			})
		},
		remove: function(req, res){
			Customer.remove({_id:req.body._id}, function(err, data){
				if(err){
					console.log("unable to find matching id in DB!")
				}else{
					res.redirect('/index_customers');
				}
			})
		}
	}
})();// <----------- CALL THE FUNCTION!!!

