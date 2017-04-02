@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-md-6">{{ 'Scores' }}</div>
                            <div class="col-md-6 text-right">
                                <a href="{{ route('competitions.create') }}" class="btn btn-default btn-xs">
                                    <i class="glyphicon glyphicon-plus"></i> Add Scores
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="panel-body">
                        @forelse ($competitions as $competition)
                            <div class="well">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <a href="/competitions/{{ $competition->id }}">{{ $competition->title }}</a>
                                        <br />
                                        {{ $competition->location }}
                                        
                                        <div>
                                            @if ($competition->trampolineScores->count())
                                                <span class="label discipline-tra">Trampoline</span>
                                            @endif
                                            @if ($competition->doubleMiniScores->count())
                                                <span class="label discipline-dmt">Double Mini</span>
                                            @endif
                                            @if ($competition->tumblingScores->count())
                                                <span class="label discipline-tum">Tumbling</span>
                                            @endif
                                        </div>
                                        
                                        {{--@if ($videoCount = $competition->videoCount())--}}
                                            {{--<div>--}}
                                                {{--<i class="glyphicon glyphicon-facetime-video"></i> {{ $videoCount }} {{ str_plural('video', $videoCount) }}--}}
                                            {{--</div>--}}
                                        {{--@endif--}}
                                        
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="muted">
                                                    <span>{{ $competition->dateSpan() }}</span>
                                                </p>
                                                
                                                <form action="{{ route('competitions.delete', $competition->id) }}" method="post">
                                                    <a href="{{ route('competitions.edit', $competition->id) }}" class="btn btn-default btn-xs">Edit</a>
                                                    <button type="submit" class="btn btn-default btn-xs">Delete</button>
                                                    {{ csrf_field() }}
                                                    {{ method_field('DELETE') }}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @empty
                            <p>No competitions to display...</p>
                        @endforelse
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
