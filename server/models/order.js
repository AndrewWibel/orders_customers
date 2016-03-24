var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	customer_name: {type:String, required: true}, ///// validations!
	product: {type:String, required: true}, ///// validations!
	quantity: {type:Number, required: true}, ///// validations!
	created_at: {type: Date, default: Date.now}
});

mongoose.model('Order', OrderSchema);