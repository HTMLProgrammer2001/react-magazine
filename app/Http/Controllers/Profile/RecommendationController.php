<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class RecommendationController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function __invoke(Request $request)
    {
        $products = Product::query()->inRandomOrder()->take(3)->get();

        return response()->json($products);
    }
}
