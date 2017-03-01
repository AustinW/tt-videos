<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\VideoFormRequest;
use App\Video;
use Auth, Storage;

class VideosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param VideoFormRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(VideoFormRequest $request)
    {
        $video = Video::create([
            'user_id' => (Auth::guest()) ? null : $request->user()->id,
            'title' => $request->title,
            'name' => $request->name,
            'event' => $request->event,
            'description' => $request->description,
            'video_filename' => str_slug($request->title) . "." . time() . "." . $request->extension,
        ]);

        return response()->json([
            'data' => [
                'id' => $video->id,
            ]
        ]);
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
     * @param VideoFormRequest|Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(VideoFormRequest $request, $id)
    {
        $video = Video::find($id);

        $oldPath = $video->getPath();

        $video->update([
            'user_id' => (Auth::guest()) ? null : $request->user()->id,
            'title' => $request->title,
            'name' => $request->name,
            'event' => $request->event,
            'description' => $request->description,
            'video_filename' => str_slug($request->title) . "." . time() . "." . $request->extension
        ]);

        if (!Storage::disk('dropbox')->has($video->getPath())) {
            Storage::disk('dropbox')->rename($oldPath, $video->getPath());
        }

        return response()->json([
            'data' => [
                'id' => $video->id,
            ]
        ]);
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
