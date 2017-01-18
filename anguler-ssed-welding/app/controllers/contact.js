'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'assets/contact.html',
    controller: 'contactCtrl'
  });
}])

.controller('contactCtrl', [function() {

}]);