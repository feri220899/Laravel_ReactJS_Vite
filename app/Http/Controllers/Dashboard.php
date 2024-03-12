<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class Dashboard extends Controller
{
    function Dashboard(Request $request){
        $test1 = $request->example1;
        $test2 = $request->example2;
        return Inertia::render('Dashboard',[
            'test1'=> $test1,
            'test2'=> $test2,
        ]);
       }
}
