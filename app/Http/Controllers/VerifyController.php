<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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
        $userID = $request['id'];
        $user = User::findOrFail($userID);

        //set verified
        $date = date('Y-m-d g:i:s');
        $user->email_verified_at = $date;
        $user->save();

        //return response
        return response()->json(['success' => 'Email verified']);
    }

    public function resend(Request $request)
    {
        if($request->user()->hasVerifiedEmail()){
            //user was verified
            return response()->json(['message' => 'User already verified'], 422);
        }

        //send new email
        $request->user()->sendEmailVerificationNotification();

        //return response
        return response()->json(['success' => 'Verification email has been resubmitted']);
    }
}
