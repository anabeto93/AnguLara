'use strict';

angular.module('CmasR')
    .controller('MainSiteController',['$scope',
        '$http','$rootScope','$timeout','$interval'
        ,function($scope,$http,$rootScope,$timeout,$interval){

            $scope.checkStatus = function()
            {
                /*//console.log($rootScope.urls);
                console.log("Now checking the statuses");
                $scope.url = 'scripts/PHP/siteMonitor.php';
                //console.log($scope.url);
                //dataSent = {'urlsite': website};

                //console.log($rootScope.urls);
                $http.post($scope.url,$rootScope.urls)
                    .success(function(data, status,headers,config) {
                        console.log("Data retrieved is "+data);
                        //console.log($rootScope.urls['1']);
                        $scope.status = status;
                        $scope.data = data;
                        //console.log(data.substring(13,data.length-3));

                        //split them by commas
                        var commaSplit = data.substring(13,data.length-3).split(',');
                        //console.log(commaSplit);
                        var i = 0;
                        for (; i<commaSplit.length; i++)
                        {
                            var val = commaSplit[i].substring(commaSplit[i].indexOf(':')+1,commaSplit[i].length);
                            //console.log(val);
                            $rootScope.responses[(i+1).toString()] = val.toString();
                        }
                        //$rootScope.responses = JSON.parse(data.substring(12,data.length-2));
                        console.log($rootScope.responses);
                        //$scope.result = "waiting...";//data;
                    })
                    .error(function(data,status,headers,config){
                        console.log('error');
                    });*/
                $http({headers:
                {
                    'Content-Type':'application/json'
                },
                    url: baseUrl+'websites/get',
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
                        //$location.path('/');
                    });
            };

            $scope.getError = function(index)
            {
                return $rootScope.regexEscape[index.toString()];
            };
            $scope.colorCode = function(index)
            {
                /*//console.log($rootScope.responses.valueOf(7));
                 for(var key in $rootScope.responses)
                 {
                 console.log(key);
                 }*/
                //console.log("index is "+index+" \n");
                var value = $rootScope.responses[index.toString()];
                //console.log("value is "+value);
                var value2 = $rootScope.responses[index];
                //console.log("value2 is "+value2);

                switch(value)
                {
                    case "0":
                        return "Disaster";
                    case "200":
                        return "Success";
                    case "204":
                        return "No Content";
                    case "205":
                        return "Reset Content";
                    case "301":
                        return "Moved Permanently";
                    case "302":
                        return "Found";
                    case "307":
                        return "Temporary Redirect";
                    case "400":
                        return "Bad request";
                    case "401":
                        return "Unauthorized";
                    case "403":
                        return "Forbidden";
                    case "404":
                        return "Not Found";
                    case "408":
                        return "Request Timeout";
                    default:
                        return "Loading...";
                }
                //var terminals = JSON.parse($rootScope.responses);
                //console.log(terminals);

                /*var i=0;
                 for(; i<14; i++)
                 {
                 console.log($rootScope.responses);
                 }*/


            };


            $timeout(function (){
                $scope.checkStatus();
            },500);

            $interval(function (){
                $scope.checkStatus();
            },30000);

            $scope.getColor = function(index)
            {
                var value = $rootScope.responses[index.toString()];
                //console.log("The value is "+value);

                switch(value)
                {
                    case "0":
                        return {"background-color":"#EE1C1C","color":"white"};
                    case "200":
                        return {"background-color":"#4EF84E", "color":"red"};
                    case "204":
                        return {"background-color":"#EE1C1C","color":"white"};
                    case "205":
                        return {"background-color":"yellow", "color": "black"};
                    case "301":
                        return {"background-color":"#EE1C1C","color":"white"};
                    case "302":
                        return {"background-color":"yellow", "color": "black"};
                    case "307":
                        return {"background-color":"yellow", "color": "black"};
                    case "400":
                        return {"background-color":"#EE1C1C","color":"white"};
                    case "401":
                        return {"background-color":"#EE1C1C","color":"white"};
                    case "403":
                        return {"background-color":"#EE1C1C","color":"white"};
                    case "404":
                        return {"background-color":"#EE1C1C","color":"white"};
                    case "408":
                        return {"background-color":"#EE1C1C","color":"white"};

                    default:
                        return {"background-color":"gray", "color":"black"};
                }

            }

        }]);