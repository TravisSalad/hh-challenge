'use strict';

/**
 * @ngdoc overview
 * @name hhChallengeApp
 * @description
 * # hhChallengeApp
 *
 * Main module of the application.
 */
angular
  .module('hhChallengeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
