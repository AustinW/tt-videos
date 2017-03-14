<?php

namespace App\Transformers;

use App\Competition;
use League\Fractal\TransformerAbstract;
use App\Transformers\ScoreTransformer;

class CompetitionTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'user', 'trampolineScores', 'doubleMiniScores', 'tumblingScores'
    ];

    public function transform(Competition $competition) {
        return [
            'id' => $competition->id,
            'user_id' => $competition->user_id,
            'title' => $competition->title,
            'location' => $competition->location,
            'start_date' => $competition->start_date,
            'end_date' => $competition->end_date,
            'created_at' => $competition->created_at,
            'updated_at' => $competition->updated_at,
            'created_at_human' => $competition->created_at->diffForHumans(),
        ];
    }

    public function includeUser(Competition $competition) {
        return $this->item($competition->user, new UserTransformer());
    }

    public function includeTrampolineScores(Competition $competition) {
        return $this->collection($competition->trampolineScores, new ScoreTransformer());
    }

    public function includeDoubleMiniScores(Competition $competition) {
        return $this->collection($competition->doubleMiniScores, new ScoreTransformer());
    }

    public function includeTumblingScores(Competition $competition) {
        return $this->collection($competition->tumblingScores, new ScoreTransformer());
    }
}