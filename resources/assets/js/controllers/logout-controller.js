'use strict';

angular.module('CmasR')
    .controller('UserOptions',['$scope','$rootScope','$location','$http',
        function($scope,$rootScope,$location,$http)
    {
        $scope.logout = function()
        {
            $rootScope.username = "nothing";
            $rootScope.loggedIn = "false";
            $rootScope.level = 0;
            $rootScope.picture_id = 0;
            $scope.removeSession();
            console.log("User logged out");
            $location.path('/');
        };

        $scope.removeSession = function()
        {
            $http({headers:
            {
                'Content-Type':'application/json'
            },
                url: baseUrl+'session/remove',
                method: "POST",
                data:{
                    sessionEmail: $rootScope.userCredentials.email
                }})
                .success(function(sessionResponse)
                {
                    console.log(sessionResponse);
                    //$location.path('/');
                })
                .error(function(sessionData,sessionStatus,sessionHeaders)
                {
                    console.log(sessionData,sessionStatus,sessionHeaders);
                });
        };

    }]);