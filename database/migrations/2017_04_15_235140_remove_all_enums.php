<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveAllEnums extends Migration
{

    // https://laracasts.com/discuss/channels/laravel/bug-changing-a-column-of-table-that-has-an-enum-type/replies/143261
    public function __construct()
    {
        DB::getDoctrineSchemaManager()
            ->getDatabasePlatform()
            ->registerDoctrineTypeMapping('enum', 'string');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $routine = function(Blueprint $table) {
            $table->string('routine')->change();
        };

        Schema::table('trampoline_scores', $routine);
        Schema::table('double_mini_scores', $routine);
        Schema::table('tumbling_scores', $routine);

        Schema::table('videos', function(Blueprint $table) {
            $table->string('event')->change();
            $table->string('visibility')->change();
        });

        Schema::table('votes', function(Blueprint $table) {
            $table->string('type')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('trampoline_scores', function(Blueprint $table) {
            $table->enum('routine', ['prelim_compulsory','prelim_optional','semi_final_optional','final_optional'])->change();
        });
        Schema::table('double_mini_scores', function(Blueprint $table) {
            $table->enum('routine', ['prelim_pass_1','prelim_pass_2','final_pass_3','final_pass_4'])->change();
        });
        Schema::table('tumbling_scores', function(Blueprint $table) {
            $table->enum('routine', ['prelim_pass_1','prelim_pass_2','final_pass_3','final_pass_4'])->change();
        });

        Schema::table('videos', function(Blueprint $table) {
            $table->enum('event', ['trampoline','double mini','tumbling'])->change();
            $table->enum('visibility', ['public','unlisted','private'])->change();
        });

        Schema::table('votes', function(Blueprint $table) {
            $table->enum('type', ['up','down'])->change();
        });
    }
}
