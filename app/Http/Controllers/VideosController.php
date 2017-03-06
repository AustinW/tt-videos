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
        if (Auth::check()) {
            $videos = Auth::user()->videos()->get();
        } else if ($request->name) {
            $videos = Video::where('name', $request->name)->get();
        } else if (\Session::has('athlete_name')) {
            $videos = Video::where('name', \Session::get('athlete_name'))->get();
        } else {
            $videos = collect();
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

        $request->user()->videos()->create([
            'user_id' => (Auth::guest()) ? null : $request->user()->id,
            'unique_id' => $unique_id,
            'title' => $request->title,
            'name' => $request->name,
            'event' => $request->event,
            'description' => $request->description,
            'video_filename' => $unique_id . "." . $request->extension,
            'visibility' => 'private',
            'allow_votes' => false,
            'allow_comments' => true,
        ]);

        return response()->json([
            'data' => [
                'unique_id' => $unique_id,
            ]
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Video $video
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function show(Video $video)
    {
        return view('videos.show', ['video' => $video]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Video $video
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function edit(Video $video)
    {
        $this->authorize('edit', $video);

        return view('videos.edit', [
            'video' => $video
        ]);
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
        $this->authorize('update', $video);

        $video->update([
            'user_id' => (Auth::guest()) ? null : $request->user()->id,
            'title' => $request->title,
            'name' => $request->name,
            'event' => $request->event,
            'description' => $request->description,
            'visibility' => $request->get('visibility', 'private'),
            'allow_votes' => $request->has('allow_votes'),
            'allow_comments' => $request->has('allow_comments'),
        ]);

        if ($request->ajax()) {
            return response()->json([
                'data' => [
                    'unique_id' => $video->unique_id,
                ]
            ]);
        }

        return redirect()->back()->with([
            'message' => [
                'class' => 'success',
                'body' => 'Video updated.',
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Video $video
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function destroy(Video $video)
    {
        $this->authorize('delete', $video);

        $video->delete();

        return redirect()->back();
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

    /**
     * @param Request $request
     * @param $event
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showEvent(Request $request, $event) {

        if (!$request->user()) {
            return redirect()->route('login');
        }

        $event = str_replace('double-mini', 'double mini', $event);

        $videos = $request->user()->videos()->where('event', $event)->orderBy('created_at', 'desc')->get();

        $header = 'Your ' . ucwords($event) . ' Videos';

        return view('videos.index', compact('videos', 'header'));
    }
}
