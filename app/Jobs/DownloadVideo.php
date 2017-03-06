<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Video;
use Storage;

class DownloadVideo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $video;

    /**
     * Create a new job instance.
     *
     * @param Video $video
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
        if (Storage::disk('ftp')->exists($this->video->video_filename)) {
            $videoFile = Storage::disk('ftp')->read($this->video->video_filename);
            $thumnbailFile = Storage::disk('ftp')->read($this->video->thumbnailName());

            Storage::disk('public')->put('/videos/' . $this->video->video_filename, $videoFile);
            Storage::disk('public')->put('/videos/' . $this->video->thumbnailName(), $thumnbailFile);
        }
    }
}
