import Vue from 'vue';
import Vuex from 'vuex';

import moment from 'moment';

import TrampolineScore from './TrampolineScore';
import DoubleMiniScore from './DoubleMiniScore';
import TumblingScore from './TumblingScore';

Vue.use(Vuex);

const store = new Vuex.Store({

    strict: false,

    /*
     |--------------------------------------------------------------------------
     | State
     |--------------------------------------------------------------------------
     |
     | Single State Tree
     |
     | Vuex uses a single state tree - that is, this single object contains all
     | your application level state and serves as the "single source of truth".
     | This also means usually you will have only one store for each application.
     | A single state tree makes it straightforward to locate a specific piece of
     | state, and allows us to easily take snapshots of the current app state for
     | debugging purposes.
     |
     */
    state: {
        competition_id: null,

        title: null,
        location: null,
        start_date: null,
        end_date: null,

        trampolineRoutines: {
            prelim_compulsory: new TrampolineScore(),
            prelim_optional: new TrampolineScore(),
            semi_final_optional: new TrampolineScore(),
            final_optional: new TrampolineScore(),
        },
        doubleMiniPasses: {
            prelim_pass_1: new DoubleMiniScore(),
            prelim_pass_2: new DoubleMiniScore(),
            final_pass_3: new DoubleMiniScore(),
            final_pass_4: new DoubleMiniScore(),
        },
        tumblingPasses: {
            prelim_pass_1: new TumblingScore(),
            prelim_pass_2: new TumblingScore(),
            final_pass_3: new TumblingScore(),
            final_pass_4: new TumblingScore(),
        },


        // SHOULD BE NAMESPACED
        athleteView: {
            componentTitle: null,
            shownAthletes: null,
            allAthletes:null,
        }
    },

    /*
     |--------------------------------------------------------------------------
     | Actions
     |--------------------------------------------------------------------------
     |
     | Actions are similar to mutations, the difference being that:
     |
     | * Instead of mutating the state, actions commit mutations.
     | * Actions can contain arbitrary asynchronous operations.
     |
     */
    actions: {
        LOAD_COMPETITION: (context, competitionId) => {
            return Vue.http.get('/competitions/' + competitionId).then(Vue.getJson).then((response) => {
                var competition = response.data;
                console.log('Competition: ', competition);

                store.commit('SET_COMPETITION_ID', competition.id);
                store.commit('SET_COMPETITION_FIELDS', { fields: competition });

                if (competition.trampolineScores.data.length) {
                    store.commit('SET_SCORES', {
                        scores: competition.trampolineScores.data,
                        scoreClass: TrampolineScore,
                        stateIndex: 'trampolineRoutines',
                    });
                }

                if (competition.doubleMiniScores.data.length) {
                    store.commit('SET_SCORES', {
                        scores: competition.doubleMiniScores.data,
                        scoreClass: DoubleMiniScore,
                        stateIndex: 'doubleMiniPasses',
                    });
                }

                if (competition.tumblingScores.data.length) {
                    store.commit('SET_SCORES', {
                        scores: competition.tumblingScores.data,
                        scoreClass: TumblingScore,
                        stateIndex: 'tumblingPasses',
                    });
                }
            });
        },

        ATHLETE_VIEW_LOAD_ATHLETES: (context) => {
            return Vue.http.get('/api/athletes').then(Vue.getJson).then((response) => {
                store.commit('ATHLETE_VIEW_SET_ATHLETES', response.athletes);
            });
        }
    },

    /*
     |--------------------------------------------------------------------------
     | Mutations
     |--------------------------------------------------------------------------
     |
     | The only way to actually change state in a Vuex store is by committing
     | a mutation. Vuex mutations are very similar to events: each mutation has
     | a string type and a handler. The handler function is where we perform
     | actual state modifications, and it will receive the state as the first
     | argument.
     |
     */
    mutations: {
        SET_COMPETITION_ID: (state, id) => {
            state.competition_id = id;
        },

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

        SET_SCORES: (state, { scores, scoreClass, stateIndex}) => {
            scores.forEach((score) => {
                let scoreInstance = new scoreClass();
                let scoreMap = {};

                Object.keys(scoreInstance.attrs).forEach((scorePart) => {
                    scoreMap[scorePart] = score[scorePart];
                });

                scoreInstance.updateAttributes(scoreMap);
                scoreInstance.setId(score.id);
                scoreInstance.setVideoId(score.video_id);

                if (score.video.data.hasOwnProperty('title')) {
                    scoreInstance.setVideoFilename(score.video.data.title);
                }

                state[stateIndex][score.routine] = scoreInstance;
            });
        },

        SET_ROUTINE_PROPERTY: (state, { discipline, routineKey, component, value }) => {
            state[discipline][routineKey].attrs[component].value = value;

            if (component !== 'total_score') {
                state[discipline][routineKey].computeTotal();
            } else {
                state[discipline][routineKey].setTotal(value);
            }
        },

        REMOVE_ATTACHMENT: (state, { routines, routineKey }) => {
            state[routines][routineKey].setVideoId(null);
            state[routines][routineKey].setVideoFilename(null);

        },

        ATTACH_VIDEO: (state, { routines, routineKey, video }) => {
            state[routines][routineKey].setVideoId(video.id);
            state[routines][routineKey].setVideoFilename(video.title);

        },

        ATHLETE_VIEW_SET_ATHLETES: (state, athletes) => {
            state.athleteView.allAthletes = athletes;
        },

        ATHLETE_VIEW_CHANGE_ATHLETE: (state, shown) => {
            var tempListOfAthletes = state.athleteView.allAthletes.filter((athlete) => {
                return shown[athlete.id];
            });

            state.athleteView.shownAthletes = tempListOfAthletes;
        },
    },

    /*
     |--------------------------------------------------------------------------
     | Getters
     |--------------------------------------------------------------------------
     |
     | Sometimes we may need to compute derived state based on store state, for
     | example filtering through a list of items and counting them.
     |
     */
    getters: {
        eventChecked: (state, getters) => (discipline) => {
            let checked = false;
            Object.keys(state[discipline]).forEach((routineKey) => {
                if (!checked && parseInt(state[discipline][routineKey].attrs.total_score.value) > 0) {
                    checked = true;
                }
            });

            return checked;
        },

        validRoutines: (state, getters) => (discipline) => {
            let valid = null;

            Object.keys(state[discipline]).forEach((routineKey) => {
                if (parseInt(state[discipline][routineKey].attrs.total_score.value) > 0) {
                    if (!valid) {
                        valid = {};
                    }
                    valid[routineKey] = state[discipline][routineKey];
                }
            });

            return valid;
        },

        allData: (state, getters) => {
            return {
                competition_id: state.competition_id,
                title: state.title,
                location: state.location,
                start_date: state.start_date,
                end_date: state.end_date,

                trampoline: getters.eventChecked('trampolineRoutines'),
                dmt: getters.eventChecked('doubleMiniPasses'),
                tumbling: getters.eventChecked('tumblingPasses'),

                trampolineRoutines: getters.validRoutines('trampolineRoutines'),
                doubleMiniPasses: getters.validRoutines('doubleMiniPasses'),
                tumblingPasses: getters.validRoutines('tumblingPasses'),
            };
        }
    },

    /*
     |--------------------------------------------------------------------------
     | Modules
     |--------------------------------------------------------------------------
     |
     | Due to using a single state tree, all state of our application is
     | contained inside one big object. However, as our application grows in
     | scale, the store can get really bloated.
     |
     | To help with that, Vuex allows us to divide our store into modules.
     | Each module can contain its own state, mutations, actions, getters, and
     | even nested modules - it's fractal all the way down.
     |
     */
    modules: {

    }
});

export default store;
