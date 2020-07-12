<?php

namespace App;

use Carbon\Carbon;
use http\Env\Request;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $casts = [
        'colors' => 'array',
        'sizes' => 'array',
        'images' => 'array'
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

    public function likes(){
        return $this->hasMany(Like::class);
    }

    //helpers
    public function setCategory(int $category_id){
        $this->category_id = $category_id;
        $this->save();
    }

    public function changeLikeFor(int $user_id): bool{
        $like = $this->likes()
            ->where('user_id', $user_id)->first();

        if($like) {
            $like->delete();

            return false;
        }
        else {
            $newLike = new Like(['date' => Carbon::now()]);
            $newLike->setUser($user_id);
            $newLike->setProduct($this->id);
            $newLike->save();

            return true;
        }
    }
}
