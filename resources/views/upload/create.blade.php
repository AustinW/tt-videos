@extends('layouts.app')

@section('content')
    @if (config('app.debug'))
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="alert alert-warning">
                    <i class="glyphicon glyphicon-warning-sign"></i>
                    <strong>Stop!</strong>
                    Make sure ngrok is running so that the upload is correctly processed.</div>
            </div>
        </div>
    @endif
    
    <multiple-video-upload></multiple-video-upload>
@endsection
