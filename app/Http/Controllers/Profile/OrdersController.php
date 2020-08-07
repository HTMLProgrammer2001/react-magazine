<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Http\Resources\OrdersResource;
use App\Order;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function all(Request $request){
        $find = $request->query('find') ?? '';
        $sort = $request->query('sort') ?? '';
        $types = $request->query('types') ?? 'all';
        $paginationSize = $request->query('size') ?? 1;

        $orders = auth('api')->user()->orders();
        $orders = $orders->whereHas('products', function ($q) use($find){
            return $q->where('name', 'like', "%$find%");
        });
        $orders = $orders->orderBy('date', $sort == 'Latest' ? 'ASC' : 'DESC');

        if($types && $types != 'all')
            $orders = $orders->where('type', $types);

        $orders = $orders->paginate($paginationSize);

        return new OrdersResource($orders);
    }

    public function single($id, Request $request){
        $order = Order::query()->findOrFail($id);

        if($order->user_id != auth('api')->user()->id)
            return abort(403);

        return (new OrderResource($order))->toArray($request);
    }
}
