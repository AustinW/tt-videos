@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">User Profile</div>
                    
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="{{ $user->getImage() }}" alt="" class="img-circle profile-img img-responsive">
                            </div>
                            <div class="col-md-9">
                                <h1>{{ $user->name }}</h1>
                                <a href="mailto:{{ $user->email }}">{{ $user->email }}</a>
                            </div>
                        </div>
                        
                        <h3>Videos</h3>
                        @forelse ($user->videos as $video)
                            @include ('videos.partials._video_result', ['video' => $video])
                        @empty
                            <p>No videos found.</p>
                        @endforelse
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
