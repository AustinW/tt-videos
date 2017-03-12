<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Upload Your Videos</div>

                    <div class="panel-body">

                        <div class="form-group">
                            <label for="event">Event</label>
                            <select class="form-control" id="event" v-model="event">
                                <option value="trampoline">Trampoline</option>
                                <option value="double mini">Double-mini</option>
                                <option value="tumbling">Tumbling</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="visibility">Visibility</label>
                            <select class="form-control" id="visibility" v-model="visibility">
                                <option value="private">Private</option>
                                <option value="unlisted">Unlisted</option>
                                <option value="public">Public</option>
                            </select>
                        </div>

                        <button v-show="!queued" @click="$upload.select('video-upload')" :disabled="$upload.meta('video-upload').status === 'sending'" class="btn btn-default">
                            Select Videos
                        </button>

                        <button v-show="queued" @click="$upload.start('video-upload')" :disabled="$upload.meta('video-upload').status === 'sending'" class="btn btn-default">
                            Start
                        </button>

                        <button @click="() => {$upload.reset('video-upload');queued = false}" :disabled="$upload.meta('video-upload').status === 'sending'" class="btn btn-default">
                            Cancel
                        </button>

                        <div class="upload-progress progress" v-show="$upload.meta('video-upload').status === 'sending'">
                            <div class="progress-bar" :style="'width: ' + $upload.meta('video-upload').percentComplete + '%;'">
                                {{ $upload.meta('video-upload').percentComplete }}% Complete
                            </div>
                        </div>

                        <div v-if="$upload.errors('video-upload').length" class="text-danger">
                            {{ $upload.errors('video-upload')[0].message }}
                        </div>

                        <div class="upload-result">

                            <h3 v-show="$upload.files('video-upload').queued.length > 0">
                                <div class="label label-default">
                                    {{ $upload.files('video-upload').queued.length }} {{ $upload.files('video-upload').queued.length | pluralize('file') }} ready
                                </div>
                                &nbsp;
                                <button @click="toggleShowQueued" class="btn btn-default btn-sm">
                                    <i v-if="showQueuedFiles" class="glyphicon glyphicon-menu-up"></i>
                                    <i v-if="!showQueuedFiles" class="glyphicon glyphicon-menu-down"></i>
                                </button>
                            </h3>

                            <ul v-show="showQueuedFiles">
                                <li v-for="file in $upload.files('video-upload').queued">
                                    {{ file.name }}
                                </li>
                            </ul>

                            <div v-for="file in $upload.files('video-upload').complete">
                                <div v-if="file.errors.length">
                                    <span class="label label-danger">{{ file.name }}</span>
                                    {{ file.errors[0].message }}
                                </div>

                                <div v-if="!file.errors.length">
                                    <span class="label label-success">{{ file.name }}</span>
                                    Uploaded successfully.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        created() {
            this.$upload.new('video-upload', {
                async: true,
                maxFiles: 20,
                multiple: true,
                maxSizePerFile: 204800, // 200 MB
                startOnSelect: false,
                extensions: ['mp4', 'webm', 'avi', 'asf', 'wmv', 'mpegts', 'mov', 'flv', 'mkv', '3gp'],
                http: (data) => {
                    data.body.append('visibility', this.visibility);
                    data.body.append('event', this.event);
                    return this.$http.post(data.url, data.body, {progress: data.progress}).then(data.success, data.error);
                },
                onQueue() {
                    this.showQueuedFiles = true;
                    this.queued = true;
                },
                onStart() {
                    this.queued = false;
                    this.showQueuedFiles = false;
                },
                onSuccess(res) {
                    window.location = '/videos';
                },
                onEnd() {
                },
            });
        },

        data() {
            return {
                queued: false,
                showQueuedFiles: false,
                visibility: 'private',

                event: 'trampoline',
            }
        },

        methods: {
            toggleShowQueued() {
                this.showQueuedFiles = !this.showQueuedFiles;
            }
        },

        mounted() {
            this.$upload.reset('video-upload', {
                url: '/upload/multiple',
                currentFiles: 0,
                dropzoneId: 'video-upload-dropzone',
            });
        },

        beforeDestroy() {
            this.$upload.reset('video-upload', {
                dropzoneId: null
            });
        },
    }
</script>