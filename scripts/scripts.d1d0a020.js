"use strict";angular.module("helloApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$locationProvider","$routeProvider",function(a,b){var c="/hello";b.when(c+"/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when(c+"/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when(c+"/todo",{templateUrl:"views/todo.html",controller:"TodoCtrl",controllerAs:"todo"}).when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/todo",{templateUrl:"views/todo.html",controller:"TodoCtrl",controllerAs:"todo"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"}),a.html5Mode(!0)}]),angular.module("helloApp").controller("MainCtrl",["$scope","$route","$routeParams","$location","Page",function(a,b,c,d,e){this.$route=b,this.$location=d,this.$routeParams=c,console.log(" "+this.$route+"loc:"+this.$location+"route: "+this.$routeParams),a.isActive=function(a){return a===d.path()},a.Page=e,this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]).factory("Page",function(){var a="default";return{title:function(){return a},setTitle:function(b){a=b}}}),angular.module("helloApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("helloApp").controller("TodoCtrl",["$scope",function(a){a.todoList=["list item 1","list item 2","list item 3"]}]),angular.module("helloApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container"> <p>This is the about view.</p> </div>'),a.put("views/main.html",'<div class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <h1 class="animated fadeInUp">Hello</h1> <p class="animated fadeInUp">World</p> </div> </div> </div> <div class="container"> <div class="row marketing"> <h4>Chapter 1</h4> <p> riverrun, past Eve and Adam\'s, from swerve of shore to bend of bay, brings us by a commodius vicus of recirculation back to Howth Castle and Environs. </p> <p> Sir Tristram, violer d\'amores, fr\'over the short sea, had passen- core rearrived from North Armorica on this side the scraggy isthmus of Europe Minor to wielderfight his penisolate war: nor had topsawyer\'s rocks by the stream Oconee exaggerated themselse to Laurens County\'s gorgios while they went doublin their mumper all the time: nor avoice from afire bellowsed mishe mishe to tauftauf thuartpeatrick: not yet, though venissoon after, had a kidscad buttended a bland old isaac: not yet, though all\'s fair in vanessy, were sosie sesthers wroth with twone nathandjoe. Rot a peck of pa\'s malt had Jhem or Shen brewed by arclight and rory end to the regginbrow was to be seen ringsome on the aquaface. </p> <p> The fall (bababadalgharaghtakamminarronnkonnbronntonner- ronntuonnthunntrovarrhounawnskawntoohoohoordenenthur- nuk!) of a once wallstrait oldparr is retaled early in bed and later on life down through all christian minstrelsy. The great fall of the offwall entailed at such short notice the pftjschute of Finnegan, erse solid man, that the humptyhillhead of humself prumptly sends an unquiring one well to the west in quest of his tumptytumtoes: and their upturnpikepointandplace is at the knock out in the park where oranges have been laid to rust upon the green since dev- linsfirst loved livvy. </p> </div> </div>'),a.put("views/todo.html",'<div class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <h1 class="animated fadeInUp">{{titleIntro}}</h1> <p class="animated fadeInUp">{{titleDesc}}</p> </div> </div> </div> <div class="container"> <p>This is the todo view.</p> <ul> <li ng-repeat=" todo in todoList"> {{todo}} </li> </ul> </div>')}]);