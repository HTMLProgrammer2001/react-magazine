<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades\Auth;

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

Route::post('/products/{productID}/changeLike', 'ProductInfoController@changeLike')
    ->middleware('auth:api');

Route::post('/comments/{commentID}/addReaction', 'CommentController@addReaction')
    ->middleware('auth:api');

Route::post('/register', 'UserActions@register');
Route::post('/login', 'UserActions@login');
Route::post('/logout', 'UserActions@logout')
    ->middleware('auth:api, verified');

Route::post('/reset', 'UserActions@reset');

Route::get('/verify/{id}', 'VerifyController@verify')
    ->name('verificationapi.verify');

Route::get('/resend', 'VerifyController@resend')
    ->name('verificationapi.resend');
