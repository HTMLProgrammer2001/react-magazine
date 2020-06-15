<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $fillable = [
        'name', 'surname', 'email'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    //roles
    const USER_ROLE = 50;
    const MODERATOR_ROLE = 20;
    const ADMIN_ROLE = 1;

    //helpers
    public function setPassword($password){
        $this->password = bcrypt($password);
        $this->save();
    }
}
