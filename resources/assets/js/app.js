
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
var VueResource = require('vue-resource');
import Vue2Filters from 'vue2-filters';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('video-upload', require('./components/VideoUpload.vue'));
Vue.component('video-player', require('./components/VideoPlayer.vue'));
Vue.component('video-voting', require('./components/VideoVoting.vue'));
Vue.component('video-comments', require('./components/VideoComments.vue'));

Vue.use(VueResource);
Vue.use(Vue2Filters);

var getJson = {
    install: (Vue, options) => {
        Vue.getJson = (response) => {
            return response.json();
        }
    }
};
Vue.use(getJson);


Vue.http.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;

const app = new Vue({
    el: '#app',
    data: window.Laravel
});

