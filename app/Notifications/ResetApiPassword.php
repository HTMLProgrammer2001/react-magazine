<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;

class ResetApiPassword extends ResetPassword
{
    use Queueable;

    public function __construct($newPassword)
    {
        parent::__construct($newPassword);
        $this->pass = $newPassword;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Reset password in magazine')
            ->line('You are receiving this mail because we received password reset request')
            ->line('Your new password is ' . $this->pass);
    }
}
