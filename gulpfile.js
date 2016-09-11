const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

/*elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
});*/

elixir(function(mix)
{
    mix.sass('app.scss')
        .scripts([
        'app2.js'
    ],'./public/js/app2.js')
        .scripts([
        'controllers/login-controller.js'
    ],'./public/js/controllers/login-controller.js')
        .scripts([
            'controllers/logout-controller.js'
        ],'./public/js/controllers/logout.js')
        .scripts([
            'controllers/main.js'
        ],'./public/js/controllers/main.js')
        .scripts([
            'controllers/siteControls.js'
        ],'./public/js/controllers/sites.js')
        .scripts([
            'services/user-service.js'
        ],'./public/js/services/users.js')
        .scripts([
            'controllers/site-monitor-controller.js'
        ],'./public/js/controllers/sitesmonitor.js')
        .scripts([
            'controllers/alerts-controller.js'
        ],'./public/js/controllers/alerts.js')
        .scripts([
            'css/cust3.css'
        ],'./public/build/css/custom.css')
        .version([
            'js/controllers.js',
            'js/controllers.js'
        ]);
});