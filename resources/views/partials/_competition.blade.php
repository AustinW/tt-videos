<div class="row">
    <div class="col-md-12">
        {{ $item->location }}
    
        <div>
            @if ($item->trampolineScores->count())
                <span class="label discipline-tra">Trampoline</span>
            @endif
            @if ($item->doubleMiniScores->count())
                <span class="label discipline-dmt">Double Mini</span>
            @endif
            @if ($item->tumblingScores->count())
                <span class="label discipline-tum">Tumbling</span>
            @endif
        </div>
    
        <div class="row">
            <div class="col-sm-6">
                <p class="muted">
                    <span>{{ $item->dateSpan() }}</span>
                </p>
            </div>
        </div>
    </div>
</div>