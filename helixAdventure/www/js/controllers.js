angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $state,$http) {
    $scope.showInfo = function () {
      $state.go("tab.home-info");
    }

    $scope.startGame = function () {
      $state.go("tab.home-whyHere");
    }

    var deviceId = ionic.Platform.device().uuid || "testId";
    console.log(deviceId);
    $http.post("http://localhost:8000/user/register", {deviceId:deviceId})
      .then(function(data) {
        if(typeof data.err !== "undefined") {
          alert("server err: " + data.err);
        }
      },
      function(err) {
        alert("err: " + JSON.stringify(err));
      })
})


.controller('RegCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage({

  });

  $scope.registered = true;
})

  .controller('WhyCtrl', function ($scope, $state) {
    $scope.goToChallenge = function () {
      $state.go("tab.challenge");
    }

    $scope.challenges = challenges;

  })



  .controller('ChallengeCtrl', function ($scope) {

    $scope.challenges = challenges;



  })

.controller('MapCtrl', function($scope) {
  $scope.$on('$ionicView.enter', function() {
    // This example adds an animated symbol to a polyline.
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {
          lat: 56.019879,
          lng: -3.756383
        },
        zoom: 14,
        mapTypeId: 'terrain'
      });

      // Define the symbol, using one of the predefined paths ('CIRCLE')
      // supplied by the Google Maps JavaScript API.


      /*var lineSymbol = new google.maps.Marker({
	map: map,
	title: 'lineSymbol',
	icon: {
		url: "www.svgimages.com/svg-image/s6/horse--head-silhouette.svg",
		scaledSize: new google.maps.Size(64, 64)
	}
});*/
      var lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeColor: '#393'
      };

      /* var lineSymbol = {
       url: 'https://www.svgimages.com/svg-image/s6/horse--head-silhouette.svg'
       };*/

      // Create the polyline and add the symbol to it via the 'icons' property.
      var line = new google.maps.Polyline({
        path: [{
          lat: 56.019879,
          lng: -3.756383
        }, {
          lat: 56.019295,
          lng: -3.755436
        }],
        map: map
      });



      //create a second polyline
      var line2 = new google.maps.Polyline({
        path: [{
          lat: 56.019295,
          lng: -3.755436
        }, {
          lat: 56.017183,
          lng: -3.7540736
        }],
        map: map
      });


      //create a third polyline
      var line3 = new google.maps.Polyline({
        path: [{
          lat: 56.017183,
          lng: -3.7540736
        }, {
          lat: 56.015252,
          lng: -3.757774
        }],
        map: map
      });



      //create a fourth polyline
      var line4 = new google.maps.Polyline({
        path: [{
          lat: 56.015252,
          lng: -3.757774
        }, {
          lat: 56.012285,
          lng: -3.759292
        }],
        map: map
      });



      //create a fifth polyline
      var line5 = new google.maps.Polyline({
        path: [{
          lat: 56.015252,
          lng: -3.757774
        }, {
          lat: 56.012285,
          lng: -3.759292
        }],
        map: map
      });

      animateSymbol([line, line2, line3, line4], lineSymbol);
    }

    // Use the DOM setInterval() function to change the offset of the symbol
    // at fixed intervals.
    function animateSymbol(lines, symbol) {
      var count = 0;
      lines[0].set('icons', [{
        icon: symbol,
        offset: '0%'
      }])
      var inter = window.setInterval(function() {
        count = count + 1;

        if (count > 100) {
          clearInterval(inter);
          lines[0].set('icons', []);
          lines.shift();
          animateSymbol(lines, symbol);
        } else {
          var icons = lines[0].get('icons');
          icons[0].offset = (count) + '%';
          lines[0].set('icons', icons);
        }
      }, 20);
    }
    initMap();
  });
})


.controller('AboutCtrl', function($scope) {

});
