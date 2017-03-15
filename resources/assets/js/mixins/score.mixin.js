var math = require('mathjs');
var _ = require('lodash');

const ScoreMixin = {

    props: {
        title: null,
        routineKey: null,
    },

    computed: {
        execution: {
            get() { return this.$store.state[this.routines][this.routineKey].attrs.execution.value },
            set(value) { this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'execution', value }) }
        },
        difficulty: {
            get() { return this.$store.state[this.routines][this.routineKey].attrs.difficulty.value },
            set(value) { this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'difficulty', value }) }
        },
        time_of_flight: {
            get() { return this.$store.state[this.routines][this.routineKey].attrs.time_of_flight.value },
            set(value) { this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'time_of_flight', value }) }
        },
        horizontal_displacement: {
            get() { return this.$store.state[this.routines][this.routineKey].attrs.horizontal_displacement.value },
            set(value) { this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'horizontal_displacement', value }) }
        },
        neutral_deduction: {
            get() { return this.$store.state[this.routines][this.routineKey].attrs.neutral_deduction.value },
            set(value) { this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'neutral_deduction', value }) }
        },
        total_score: {
            get() { return this.$store.state[this.routines][this.routineKey].attrs.total_score.value },
            set(value) { this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'total_score', value }) }
        }
    },

    methods: {
        formId(component) {
            return [this.discipline, this.routineKey, component].join('_');
        },

        toggleShowQueued() {
            this.showQueuedFiles = !this.showQueuedFiles;
        },

        videoUploaded(data) {
            // this.score.setVideoId(data.video.id);
            //
            // this.$emit('scorechanged', {
            //     routineKey: this.routineKey,
            //     score: this.score,
            // });
        },

        computeScore() {
            // let sum = 0;
            //
            // this.score.scoreKeys().forEach((component_key) => {
            //     if (component_key === 'neutral_deduction') {
            //         sum = (this.score.attrs.neutral_deduction.value) ? math.subtract(sum, this.score.attrs.neutral_deduction.value) : sum;
            //     } else if (component_key !== 'total_score') {
            //         sum = (this.score.attrs[component_key].value) ? math.add(sum, this.score.attrs[component_key].value) : sum;
            //     }
            // });
            //
            // this.score.attrs.total_score.value = math.round(sum, 3);
            //
            // this.$emit('scorechanged', {
            //     routineKey: this.routineKey,
            //     score: this.score
            // });
        },

        computeTotalScore() {
            // this.score.scoreKeys().forEach((component_key) => {
            //     if (component_key !== 'total_score') {
            //         this.score.attrs[component_key].value = null;
            //     }
            // });
            //
            // this.$emit('scorechanged', {
            //     routineKey: this.routineKey,
            //     score: this.score
            // });
        },

        mounted() {
            this.$upload.reset('video-upload', {
                url: '/upload/multiple',
                currentFiles: 0,
                dropzoneId: 'video-upload-dropzone',
            });
        },
    },
};

export default ScoreMixin;