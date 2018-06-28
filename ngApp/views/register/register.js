'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(function($routeProvider) {
  "ngInject";
  $routeProvider.when('/register', {
    templateUrl: 'views/register/register.html',
    controller: function($scope) {



    }
  });
})

.service('RegService', function() {
  var RegService = {};

  RegService.teams = [
    { id: 0,  name: 'Uruguay',       flagImg: 'uy.png' },
    { id: 1,  name: 'Portugal',      flagImg: 'pt.png' },
    { id: 2,  name: 'Team  2',       flagImg: '' },
    { id: 3,  name: 'Team  3',       flagImg: '' },
    { id: 4,  name: 'Team  4',       flagImg: '' },
    { id: 5,  name: 'Team  5',       flagImg: '' },
    { id: 6,  name: 'Team  6',       flagImg: '' },
    { id: 7,  name: 'Team  7',       flagImg: '' },
    { id: 8,  name: 'Team  8',       flagImg: '' },
    { id: 9,  name: 'Team  9',       flagImg: '' },
    { id: 10, name: 'Team 10',       flagImg: '' },
    { id: 11, name: 'Team 11',       flagImg: '' },
    { id: 12, name: 'Team 12',       flagImg: '' },
    { id: 13, name: 'Team 13',       flagImg: '' },
    { id: 14, name: 'Team 14',       flagImg: '' },
    { id: 15, name: 'Team 15',       flagImg: '' }
  ];

  RegService.games = [
    // Round 1:
    { game: 0,  desc: 'Game 1 (Sat 30/6 19:00)',  teamA: 0,     teamB: 1,     winner: null },
    { game: 1,  desc: 'Game 2 (Sat 30/6 19:00)',  teamA: 2,     teamB: 3,     winner: null },
    { game: 2,  desc: 'Game 3 (Sat 30/6 19:00)',  teamA: 4,     teamB: 5,     winner: null },
    { game: 3,  desc: 'Game 4 (Sat 30/6 19:00)',  teamA: 6,     teamB: 7,     winner: null },
    { game: 4,  desc: 'Game 5 (Sat 30/6 19:00)',  teamA: 8,     teamB: 9,     winner: null },
    { game: 5,  desc: 'Game 6 (Sat 30/6 19:00)',  teamA: 10,    teamB: 11,    winner: null },
    { game: 6,  desc: 'Game 7 (Sat 30/6 19:00)',  teamA: 12,    teamB: 13,    winner: null },
    { game: 7,  desc: 'Game 8 (Sat 30/6 19:00)',  teamA: 14,    teamB: 15,    winner: null },
    // Quarter-Finals:
    { game: 9,  desc: 'Game 9 (Sat 30/6 19:00)',  teamA: null,  teamB: null,  winner: null },
    { game: 8,  desc: 'Game 10 (Sat 30/6 19:00)', teamA: null,  teamB: null,  winner: null },
    { game: 10, desc: 'Game 11 (Sat 30/6 19:00)', teamA: null,  teamB: null,  winner: null },
    { game: 11, desc: 'Game 12 (Sat 30/6 19:00)', teamA: null,  teamB: null,  winner: null },
    // Semi-Finals:
    { game: 12, desc: 'Game 13 (Sat 30/6 19:00)', teamA: null,  teamB: null,  winner: null },
    { game: 13, desc: 'Game 14 (Sat 30/6 19:00)', teamA: null,  teamB: null,  winner: null },
    // Final: 
    { game: 14, desc: 'Game 15 (Sat 30/6 19:00)', teamA: null,  teamB: null,  winner: null },
  ];


  // Return team A on the game ID
  RegService.getTeamA = function(gameId) {
    var noTeam = { name : '???', flagImg: '' };
    if (!gameId && gameId !== 0) { return noTeam; }
    
    var teamA = RegService.games[gameId].teamA;
    if (!teamA && teamA !== 0) { return noTeam; }

    return RegService.teams[teamA];
  }

  // Return team B on the game ID
  RegService.getTeamB = function(gameId) {
    var noTeam = { name : '???', flagImg: '' };
    if (!gameId && gameId !== 0) { return noTeam; }
    
    var teamB = RegService.games[gameId].teamB;
    if (!teamB && teamB !== 0) { return noTeam; }

    return RegService.teams[teamB];
  }


  RegService.selectTeam = function(team, gameId) {
    if (!!team) {

      RegService.games[gameId].winner = team.id;

      RegService.games[9].teamA  = RegService.games[0].winner;
      RegService.games[9].teamB  = RegService.games[1].winner;
      RegService.games[10].teamA = RegService.games[2].winner;
      RegService.games[11].teamB = RegService.games[3].winner;

    }
  }

  return RegService;
})

.directive('gameBox', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: { 
      gameId: '='
    },
    templateUrl: 'views/register/game-box.html',
    controller: function($scope, RegService) {
      $scope.$ser = RegService;

    }
  };
});