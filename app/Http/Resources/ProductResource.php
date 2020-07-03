<?php

namespace App\Http\Resources;

use App\Like;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return array_merge(parent::toArray($request), [
            'colors' => json_decode($this->colors),
            'sizes' => json_decode($this->sizes),
            'images' => array_map(function($item) {
                return '/image/' . $item;
            }, json_decode($this->images)),
            'mark' => $this->comments()->avg('mark'),
            'liked' => !!$this->likes()->where('user_id', $request->user()->id ?? false )->first()
        ]);
    }
}
