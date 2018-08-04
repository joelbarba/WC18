'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(function($routeProvider) {
  "ngInject";
  $routeProvider.when('/register', {
    templateUrl: 'views/register/register.html',
    controller: function($scope, $uibModal) {
      $scope.isBetReady = false;


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



      // Return team A on the game ID
      $scope.getTeamA = function(gameId) {
        var noTeam = { id: null, name : '???', flagImg: '' };
        if (!gameId && gameId !== 0) { return noTeam; }
        
        var teamA = $scope.games[gameId].teamA;
        if (!teamA && teamA !== 0) { return noTeam; }

        return $scope.teams[teamA];
      }

      // Return team B on the game ID
      $scope.getTeamB = function(gameId) {
        var noTeam = { id: null, name : '???', flagImg: '' };
        if (!gameId && gameId !== 0) { return noTeam; }
        
        var teamB = $scope.games[gameId].teamB;
        if (!teamB && teamB !== 0) { return noTeam; }

        return $scope.teams[teamB];
      }


      $scope.selectTeam = function(team, gameId) {
        if (!!team) {

          $scope.games[gameId].winner = team.id;

          // Final
          $scope.games[14].teamA  = $scope.games[12].winner;
          $scope.games[14].teamB  = $scope.games[13].winner;          

          // Semi finals
          $scope.games[12].teamA  = $scope.games[8].winner;
          $scope.games[12].teamB  = $scope.games[9].winner;
          $scope.games[13].teamA  = $scope.games[10].winner;
          $scope.games[13].teamB  = $scope.games[11].winner;

          // Quarter Finals
          $scope.games[8].teamA  = $scope.games[0].winner;
          $scope.games[8].teamB  = $scope.games[1].winner;
          $scope.games[9].teamA  = $scope.games[2].winner;
          $scope.games[9].teamB  = $scope.games[3].winner;
          $scope.games[10].teamA  = $scope.games[4].winner;
          $scope.games[10].teamB  = $scope.games[5].winner;
          $scope.games[11].teamA  = $scope.games[6].winner;
          $scope.games[11].teamB  = $scope.games[7].winner;


          // Unselect wrong legs
          if ($scope.games[12].teamA !== $scope.games[8].teamA  && $scope.games[12].teamA !== $scope.games[8].teamB)  { $scope.games[12].teamA = null; }
          if ($scope.games[12].teamB !== $scope.games[9].teamA  && $scope.games[12].teamB !== $scope.games[9].teamB)  { $scope.games[12].teamB = null; }
          if ($scope.games[13].teamA !== $scope.games[10].teamA && $scope.games[13].teamA !== $scope.games[10].teamB) { $scope.games[13].teamA = null; }
          if ($scope.games[13].teamB !== $scope.games[11].teamA && $scope.games[13].teamB !== $scope.games[11].teamB) { $scope.games[13].teamB = null; }

          if ($scope.games[14].teamA !== $scope.games[12].teamA && $scope.games[14].teamA !== $scope.games[12].teamB) { $scope.games[14].teamA = null; }
          if ($scope.games[14].teamB !== $scope.games[13].teamA && $scope.games[14].teamB !== $scope.games[13].teamB) { $scope.games[14].teamB = null; }

          // Unselect wrong winners
          if ($scope.games[8].winner  !== $scope.games[8].teamA  && $scope.games[8].winner  !== $scope.games[8].teamB)   { $scope.games[8].winner = null; }
          if ($scope.games[9].winner  !== $scope.games[9].teamA  && $scope.games[9].winner  !== $scope.games[9].teamB)   { $scope.games[9].winner = null; }
          if ($scope.games[10].winner !== $scope.games[10].teamA && $scope.games[10].winner !== $scope.games[10].teamB)  { $scope.games[10].winner = null; }
          if ($scope.games[11].winner !== $scope.games[11].teamA && $scope.games[11].winner !== $scope.games[11].teamB)  { $scope.games[11].winner = null; }          
          
          if ($scope.games[12].winner !== $scope.games[12].teamA && $scope.games[12].winner !== $scope.games[12].teamB)  { $scope.games[12].winner = null; }
          if ($scope.games[13].winner !== $scope.games[13].teamA && $scope.games[13].winner !== $scope.games[13].teamB)  { $scope.games[13].winner = null; }

          if ($scope.games[14].winner !== $scope.games[14].teamA && $scope.games[14].winner !== $scope.games[14].teamB) { $scope.games[14].winner = null; }

        }
        $scope.isBetReady = $scope.calculateBetReady();
      }

      $scope.calculateBetReady = function() {
        for (var t=0; t<$scope.games.length; t++) {
          if ($scope.games[t].winner === null) {
            return false;
          }
        }
        return true;
      };


      $scope.getTeamClass = function(gameId, leg) {
        var team;
        if (leg === 'A') { team = $scope.getTeamA(gameId); }
        if (leg === 'B') { team = $scope.getTeamB(gameId); }
        if (team.id === null) {
          return 'none';
        }

        if ($scope.games[gameId].winner === null) {
          return '';
        }

        if ($scope.games[gameId].winner === team.id) {
          return 'winner';
        } else {
          return 'loser';
        }
      };


      $scope.openSubmitModal = function() {
        window.alert('Too late, sorry :(');
        return false;
          
        $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/register/submit-modal.html',
          scope: $scope,
          size: 'md',
          controller: function($scope, $uibModalInstance, $http) {
            $scope.yourName = '';
            $scope.yourEmail = '';

            $scope.registerBet = function() {
              console.log('registering', $scope.games);  

              // http://www.reikiwithinyou.com/wc2018/insert_player.php?name=joel%20bar%27ba&email=joel@barba.com&pass=6667
              var insertUrl = 'http://www.reikiwithinyou.com/wc2018/insert_player.php?name=';
              insertUrl += $scope.yourName;
              insertUrl += '&email=' + $scope.yourEmail;
              insertUrl += '&game1=' + $scope.games[0].winner;
              insertUrl += '&game2=' + $scope.games[1].winner;
              insertUrl += '&game3=' + $scope.games[2].winner;
              insertUrl += '&game4=' + $scope.games[3].winner;
              insertUrl += '&game5=' + $scope.games[4].winner;
              insertUrl += '&game6=' + $scope.games[5].winner;
              insertUrl += '&game7=' + $scope.games[6].winner;
              insertUrl += '&game8=' + $scope.games[7].winner;
              insertUrl += '&game9=' + $scope.games[8].winner;
              insertUrl += '&game10=' + $scope.games[9].winner;
              insertUrl += '&game11=' + $scope.games[10].winner;
              insertUrl += '&game12=' + $scope.games[11].winner;
              insertUrl += '&game13=' + $scope.games[12].winner;
              insertUrl += '&game14=' + $scope.games[13].winner;
              insertUrl += '&game15=' + $scope.games[14].winner;


              
              $http({
                method: 'GET',
                url: insertUrl
              }).then(function(response) {

                var jsonResp = JSON.parse(response.data.replace(/'/g, '"'));
                if (jsonResp.result === 'ok') {
                  console.log('OK');  
                  window.alert('Done, you are already in. Good luck!');
                  $uibModalInstance.close(); 

                } else {
                  window.alert('Ooops. There was something wrong. Ask Joel.');
                }

              }, function errorCallback(response) {
                console.log('ERROR');   
                window.alert('Ooops. There was something wrong. Ask Joel.');
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                });
              }
          }
        });
      }
      // $scope.selectTeam($scope.teams[0],  0);
      // $scope.selectTeam($scope.teams[2],  1);
      // $scope.selectTeam($scope.teams[4],  2);
      // $scope.selectTeam($scope.teams[6],  3);
      // $scope.selectTeam($scope.teams[8],  4);
      // $scope.selectTeam($scope.teams[10], 5);
      // $scope.selectTeam($scope.teams[12], 6);
      // $scope.selectTeam($scope.teams[14], 7);
      // $scope.selectTeam($scope.teams[2],  8);
      // $scope.selectTeam($scope.teams[6],  9);
      // $scope.selectTeam($scope.teams[10], 10);
      // $scope.selectTeam($scope.teams[14], 11);
      // $scope.selectTeam($scope.teams[2],  12);
      // $scope.selectTeam($scope.teams[10], 13);
      // $scope.selectTeam($scope.teams[2],  14);


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