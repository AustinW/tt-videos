@component('mail::message')
# {{ $user->name }} Registered as a {{ $role->display_name }}

{{ $user->name }} signed up with the email: {{ $user->email }}

@component('mail::button', ['url' => url('/user/')])
View {{ $user->name }}
@endcomponent

Regards,<br>
{{ config('app.name') }}
@endcomponent
