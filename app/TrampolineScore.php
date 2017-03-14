<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\ScoreableTrait;
use App\Score;

class TrampolineScore extends Score
{
    use ScoreableTrait;

    protected $fillable = [
        'id',
        'competition_id',
        'video_id',
        'routine',
        'execution',
        'time_of_flight',
        'horizontal_displacement',
        'neutral_deduction',
        'difficulty',
        'total_score',
    ];

    public static $routineTypes = [
        'prelim_compulsory',
        'prelim_optional',
        'semi_final_optional',
        'final_optional',
    ];

    public static $scoreParts = [
        'execution',
        'time_of_flight',
        'horizontal_displacement',
        'neutral_deduction',
        'difficulty',
        'total_score',
    ];
}
