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
                        <div class="form-group score-tile">
                            <h5>Compulsory</h5>

                            <label for="trampoline_prelim_compulsory_execution">Execution</label>
                            <input @change="computeScore('prelim_compulsory', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.prelim_compulsory.execution" name="trampoline_prelim_compulsory_execution">

                            <label for="trampoline_prelim_compulsory_tof">Time of Flight</label>
                            <input @change="computeScore('prelim_compulsory', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.prelim_compulsory.tof" name="trampoline_prelim_compulsory_tof">

                            <label for="trampoline_prelim_compulsory_hd">Horiz. Displacement</label>
                            <input @change="computeScore('prelim_compulsory', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.prelim_compulsory.hd" name="trampoline_prelim_compulsory_hd">

                            <label for="trampoline_prelim_compulsory_difficulty">Difficulty</label>
                            <input @change="computeScore('prelim_compulsory', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.prelim_compulsory.difficulty" name="trampoline_prelim_compulsory_difficulty">

                            <label for="trampoline_prelim_compulsory_nd">ND</label>
                            <input @change="computeScore('prelim_compulsory', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.prelim_compulsory.nd" name="trampoline_prelim_compulsory_nd">

                            <label for="trampoline_prelim_compulsory_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model.number="trampolineRoutines.prelim_compulsory.total_score" name="trampoline_prelim_compulsory_total_score">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Optional</h5>

                            <label for="trampoline_prelim_optional_execution">Execution</label>
                            <input @change="computeScore('prelim_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.prelim_optional.execution" name="trampoline_prelim_optional_execution">

                            <label for="trampoline_prelim_optional_tof">Time of Flight</label>
                            <input @change="computeScore('prelim_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.prelim_optional.tof" name="trampoline_prelim_optional_tof">

                            <label for="trampoline_prelim_optional_hd">Horiz. Displacement</label>
                            <input @change="computeScore('prelim_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.prelim_optional.hd" name="trampoline_prelim_optional_hd">

                            <label for="trampoline_prelim_optional_difficulty">Difficulty</label>
                            <input @change="computeScore('prelim_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.prelim_optional.difficulty" name="trampoline_prelim_optional_difficulty">

                            <label for="trampoline_prelim_optional_nd">ND</label>
                            <input @change="computeScore('prelim_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.prelim_optional.nd" name="trampoline_prelim_optional_nd">

                            <label for="trampoline_prelim_optional_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model.number="trampolineRoutines.prelim_optional.total_score" name="trampoline_prelim_optional_total_score">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Semi-Final Optional</h5>

                            <label for="trampoline_semi_final_optional_execution">Execution</label>
                            <input @change="computeScore('semi_final_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.semi_final_optional.execution" name="trampoline_semi_final_optional_execution">

                            <label for="trampoline_semi_final_optional_tof">Time of Flight</label>
                            <input @change="computeScore('semi_final_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.semi_final_optional.tof" name="trampoline_semi_final_optional_tof">

                            <label for="trampoline_semi_final_optional_hd">Horiz. Displacement</label>
                            <input @change="computeScore('semi_final_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.semi_final_optional.hd" name="trampoline_semi_final_optional_hd">

                            <label for="trampoline_semi_final_optional_difficulty">Difficulty</label>
                            <input @change="computeScore('semi_final_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.semi_final_optional.difficulty" name="trampoline_semi_final_optional_difficulty">

                            <label for="trampoline_semi_final_optional_nd">ND</label>
                            <input @change="computeScore('semi_final_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.semi_final_optional.nd" name="trampoline_semi_final_optional_nd">

                            <label for="trampoline_semi_final_optional_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model.number="trampolineRoutines.semi_final_optional.total_score" name="trampoline_semi_final_optional_total_score">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Final Optional</h5>

                            <label for="trampoline_final_optional_execution">Execution</label>
                            <input @change="computeScore('final_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.final_optional.execution" name="trampoline_final_optional_execution">

                            <label for="trampoline_final_optional_tof">Time of Flight</label>
                            <input @change="computeScore('final_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.final_optional.tof" name="trampoline_final_optional_tof">

                            <label for="trampoline_final_optional_hd">Horiz. Displacement</label>
                            <input @change="computeScore('final_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.final_optional.hd" name="trampoline_final_optional_hd">

                            <label for="trampoline_final_optional_difficulty">Difficulty</label>
                            <input @change="computeScore('final_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.final_optional.difficulty" name="trampoline_final_optional_difficulty">

                            <label for="trampoline_final_optional_nd">ND</label>
                            <input @change="computeScore('final_optional', 'trampolineRoutines')" type="number" class="form-control" v-model.number="trampolineRoutines.final_optional.nd" name="trampoline_final_optional_nd">

                            <label for="trampoline_final_optional_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model.number="trampolineRoutines.final_optional.total_score" name="trampoline_final_optional_total_score">
                        </div>
                    </div>
                </div>

                <label>
                    <input id="dmt" type="checkbox" name="dmt" v-model="dmt">
                    Double Mini
                </label>

                <div v-show="dmt" class="row">
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Pass 1</h5>

                            <label for="dmt_pass_1_execution">Execution</label>
                            <input @change="computeScore('prelim_pass_1', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.prelim_pass_1.execution" name="dmt_pass_1_execution">

                            <label for="dmt_pass_1_nd">ND</label>
                            <input @change="computeScore('prelim_pass_1', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.prelim_pass_1.nd" name="dmt_pass_1_nd">

                            <label for="dmt_pass_1_difficulty">Difficulty</label>
                            <input @change="computeScore('prelim_pass_1', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.prelim_pass_1.difficulty" name="dmt_pass_1_difficulty">

                            <label for="dmt_pass_1_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model="doubleMiniPasses.prelim_pass_1.total_score" name="dmt_pass_1_total_score">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Pass 2</h5>

                            <label for="dmt_pass_2_execution">Execution</label>
                            <input @change="computeScore('prelim_pass_2', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.prelim_pass_2.execution" name="dmt_pass_2_execution">

                            <label for="dmt_pass_2_nd">ND</label>
                            <input @change="computeScore('prelim_pass_2', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.prelim_pass_2.nd" name="dmt_pass_2_nd">

                            <label for="dmt_pass_2_difficulty">Difficulty</label>
                            <input @change="computeScore('prelim_pass_2', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.prelim_pass_2.difficulty" name="dmt_pass_2_difficulty">

                            <label for="dmt_pass_2_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model="doubleMiniPasses.prelim_pass_2.total_score" name="dmt_pass_2_total_score">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Pass 3</h5>

                            <label for="dmt_pass_3_execution">Execution</label>
                            <input @change="computeScore('final_pass_3', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.final_pass_3.execution" name="dmt_pass_3_execution">

                            <label for="dmt_pass_3_nd">ND</label>
                            <input @change="computeScore('final_pass_3', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.final_pass_3.nd" name="dmt_pass_3_nd">

                            <label for="dmt_pass_3_difficulty">Difficulty</label>
                            <input @change="computeScore('final_pass_3', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.final_pass_3.difficulty" name="dmt_pass_3_difficulty">

                            <label for="dmt_pass_3_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model="doubleMiniPasses.final_pass_3.total_score" name="dmt_pass_3_total_score">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Pass 4</h5>

                            <label for="dmt_pass_4_execution">Execution</label>
                            <input @change="computeScore('final_pass_4', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.final_pass_4.execution" name="dmt_pass_4_execution">

                            <label for="dmt_pass_4_nd">ND</label>
                            <input @change="computeScore('final_pass_4', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.final_pass_4.nd" name="dmt_pass_4_nd">

                            <label for="dmt_pass_4_difficulty">Difficulty</label>
                            <input @change="computeScore('final_pass_4', 'doubleMiniPasses')" type="number" class="form-control" v-model="doubleMiniPasses.final_pass_4.difficulty" name="dmt_pass_4_difficulty">

                            <label for="dmt_pass_4_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model="doubleMiniPasses.final_pass_4.total_score" name="dmt_pass_4_total_score">
                        </div>
                    </div>
                </div>

                <label>
                    <input id="tumbling" type="checkbox" name="tumbling" v-model="tumbling">
                    Tumbling
                </label>

                <div v-show="tumbling" class="row">
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Pass 1</h5>

                            <label for="tumbling_pass_1_execution">Execution</label>
                            <input @change="computeScore('prelim_pass_1', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.prelim_pass_1.execution" name="tumbling_pass_1_execution">

                            <label for="tumbling_pass_1_nd">ND</label>
                            <input @change="computeScore('prelim_pass_1', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.prelim_pass_1.nd" name="tumbling_pass_1_nd">

                            <label for="tumbling_pass_1_difficulty">Difficulty</label>
                            <input @change="computeScore('prelim_pass_1', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.prelim_pass_1.difficulty" name="tumbling_pass_1_difficulty">

                            <label for="tumbling_pass_1_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model="tumblingPasses.prelim_pass_1.total_score" name="tumbling_pass_1_total_score">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Pass 2</h5>

                            <label for="tumbling_pass_2_execution">Execution</label>
                            <input @change="computeScore('prelim_pass_1', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.prelim_pass_2.execution" name="tumbling_pass_2_execution">

                            <label for="tumbling_pass_2_nd">ND</label>
                            <input @change="computeScore('prelim_pass_1', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.prelim_pass_2.nd" name="tumbling_pass_2_nd">

                            <label for="tumbling_pass_2_difficulty">Difficulty</label>
                            <input @change="computeScore('prelim_pass_1', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.prelim_pass_2.difficulty" name="tumbling_pass_2_difficulty">

                            <label for="tumbling_pass_2_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model="tumblingPasses.prelim_pass_2.total_score" name="tumbling_pass_2_total_score">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Pass 3</h5>

                            <label for="tumbling_pass_3_execution">Execution</label>
                            <input @change="computeScore('final_pass_3', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.final_pass_3.execution" name="tumbling_pass_3_execution">

                            <label for="tumbling_pass_3_nd">ND</label>
                            <input @change="computeScore('final_pass_3', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.final_pass_3.nd" name="tumbling_pass_3_nd">

                            <label for="tumbling_pass_3_difficulty">Difficulty</label>
                            <input @change="computeScore('final_pass_3', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.final_pass_3.difficulty" name="tumbling_pass_3_difficulty">

                            <label for="tumbling_pass_3_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model="tumblingPasses.final_pass_3.total_score" name="tumbling_pass_3_total_score">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group score-tile">
                            <h5>Pass 4</h5>

                            <label for="tumbling_pass_4_execution">Execution</label>
                            <input @change="computeScore('final_pass_4', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.final_pass_4.execution" name="tumbling_pass_4_execution">

                            <label for="tumbling_pass_4_nd">ND</label>
                            <input @change="computeScore('final_pass_4', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.final_pass_4.nd" name="tumbling_pass_4_nd">

                            <label for="tumbling_pass_4_difficulty">Difficulty</label>
                            <input @change="computeScore('final_pass_4', 'tumblingPasses')" type="number" class="form-control" v-model="tumblingPasses.final_pass_4.difficulty" name="tumbling_pass_4_difficulty">

                            <label for="tumbling_pass_4_total_score">Total Score</label>
                            <input type="number" class="form-control" v-model="tumblingPasses.final_pass_4.total_score" name="tumbling_pass_4_total_score">
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <button type="submit" class="btn btn-primary" @click.prevent="submitCompetition">Submit Competition</button>
    </form>
