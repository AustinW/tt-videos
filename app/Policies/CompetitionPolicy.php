<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use App\Competition;

class CompetitionPolicy
{
    use HandlesAuthorization;

    public function show(User $user, Competition $competition)
    {
        return $user->id === $competition->user_id;
    }

    public function update(User $user, Competition $competition)
    {
        return $user->id === $competition->user_id;
    }
}