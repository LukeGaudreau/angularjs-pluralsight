(function() {

    var app = angular.module("githubViewer", []);

    var MainCtrl = function($scope, $http) {

	var logErrors = function(reason){
	    console.log(reason.status + ' ' + reason.statusText);
	};
	
	var onUserComplete = function(response){
	    $scope.user = response.data;
	    $http.get($scope.user.repos_url)
		.then(onRepos, onError);
	};
	
	var onRepos = function(response){
	    $scope.repos = response.data;
	};

	var onError = function(reason){
	    $scope.error = "Could not fetch the data.";
	    logErrors(reason);
	};
	
	$scope.search = function(username){

	    $http.get("https://api.github.com/users/" + username)
		.then(onUserComplete, onError);

	};

	$scope.username = "angular";
	$scope.message = "GitHub Viewer";
	$scope.repoSortOrder = "-stargazers_count";

    };


    app.controller("MainCtrl", ["$scope", "$http", MainCtrl]);

}());
