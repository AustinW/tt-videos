@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <users :user-id="{{ $user->id }}" role="{{ $user->roles()->first()->name }}"></users>
            </div>
        </div>
    </div>
@endsection
