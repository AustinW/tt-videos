<template>
    <div class="form-group score-tile">
        <h5>{{ title }}</h5>

        <routine-video :routines="routines" :discipline="discipline" :routine-key="routineKey" class="video-attachment"></routine-video>

        <div>
            <label :for="formId('execution')" title="Execution">Execution</label>
            <input v-model.number="execution" :name="formId('execution')" type="number" step="any" class="form-control">
        </div>

        <div>
            <label :for="formId('difficulty')" title="Difficulty">Difficulty</label>
            <input v-model.number="difficulty" :name="formId('difficulty')" type="number" step="any" class="form-control">
        </div>

        <div>
            <label :for="formId('time_of_flight')" title="Time of Flight">TOF</label>
            <input v-model.number="time_of_flight" :name="formId('time_of_flight')" type="number" step="any" class="form-control">
        </div>

        <div>
            <label :for="formId('horizontal_displacement')" title="Horizontal Displacement">HD</label>
            <input v-model.number="horizontal_displacement" :name="formId('horizontal_displacement')" type="number" step="any" class="form-control">
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
    import TrampolineScore from '../../TrampolineScore';

    export default {
        data() {
            return {
                discipline: 'trampoline',
                routines: 'trampolineRoutines',
            }
        },



        mixins: [ScoreMixin]
    }
</script>