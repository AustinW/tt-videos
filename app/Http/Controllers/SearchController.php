<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Video;

class SearchController extends Controller
{
    public function index(Request $request) {
        if (!$request->q) {
            return redirect('/');
        }

        $videos = Video::search($request->q)->where('visible', true)->get();

        return view('search.index', [
            'videos' => $videos,
        ]);
    }
}
