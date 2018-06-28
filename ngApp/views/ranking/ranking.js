'use strict';

angular.module('myApp.ranking', ['ngRoute'])

.config(function($routeProvider) {
  "ngInject";
  $routeProvider.when('/ranking', {
    templateUrl: 'views/ranking/ranking.html',
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