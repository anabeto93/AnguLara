<?php

use Illuminate\Database\Seeder;

class WebsitesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('websites');
        User::create(array(
            'url' => 'MindYourBusiness.com',
            'site_title' => 'Test Website'
        ));
    }
}