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

    $scope.userState = [
        {'state': 'AL'},
        {'state': 'AK'},
        {'state': 'AR'},
        {'state': 'CT'},
        {'state': 'WA'},
        {'state': 'OR'}
    ];

    $scope.location = {
      'locationA': 'Seattle, 4th & Pike',
      'locationB': 'Seattle, 5th & Pine'
    };


    $scope.custom = true;
    $scope.toggleCustom = function() {
        $scope.custom = $scope.custom === false ? true: false;
    };

    $scope.locationData = {
      'name': 'Location Name',
      'address': 'Address',
      'addressTwo': 'Address 2',
      'city': 'City',
      'zip': 'Zip',
      'email': 'Contact Email',
      'reply': 'Reply to Email',
      'phone': 'Phone'
    };


    //delete new values from all inputs
    // var initial = {text: 'initial value'};
    //     $scope.loc = angular.copy(initial);
        $scope.clearData = function() {
            $scope.loc = angular.copy();
            $scope.form.$setPristine();

            // console.log(initial);
        };

});

/* TODOS
4. create dropdown for locations in header

STRETCH
8. use ng-repeat for navigation
*/
