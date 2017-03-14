<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Video;

class VideoTransformer extends TransformerAbstract
{
    public function transform(Video $video = null) {
        if (!$video) {
            return null;
        }

        return [
            'id' => $video->id,
            'unique_id' => $video->unique_id,
            'coconut_id' => $video->coconut_id,
            'name' => $video->name,
            'title' => $video->title,
            'description' => $video->description,
            'event' => $video->event,
            'video_filename' => $video->video_filename,
            'cloud_file' => $video->cloud_file,
            'processed' => $video->processed,
            'visibility' => $video->visibility,
            'allow_votes' => $video->allow_votes,
            'allow_comments' => $video->allow_comments,
            'updated_at' => $video->updated_at,
            'created_at' => $video->created_at,
            'created_at_human' => $video->created_at->diffForHumans(),
        ];
    }
}