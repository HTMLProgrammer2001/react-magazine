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

Route::post('/getProducts', function (Request $request){
    $data = [
        [
            'id' => 1,
            'name' => 'T-Shirt',
            'slug' => 'shirt',
            'colors' => ['black', 'red', 'green'],
            'photo' => '/image/product.png',
            'price' => 30,
            'sizes' => ['M', 'L', 'XL']
        ],
        [
            'id' => 2,
            'name' => 'T-Shirt',
            'slug' => 'shirt',
            'colors' => ['black', 'red', 'green'],
            'photo' => '/image/product.png',
            'price' => 30,
            'sizes' => ['M', 'L', 'XL']
        ],
        [
            'id' => 3,
            'name' => 'T-bank',
            'slug' => 'bank',
            'colors' => ['black', 'purple'],
            'photo' => '/image/product.png',
            'price' => 30,
            'sizes' => ['M', 'L', 'XL']
        ]
    ];

    return response()->json([
        'total' => sizeof($data),
        'products' => array_slice($data, $request->input('offset'), 1)
    ]);
});
