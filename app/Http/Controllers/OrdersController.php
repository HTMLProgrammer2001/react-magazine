<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateOrderRequest;
use App\Order;
use App\Product;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function create(CreateOrderRequest $request){
        $order = new Order($request->input());
        $order->date = Carbon::now();
        $userID = null;

        if($request->input('create')){
            $user = new User($request->input());
            $user->setPassword($request->input('password'));
            $user->save();

            $user->sendApiEmailVerification();

            $userID = $user->id;
        }

        if($user = auth('api')->user())
            $userID = $user->id;
        else
            $order->setAnonymousUser($request->input('email'), $request->input('fullName'));

        if($userID)
            $order->setUser($userID);
        else
            return abort(403);

        $order->setPayment($request->input('payment'));
        $order->save();

        foreach ($request->input('cartItems') as $item){
            $order->products()->attach($item['product'], [
                'count' => $item['count'],
                'color' => $item['color'],
                'size' => $item['size'],
                'price' => Product::query()->find($item['product'])->price * $item['count']
            ]);
        }

        $order->save();

        return response()->json([
            'success' => "Order was created successfull(ID: {$order->id})"
        ]);
    }
}
