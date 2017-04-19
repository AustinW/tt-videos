<?php

namespace App\Traits;

use App\User;
use Illuminate\Database\Eloquent\Model;

trait OwnershipTrait {

    /**
     * @param User $user
     * @param Model $model
     * @return bool
     */
    protected function ownership(User $user, Model $model) {
        return $user->id === $model->user_id;
    }

    /**
     * @param User $user
     * @param Model $model
     * @return bool
     */
    protected function authorizationCheck(User $user, Model $model) {
        if ($this->ownership($user, $model) || $user->hasRole(['owner', 'admin'])) {
            return true;
        }
    }

    protected function permissionCheck(User $user, Model $model, $permission)
    {
        if ($this->ownership($user, $model) || $user->hasRole(['owner', 'admin'])) {
            return true;
        } else {
            if ($user->can($permission)) {
                $followed = DB::table('coach_athlete')
                    ->where('coach_id', $user->id)
                    ->where('athlete_id', $model->user_id)
                    ->whereNotNull('verified')
                    ->count();

                return $followed > 0;
            } else {
                return false;
            }
        }
    }
};