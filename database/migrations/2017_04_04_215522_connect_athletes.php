<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ConnectAthletes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coach_athlete', function (Blueprint $table) {
            $table->integer('coach_id')->unsigned();
            $table->integer('athlete_id')->unsigned();
            $table->datetime('verified')->nullable();
            $table->string('verification_code');

            $table->foreign('coach_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('athlete_id')->references('id')->on('users')->onDelete('cascade');

            $table->primary(['coach_id', 'athlete_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('coach_athlete');
    }
}
