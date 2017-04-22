@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        {{ $header or 'Videos' }}
                        <a href="/upload/create" class="btn btn-default btn-xs">
                            <i class="glyphicon glyphicon-plus-sign"></i>
                            Upload Videos
                        </a>
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
                                            <span class="label label-default">Private</span>
                                            @endif
                                            
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="muted">
                                                        @if (!$video->isProcessed())
                                                            Processing
                                                        @else
                                                            <span>{{ $video->created_at->diffForHumans() }}</span>
                                                        @endif
                                                    </p>
                                                    
                                                    <form action="/videos/{{ $video->unique_id }}" method="post" onsubmit="return confirm('Are you sure you would like to delete this video?')">
                                                        <a href="/videos/{{ $video->unique_id }}/edit" class="btn btn-default">Edit</a>
                                                        <button type="submit" class="btn btn-default">Delete</button>
                                                        {{ csrf_field() }}
                                                        {{ method_field('DELETE') }}
                                                    </form>
                                                </div>
                                            </div>
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
