<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Upload Your Video</div>

                    <div class="panel-body">

                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" v-model="name" :disabled="authenticated">
                        </div>

                        <div class="form-group">
                            <label for="event">Event</label>
                            <select class="form-control" v-model="event">
                                <option value="trampoline">Trampoline</option>
                                <option value="double mini">Double-mini</option>
                                <option value="tumbling">Tumbling</option>
                            </select>
                        </div>

                        <input type="file" name="video" id="video" @change="fileInputChange" v-if="!uploading" :disabled="!name || !event">

                        <div class="alert alert-danger" v-if="failed">Something went wrong. Please try again.</div>

                        <div id="video-form" v-if="uploading && !failed">

                            <div class="alert alert-info" v-if="!uploadingComplete">
                                <i class="fa fa-refresh fa-spin"></i> Your video is uploading...
                            </div>
                            <div class="alert alert-success" v-if="uploadingComplete">
                                Upload complete. Video is now processing. <a href="/videos">Go to your videos.</a>
                            </div>

                            <div class="progress" v-if="!uploadingComplete">
                                <div class="progress-bar" v-bind:style="{ width: fileProgress + '%' }"></div>
                            </div>

                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" class="form-control" v-model="title">
                            </div>

                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" v-model="description"></textarea>
                            </div>

                            <span class="help-block pull-right">{{ saveStatus }}</span>
                            <button type="submit" class="btn btn-default" @click.prevent="update">Save Changes</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uploading: false,
                uploadingComplete: false,
                failed: false,
                saveStatus: null,
                fileProgress: 0,
                authenticated: window.Laravel.user.authenticated,

                // Video model
                unique_id: null,
                title: 'Untitled',
                name: window.Laravel.user.name,
                event: 'trampoline',
                description: null,
                extension: null,
            }
        },
        methods: {
            fileInputChange() {
                this.uploading = true;
                this.failed = false;

                this.file = document.getElementById('video').files[0];

                this.store().then(() => {
                    var form = new FormData();

                    form.append('video', this.file);
                    form.append('unique_id', this.unique_id);

                    this.$http.post('/upload', form, {
                        progress: (e) => {
                            if (e.lengthComputable) {
                                this.updateProgress(e);
                            }
                        }
                    }).then(() => {
                        this.uploadingComplete = true;
                    }, (fail) => {
                        this.failed = true;
                    });
                }, (fail) => {
                    this.failed = true;
                });
            },

            store() {
                this.extension = this.file.name.split('.').pop();

                return this.$http.post('/videos', {
                    title: this.title,
                    description: this.description,
                    name: this.name,
                    event: this.event,
                    extension: this.extension,
                }).then(Vue.getJson).then((response) => {
                    this.unique_id = response.data.unique_id;
                });
            },
            update() {
                this.saveStatus = 'Saving changes.';

                return this.$http.put('/videos/' + this.unique_id, {
                    title: this.title,
                    description: this.description,
                    name: this.name,
                    event: this.event,
                    extension: this.extension,
                }).then((response) => {
                    this.saveStatus = 'Changes saved.';

                    setTimeout(() => {
                        this.saveStatus = null;
                    }, 3000);

                }, () => {
                    this.saveStatus = 'Failed to save changes.';
                });
            },
            updateProgress(e) {
                e.percent = (e.loaded / e.total) * 100;
                this.fileProgress = e.percent;
            }
        },
        computed: {
            videoUrl: function() {
                return this.$root.url + '/videos/' + this.unique_id;
            }
        },
        mounted() {
            window.onbeforeunload = () => {
                if (this.uploading && !this.uploadingComplete && !this.failed) {
                    return 'Are you sure you want to navigate away?';
                }
            }
        }
    }
</script>
