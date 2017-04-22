@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Uh oh</div>
          
          <div class="panel-body">
            <h1>👀</h1>
            <p>Sorry, you don't have permission to view that resource.</p>
            
            @if (isset($exception))
              <div class="well">
                Server says...<br />
                Code: {{ $exception->getStatusCode() }}<br />
                {{ $exception->getMessage() }}
              </div>
            @endif
            
            <p><a class="btn btn-primary btn-lg" href="/home" role="button">Home &raquo;</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection