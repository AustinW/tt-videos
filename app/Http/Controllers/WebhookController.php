<?php

namespace App\Http\Controllers;

use App\Jobs\DownloadVideo;
use App\Notifications\VideoUploadedNotification;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Notification;
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

        $video->deleteUploadedFile();

        Notification::send($video->user->followers()->get(), new VideoUploadedNotification($video));

        if (App::environment('local')) {
            $this->dispatch(new DownloadVideo($video));
        }

        return response()->json([
            'status' => 'ok'
        ], 200);

    }
}
