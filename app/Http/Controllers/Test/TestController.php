<?php

namespace App\Http\Controllers\Test;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
   function Test(){
    $test = 'tetstttt';
    return Inertia::render('TestView',[
        'test'=> $test,
    ]);
   }
}
