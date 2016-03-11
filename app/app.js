'use strict';
//app name
var app = angular.module('myApp', []);
//controller for JSONP API calls
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
/*
app.filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);


angular.module('filters-module', [])
.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

    .controller('dummy', ['$scope', '$sce', function ($scope, $sce) {

    $scope.url = $sce.trustAsResourceUrl('https://www.angularjs.org');

    $scope.changeIt = function () {
        $scope.url = $sce.trustAsResourceUrl('https://docs.angularjs.org/tutorial');
    }
}*/