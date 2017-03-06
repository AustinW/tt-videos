<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use Illuminate\Http\Request;
use Auth;
use Storage;
use Intervention\Image\Facades\Image;

class UserController extends Controller
{

    public function __construct() {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return view('user.show', ['user' => Auth::user()]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        return view('user.edit', ['user' => Auth::user()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserUpdateRequest|Request $request
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(UserUpdateRequest $request) {

        $user = Auth::user();

        $updates = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        if ($request->file('image')) {
            $fileId = uniqid(true);

            Image::make($request->file('image'))->encode('png')->fit(100, 100, function($c) {
                $c->upsize();
            })->save(storage_path() . '/app/public/profiles/' . $fileId . '.png');

            if ($user->image_file && Storage::disk('public')->has('/profiles/' . $user->image_file)) {
                Storage::disk('public')->delete('/profiles/' . $user->image_file);
            }

            $updates['image_file'] = $fileId . '.png';
        }

        $user->update($updates);

        return redirect()->route('user.edit')->with([
            'message' => [
                'class' => 'success',
                'body' => 'User updated.',
            ]
        ]);
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
}
