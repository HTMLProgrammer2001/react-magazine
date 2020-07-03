<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/getProducts', function (Request $request) {
    $products = \App\Product::paginate(3);

    return response()->json($products);
});

Route::get('/products/{slug}', function ($slug) {
    $product = \App\Product::where('slug', $slug)->first();

    if(!$product)
        abort(404, 'Product not found');

    return response()->json(new \App\Http\Resources\ProductResource($product));
});

Route::get('/products/{productID}/getComments', function (Request $request, $productID) {
    $comments = \App\Comment::where('product_id', $productID)->paginate(10);

    return new \App\Http\Resources\CommentsResource($comments);
});
