<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class UserActions extends Controller
{
    public function register(RegisterRequest $request){
        //create new user
        $user = new User();

        //fill name, surname, email
        $user->fill($request->all());

        //generate hash for password
        $user->setPassword($request->get('password'));
        $user->save();

        //send verify message
        $user->sendApiEmailVerification();

        //return answer
        return response()->json([
            'message' => "User successfully created. Check {$request->input('email')} to activate"
        ]);
    }

    public function login(LoginRequest $request){
        //get only email and password
        $credentials = $request->only('email', 'password');

        if(!Auth::attempt($credentials)){
            //incorrect credentials

            return response()->json([
                'errors' => [],
                'message' => 'Wrong password or email'
            ]);
        }

        if(!Auth::user()->hasVerifiedEmail())
            return response()->json([
               'message' => 'Your account not verified'
            ], 403);

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
            'errors' => [],
            'message' => 'Logged out'
        ]);
    }

    public function reset(ResetRequest $request){
        $user = User::all()->where('email', $request->input('email'))->first();

        //generate token
        $newPassword = Str::random(16);
        $user->setPassword($newPassword);
        $user->save();

        //notify user
        $user->sendApiResetEmail($newPassword);

        return response()->json([
            'success' => 'Reset password email was sent'
        ]);
    }
}
