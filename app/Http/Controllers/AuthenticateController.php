<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthenticateController extends Controller
{
    public function checkAuth(Request $request)
    {
        //credentials array
        $credentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ];

        //case wrong credentials
        if(!Auth::attempt($credentials))
        {
            return response('Username or password not correct!',403);
        }

        return response(Auth::user(),201);
    }

    public function index()
    {

    }

    public function create()
    {

    }
}
