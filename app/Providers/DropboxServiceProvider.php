<?php
namespace App\Providers;
use Illuminate\Support\ServiceProvider;

use Storage;
use League\Flysystem\Filesystem;
use Dropbox\Client as DropboxClient;
use League\Flysystem\Dropbox\DropboxAdapter;

class DropboxServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Storage::extend('dropbox', function($app, $config) {
            $client = new DropboxClient(
                $config['access_token'], $config['app_secret']
            );

            return new Filesystem(new DropboxAdapter($client));

            $client = new Client($config['access_token'], $config['app_secret']);
            $adapter = new DropboxAdapter($client, [$config['prefix']]);

            return new Filesystem($adapter);
        });
    }
    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}