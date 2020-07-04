<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'author' => new UserShortResouce($this->user),
            'likes' => $this->reactions()->where('type', 'up')->count(),
            'date' => $this->date->format('d.m.Y h:i:s'),
            'dislikes' => $this->reactions()->where('type', 'down')->count()
        ]);
    }
}
