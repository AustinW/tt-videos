<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\VideoFormRequest;
use App\Video;
use Auth, Storage, File, Session, Cache, Response;

class VideosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $videos = [];

        if (Auth::check()) {
            $videos = Auth::user()->videos()->get();
        } else if ($request->name) {
            $videos = Video::where('name', $request->name)->get();
        } else if (\Session::has('athlete_name')) {
            $videos = Video::where('name', \Session::get('athlete_name'))->get();
        }

        return view('videos.index', ['videos' => $videos]);
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
        $unique_id = uniqid(true);

        $video = Video::create([
            'user_id' => (Auth::guest()) ? null : $request->user()->id,
            'unique_id' => $unique_id,
            'title' => $request->title,
            'name' => $request->name,
            'event' => $request->event,
            'description' => $request->description,
            'video_filename' => $unique_id . "." . $request->extension,
        ]);

        if (!Auth::check()) {
            Session::put('athlete_name', $request->name);
        }

        return response()->json([
            'data' => [
                'unique_id' => $unique_id,
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
     * @param Video $video
     * @return \Illuminate\Http\Response
     * @internal param $unique_id
     * @internal param int $id
     */
    public function update(VideoFormRequest $request, Video $video)
    {
        $oldPath = $video->cloudVideoPath();

        $video->update([
            'user_id' => (Auth::guest()) ? null : $request->user()->id,
            'title' => $request->title,
            'name' => $request->name,
            'event' => $request->event,
            'description' => $request->description,
        ]);

        // Update the file name if we need to
        if (Storage::disk('dropbox')->has($oldPath)) {
            Storage::disk('dropbox')->rename($oldPath, $video->cloudVideoPath());
        }

        return response()->json([
            'data' => [
                'unique_id' => $video->unique_id,
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

    public function serve($filename) {
        $src = storage_path() . '/uploads/' . $filename;

        if (File::exists($src)) {
            return response()->file($src);
        } else {
            return abort(404);
        }
    }

    public function thumbnail(Video $video) {
        $path = $video->cloudThumbnailPath();

        $mime = \Storage::disk('dropbox')->getMimetype($path);

        $data = Cache::remember($video->cloudThumbnailPath(), 3600, function() use($video) {
            return \Storage::disk('dropbox')->read($video->cloudThumbnailPath());
        });

        $response = Response::make($data, 200);

        $response->header('Content-Type', $mime);

        return $response;
    }
}
