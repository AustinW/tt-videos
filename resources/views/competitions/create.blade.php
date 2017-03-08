@extends('layouts.app')

@section('content')
    <div class="container">
    
        @include('layouts.partials._alert')
        
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Submit Competition Scores</div>
                    
                    <div class="panel-body">
                        @include('layouts.partials._errors')
    
                        <competition-form></competition-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