</template>

<script>
    var math = require('mathjs');

    export default {
        data() {
            return {
                title: null,
                location: null,
                start_date: null,
                end_date: null,

                trampoline: false,
                dmt: true,
                tumbling: false,

                trampolineRoutines: {
                    prelim_compulsory: {},
                    prelim_optional: {},
                    semi_final_optional: {},
                    final_optional: {},
                    team_final: {},

                    showSemiFinal: false,
                    showFinal: false,
                },
                doubleMiniPasses: {
                    prelim_pass_1: {},
                    prelim_pass_2: {},
                    final_pass_3: {},
                    final_pass_4: {},
                    team_final: {},

                    showFinal: false,
                    showTeamFinal: false,
                },
                tumblingPasses: {
                    prelim_pass_1: {},
                    prelim_pass_2: {},
                    final_pass_3: {},
                    final_pass_4: {},
                    team_final: {},

                    showFinal: false,
                    showTeamFinal: false,
                },
                scoreComponents: [
                    {
                        component: 'execution',
                        operation: '+'
                    },
                    {
                        component: 'tof',
                        operation: '+'
                    },
                    {
                        component: 'hd',
                        operation: '+'
                    },
                    {
                        component: 'difficulty',
                        operation: '+'
                    },
                    {
                        component: 'nd',
                        operation: '-'
                    }
                ]
            };
        },
        props: {

        },

        methods: {
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

            computeScore(pass, event) {
                let sum = 0;

                for (let scoreComponent of this.scoreComponents) {
                    let component = scoreComponent.component;

                    if (scoreComponent.operation === '+' && this[event][pass][component] !== undefined) {
                        sum = math.add(sum, this[event][pass][component]);
                    } else if (scoreComponent.operation === '-' && this[event][pass][component] !== undefined) {
                        sum = math.subtract(sum, this[event][pass][component]);
                    }

                }

                this[event][pass].total_score = sum;
            },

            formatFloat(num) {
                return num.toFixed(1)
            }
        },

        mounted() {

        }
    }
</script>