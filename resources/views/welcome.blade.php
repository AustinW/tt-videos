@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Welcome</div>

                <div class="panel-body">
                    @if (Auth::guest())
                        Please <a href="{{ route('login') }}">login</a> or <a href="{{ route('register') }}">register</a> an account to get started.
                    @else
                        You can view your <a href="{{ route('videos.index') }}">videos</a> or <a href="{{ route('competitions.index') }}">scores</a> that you've submitted.
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
