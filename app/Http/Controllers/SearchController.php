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
     * @return
     */
    public function __invoke(Request $request)
    {
        $search = $request->query('search');
        $products = Product::where('name', 'like', "%$search%")->paginate(1);

        return new ProductsResource($products);
    }

    public function find(Request $request)
    {
	$find = $request->query('find');
	$products = Product::where('name', 'like', "%$find%")->get();

	return new ProductsResource($products);
    }
}
