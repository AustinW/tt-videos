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
                        <trampoline-score title="Compulsory" routine-key="prelim_compulsory" @scorechanged="updateAllScores"></trampoline-score>
                    </div>
                    <div :class="'col-md-' + trampColSize">
                        <trampoline-score title="Prelim Optional" routine-key="prelim_optional" @scorechanged="updateAllScores"></trampoline-score>
                    </div>
                    <div :class="'col-md-' + trampColSize" v-show="trampolineRoutines.showSemiFinal">
                        <trampoline-score title="Semi-Final" routine-key="semi_final_optional" @scorechanged="updateAllScores"></trampoline-score>
                    </div>
                    <div :class="'col-md-' + trampColSize" v-show="trampolineRoutines.showFinal">
                        <trampoline-score title="Final Optional" routine-key="final_optional" @scorechanged="updateAllScores"></trampoline-score>
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
                        <dmt-score title="Pass 1" routine-key="prelim_pass_1" @scorechanged="updateAllScores"></dmt-score>
                    </div>
                    <div :class="'col-md-' + dmtColSize">
                        <dmt-score title="Pass 2" routine-key="prelim_pass_2" @scorechanged="updateAllScores"></dmt-score>
                    </div>
                    <div :class="'col-md-' + dmtColSize" v-show="doubleMiniPasses.showFinal">
                        <dmt-score title="Pass 3" routine-key="prelim_pass_3" @scorechanged="updateAllScores"></dmt-score>
                    </div>
                    <div :class="'col-md-' + dmtColSize" v-show="doubleMiniPasses.showFinal">
                        <dmt-score title="Pass 4" routine-key="prelim_pass_4" @scorechanged="updateAllScores"></dmt-score>
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
                        <tumbling-score title="Pass 1" routine-key="prelim_pass_1" @scorechanged="updateAllScores"></tumbling-score>
                    </div>
                    <div :class="'col-md-' + tumblingColSize">
                        <tumbling-score title="Pass 2" routine-key="prelim_pass_2" @scorechanged="updateAllScores"></tumbling-score>
                    </div>
                    <div :class="'col-md-' + tumblingColSize" v-show="tumblingPasses.showFinal">
                        <tumbling-score title="Pass 3" routine-key="prelim_pass_3" @scorechanged="updateAllScores"></tumbling-score>
                    </div>
                    <div :class="'col-md-' + tumblingColSize" v-show="tumblingPasses.showFinal">
                        <tumbling-score title="Pass 4" routine-key="prelim_pass_4" @scorechanged="updateAllScores"></tumbling-score>
                    </div>
                </div>
            </div>
        </div>

        <button type="submit" class="btn btn-primary" :disabled="errors.any() || eventsInvalid()">Submit Competition</button>
    </form>
</template>

<script>
    import moment from 'moment';

    const disciplineMap = {
        trampoline: 'trampolineRoutines',
        dmt: 'doubleMiniPasses',
        tumbling: 'tumblingPasses',
    }

    export default {
        data() {
            return {
                title: null,
                location: null,
                start_date: null,
                end_date: null,

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

        mounted() {
        },

        computed: {
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
            eventsInvalid() {
                return (!this.eventValidations.trampoline && !this.eventValidations.dmt && !this.eventValidations.tumbling);
            },
            updateAllScores($event) {

                let score = $event.score;
                let discipline = disciplineMap[score.discipline];

                // this.trampolineRoutines['prelim_compulsory'] = {execution: ..., difficulty: ..., etc.}
                this[discipline][$event.routineKey] = score;

                this.checkEvents(score.discipline, this[discipline]);
            },
            submitCompetition() {
                let attrKeys = ['title', 'location', 'start_date', 'end_date', 'trampoline', 'dmt', 'tumbling', 'trampolineRoutines', 'doubleMiniPasses', 'tumblingPasses'];
                let attrs = {};

                attrKeys.forEach((key) => {
                    attrs[key] = this[key];
                });

                this.$http.post('/competitions', attrs).then(Vue.getJson).then((response) => {
                    window.location = '/competitions';
                });
            },

            checkEvents(event, scores) {
                if (!this[event]) return false;

                if (event === 'trampoline') {
                    var routines = ['prelim_compulsory', 'prelim_optional', 'semi_final_optional', 'final_optional'];
                } else {
                    var routines = ['prelim_pass_1', 'prelim_pass_2', 'final_pass_3', 'final_pass_4'];
                }

                for (let routine of routines) {
                    if (scores.hasOwnProperty(routine) && scores[routine].hasScore()) {
                        this.eventValidations[event] = true;
                        return;
                    }
                }

                this.eventValidations[event] = false;
            },
            validateBeforeSubmit() {
                this.$validator.validateAll().then(() => {
                    this.submitCompetition();
                }).catch(() => {
                    alert('Please correct the errors.');
                });
            }
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