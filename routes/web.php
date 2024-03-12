<?php

use Inertia\Inertia;
use App\Http\Controllers\Home;
use App\Http\Controllers\Dashboard;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Test\TestController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [Dashboard::class, 'Dashboard']);
Route::get('/home', [Home::class, 'Home']);



