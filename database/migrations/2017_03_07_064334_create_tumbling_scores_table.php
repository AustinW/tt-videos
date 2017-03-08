<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTumblingScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tumbling_scores', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('competition_id')->unsigned();
            $table->integer('video_id')->unsigned()->nullable();
            $table->enum('routine', ['prelim_pass_1', 'prelim_pass_2', 'final_pass_3', 'final_pass_4', 'team_final']);
            $table->float('execution')->nullable();
            $table->float('neutral_deduction')->nullable();
            $table->float('difficulty')->nullable();
            $table->float('total_score');
            $table->timestamps();

            $table->foreign('competition_id')->references('id')->on('competitions')->onDelete('cascade');
            $table->foreign('video_id')->references('id')->on('videos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tumbling_scores');
    }
}
