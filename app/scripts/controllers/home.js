'use strict';

/**
 * @ngdoc function
 * @name hhChallengeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the hhChallengeApp
 */
angular.module('hhChallengeApp')
  .controller('HomeCtrl', function ($scope) {

    $scope.location = {
      'name': 'Location Name',
      'address': 'Address',
      'addressTwo': 'Address 2',
      'city': 'City',
      'zip': 'Zip',
      'email': 'Contact Email',
      'reply': 'Reply to Email',
      'phone': 'Phone'
    };

    $scope.change = function(){
      angular.element('#button-save').addClass("button-saved");
    };

  $scope.$watch('loc', function(newValue, oldValue) {

    $scope.clearData = function() {

      if(newValue !==  oldValue) {
        $scope.loc = oldValue;
        console.log(oldValue);
      }
    };

  });
});

/* TODOS
1. re-write var elem using angular and scope
2. re-write scope.location to revert to previous state and not empty string
3. work on titles for inputs so that they're hidden until user clicks on input box
4. create state dropdown for forms
5. create dropdown for locations in header
6. add symbols for main nav
7. change styling of forms, colors of text and sizing. Also work on responsiveness!
*/
