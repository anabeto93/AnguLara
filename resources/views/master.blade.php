<!DOCTYPE html>
<html lang="en" ng-app="CmasR">
<head>
    <base href="/">
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Rancard CMA System</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/bootstrap/dist/css/bootstrap.min.css')}}">
    <!-- Font Awesome -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/font-awesome/css/font-awesome.min.css')}}">
    <!-- NProgress -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/nprogress/nprogress.css')}}">
    <!-- iCheck -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/iCheck/skins/flat/green.css')}}">
    <!-- bootstrap-progressbar -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css')}}">
    <!-- JQVMap -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/jqvmap/dist/jqvmap.min.css')}}">

    <!-- Custom Theme Style -->
    <link type="text/css" href="{{asset('build/css/custom2.css')}}" rel="stylesheet">
    <link type="text/css" href="{{asset('build/css/loginpage.css')}}" rel="stylesheet">

    <script>var baseUrl = "{{ url('/')}}/";</script>
</head>
<body class="nav-md">
<div class="container">
    <div ng-view></div>
</div>

<!-- jQuery -->
<script type="text/javascript" src="{{asset('vendors/jquery/dist/jquery.min.js')}}"></script>
<!-- Bootstrap -->
<script type="text/javascript" src="{{asset('vendors/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<!-- FastClick -->
<script type="text/javascript" src="{{asset('vendors/fastclick/lib/fastclick.js')}}"></script>
<!-- NProgress -->
<script type="text/javascript" src="{{asset('vendors/nprogress/nprogress.js')}}"></script>
<!-- Chart.js -->
<script type="text/javascript" src="{{asset('vendors/Chart.js/dist/Chart.min.js')}}"></script>
<!-- gauge.js -->
<script type="text/javascript" src="{{asset('vendors/gauge.js/dist/gauge.min.js')}}"></script>
<!-- bootstrap-progressbar -->
<script type="text/javascript" src="{{asset('vendors/bootstrap-progressbar/bootstrap-progressbar.min.js')}}"></script>
<!-- iCheck -->
<script type="text/javascript" src="{{asset('vendors/iCheck/icheck.min.js')}}"></script>
<!-- Skycons -->
<script type="text/javascript" src="{{asset('vendors/skycons/skycons.js')}}"></script>
<!-- Flot -->
<script type="text/javascript" src="{{asset('vendors/Flot/jquery.flot.js')}}"></script>
<script type="text/javascript" src="{{asset('vendors/Flot/jquery.flot.pie.js')}}"></script>
<script type="text/javascript" src="{{asset('vendors/Flot/jquery.flot.time.js')}}"></script>
<script type="text/javascript" src="{{asset('vendors/Flot/jquery.flot.stack.js')}}"></script>
<script type="text/javascript" src="{{asset('vendors/Flot/jquery.flot.resize.js')}}"></script>
<!-- Flot plugins -->
<script type="text/javascript" src="{{asset('vendors/flot.orderbars/js/jquery.flot.orderBars.js')}}"></script>
<script type="text/javascript" src="{{asset('vendors/flot-spline/js/jquery.flot.spline.min.js')}}"></script>
<script type="text/javascript" src="{{asset('vendors/flot.curvedlines/curvedLines.js')}}"></script>
<!-- DateJS -->
<script type="text/javascript" src="{{asset('vendors/DateJS/build/date.js')}}"></script>
<!-- JQVMap -->
<script type="text/javascript" src="{{asset('vendors/jqvmap/dist/jquery.vmap.js')}}"></script>
<script type="text/javascript" src="{{asset('vendors/jqvmap/dist/maps/jquery.vmap.world.js')}}"></script>
<script type="text/javascript" src="{{asset('vendors/jqvmap/examples/js/jquery.vmap.sampledata.js')}}"></script>
<!-- bootstrap-daterangepicker -->
<script type="text/javascript" src="{{asset('js/moment/moment.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/datepicker/daterangepicker.js')}}"></script>

<!-- Custom Theme Scripts -->
<script type="text/javascript" src="{{asset('build/js/custom.js')}}"></script>
<!-- AngularJS Components -->
<script type="text/javascript" src="{{asset('bower_components/angular/angular.js')}}"></script>
<script type="text/javascript" src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
<script type="text/javascript" src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>
<script type="text/javascript" src="{{asset('bower_components/angular-animate/angular-animate.min.js')}}"></script>
<script type="text/javascript" src="{{asset('bower_components/angular-ui-router/release/angular-ui-router.js')}}"></script>
<!--<script type="text/javascript" src="{{asset('bower_components/angular-bootstrap/ui-bootstrap.min.js')}}"></script>-->
<script type="text/javascript" src="{{asset('bower_components/angular-modal-service/dst/angular-modal-service.min.js')}}"></script>
<!--<script type="text/javascript" src="{{asset('bower_components/lodash/dist/lodash.js')}}"></script>
<script type="text/javascript" src="{{asset('bower_components/angular-local-storage/dist/angular-local-storage.js')}}"></script>
<script type="text/javascript" src="{{asset('bower_components/restangular/dist/restangular.js')}}"></script>-->
<script type="text/javascript" src="{{asset('js/app2.js')}}"></script>
<script type="text/javascript" src="{{asset('js/controllers/main.js')}}"></script>
<!--<script type="text/javascript" src="{{asset('js/controllers/sites.js')}}"></script>-->
<script type="text/javascript" src="{{asset('js/controllers/login-controller.js')}}"></script>
<script type="text/javascript" src="{{asset('js/controllers/logout.js')}}"></script>
<script type="text/javascript" src="{{asset('js/controllers/sitesmonitor.js')}}"></script>
<!---<script type="text/javascript" src="{{asset('js/services/users.js')}}"></script>-->
</body>
</html>