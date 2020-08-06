<?php

namespace App\Http\Controllers\Profile;

use App\Comment;
use App\Http\Controllers\Controller;
use App\Http\Resources\ReviewsResource;
use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    public function all(Request $request){
        $paginationSize = $request->query('size') ?? 5;
        $find = $request->query('find') ?? '';
        $sort = $request->query('sort') ?? 'Newest';

        $reviews = $request->user('api')->comments();

        $reviews = $reviews->whereHas('product', function($q) use($find){
                return $q->where('name', 'like', "%$find%");
            });

        switch ($sort){
            case 'Newest':
                $reviews = $reviews->orderBy('date', 'DESC');
                break;

            case 'Latest':
                $reviews = $reviews->orderBy('date', 'ASC');
                break;

            case 'Positive first':
                $reviews = $reviews->orderBy('mark', 'DESC');
                break;

            default:
                $reviews = $reviews->orderBy('mark', 'ASC');
        }

        $reviews = $reviews->paginate($paginationSize);

        return new ReviewsResource($reviews);
    }
}
