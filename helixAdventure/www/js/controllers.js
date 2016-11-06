angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $state) {
    $scope.showInfo = function () {
      $state.go("#/tab/home/info");
    }

    $scope.register = function () {
      if ($scope.registered) {
        $state.go("#/tab/map");
      }
      else {
        $state.go("#/tab/home/register");
      }

    }

  })


  .controller('RegCtrl', function ($scope, $localStorage) {
    $scope.$storage = $localStorage({

    });

    $scope.registered = true;
  })

  .controller('MapCtrl', function ($scope) {

  })


  .controller('AboutCtrl', function ($scope) {

  });
