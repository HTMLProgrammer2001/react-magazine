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

    //helpers
    public function setProduct(int $product_id){
        $this->product_id = $product_id;
        $this->save();
    }

    public function setUser(int $user_id){
        $this->user_id = $user_id;
        $this->save();
    }
}
