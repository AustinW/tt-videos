<?php

namespace App\Providers;

use App\Video;
use Blade;
use App\Observers\VideoObserver;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        Video::observe(VideoObserver::class);

        Blade::directive('routineTitle', function($expression) {
            return "<?php echo ucwords(str_replace('_', ' ', $expression)); ?>";
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
