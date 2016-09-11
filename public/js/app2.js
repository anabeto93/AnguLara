var app = angular.module('CmasR',['ngRoute','ngCookies',
    'ngAnimate','ui.router',
    'angularModalService','satellizer']);
    app.config([
        '$routeProvider',
        '$locationProvider',
        '$interpolateProvider',
        '$urlRouterProvider',
        '$stateProvider',
        '$authProvider',
    function($routeProvider, $locationProvider,$interpolateProvider,$urlRouterProvider,$stateProvider,$authProvider)
    {
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');

        $authProvider.loginUrl = '/api/authenticate';

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
            .state('alerts',
                {
                    url: '/alerts',
                    templateUrl: 'templates/alerts.html',
                    controller: 'AlertsController',
                    controllerAs: 'AlertCtrl'
                })
            .state('webmonitors',
                {
                    url: '/webMonitors',
                    templateUrl: 'templates/websites.html',
                    controller: 'MainSiteController'
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
        .run(function($rootScope)
        {
            $rootScope.userCredentials = {};
            $rootScope.loggedIn = "false";
            $rootScope.level = 0;
            $rootScope.picture = 0;
            $rootScope.email = "";
            $rootScope.name = "";
            $rootScope.urls = {};
            $rootScope.responses = {};
            $rootScope.sitesInfo = {};
            $rootScope.firsttime = "";
        });
//# sourceMappingURL=app2.js.map

//# sourceMappingURL=app2.js.map
