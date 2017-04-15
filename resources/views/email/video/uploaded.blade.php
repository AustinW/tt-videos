@component('mail::message')
# New Video from {{ $name }}

{{ $title }}

{{ $description }}

<a href="{{ $videoUrl }}" target="_blank" title="{{ $title }}"><img src="{{ $thumbnailUrl }}" alt="{{ $title }}" class="video-thumbnail"></a>

@component('mail::button', ['url' => $videoUrl])
Watch Video
@endcomponent

You are receiving this notification because you are following {{ $name }}.

Regards,<br>
{{ config('app.name') }}
@endcomponent