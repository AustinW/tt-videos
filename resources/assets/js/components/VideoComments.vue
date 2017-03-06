<template>
    <div>
        <p>{{ comments.length }} {{ comments.length | pluralize('comment') }}</p>

        <!-- Video comment box -->
        <div class="video-comment clearfix" if="$root.user.authenticated">
            <textarea placeholder="Say something..." class="form-control video-comment__input" v-model="body"></textarea>

            <div class="pull-right" style="margin-top:10px">
                <button type="submit" class="btn btn-primary" @click.prevent="createComment">
                    <i class="glyphicon glyphicon-refresh spinning" v-if="posting"></i> Post
                </button>
            </div>
        </div>

        <!-- List of comments -->
        <ul class="media-list">
            <li class="media" v-for="comment in comments">

                <!-- Channel image -->
                <div class="media-left">
                    <a :href="channelUrl(comment)">
                        <img v-bind:src="comment.channel.data.image" :alt="comment.channel.data.name" class="media-object">
                    </a>
                </div>

                <!-- Comment -->
                <div class="media-body">
                    <a :href="channelUrl(comment)">{{ comment.channel.data.name }}</a> {{ comment.created_at_human }}

                    <span v-if="comment.replies.data.length">({{ comment.replies.data.length }}  {{ comment.replies.data.length | pluralize('reply', 'replies') }})</span>

                    <p>{{ comment.body }}</p>

                    <!-- Comment reply/delete -->
                    <ul class="list-inline" v-if="$root.user.authenticated">
                        <li>
                            <a href="#" @click.prevent="toggleReplyForm(comment.id)">
                                {{ replyFormVisible === comment.id ? 'Cancel reply' : 'Reply' }}
                            </a>
                        </li>
                        <li v-if="comment.user_id === $root.user.id">
                            <a href="#" @click.prevent="deleteComment(comment.id)">
                                <i class="glyphicon glyphicon-refresh spinning" v-if="deleting === comment.id"></i> Delete
                            </a>
                        </li>
                    </ul>

                    <!-- Reply box -->
                    <div class="video-comment clear" v-if="replyFormVisible === comment.id">
                        <textarea class="form-control video-comment__input" v-model="replyBody"></textarea>
                        <div class="pull-right" style="margin-top:10px">
                            <button type="submit" class="btn btn-primary" @click.prevent="createReply(comment.id)">
                                <i class="glyphicon glyphicon-refresh spinning" v-if="replying"></i> Reply
                            </button>
                        </div>
                    </div>

                    <!-- Replies to comment -->
                    <div class="media" v-for="reply in comment.replies.data">

                        <!-- Channel image -->
                        <div class="media-left">
                            <a :href="channelUrl(reply)">
                                <img v-bind:src="reply.channel.data.image" :alt="reply.channel.data.name" class="media-object">
                            </a>
                        </div>

                        <!-- Reply body -->
                        <div class="media-body">
                            <a :href="channelUrl(reply)">{{ reply.channel.data.name }}</a> {{ reply.created_at_human }}

                            <p>{{ reply.body }}</p>

                            <ul class="list-inline" v-if="$root.user.authenticated">
                                <li>
                                    <a href="#" @click.prevent="deleteComment(reply.id)" v-if="reply.user_id === $root.user.id">
                                        <i class="glyphicon glyphicon-refresh spinning" v-if="deleting === reply.id"></i> Delete
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                comments: [],
                posting: false,
                body: null,
                replyBody: null,
                replyFormVisible: null,
                replying: false,
                deleting: null
            }
        },
        props: {
            videoUid: null
        },
        methods: {
            deleteComment(commentId) {
                if (!confirm('Are you sure you want to delete this comment?')) return;

                this.deleting = commentId;

                this.$http.delete('/videos/' + this.videoUid + '/comments/' + commentId).then(Vue.getJson).then((response) => {
                    this.deleteById(commentId);
                    this.deleting = null;
                });
            },
            deleteById(commentId) {
                this.comments.map((comment, index) => {
                    if (comment.id === commentId) {
                        this.comments.splice(index, 1);
                        return;
                    }

                    comment.replies.data.map((reply, replyIndex) => {
                        if (reply.id === commentId) {
                            this.comments[index].replies.data.splice(replyIndex, 1);
                            return;
                        }
                    });
                });
            },
            toggleReplyForm(commentId) {
                this.replyBody = null;

                if (this.replyFormVisible === commentId) {
                    this.replyFormVisible = null;
                    return;
                }

                this.replyFormVisible = commentId;
            },
            createReply(commentId) {
                this.replying = true;

                this.$http.post('/videos/' + this.videoUid + '/comments', {
                    body: this.replyBody,
                    reply_id: commentId
                }).then(Vue.getJson).then((response) => {
                    this.comments.map((comment, index) => {
                        if (comment.id === commentId) {
                            this.comments[index].replies.data.push(response.data);
                            return;
                        }
                    });

                    this.replyBody = null;
                    this.replyFormVisible = null;
                    this.replying = false;
                }, (errResponse) => {
                    console.error('There was a problem posting the reply.', errResponse);
                    this.replying = false;
                });

            },
            createComment() {
                this.posting = true;

                this.$http.post('/videos/' + this.videoUid + '/comments', {
                    body: this.body
                }).then(Vue.getJson).then((response) => {
                    this.comments.unshift(response.data);
                    this.body = null;
                    this.posting = false;
                }, (errResponse) => {
                    console.error('There was a problem posting the comment.', errResponse);
                    this.posting = false;
                });
            },
            getComments() {
                this.$http.get('/videos/' + this.videoUid + '/comments').then(Vue.getJson).then((response) => {
                    this.comments = response.data;
                })
            },
            channelUrl(comment) {
                return '/channel/' + comment.channel.data.slug;
            }
        },
        mounted() {
            this.getComments();
        }
    }
</script>