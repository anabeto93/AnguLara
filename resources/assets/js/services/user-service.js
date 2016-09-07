'use strict';

angular.module('CmasR')
    .factory('userService',['$http','localStorageService',
        function($http,localStorageService)
    {
        function isLoggedIn()
        {
            if(localStorageService.get('token'))
                return true;
            else
                return false;
        }

        function signUp(name,email,password,picture,level,onSuccess,onError)
        {
            $http.post('/api/auth/signup',
                {
                    name: name,
                    email: email,
                    password: password,
                    picture: picture,
                    level: level
                })
                .then(function(response)
                {
                    localStorageService.set('token',response.data.token);
                    onSuccess(response);
                },function(response)
                {
                    onError(response);
                });
        }

        function login(email,password,onSuccess,onError)
        {
            $http.post('/api/auth/login',
                {
                    email: email,
                    password: password
                })
                .then(function(response)
                {
                    localStorageService.set('token',response.data.token);
                    onSuccess(response);
                }, function(response)
                {
                    onError(response);
                });
        }

        function logout()
        {
            localStorageService.remove('token');
        }

        function getCurrentToken()
        {
            return localStorageService.get('token');
        }

        return{
            isLoggedIn: isLoggedIn,
            signUp: signUp,
            login:login,
            logout: logout,
            getCurrentToken: getCurrentToken
        }


    }]);