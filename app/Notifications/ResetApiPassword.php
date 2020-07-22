<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;

class ResetApiPassword extends ResetPassword
{
    use Queueable;

    public function __construct($token)
    {
        parent::__construct($token);
        $this->pass = $token;
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
            ->line('For reseting password visit this link ')
            ->action('Reset', url('/reset/' . $this->token));
    }
}
