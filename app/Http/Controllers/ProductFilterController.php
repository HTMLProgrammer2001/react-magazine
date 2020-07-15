<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductFilterController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $categories = Category::all();

        $maxPrice = Product::query()->max('price');
        $minPrice = Product::query()->min('price');

        $colors = ['green', 'yellow', 'red', 'black', 'blue'];

        return response()->json([
           'categories' => $categories,
           'priceRange' => [
               'from' => $minPrice,
               'to' => $maxPrice
           ],
           'colors' => $colors
        ]);
    }
}
