'use strict';

angular
  .module('helloApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .config(function ($routeProvider) {
    var site_prefix='/hello';

    $routeProvider
     .when(site_prefix + '/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when(site_prefix + '/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
     .when(site_prefix + '/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'todo'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'todo'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
