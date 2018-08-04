'use strict';

angular.module('myApp.ranking', ['ngRoute'])

.config(function($routeProvider) {
  "ngInject";
  $routeProvider.when('/ranking', {
    templateUrl: 'views/ranking/ranking.html',
    controller: function($scope, $http, $uibModal) {


      // https://github.com/hjnilsson/country-flags/tree/master/png100px
      $scope.teams = [
        { id: 0,  name: 'Uruguay',     flagImg: 'uy.png' },
        { id: 1,  name: 'Portugal',    flagImg: 'pt.png' },
        { id: 2,  name: 'France',      flagImg: 'fr.png' },
        { id: 3,  name: 'Argentina',   flagImg: 'ar.png' },
        { id: 4,  name: 'Brazil',      flagImg: 'br.png' },
        { id: 5,  name: 'Mexico',      flagImg: 'mx.png' },
        { id: 6,  name: 'Belgium',     flagImg: 'be.png' },
        { id: 7,  name: 'Japan',       flagImg: 'jp.png' },
        { id: 8,  name: 'Spain',       flagImg: 'es.png' },
        { id: 9,  name: 'Russia',      flagImg: 'ru.png' },
        { id: 10, name: 'Croatia',     flagImg: 'hr.png' },
        { id: 11, name: 'Denmark',     flagImg: 'dk.png' },
        { id: 12, name: 'Sweden',      flagImg: 'se.png' },
        { id: 13, name: 'Switzerland', flagImg: 'ch.png' },
        { id: 14, name: 'Colombia',    flagImg: 'co.png' },
        { id: 15, name: 'England',     flagImg: 'en.png' }
      ];
      
      // update players set score = score + 1 where game11 = 10

      $scope.games = [
        // Round 1:
        { id: 0,  desc: 'Game 1 (Sat 30/6 19:00)', teamA: 0,  teamB: 1,  winner: null, realWinner: 0 },  // 0.Uruguay, 1.Portugal      0.Uruguay
        { id: 1,  desc: 'Game 2 (Sat 30/6 15:00)', teamA: 2,  teamB: 3,  winner: null, realWinner: 2 },  // 2.France, 3.Argentina      2.France
        { id: 2,  desc: 'Game 3 (Mon 02/7 15:00)', teamA: 4,  teamB: 5,  winner: null, realWinner: 4 },  // 4.Brazil, 5.Mexico         4.Brazil
        { id: 3,  desc: 'Game 4 (Mon 02/7 19:00)', teamA: 6,  teamB: 7,  winner: null, realWinner: 6 },  // 6.Belgium, 7.Japan         6.Belgium
        { id: 4,  desc: 'Game 5 (Sun 01/7 15:00)', teamA: 8,  teamB: 9,  winner: null, realWinner: 9 },  // 8.Spain, 9.Rusia           9.Russia
        { id: 5,  desc: 'Game 6 (Sun 01/7 19:00)', teamA: 10, teamB: 11, winner: null, realWinner: 10 },  // 10.Croatia, 11.Denmark     10.Croatia
        { id: 6,  desc: 'Game 7 (Tue 03/7 15:00)', teamA: 12, teamB: 13, winner: null, realWinner: 12 },  // 12.Sweden, 13.Switzerland  12.Swedem
        { id: 7,  desc: 'Game 8 (Tue 03/7 19:00)', teamA: 14, teamB: 15, winner: null, realWinner: 15 },  // 14.Colombia, 15.England    15.England
        // Quarter-Finals:
        { id: 8,  desc: 'Quarters 1 (Fri 06/7 15:00)', teamA: 0,  teamB: 2,  winner: null, realWinner: 2 },  // 0.Uruguay, 2.France    2.France
        { id: 9,  desc: 'Quarters 2 (Fri 06/7 19:00)', teamA: 4,  teamB: 6,  winner: null, realWinner: 6 },  // 4.Brazin, 6.Belgium    6.Belgium
        { id: 10, desc: 'Quarters 3 (Sat 07/7 19:00)', teamA: 9,  teamB: 10,  winner: null, realWinner: 10 },  // 9.Russia, 10.Croatia
        { id: 11, desc: 'Quarters 4 (Sat 07/7 15:00)', teamA: 12,  teamB: 15,  winner: null, realWinner: 15 },  // 12.Sweden, 15.England
        // Semi-Finals:
        { id: 12, desc: 'Semifinal 1 (Tue 10/7 19:00)', teamA: 2,  teamB: 6,  winner: null, realWinner: 2 }, // 2.France, 6.Belgium         2.France
        { id: 13, desc: 'Semifinal 2 (Tue 10/7 19:00)', teamA: 15,  teamB: 10,  winner: null, realWinner: 10 }, // 15.England, 10. Croatia   10.Croatia
        // Final:
        { id: 14, desc: 'FINAL (Sun 15/7 16:00)', teamA: 2,  teamB: 10,  winner: null, realWinner: null }, // 
      ];

                    
      $http({
        method: 'GET',
        url: 'http://www.reikiwithinyou.com/wc2018/get_player.php'
      }).then(function(response) {
        console.log('OK', response);  

        var jsonResp = JSON.parse(response.data.replace(/'/g, '"'));
        $scope.players = jsonResp.players;

      }, function errorCallback(response) {
        console.log('ERROR');   
          // called asynchronously if an error occurs
          // or server returns response with an error status.

        $scope.players = [ 
          { 'id' : '29', 'name' : 'aaaaaaaaaaa', 'email' : 'joel@eee.se', 'score' : '1', 'game1' : '0', 'game2' : '2', 'game3' : '4', 'game4' : '6', 'game5' : '8', 'game6' : '10', 'game7' : '12', 'game8' : '14', 'game9' : '2', 'game10' : '6', 'game11' : '10', 'game12' : '14', 'game13' : '2', 'game14' : '10', 'game15' : '2' }, 
          { 'id' : '30', 'name' : 'aaaaaaaa', 'email' : 'joel2@eee.se', 'score' : '10', 'game1' : '0', 'game2' : '3', 'game3' : '4', 'game4' : '6', 'game5' : '8', 'game6' : '10', 'game7' : '12', 'game8' : '14', 'game9' : '3', 'game10' : '6', 'game11' : '8', 'game12' : '14', 'game13' : '6', 'game14' : '14', 'game15' : '14' }, 
          { 'id' : '31', 'name' : 'JOEL_3', 'email' : 'joel3@eee.se', 'score' : '4', 'game1' : '1', 'game2' : '3', 'game3' : '5', 'game4' : '7', 'game5' : '8', 'game6' : '10', 'game7' : '13', 'game8' : '14', 'game9' : '3', 'game10' : '5', 'game11' : '8', 'game12' : '13', 'game13' : '3', 'game14' : '13', 'game15' : '13' }
        ];
      
      }).finally(function() {

        $scope.players.forEach(function(player) {
          player.games = [];
          $scope.games.forEach(function(game) {
            var game = angular.copy(game);
            player.games.push(game);
          });
          player.games[0].winner = $scope.teams[player.game1];
          player.games[1].winner = $scope.teams[player.game2];
          player.games[2].winner = $scope.teams[player.game3];
          player.games[3].winner = $scope.teams[player.game4];
          player.games[4].winner = $scope.teams[player.game5];
          player.games[5].winner = $scope.teams[player.game6];
          player.games[6].winner = $scope.teams[player.game7];
          player.games[7].winner = $scope.teams[player.game8];
          player.games[8].winner = $scope.teams[player.game9];
          player.games[9].winner = $scope.teams[player.game10];
          player.games[10].winner = $scope.teams[player.game11];
          player.games[11].winner = $scope.teams[player.game12];
          player.games[12].winner = $scope.teams[player.game13];
          player.games[13].winner = $scope.teams[player.game14];
          player.games[14].winner = $scope.teams[player.game15];
        });
  
        $scope.players.sort(function(itemA, itemB) {
          return itemB.score - itemA.score;
        });

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