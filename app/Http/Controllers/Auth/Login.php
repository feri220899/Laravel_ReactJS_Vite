<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class Login extends Controller
{
    public function Login() {
        return Inertia::render('Auth/Login');
    }
    public function MesinLogin(Request $request) {
        $credentials = $request->only('email', 'password');
        Session::put('credentials',$credentials);
        return redirect('/');
    }
}
