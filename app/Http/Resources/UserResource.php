<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'fullName' => $this->fullName,
            'email' => $this->email,
            'avatar' => config('app.avatarPath') . $this->avatar,
            'role' => $this->role
        ];
    }
}
