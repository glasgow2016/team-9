angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngStorage'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })


      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('tab.home-info', {
        url: '/home/info',
        cache: false,
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-info.html'
            //controller: 'InfoCtrl'
          }
        }
      })

      .state('tab.home-whyHere', {
        url: '/home/whyHere',
        cache: false,
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-whyHere.html',
            controller: 'WhyCtrl'
          }
        }
      })
      .state('tab.challenge', {
        url: '/home/challenge',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-challenge.html',
             controller: 'ChallengeCtrl'
          }
        }
      })


      .state('tab.map', {
        url: '/map',
        views: {
          'tab-map': {
            templateUrl: 'templates/tab-map.html',
            controller: 'MapCtrl'
          }
        }
      })

      .state('tab.about', {
        url: '/about',
        views: {
          'tab-about': {
            templateUrl: 'templates/tab-about.html',
            controller: 'AboutCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/home');

  });
