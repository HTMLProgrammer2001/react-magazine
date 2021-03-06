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

Route::get('/productFilters', 'ProductFilterController');

Route::post('/getProducts', 'ProductInfoController@getProducts');
Route::get('/products/{productID}/getComments', 'ProductInfoController@getProductComments');
Route::get('/products/{slug}', 'ProductInfoController@getProductBySlug');

Route::post('/products/{productID}/changeLike', 'ProductInfoController@changeLike')
    ->middleware('auth:api');

Route::post('/comments/{commentID}/addReaction', 'CommentController@addReaction')
    ->middleware('auth:api');

Route::post('/products/{productID}/addComment', 'CommentController@create');

Route::get('/categories', 'CategoriesController@getAll');

Route::post('/register', 'UserActions@register');
Route::post('/login', 'UserActions@login')->name('login');
Route::post('/logout', 'UserActions@logout')
    ->middleware('auth:api, verified');

Route::post('/reset', 'UserActions@reset');

Route::get('/verify/{id}', 'VerifyController@verify')
    ->name('verificationapi.verify');

Route::post('/resend', 'VerifyController@resend')
    ->name('verificationapi.resend');

Route::post('/subscribe', 'SubscribeController@createSubscribe');
Route::put('/subscribe', 'SubscribeController@verifySubscribe');
Route::delete('/subscribe', 'SubscribeController@unSubscribe');

Route::get('/change', 'UserActions@validChange');
Route::post('/change', 'UserActions@changePassword');

Route::get('/search', 'SearchController');
Route::get('/find', 'SearchController@find');

Route::get('/me', 'UserActions@me')->middleware('auth:api');
Route::get('/getProductsByIds', 'ProductInfoController@getProductsByIds');

Route::post('/orders', 'OrdersController@create');

Route::group(['namespace' => 'Profile', 'prefix' => 'profile'], function(){
    Route::get('/recommendationProducts', 'RecommendationController');

    Route::get('/favorite', 'FavoriteController@all');
    Route::delete('/favorite', 'FavoriteController@delete');

    Route::get('/orders', 'OrdersController@all');
    Route::get('/orders/{id}', 'OrdersController@single');

    Route::get('/reviews', 'ReviewsController@all');

    Route::group(['prefix' => 'account'], function (){
       Route::delete('/', 'AccountController@delete');
       Route::post('/password', 'AccountController@changePassword');
       Route::post('/personal', 'AccountController@personal');
    });
});
