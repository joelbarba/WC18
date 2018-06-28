'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(function($routeProvider) {
  "ngInject";
  $routeProvider.when('/register', {
    templateUrl: 'views/register/register.html',
    controller: function($scope, $uibModal) {
      $scope.isBetReady = false;



      $scope.teams = [
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

      $scope.games = [
        // Round 1:
        { id: 0,  desc: 'Game 1 (Sat ??/? ??:00)', teamA: 0,  teamB: 1,  winner: null },
        { id: 1,  desc: 'Game 2 (Sat ??/? ??:00)', teamA: 2,  teamB: 3,  winner: null },
        { id: 2,  desc: 'Game 3 (Sat ??/? ??:00)', teamA: 4,  teamB: 5,  winner: null },
        { id: 3,  desc: 'Game 4 (Sat ??/? ??:00)', teamA: 6,  teamB: 7,  winner: null },
        { id: 4,  desc: 'Game 5 (Sat ??/? ??:00)', teamA: 8,  teamB: 9,  winner: null },
        { id: 5,  desc: 'Game 6 (Sat ??/? ??:00)', teamA: 10, teamB: 11, winner: null },
        { id: 6,  desc: 'Game 7 (Sat ??/? ??:00)', teamA: 12, teamB: 13, winner: null },
        { id: 7,  desc: 'Game 8 (Sat ??/? ??:00)', teamA: 14, teamB: 15, winner: null },
        // Quarter-Finals:
        { id: 8,  desc: 'Game 9 (Sat ??/? ??:00)', teamA: null,  teamB: null,  winner: null },
        { id: 9,  desc: 'Game 10 (Sat ??/? ??:00)', teamA: null,  teamB: null,  winner: null },
        { id: 10, desc: 'Game 11 (Sat ??/? ??:00)', teamA: null,  teamB: null,  winner: null },
        { id: 11, desc: 'Game 12 (Sat ??/? ??:00)', teamA: null,  teamB: null,  winner: null },
        // Semi-Finals:
        { id: 12, desc: 'Game 13 (Sat ??/? ??:00)', teamA: null,  teamB: null,  winner: null },
        { id: 13, desc: 'Game 14 (Sat ??/? ??:00)', teamA: null,  teamB: null,  winner: null },
        // Final:
        { id: 14, desc: 'Final (Sat ??/? ??:00)', teamA: null,  teamB: null,  winner: null },
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
        $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/register/submit-modal.html',
          scope: $scope,
          controller: function() {
          },
          size: 'md'
        });
      }


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