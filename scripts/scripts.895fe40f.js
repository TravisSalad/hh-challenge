"use strict";angular.module("hhChallengeApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).otherwise({redirectTo:"/"})}]),angular.module("hhChallengeApp").controller("HomeCtrl",["$scope",function(a){a.location={name:"Location Name",address:"Address",addressTwo:"Address 2",city:"City",zip:"Zip",email:"Contact Email",reply:"Reply to Email",phone:"Phone"},a.change=function(){angular.element("#button-save").addClass("button-saved")},a.$watch("loc",function(b,c){a.clearData=function(){b!=c&&(a.loc=c,console.log(c))}})}]),angular.module("hhChallengeApp").run(["$templateCache",function(a){a.put("views/home.html",'<div class="home" ng-app="hhChallengeApp" ng-controller="HomeCtrl"> <div class="body-container"> <div class="header"> <div class="container-fluid"> <div class="navbar-header"> <a class="navbar-brand primary" href="#/">Studio<strong>HQ</strong></a> <div class="header-sub"> <a>Happy Dance & Music</a> <span> | </span> <a ng-click="details = ! details">Seattle 4th and Pike<span class="glyphicon glyphicon-chevron-down"></span></a> <a ng-show="details">Seattle 5th and Pine</a> </div> </div> </div> </div> <div class="body-container"> <div class="container-fluid"> <div class="main-nav col-sm-2"> <ul> <li>Dashboard</li> <li>Classes</li> <li>Students</li> <li>Payments</li> <li>Staff</li> <li>Settings</li> <br> <br> <li>Logout</li> </ul> </div> <div class="content col-sm-10"> <div class="title"> <h2>Studio Settings</h2> </div> <div class="navbar nav-default secondary-nav"> <div class="container-fluid"> <ul class="nav navbar-nav"> <li><a href="">Company</a></li> <li><a href="">Locations</a></li> <li><a href="">Class Types</a></li> <li><a href="">Managers</a></li> <li><a href="">Billing Info</a></li> <li><a href="">Merchant Account</a></li> </ul> </div> </div> <div class="location"> <a href="" ng-click="showDetailsOne =! showDetailsOne">Seattle, 4th & Pike <span class="glyphicon glyphicon-chevron-down"></span></a> <div class="form container-fluid" ng-show="showDetailsOne"> <form> <div class="location-form-left"> <label class="location-title location-full" for="loc-name">{{location.name}}</label> <input class="location-input location-full" id="loc-name" ng-change="change()" ng-model="loc.a" placeholder="{{location.name}}"> <div class="address address-one"> <label class="location-title location-full" for="loc-address">{{location.address}}</label> <input class="location-input location-full" id="loc-address" ng-change="change()" ng-model="loc.b" placeholder="{{location.address}}"> </div> <div class="address"> <label class="location-title location-full" for="loc-address-two">{{location.addressTwo}}</label> <input class="location-input location-full" id="loc-address-two" ng-change="change()" ng-model="loc.c" placeholder="{{location.addressTwo}}"> </div> <div class="address address-one"> <label class="location-title location-full" for="loc-city">{{location.city}}</label> <input class="location-input location-full" id="loc-city" ng-change="change()" ng-model="loc.d" placeholder="{{location.city}}"> </div> <div class="address"> <label class="location-title location-full" for="loc-zip">{{location.zip}}</label> <input class="location-input location-full" id="loc-zip" ng-change="change()" ng-model="loc.e" placeholder="{{location.zip}}"> </div> </div> <div class="location-form-right"> <label class="location-title location-full" for="email">{{location.email}}</label> <input class="location-input location-full" id="email" ng-change="change()" ng-model="loc.f" placeholder="{{location.email}}"> <div class="contact"> <label class="location-title location-full" for="reply">{{location.reply}}</label> <input class="location-input location-full" id="reply" ng-change="change()" ng-model="loc.g" placeholder="{{location.reply}}"> </div> <div class="contact"> <label class="location-title location-full" for="phone">{{location.phone}}</label> <input class="location-input location-full" id="phone" ng-change="change()" ng-model="loc.h" placeholder="{{location.phone}}"> </div> </div> </form></div>  </div> <div class="location"> <a href="" ng-click="showDetails =! showDetails">Seattle, 5th & Pine <span class="glyphicon glyphicon-chevron-down"></span></a> <div class="form container-fluid" ng-show="showDetails"> <form> <div class="location-form-left"> <label class="location-title location-full" for="loc-name">{{location.name}}</label> <input class="location-input location-full" id="loc-name" ng-change="change()" ng-model="loc.i" placeholder="{{location.name}}"> <div class="address address-one"> <label class="location-title location-full" for="loc-address">{{location.address}}</label> <input class="location-input location-full" id="loc-address" ng-change="change()" ng-model="loc.j" placeholder="{{location.address}}"> </div> <div class="address"> <label class="location-title location-full" for="loc-address-two">{{location.addressTwo}}</label> <input class="location-input location-full" id="loc-address-two" ng-change="change()" ng-model="loc.k" placeholder="{{location.addressTwo}}"> </div> <div class="address address-one"> <label class="location-title location-full" for="loc-city">{{location.city}}</label> <input class="location-input location-full" id="loc-city" ng-change="change()" ng-model="loc.l" placeholder="{{location.city}}"> </div> <div class="address"> <label class="location-title location-full" for="loc-zip">{{location.zip}}</label> <input class="location-input location-full" id="loc-zip" ng-change="change()" ng-model="loc.m" placeholder="{{location.zip}}"> </div> </div> <div class="location-form-right"> <label class="location-title location-full" for="email">{{location.email}}</label> <input class="location-input location-full" id="email" ng-change="change()" ng-model="loc.n" placeholder="{{location.email}}"> <div class="contact"> <label class="location-title location-full" for="reply">{{location.reply}}</label> <input class="location-input location-full" id="reply" ng-change="change()" ng-model="loc.o" placeholder="{{location.reply}}"> </div> <div class="contact"> <label class="location-title location-full" for="phone">{{location.phone}}</label> <input class="location-input location-full" id="phone" ng-change="change()" ng-model="loc.p" placeholder="{{location.phone}}"> </div> </div> </form> </div> </div> <div class="location"> <a href=""><span>+ </span>Create new location</a> </div> <div class="location text-center"> <button class="btn btn-default" ng-click="clearData()">Cancel</button> <button class="btn btn-default" id="button-save">Save Changes</button> </div> </div> </div> </div> </div> </div>')}]);