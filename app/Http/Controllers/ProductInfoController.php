<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommentsResource;
use App\Http\Resources\ProductResource;
use App\Product;
use Illuminate\Http\Request;

class ProductInfoController extends Controller
{
    public function getProducts(Request $request){
        $range = $request->input('priceRange');
        $color = $request->input('color');
        $size = $request->input('size');

        $productQuery = Product::query();
        $productQuery->whereBetween('price', [$range['from'], $range['to']]);

        if($color)
            $productQuery->where( 'colors', 'like', "%{$color}%" );

        if($size)
            $productQuery->where('sizes', 'like', "%{$size}%");

        $pagSize = config('app.PRODUCT_PAGINATE_SIZE', 3);
        return response()->json($productQuery->paginate($pagSize));
    }

    public function getProductBySlug(string $slug){
        $product = Product::all()->where('slug', $slug)->first();

        if(!$product)
            return abort(404, 'Product not found');

        return response()->json(new ProductResource($product));
    }

    public function getProductComments(Request $request, int $productID){
        $product = Product::findOrFail($productID);
        $comments = $product->comments();

        switch ($request->query('sortType')){
            case 'Old first':
                $comments->orderBy('date');
                break;

            case 'Best first':
                $comments->orderBy('mark', 'desc');
                break;

            case 'Worse first':
                $comments->orderBy('mark');
                break;

            default:
                $comments->orderBy('date', 'desc');
        }

        $commentPaginate = $comments->paginate(config('app.COMMENT_PAGINATE_SIZE', 3));

        return new CommentsResource($commentPaginate);
    }

    public function changeLike(Request $request, int $productID){
        $product = Product::findOrFail($productID);

        if(!$request->user())
            return abort(403, 'You are not logged in');

        $result = $product->changeLikeFor($request->user()->id);

        return response()->json([
            'message' => $result
        ]);
    }
}
