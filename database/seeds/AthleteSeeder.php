<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AthleteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $myAthletes = [];

        $myAthletes[] = User::firstOrCreate([
            'email' => 'breannemillard@yahoo.com',
        ], [
            'name' => 'Breanne Millard',
            'email' => 'breannemillard@yahoo.com',
            'password' => Hash::make('developer'),
        ]);
        $myAthletes[] = User::firstOrCreate([
            'email' => 'alliesinger@gmail.com',
        ], [
            'name' => 'Allie Singer',
            'email' => 'alliesinger@gmail.com',
            'password' => Hash::make('developer'),
        ]);
        $myAthletes[] = User::firstOrCreate([
            'email' => 'daniellen1265@yahoo.com',
        ], [
            'name' => 'Danielle Ward',
            'email' => 'daniellen1265@yahoo.com',
            'password' => Hash::make('developer'),
        ]);
        $myAthletes[] = User::firstOrCreate([
            'email' => 'susangill@gmail.com',
        ], [
            'name' => 'Susan Gill',
            'email' => 'susangill@gmail.com',
            'password' => Hash::make('developer'),
        ]);

        $role = Role::where('name', 'athlete')->first();

        foreach ($myAthletes as $athlete) {
            $athlete->attachRole($role);
        }
    }
}
