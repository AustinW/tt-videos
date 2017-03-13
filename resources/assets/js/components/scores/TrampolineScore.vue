<template>
    <div class="form-group score-tile">
        <h5>{{ title }}</h5>

        <routine-video :discipline="score.discipline" :routine-key="routineKey" @video-uploaded="videoUploaded"></routine-video>

        <div v-for="component_key in score.scoreKeys()">
            <div v-if="component_key !== 'total_score'">
                <label :for="formId(component_key)" :title="score.getTitle(component_key)">{{ score.getLabel(component_key) }}</label>
                <input @change="computeScore" v-model.number="score.attrs[component_key].value" :name="formId(component_key)" type="number" step="any" class="form-control">
            </div>
            <div v-if="component_key === 'total_score'">
                <label :for="formId('total_score')" :title="score.getTitle('total_score')">{{ score.getLabel('total_score') }}</label>
                <input @change="computeTotalScore" v-model.number="score.attrs.total_score.value" :name="formId('total_score')" type="number" step="any" class="form-control">
            </div>
        </div>
    </div>
</template>

<script>
    import ScoreMixin from '../../mixins/score.mixin';
    import TrampolineScore from '../../TrampolineScore';

    export default {
        data() {
            return {
                score: null,
            }
        },

        created() {
            this.score = new TrampolineScore();
        },

        mixins: [ScoreMixin]
    }
</script>