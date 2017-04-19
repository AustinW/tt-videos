<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Auth;
use Laravel\Socialite\AbstractUser;
use Socialite;

class AuthController extends Controller
{
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from provider.  Check if the user already exists in our
     * database by looking up their provider_id in the database.
     * If the user exists, log them in. Otherwise, create a new user then log them in. After that
     * redirect them to the authenticated users homepage.
     *
     * @param string $provider
     * @return Response
     */
    public function handleProviderCallback($provider)
    {
        try {
            $user = Socialite::driver($provider)->user();
        } catch (\Exception $e) {
            return redirect()->route('login');
        }

        $authUser = $this->findOrCreateUser($user, $provider);

        Auth::login($authUser, true);

        return redirect()->route('user.index');
    }

    /**
     * If a user has registered before using social auth, return the user
     * else, create a new user object.
     * @param AbstractUser|Socialite $user Socialite user object
     * @param $provider Social auth provider
     * @return User
     */
    public function findOrCreateUser(AbstractUser $user, $provider)
    {
        $authUser = User::where('provider_id', $user->getId())->orWhere('email', $user->getEmail())->first();

        if ($authUser) {

            if (!$authUser->provider || !$authUser->provider_id) {
                $authUser->provider = $provider;
                $authUser->provider_id = $user->getId();
                $authUser->save();
            }

            return $authUser;
        }

        return User::create([
            'name' => $user->name,
            'email' => $user->email,
            'provider' => $provider,
            'provider_id' => $user->getId(),
        ]);
    }
}
