@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">Search for "{{ Request::get('q') }}"</div>
                    </div>
                    
                    <div class="panel-body">
                        @if ($videos->count())
                            @foreach ($videos as $video)
                                <div class="well">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <a href="/videos/{{ $video->unique_id }}">
                                                <img src="{{ $video->thumbnailUrl() }}" alt="{{ $video->title }}" class="img-responsive thumbnail" />
                                            </a>
                                        </div>
                                        <div class="col-sm-9">
                                            <a href="/videos/{{ $video->unique_id }}">{{ $video->title }}</a>
                                            
                                            @if ($video->isPrivate())
                                                <span class="label label-default"><i class="glyphicon glyphicon-lock"></i> Private</span>
                                            @endif
                                            
                                            @if ($video->description)
                                                <p>{{ $video->description }}</p>
                                            @else
                                                <p class="muted">No description.</p>
                                            @endif
    
                                            <ul class="list-inline">
                                                <li><a href="{{ route('user.show', $video->user_id) }}">{{ $video->user->name }}</a></li>
                                                <li>{{ $video->created_at->diffForHumans() }}</li>
                                                <li>{{ $video->viewCount() }} {{ str_plural('view', $video->viewCount()) }}</li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        
                        @else
                            <p>No videos to display...</p>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
