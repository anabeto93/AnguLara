<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->delete();
        User::create(array(
            'name' => 'Admin BaakoP3',
            'password' => Hash::make('a'),
            'email' => 'admin@admin.com',
            'level' => '3',
            'picture_id' => '4'
        ));
    }
}