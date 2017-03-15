<template>
    <div>
        <button v-show="!uploaded && !hasAttachment" @click="$upload.select('video-upload' + routines + '-' + routineKey)" :disabled="$upload.meta('video-upload' + routines + '-' + routineKey).status === 'sending'" class="btn btn-default btn-xs" type="button">
            <i class="glyphicon glyphicon-paperclip"></i> Attach Video
        </button>

        <span v-show="uploaded || hasAttachment">
            <i class="glyphicon glyphicon-check"></i> {{ filename }}
            <a href="#" @click.prevent="removeAttachment" class="remove-attachment"><i class="glyphicon glyphicon-remove-sign"></i></a>
        </span>

        <div class="upload-progress progress" v-show="$upload.meta('video-upload' + routines + '-' + routineKey).status === 'sending'">
            <div class="progress-bar" :style="'width: ' + $upload.meta('video-upload' + routines + '-' + routineKey).percentComplete + '%;'">
                {{ $upload.meta('video-upload' + routines + '-' + routineKey).percentComplete }}% Complete
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            routineKey: null,
            routines: null,
            discipline: null,
        },

        data() {
            return {
                uploaded: false,
            }
        },

        computed: {
            hasAttachment() {
                return this.$store.state.competition_id && this.$store.state[this.routines][this.routineKey].hasVideo();
            },
            filename() {
                return this.$store.state[this.routines][this.routineKey].videoFilename;
            }
        },

        methods: {
            removeAttachment() {
                this.$store.commit('REMOVE_ATTACHMENT', {
                    routines: this.routines,
                    routineKey: this.routineKey,
                });

                this.uploaded = false;
            },

            uniqueId() {
                return 'video-upload' + this.routines + '-' + this.routineKey;
            }
        },

        created() {
            var _self = this;

            this.$upload.new('video-upload' + this.routines + '-' + this.routineKey, {
                async: true,
                maxFiles: 1,
                multiple: false,
                maxSizePerFile: 204800, // 200 MB
                startOnSelect: true,
                extensions: ['mp4', 'webm', 'avi', 'asf', 'wmv', 'mpegts', 'mov', 'flv', 'mkv', '3gp'],
                http: (data) => {
                    data.body.append('event', _self.discipline);
                    return this.$http.post(data.url, data.body, {progress: data.progress}).then(data.success, data.error);
                },
                onSuccess(response) {
                    this.$store.commit('ATTACH_VIDEO', {
                        video: response.data.data,
                        routineKey: this.routineKey,
                        routines: this.routines,
                    });

                    this.uploaded = true;
                },
            });
        },

        mounted() {
            this.$upload.reset('video-upload' + this.routines + '-' + this.routineKey, {
                url: '/upload/multiple',
                currentFiles: 0,
                dropzoneId: 'video-upload-dropzone',
            });
        },

        beforeDestroy() {
            this.$upload.reset('video-upload' + this.routines + '-' + this.routineKey, {
                dropzoneId: null
            });
        },
    };
</script>