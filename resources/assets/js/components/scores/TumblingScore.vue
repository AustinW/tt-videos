<template>
    <div class="form-group score-tile">
        <h5>{{ title }}</h5>

        <routine-video :discipline="discipline" :routine-key="routineKey" @video-uploaded="videoUploaded"></routine-video>

        <div>
            <label :for="formId('execution')" title="Execution">Execution</label>
            <input v-model.number="execution" :name="formId('execution')" type="number" step="any" class="form-control">
        </div>

        <div>
            <label :for="formId('difficulty')" title="Difficulty">Difficulty</label>
            <input v-model.number="difficulty" :name="formId('difficulty')" type="number" step="any" class="form-control">
        </div>

        <div>
            <label :for="formId('neutral_deduction')" title="Neutral Deduction">ND</label>
            <input v-model.number="neutral_deduction" :name="formId('neutral_deduction')" type="number" step="any" class="form-control">
        </div>

        <div>
            <label :for="formId('total_score')" title="Total Score">Total Score</label>
            <input v-model.number="total_score" :name="formId('total_score')" type="number" step="any" class="form-control">
        </div>
    </div>
</template>

<script>
    import ScoreMixin from '../../mixins/score.mixin';
    import TumblingScore from '../../TumblingScore';

    export default {

        data() {
            return {
                discipline: 'tumbling',
                routines: 'tumblingPasses',
            }
        },

        mixins: [ScoreMixin]
    }
</script>