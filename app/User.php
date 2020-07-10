<?php

namespace App;

use App\Notifications\ResetApiPassword;
use App\Notifications\VerifyApiEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $fillable = [
        'fullName', 'avatar', 'email'
    ];

    public $timestamps = false;

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

    //relations
    public function orders(){
        return $this->hasMany(Order::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function reactions(){
        return $this->hasMany(Reaction::class);
    }

    //helpers
    public function changeEmail($newEmail){
        $this->email = $newEmail;
        $this->email_verified_at = null;
    }

    public function setPassword($password){
        $this->password = bcrypt($password);
    }

    public function setRole(int $role){
        $this->role = $role;
        $this->save();
    }

    public function activate(){
        $this->active = true;
        $this->save();
    }

    public function deactivate(){
        $this->active = false;
        $this->save();
    }

    public function getAvatar(): string {
        return $this->avatar;
    }

    public function sendApiEmailVerification(){
        $this->notify(new VerifyApiEmail());
    }

    public function sendApiResetEmail($token){
        $this->notify(new ResetApiPassword($token));
    }
}
