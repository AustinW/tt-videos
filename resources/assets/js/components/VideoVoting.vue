<template>
    <div class="video__voting">
        <a href="#" class="video__voting-button" v-bind:class="{'video__voting-button--voted': userVote == 'up'}" @click.prevent="vote('up')">
            <i class="glyphicon glyphicon-thumbs-up"></i>
        </a> {{ up }} &nbsp;

        <a href="#" class="video__voting-button" v-bind:class="{'video__voting-button--voted': userVote == 'down'}" @click.prevent="vote('down')">
            <i class="glyphicon glyphicon-thumbs-down"></i>
        </a> {{ down }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                up: null,
                down: null,
                userVote: null,
                canVote: false,
            }
        },
        props: {
            videoUid: null
        },
        mounted() {
            this.getVotes();
        },
        methods: {
            getVotes() {
                this.$http.get('/videos/' + this.videoUid + '/votes').then(Vue.getJson).then((response) => {
                    this.up = response.data.up;
                    this.down = response.data.down;
                    this.userVote = response.data.user_vote;
                    this.canVote = response.data.can_vote;

                })
            },
            vote(type) {
                if (this.userVote == type) {
                    this[type]--;
                    this.userVote = null;
                    this.deleteVote(type);
                    return;
                }

                if (this.userVote) {
                    this[type == 'up' ? 'down' : 'up']--;
                }

                this[type]++;
                this.userVote = type;

                this.createVote(type);
            },
            deleteVote(type) {
                this.$http.delete('/videos/' + this.videoUid + '/votes', {type});
            },
            createVote(type) {
                this.$http.post('/videos/' + this.videoUid + '/votes', {type});
            }
        }
    }
</script>