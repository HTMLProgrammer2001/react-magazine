<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChangeRequest;
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
        $user->generateToken();
        $user->save();

        //send verify message
        $user->sendApiEmailVerification();

        //return answer
        return response()->json([
            'success' => "User successfully created. Check {$request->input('email')} to activate"
        ]);
    }

    public function login(LoginRequest $request){
        //get only email and password
        $credentials = $request->only('email', 'password');

        if(!Auth::attempt($credentials)){
            //incorrect credentials

            return response()->json([
                'errors' => [],
                'message' => 'Wrong password or email.',
                'reset' => true
            ], 422);
        }

        if(!Auth::user()->hasVerifiedEmail())
            return response()->json([
               'message' => 'Your account not verified',
               'resend' => true
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
        if(!$user->email_verified_at)
            return response()->json([
                'message' => 'Verify your account at first'
            ], 403);

        $token = $user->generateToken();
        $user->save();

        //notify user
        $user->sendApiResetEmail($token);

        return response()->json([
            'success' => 'Reset password email was sent'
        ]);
    }

    public function changePassword(ChangeRequest $request){
        if(!$request->query('id'))
            return abort(422);

        //Find user and chage password
        $user = User::query()->where('token', $request->query('id'))->firstOrFail();
        $user->setPassword($request->input('password'));

        //Change user token
        $user->generateToken();
        $user->save();

        return response()->json([
           'success' => 'Password successfully changed'
        ]);
    }

    public function validChange(Request $request){
        if(!$request->query('id'))
            return abort(422);

        User::query()->where('token', $request->query('id'))->firstOrFail();

        return response()->json([
           'success' => 'ID is valid'
        ]);
    }

    public function me(Request $request){
        return response()->json($request->user());
    }
}
