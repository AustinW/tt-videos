<?php

/*
|--------------------------------------------------------------------------
| Social Routes
|--------------------------------------------------------------------------
|
| Handle routing for logging in with social providers
|
*/
Route::get('auth/{provider}', 'Auth\AuthController@redirectToProvider')->name('auth.social');
Route::get('auth/{provider}/callback', 'Auth\AuthController@handleProviderCallback');
