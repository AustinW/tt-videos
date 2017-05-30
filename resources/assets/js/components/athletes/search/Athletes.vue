<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <div class="panel-title pull-left">All Athletes</div>
                <div class="panel-title pull-right col-md-4">
                    <div class="input-group add-on">
                        <input class="form-control col-md-4" placeholder="Search" v-model="searchQuery" type="text">
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>

            <div class="panel-body">
                <div v-if="searched.length">
                    <p v-if="role === 'owner' || role === 'admin' || role === 'national-coach'" style="font-style:italic">
                        Athletes that you follow will be notified.
                    </p>
                    <p v-if="role === 'coach'" style="font-style:italic">
                        Athletes that you request to follow will be notified and asked to verify before you can view their
                        videos and competition results.
                    </p>

                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="athlete in searched">
                                <td>{{ athlete.name }}</td>
                                <td><a :href="'mailto:' + athlete.email">{{ athlete.email }}</a></td>
                                <td>
                                    <follow :subject-id="athlete.id" :user-id="userId" :is-followed="followed(athlete)"></follow>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>
                    <span style="font-style:italic">No athletes to display</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                all_athletes: [],
                my_athletes: [],
                searchQuery: null,
            };
        },

        props: {
            userId: {
                required: true,
            },
            role: null,
        },

        mounted() {
            this.$http.get('/athletes/search').then(Vue.getJson).then((response) => {
                this.all_athletes = response.all_athletes;
                this.my_athletes = response.my_athletes;
            });
        },

        computed: {
            searched() {
                var self = this;

                if (!this.searchQuery || !this.all_athletes) {
                    return this.all_athletes;
                }

                return this.all_athletes.filter((athlete) => {
                    return athlete.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1;
                });
            }
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