<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Thomaswelton\LaravelGravatar\Facades\Gravatar;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'image_file'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function videos() {
        return $this->hasMany('App\Video');
    }

    public function getImage() {
        if ($this->image_file) {
            return asset('storage/profiles/' . $this->image_file);
        } else {
            return Gravatar::src($this->email, 200);
        }
    }
}
