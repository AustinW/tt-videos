<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Traits\OrderableTrait;

class Comment extends Model
{
    use SoftDeletes, OrderableTrait;

    protected $fillable = [
        'body',
        'user_id',
        'reply_id',
    ];

    public function commentable() {
        return $this->morphTo();
    }

    public function replies() {
        return $this->hasMany(Comment::class, 'reply_id', 'id');
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
