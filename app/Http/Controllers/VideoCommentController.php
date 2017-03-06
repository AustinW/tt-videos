<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateVideoCommentRequest;
use App\Comment;
use App\Transformers\CommentTransformer;
use Illuminate\Http\Request;
use App\Video;

class VideoCommentController extends Controller
{
    public function index(Video $video) {
        return response()->json(
            fractal()->collection($video->comments()->latestFirst()->get())
                ->parseIncludes(['user', 'replies', 'replies.user'])
                ->transformWith(new CommentTransformer)
                ->toArray()
        );
    }

    public function store(CreateVideoCommentRequest $request, Video $video) {
        $this->authorize('comment', $video);

        $comment = $video->comments()->create([
            'body' => $request->body,
            'reply_id' => $request->get('reply_id', null),
            'user_id' => $request->user()->id,
        ]);

        return response()->json(
            fractal()->item($comment)
                ->parseIncludes(['user', 'replies'])
                ->transformWith(new CommentTransformer())
                ->toArray()
        );
    }

    public function delete(Request $request, Video $video, Comment $comment) {
        $this->authorize('delete', $comment);

        $comment->delete();

        return response()->json(null, 200);
    }
}
