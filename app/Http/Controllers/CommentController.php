<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Controllers\Controller;
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
}
