<?php

namespace App\Http\Controllers;

use App\Notifications\CompetitionCreatedNotification;
use App\Score;
use App\TrampolineScore;
use App\DoubleMiniScore;
use App\Transformers\CompetitionTransformer;
use App\TumblingScore;
use Illuminate\Http\Request;
use Auth;
use App\Competition;
use Illuminate\Support\Facades\Notification;

class CompetitionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $competitions = Auth::user()->competitions()->with('trampolineScores', 'doubleMiniScores', 'tumblingScores')->orderBy('created_at', 'desc')->get();

        return view('competitions.index', compact('competitions'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('competitions.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $competition = $request->user()->competitions()->create([
            'title' => $request->title,
            'location' => $request->location,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
        ]);

        if ($request->trampoline) {
            foreach (TrampolineScore::$routineTypes as $routineType) {
                if (!$this->_routineEmpty('trampolineRoutines.' . $routineType, $request)) {
                    $score = $this->createTrampolineRoutine($routineType, $request);
                    $score->video_id = $request->input('trampolineRoutines.' . $routineType . '.video_id');

                    $competition->trampolineScores()->save($score);
                }
            }
        }

        if ($request->dmt) {
            foreach (DoubleMiniScore::$routineTypes as $routineType) {
                if (!$this->_routineEmpty('doubleMiniPasses.' . $routineType, $request)) {
                    $score = $this->createDoubleMiniPass($routineType, $request);
                    $score->video_id = $request->input('doubleMiniPasses.' . $routineType . '.video_id');

                    $competition->doubleMiniScores()->save($score);
                }
            }
        }

        if ($request->tumbling) {
            foreach (TumblingScore::$routineTypes as $routineType) {
                if (!$this->_routineEmpty('tumblingPasses.' . $routineType, $request)) {
                    $score = $this->createTumblingPass($routineType, $request);
                    $score->video_id = $request->input('tumblingPasses.' . $routineType . '.video_id');

                    $competition->tumblingScores()->save($score);
                }
            }
        }

        Notification::send($competition->user->followers()->get(), new CompetitionCreatedNotification($competition));

        return response()->json(compact('competition'), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Competition $competition
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function show(Request $request, Competition $competition)
    {
        $this->authorize('show', $competition);

        if ($request->ajax()) {
            return response()->json(
                fractal()->item($competition)
                    ->parseIncludes([
                        'trampolineScores',
                        'trampolineScores.video',
                        'doubleMiniScores',
                        'doubleMiniScores.video',
                        'tumblingScores',
                        'tumblingScores.video',
                    ])
                    ->transformWith(new CompetitionTransformer())
                    ->toArray()
            );
        }

        return view('competitions.show', compact('competition'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('competitions.edit', ['competitionId' => $id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param $competition
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request, Competition $competition)
    {
        $this->authorize('update', $competition);

        $competition->update([
            'title' => $request->title,
            'location' => $request->location,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
        ]);

        if ($request->trampoline) {
            foreach (TrampolineScore::$routineTypes as $routineType) {
                if (!$this->_routineEmpty('trampolineRoutines.' . $routineType, $request)) {
                    $score = TrampolineScore::findOrFail($request->input('trampolineRoutines.' . $routineType . '.id'));
                    $score->video_id = $request->input('trampolineRoutines.' . $routineType . '.video_id');

                    $attributes = $this->updateRoutine(['trampolineRoutines', $routineType], $request, $score);
                    $score->update($attributes);
                }
            }
        }

        if ($request->dmt) {
            foreach (DoubleMiniScore::$routineTypes as $routineType) {
                if (!$this->_routineEmpty('doubleMiniPasses.' . $routineType, $request)) {
                    $score = DoubleMiniScore::findOrFail($request->input('doubleMiniPasses.' . $routineType . '.id'));
                    $score->video_id = $request->input('doubleMiniPasses.' . $routineType . '.video_id');

                    $attributes = $this->updateRoutine(['doubleMiniPasses', $routineType], $request, $score);
                    $score->update($attributes);
                }
            }
        }

        if ($request->tumbling) {
            foreach (TumblingScore::$routineTypes as $routineType) {
                if (!$this->_routineEmpty('tumblingPasses.' . $routineType, $request)) {
                    $score = TumblingScore::findOrFail($request->input('tumblingPasses.' . $routineType . '.id'));
                    $score->video_id = $request->input('tumblingPasses.' . $routineType . '.video_id');

                    $attributes = $this->updateRoutine(['tumblingPasses', $routineType], $request, $score);
                    $score->update($attributes);
                }
            }
        }

        return response()->json([
            'competition' => $competition
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Competition $competition
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function destroy(Competition $competition)
    {
        $this->authorize('delete', $competition);

        $competition->delete();

        return redirect()->back();
    }

    public function createRoutine(array $key, Request $request, $routineClass) {
        $attributes = [
            'routine' => $key[1],
        ];

        $class = new \ReflectionClass($routineClass);

        foreach ($class->getStaticPropertyValue('scoreParts') as $scorePart) {
            $attributes[$scorePart] = $request->input(implode('.', $key) . '.attrs.' . $scorePart . '.value');
        }

        return new $routineClass($attributes);
    }

    public function updateRoutine(array $key, Request $request, Score $score) {
        $attributes = [];

        $class = new \ReflectionClass(get_class($score));

        foreach ($class->getStaticPropertyValue('scoreParts') as $scorePart) {
            $attributes[$scorePart] = $request->input(implode('.', $key) . '.attrs.' . $scorePart . '.value');
        }

        return $attributes;
    }

    public function createTrampolineRoutine($key, Request $request) {
        return $this->createRoutine(['trampolineRoutines', $key], $request, '\App\\TrampolineScore');
    }

    public function createDoubleMiniPass($key, Request $request) {
        return $this->createRoutine(['doubleMiniPasses', $key], $request, 'App\\DoubleMiniScore');
    }

    public function createTumblingPass($key, Request $request) {
        return $this->createRoutine(['tumblingPasses', $key], $request, 'App\\TumblingScore');
    }

    protected function _routineEmpty($key, $request) {
        return (empty($request->input($key . '.attrs.total_score')));
    }
}
