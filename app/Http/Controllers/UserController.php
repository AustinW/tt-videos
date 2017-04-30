<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use App\Notifications\NationalCoachRequest;
use App\Notifications\NewNationalCoachRequest;
use App\Role;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Notification;
use Storage;
use Intervention\Image\Facades\Image;
use App\User;

class UserController extends Controller
{

    public function __construct() {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }

    /**
     * Display the logged in user's profile
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        return view('user.show', compact('user'));
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param User|null $user
     * @return \Illuminate\Http\Response
     * @internal param User|int $id
     */
    public function show(Request $request, User $user)
    {
        $this->authorize('show', $user);

        return view('user.show', ['user' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     * @param User $user
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function edit(User $user)
    {
        $this->authorize('update', $user);

        return view('user.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserUpdateRequest|Request $request
     * @param User $user
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        $this->authorize('update', $user);

        $updates = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        if ($request->file('image')) {
            $fileId = uniqid(true);

            Image::make($request->file('image'))->encode('png')->fit(400, 400, function($c) {
                $c->upsize();
            })->save(storage_path() . '/app/public/profiles/' . $fileId . '.png');

            if ($user->image_file && Storage::disk('public')->has('/profiles/' . $user->image_file)) {
                Storage::disk('public')->delete('/profiles/' . $user->image_file);
            }

            $updates['image_file'] = $fileId . '.png';
        }

        $user->update($updates);

        return redirect()->route('user.show', $user->id)->with([
            'message' => [
                'class' => 'success',
                'body' => 'User updated.',
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function destroy(User $user)
    {
        $this->authorize('delete');

        $user->delete();

        return redirect('/');
    }

    public function chooseRole()
    {
        if (!Auth::check()) {
            abort(401);
        }

        $this->authorize('chooseRole', Auth::user());

        return view('user.choose_role');
    }

    public function chooseRoleStore(Request $request)
    {
        if (!Auth::check()) {
            abort(401);
        }

        $this->authorize('chooseRole', Auth::user());

        if ($request->has('role')) {
            if ($request->role === 'athlete' || $request->role === 'coach') {
                $request->user()->attachRole(Role::where('name', $request->role)->first());
            } else if ($request->role === 'national-coach') {
                $request->user()->attachRole(Role::where('name', 'coach')->first());

                User::whereHas('roles', function($role) {
                    $role->where('name', 'owner')->orWhere('name', 'admin');
                })->get()->each(function($admin) use($request) {
                    Notification::send($admin, new NationalCoachRequest($admin, $request->user()));
                });
            } else {
                throw new \Exception('Invalid role specified.');
            }
        } else {
            throw new \Exception('Role must be specified.');
        }

        return redirect()->route('user.index');
    }
}
