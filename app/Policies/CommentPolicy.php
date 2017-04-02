<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Comment;
use App\Traits\OwnershipTrait;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy
{
    use HandlesAuthorization, OwnershipTrait;

    public function delete(User $user, Comment $comment) {
        return $this->ownership($user, $comment);
    }
}
