import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

Vue.use(Vuex);

import TrampolineScore from './TrampolineScore';
import DoubleMiniScore from './DoubleMiniScore';
import TumblingScore from './TumblingScore';

const store = new Vuex.Store({
    strict: true,

    state: {
        title: null,
        location: null,
        start_date: null,
        end_date: null,

        trampolineRoutines: {

        },
        doubleMiniPasses: {

        },
        tumblingPasses: {
            prelim_pass_1: new TumblingScore(),
            prelim_pass_2: new TumblingScore(),
            final_pass_3: new TumblingScore(),
            final_pass_4: new TumblingScore(),
        }
    },
    actions: {
        LOAD_COMPETITION: (context, competitionId) => {
            Vue.http.get('/competitions/' + competitionId).then(Vue.getJson).then((response) => {
                var competition = response.data;
                console.log('Competition: ', competition);

                store.commit('SET_COMPETITION_FIELDS', { fields: competition });

                if (competition.trampolineScores.data.length) {
                    store.commit('SET_TRAMPOLINE_SCORES', {scores: competition.trampolineScores.data});
                }

                if (competition.doubleMiniScores.data.length) {
                    store.commit('SET_DOUBLE_MINI_SCORES', {scores: competition.doubleMiniScores.data});
                }

                if (competition.tumblingScores.data.length) {
                    store.commit('SET_TUMBLING_SCORES', {scores: competition.tumblingScores.data});
                }
            });
        }
    },
    mutations: {
        SET_COMPETITION_FIELDS: (state, { fields }) => {
            state.title = fields.title;
            state.location = fields.location;
            state.start_date = moment(fields.start_date.date).format('YYYY-MM-DD');
            state.end_date = moment(fields.end_date.date).format('YYYY-MM-DD');
        },

        SET_TITLE: (state, title) => {
            state.title = title;
        },

        SET_LOCATION: (state, location) => {
            state.location = location;
        },

        SET_START_DATE: (state, start_date) => {
            state.start_date = start_date;
        },

        SET_END_DATE: (state, end_date) => {
            state.end_date = end_date;
        },

        SET_SCORES: (state, { scores, scoreObj}) => {
            scores.forEach((score) => {

                let scoreMap = {};

                Object.keys(scoreObj.attrs).forEach((scorePart) => {
                    scoreMap[scorePart] = score[scorePart];
                });

                scoreObj.updateAttributes(scoreMap);
                scoreObj.setVideoId(score.video_id);
                state.tumblingPasses[score.routine] = scoreObj;
            });
        },

        SET_TRAMPOLINE_SCORES: (state, { scores }) => {
            return store.commit('SET_SCORES', {
                scores,
                scoreObj: new TrampolineScore()
            });
        },

        SET_DOUBLE_MINI_SCORES: (state, { scores }) => {
            return store.commit('SET_SCORES', {
                scores,
                scoreObj: new DoubleMiniScore()
            });
        },

        SET_TUMBLING_SCORES: (state, { scores }) => {
            return store.commit('SET_SCORES', {
                scores,
                scoreObj: new TumblingScore()
            });
        },
    },
    getters: {

    },
    modules: {

    }
});

export default store;
