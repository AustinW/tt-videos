<template>
    <div class="form-group score-tile">
        <h5>{{ title }}</h5>

        <div v-for="component_key in Object.keys(scoreComponents)">
            <div v-if="component_key !== 'total_score'">
                <label :for="formId(component_key)">{{ scoreComponents[component_key].title }}</label>
                <input @change="computeScore" v-model.number="scoreComponents[component_key].value" :name="formId(component_key)" type="number" class="form-control">
            </div>
            <div v-if="component_key === 'total_score'">
                <label :for="formId('total_score')">{{ scoreComponents.total_score.title }}</label>
                <input v-model.number="scoreComponents.total_score.value" :name="formId('total_score')" type="number" class="form-control">
            </div>
        </div>
    </div>
</template>

<script>
    import ScoreMixin from '../../mixins/score.mixin';

    export default {
        data() {
            return {
                discipline: 'dmt',
                scoreComponents: {
                    execution:               { title: 'Execution', value: null },
                    difficulty:              { title: 'Difficulty', value: null },
                    neutral_deduction:       { title: 'ND', value: null },
                    total_score:             { title: 'Total Score', value: null },
                }
            }
        },

        mixins: [ScoreMixin]
    }
</script>