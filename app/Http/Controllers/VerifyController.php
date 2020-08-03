<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ResendRequest;
use App\User;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\Request;

class VerifyController extends Controller
{
    use VerifiesEmails;

    public function show()
    {

    }

    public function verify(Request $request)
    {
        //find user
        $token = $request['id'];
        $user = User::query()->where('token', $token)->first();

        //Validation
        if(!$user or $user->hasVerifiedEmail())
            return abort(404);

        //set verified
        $date = date('Y-m-d g:i:s');
        $user->email_verified_at = $date;
        $user->generateToken();
        $user->save();

        //return response
        return response()->json(['success' => 'Email verified']);
    }

    public function resend(ResendRequest $request)
    {
        $user = User::query()->where('email', $request->input('email'))->first();

        if($user->hasVerifiedEmail()){
            //user was verified
            return response()->json(['message' => 'User already verified'], 422);
        }

        //send new email
        $user->generateToken();
        $user->save();

        $user->sendApiEmailVerification();

        //return response
        return response()->json(['success' => 'Verification email has been resubmitted']);
    }
}
