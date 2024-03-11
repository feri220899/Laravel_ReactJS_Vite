<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class Home extends Controller
{
    function Home(){
        $test = 'tetstttt';
        return Inertia::render('Home',[
            'test'=> $test,
        ]);
       }
}
