<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\ChangePasswordRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AccountController extends Controller
{
    public function delete(Request $request){
        $user = $request->user('api');

        if(!$user)
            return abort(403);

        $user->delete();

        return response()->json([
            'success' => 'User deleted'
        ]);
    }

    public function changePassword(ChangePasswordRequest $request){
        $user = $request->user('api');

        //Check request from authorized user
        if(!$user)
            return abort(403);

        //check password
        if(!$user->checkPassword($request->input('oldPassword')))
            return response()->json([
               'errors' => [
                   'oldPassword' => 'Incorrect password'
               ],
                'message' => 'Incorrect data'
            ])->setStatusCode(422);

        //set password
        $user->setPassword($request->input('password'));
        $user->save();

        return response()->json([
           'success' => 'Password successfully changed'
        ]);
    }

    public function personal(Request $request){
        $user = $request->user('api');

        if($request->file('avatar')) {
            $file = $request->file('avatar');

            $name = Str::random(16);
            $ext = $file->extension();

            $file->storeAs(config('app.avatarDirectory'), $name . '.' . $ext);

            $user->avatar = $name . '.' . $ext;
        }

        $user->fullName = $request->input('fullName');
        $user->email = $request->input('email');
        $user->save();

        return response()->json([
            'file' => $request->file(),
            'user' => new UserResource(auth('api')->user())
        ]);
    }
}
