<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Video;

class SearchController extends Controller
{
    public function index(Request $request) {
        if (!$request->q) {
            return redirect('/');
        }

        $videos = $this->searchWithRole($request->q, $request->user())->get();

        return view('videos.search', compact('videos'));
    }

    protected function searchAsAdmin($query)
    {
        return $this->_basicSearch($query);
    }

    protected function searchAsCoach($query, User $user)
    {
        $following = $user->verifiedFollowedAthletes()->get()->pluck('id');
        $following->push($user->id);

        // First return any public videos that match the query
        return $this->_basicSearch($query)->where('visibility', 'public')

            // Or any private videos of users that the coach is following
            ->orWhere(function ($orWhereQuery) use ($following, $query) {

                $orWhereQuery->where(function($searchQuery) use ($query) {
                    $searchQuery->where('title', 'like', '%' . $query . '%')->orWhere('description', 'like', '%' . $query . '%');
                })
                ->whereIn('user_id', $following);
            });
    }

    protected function searchAsAthlete($query, User $user)
    {
        return $this->_basicSearch($query)->where('visibility', 'public')
            ->orWhere(function($orWhereQuery) use($user) {
                $orWhereQuery->where(function($searchQuery) use ($query) {
                    $searchQuery->where('title', 'like', '%' . $query . '%')->orWhere('description', 'like', '%' . $query . '%');
                })->where('user_id', $user->id);
            });
    }

    protected function searchAsGuest($query)
    {
        return $this->_basicSearch($query)->where('visibility', 'public');
    }

    /**
     * @param User $user
     * @param $query
     * @return \Illuminate\Support\Collection
     */
    protected function searchWithRole($query, User $user = null)
    {
        if (!$user) {
            return $this->searchAsGuest($query);
        } else if ($user->hasRole(['owner', 'admin'])) {
            return $this->searchAsAdmin($query);
        } else if ($user->hasRole(['national-coach', 'coach'])) {
            return $this->searchAsCoach($query, $user);
        } else if ($user->hasRole('athlete')) {
            return $this->searchAsAthlete($query, $user);
        } else {
            throw new \Exception('Invalid role specified.');
        }
    }

    protected function _basicSearch($search)
    {
        return Video::where(function($query) use ($search) {
            $query->where('title', 'like', '%' . $search . '%')
                ->orWhere('description', 'like', '%' . $search . '%');
        });
    }
}
