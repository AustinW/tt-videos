@component('mail::message')
# New Competition Results from {{ $competition->user->name }}

## {{ $competition->title }}
{{ $competition->dateSpan() }}

@if ($competition->videoCount)
{{ $competition->videoCount }} {{ str_plural('video', $competition->videoCount) }}
@endif

@component('mail::button', ['url' => url('/competitions/' . $competition->id)])
View Scores
@endcomponent

Regards,<br>
{{ config('app.name') }}
@endcomponent
