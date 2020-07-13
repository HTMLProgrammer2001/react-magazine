<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCommentRequest;
use App\Product;
use App\Reaction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function addReaction(Request $request, int $commentID){
        //find comment
        $comment = Comment::findOrFail($commentID);

        //get user reaction if exists
        $userID = $request->user()->id;
        $reaction = $comment->reactions()->where('user_id', $userID)->first();

        if(!$reaction) {
            //create new reaction if not exists
            $reaction = new Reaction(['date' => Carbon::now()]);
            $reaction->setComment($comment->id);
            $reaction->setUser($request->user()->id);
        }

        //set type of reaction
        $reaction->setType($request->input('reaction'));
        $reaction->save();

        return response()->json(['success' => true]);
    }

    public function create(CreateCommentRequest $request, $productID){
        $product = Product::findOrFail($productID);

        if(auth('api')->user()){
            $userID = auth('api')->user()->id;
            $userComment = $product->comments()->where('user_id', $userID)->first();

            if($userComment){
                $userComment->fill($request->all());
                $userComment->save();

                return response()->json([
                   'success' => 'Comment was updated'
                ]);
            }
        }

        $comment = new Comment(array_merge(['date' => Carbon::now()], $request->all()));

        if(auth('api')->user())
            $comment->setUser(auth('api')->user()->id);

        $comment->setProduct($productID);
        $comment->save();

        return response()->json([
            'success' => 'Comment successfully created'
        ]);
    }
}
