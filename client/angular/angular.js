var myApp = angular.module('myApp', ['ngRoute']);

///////PARTIAL ROUTES!!!///////////

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/static/partials/customers.html'
	})
	.when('/orders', {
		templateUrl: '/static/partials/orders.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});


/////////FACTORIES!!!!////////////

//// ----- customers --------/////////
myApp.factory('customersFactory', function($http){
	var factory = {};
	factory.add_customer = function(info, callback){
		$http.post('/add_customer', info).success(function(output){
			callback(output);
		})
	};
	factory.index = function(callback){
		$http.get('/index_customers').success(function(output){
			callback(output);
		})
	};
	factory.remove_customer = function(info, callback){
		$http.post('/delete_customer', info).success(function(output){
			callback(output);
		})
	};
	return factory;
});

//// ------ orders ----------////////
myApp.factory('ordersFactory', function($http){
	var factory = {};
	factory.products = function(callback){
		var products = [
						{product: "Keyboard PCB"},
						{product: "Keyboard Keycaps"},
						{product: "Keyboard Switches"},
						];
		callback(products);
	}
	factory.quantity = function(callback){
		var quantity = [];
		for(i = 1; i < 101; i ++){
			quantity.push(i);
		};
		callback(quantity);
	}
	factory.add_order = function(info, callback){
		$http.post('/add_order', info).success(function(output){
			callback(output);
		});
	}
	factory.index = function(callback){
		$http.get('/index_orders').success(function(output){
			callback(output);
		});
	}
	return factory;
})

///////CONTROLLERS!!!!////////////

////------ customers -----////////
myApp.controller('customersController', function($scope, customersFactory){
	customersFactory.index(function(data){
		$scope.customers = data;
	});
	$scope.addCustomer = function(){
		customer_with_date = {
								name: $scope.new_customer.name,
								created_at: new Date()
							};
		customersFactory.add_customer(customer_with_date, function(data){
			console.log(data);
			$scope.customers = data;
		})
	};
	$scope.removeCustomer = function(customer){
		customersFactory.remove_customer(customer, function(data){
			$scope.customers = data;
		})
	}
});

////---- orders --------//////////
myApp.controller('ordersController', function($scope, customersFactory, ordersFactory){
	customersFactory.index(function(data){
		$scope.customers = data;
	});
	ordersFactory.index(function(data){
		$scope.orders = data;
		console.log($scope.orders);
	});
	ordersFactory.products(function(data){
		$scope.products = data;
	});
	ordersFactory.quantity(function(data){
		$scope.quantity = data;
	});
	$scope.addOrder = function(){
		var order_with_date = {
								customer_name: $scope.new_order.customer_name,
								product: $scope.new_order.product,
								quantity: $scope.new_order.quantity,
								created_at: new Date()
								};
		ordersFactory.add_order(order_with_date, function(data){
			$scope.orders = data;
		})
	}

});







