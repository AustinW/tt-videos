<?php

namespace App\Jobs;

use App\Video;
use Coconut\Coconut_Job;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

use Log;

class TranscodeVideo implements ShouldQueue
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
        if (!$this->video->isProcessed()) {

            $ftp = 'ftp://'.urlencode(env('FTP_USERNAME')).':'.urlencode(env('FTP_PASSWORD')).'@'.env('FTP_HOST');

            $config = [
                'api_key' => env('COCONUT_API_KEY'),
                'source' => env('TUNNEL_URL', config('app.url')).'/video-src/' . $this->video->video_filename,
                'webhook' => env('TUNNEL_URL', config('app.url')).'/webhook',
                'outputs' => [
                    'mp4:720p' => $ftp . '/' . $this->video->unique_id . '.mp4',
                    'jpg' => $ftp . '/' . $this->video->unique_id . '_t.jpg, number=1'
                ]
            ];

            $job = Coconut_Job::create($config);

            Log::info('Job created', ['job' => $job, 'config' => $config]);

            $this->video->coconut_id = $job->id;
            $this->video->save();

        }
    }
}
