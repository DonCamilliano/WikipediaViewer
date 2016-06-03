'use strict';
angular.module('myApp', [])
       
   .controller('myCtrl',function($scope, $http) {
       
       $scope.newSearch = function () {
           var value = $scope.search;
           $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + value +'&callback=?JSON_CALLBACK')
             .success(function(data) {
                 $scope.ob1 = data.query.search[0].title;
                 $scope.ob2 = data.query.search[1].title;
                 $scope.ob3 = data.query.search[2].title;
                 $scope.ob4 = data.query.search[3].title;
                 $scope.ob5 = data.query.search[4].title;
                 $scope.ob6 = data.query.search[5].title;
                 $scope.ob7 = data.query.search[6].title;
                 $scope.ob8 = data.query.search[7].title;
                 $scope.ob9 = data.query.search[8].title;
                 $scope.ob10 = data.query.search[9].title;
             });
    }
});