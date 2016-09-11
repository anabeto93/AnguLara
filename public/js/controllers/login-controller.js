'use strict';

angular.module('CmasR')
.controller('LoginController',[
    '$scope','$http','$rootScope','$location',function($scope,$http,$rootScope,$location)
    {
        /*if($rootScope.loggedIn=="true")
        {
            console.log("User already logged in");
            $location.path('/dashboard');
        }*/

        $scope.login = function()
        {
            if($scope.loginForm.$valid)
            {
                var username = $scope.user.email;
                var password = $scope.user.password;

                $http({
                   headers:
                   {
                       'Content-Type':'application/json'
                   },
                    url: baseUrl+'auth',
                    method: "POST",
                    data:{
                       email: username,
                        password: password
                    }

                }).success(function(response)
                {
                    //console.log(response);
                    $rootScope.userCredentials = response;
                    $rootScope.loggedIn = "true";
                    $rootScope.level = $rootScope.userCredentials.level;
                    $rootScope.picture = $rootScope.userCredentials.picture_id;
                    //console.log($rootScope.userCredentials);

                    $http({headers:
                    {
                        'Content-Type':'application/json'
                    },
                        url: baseUrl+'session/set',
                        method: "POST",
                        data:{
                            sessionStatus: "true",
                            sessionEmail: $rootScope.userCredentials.email,
                            sessionLevel: $rootScope.userCredentials.level,
                            sessionPicture: $rootScope.userCredentials.picture_id,
                            sessionName: $rootScope.userCredentials.name
                        }})
                        .success(function(sessionResponse)
                        {
                            //console.log(sessionResponse);
                            $rootScope.picture = sessionResponse.sessionPicture;
                            $rootScope.name = sessionResponse.sessionName;
                            $rootScope.level =sessionResponse.sessionLevel;
                            $rootScope.loggedIn = sessionResponse.sessionStatus;
                            $rootScope.firsttime = "true";
                            console.log("LoggedIn",$rootScope.loggedIn);
                            $location.path('/dashboard');

                            //$location.path('/alerts');
                        })
                        .error(function(sessionData,sessionStatus,sessionHeaders)
                        {
                            console.log(sessionData,sessionStatus,sessionHeaders);
                        });

                   // $location.path('/dashboard');
                }).error(function(data,status,headers)
                {
                    console.log(data,status,headers);
                });
            }
        }
    }
]);
//# sourceMappingURL=login-controller.js.map
