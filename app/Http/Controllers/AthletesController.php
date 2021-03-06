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
     * Connect a user to follow another user
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|void
     */
    public function follow(Request $request)
    {
        if ($request->user()->can('watch-athlete')) {
            $subject = User::findOrFail($request->subjectId);

            $verificationCode = uniqid(true);

            $pivotFields = [
                'verification_code' => $verificationCode
            ];

            $automaticallyVerifiable = $request->user()->hasRole(['owner', 'admin', 'national-coach']);

            if ($automaticallyVerifiable) {
                $pivotFields['verified'] = Carbon::now();
            }

            $request->user()->followedAthletes()->attach($subject->id, $pivotFields);

            Notification::send($subject, new AthleteFollowedNotification($request->user(), $subject, $verificationCode));

            return response()->json([
                'status' => 'ok',
                'verified' => $automaticallyVerifiable
            ], 200);
        } else {
            return abort(403);
        }
    }

    /**
     * Disconnect a user from following another user
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|void
     */
    public function unfollow(Request $request)
    {
        if ($request->user()->can('watch-athlete')) {
            $subjectId = $request->subjectId;

            $request->user()->followedAthletes()->detach($subjectId);

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

    /**
     * @param Request $request
     * @param User $athlete
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkFollow(Request $request, User $athlete)
    {
        if ($request->user()->can('watch-athlete')) {
            if ($request->user()->isFollowing($athlete)) {
                $followCode = 2;
            } else if ($request->user()->followedAthletes()->where('athlete_id', $athlete->id)->count() > 0) {
                $followCode = 1;
            } else {
                $followCode = 0;
            }

            return response()->json([
                'followCode' => $followCode,
                'athlete' => $athlete
            ], 200);
        } else {
            abort(403);
        }
    }
}
