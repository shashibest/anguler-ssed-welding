'use strict';

angular.module('myApp.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'assets/port.html',
    controller: 'portfolioCtrl'
  });
}])

.controller('portfolioCtrl', [function() {

}]);