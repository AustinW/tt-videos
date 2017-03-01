@if (session('message'))
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="alert alert-{{ session('message.class') }}" role="alert">{{ session('message.body') }}</div>
        </div>
    </div>
@endif