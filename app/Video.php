<?php

namespace App;

use App\Observers\VideoObserver;
use App\Traits\OrderableTrait;
use App\Traits\VoteableTrait;
use Backpack\CRUD\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\File;
use Laravel\Scout\Searchable;

class Video extends Model
{
    use Notifiable, SoftDeletes, Searchable, VoteableTrait, OrderableTrait, CrudTrait;

    protected $fillable = [
        'unique_id',
        'user_id',
        'coconut_id',
        'name',
        'title',
        'description',
        'event',
        'video_filename',
        'cloud_file',
        'processed',
        'visibility',
        'allow_votes',
        'allow_comments',
    ];

    protected $events = [
        'updated' => VideoObserver::class
    ];

    public function getRouteKeyName() {
        return 'unique_id';
    }

    public function toSearchableArray() {
        $properties = $this->toArray();

        $properties['visible'] = $this->isProcessed() && $this->isPublic();

        return $properties;
    }

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function views() {
        return $this->hasMany(VideoView::class);
    }

    public function votes() {
        return $this->morphMany(Vote::class, 'voteable');
    }

    public function comments() {
        return $this->morphMany(Comment::class, 'commentable')->whereNull('reply_id');
    }

    public function viewCount()
    {
        return $this->views()->count();
    }

    public function isProcessed() {
        return (bool) $this->processed;
    }

    public function votesAllowed() {
        return (bool) $this->allow_votes;
    }

    public function commentsAllowed() {
        return (bool) $this->allow_comments;
    }

    public function cloudVideoPath() {
        return $this->getPath($this->title . '_' . $this->unique_id . '.mp4');
    }

    public function getStreamUrl() {
        return asset('storage/videos/' . $this->video_filename);
    }

    public function thumbnailUrl() {
        return ($this->isProcessed())
            ? asset('storage/videos/' . $this->thumbnailName())
            : asset('img/processing.png');
    }

    public function thumbnailName() {
        return pathinfo($this->video_filename, PATHINFO_FILENAME) . '_t.jpg';
    }

    public function isPrivate() {
        return $this->visibility === 'private';
    }

    public function isPublic() {
        return $this->visibility === 'public';
    }

    public function ownedByUser(User $user) {
        return $this->user_id === $user->id;
    }

    public function canBeAccessed(User $user = null) {

        if (!$user && $this->isPublic()) {
            return true;
        } else if ($user->id === $this->user_id || $user->hasRole(['owner', 'admin', 'national-coach'])) {
            return true;
        } else if ($this->isPrivate()) {
            if ($user->can('read-video')) {
                $followed = DB::table('coach_athlete')
                    ->where('coach_id', $user->id)
                    ->where('athlete_id', $this->user_id)
                    ->whereNotNull('verified')
                    ->count();

                return $followed > 0;
            } else {
                return false;
            }
        } else {
            // Video is public
            return true;
        }
    }

    public function voteFromUser(User $user) {
        return $this->votes()->where('user_id', $user->id);
    }

    public function scopeProcessed($query) {
        return $query->where('processed', true);
    }

    public function scopePublic($query) {
        return $query->where('visibility', 'public');
    }

    public function scopeVisible($query) {
        return $query->processed()->public();
    }

    public function deleteUploadedFile() {
        File::delete(storage_path() . '/uploads/' . $this->video_filename);
    }
}
