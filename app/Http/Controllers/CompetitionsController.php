<?php

namespace App\Http\Controllers;

use App\TrampolineScore;
use App\DoubleMiniScore;
use App\TumblingScore;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class CompetitionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
//        dd($request->input('doubleMiniPasses.prelim_pass_1.nd'));

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
                    $competition->trampolineScores()->save($score);
                }
            }
        }

        if ($request->dmt) {
            foreach (DoubleMiniScore::$routineTypes as $routineType) {
                if (!$this->_routineEmpty('doubleMiniPasses.' . $routineType, $request)) {
                    $score = $this->createDoubleMiniPass($routineType, $request);
                    $competition->doubleMiniScores()->save($score);
                }
            }
        }

        if ($request->tumbling) {
            foreach (TumblingScore::$routineTypes as $routineType) {
                if (!$this->_routineEmpty('tumblingPasses.' . $routineType, $request)) {
                    $score = $this->createTumblingPass($routineType, $request);
                    $competition->tumblingScores()->save($score);
                }
            }
        }

        return response()->json(compact('competition'), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function createRoutine(array $key, Request $request, $routineClass) {
        $attributes = [
            'routine' => $key[1],
        ];

        $class = new \ReflectionClass($routineClass);

        foreach ($class->getStaticPropertyValue('scoreParts') as $scorePart) {
            $attributes[$scorePart] = $request->input(implode('.', $key) . "." . $scorePart);
        }

        return new $routineClass($attributes);
    }

    public function createTrampolineRoutine($key, Request $request) {
        return $this->createRoutine(['trampolineRoutines', $key], $request, '\App\\TrampolineScore');
    }

    public function createDoubleMiniPass($key, Request $request) {
        return $this->createRoutine(['doubleMiniPasses', $key], $request, 'App\\DoubleMiniScore');
    }

    public function createTumblingRoutine($key, Request $request) {
        return $this->createRoutine(['tumblingPasses', $key], $request, 'App\\TumblingPass');
    }

    protected function _routineEmpty($key, $request) {
        return (empty($request->input($key . '.total_score')));
    }
}
