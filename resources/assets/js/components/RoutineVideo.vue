<template>
    <div>
        <div v-if="$upload.files(uniqueId).error.length" class="alert alert-danger">
            <strong>{{ $upload.files(uniqueId).error[0].name }}</strong>
            {{ $upload.files(uniqueId).error[0].errors[0].message }}
        </div>

        <button v-show="!uploaded && !hasAttachment" @click="$upload.select(uniqueId)" :disabled="$upload.meta(uniqueId).status === 'sending'" class="btn btn-default btn-xs" type="button">
            <i class="glyphicon glyphicon-paperclip"></i> Attach Video
        </button>

        <span v-show="uploaded || hasAttachment">
            <i class="glyphicon glyphicon-check"></i> {{ filename }}
            <a href="#" @click.prevent="removeAttachment" class="remove-attachment"><i class="glyphicon glyphicon-trash"></i></a>
        </span>

        <div class="upload-progress progress" v-show="$upload.meta(uniqueId).status === 'sending'">
            <div class="progress-bar" :style="'width: ' + $upload.meta(uniqueId).percentComplete + '%;'">
                {{ $upload.meta(uniqueId).percentComplete }}% Complete
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
            },
            uniqueId() {
                return 'video-upload' + this.routines + '-' + this.routineKey;
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
        },

        created() {
            var _self = this;

            this.$upload.new(this.uniqueId, {
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
            this.$upload.reset(this.uniqueId, {
                url: '/upload/multiple',
                currentFiles: 0,
                dropzoneId: 'video-upload-dropzone',
            });
        },

        beforeDestroy() {
            this.$upload.reset(this.uniqueId, {
                dropzoneId: null
            });
        },
    };
</script>