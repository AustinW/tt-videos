<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <div class="panel-title">{{ athlete.name }}</div>
        </div>

        <div class="panel-body">

            <form class="form-inline">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="showVideos">
                        Videos ({{ athlete.videos.length }})
                    </label>
                </div>

                &nbsp;&nbsp;

                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="showCompetitions">
                        Competitions ({{ athlete.competitions.length }})
                    </label>
                </div>
            </form>

            <div v-if="showVideos && athlete.videos.length" class="row">
                <div class="col-md-12"><h4>Videos:</h4></div>
                <div v-for="video in athlete.videos">
                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <a :href="videoUrl(video)"><img :src="videoThumbnail(video)" :alt="video.title"></a>
                            <div class="caption">
                                <a :href="videoUrl(video)">{{ video.title }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="showCompetitions && athlete.competitions.length" class="row">
                <div class="col-md-12">
                    <h4>Competitions:</h4>
                    <table class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Events</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="competition in athlete.competitions">
                                <td style="width:55%"><a :href="competitionUrl(competition)">{{ competition.title }}</a></td>
                                <td>
                                    <span v-if="competition.videoCount > 0" class="badge badge-default"><i class="glyphicon glyphicon-facetime-video"></i> {{ competition.videoCount }}</span>
                                    <span class="label discipline-tra" v-if="competition.trampoline_scores.length">Trampoline</span>
                                    <span class="label discipline-dmt" v-if="competition.double_mini_scores.length">Double Mini</span>
                                    <span class="label discipline-tum" v-if="competition.tumbling_scores.length">Tumbling</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UniqueIdMixin from '../../../mixins/unique-id.mixin'

    export default {
        data() {
            return {
                showVideos: null,
                showCompetitions: null,
            }
        },

        props: {
            athlete: {
                required: true
            }
        },

        mounted() {
            this.showVideos = this.athlete.videos.length > 0;
            this.showCompetitions = this.athlete.competitions.length > 0;
        },

        methods: {
            videoThumbnail(video) {
                return '/storage/videos/' + video.unique_id + '_t.jpg';
            },
            videoUrl(video) {
                return '/videos/' + video.unique_id;
            },
            competitionUrl(competition) {
                return '/competitions/' + competition.id;
            }
        },

        mixins: [UniqueIdMixin]
    }
</script>