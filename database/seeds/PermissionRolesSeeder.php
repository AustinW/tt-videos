<?php

use Illuminate\Database\Seeder;

use App\Permission;
use App\Role;

class PermissionRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $createVideo = Permission::where('name', 'create-video')->first();
        $readVideo = Permission::where('name', 'read-video')->first();
        $updateVideo = Permission::where('name', 'update-video')->first();
        $deleteVideo = Permission::where('name', 'delete-video')->first();
        $createScores = Permission::where('name', 'create-scores')->first();
        $readScores = Permission::where('name', 'read-scores')->first();
        $updateScores = Permission::where('name', 'update-scores')->first();
        $deleteScores = Permission::where('name', 'delete-scores')->first();
        $viewAthletes = Permission::where('name', 'view-athletes')->first();
        $watchAthlete = Permission::where('name', 'watch-athlete')->first();
        $addRole = Permission::where('name', 'add-role')->first();
        $removeRole = Permission::where('name', 'remove-role')->first();
        $makeAdmin = Permission::where('name', 'make-admin')->first();
        $removeAdmin = Permission::where('name', 'remove-admin')->first();
        $addPermission = Permission::where('name', 'add-permission')->first();
        $removePermission = Permission::where('name', 'remove-permission')->first();

        $owner = Role::where('name', 'owner')->first();
        $admin = Role::where('name', 'admin')->first();
        $nationalCoach = Role::where('name', 'national-coach')->first();
        $coach = Role::where('name', 'coach')->first();
        $athlete = Role::where('name', 'athlete')->first();

        $owner->attachPermissions([$createVideo, $readVideo, $updateVideo, $deleteVideo, $createScores, $readScores, $updateScores, $deleteScores, $viewAthletes, $watchAthlete, $addRole, $removeRole, $makeAdmin, $removeAdmin, $addPermission, $removePermission]);
        $admin->attachPermissions([$createVideo, $readVideo, $updateVideo, $deleteVideo, $createScores, $readScores, $updateScores, $deleteScores, $viewAthletes, $watchAthlete, $addRole, $removeRole, $addPermission, $removePermission]);
        $nationalCoach->attachPermissions([$createVideo, $readVideo, $updateVideo, $deleteVideo, $createScores, $readScores, $updateScores, $deleteScores, $viewAthletes, $watchAthlete]);
        $coach->attachPermissions([$createVideo, $readVideo, $updateVideo, $deleteVideo, $createScores, $readScores, $updateScores, $deleteScores, $viewAthletes, $watchAthlete]);
        $athlete->attachPermissions([$createVideo, $readVideo, $updateVideo, $deleteVideo, $createScores, $readScores, $updateScores, $deleteScores]);
    }
}