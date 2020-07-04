<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reactions', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['up', 'down'])->default('up');
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('comment_id')->unsigned();
            $table->dateTime('date');

            $table->foreign('user_id')->references('id')
                ->on('comments')->onDelete('cascade');

            $table->foreign('comment_id')->references('id')
                ->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reactions');
    }
}
