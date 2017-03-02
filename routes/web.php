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

Route::get('/', function () {
    return view('welcome');
});

Route::resource('upload', 'UploadController');
Route::resource('videos', 'VideosController');

Route::get('thumbnail/{video}', 'VideosController@thumbnail')->name('thumbnail');

Route::post('webhook', 'WebhookController@inbound');
Route::post('webhook/receive-video', 'WebhookController@receiveVideo');

Route::get('/video-src/{file}', 'VideosController@serve');

Auth::routes();

Route::get('/home', 'HomeController@index');

Route::get('test', function() {
    \Session::put('athlete_name', 'Austin White');
});