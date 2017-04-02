<?php

namespace App\Policies;

use App\Traits\OwnershipTrait;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use App\Competition;

class CompetitionPolicy
{
    use HandlesAuthorization, OwnershipTrait;

    public function show(User $user, Competition $competition)
    {
        return $this->ownership($user, $competition);
    }

    public function update(User $user, Competition $competition)
    {
        return $this->ownership($user, $competition);
    }

    public function delete(User $user, Competition $competition)
    {
        return $this->ownership($user, $competition);
    }
}