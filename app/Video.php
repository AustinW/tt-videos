<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{

    protected $fillable = [
        'unique_id',
        'coconut_id',
        'name',
        'title',
        'description',
        'event',
        'video_filename',
        'cloud_file',
        'processed',
    ];

    public function getRouteKeyName() {
        return 'unique_id';
    }

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function getPath($file) {
        return implode('/', [
            ucwords($this->event),
            ucwords($this->name),
            $file
        ]);
    }

    public function isProcessed() {
        return $this->processed;
    }

    public function cloudVideoPath() {
        return $this->getPath($this->title . '_' . $this->unique_id . '.mp4');
    }

    public function cloudThumbnailPath() {
        return 'thumbnails/' . $this->unique_id . '_t.jpg';
    }
}
