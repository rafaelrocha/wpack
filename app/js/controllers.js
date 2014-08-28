'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('TaskListCtrl', ['$scope', function($scope) {
  	$scope.isDetailsVisible = false;

  	$scope.toggleDetails = function() {
  		$scope.isDetailsVisible = !$scope.isDetailsVisible;
  	};
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
