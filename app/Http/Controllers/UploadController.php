<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadMultipleFormRequest;
use App\Jobs\TranscodeVideo;
use Illuminate\Http\Request;

use App\Http\Requests\UploadFormRequest;
use Auth;
use App\Video;
use App\Jobs\UploadVideo;

class UploadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('upload.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('upload.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UploadFormRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(UploadFormRequest $request)
    {
        $video = Video::where('unique_id', $request->unique_id)->firstOrFail();

        $request->file('video')->move(storage_path() . '/uploads', $video->video_filename);

        $this->dispatch(new TranscodeVideo($video));

        return response()->json(null, 200);
    }

    public function storeMultiple(UploadMultipleFormRequest $request) {
        $file = $request->file('file');

        $title = ucwords(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME));
        $unique_id = uniqid(true);

        $event = $request->get('event');
        if ($event === 'dmt') {
            $event = 'double mini';
        }

        $video = $request->user()->videos()->create([
            'title' => $title,
            'description' => '',
            'event' => $event,

            'user_id' => $request->user()->id,
            'unique_id' => $unique_id,

            'video_filename' => $unique_id . "." . $file->extension(),
            'visibility' => $request->get('visibility', 'private'),
            'allow_votes' => false,
            'allow_comments' => true,
        ]);

        $request->file('file')->move(storage_path() . '/uploads', $video->video_filename);

//        $this->dispatch(new TranscodeVideo($video));

        return response()->json([
            'data' => $video
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
