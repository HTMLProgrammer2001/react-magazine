<?php

namespace App\Notifications;

use Carbon\Carbon;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\URL;

class VerifyApiEmail extends VerifyEmail
{
    use Queueable;

    public function __construct($token)
    {
        $this->token = $token;
    }

    public function verificationUrl($notifiable)
    {
        return URL::to('/verify/' . $this->token);
    }
}
