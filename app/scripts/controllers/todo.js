'use strict';

angular.module('helloApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.todoList= [
      'list item 1',
      'list item 2',
      'list item 3'
    ];
  });
