<?php

namespace App\Http\Controllers;

use App\Jobs\UploadVideo;
use Illuminate\Http\Request;

use Log;
use App\Video;

class WebhookController extends Controller
{
    public function inbound(Request $request) {

        Log::info('Inbound Webhook', ['request' => $request]);

        if ($request->event) {
            $method = camel_case(str_replace('.', '_', $request->event));

            if (method_exists($this, $method)) {
                return $this->{$method}($request);
            }
        }
    }

    public function receiveVideo(Request $request) {
        Log::info('Video received', ['request' => $request]);
    }

    public function outputProcessed(Request $request) {

    }

    public function jobCompleted(Request $request) {
        $video = Video::where('coconut_id', $request->id)->firstOrFail();

        $transcodedFilename = pathinfo($video->video_filename, PATHINFO_FILENAME);

        $video->update([
            'processed' => true,
            'video_filename' => $transcodedFilename . '.mp4'
        ]);

        $this->dispatch(new UploadVideo($video));
    }
}
