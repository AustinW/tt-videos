@component('mail::message')
# {{ $comment->user->name }} Commented on Your Video

@if ($commentable instanceof App\Video)
{{ $commentable->title }}

<a href="{{ $commentable->url() }}" target="_blank" title="{{ $commentable->title }}"><img src="{{ $commentable->thumbnailUrl() }}" alt="{{ $commentable->title }}" class="video-thumbnail"></a>
@endif

<span style="text-decoration:underline">{{ $comment->user->name }} said:</span><br>
{{ $comment->body }}

@component('mail::button', ['url' => $commentable->url()])
    Open Comment
@endcomponent

Regards,<br>
{{ config('app.name') }}
@endcomponent
