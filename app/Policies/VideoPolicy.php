<?php

namespace App\Policies;

use App\Traits\OwnershipTrait;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use App\Video;

class VideoPolicy
{
    use HandlesAuthorization, OwnershipTrait;

    public function update(User $user, Video $video)
    {
        return $this->ownership($user, $video);
    }

    public function edit(User $user, Video $video)
    {
        return $this->ownership($user, $video);
    }

    public function delete(User $user, Video $video)
    {
        return $this->ownership($user, $video);
    }

    public function vote(User $user, Video $video)
    {
        if (!$video->canBeAccessed($user)) {
            return false;
        }

        return $video->votesAllowed();
    }

    public function comment(User $user, Video $video)
    {
        if (!$video->canBeAccessed($user)) {
            return false;
        }

        if (!$video->commentsAllowed()) {
            return false;
        }

        return true;
    }
}