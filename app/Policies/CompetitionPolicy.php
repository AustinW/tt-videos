<?php

namespace App\Policies;

use App\Traits\OwnershipTrait;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use App\Competition;
use Illuminate\Support\Facades\DB;

class CompetitionPolicy
{
    use HandlesAuthorization, OwnershipTrait;

    public function show(User $user, Competition $competition)
    {
        if ($this->ownership($user, $competition) || $user->hasRole(['owner', 'admin'])) {
            return true;
        } else {
            if ($user->can('read-scores')) {
                $followed = DB::table('coach_athlete')
                    ->where('coach_id', $user->id)
                    ->where('athlete_id', $competition->user_id)
                    ->whereNotNull('verified')
                    ->count();

                return $followed > 0;
            } else {
                return false;
            }
        }
    }

    public function update(User $user, Competition $competition)
    {
        return ($this->ownership($user, $competition) || $user->hasRole(['owner', 'admin']));
    }

    public function delete(User $user, Competition $competition)
    {
        return $this->ownership($user, $competition);
    }
}
