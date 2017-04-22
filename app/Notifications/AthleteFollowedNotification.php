<?php

namespace App\Notifications;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class AthleteFollowedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $coach, $athlete, $verificationCode;

    /**
     * Create a new notification instance.
     *
     * @param User $coach
     * @param User $athlete
     * @param $verificationCode
     * @internal param Model $request
     */
    public function __construct(User $coach, User $athlete, $verificationCode)
    {
        $this->coach = $coach;
        $this->athlete = $athlete;
        $this->verificationCode = $verificationCode;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        if ($this->coach->hasRole(['owner', 'admin', 'national-coach'])) {
            $subject = $this->coach->name . ' has followed you.';
        } else {
            $subject = $this->coach->name . ' is requesting to follow you.';
        }

        return (new MailMessage)
            ->subject($subject)
            ->markdown('email.athlete.followed', [
                'coach' => $this->coach,
                'athlete' => $this->athlete,
                'code' => $this->verificationCode,
            ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
