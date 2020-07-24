<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOrderFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('country');
            $table->string('city');
            $table->string('postcode');
            $table->string('address');
            $table->string('notes')->nullable();
            $table->enum('payment', ['paypal', 'bank', 'deliver']);

            $table->bigInteger('user_id')->unsigned()->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('country');
            $table->dropColumn('city');
            $table->dropColumn('postcode');
            $table->dropColumn('address');
            $table->dropColumn('notes');
            $table->dropColumn('payment');

            $table->bigInteger('user_id')->unsigned()->change();
        });
    }
}
