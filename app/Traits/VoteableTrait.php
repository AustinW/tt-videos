<?php

namespace App\Traits;

trait VoteableTrait {
    public function upVotes() {
        return $this->votes->where('type', 'up');
    }

    public function downVotes() {
        return $this->votes->where('type', 'down');
    }
}