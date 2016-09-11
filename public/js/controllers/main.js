'use strict';

angular.module('CmasR')
    .controller('MainController',['$scope','$rootScope','$location','$http','$timeout',
        function($scope,$rootScope,$location,$http,$timeout)
    {
        /*$timeout(function(){
            if($rootScope.firsttime=="true")
            {
                $location.path('/alerts');
            }
        },100);*/

        console.log("Main Called");
        //console.log("Picture id : "+$rootScope.userCredentials.picture_id);
        $scope.picture = "";

        $scope.getSession = function()
        {
            $http({headers:
            {
                'Content-Type':'application/json'
            },
                url: baseUrl+'session/get',
                method: "POST",
                data:{
                    sessionEmail: $rootScope.userCredentials.email
                }})
                .success(function(sessionResponse)
                {
                    //console.log(sessionResponse);
                    if(sessionResponse == "No data found")
                    {
                        $location.path('/');
                    }else {

                        $rootScope.userCredentials = sessionResponse;

                        console.log("user creds",$rootScope.userCredentials);
                        $rootScope.picture = $rootScope.userCredentials.picture;
                        $rootScope.name = $rootScope.userCredentials.name;
                        $rootScope.level = $rootScope.userCredentials.level;
                        $rootScope.email = $rootScope.userCredentials.email;
                        console.log("pic",$rootScope.picture);
                        console.log("name",$rootScope.name);
                        console.log("mail",$rootScope.email);
                        console.log("level",$rootScope.level);
                    }

                })
                .error(function(sessionData,sessionStatus,sessionHeaders)
                {
                    console.log(sessionData,sessionStatus,sessionHeaders);
                    //$location.path('/');
                });
        };

        $scope.getSession();
        /**
         * Resize function without multiple trigger
         *
         * Usage:
         * $(window).smartresize(function(){
 *     // code here
 * });
         */
        (function($,sr){
            // debouncing function from John Hann
            // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
            var debounce = function (func, threshold, execAsap) {
                var timeout;

                return function debounced () {
                    var obj = this, args = arguments;
                    function delayed () {
                        if (!execAsap)
                            func.apply(obj, args);
                        timeout = null;
                    }

                    if (timeout)
                        clearTimeout(timeout);
                    else if (execAsap)
                        func.apply(obj, args);

                    timeout = setTimeout(delayed, threshold || 100);
                };
            };

            // smartresize
            jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

        })(jQuery,'smartresize');
        /**
         * To change this license header, choose License Headers in Project Properties.
         * To change this template file, choose Tools | Templates
         * and open the template in the editor.
         */

        var CURRENT_URL = window.location.href.split('?')[0],
            $BODY = $('body'),
            $MENU_TOGGLE = $('#menu_toggle'),
            $SIDEBAR_MENU = $('#sidebar-menu'),
            $SIDEBAR_FOOTER = $('.sidebar-footer'),
            $LEFT_COL = $('.left_col'),
            $RIGHT_COL = $('.right_col'),
            $NAV_MENU = $('.nav_menu'),
            $FOOTER = $('footer');

// Sidebar
            $(document).ready(function() {
                // TODO: This is some kind of easy fix, maybe we can improve this
                var setContentHeight = function () {
                    // reset height
                    $RIGHT_COL.css('min-height', $(window).height());

                    var bodyHeight = $BODY.outerHeight(),
                        footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
                        leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
                        contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

                    // normalize content
                    contentHeight -= $NAV_MENU.height() + footerHeight;

                    $RIGHT_COL.css('min-height', contentHeight);
                };

                $SIDEBAR_MENU.find('a').on('click', function(ev) {
                    var $li = $(this).parent();

                    if ($li.is('.active')) {
                        $li.removeClass('active active-sm');
                        $('ul:first', $li).slideUp(function() {
                            setContentHeight();
                        });
                    } else {
                        // prevent closing menu if we are on child menu
                        if (!$li.parent().is('.child_menu')) {
                            $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                            $SIDEBAR_MENU.find('li ul').slideUp();
                        }

                        $li.addClass('active');

                        $('ul:first', $li).slideDown(function() {
                            setContentHeight();
                        });
                    }
                });

                // toggle small or large menu
                $MENU_TOGGLE.on('click', function() {
                    if ($BODY.hasClass('nav-md')) {
                        $SIDEBAR_MENU.find('li.active ul').hide();
                        $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
                    } else {
                        $SIDEBAR_MENU.find('li.active-sm ul').show();
                        $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
                    }

                    $BODY.toggleClass('nav-md nav-sm');

                    setContentHeight();
                });

                // check active menu
                $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

                $SIDEBAR_MENU.find('a').filter(function () {
                    return this.href == CURRENT_URL;
                }).parent('li').addClass('current-page').parents('ul').slideDown(function() {
                    setContentHeight();
                }).parent().addClass('active');

                // recompute content when resizing
                $(window).smartresize(function(){
                    setContentHeight();
                });

                setContentHeight();

                // fixed sidebar
                if ($.fn.mCustomScrollbar) {
                    $('.menu_fixed').mCustomScrollbar({
                        autoHideScrollbar: true,
                        theme: 'minimal',
                        mouseWheel:{ preventDefault: true }
                    });
                }
            });
// /Sidebar

// Panel toolbox
            $(document).ready(function() {
                $('.collapse-link').on('click', function() {
                    var $BOX_PANEL = $(this).closest('.x_panel'),
                        $ICON = $(this).find('i'),
                        $BOX_CONTENT = $BOX_PANEL.find('.x_content');

                    // fix for some div with hardcoded fix class
                    if ($BOX_PANEL.attr('style')) {
                        $BOX_CONTENT.slideToggle(200, function(){
                            $BOX_PANEL.removeAttr('style');
                        });
                    } else {
                        $BOX_CONTENT.slideToggle(200);
                        $BOX_PANEL.css('height', 'auto');
                    }

                    $ICON.toggleClass('fa-chevron-up fa-chevron-down');
                });

                $('.close-link').click(function () {
                    var $BOX_PANEL = $(this).closest('.x_panel');

                    $BOX_PANEL.remove();
                });
            });
// /Panel toolbox

// Tooltip
            $(document).ready(function() {
                $('[data-toggle="tooltip"]').tooltip({
                    container: 'body'
                });
            });
// /Tooltip

// Progressbar
            if ($(".progress .progress-bar")[0]) {
                $('.progress .progress-bar').progressbar();
            }
// /Progressbar

// Switchery
            $(document).ready(function() {
                if ($(".js-switch")[0]) {
                    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
                    elems.forEach(function (html) {
                        var switchery = new Switchery(html, {
                            color: '#26B99A'
                        });
                    });
                }
            });
// /Switchery

// iCheck
            $(document).ready(function() {
                if ($("input.flat")[0]) {
                    $(document).ready(function () {
                        $('input.flat').iCheck({
                            checkboxClass: 'icheckbox_flat-green',
                            radioClass: 'iradio_flat-green'
                        });
                    });
                }
            });
// /iCheck

// Table
            $('table input').on('ifChecked', function () {
                checkState = '';
                $(this).parent().parent().parent().addClass('selected');
                countChecked();
            });
            $('table input').on('ifUnchecked', function () {
                checkState = '';
                $(this).parent().parent().parent().removeClass('selected');
                countChecked();
            });

            var checkState = '';

            $('.bulk_action input').on('ifChecked', function () {
                checkState = '';
                $(this).parent().parent().parent().addClass('selected');
                countChecked();
            });
            $('.bulk_action input').on('ifUnchecked', function () {
                checkState = '';
                $(this).parent().parent().parent().removeClass('selected');
                countChecked();
            });
            $('.bulk_action input#check-all').on('ifChecked', function () {
                checkState = 'all';
                countChecked();
            });
            $('.bulk_action input#check-all').on('ifUnchecked', function () {
                checkState = 'none';
                countChecked();
            });

            function countChecked() {
                if (checkState === 'all') {
                    $(".bulk_action input[name='table_records']").iCheck('check');
                }
                if (checkState === 'none') {
                    $(".bulk_action input[name='table_records']").iCheck('uncheck');
                }

                var checkCount = $(".bulk_action input[name='table_records']:checked").length;

                if (checkCount) {
                    $('.column-title').hide();
                    $('.bulk-actions').show();
                    $('.action-cnt').html(checkCount + ' Records Selected');
                } else {
                    $('.column-title').show();
                    $('.bulk-actions').hide();
                }
            }
        var i = 0; var pics = {};
        for(; i<10; i++)
        {
            pics[(i+1).toString()] = "images/img"+(i+1).toString()+".jpg";
        }

        //console.log(pics);
        //console.log("pic is "+$rootScope.picture);

        $scope.getPicture = function()
        {
            //console.log("Picture id : "+$rootScope.userCredentials.picture_id);
            return pics[$rootScope.userCredentials.picture];
        };

    }])
    .controller('AboutController',['$scope',function($scope)
    {

    }])
    .controller('ContactController',['$scope',function($scope)
    {

    }])
    .controller('AuthController',AuthController)
.controller('UserController', UserController);
function AuthController($auth, $state,$scope)
{
    console.log("Auth Controller called oo...");
    var vm = this;

    $scope.login = function() {
        console.log("I am the login function here...");
            var credentials = {
                email: vm.email,
                password: vm.password
            };

            // Use Satellizer's $auth service to login
            $auth.login(credentials).then(function(data) {
               // console.log(data);
                // If login is successful, redirect to the users state
                $state.go('users', {});
            });
        }
}

function UserController($http) {

    var vm = this;

    vm.users;
    vm.error;

    vm.getUsers = function() {

        // This request will hit the index method in the AuthenticateController
        // on the Laravel side and will return the list of users
        $http.get('api/authenticate').success(function(users) {
            vm.users = users;
        }).error(function(error) {
            vm.error = error;
        });
    }
}

//# sourceMappingURL=main.js.map
