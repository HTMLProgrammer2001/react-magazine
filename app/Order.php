<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    const CREATED_AT = 'date';

    protected $casts = [
        'date' => 'datetime'
    ];

    protected $fillable = ['country', 'city', 'address', 'postcode', 'notes'];

    public $timestamps = false;

    //Payment
    const PAYMENT_TYPES = ['bank', 'paypal', 'deliver'];

    //relations
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function products(){
        return $this->belongsToMany(Product::class, 'orderitems')
            ->withPivot('price', 'color', 'size', 'count');
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

    public function setPayment(string $payment){
        if(in_array($payment, self::PAYMENT_TYPES))
            $this->payment= $payment;
    }

    public function setAnonymousUser(string $email, string $fullName){
        $this->email = $email;
        $this->fullName = $fullName;
    }
}
