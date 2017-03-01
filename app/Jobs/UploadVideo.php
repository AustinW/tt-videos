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
        $file = storage_path() . '/uploads/' . $this->video->video_filename;

        if (Storage::disk('dropbox')->writeStream($this->video->getPath(), fopen($file, 'r+'))) {
            File::delete($file);
        }
    }
}
