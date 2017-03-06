<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('unique_id');
            $table->integer('user_id')->unsigned();
            $table->integer('coconut_id')->unsigned()->nullable();
            $table->string('name');
            $table->enum('event', ['trampoline', 'double mini', 'tumbling']);
            $table->string('title');
            $table->text('description')->nullable();
            $table->boolean('processed')->default(false);
            $table->string('video_filename')->nullable();
            $table->string('cloud_file')->nullable();
            $table->enum('visibility', ['public', 'unlisted', 'private']);
            $table->boolean('allow_votes')->default(false);
            $table->boolean('allow_comments')->default(false);
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videos');
    }
}
