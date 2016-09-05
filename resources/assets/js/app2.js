angular.module('CmasR',['ngRoute','ngCookies'])
    .config([
        '$routeProvider',
        '$locationProvider',
    function($routeProvider, $locationProvider)
    {
        $routeProvider
            .when('/',
                {
                    templateUrl: 'views/partials/login.html',
                    controller: 'loginController'
                })
            .when('/dashboard',
                {
                    templateUrl: 'views/partials/dashbaord.html',
                    controller: 'mainController'
                })
            .when('/logout',
                {
                    templateUrl: 'views/partials/logout.html',
                    controller: 'logoutController'
                })
    }]);
//# sourceMappingURL=app2.js.map
