@extends('layouts.app')

@section('content')
    <div class="container">
        
        @foreach ($feed as $item)
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            @if (get_class($item) == 'App\Video')
                                <a href="{{ route('videos.show', $item->unique_id) }}">{{ $item->title }}</a>
                            @else
                                <a href="{{ route('competitions.show', $item->id) }}">{{ $item->title }}</a>
                            @endif
                            <span class="subtext">{{ $item->created_at->diffForHumans() }}</span><br />
                            @if (get_class($item) == 'App\Video')
                                <span class="label label-default"><i class="glyphicon glyphicon-facetime-video"></i> Video</span>
                            @else
                                <span class="label label-default">Competition</span>
                            @endif
                            <a href="{{ route('user.show', $item->user->id) }}" style="font-size:80%">{{ $item->user->name }}</a>
                        </div>
                        
                    </div>
                    
                    <div class="panel-body">
                        @if (get_class($item) == 'App\Video')
                            @include('partials._video')
                        @else
                            @include('partials._competition')
                        @endif
                    </div>
                </div>
            </div>
        </div>
        @endforeach
        
    </div>
@endsection
