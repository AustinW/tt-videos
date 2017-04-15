<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Thomaswelton\LaravelGravatar\Facades\Gravatar;
use Backpack\Base\app\Notifications\ResetPasswordNotification as ResetPasswordNotification;
use Laratrust\Traits\LaratrustUserTrait;

class User extends Authenticatable
{
    use LaratrustUserTrait;
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

    public function competitions() {
        return $this->hasMany(Competition::class);
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    public function rolesString() {
        return $this->roles->map(function($role) {
            return $role->display_name;
        })->implode(', ');
    }

    public function linkToAdmin() {
        if ($this->hasRole(['owner', 'admin'])) {
            return '/admin/dashboard';
        } else {
            return '#';
        }
    }

    public function followers() {
        return $this->belongsToMany(self::class, 'coach_athlete', 'athlete_id', 'coach_id')
            ->withPivot(['verified', 'verification_code'])->wherePivot('verified', '!=', 'NULL');
    }

    public function unverifiedFollowers() {
        return $this->belongsToMany(self::class, 'coach_athlete', 'athlete_id', 'coach_id')
            ->withPivot(['verified', 'verification_code']);
    }

    public function followedAthletes()
    {
        return $this->belongsToMany(self::class, 'coach_athlete', 'coach_id', 'athlete_id')
            ->withPivot(['verified', 'verification_code']);
    }

    public function verifiedFollowedAthletes()
    {
        return $this->followedAthletes()->wherePivot('verified', '!=', 'NULL');
    }

    public function addAthlete(User $athlete)
    {
        $this->followedAthletes()->attach($athlete->id);
    }

    public function removeAthlete(User $athlete)
    {
        $this->followedAthletes()->detach($athlete->id);
    }
}
