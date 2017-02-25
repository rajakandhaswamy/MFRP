var app=angular.module("formValidation",['ngRoute']);
app.constant('Routes', {
			route1: '/route-one',
});
app.config(['$routeProvider', 'Routes', function($routeProvider, Routes){

			$routeProvider
				.when('/route-one', {
					controller: 'page2controller',
					templateUrl: 'partials/page2partial.html',
                    css: 'css/style.css'
				})
		.otherwise({
			controller: 'page2controller',
			templateUrl: 'partials/page2partial.html',
			css: 'css/style.css'
		});
var refresh = function() {
	$http.get('/inputlist').then(function(response) {
		$scope.inputlist = response.data;
		$scope.input = {};
	});
};
refresh();