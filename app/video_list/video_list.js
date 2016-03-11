'use strict';

angular.module('myApp.videolist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/video_list', {
    templateUrl: 'video_list/index.html',
    controller: 'myCtrl'
  });
}])

app.controller('myCtrl', function($scope, $http) {
  $http({
    method : "GET",
    url : "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw",
    respondType: 'jsonp',
    }).then(function mySucces(response) {
       $scope.content = response.data;
    }, function myError(response) {
        //Second function handles error
        $scope.content = "Something broke :(";  
    });
    //$scope.frameUrl = 'http://www.youtube.com/embed/8IHFVn0sv14';
    //$sce
  //$scope.player = $sce.trustAsHtml("http://www.youtube.com/embed/");
});