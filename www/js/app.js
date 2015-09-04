// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  Parse.initialize('lU2vkaUOF6l19kwZoCBkDtMUZobjeLCVamdispa7', 'yG4l6sBiXwIi6w9qzZuUhZ21UHCXAHK2Pa2ugtnS'); 
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
.state('home',{
  url:'/home',
  abstract: false,
  templateUrl: 'templates/home.html',
  controller:'HomeController'
})
.state('addLocation',{
  url:'/addLocation',
  abstract: false,
  templateUrl: 'templates/addLocation.html',
  controller:'AddLocationController'
})
.state('addDish',{
  url:'/addDish',
  abstract: false,
  templateUrl: 'templates/addDish.html',
  controller:'AddDishController'
})
    .state('app', {
    url: '/app',
    abstract: false,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});

