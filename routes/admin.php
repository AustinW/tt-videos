<?php

/*
|--------------------------------------------------------------------------
| Admin (Backpack) Routes
|--------------------------------------------------------------------------
|
| Routes for Admin section
|
*/
Route::group(['middleware' => ['admin', 'auth', 'role:owner|admin|national-coach'], 'name' => 'admin'], function()
{
    CRUD::resource('competition', 'CompetitionCrudController')->middleware(['permission:create-scores,read-scores,update-scores,delete-scores']);
    CRUD::resource('video', 'VideoCrudController')->middleware(['permission:create-video,read-video,update-video,delete-video']);
    CRUD::resource('user', 'UserCrudController');
    CRUD::resource('role', 'RoleCrudController')->middleware(['permission:add-role,remove-role']);
    CRUD::resource('permission', 'PermissionCrudController')->middleware(['permission:add-permission,remove-permission']);
});