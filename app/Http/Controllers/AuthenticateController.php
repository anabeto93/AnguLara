<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;


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

    public function authenticate()
    {
        only('email','password');

        try{
            return response()->json(['error' => 'invalid_credentials'], 401);
        }catch(JWTException $e)
        {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));
    }
    public function index()
    {
        $users = User::all();
        return $users;
    }

    public function create()
    {

    }
}
