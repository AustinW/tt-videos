<?php

namespace App\Jobs;

use File;
use Storage;
use App\Video;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class UploadVideo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public $video;

    /**
     * Create a new job instance.
     *
     * @param App\Video|Video $video
     * @internal param $filename
     */
    public function __construct(Video $video)
    {
        $this->video = $video;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $filePath = storage_path() . '/transcoded/' . $this->video->video_filename;
        $thumbnailPath = storage_path() . '/transcoded/' . $this->video->unique_id . '_t.jpg';

        $cloudVideoPath = $this->video->cloudVideoPath();
        $cloudThumbnailPath = $this->video->cloudThumbnailPath();

        if (!Storage::disk('dropbox')->has($cloudVideoPath)) {
            if (Storage::disk('dropbox')->writeStream($cloudVideoPath, fopen($filePath, 'r+'))) {
                $this->video->update(['cloud_path' => $cloudVideoPath]);
                File::delete($filePath);
            }
        }

        if (!Storage::disk('dropbox')->has($cloudThumbnailPath)) {
            if (Storage::disk('dropbox')->writeStream($cloudThumbnailPath, fopen($thumbnailPath, 'r+'))) {
                File::delete($thumbnailPath);
            }
        }
    }
}
