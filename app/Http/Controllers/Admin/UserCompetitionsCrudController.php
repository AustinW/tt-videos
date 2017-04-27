<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CompetitionRequest as StoreRequest;
use App\Http\Requests\CompetitionRequest as UpdateRequest;

class UserCompetitionsCrudController extends CompetitionCrudController
{
    public function setup()
    {
        parent::setup();

        // get the user_id parameter
        $userId = \Route::current()->parameter('user_id');

        // set a different route fot the admin panel buttons
        $this->crud->setRoute('admin/user/' . $userId . '/competitions');

        // show only that user's videos
        $this->crud->addClause('where', 'user_id', $userId);
    }

    public function store(StoreRequest $request)
    {
        return parent::storeCrud();
    }

    public function udpate(UpdateRequest $request)
    {
        return parent::updateCrud();
    }
}