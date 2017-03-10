<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\TrampolineScore;
use App\DoubleMiniScore;
use App\TumblingScore;

class Competition extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'location',
        'start_date',
        'end_date',
    ];

    protected $dates = [
        'start_date',
        'end_date',
    ];

    public function trampolineScores() {
        return $this->hasMany(TrampolineScore::class);
    }

    public function doubleMiniScores() {
        return $this->hasMany(DoubleMiniScore::class);
    }

    public function tumblingScores() {
        return $this->hasMany(TumblingScore::class);
    }

    public function dateSpan() {
        if ($this->start_date->month !== $this->end_date->month) {
            return $this->start_date->format('F jS') . ' - ' . $this->end_date->format('F jS, Y');
        } else {
            return $this->start_date->format('F jS') . ' - ' . $this->end_date->format('jS, Y');
        }
    }
}
