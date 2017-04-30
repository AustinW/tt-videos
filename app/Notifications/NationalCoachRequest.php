<?php

namespace App\Notifications;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NationalCoachRequest extends Notification
{
    use Queueable;

    protected $admin;
    protected $coach;

    /**
     * Create a new notification instance.
     *
     * @param User $admin
     * @param User $coach
     */
    public function __construct(User $admin, User $coach)
    {
        $this->admin = $admin;
        $this->coach = $coach;
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
        return (new MailMessage)->markdown('email.national_coach_request', [
            'admin' => $this->admin,
            'coach' => $this->coach,
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
