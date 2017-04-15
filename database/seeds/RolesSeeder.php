<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name'         => 'owner',
            'display_name' => 'Owner',
            'description'  => 'User is the owner of ' . Config::get('app.name') . '.',
        ]);

        DB::table('roles')->insert([
            'name'         => 'admin',
            'display_name' => 'User Administrator',
            'description'  => 'User is allowed to manage and edit other users.',
        ]);

        DB::table('roles')->insert([
            'name'         => 'national-coach',
            'display_name' => 'National Coach',
            'description'  => 'This coach can see any event-specific video.',
        ]);

        DB::table('roles')->insert([
            'name'         => 'coach',
            'display_name' => 'Coach',
            'description'  => 'Coaches can see, post, or change any of their athlete\'s videos or scores.',
        ]);

        DB::table('roles')->insert([
            'name'         => 'athlete',
            'display_name' => 'Athlete',
            'description'  => 'Athletes can see, post, or change any of their own videos or scores.',
        ]);
    }
}
