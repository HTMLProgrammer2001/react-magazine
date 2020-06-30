<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use App\Comment;
use App\User;
use App\Product;

$factory->define(Comment::class, function (Faker $faker) {
    $isUser = random_int(0, 1);

    return [
        'user_id' => $isUser ? $faker->randomElement(User::all('id')) : null,
        'name' => !$isUser ? $faker->name : null,
        'email' => !$isUser ? $faker->email : null,
        'message' => $faker->text(50),
        'date' => $faker->dateTime,
        'mark' => random_int(1, 5),
        'product_id' => $faker->randomElement(Product::all('id'))
    ];
});
