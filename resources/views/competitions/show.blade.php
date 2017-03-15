@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        {{ $competition->title }}
                        @if ($competition->user_id === Auth::user()->id)
                            <a href="{{ route('competitions.edit', $competition->id) }}"
                               class="btn btn-default btn-xs">Edit</a>
                        @endif
                    </div>
                    
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
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h3>Trampoline</h3>
                                            @foreach ($competition->trampolineScores()->get() as $score)
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <strong>@routineTitle($score->routine)</strong>
                                                        @if ($video = $score->video()->first())
                                                            @if ($video->isProcessed())
                                                                <small-video title="{{ $video->title }}" src="{{ $video->getStreamUrl() }}" img="{{ $video->thumbnailUrl() }}" video-id="{{ $video->unique_id }}"></small-video>
                                                            @else
                                                                <i class="glyphicon glyphicon-refresh"></i> Video processing...
                                                            @endif
                                                        @endif
                                                        <table class="table table-bordered">
                                                            <tr>
                                                                <th title="Execution">Execution</th>
                                                                <th title="Difficulty">Difficulty</th>
                                                                <th title="Time of Flight">TOF</th>
                                                                <th title="Horizontal Displacement">HD</th>
                                                                <th title="Neutral Deduction">ND</th>
                                                                <th title="Total Score">Total Score</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{{ number_format($score->execution, 3) }}</td>
                                                                <td>{{ number_format($score->difficulty, 3) }}</td>
                                                                <td>{{ number_format($score->time_of_flight, 3) }}</td>
                                                                <td>{{ number_format($score->horizontal_displacement, 3) }}</td>
                                                                <td>{{ number_format($score->neutral_deduction, 3) }}</td>
                                                                <td><strong>{{ number_format($score->total_score, 3) }}</strong></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                @endif
                                @if ($competition->doubleMiniScores()->count())
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h3>Double Mini</h3>
                                            @foreach ($competition->doubleMiniScores()->get() as $score)
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <strong>@routineTitle($score->routine)</strong>
                                                        @if ($video = $score->video()->first())
                                                            <small-video title="{{ $video->title }}" src="{{ $video->getStreamUrl() }}" img="{{ $video->thumbnailUrl() }}" video-id="{{ $video->unique_id }}"></small-video>
                                                        @endif
                                                        <table class="table table-bordered">
                                                            <tr>
                                                                <th title="Execution">Execution</th>
                                                                <th title="Difficulty">Difficulty</th>
                                                                <th title="Neutral Deduction">ND</th>
                                                                <th title="Total Score">Total Score</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{{ number_format($score->execution, 1) }}</td>
                                                                <td>{{ number_format($score->difficulty, 1) }}</td>
                                                                <td>{{ number_format($score->neutral_deduction, 1) }}</td>
                                                                <td><strong>{{ number_format($score->total_score, 1) }}</strong></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
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
                                                                <th title="Execution">Execution</th>
                                                                <th title="Difficulty">Difficulty</th>
                                                                <th title="Neutral Deduction">ND</th>
                                                                <th title="Total Score">Total Score</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{{ number_format($score->execution, 1) }}</td>
                                                                <td>{{ number_format($score->difficulty, 1) }}</td>
                                                                <td>{{ number_format($score->neutral_deduction, 1) }}</td>
                                                                <td><strong>{{ number_format($score->total_score, 1) }}</strong></td>
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
