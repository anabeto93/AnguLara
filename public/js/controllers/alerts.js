'use strict';

angular.module('CmasR')
.controller('AlertsController',['$scope','$rootScope',function($scope,$rootScope)
{
    if($rootScope.firsttime=="true")
    {
        $rootScope.firsttime="false";
    }

    console.log("Alerts Controller called");

}]);
//# sourceMappingURL=alerts.js.map
