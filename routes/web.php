<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('master');
});


Route::post('auth','AuthenticateController@checkAuth');
Route::resource('user','AuthenticateController');

Route::post('session/set','SessionController@setSession');
Route::post('session/get','SessionController@getSession');
Route::post('session/remove','SessionController@popSession');

Route::post('websites/get','AuthenticateController@index');

Route::get('{all}',function()
{
    return view('master');
});


