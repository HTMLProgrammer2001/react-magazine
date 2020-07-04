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

Route::get('/getProducts', 'ProductInfoController@getProducts');
Route::get('/products/{productID}/getComments', 'ProductInfoController@getProductComments');
Route::get('/products/{slug}', 'ProductInfoController@getProductBySlug');

Route::post('/products/{productID}/changeLike', 'ProductInfoController@changeLike');

Route::post('/register', 'UserController@register');
Route::post('/login', 'UserController@login');
