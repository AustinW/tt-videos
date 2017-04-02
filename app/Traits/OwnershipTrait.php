<?php

namespace App\Traits;

use App\User;
use Illuminate\Database\Eloquent\Model;

trait OwnershipTrait {
    protected function ownership(User $user, Model $model) {
        return $user->id === $model->user_id;
    }
};