<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\VideoRequest as StoreRequest;
use App\Http\Requests\VideoRequest as UpdateRequest;

class UserVideoCrudController extends VideoCrudController
{
    public function setup()
    {
        parent::setup();

        // get the user_id parameter
        $userId = \Route::current()->parameter('user_id');

        // set a different route fot the admin panel buttons
        $this->crud->setRoute('admin/user/' . $userId . '/videos');

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