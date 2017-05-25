<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateVideoCommentRequest;
use App\Comment;
use App\Notifications\CommentNotification;
use App\Notifications\ReplyNotification;
use App\Transformers\CommentTransformer;
use Illuminate\Http\Request;
use App\Video;
use Illuminate\Support\Facades\Notification;

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

        if ($comment->isReply()) {
            $recipients = $comment->originalComment->replies()->get()
                ->pluck('user')
                ->filter(function($reply) use($comment) {
                    return $reply->user_id != $comment->user_id;
                });

            // If video owner is not part of the thread, make sure they still get a notification
            if ($comment->user_id !== $video->user_id && !$recipients->contains(function($reply) use($video) { return $reply->user_id == $video->user_id; })) {
                $recipients->push($video->user);
            }

            $recipients = $recipients->unique(function($user) {
                return $user->id;
            })->reject(function($user) use($comment) {
                return $comment->user_id == $user->id;
            });

            Notification::send($recipients, new ReplyNotification($comment));
        } else {
            if ($comment->user_id !== $video->user_id) {
                Notification::send($video->user, new CommentNotification($comment));
            }
        }

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
