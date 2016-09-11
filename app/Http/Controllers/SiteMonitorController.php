<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\ParameterBag;

class SiteMonitorController extends Controller
{
    public function index()
    {
        $websites = DB::table('websites')->get();
         return $websites;
        /*foreach($websites as $site)
        {
            echo $site['url'];
        }*/
    }

    public function getStatus(Request $request)
    {
        //$data =(object) $request->json()->all();
        $data = $request->input('sessionUrls');

        //var_dump($this->multiRequest($data));
       return $this->multiRequest($data);
    }

    public function getHeader($curls, $headers)
    {
        //global $urlHeaders;
        //global $count;

        //$urlHeaders[$count] = $headers;
        //echo "<br>Yeah: ".$headers." \n";
        return strlen($headers);
    }

    public function multiRequest($data) {
        global $count;
        // array of curl handles
        $curly = array();
        //$curly = new \stdClass();
        /// data to be returned
        $result = array();
        $tempResult = new \stdClass();
        //headers

        // multi handle
        $mh = curl_multi_init();

        $count =0;
        foreach($data as $website)
        {
            //echo $website."\n";
            $website = "http://".$website;
            $curly[$count] = curl_init($website);
            $agent = "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; pt-pt) 
        AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27";
            curl_setopt($curly[$count], CURLOPT_USERAGENT, $agent);
            curl_setopt($curly[$count],CURLOPT_HEADER, true);
            curl_setopt($curly[$count],CURLOPT_NOBODY,true);
           // curl_setopt($curly[$count],CURLOPT_HEADERFUNCTION, 'array("Content-Type: application/json")');
            curl_setopt($curly[$count],CURLOPT_RETURNTRANSFER, 1);
            // max number of seconds to allow cURL function to execute
            curl_setopt($curly[$count], CURLOPT_TIMEOUT, 20);
            curl_multi_add_handle($mh, $curly[$count]);
            $count++;
            //echo "count is ".$count." \n";
        }
        //var_dump($curly);



        // execute the handles
        // echo "Count is $count\n";

        $running = null;
        do {
            curl_multi_exec($mh, $running);
        } while($running > 0);

        //var_dump($curly);
        // get content and remove handles
        $count=0;
        foreach($curly as $id) {
            //echo "id is $id\n";
            //$result[$count] = curl_multi_getcontent($id);
           $result[$count] = curl_getinfo($id, CURLINFO_HTTP_CODE);
            curl_multi_remove_handle($mh, $id);
            $count++;
        }

        // all done
        curl_multi_close($mh);
        //var_dump(json_decode($result));
        return json_encode($result);
        //return $result;
    }


}


