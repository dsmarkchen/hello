'use strict';

angular.module('helloApp')
  .factory('MyTodoService', function() {
     return {
            TodoUri: 'todo.json',
     };
  })
  .factory('Service', function ($http) {
     return {
        get: function (url) {
             var promise = $http.get(url)  
                 .success(function (data, status) {  
                        return data;  
                 })  
                 .error(function (data, status) {  
                        return { "status": false };  
                 });  
              //$scope.isLoading = false;  
              return promise;  
        },
        getById: function (url, object) {  
                    var promise = $http({  
                        method: "POST",  
                        url: url,  
                        data: object  
                    })  
                        .success(function (data, status) {  
                            return data;  
                        })  
                        .error(function (data, status) {  
                            return { "status": false };  
                        });  
                    return promise;  
         }  
     };
   }) 
  .controller('TodoCtrl', function ($scope, _) {
 
 $scope.todos = JSON.parse(localStorage.getItem("comedyTodos"));
 if($scope.todos == null) { 
    $scope.todos = [
        {text:'Learn AngularJS', done:false},         
        {text: 'Build an app', done:false}
      ];
    localStorage.setItem("comedyTodos", JSON.stringify($scope.todos));

  }
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    localStorage.setItem("comedyTodos", JSON.stringify($scope.todos));
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });

        localStorage.setItem("comedyTodos", JSON.stringify($scope.todos));
    };
  });
