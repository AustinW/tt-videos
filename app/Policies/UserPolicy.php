<?php

namespace App\Policies;

use App\Traits\OwnershipTrait;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization, OwnershipTrait;

    public function show(User $user, User $otherUser)
    {
        return true;
    }

    public function update(User $user, User $otherUser)
    {
        return ($user->id === $otherUser->id || $user->hasRole(['owner', 'admin']));
    }

    public function delete(User $user, User $otherUser)
    {
        return ($user->id === $otherUser->id || $user->hasRole(['owner', 'admin']));
    }
}
