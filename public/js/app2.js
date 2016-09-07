var app = angular.module('CmasR',['ngRoute','ngCookies',
    'ngAnimate','ui.router',
    'angularModalService']);
    app.config([
        '$routeProvider',
        '$locationProvider',
        '$interpolateProvider',
        '$urlRouterProvider',
        '$stateProvider',
    function($routeProvider, $locationProvider,$interpolateProvider,$urlRouterProvider,$stateProvider)
    {
        $interpolateProvider.startSymbol('[[').endSymbol(']]');

        $routeProvider
            .when('/',
                {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginController',
                    controllerAs: 'LogCtrl'
                })
            .when('/contact',
                {
                    templateUrl: 'templates/contact.html',
                    controller: 'ContactController'
                })
            .when('/about',
                {
                    templateUrl: 'templates/about.html',
                    controller: 'AboutController'
                })
            .when('/dashboard',
                {
                    templateUrl: 'templates/dashboard.html',
                    controller: 'MainController'
                })
            .when('/logout',
                {
                    templateUrl: 'templates/logout.html',
                    controller: 'LogoutController'
                })
            .otherwise(
                {
                    redirectTo: '/'
                });
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('default',
                {
                    url: '/monitorSite',
                    templateUrl: 'templates/monitorSite.html'
                })
            .state('webmonitors',
                {
                    url: '/webMonitors',
                    templateUrl: 'templates/websites.html'
                })
            .state('billingmonitors',
                {
                    url: '/billingMonitors',
                    templateUrl: 'templates/monitoring_billing.html',
                    controller: 'BillingController',
                    controllerAs: 'BillC'
                })
            .state('smscmonitors',
                {
                    url: '/smscMonitors',
                    templateUrl: 'templates/monitoring_smsc.html',
                    controller: 'SMSCController',
                    controllerAs: 'SmsC'
                });
    }])
        .run(function($rootScope,$timeout)
        {
            $rootScope.userCredentials = {};
            $rootScope.loggedIn = "false";
            $rootScope.level = 0;
            $rootScope.picture = 0;
            $rootScope.email = "";
            $rootScope.name = "";
        });
//# sourceMappingURL=app2.js.map

//# sourceMappingURL=app2.js.map
