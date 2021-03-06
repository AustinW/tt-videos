
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue2Filters from 'vue2-filters';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('video-upload', require('./components/VideoUpload.vue'));
Vue.component('multiple-video-upload', require('./components/MultipleVideoUpload.vue'));
Vue.component('video-player', require('./components/VideoPlayer.vue'));
Vue.component('video-voting', require('./components/VideoVoting.vue'));
Vue.component('video-comments', require('./components/VideoComments.vue'));
Vue.component('competition-form', require('./components/CompetitionForm.vue'));
Vue.component('routine-video', require('./components/RoutineVideo.vue'));
Vue.component('trampoline-score', require('./components/scores/TrampolineScore.vue'));
Vue.component('dmt-score', require('./components/scores/DoubleMiniScore.vue'));
Vue.component('tumbling-score', require('./components/scores/TumblingScore.vue'));
Vue.component('small-video', require('./components/SmallVideo.vue'));
Vue.component('users', require('./components/Users.vue'));
Vue.component('follow', require('./components/Follow.vue'));
Vue.component('view-athlete-list', require('./components/athletes/view/AthleteList.vue'));
Vue.component('view-athlete', require('./components/athletes/view/AthleteView.vue'));
Vue.component('view-athletes', require('./components/athletes/view/AthletesView.vue'));

Vue.use(require('vue-resource'));
Vue.use(Vue2Filters);
Vue.use(require('@websanova/vue-upload'));
Vue.use(VeeValidate);

import store from './store';

window.Event = new Vue();

Vue.use({
    install: (Vue, options) => {
        Vue.getJson = (response) => {
            return response.json();
        }
    }
});


Vue.http.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;

const app = new Vue({
    el: '#app',
    data: window.Laravel,
    store
});

