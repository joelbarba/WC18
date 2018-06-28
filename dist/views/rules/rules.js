'use strict';

angular.module('myApp.rules', ['ngRoute'])

.config(function($routeProvider) {
  "ngInject";
  $routeProvider.when('/rules', {
    templateUrl: 'views/rules/rules.html',
    controller: function($scope, $uibModal) {


    }
  });
});


// .directive('gameBox', function() {
//   return {
//     restrict: 'AE',
//     replace: true,
//     templateUrl: 'views/register/game-box.html'
//   };
// });