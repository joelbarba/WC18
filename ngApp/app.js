'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
  , 'myApp.register'
  , 'myApp.ranking'
  , 'myApp.rules'
  , 'myApp.jDirectives'
  , 'myApp.jFilters'
  , 'ui.bootstrap'
  // , 'angularUtils.directives.dirPagination'
  // , 'ngResource'
  , 'angular-growl'
  , 'ngAnimate'
]).
config(function($locationProvider, $routeProvider) {
  "ngInject";

  // $locationProvider.hashPrefix('!');
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: true,
  //   rewriteLinks: false
  // });

  // growlProvider.globalTimeToLive(3000);
  // growlProvider.globalDisableCountDown(true);

  $routeProvider.otherwise({redirectTo: '/register'});

})
.run(function($rootScope) {
  // $rootScope.apiURL = 'http://127.0.0.1:3000';
});
