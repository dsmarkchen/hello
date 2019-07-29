'use strict';

angular.module('helloApp')
  .controller('MainCtrl', function ($scope, $route, $routeParams, $location, Page) {

    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;

    console.log(" " + this.$route + "loc:" + this.$location + "route: " + this.$routeParams);
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    $scope.Page = Page;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .factory('Page', function(){
         var title = 'default';
         return {
            title: function() { return title; },
            setTitle: function(newTitle) { title = newTitle; }
         };
});


