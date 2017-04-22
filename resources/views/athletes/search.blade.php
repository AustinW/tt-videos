@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <athletes user-id="{{ Auth::user()->id }}" role="{{ Auth::user()->roles()->first()->name }}"></athletes>
            </div>
        </div>
    </div>
@endsection
