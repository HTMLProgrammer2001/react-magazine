<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $fillable = ['date'];
    public $timestamps = false;

    //relations
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }

    //helpers
    public function setUser($user_id){
        $this->user_id =  $user_id;
    }

    public function setProduct($product_id){
        $this->product_id = $product_id;
    }
}
