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
        'products' => array_slice($data, $request->get('offset'), 1)
    ]);
});

Route::get('/products/{slug}', function ($slug) {
    $data = [
        [
            'id' => 1,
            'slug' => 'shirt',
            'name' => 'T-Shirt',
            'images' => [
                'https://idg.net.ua/blog/wp-content/uploads/foto-v-raznyh-rakursah.jpg',
                'https://idg.net.ua/blog/wp-content/uploads/kak-fotografirovat-odezhdu-i-oformlyat-stranitsu-tovara-700x325.png',
                'https://ireland.apollo.olxcdn.com/v1/files/pz2flhr24asg1-UA/image;s=1000x700'
            ],
            'colors' => ['black', 'red', 'green'],
            'price' => 24,
            'sizes' => ['XL', 'L', 'M'],
            'description' => 'Lorem text abcd iron test',
            'mark' => 1.8,
            'category' => 'test'
        ]
    ];

    $key = array_search($slug, array_column($data, 'slug'));

    if ($key !== false)
        return response()->json($data[$key]);
    else
        return abort(404, 'Product not found');
});

Route::get('/products/{productID}/getComments', function (Request $request, $productID) {
    $data = [
        [
            'id' => 1,
            'likes' => 10,
            'dislikes' => 1,
            'mark' => 4,
            'author' => [
                'name' => 'Yura',
                'avatar' => '/image/ava.png'
            ],
            'text' => 'Lorem',
            'date' => '27.01.10 12:45'
        ],
        [
            'id' => 2,
            'likes' => 3,
            'dislikes' => 5,
            'mark' => 1,
            'author' => [
                'name' => 'Test',
                'avatar' => '/image/ava.png'
            ],
            'text' => 'Awful',
            'date' => '27.01.10 12:55'
        ],
        [
            'id' => 3,
            'likes' => 15,
            'dislikes' => 0,
            'mark' => 5,
            'author' => [
                'name' => 'Kuku',
                'avatar' => '/image/ava.png'
            ],
            'text' => 'Very good',
            'date' => '27.01.10 12:45'
        ]
    ];

    return response()->json([
        'comments' => array_slice($data, $request->offset, 1),
        'total' => sizeof($data)
    ]);
});
