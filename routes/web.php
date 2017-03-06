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

Route::get('thumbnail/{video}', 'VideosController@thumbnail')->name('thumbnail');

Route::post('webhook', 'WebhookController@inbound');
Route::post('webhook/receive-video', 'WebhookController@receiveVideo');

Route::get('/video-src/{file}', 'VideosController@serve');

Route::get('/home', 'HomeController@index');

Route::post('/videos/{video}/views', 'VideoViewController@create');

Route::get('/search', 'SearchController@index');

Route::get('/videos/{video}/comments', 'VideoCommentController@index');

Route::get('/videos/{video}/votes', 'VideoVoteController@show');

Auth::routes();

Route::get('/videos/event/{event}', 'VideosController@showEvent')->name('videos.showEvent');

Route::group(['prefix' => 'user', 'as' => 'user.'], function() {
    Route::get('/', 'UserController@show')->name('show');
    Route::get('edit', 'UserController@edit')->name('edit');
    Route::put('update', 'UserController@update')->name('update');
});

Route::group(['middleware' => ['auth']], function() {
    Route::resource('upload', 'UploadController');
    Route::post('upload/multiple', 'UploadController@storeMultiple')->name('upload.multiple');

    Route::resource('videos', 'VideosController', [
        'names' => [
            'index' => 'videos.index',
            'show' => 'videos.show',
            'edit' => 'videos.edit',
            'update' => 'videos.update',
        ]
    ]);

    Route::post('/videos/{video}/votes', 'VideoVoteController@store');
    Route::delete('/videos/{video}/votes', 'VideoVoteController@remove');

    Route::post('/videos/{video}/comments', 'VideoCommentController@store');
    Route::delete('/videos/{video}/comments/{comment}', 'VideoCommentController@delete');

});