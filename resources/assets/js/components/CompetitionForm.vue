<template>
    <form @submit.prevent="validateBeforeSubmit">

        <!-- Competition title -->
        <div :class="{'form-group': true, 'has-error': errors.has('title')}">
            <label for="title" class="control-label">Competition Title</label>

            <p :class="{'control': true}">
                <input v-validate:title.initial="'required'" id="title" type="text" class="form-control" v-model="title" name="title">
                <span v-show="errors.has('title')" class="help-block">
                    <strong>{{ errors.first('title') }}</strong>
                </span>
            </p>

        </div>

        <!-- Competition Location -->
        <div class="form-group">
            <label for="location" class="control-label">Location</label>

            <input id="location" type="text" class="form-control" v-model="location" name="location">

            <span v-show="false" class="help-block">
                <strong>Error message</strong>
            </span>
        </div>

        <!-- Competition Start Date -->
        <div :class="{'form-group': true, 'has-error': errors.has('start_date')}">
            <label for="start_date" class="control-label">Start Date</label>

            <p :class="{'control': true}">
                <input v-validate:start_date.initial="'date_format:YYYY-MM-DD'" id="start_date" type="date" class="form-control" v-model="start_date" name="start_date">
                <span v-show="errors.has('start_date')" class="help-block">
                    <strong>{{ errors.first('start_date') }}</strong>
                </span>
            </p>
        </div>

        <!-- Competition End Date -->
        <div :class="{'form-group': true, 'has-error': errors.has('end_date')}">
            <label for="end_date" class="control-label">Start Date</label>

            <p :class="{'control': true}">
                <input v-validate:end_date.initial="'date_format:YYYY-MM-DD'" id="end_date" type="date" class="form-control" v-model="end_date" name="end_date">
                <span v-show="errors.has('end_date')" class="help-block">
                    <strong>{{ errors.first('end_date') }}</strong>
                </span>
            </p>
        </div>

        <!-- Event selection -->
        <div class="event-selection">
            <div class="form-group">
                <h4>Events</h4>

                <label>
                    <input id="trampoline" type="checkbox" name="trampoline" v-model="trampoline">
                    Trampoline
                    <button v-show="trampoline" @click="trampolineRoutines.showSemiFinal = !trampolineRoutines.showSemiFinal" type="button" class="btn btn-xs btn-default">
                        <i v-show="trampolineRoutines.showSemiFinal" class="glyphicon glyphicon-ok"></i> Semi-Finals
                    </button>
                    <button v-show="trampoline" @click="trampolineRoutines.showFinal = !trampolineRoutines.showFinal" type="button" class="btn btn-xs btn-default">
                        <i v-show="trampolineRoutines.showFinal" class="glyphicon glyphicon-ok"></i> Finals
                    </button>
                </label>

                <div v-show="trampoline" class="row">
                    <div :class="'col-md-' + trampColSize">
                        <trampoline-score title="Compulsory" routine-key="prelim_compulsory"></trampoline-score>
                    </div>
                    <div :class="'col-md-' + trampColSize">
                        <trampoline-score title="Prelim Optional" routine-key="prelim_optional"></trampoline-score>
                    </div>
                    <div :class="'col-md-' + trampColSize" v-show="trampolineRoutines.showSemiFinal">
                        <trampoline-score title="Semi-Final" routine-key="semi_final_optional"></trampoline-score>
                    </div>
                    <div :class="'col-md-' + trampColSize" v-show="trampolineRoutines.showFinal">
                        <trampoline-score title="Final Optional" routine-key="final_optional"></trampoline-score>
                    </div>
                </div>

                <label>
                    <input id="dmt" type="checkbox" name="dmt" v-model="dmt">
                    Double Mini
                    <button v-show="dmt" @click="doubleMiniPasses.showFinal = !doubleMiniPasses.showFinal" type="button" class="btn btn-xs btn-default">
                        <i v-show="doubleMiniPasses.showFinal" class="glyphicon glyphicon-ok"></i> Finals
                    </button>
                </label>

                <div v-show="dmt" class="row">
                    <div :class="'col-md-' + dmtColSize">
                        <dmt-score title="Pass 1" routine-key="prelim_pass_1"></dmt-score>
                    </div>
                    <div :class="'col-md-' + dmtColSize">
                        <dmt-score title="Pass 2" routine-key="prelim_pass_2"></dmt-score>
                    </div>
                    <div :class="'col-md-' + dmtColSize" v-show="doubleMiniPasses.showFinal">
                        <dmt-score title="Pass 3" routine-key="final_pass_3"></dmt-score>
                    </div>
                    <div :class="'col-md-' + dmtColSize" v-show="doubleMiniPasses.showFinal">
                        <dmt-score title="Pass 4" routine-key="final_pass_4"></dmt-score>
                    </div>
                </div>

                <label>
                    <input id="tumbling" type="checkbox" name="tumbling" v-model="tumbling">
                    Tumbling
                    <button v-show="tumbling" @click="tumblingPasses.showFinal = !tumblingPasses.showFinal" type="button" class="btn btn-xs btn-default">
                        <i v-show="tumblingPasses.showFinal" class="glyphicon glyphicon-ok"></i> Finals
                    </button>
                </label>

                <div v-show="tumbling" class="row">
                    <div :class="'col-md-' + tumblingColSize">
                        <tumbling-score title="Pass 1" routine-key="prelim_pass_1"></tumbling-score>
                    </div>
                    <div :class="'col-md-' + tumblingColSize">
                        <tumbling-score title="Pass 2" routine-key="prelim_pass_2"></tumbling-score>
                    </div>
                    <div :class="'col-md-' + tumblingColSize" v-show="tumblingPasses.showFinal">
                        <tumbling-score title="Pass 3" routine-key="final_pass_3"></tumbling-score>
                    </div>
                    <div :class="'col-md-' + tumblingColSize" v-show="tumblingPasses.showFinal">
                        <tumbling-score title="Pass 4" routine-key="final_pass_4"></tumbling-score>
                    </div>
                </div>
            </div>
        </div>

        <button type="submit" class="btn btn-primary" :disabled="errors.any() || !eventsValid">Submit Competition</button>
    </form>
