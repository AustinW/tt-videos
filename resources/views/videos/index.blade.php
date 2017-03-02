@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Videos</div>
                    
                    <div class="panel-body">
                        @if ($videos->count())
                            @foreach ($videos as $video)
                                <div class="well">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <a href="/videos/{{ $video->unique_id }}">
                                                <img src="{{ $video->getThumbnail() }}" alt="{{ $video->title }}" class="img-responsive" />
                                            </a>
                                        </div>
                                        <div class="col-sm-9">
                                            <a href="/videos/{{ $video->unique_id }}">{{ $video->title }}</a>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="muted">
                                                        @if (!$video->isProcessed())
                                                            Processing
                                                        @else
                                                            <span>{{ $video->created_at->toDateTimeString() }}</span>
                                                        @endif
                                                    </p>
                                                    
                                                    <form action="/videos/{{ $video->unique_id }}" method="post">
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
                            <p>You have no videos.</p>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
