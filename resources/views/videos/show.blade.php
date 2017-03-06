@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">

            @if ($video->isPrivate() && Auth::check() && $video->ownedByUser(Auth::user()))
                <div class="alert alert-info">
                    <i class="glyphicon glyphicon-lock"></i> Your video is currently private. Only you can see it.
                </div>
            @endif

            @if ($video->isProcessed() && $video->canBeAccessed(Auth::user()))
                <video-player video-unique-id="{{ $video->unique_id }}" video-url="{{ $video->getStreamUrl() }}" thumbnail-url="{{ $video->thumbnailUrl() }}"></video-player>
            @endif

            @if (!$video->isProcessed())
                <div class="video-placeholder">
                    <div class="video-placeholder__header">
                        The video is processing. Come back a bit later.
                    </div>
                </div>
            @elseif (!$video->canBeAccessed(Auth::user()))
                <div class="video-placeholder">
                    <div class="video-placeholder__header">
                        <i class="glyphicon glyphicon-lock"></i> This video is private
                    </div>
                </div>
            @endif

            <div class="panel panel-default">
                <div class="panel-body">
                    <h4>{{ $video->title }}</h4>

                    <div class="pull-right">
                        <div class="video__views">
                            {{ $video->viewCount() }} {{ str_plural('view', $video->viewCount()) }}

                            @if ($video->votesAllowed())
                                <video-voting video-unique-id="{{ $video->unique_id  }}"></video-voting>
                            @endif
                        </div>
                    </div>

                    <div class="media">
                        <div class="media-left">
                            <a href="/user/{{ $video->user->id }}">
                                <img src="{{ $video->user->getImage() }}" alt="{{ $video->user->name }}" class="profile-img thumbnail img-responsive">
                            </a>
                        </div>
                        <div class="media-body">
                          <a href="/user/{{ $video->user->id}}" class="media-heading">{{ $video->user->name }}</a>
                        </div>
                    </div>
                </div>
            </div>

            @if ($video->description)
                <div class="panel panel-default">
                    <div class="panel-body">
                        {!! nl2br(e($video->description)) !!}
                    </div>
                </div>
            @endif

            <div class="panel panel-default">
                <div class="panel-body">
                    @if ($video->commentsAllowed())
                        <video-comments video-unique-id="{{ $video->unique_id }}"></video-comments>
                    @else
                        Comments are disabled
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
