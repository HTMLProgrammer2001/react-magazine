<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommentsResource;
use App\Http\Resources\ProductResource;
use App\Product;
use Illuminate\Http\Request;

class ProductInfoController extends Controller
{
    public function getProducts(){
        return response()->json(Product::paginate(config('app.PRODUCT_PAGINATE_SIZE', 3)));
    }

    public function getProductBySlug(string $slug){
        $product = Product::all()->where('slug', $slug)->first();

        if(!$product)
            return abort(404, 'Product not found');

        return response()->json(new ProductResource($product));
    }

    public function getProductComments(int $productID){
        $product = Product::findOrFail($productID);
        $comments = $product->comments()->paginate(config('app.COMMENTS_PAGINATE_SIZE', 3));

        return new CommentsResource($comments);
    }

    public function changeLike(Request $request, int $productID){
        $product = Product::findOrFail($productID);

        if(!$request->user())
            return abort(403, 'You are not logged in');

        $result = $product->changeLikeFor($productID, $request->user()->id);

        if($result)
            $response = [
                'message' => 'Product successfully added to liked'
            ];
        else
            $response = [
                'message' => 'Product removed from liked'
            ];

        return response()->json($response);
    }
}
