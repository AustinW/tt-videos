<?php

namespace App\Http\Controllers\Auth;

use App\Notifications\RegistrationNotification;
use App\Notifications\WelcomeNotification;
use App\Role;
use App\User;
use Illuminate\Support\Facades\Notification;
use Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
            'coach' => ''
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        if (file_exists(app_path() . '/test.php')) {
            include(app_path() . '/test.php');
        }

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        if (isset($data['coach'])) {
            $role = Role::where('name', 'coach')->first();
        } else {
            $role = Role::where('name', 'athlete')->first();
        }

        $user->attachRole($role);

        $notifyOwners = User::whereHas('roles', function($role) { $role->where('name', 'owner'); })->get();

        Notification::send($notifyOwners, new RegistrationNotification($user, $role));

        if ($role->name === 'athlete') {
            Notification::send($user, new WelcomeNotification($user));
        }

        return $user;
    }
}
