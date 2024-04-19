<?php

use Inertia\Inertia;
use App\Http\Controllers\Home;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\Auth\Login;
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

Route::get('/login', [Login::class, 'Login']);
Route::get('/mesinlogin', [Login::class, 'MesinLogin']);
Route::get('/', [Dashboard::class, 'Dashboard'])->middleware('test');
Route::get('/home', [Home::class, 'Home'])->middleware('test');



