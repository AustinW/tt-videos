<template>
    <ul class="list-group">
        <li v-for="athlete in athletes" class="list-group-item">
            <label><input type="checkbox" v-model="shown[athlete.id]" @change="shownAthletes" /> {{ athlete.name }}</label>
        </li>
    </ul>
</template>

<script>
    export default {
        computed: {
            athletes() {
                return this.$store.state.athleteView.allAthletes;
            },
        },

        data() {
            return {
                shown: {},
            }
        },

        methods: {
            shownAthletes() {
                this.$store.commit('ATHLETE_VIEW_CHANGE_ATHLETE', this.shown);
            }
        },

        mounted() {
            this.$store.dispatch('ATHLETE_VIEW_LOAD_ATHLETES').then(() => {
                this.$store.state.athleteView.allAthletes.forEach((athlete) => {
                    this.$set(this.shown, athlete.id, true);
                })
                this.shownAthletes();
            });

        }
    };
</script>