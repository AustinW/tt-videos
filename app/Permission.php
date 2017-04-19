<?php

namespace App;

use Laratrust\LaratrustPermission;
use Backpack\CRUD\CrudTrait;

class Permission extends LaratrustPermission
{
    use CrudTrait;

    public $permissions = [
        'create-video',
        'read-video',
        'update-video',
        'delete-video',
        'create-scores',
        'read-scores',
        'update-scores',
        'delete-scores',
        'view-athletes',
        'watch-athlete',
        'add-role',
        'remove-role',
        'make-admin',
        'remove-admin',
        'add-permission',
        'remove-permission',
    ];

    protected $fillable = [
        'name',
        'display_name',
        'description',
    ];
}
