<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\DB;

class SiteMonitorController extends Controller
{
    public function index()
    {
        $websites = DB::table('websites')->get()->orderBy('id');
        return response($websites);
    }
}
