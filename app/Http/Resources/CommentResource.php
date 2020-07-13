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
        $curReaction = null;
        $userInfo = [];

        if(!$this->user)
            $userInfo = [
                'fullName' => $this->name,
                'avatar' => 'noAva.jpg',
                'id' => null
            ];

        if(auth('api')->user()){
            $userID = auth('api')->user()->id;
            $curReaction = $this->reactions()->where('user_id', $userID)->first();
        }

        return array_merge(parent::toArray($request), [
            'author' => $this->user ? new UserShortResouce($this->user) : $userInfo,
            'likes' => $this->reactions()->where('type', 'up')->count(),
            'date' => $this->date->format('d.m.Y h:i:s'),
            'dislikes' => $this->reactions()->where('type', 'down')->count(),
            'curReaction' => $curReaction ? $curReaction->type : null
        ]);
    }
}
