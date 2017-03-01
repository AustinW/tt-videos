<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{

    protected $fillable = [
        'google_id',
        'name',
        'title',
        'description',
        'event',
        'video_filename',
        'processed',
        'processed_percentage',
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function getPath() {
        return implode('/', [
            ucwords($this->event),
            ucwords($this->name),
            $this->video_filename
        ]);
    }
}
