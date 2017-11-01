(function() {

    var app = angular.module("githubViewer", []);

    var MainCtrl = function($scope, $http) {

	var logErrors = function(reason){
	    console.log(reason.status + ' ' + reason.statusText);
	};
	
	var onUserComplete = function(response){
	    $scope.user = response.data;
	};
	
	var onError = function(reason){
	    $scope.error = "Could not fetch the user";
	    logErrors(reason);
	};
	
	$http.get("https://api.github.com/users/lukegaudreau")
	    .then(onUserComplete, onError);

	$scope.message = "Hello, Angular!";

    };


    app.controller("MainCtrl", ["$scope", "$http", MainCtrl]);

}());
