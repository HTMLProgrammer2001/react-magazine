<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserActions extends Controller
{
    public function register(RegisterRequest $request){
        //create new user
        $user = new User();

        //fill name, surname, email
        $user->fill($request->all());

        //generate hash for password
        $user->setPassword($request->get('password'));

        //create token of this user
        $token = $user->createToken(config('app.name'));

        //return token and user info
        return response()->json([
            'token' => $token->accessToken,
            'user' => $user
        ]);
    }

    public function login(Request $request){

        //validate input data
        $this->validate($request, [
           'email' => 'required|email',
            'password' => 'required'
        ]);

        //get only email and password
        $credentials = $request->only('email', 'password');

        if(!Auth::attempt($credentials)){
            //incorrect credentials

            return response()->json([
                'errors' => [],
                'message' => 'Wrong password or email'
            ]);
        }

        //generate token
        $token = Auth::user()->createToken(config('app.name'));

        //return token and user info
        return response()->json([
            'token' => $token->accessToken,
            'user' => Auth::user()
        ]);
    }

    public function logout(){
        if(!Auth::user())
            //return error that user was not logged in
            return response()->json([
               'errors' => [],
               'message' => 'You are not logged in'
            ]);

        //delete user token
        Auth::user()->token()->revoke();

        //return 200 status
        return response()->json([
            'message' => 'Logged out'
        ]);
    }
}
