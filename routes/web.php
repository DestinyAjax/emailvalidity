<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => ['api']], function () {
    Route::post('/api/register', [
        'uses' => 'AuthController@register',
    ]);

    Route::post('/api/signin', [
        'uses' => 'AuthController@signin',
    ]);

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('/user', [
            'uses' => 'UserController@index',
        ]);
    });
});

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::post('/validate-email','ValidateEmailController@store');
// Route::post('/create-email','ValidateEmailController@storeEmail');
// Route::get('/email-lists','ValidateEmailController@index');