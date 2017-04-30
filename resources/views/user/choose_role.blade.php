@extends('layouts.app')

@section('content')
    <div class="container">
        
        @include('layouts.partials._alert')
        
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">What is your role?</div>
                    </div>
                    
                    <div class="panel-body">
                        @include('layouts.partials._errors')
                        
                        <form action="{{ route('user.choose_role.store') }}" method="post">
                            
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3 text-center">
                                    <button type="submit" name="role" value="athlete" class="btn btn-lg btn-default" style="width:75%">Athlete</button>
                                </div>
                            </div>
    
                            <div class="row" style="margin-top:25px">
                                <div class="col-md-6 col-md-offset-3 text-center">
                                    <button type="submit" name="role" value="coach" class="btn btn-lg btn-default" style="width:75%">Coach</button><br />
                                </div>
                            </div>
                            
                            <div class="row" style="margin-top:25px">
                                <div class="col-md-6 col-md-offset-3 text-center">
                                    <button onclick="return confirm('Please wait for administrators to review your request.')" type="submit" name="role" value="national-coach" class="btn btn-lg btn-default" style="width:75%">
                                        <i class="glyphicon glyphicon-lock"></i> National Coach
                                    </button>
                                </div>
                            </div>
                            
                            
                            {{ csrf_field() }}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
