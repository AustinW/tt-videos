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

    },
};

export default ScoreMixin;