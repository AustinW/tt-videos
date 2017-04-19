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

Auth::routes();

Route::get('thumbnail/{video}', 'VideosController@thumbnail')->name('thumbnail');

Route::post('webhook', 'WebhookController@inbound');
Route::post('webhook/receive-video', 'WebhookController@receiveVideo');

Route::get('/video-src/{file}', 'VideosController@serve');

Route::get('/home', 'HomeController@index');

Route::post('/videos/{video}/views', 'VideoViewController@create');

Route::get('/search', 'SearchController@index');

Route::get('/videos/{video}/comments', 'VideoCommentController@index');

Route::get('/videos/{video}/votes', 'VideoVoteController@show');

Route::get('/videos/event/{event}', 'VideosController@showEvent')->name('videos.showEvent');

Route::resource('user', 'UserController', [
    'names' => [
        'index' => 'user.index',
        'show' => 'user.show',
        'edit' => 'user.edit',
        'update' => 'user.update',
        'destroy' => 'user.destroy',
    ],
    'only' => ['index', 'show', 'edit', 'update', 'destroy']
]);

//Route::group(['prefix' => 'user', 'as' => 'user.'], function() {
//    Route::get('/', 'UserController@index')->name('index');
//    Route::get('{user}', 'UserController@show')->name('show');
//    Route::get('edit', 'UserController@edit')->name('edit');
//    Route::put('update', 'UserController@update')->name('update');
//});

Route::group(['middleware' => ['auth']], function() {
    Route::resource('upload', 'UploadController');

    Route::resource('competitions', 'CompetitionsController', [
        'names' => [
            'index' => 'competitions.index',
            'show' => 'competitions.show',
            'edit' => 'competitions.edit',
            'update' => 'competitions.update',
            'destroy' => 'competitions.delete',
        ]
    ]);

    Route::group(['prefix' => 'api', 'as' => 'api.'], function() {
        Route::get('athletes', 'Api\\AthletesController@index')->name('athletes.index');
    });

    Route::get('athletes/search', 'AthletesController@search')->name('athletes.search');
    Route::get('athletes', 'AthletesController@index')->name('athletes.index');
    Route::post('athletes/follow', 'AthletesController@follow')->name('athletes.follow');
    Route::post('athletes/unfollow', 'AthletesController@unfollow')->name('athletes.unfollow');
    Route::get('athletes/verify-follow/{code}', 'AthletesController@verifyFollow')->name('athletes.verifyFollow');

    Route::post('upload/multiple', 'UploadController@storeMultiple')->name('upload.multiple');

    Route::resource('videos', 'VideosController', [
        'names' => [
            'index' => 'videos.index',
            'show' => 'videos.show',
            'edit' => 'videos.edit',
            'update' => 'videos.update',
            'upload' => 'videos.upload',
        ]
    ]);

    Route::post('/videos/{video}/votes', 'VideoVoteController@store');
    Route::delete('/videos/{video}/votes', 'VideoVoteController@remove');

    Route::post('/videos/{video}/comments', 'VideoCommentController@store');
    Route::delete('/videos/{video}/comments/{comment}', 'VideoCommentController@delete');

});