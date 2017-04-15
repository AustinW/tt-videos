<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AthletesController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->can('view-athletes')) {

            $athletes = $request->user()->verifiedFollowedAthletes()->with([
                'videos',
                'competitions',
                'competitions.trampolineScores',
                'competitions.doubleMiniScores',
                'competitions.tumblingScores'
            ])->get();

            return response()->json(compact('athletes'));
        } else {
            abort(403);
        }
    }
}