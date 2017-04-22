<?php

namespace App\Policies;

use App\Traits\OwnershipTrait;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use App\Video;

class VideoPolicy
{
    use HandlesAuthorization, OwnershipTrait;

    public function show(User $user, Video $video)
    {
        return $this->permissionCheck($user, $video, 'read-videos');
    }

    public function update(User $user, Video $video)
    {
        return $this->permissionCheck($user, $video, 'update-videos');
    }

    public function edit(User $user, Video $video)
    {
        return $this->permissionCheck($user, $video, 'update-videos');
    }

    public function delete(User $user, Video $video)
    {
        return $this->permissionCheck($user, $video, 'delete-videos');
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