<?php

namespace App;

use App\Traits\ScoreableTrait;
use Illuminate\Database\Eloquent\Model;
use App\Score;

class DoubleMiniScore extends Score
{
    use ScoreableTrait;

    protected $fillable = [
        'id',
        'competition_id',
        'video_id',
        'routine',
        'execution',
        'neutral_deduction',
        'difficulty',
        'total_score',
    ];

    public static $routineTypes = [
        'prelim_pass_1',
        'prelim_pass_2',
        'final_pass_3',
        'final_pass_4',
    ];

    public static $scoreParts = [
        'execution',
        'neutral_deduction',
        'difficulty',
        'total_score',
    ];
}
