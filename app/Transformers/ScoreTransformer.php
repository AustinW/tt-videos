<?php

namespace App\Transformers;

use App\User;
use League\Fractal\TransformerAbstract;
use App\Transformers\VideoTransformer;
use App\Score;

class ScoreTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'video'
    ];

    public function transform(Score $score) {
        $attributes = [
            'id' => $score->id,
            'video_id' => $score->video_id,
            'routine' => $score->routine,
            'execution' => $score->execution,
            'neutral_deduction' => $score->neutral_deduction,
            'difficulty' => $score->difficulty,
            'total_score' => $score->total_score,
            'created_at' => $score->created_at,
            'updated_at' => $score->updated_at,
            'created_at_human' => $score->created_at->diffForHumans(),
        ];

        $modelAttributes = $score->getAttributes();

        if (array_key_exists('horizontal_displacement', $modelAttributes)) {
            $attributes['horizontal_displacement'] = $score->horizontal_displacement;
        }

        if (array_key_exists('time_of_flight', $modelAttributes)) {
            $attributes['time_of_flight'] = $score->time_of_flight;
        }

        return $attributes;
    }

    public function includeVideo(Score $score) {
        if (!$score->video_id) {
            return $this->null();
        }

        return $this->item($score->video, new VideoTransformer());
    }
}