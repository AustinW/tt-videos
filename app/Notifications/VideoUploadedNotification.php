<?php

namespace App\Notifications;

use App\Video;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class VideoUploadedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $video;

    /**
     * Create a new notification instance.
     *
     * @param Video $video
     */
    public function __construct(Video $video)
    {
        $this->video = $video;
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
        $user = $this->video->user;

        return (new MailMessage)
            ->subject('New Video Uploaded by ' . $user->name . '.')
            ->markdown('email.video.uploaded', [
                'name' => $user->name,
                'title' => ($this->video->updated_at !== $this->video->created_at) ? $this->video->title : '',
                'description' => ($this->video->updated_at !== $this->video->created_at) ? $this->video->description : '',
                'thumbnailUrl' => $this->video->thumbnailUrl(),
                'videoUrl' => url('/videos/' . $this->video->unique_id),
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
