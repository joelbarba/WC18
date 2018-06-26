'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(function($routeProvider) {
  "ngInject";
  $routeProvider.when('/register', {
    templateUrl: 'views/register.html',
    controller: function() {}
  });
});