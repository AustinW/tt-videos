@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="{{ $user->getImage() }}" alt="" class="img-circle profile-img img-responsive">
                                
                                @if (!Auth::guest() && (Laratrust::owns($user, 'id') || Auth::user()->hasRole(['owner', 'admin'])))
                                    <div style="margin-top:25px">
                                        <a href="{{ route('user.edit', $user->id) }}" class="btn btn-default"><i class="glyphicon glyphicon-edit"></i> Edit</a>
                                    </div>
                                    
                                @endif
                            </div>
                            <div class="col-md-9">
                                <h1>{{ $user->name }}</h1>
                                <h4>
                                    {{ $user->rolesString() }}
                                    <follow
                                        :subject-id="{{ $user->id }}"
                                        :user-id="{{ (Auth::check()) ? Auth::user()->id : '0' }}"
                                        :styles="'btn btn-default btn-xs'"
                                        style="display:inline-block">
                                    </follow>
                                </h4>
                                <a href="mailto:{{ $user->email }}">{{ $user->email }}</a> ● <span style="font-style:italic">Member since {{ $user->created_at->format('F jS, Y') }}</span>
                                <br />
    
                                <div class="row" style="margin-top:25px">
                                    <div class="col-md-12">
                                        @if ($user->hasRole(['coach', 'national-coach', 'admin', 'owner']))
                                            <h4>Following: {{ $user->verifiedFollowedAthletes()->count() }}</h4>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <h3>Videos</h3>
                        @forelse ($user->seeableVideos(Auth::user()) as $video)
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
