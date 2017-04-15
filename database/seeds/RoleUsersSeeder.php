<?php

use Illuminate\Database\Seeder;

use App\Role;
use App\User;

class RoleUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $owner = Role::where('name', 'owner')->first();
        $admin = Role::where('name', 'admin')->first();
        $nationalCoach = Role::where('name', 'national-coach')->first();
        $coach = Role::where('name', 'coach')->first();
        $athlete = Role::where('name', 'athlete')->first();

        $me = User::find(1);

        $me->attachRole($owner);
    }
}
