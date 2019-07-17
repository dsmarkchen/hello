"use strict";angular.module("helloApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$locationProvider",function(a){a.html5Mode(!0)}]).config(["$routeProvider",function(a){var b="/hello";a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when(b+"/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when(b+"/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/todo",{templateUrl:"views/todo.html",controller:"TodoCtrl",controllerAs:"todo"}).when(b+"/todo",{templateUrl:"views/todo.html",controller:"TodoCtrl",controllerAs:"todo"}).otherwise({redirectTo:"/"})}]),angular.module("helloApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("helloApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("helloApp").controller("TodoCtrl",function(){this.todoList=["list item 1","list item 2","list item 3"]}),angular.module("helloApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <h1 class="animated fadeInUp">Hello</h1> <p class="animated fadeInUp">World</p> </div> </div> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/todo.html","<p>This is the todo view.</p>")}]);