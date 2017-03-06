<?php

namespace App\Transformers;

use App\Comment;
use League\Fractal\TransformerAbstract;

class CommentTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'user', 'replies',
    ];

    public function transform(Comment $comment) {
        return [
            'id' => $comment->id,
            'reply_id' => $comment->reply_id,
            'user_id' => $comment->user_id,
            'body' => $comment->body,
            'created_at' => $comment->created_at->toDateTimeString(),
            'created_at_human' => $comment->created_at->diffForHumans()
        ];
    }

    public function includeUser(Comment $comment) {
        return $this->item($comment->user, new UserTransformer());
    }

    public function includeReplies(Comment $comment) {
        return $this->collection($comment->replies, new CommentTransformer());
    }
}