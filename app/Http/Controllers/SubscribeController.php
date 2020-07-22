<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\SubscribeRequest;
use App\Notifications\VerifySubscribe;
use App\Subscribe;
use Illuminate\Http\Request;

class SubscribeController extends Controller
{
    public function createSubscribe(SubscribeRequest $request){
        //create subscribe
        $subscribe = new Subscribe($request->all());
        $subscribe->generateToken();
        $subscribe->save();

        //notify
        $subscribe->notify(new VerifySubscribe($subscribe->verifyToken));
    }

    public function verifySubscribe($token){
        //find subscribe
        $subscribe = Subscribe::query()->where('verifyToken', $token)->first();

        //404 error
        if(!$subscribe)
            return abort(404, 'No subscribe with this token');

        //activate subscribe
        $subscribe->activate();

        //return response
        return response()->json([
           'success' => 'Subscribe successfully verified'
        ]);
    }

    public function unSubscribe($token){
        //find subscribe
        $subscribe = Subscribe::query()->where('verifyToken', $token)->first();

        //404 error
        if(!$subscribe)
            return abort(404, 'No subscribe with this token');

        //activate subscribe
        $subscribe->delete();

        //return response
        return response()->json([
            'success' => 'Subscribe successfully canceled'
        ]);
    }
}
