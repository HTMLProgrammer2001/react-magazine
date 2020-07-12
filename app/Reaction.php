<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reaction extends Model
{
    const TYPE_UP = 'up';
    const TYPE_DOWN = 'down';

    protected $casts = [
        'date' => 'datetime'
    ];

    public $timestamps = false;

    protected $fillable = ['date', 'type'];

    //relations
    public function comment(){
        return $this->belongsTo(Comment::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    //helpers
    public function setUser(int $user_id){
        if(!$user_id)
            return;

        $this->user_id = $user_id;
    }

    public function setComment(int $comment_id){
        if(!$comment_id)
            return;

        $this->comment_id = $comment_id;
    }

    public function setType(string $type){
        if(!$type)
            return;

        $this->type = $type;
    }
}
