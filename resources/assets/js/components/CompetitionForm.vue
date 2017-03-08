<template>
    <form>

        <!-- Competition title -->
        <div class="form-group">
            <label for="title" class="control-label">Competition Title</label>

            <input id="title" type="text" class="form-control" v-model="title">

            <span v-show="false" class="help-block">
                <strong>Error message</strong>
            </span>
        </div>

        <!-- Competition Location -->
        <div class="form-group">
            <label for="location" class="control-label">Location</label>

            <input id="location" type="text" class="form-control" v-model="location">

            <span v-show="false" class="help-block">
                <strong>Error message</strong>
            </span>
        </div>

        <!-- Competition Start Date -->
        <div class="form-group">
            <label for="start_date" class="control-label">Start Date</label>

            <input id="start_date" type="date" class="form-control" v-model="start_date">

            <span v-show="false" class="help-block">
                <strong>Error message</strong>
            </span>
        </div>

        <!-- Competition End Date -->
        <div class="form-group">
            <label for="end_date" class="control-label">End Date</label>

            <input id="end_date" type="date" class="form-control" v-model="end_date">

            <span v-show="false" class="help-block">
                <strong>Error message</strong>
            </span>
        </div>

        <!-- Event selection -->
        <div class="event-selection">
            <div class="form-group">
                <h4>Events</h4>

                <label>
                    <input id="trampoline" type="checkbox" name="trampoline" v-model="trampoline">
                    Trampoline
                </label>

                <div v-show="trampoline" class="row">
                    <div class="col-md-3">
                        <trampoline-score title="Compulsory" routine-key="prelim_compulsory" @scorechanged="updateAllScores"></trampoline-score>
                    </div>
                    <div class="col-md-3">
                        <trampoline-score title="Prelim Optional" routine-key="prelim_optional" @scorechanged="updateAllScores"></trampoline-score>
                    </div>
                    <div class="col-md-3">
                        <trampoline-score title="Semi-Final" routine-key="semi_final_optional" @scorechanged="updateAllScores"></trampoline-score>
                    </div>
                    <div class="col-md-3">
                        <trampoline-score title="Final Optional" routine-key="final_optional" @scorechanged="updateAllScores"></trampoline-score>
                    </div>
                </div>

                <label>
                    <input id="dmt" type="checkbox" name="dmt" v-model="dmt">
                    Double Mini
                </label>

                <div v-show="dmt" class="row">
                    <div class="col-md-3">
                        <dmt-score title="Pass 1" routine-key="prelim_pass_1"></dmt-score>
                    </div>
                    <div class="col-md-3">
                        <dmt-score title="Pass 2" routine-key="prelim_pass_2"></dmt-score>
                    </div>
                    <div class="col-md-3">
                        <dmt-score title="Pass 3" routine-key="prelim_pass_3"></dmt-score>
                    </div>
                    <div class="col-md-3">
                        <dmt-score title="Pass 4" routine-key="prelim_pass_4"></dmt-score>
                    </div>
                </div>

                <label>
                    <input id="tumbling" type="checkbox" name="tumbling" v-model="tumbling">
                    Tumbling
                </label>

                <div v-show="tumbling" class="row">
                    <div class="col-md-3">
                        <tumbling-score title="Pass 1" routine-key="prelim_pass_1"></tumbling-score>
                    </div>
                    <div class="col-md-3">
                        <tumbling-score title="Pass 2" routine-key="prelim_pass_2"></tumbling-score>
                    </div>
                    <div class="col-md-3">
                        <tumbling-score title="Pass 3" routine-key="prelim_pass_3"></tumbling-score>
                    </div>
                    <div class="col-md-3">
                        <tumbling-score title="Pass 4" routine-key="prelim_pass_4"></tumbling-score>
                    </div>
                </div>


            </div>
        </div>

        <button type="submit" class="btn btn-primary" @click.prevent="submitCompetition">Submit Competition</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                title: null,
                location: null,
                start_date: null,
                end_date: null,

                trampoline: true,
                dmt: false,
                tumbling: false,

                trampolineRoutines: {
                    showSemiFinal: false,
                    showFinal: false,
                },
                doubleMiniPasses: {
                    showFinal: false,
                    showTeamFinal: false,
                },
                tumblingPasses: {
                    showFinal: false,
                    showTeamFinal: false,
                },
            };
        },
        props: {

        },

        methods: {
            updateAllScores(score) {
                let disciplineMap = {
                    trampoline: 'trampolineRoutines',
                    dmt: 'doubleMiniPasses',
                    tumbling: 'tumblingPasses',
                }

                let discipline = disciplineMap[score.discipline];

                // this.trampolineRoutines['prelim_compulsory'] = {execution: ..., difficulty: ..., etc.}
                this[discipline][score.routineKey] = score.components;
            },
            submitCompetition() {
                this.$http.post('/competitions', {
                    title: this.title,
                    location: this.location,
                    start_date: this.start_date,
                    end_date: this.end_date,

                    trampoline: this.trampoline,
                    dmt: this.dmt,
                    tumbling: this.tumbling,

                    trampolineRoutines: this.trampolineRoutines,
                    doubleMiniPasses: this.doubleMiniPasses,
                    tumblingPasses: this.tumblingPasses,
                }).then(Vue.getJson).then((response) => {
                    console.log(response);
                });
            },
        },
    }
</script>