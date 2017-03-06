@extends('layouts.app')

@section('content')
<div class="container">
    
    @include('layouts.partials._alert')
    
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">{{ $user->name }}</div>

                <div class="panel-body">
                    @if (count($errors) > 0)
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    
                    <form action="{{ route('user.update') }}" method="post" enctype="multipart/form-data">
                        
                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <label for="name" class="control-label">Name</label>

                            <input id="name" type="text" class="form-control" name="name" value="{{ old('name') ? old('name') : $user->name }}" required autofocus>

                            @if ($errors->has('name'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('name') }}</strong>
                                </span>
                            @endif
                        </div>
                        
                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="control-label">Email</label>

                            <input id="email" type="text" class="form-control" name="email" value="{{ old('email') ? old('email') : $user->email }}" required autofocus>

                            @if ($errors->has('email'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>
    
                        <div class="form-group">
                            <label for="image" class="control-label">Profile Image</label>
                            
                            
                            <img src="{{ $user->getImage() }}" class="thumbnail img-responsive" alt="{{ $user->name }} image">
        
                            <input type="file" name="image" id="image" class="form-control" />
                        </div>
                        
                        <button type="submit" class="btn btn-default">Update</button>
                        
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
