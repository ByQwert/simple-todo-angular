angular.module('App',[])
.controller('Ctrl', function($scope) {
	$scope.inputValue = "";
	$scope.tasks = ['First task', 'Another task'];

	$scope.addTask = function() {
		if ($scope.inputValue) {
			$scope.tasks.push($scope.inputValue);
			$scope.inputValue = '';
		} else {
			alert("Input can't be empty!");
		}		
	}

	$scope.deleteTask = function(task) {
		var index = $scope.tasks.indexOf(task);
		$scope.tasks.splice(index, 1);
	}

});