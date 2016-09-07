<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Websites extends Model
{
    //use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'url', 'site_title', 'number',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'url',
    ];

    protected $table = 'websites';
}
