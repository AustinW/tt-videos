@extends('layouts.app')

@section('content')
<div class="container">
    
    @include('layouts.partials._alert')
    
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Edit video "{{ $video->title }}"</div>

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
                    
                    <form action="{{ route('videos.update', $video) }}" method="post">
                        <input type="hidden" name="name" value="{{ $video->name }}" />
                        <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
                            <label for="title" class="control-label">Title</label>

                            <input id="title" type="text" class="form-control" name="title" value="{{ old('title') ? old('title') : $video->title }}" required autofocus>

                            @if ($errors->has('title'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('title') }}</strong>
                                </span>
                            @endif
                        </div>
    
                        <div class="form-group">
                            <label for="event">Event</label>
                            <select class="form-control" name="event" id="event">
                                <option value="trampoline" {{ ($video->event === 'trampoline') ? 'selected="selected"' : '' }}>Trampoline</option>
                                <option value="double mini" {{ ($video->event === 'double mini') ? 'selected="selected"' : '' }}>Double-mini</option>
                                <option value="tumbling" {{ ($video->event === 'tumbling') ? 'selected="selected"' : '' }}>Tumbling</option>
                            </select>
                        </div>
                        
                        <div class="form-group{{ $errors->has('description') ? ' has-error' : '' }}">
                            <label for="description" class="control-label">Description</label>

                            <textarea id="description" class="form-control" name="description">{{ old('description') ? old('description') : $video->description }}</textarea>

                            @if ($errors->has('description')) 
                                <span class="help-block">
                                    <strong>{{ $errors->first('description') }}</strong>
                                </span>
                            @endif
                        </div>
                        
                        <div class="form-group{{ $errors->has('visibility') ? ' has-error' : '' }}">
                            <label for="visibility" class="control-label">Visibility</label>

                            <select name="visibility" id="visibility" class="form-control">
                                @foreach (['public', 'unlisted', 'private'] as $visibility)
                                    <option value="{{ $visibility }}"{{ $video->visibility == $visibility ? ' selected="selected"' : '' }}>{{ ucfirst($visibility) }}</option>
                                @endforeach
                            </select>

                            @if ($errors->has('visibility')) 
                                <span class="help-block">
                                    <strong>{{ $errors->first('visibility') }}</strong>
                                </span>
                            @endif
                        </div>
                        
                        <div class="checkbox">
                            <label for="allow_votes" class="checkbox-inline">
                                <input type="checkbox" name="allow_votes" id="allow_votes"{{ $video->votesAllowed() ? ' checked="checked"' : '' }} /> Allow Votes
                            </label>
                        </div>
                        
                        <div class="checkbox">
                            <label for="allow_comments" class="checkbox-inline">
                                <input type="checkbox" name="allow_comments" id="allow_comments"{{ $video->commentsAllowed() ? ' checked="checked"' : '' }} /> Allow Comments
                            </label>
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
