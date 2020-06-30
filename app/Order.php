<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $casts = [
        'date' => 'datetime'
    ];

    public $timestamps = false;

    //relations
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function products(){
        return $this->belongsToMany(Product::class, 'orderitems');
    }

    //helpers
    public function setProducts(array $product_ids)
    {
        $this->products()->sync($product_ids);
        $this->save();
    }

    public function setUser(int $user_id){
        $this->user_id = $user_id;
        $this->save();
    }
}
