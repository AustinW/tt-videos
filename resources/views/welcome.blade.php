@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="panel-title">Welcome</div>
                </div>

                <div class="panel-body">
                    <img src="img/bulgaria.jpg" alt="2017 World Age Group Championships in Sofia, Bulgaria" class="thumbnail center-block" style="max-height:200px">
                    <hr>
                    <p class="lead">
                        T&T Videos connects athletes, coaches, and National Coaching Staff together throughout training and
                        competition. Athletes can upload videos and competition results so that coaches can easily track
                        their athletes. This allows the National Coaching Staff to view athletes' progress from around the
                        country and stay connected with the athlete and his or her personal coach over the course of the
                        athlete's career.
                    </p>
                    
                    @if (Auth::guest())
                        <a href="{{ route('login') }}" class="btn btn-primary btn-lg">Login</a>
                        <a href="{{ route('register') }}" class="btn btn-default btn-lg">Register</a>
                    @else
                        @if (Auth::user()->hasRole('athlete'))
                            <a href="{{ route('videos.index') }}" class="btn btn-primary btn-lg">Videos</a>
                            <a href="{{ route('competitions.index') }}" class="btn btn-primary btn-lg">Scores</a>
                        @else
                            <a href="{{ route('feed') }}" class="btn btn-primary btn-lg">News Feed</a>
                        @endif
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
