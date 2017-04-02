@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Uh oh</div>
        
                    <div class="panel-body">
                        <h1>😬 Yikes</h1>
                        <p>Sorry, we ran into an issue processing your request. <a href="#" id="show-error">Show Error</a>.</p>
                        <div id="error-message" class="well" style="display:none">
                            {{ $exception->getMessage() }}
                        </div>
                        <p><a class="btn btn-primary btn-lg" href="/home" role="button">Home &raquo;</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $('#show-error').click(function(e) {
            e.preventDefault();
            $('#error-message').show();
        });
    </script>
@endsection