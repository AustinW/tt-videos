<template>
    <div>
        <button v-show="!uploaded" @click="$upload.select('video-upload-'+routineKey)" class="btn btn-default btn-xs" type="button">
            <i class="glyphicon glyphicon-paperclip"></i> Attach Video
        </button>

        <span v-show="uploaded"><i class="glyphicon glyphicon-check"></i> {{ filename }} attached.</span>

        <div class="upload-progress progress" v-show="$upload.meta('video-upload-'+routineKey).status === 'sending'">
            <div class="progress-bar" :style="'width: ' + $upload.meta('video-upload-'+routineKey).percentComplete + '%;'">
                {{ $upload.meta('video-upload-'+routineKey).percentComplete }}% Complete
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            routineKey: null,
            discipline: null,
        },

        data() {
            return {
                uploaded: false,
                filename: null,
            }
        },

        created() {
            var _self = this;

            this.$upload.new('video-upload-'+this.routineKey, {
                async: true,
                maxFiles: 1,
                multiple: false,
                maxSizePerFile: 204800, // 200 MB
                startOnSelect: true,
                extensions: ['mp4', 'webm', 'avi', 'asf', 'wmv', 'mpegts', 'mov', 'flv', 'mkv', '3gp'],
                http: (data) => {
                    data.body.append('event', this.discipline);
                    return this.$http.post(data.url, data.body, {progress: data.progress}).then(data.success, data.error);
                },
                onStart() {
                },
                onSuccess(response) {
                    this.$parent.$parent.$emit('video-uploaded', {
                        video: response.data.data,
                        routineKey: this.routineKey,
                        discipline: this.discipline,
                    });

                    this.uploaded = true;
                    this.filename = response.data.data.title;
                },
                onEnd() {
                },
            });
        },

        mounted() {
            this.$upload.reset('video-upload-'+this.routineKey, {
                url: '/upload/multiple',
                currentFiles: 0,
                dropzoneId: 'video-upload-dropzone',
            });
        },

        beforeDestroy() {
            this.$upload.reset('video-upload-'+this.routineKey, {
                dropzoneId: null
            });
        },
    };
</script>