</template>

<script>
    import moment from 'moment';
    import TrampolineScore from '../TrampolineScore';
    import DoubleMiniScore from '../DoubleMiniScore';
    import TumblingScore from '../TumblingScore';

    export default {
        data() {
            return {
                trampoline: false,
                dmt: false,
                tumbling: false,

                eventValidations: {
                    trampoline: false,
                    dmt: false,
                    tumbling: false,
                },

                trampolineRoutines: {
                    showSemiFinal: false,
                    showFinal: false,
                },
                doubleMiniPasses: {
                    showFinal: false,
                },
                tumblingPasses: {
                    showFinal: false,
                },
            };
        },

        props: {
            competitionId: null
        },

        mounted() {
            if (this.competitionId) {
                this.$store.dispatch('LOAD_COMPETITION', this.competitionId).then((response) => {
                    this.trampoline = this.$store.getters.eventChecked('trampolineRoutines');
                    this.dmt = this.$store.getters.eventChecked('doubleMiniPasses');
                    this.tumbling = this.$store.getters.eventChecked('tumblingPasses');
                });
            }
        },

        computed: {
            trampolineRoutines() {
                return this.$store.state.trampolineRoutines
            },
            doubleMiniPasses() {
                return this.$store.state.doubleMiniPasses
            },
            tumblingPasses() {
                return this.$store.state.tumblingPasses
            },
            title: {
                get() { return this.$store.state.title; },
                set(value) { this.$store.commit('SET_TITLE', value) }
            },
            location: {
                get() { return this.$store.state.location; },
                set(value) { this.$store.commit('SET_LOCATION', value) }
            },
            start_date: {
                get() { return this.$store.state.start_date; },
                set(value) { this.$store.commit('SET_START_DATE', value) }
            },
            end_date: {
                get() { return this.$store.state.end_date; },
                set(value) { this.$store.commit('SET_END_DATE', value) }
            },

            eventsValid() {
                return (
                    this.$store.getters.eventChecked('trampolineRoutines') ||
                    this.$store.getters.eventChecked('doubleMiniPasses') ||
                    this.$store.getters.eventChecked('tumblingPasses')
                );
            },

            trampColSize() {
                if (this.trampolineRoutines.showFinal && this.trampolineRoutines.showSemiFinal) {
                    return '3';
                } else if (this.trampolineRoutines.showFinal || this.trampolineRoutines.showSemiFinal) {
                    return '4';
                } else {
                    return '6';
                }
            },
            dmtColSize() {
                return (this.doubleMiniPasses.showFinal) ? '3' : '6';
            },
            tumblingColSize() {
                return (this.tumblingPasses.showFinal) ? '3' : '6';
            },
        },

        methods: {
            submitCompetition() {

                let data = this.$store.getters.allData;

                let xhr = (this.$store.state.competition_id)
                    ? this.$http.put('/competitions/' + this.$store.state.competition_id, data)
                    : this.$http.post('/competitions', data);

                xhr.then(Vue.getJson).then((response) => {
                    window.location = '/competitions/' + response.competition.id;
                }).catch((err) => {
                    console.error(err);
                    alert('There was an error submitting the scores.');
                });
            },

            validateBeforeSubmit() {
                this.$validator.validateAll().then(() => {
                    this.submitCompetition();
                }).catch((err) => {
                    console.error(err);
                    alert('Please correct the errors.');
                });
            },
        },
    }

    import { Validator } from 'vee-validate';
    const dictionary = {
        en: {
            attributes: {
                title: 'Competition Title',
                start_date: 'Start Date',
                end_date: 'End Date',
            }
        },
    };

    Validator.updateDictionary(dictionary);
    Validator.installDateTimeValidators(moment);
</script>