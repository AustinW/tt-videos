@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">{{ $competition->title }}</div>
                    
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div><i class="glyphicon glyphicon-calendar"></i> {{ $competition->dateSpan() }}</div>
                                        <div><i class="glyphicon glyphicon-map-marker"></i> {{ $competition->location }}</div>
                                    </div>
                                </div>
                                @if ($competition->trampolineScores()->count())
                                    <div class="col-md-12">
                                        <h3>Trampoline</h3>
                                        Passes...
                                    </div>
                                @endif
                                @if ($competition->doubleMiniScores()->count())
                                    <div class="col-md-12">
                                        <h3>Double Mini</h3>
                                        Passes...
                                    </div>
                                @endif
                                @if ($competition->tumblingScores()->count())
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h3>Tumbling</h3>
                                            @foreach ($competition->tumblingScores()->get() as $score)
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <strong>@routineTitle($score->routine)</strong>
                                                        @if ($video = $score->video()->first())
                                                            <small-video title="{{ $video->title }}" src="{{ $video->getStreamUrl() }}" img="{{ $video->thumbnailUrl() }}" video-id="{{ $video->unique_id }}"></small-video>
                                                        @endif
                                                        <table class="table table-bordered">
                                                            <tr>
                                                                <th>Execution</th>
                                                                <th>Difficulty</th>
                                                                <th>Neutral Deduction</th>
                                                                <th>Total Score</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{{ $score->execution }}</td>
                                                                <td>{{ $score->difficulty }}</td>
                                                                <td>{{ $score->neutral_deduction }}</td>
                                                                <td>{{ $score->total_score }}</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
