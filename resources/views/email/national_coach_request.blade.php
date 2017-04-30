@component('mail::message')
# {{ $coach->name }} is Requesting to be a National Coach

This requires your authorization. Click the button below to make this change.

@component('mail::button', ['url' => url('/admin/user/' . $coach->id . '/edit')])
Make National Coach
@endcomponent

Regards,<br>
{{ config('app.name') }}
@endcomponent
