<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $date = Carbon::createFromFormat('Y-m-d H:i:s', $this->date)->format('Y-m-d H:i:s');
        $price = 0;

        foreach ($this->products as $product)
            $price += $product->pivot->price;

        $products = $this->products;
        $productsList = $products->pluck('name')->implode(', ');

        $productsItems = [];

        foreach ($this->products as $product)
            $productsItems[] = [
                'price' => $product->pivot->price,
                'color' => $product->pivot->color,
                'size' => $product->pivot->size,
                'count' => $product->pivot->count,
                'product' => new ProductResource($product)
            ];

        return [
            'id' => $this->id,
            'date' => $date,
            'price' => $price,
            'status' => $this->type,
            'products' => $productsList,
            'productsItems' => $productsItems
        ];
    }
}
