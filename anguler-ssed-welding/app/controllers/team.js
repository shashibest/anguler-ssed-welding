'use strict';

angular.module('myApp.team', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/team', {
    templateUrl: 'assets/team.html',
    controller: 'teamCtrl'
  });
}])

.controller('teamCtrl', [function() {

}]);