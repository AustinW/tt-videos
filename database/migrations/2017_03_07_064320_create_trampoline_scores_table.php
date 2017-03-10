<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrampolineScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trampoline_scores', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('competition_id')->unsigned();
            $table->integer('video_id')->unsigned()->nullable();
            $table->enum('routine', ['prelim_compulsory', 'prelim_optional', 'semi_final_optional', 'final_optional']);
            $table->float('execution')->nullable();
            $table->float('neutral_deduction')->nullable();
            $table->float('difficulty')->nullable();
            $table->float('time_of_flight')->nullable();
            $table->float('horizontal_displacement')->nullable();
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
        Schema::dropIfExists('trampoline_scores');
    }
}
