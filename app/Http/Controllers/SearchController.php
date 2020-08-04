<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductsResource;
use App\Product;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $search = $request->query('search');
        $products = Product::where('name', 'like', "%$search%")->paginate(1);

        $data = array_merge($products->toArray(), (new ProductsResource($products))->toArray($request));

        return response()->json($data);
    }
}
