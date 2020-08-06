<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
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

        return [
            'id' => $this->id,
            'product' => new ProductResource($this->product),
            'mark' => $this->mark,
            'date' => $date
        ];
    }
}
