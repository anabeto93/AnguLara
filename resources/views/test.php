<!DOCTYPE html>
<html>
<head>
    <base href="/"/>
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Rancard CMA System</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" type="text/css" href="vendors/bootstrap/dist/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" type="text/css" href="vendors/font-awesome/css/font-awesome.min.css">
    <!-- NProgress -->
    <link rel="stylesheet" type="text/css" href="vendors/nprogress/nprogress.css">
    <!-- iCheck -->
    <link rel="stylesheet" type="text/css" href="vendors/iCheck/skins/flat/green.css">
    <!-- bootstrap-progressbar -->
    <link rel="stylesheet" type="text/css" href="vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css">
    <!-- JQVMap -->
    <link rel="stylesheet" type="text/css" href="vendors/jqvmap/dist/jqvmap.min.css">

</head>
<body ng-app="CmasR">
<div class="container">
    <a href="/logout"><h2>Container</h2></a>
    <div ng-view></div>

</div>
<!-- AngularJS Components -->
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/angular-route/angular-route.min.js"></script>
<script type="text/javascript" src="bower_components/angular-cookies/angular-cookies.min.js"></script>
<script type="text/javascript" src="bower_components/angular-animate/angular-animate.min.js"></script>
<script type="text/javascript" src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
<script type="text/javascript" src="bower_components/angular-bootstrap/ui-bootstrap.min.js"></script>
<script type="text/javascript" src="bower_components/angular-modal-service/dst/angular-modal-service.min.js"></script>
<script type="text/javascript" src="js/app2.js"></script>
<script type="text/javascript" src="js/controllers/login-controller.js"></script>
<script type="text/javascript" src="js/controllers/main.js"></script>
</body>
</html>