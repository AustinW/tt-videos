const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sourceMaps()
   .sass('resources/assets/sass/app.scss', 'public/css')
   .copy('node_modules/font-awesome/fonts', 'public/fonts')
   .extract([
       'vue',
       'vuex',
       'vue2-filters',
       'vue-resource',
       'vee-validate',
       'axios',
       'bootstrap-sass',
       'lodash',
       'moment',
       'video.js',
       'jquery',
       '@websanova/vue-upload',
       'mathjs'
   ]);
