@component('mail::message')
# Welcome

Hi {{ $user->name }},

Welcome to T&T Videos. You can now start [uploading videos]({{ url('/upload/create') }}) or [submitting competition results]({{ url('/competitions/create') }}) so that
coaches and fellow athletes can follow your progress.

@component('mail::button', ['url' => '/'])
T&T Videos
@endcomponent

Regards,<br>
{{ config('app.name') }}
@endcomponent
