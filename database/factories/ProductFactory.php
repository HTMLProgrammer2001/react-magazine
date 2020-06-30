<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use App\Product;
use App\Category;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->title(),
        'slug' => $faker->slug,
        'price' => $faker->randomFloat(2, 5, 200),
        'colors' => json_encode($faker->randomElements(['red', 'green', 'blue', 'black', 'gray'], 3, false)),
        'sizes' => json_encode(['XL', 'L', 'M', 'S', 'XS']),
        'category_id' => $faker->randomElement(Category::all('id')),
        'description' => $faker->text(200)
    ];
});
