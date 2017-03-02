<?php

namespace App\Observers;

use App\Video;
use Cache, Storage;

class VideoObserver
{
    /**
     * Listen to the Video updated event.
     *
     * @param  Video  $video
     * @return void
     */
    public function updated(Video $video)
    {
        Cache::put($video->cloudThumbnailPath(), Storage::disk('dropbox')->read($video->cloudThumbnailPath()));
    }


}