<?php

namespace App\Http\Controllers;

use App\Notifications\AthleteFollowedNotification;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;

class AthletesController extends Controller
{

    public function index(Request $request)
    {
        return view('athletes.index');
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $user = Auth::user();

        if ($user->can('view-athletes')) {
            if ($request->ajax()) {
                $athletes = User::whereHas('roles', function($query){
                    $query->where('name', 'athlete');
                })->get();

                $followedAthletes = $user->followedAthletes()->get();

                return response()->json([
                    'all_athletes' => $athletes,
                    'my_athletes' => $followedAthletes,
                ], 200);
            } else {
                return view('athletes.search');
            }
        } else {
            return abort(403);
        }

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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Connect a user to an athlete
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|void
     */
    public function follow(Request $request)
    {
        if ($request->user()->can('watch-athlete')) {
            $athlete = User::findOrFail($request->athleteId);

            $verificationCode = uniqid(true);

            $pivotFields = [
                'verification_code' => $verificationCode
            ];

            $automaticallyVerifiable = $request->user()->hasRole(['owner', 'admin', 'national-coach']);

            if ($automaticallyVerifiable) {
                $pivotFields['verified'] = Carbon::now();
            }

            $request->user()->followedAthletes()->attach($athlete->id, $pivotFields);

            Notification::send($athlete, new AthleteFollowedNotification($request->user(), $athlete, $verificationCode));

            return response()->json([
                'status' => 'ok',
                'verified' => $automaticallyVerifiable
            ], 200);
        } else {
            return abort(403);
        }
    }

    /**
     * Connect a user to an athlete
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|void
     */
    public function unfollow(Request $request)
    {
        if ($request->user()->can('watch-athlete')) {
            $athleteId = $request->athleteId;

            $request->user()->followedAthletes()->detach($athleteId);

            return response()->json([
                'status' => 'ok'
            ], 200);
        } else {
            return abort(403);
        }
    }

    public function verifyFollow(Request $request, $code)
    {
        if (Auth::check()) {
            $follower = $request->user()->unverifiedFollowers()->where('verification_code', $code)->first();

            if ($follower) {
                $pivot = $follower->pivot;

                $pivot->verified = Carbon::now();
                $pivot->save();

                return view('athletes.follow-verified');
            } else {
                abort(404);
            }
        } else {
            return redirect('/login');
        }
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
