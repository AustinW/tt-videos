<?php

use Illuminate\Database\Seeder;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('permissions')->insert([
            'name'         => 'create-video',
            'display_name' => 'Create Video',
            'description'  => 'upload new videos',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'read-video',
            'display_name' => 'View Video',
            'description'  => 'view videos.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'update-video',
            'display_name' => 'Edit Video',
            'description'  => 'edit existing videos.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'delete-video',
            'display_name' => 'Delete Video',
            'description'  => 'delete existing videos.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'create-scores',
            'display_name' => 'Create Scores',
            'description'  => 'submit new scores',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'read-scores',
            'display_name' => 'View Scores',
            'description'  => 'view scores.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'update-scores',
            'display_name' => 'Edit Scores',
            'description'  => 'edit existing scores.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'delete-scores',
            'display_name' => 'Delete Scores',
            'description'  => 'delete existing scores.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'view-athletes',
            'display_name' => 'View All Athletes',
            'description'  => 'view all athletes in the database.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'watch-athlete',
            'display_name' => 'Watch an Athlete',
            'description'  => 'watch an athlete.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'add-role',
            'display_name' => 'Add Role',
            'description'  => 'add a role to a user.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'remove-role',
            'display_name' => 'Remove Role',
            'description'  => 'remove a role from a user.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'make-admin',
            'display_name' => 'Make Admin',
            'description'  => 'make a user an admin.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'remove-admin',
            'display_name' => 'Remove Admin',
            'description'  => 'remove admin privileges from a user.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'add-permission',
            'display_name' => 'Add Permission',
            'description'  => 'add a permission to a role.',
        ]);

        DB::table('permissions')->insert([
            'name'         => 'remove-permission',
            'display_name' => 'Remove Permission',
            'description'  => 'remove a permission from a role.',
        ]);

    }
}
