<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Video;
use App\Http\Requests\CreateVoteRequest;

class VideoVoteController extends Controller
{
    public function create(CreateVoteRequest $request, Video $video) {
        $this->authorize('vote', $video);

        $video->voteFromUser($request->user())->delete();

        $video->votes()->create([
            'user_id' => $request->user()->id,
            'type' => $request->type,
        ]);

        return response()->json(['message' => 'Vote created.'], 200);
    }

    public function remove(Request $request, Video $video) {
        $this->authorize('vote', $video);

        $video->voteFromUser($request->user())->delete();

        return response()->json(['message' => 'Vote deleted.'], 200);
    }

    public function show(Request $request, Video $video) {
        $response = [
            'up' => null,
            'down' => null,
            'can_vote' => $video->votesAllowed(),
            'user_vote' => null,
        ];

        if ($video->votesAllowed()) {
            $response['up'] = $video->upVotes()->count();
            $response['down'] = $video->downVotes()->count();
        }

        if ($request->user()) {
            $voteFromUser = $video->voteFromUser($request->user())->first();

            $response['user_vote'] = $voteFromUser ? $voteFromUser->type : null;
        }

        return response()->json([
            'data' => $response
        ], 200);
    }
}
