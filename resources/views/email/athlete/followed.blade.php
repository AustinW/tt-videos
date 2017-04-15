@component('mail::message')
# {{ $coach->name }} has Requested to Follow You

Hi {{ $athlete->name }},

Click the button below to allow {{ $coach->name }} to follow your videos and results.

@component('mail::button', ['url' => url('/athletes/verify-follow/' . $code)])
Accept Follow Request
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
