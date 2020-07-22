<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;

class Subscribe extends Model
{
    use Notifiable;

    public $timestamps = false;

    protected $fillable = ['date', 'email'];

    public function deactivate(){
        $this->active = false;
    }

    public function activate(){
        $this->active = true;
    }

    public function generateToken(){
        $this->verifyToken = Str::random();
    }
}
