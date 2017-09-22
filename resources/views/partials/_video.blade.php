<div class="media">
    <div class="media-left">
        <a href="{{ route('videos.show', $item->unique_id) }}">
            <img class="media-object img-responsive thumbnail" style="max-width:150px;max-height:150px" src="{{ $item->thumbnailUrl() }}" alt="{{ $item->title }}">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">{{ $item->title }}</h4>
        {{ $item->description }}
    </div>
</div>