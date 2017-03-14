<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Competition;
use App\Video;

class Score extends Model
{
    public function competition() {
        return $this->belongsTo(Competition::class);
    }

    public function video() {
        return $this->belongsTo(Video::class);
    }
}
