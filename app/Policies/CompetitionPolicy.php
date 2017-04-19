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
        return $this->permissionCheck($user, $competition, 'read-scores');
    }

    public function update(User $user, Competition $competition)
    {
        return $this->authorizationCheck($user, $competition);
    }

    public function delete(User $user, Competition $competition)
    {
        return $this->authorizationCheck($user, $competition);
    }
}
