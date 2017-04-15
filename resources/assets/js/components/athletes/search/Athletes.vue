<template>
    <div>
        <div v-for="athlete in all_athletes" class="well">
            <div class="row">
                <div class="col-sm-4">
                    {{ athlete.name }}
                    <br />
                    <a :href="'mailto:' + athlete.email">{{ athlete.email }}</a>
                </div>
                <div class="col-sm-8 text-right">
                    <athlete :athlete-id="athlete.id" :user-id="userId" :is-followed="followed(athlete)"></athlete>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                all_athletes: null,
                my_athletes: null,
            };
        },

        props: {
            userId: {
                required: true,
            }
        },

        mounted() {
            this.$http.get('/athletes/search').then(Vue.getJson).then((response) => {
                this.all_athletes = response.all_athletes;
                this.my_athletes = response.my_athletes;
            });
        },

        computed: {
        },

        methods: {
            followed(athlete) {
                var followed = 0

                this.my_athletes.forEach((followedAthlete) => {
                    if (followedAthlete.id == athlete.id) {
                        followed = (followedAthlete.pivot.verified)
                            ? 2
                            : 1;
                        return;
                    }
                })

                return followed
            }
        },
    }
</script>