<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $casts = [
       'date' => 'datetime'
    ];

    public $timestamps = false;

    protected $fillable = ['name', 'email', 'message', 'date', 'mark'];

    //relations
    public function product(){
        return $this->belongsTo(Product::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function reactions(){
        return $this->hasMany(Reaction::class);
    }

    //helpers
    public function setProduct(?int $product_id){
        if(!$product_id)
            return;

        $this->product_id = $product_id;
    }

    public function setUser(?int $user_id){
        if(!$user_id)
            return;

        $this->user_id = $user_id;
    }
}
