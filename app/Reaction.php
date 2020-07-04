<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reaction extends Model
{
    protected $casts = [
        'date' => 'datetime'
    ];

    public $timestamps = false;

    protected $fillable = ['date'];

    //relations
    public function comment(){
        return $this->belongsTo(Comment::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    //helpers
    public function setUser(int $user_id){
        $this->user_id = $user_id;
    }

    public function setComment(int $comment_id){
        $this->comment_id = $comment_id;
    }
}
