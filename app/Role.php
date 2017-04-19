<?php

namespace App;

use Backpack\CRUD\CrudTrait;
use Laratrust\LaratrustRole;

class Role extends LaratrustRole
{
    use CrudTrait;

    public $roles = ['owner', 'admin', 'national-coach', 'coach', 'athlete'];

    protected $fillable = [
        'name',
        'display_name',
        'description',
    ];
}
