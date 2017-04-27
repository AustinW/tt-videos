@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="panel panel-default">
                    <div class="panel-heading">Followed Athletes</div>
                    <div class="panel-body">
                        <view-athlete-list></view-athlete-list>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-md-offset">
                <view-athletes></view-athletes>
            </div>
        </div>
    </div>
@endsection
