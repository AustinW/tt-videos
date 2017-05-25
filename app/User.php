<?php

namespace App;

use Backpack\CRUD\CrudTrait;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Config;
use Laravel\Socialite\Facades\Socialite;
use Thomaswelton\LaravelGravatar\Facades\Gravatar;
use Backpack\Base\app\Notifications\ResetPasswordNotification as ResetPasswordNotification;
use Laratrust\Traits\LaratrustUserTrait;

class User extends Authenticatable
{
    use LaratrustUserTrait;
    use Notifiable;
    use CrudTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'image_file', 'provider', 'provider_id',
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

    // TODO: Fill this out to easily grab all the user's videos that another user can see
    public function seeableVideos(User $watcher)
    {

    }

    public function getImage() {
        if ($this->image_file) {
            return asset('storage/profiles/' . $this->image_file);
        } else if ($this->provider_id) {
            return $this->socialImage();
        }

        return Gravatar::src($this->email, 200);
    }

    protected function socialImage()
    {
        $image = null;

        if (!$this->provider_id)
            return $image;

        switch ($this->provider) {
            case 'facebook':
                $image = 'http://graph.facebook.com/' . $this->provider_id . '/picture?type=large';
                break;
            case 'twitter':
                $user = Socialite::driver('twitter')->userFromTokenAndSecret(
                    Config::get('services.twitter.access_token'),
                    Config::get('services.twitter.access_token_secret')
                );

                return $user->getAvatar();
        }

        return $image;
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

    /**
     * Check whether user is following the specified athlete
     * @param User $athlete
     * @return bool
     */
    public function isFollowing(User $athlete)
    {
        return $this->verifiedFollowedAthletes()->wherePivot('athlete_id', $athlete->id)->count() > 0;
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
