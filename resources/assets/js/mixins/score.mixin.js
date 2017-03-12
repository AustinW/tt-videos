var math = require('mathjs');
var _ = require('lodash');

const ScoreMixin = {

    props: {
        title: null,
        routineKey: null,
    },

    methods: {
        formId(component) {
            return [this.discipline, this.routineKey, component].join('_');
        },

        toggleShowQueued() {
            this.showQueuedFiles = !this.showQueuedFiles;
        },

        computeScore() {
            let sum = 0;

            Object.keys(this.scoreComponents).forEach((component_key) => {
                if (component_key == 'neutral_deduction') {
                    sum = (this.scoreComponents.neutral_deduction.value) ? math.subtract(sum, this.scoreComponents.neutral_deduction.value) : sum;
                } else if (component_key !== 'total_score') {
                    sum = (this.scoreComponents[component_key].value) ? math.add(sum, this.scoreComponents[component_key].value) : sum;
                }
            });

            this.scoreComponents.total_score.value = math.round(sum, 3);

            this.$emit('scorechanged', {
                discipline: this.discipline,
                routineKey: this.routineKey,
                components: _.mapValues(this.scoreComponents, 'value')
            });
        },

        mounted() {
            this.$upload.reset('video-upload', {
                url: '/upload/multiple',
                currentFiles: 0,
                dropzoneId: 'video-upload-dropzone',
            });
        },

        computeTotalScore() {
            Object.keys(this.scoreComponents).forEach((component_key) => {
                if (component_key !== 'total_score') {
                    this.scoreComponents[component_key].value = null;
                }
            });

            this.$emit('scorechanged', {
                discipline: this.discipline,
                routineKey: this.routineKey,
                components: _.mapValues(this.scoreComponents, 'value')
            });
        }
    },
};

export default ScoreMixin;