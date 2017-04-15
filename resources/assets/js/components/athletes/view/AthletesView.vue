<template>
    <div>
        <div v-for="athlete in athletes">
            <view-athlete :athlete="athlete"></view-athlete>
        </div>
    </div>
</template>

<script>
    import UniqueIdMixin from '../../../mixins/unique-id.mixin'

    export default {
        data() {
            return {

            }
        },

        computed: {
            athletes() {
                return this.$store.state.athleteView.shownAthletes;
            }
        },

        mounted() {
        },

        mixins: [UniqueIdMixin]
    }
</script>