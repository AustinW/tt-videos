@component('mail::message')

@role(['owner', 'admin', 'national-coach'])
# {{ $coach->name }} Has Followed You
@endrole
@role('coach')
# {{ $coach->name }} Has Requested to Follow You
@endrole

Hi {{ $athlete->name }},

@role(['owner', 'admin', 'national-coach'])
We are simply letting you know that {{ $coach->name }} has started following your videos and competition results.
@endrole
@role('coach')
Click the button below to allow {{ $coach->name }} to follow your videos and competition results.
@endrole

@role('coach')
@component('mail::button', ['url' => url('/athletes/verify-follow/' . $code)])
Accept Follow Request
@endcomponent
@endrole

Regards,<br>
{{ config('app.name') }}
@endcomponent
