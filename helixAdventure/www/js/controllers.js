angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $state) {
    $scope.showInfo = function () {
      $state.go("#/tab/home/info");
    }

    $scope.showMap = function () {
      $state.go("#/tab/map");
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
