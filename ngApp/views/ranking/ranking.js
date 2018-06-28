'use strict';

angular.module('myApp.ranking', ['ngRoute'])

.config(function($routeProvider) {
  "ngInject";
  $routeProvider.when('/ranking', {
    templateUrl: 'views/ranking/ranking.html',
    controller: function($scope, $uibModal) {


      // https://github.com/hjnilsson/country-flags/tree/master/png100px
      $scope.teams = [
        { id: 0,  name: 'Uruguay',     flagImg: 'uy.png' },
        { id: 1,  name: 'Portugal',    flagImg: 'pt.png' },
        { id: 2,  name: 'France',      flagImg: 'fr.png' },
        { id: 3,  name: 'Argentina',   flagImg: 'ar.png' },
        { id: 4,  name: 'Brazil',      flagImg: 'br.png' },
        { id: 5,  name: 'Mexico',      flagImg: 'mx.png' },
        { id: 6,  name: '???England',  flagImg: 'en.png' },
        { id: 7,  name: 'Japan',       flagImg: 'jp.png' },
        { id: 8,  name: 'Spain',       flagImg: 'es.png' },
        { id: 9,  name: 'Rusia',       flagImg: 'ru.png' },
        { id: 10, name: 'Croatia',     flagImg: 'hr.png' },
        { id: 11, name: 'Denmark',     flagImg: 'dk.png' },
        { id: 12, name: 'Sweden',      flagImg: 'se.png' },
        { id: 13, name: 'Switzerland', flagImg: 'ch.png' },
        { id: 14, name: 'Colombia',    flagImg: 'co.png' },
        { id: 15, name: '???Belgium',  flagImg: 'be.png' }
      ];

      $scope.games = [
        // Round 1:
        { id: 0,  desc: 'Game 1 (Sat 30/6 19:00)', teamA: 0,  teamB: 1,  winner: null },
        { id: 1,  desc: 'Game 2 (Sat 30/6 15:00)', teamA: 2,  teamB: 3,  winner: null },
        { id: 2,  desc: 'Game 3 (Mon 02/7 15:00)', teamA: 4,  teamB: 5,  winner: null },
        { id: 3,  desc: 'Game 4 (Mon 02/7 19:00)', teamA: 6,  teamB: 7,  winner: null },
        { id: 4,  desc: 'Game 5 (Sun 01/7 15:00)', teamA: 8,  teamB: 9,  winner: null },
        { id: 5,  desc: 'Game 6 (Sun 01/7 19:00)', teamA: 10, teamB: 11, winner: null },
        { id: 6,  desc: 'Game 7 (Tue 03/7 15:00)', teamA: 12, teamB: 13, winner: null },
        { id: 7,  desc: 'Game 8 (Tue 03/7 19:00)', teamA: 14, teamB: 15, winner: null },
        // Quarter-Finals:
        { id: 8,  desc: 'Quarters 1 (Fri 06/7 15:00)', teamA: null,  teamB: null,  winner: null },
        { id: 9,  desc: 'Quarters 2 (Fri 06/7 19:00)', teamA: null,  teamB: null,  winner: null },
        { id: 10, desc: 'Quarters 3 (Sat 07/7 19:00)', teamA: null,  teamB: null,  winner: null },
        { id: 11, desc: 'Quarters 4 (Sat 07/7 15:00)', teamA: null,  teamB: null,  winner: null },
        // Semi-Finals:
        { id: 12, desc: 'Semifinal 1 (Tue 10/7 19:00)', teamA: null,  teamB: null,  winner: null },
        { id: 13, desc: 'Semifinal 2 (Tue 10/7 19:00)', teamA: null,  teamB: null,  winner: null },
        // Final:
        { id: 14, desc: 'FINAL (Sun 15/7 16:00)', teamA: null,  teamB: null,  winner: null },
      ];

      $scope.players = [
        { id: 0, name: 'Joel 0', score: 10,   winners: [0, 2, 4, 6, 8, 10, 12, 14,   0, 4, 8, 14,   0, 8,  8] },
        { id: 1, name: 'Joel 1', score: 8,   winners: [0, 2, 4, 6, 8, 10, 12, 14,   0, 4, 8, 14,   0, 8,  0] },
        { id: 2, name: 'Joel 2', score: 4,  winners: [0, 2, 4, 6, 8, 10, 12, 14,   0, 4, 8, 14,   4, 8,  4] },
        { id: 3, name: 'Joel 3', score: 11,  winners: [0, 2, 4, 6, 8, 10, 12, 14,   0, 4, 8, 14,   4, 14,  14] }
      ];

      $scope.players.forEach(function(player) {
        player.games = []
        player.winners.forEach(function(winnerId, gameId) {
          var game = $scope.games[gameId];
          game.winner = angular.copy($scope.teams[winnerId]);
          player.games.push(game);
        });
      });

      $scope.players.sort(function(itemA, itemB) {
        return itemB.score - itemA.score;
      });

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