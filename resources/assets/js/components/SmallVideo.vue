<template>
    <div style="display:block !important">
        <a v-show="!showVideo" href="#" @click.prevent="playVideo">
            <i class="glyphicon glyphicon-play"></i>
            Play Video
        </a>
        <a v-show="showVideo" href="#" @click.prevent="hideVideo">
            <i class="glyphicon glyphicon-menu-up"></i>
            Hide Video
        </a>
        <video
            :id="'video-' + videoId"
            class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9 vjs-hidden"
            controls
            data-setup='{"fluid": true, "playbackRates": [0.25, 0.33, 1, 2] }'
            :poster="img"
            :width="width"
            :height="height"
        >
            <source type="video/mp4" :src="src" />
        </video>
    </div>
</template>

<script>
    import videojs from "video.js";

    export default {
        data() {
            return {
                player: null,
                duration: null,
                showVideo: false,
            }
        },
        props: {
            videoId: null,
            src: null,
            img: null,
            width: {
                default: 480,
                type: Number
            },
            height: {
                default: 270,
                type: Number
            },
        },
        mounted() {
            this.player = videojs('video-' + this.videoId);

            this.player.on('loadedmetadata', () => {
                this.duration = Math.round(this.player.duration());
            });

            setInterval(() => {
                if (this.hasHitQuotaView()) {
                    this.createView();
                }
            }, 1000);
        },
        methods: {
            playVideo() {
                this.showVideo = true;
                this.player.show();
                this.player.play();
            },
            hideVideo() {
                this.showVideo = false;
                this.player.hide();
                this.player.pause();
            },
            hasHitQuotaView() {
                if (!this.duration) {
                    return false;
                }

                return Math.round(this.player.currentTime()) === Math.round((10 * this.duration) / 100);
            },
            createView() {
                this.$http.post('/videos/' + this.videoId + '/views');
            }
        }
    }
</script>