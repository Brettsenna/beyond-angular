'use strict';

angular.module('myApp.video', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/video', {
    templateUrl: 'video/index.html',
    controller: 'VideoCtrl'
  });
}])

.controller('VideoCtrl', [function() {


}]);