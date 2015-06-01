'use strict';
angular.module('properties').config(['$stateProvider', function ($stateProvider) {

  $stateProvider
  .state('allproperties', {
    url: '/properties',
    templateUrl: 'modules/properties/views/allproperties.client.view.html',
    controller: 'PropertiesCtrl'
  })
  .state('addProperties', {
    url: '/properties/add',
    templateUrl: 'modules/properties/views/addProperties.client.view.html',
    // controller: 'addPropertiesCtrl'
  });

}]);