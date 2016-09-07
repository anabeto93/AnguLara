<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',50);
            $table->string('email',320)->unique();
            $table->string('password',64);
            $table->unsignedInteger('picture_id')->default(0);
            $table->unsignedInteger('level')->default(0);
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('websites',function(Blueprint $table)
        {
           $table->increments('id');
            $table->string('url',50);
            $table->string('site_title');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
        Schema::drop('websites');
    }
}
