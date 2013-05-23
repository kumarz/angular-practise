'use strict';


// Declare app level module which depends on filters, and services
var memApp = angular.module('memApp', []);

  memApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/category', {templateUrl: 'partials/partial1.html', controller: 'CategoryController'});
    $routeProvider.when('/category/:name', {templateUrl: 'partials/partial2.html', controller: 'ItemController'});
    $routeProvider.otherwise({redirectTo: '/category'});
  }]);
