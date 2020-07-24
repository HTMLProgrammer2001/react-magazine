<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateOrderRequest;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function create(CreateOrderRequest $request){
        dd($request->input());
    }
}
