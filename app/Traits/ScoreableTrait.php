<?php

namespace App\Traits;

use App\Competition;
use App\Video;

trait ScoreableTrait
{
    public function competition() {
        return $this->belongsTo(Competition::class);
    }

    public function video() {
        return $this->hasOne(Video::class);
    }
}