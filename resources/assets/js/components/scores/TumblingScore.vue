<template>
    <div class="form-group score-tile">
        <h5>{{ title }}</h5>

        <routine-video :discipline="discipline" :routine-key="routineKey" @video-uploaded="videoUploaded"></routine-video>

        <div>
            <label :for="formId('execution')" title="Execution">Execution</label>
            <input @change="computeScore" v-model.number="execution" :name="formId('execution')" type="number" step="any" class="form-control">
        </div>

        <div>
            <label :for="formId('total_score')" title="Total Score">Total Score</label>
            <input @change="computeTotalScore" v-model.number="total_score" :name="formId('total_score')" type="number" step="any" class="form-control">
        </div>
    </div>
</template>

<script>
    import ScoreMixin from '../../mixins/score.mixin';
    import TumblingScore from '../../TumblingScore';

    export default {

        data() {
            return {
                discipline: 'tumbling'
            }
        },

        computed: {
            execution: {
                get() { return this.$store.state.tumblingPasses[this.routineKey].execution.value },
                set(value) {  }
            }
        },

        mixins: [ScoreMixin]
    }
</script>