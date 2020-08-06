<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Resources\FavoriteResource;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function all(Request $request){
        $find = $request->query('find') ?? '';
        $paginationSize = $request->query('size') ?? 1;

        $user = $request->user('api');
        $likes = $user->likes();

        $favorites = $likes->whereHas('product', function ($q) use($find){
           return $q->where('name', 'like', "%$find%");
        })->paginate($paginationSize);

        return new FavoriteResource($favorites);
    }

    public function delete(Request $request){
        $user = $request->user('api');
        $like = $user->likes()->find($request->query('id'));

        if($like){
            $like->delete();

            return response()->json([
                'success' => 'Deleted from favorite'
            ]);
        }

        return response()->json([
            'message' => 'No like with this id'
        ]);
    }
}
