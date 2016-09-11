'use strict';

angular.module('CmasR')
    .controller('MainSiteController',['$scope',
        '$http','$rootScope','$timeout','$interval'
        ,function($scope,$http,$rootScope,$timeout,$interval){

            $(document).ready(function() {
                $('[data-toggle="tooltip"]').tooltip({
                    container: 'body'
                });
            });

            $scope.checkStatus = function()
            {
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
                        //console.log("data retrieved",sessionResponse);
                        $rootScope.sitesInfo = sessionResponse;
                        var i = 0;
                        for(var key in sessionResponse)
                        {
                           if(!sessionResponse.hasOwnProperty(key))continue;
                            var obj = sessionResponse[key];

                            //console.log(obj['url']);
                            $rootScope.urls[(i+2).toString()] = obj['url'];
                            //$rootScope.siteNames[i.toString()] = obj['site_title'];
                            //$rootScope.websites[i] = obj['url'];

                            i++;
                        }

                        //console.log($rootScope.websites);

                        $http({
                            url: baseUrl+'websites/get/status',
                            method: "POST",
                            data:{
                                sessionUrls: $rootScope.urls
                            }})
                            .success(function(statusResponse)
                            {
                                //console.log("status reponses",statusResponse);
                                $rootScope.status = statusResponse;
                                //console.log($rootScope.status);

                                for(var i=0; i<$rootScope.status.length; i++)
                                {
                                    $rootScope.responses[(i+2).toString()] = $rootScope.status[i];
                                }

                                //console.log("Responses",$rootScope.responses);
                            })
                            .error(function(statusResponse)
                            {
                                console.log(statusResponse);
                            });
                    })
                    .error(function(sessionData,sessionStatus,sessionHeaders)
                    {
                        console.log(sessionData);
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
                //console.log("Urls ",$rootScope.urls);
                //console.log("index is "+index+" \n");
                //var value = $rootScope.status[index];
                var value = $rootScope.responses[index];
                //console.log("value of . is "+value);
                //var value2 = $rootScope.responses[index];
                //console.log("value2 is "+value2);
                if(value!=null)
                {
                    switch(value.toString())
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
                }else{
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
            },100);

            $interval(function (){
                $scope.checkStatus();
            },30000);//300 seconds

            $scope.getColor = function(index)
            {
                var value = $rootScope.responses[index];
                //console.log("The value is "+value);

                if(value!=null)
                {
                    switch(value.toString())
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
                }else{
                    return {"background-color":"gray", "color":"black"};
                }


            }

        }])
.controller('AddWebsiteCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope)
{
    console.log("Add Website Controller Active");
    //var newWebsiteName = $scope.newSite;
    $scope.placeholder_url = 'www.rancardsolutions.com';
    $scope.placeholder_title = "Rancard Mobility Site";

    $scope.addSite = function()
    {
        console.log("Site to be added"+$scope.site.name);
        $scope.url = "scripts/PHP/websites.php";

        var temp1 = $scope.site.url; var temp2 = $scope.site.title;
        var dataSent = {"url":temp1,"sitetitle": temp2};

        //console.log("Data to be sent over : "+dataSent);

        $http.post($scope.url,dataSent)
            .success(function (data, status, headers, config) {
                //console.log("Data retrieved is "+data);
                console.log("After adding site"+data);

                $scope.status = status;
                $scope.result = data;
                console.log($scope.result);

            })
            .error(function (data, status, headers, config) {
                console.log('error');
            })
    }
}]);