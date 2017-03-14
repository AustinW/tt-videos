<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\TrampolineScore;
use App\DoubleMiniScore;
use App\TumblingScore;
use App\User;

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

    public function user() {
        return $this->belongsTo(User::class);
    }

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
        if (!$this->start_date && !$this->end_date) {
            return '';
        } else if (!$this->end_date) {
            return $this->start_date->format('F jS, Y');
        } else if (!$this->start_date) {
            return $this->end_date->format('F jS, Y');
        } else {
            if ($this->start_date->month !== $this->end_date->month) {
                return $this->start_date->format('F jS') . ' - ' . $this->end_date->format('F jS, Y');
            } else {
                return $this->start_date->format('F jS') . ' - ' . $this->end_date->format('jS, Y');
            }
        }
    }

    public function colSize($event) {
        $count = $this->{$event}()->count();

        $cols = [
            1 => '12',
            2 => '6',
            3 => '4',
            4 => '3',
        ];

        return $cols[$count];
    }
}
