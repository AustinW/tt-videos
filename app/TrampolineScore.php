<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\ScoreableTrait;

class TrampolineScore extends Model
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

    public function video() {
        return $this->belongsTo(Video::class);
    }
}
