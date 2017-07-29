<div class="row video-result">
    <div class="col-sm-3">
        <a href="/videos/{{ $video->unique_id }}">
            <img src="{{ $video->thumbnailUrl() }}" alt="{{ $video->title }}" class="thumbnail img-responsive">
        </a>
    </div>
    <div class="col-sm-9">
        <a href="/videos/{{ $video->unique_id }}">{{ $video->title }}</a>

        @if ($video->description)
            <p>{{ $video->description }}</p>
        @else
            <p class="muted">No description.</p>
        @endif

        <ul class="list-inline">
            <li><a href="/user/{{ $video->user->id }}">{{ $video->user->name }}</a></li>
            <li>{{ $video->created_at->diffForHumans() }}</li>
            <li>{{ $video->viewCount() }} {{ str_plural('view', $video->viewCount()) }}</li>
        </ul>
    </div>
</div>