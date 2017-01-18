'use strict';

angular.module('myApp.service', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/service', {
    templateUrl: 'assets/service.html',
    controller: 'serviceCtrl'
  });
}])

.controller('serviceCtrl', [function() {

}]);