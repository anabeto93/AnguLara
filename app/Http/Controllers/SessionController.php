<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class SessionController extends Controller
{
    public function getSession(Request $request)
    {
        if($request->session()->has('sessionEmail'))
        {
            $temp1 = "{\"email\":\"".$request->session()->get('sessionEmail')."\"";
            $temp2 = ",\"name\":\"".$request->session()->get('sessionName')."\"";
            $temp3 = ",\"level\":".$request->session()->get('sessionLevel');
            $temp32 = ",\"status\":\"".$request->session()->get('sessionStatus')."\"";
            $temp4 = ",\"picture\":".$request->session()->get('sessionPicture')."}";
            $result = $temp1." ".$temp2." ".$temp3." ".$temp32." ".$temp4;
            echo $result;
        }else
            echo "No data found";
    }

    public function setSession(Request $request)
    {
        //echo "user details ".$request->input(sessionDetails);
        $request->session()->put('sessionEmail',$request->input('sessionEmail'));
        $request->session()->put('sessionLevel',$request->input('sessionLevel'));
        $request->session()->put('sessionPicture',$request->input('sessionPicture'));
        $request->session()->put('sessionName',$request->input('sessionName'));
        $request->session()->put('sessionStatus',$request->input('sessionStatus'));
        echo "Session Data has been added";
    }

    public function popSession(Request $request)
    {
        $request->session()->forget('sessionEmail');
        $request->session()->forget('sessionLevel');
        $request->session()->forget('sessionPicture');
        $request->session()->forget('sessionName');
        $request->session()->forget('sessionStatus');
        echo "Session Data removed successfully";
    }
}
