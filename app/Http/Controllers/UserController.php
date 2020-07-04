<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function register(Request $request){
        $user = new User($request->all());
        $user->setPassword($request->input('password'));
        $user->save();

        return response()->json($user);
    }

    public function login(Request $request){

    }
}
