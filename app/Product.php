<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $casts = [
        'colors' => 'array',
        'sizes' => 'array'
    ];

    public $timestamps = false;

    protected $fillable = ['name', 'price', 'description'];

    //relations
    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function orders(){
        return $this->belongsToMany(Order::class, 'orderitems');
    }

    //helpers
    public function setCategory(int $category_id){
        $this->category_id = $category_id;
        $this->save();
    }
}
