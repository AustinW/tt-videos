webpackJsonp([1,2],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_filters__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vee_validate__);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(342);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('video-upload', __webpack_require__(792));
Vue.component('multiple-video-upload', __webpack_require__(788));
Vue.component('video-player', __webpack_require__(791));
Vue.component('video-voting', __webpack_require__(793));
Vue.component('video-comments', __webpack_require__(790));
Vue.component('competition-form', __webpack_require__(787));
Vue.component('routine-video', __webpack_require__(789));
Vue.component('trampoline-score', __webpack_require__(795));
Vue.component('dmt-score', __webpack_require__(794));
Vue.component('tumbling-score', __webpack_require__(796));

Vue.use(__webpack_require__(121));
Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue2_filters___default.a);
Vue.use(__webpack_require__(116));
Vue.use(__WEBPACK_IMPORTED_MODULE_1_vee_validate___default.a);

window.Event = new Vue();

Vue.use({
    install: function install(Vue, options) {
        Vue.getJson = function (response) {
            return response.json();
        };
    }
});

Vue.http.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;

var app = new Vue({
    el: '#app',
    data: window.Laravel
});

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vee_validate__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var disciplineMap = {
    trampoline: 'trampolineRoutines',
    dmt: 'doubleMiniPasses',
    tumbling: 'tumblingPasses'
};

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            title: null,
            location: null,
            start_date: null,
            end_date: null,

            trampoline: false,
            dmt: false,
            tumbling: false,

            eventValidations: {
                trampoline: false,
                dmt: false,
                tumbling: false
            },

            trampolineRoutines: {
                showSemiFinal: false,
                showFinal: false
            },
            doubleMiniPasses: {
                showFinal: false
            },
            tumblingPasses: {
                showFinal: false
            }
        };
    },
    mounted: function mounted() {},


    computed: {
        trampColSize: function trampColSize() {
            if (this.trampolineRoutines.showFinal && this.trampolineRoutines.showSemiFinal) {
                return '3';
            } else if (this.trampolineRoutines.showFinal || this.trampolineRoutines.showSemiFinal) {
                return '4';
            } else {
                return '6';
            }
        },
        dmtColSize: function dmtColSize() {
            return this.doubleMiniPasses.showFinal ? '3' : '6';
        },
        tumblingColSize: function tumblingColSize() {
            return this.tumblingPasses.showFinal ? '3' : '6';
        }
    },

    methods: {
        eventsInvalid: function eventsInvalid() {
            return !this.eventValidations.trampoline && !this.eventValidations.dmt && !this.eventValidations.tumbling;
        },
        updateAllScores: function updateAllScores($event) {

            var score = $event.score;
            var discipline = disciplineMap[score.discipline];

            // this.trampolineRoutines['prelim_compulsory'] = {execution: ..., difficulty: ..., etc.}
            this[discipline][$event.routineKey] = score;

            this.checkEvents(score.discipline, this[discipline]);
        },
        submitCompetition: function submitCompetition() {
            var _this = this;

            var attrKeys = ['title', 'location', 'start_date', 'end_date', 'trampoline', 'dmt', 'tumbling', 'trampolineRoutines', 'doubleMiniPasses', 'tumblingPasses'];
            var attrs = {};

            attrKeys.forEach(function (key) {
                attrs[key] = _this[key];
            });

            this.$http.post('/competitions', attrs).then(Vue.getJson).then(function (response) {
                window.location = '/competitions';
            });
        },
        checkEvents: function checkEvents(event, scores) {
            if (!this[event]) return false;

            if (event === 'trampoline') {
                var routines = ['prelim_compulsory', 'prelim_optional', 'semi_final_optional', 'final_optional'];
            } else {
                var routines = ['prelim_pass_1', 'prelim_pass_2', 'final_pass_3', 'final_pass_4'];
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = routines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var routine = _step.value;

                    if (scores.hasOwnProperty(routine) && scores[routine].hasScore()) {
                        this.eventValidations[event] = true;
                        return;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.eventValidations[event] = false;
        },
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this2 = this;

            this.$validator.validateAll().then(function () {
                _this2.submitCompetition();
            }).catch(function () {
                alert('Please correct the errors.');
            });
        }
    }
};


var dictionary = {
    en: {
        attributes: {
            title: 'Competition Title',
            start_date: 'Start Date',
            end_date: 'End Date'
        }
    }
};

__WEBPACK_IMPORTED_MODULE_1_vee_validate__["Validator"].updateDictionary(dictionary);
__WEBPACK_IMPORTED_MODULE_1_vee_validate__["Validator"].installDateTimeValidators(__WEBPACK_IMPORTED_MODULE_0_moment___default.a);

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        var _this = this;

        this.$upload.new('video-upload', {
            async: true,
            maxFiles: 20,
            multiple: true,
            maxSizePerFile: 204800, // 200 MB
            startOnSelect: false,
            extensions: ['mp4', 'webm', 'avi', 'asf', 'wmv', 'mpegts', 'mov', 'flv', 'mkv', '3gp'],
            http: function http(data) {
                data.body.append('visibility', _this.visibility);
                data.body.append('event', _this.event);
                return _this.$http.post(data.url, data.body, { progress: data.progress }).then(data.success, data.error);
            },
            onQueue: function onQueue() {
                this.showQueuedFiles = true;
                this.queued = true;
            },
            onStart: function onStart() {
                this.queued = false;
                this.showQueuedFiles = false;
            },
            onSuccess: function onSuccess(res) {
                window.location = '/videos';
            },
            onEnd: function onEnd() {}
        });
    },
    data: function data() {
        return {
            queued: false,
            showQueuedFiles: false,
            visibility: 'private',

            event: 'trampoline'
        };
    },


    methods: {
        toggleShowQueued: function toggleShowQueued() {
            this.showQueuedFiles = !this.showQueuedFiles;
        }
    },

    mounted: function mounted() {
        this.$upload.reset('video-upload', {
            url: '/upload/multiple',
            currentFiles: 0,
            dropzoneId: 'video-upload-dropzone'
        });
    },
    beforeDestroy: function beforeDestroy() {
        this.$upload.reset('video-upload', {
            dropzoneId: null
        });
    }
};

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {

    props: {
        routineKey: null,
        discipline: null
    },

    data: function data() {
        return {
            uploaded: false,
            filename: null
        };
    },
    created: function created() {
        var _this = this;

        this.$upload.new('video-upload-' + this.routineKey, {
            async: true,
            maxFiles: 1,
            multiple: false,
            maxSizePerFile: 204800, // 200 MB
            startOnSelect: true,
            extensions: ['mp4', 'webm', 'avi', 'asf', 'wmv', 'mpegts', 'mov', 'flv', 'mkv', '3gp'],
            http: function http(data) {
                data.body.append('event', _this.discipline);
                return _this.$http.post(data.url, data.body, { progress: data.progress }).then(data.success, data.error);
            },
            onSuccess: function onSuccess(response) {
                this.$emit('video-uploaded', {
                    video: response.data.data,
                    routineKey: this.routineKey,
                    discipline: this.discipline
                });

                this.uploaded = true;
                this.filename = response.data.data.title;
            }
        });
    },
    mounted: function mounted() {
        this.$upload.reset('video-upload-' + this.routineKey, {
            url: '/upload/multiple',
            currentFiles: 0,
            dropzoneId: 'video-upload-dropzone'
        });
    },
    beforeDestroy: function beforeDestroy() {
        this.$upload.reset('video-upload-' + this.routineKey, {
            dropzoneId: null
        });
    }
};

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            comments: [],
            posting: false,
            body: null,
            replyBody: null,
            replyFormVisible: null,
            replying: false,
            deleting: null
        };
    },

    props: {
        videoUniqueId: null
    },
    methods: {
        deleteComment: function deleteComment(commentId) {
            var _this = this;

            if (!confirm('Are you sure you want to delete this comment?')) return;

            this.deleting = commentId;

            this.$http.delete('/videos/' + this.videoUniqueId + '/comments/' + commentId).then(Vue.getJson).then(function (response) {
                _this.deleteById(commentId);
                _this.deleting = null;
            });
        },
        deleteById: function deleteById(commentId) {
            var _this2 = this;

            this.comments.map(function (comment, index) {
                if (comment.id === commentId) {
                    _this2.comments.splice(index, 1);
                    return;
                }

                comment.replies.data.map(function (reply, replyIndex) {
                    if (reply.id === commentId) {
                        _this2.comments[index].replies.data.splice(replyIndex, 1);
                        return;
                    }
                });
            });
        },
        toggleReplyForm: function toggleReplyForm(commentId) {
            this.replyBody = null;

            if (this.replyFormVisible === commentId) {
                this.replyFormVisible = null;
                return;
            }

            this.replyFormVisible = commentId;
        },
        createReply: function createReply(commentId) {
            var _this3 = this;

            this.replying = true;

            this.$http.post('/videos/' + this.videoUniqueId + '/comments', {
                body: this.replyBody,
                reply_id: commentId
            }).then(Vue.getJson).then(function (response) {
                _this3.comments.map(function (comment, index) {
                    if (comment.id === commentId) {
                        _this3.comments[index].replies.data.push(response.data);
                        return;
                    }
                });

                _this3.replyBody = null;
                _this3.replyFormVisible = null;
                _this3.replying = false;
            }, function (errResponse) {
                console.error('There was a problem posting the reply.', errResponse);
                _this3.replying = false;
            });
        },
        createComment: function createComment() {
            var _this4 = this;

            this.posting = true;

            this.$http.post('/videos/' + this.videoUniqueId + '/comments', {
                body: this.body
            }).then(Vue.getJson).then(function (response) {
                _this4.comments.unshift(response.data);
                _this4.body = null;
                _this4.posting = false;
            }, function (errResponse) {
                console.error('There was a problem posting the comment.', errResponse);
                _this4.posting = false;
            });
        },
        getComments: function getComments() {
            var _this5 = this;

            this.$http.get('/videos/' + this.videoUniqueId + '/comments').then(Vue.getJson).then(function (response) {
                _this5.comments = response.data;
            });
        },
        userUrl: function userUrl(comment) {
            return '/user/' + comment.user.data.id;
        }
    },
    mounted: function mounted() {
        this.getComments();
    }
};

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_video_js__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_video_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_video_js__);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            player: null,
            duration: null
        };
    },

    props: {
        videoUniqueId: null,
        videoUrl: null,
        thumbnailUrl: null
    },
    mounted: function mounted() {
        var _this = this;

        this.player = __WEBPACK_IMPORTED_MODULE_0_video_js___default()('video');

        this.player.on('loadedmetadata', function () {
            _this.duration = Math.round(_this.player.duration());
        });

        setInterval(function () {
            if (_this.hasHitQuotaView()) {
                _this.createView();
            }
        }, 1000);
    },

    methods: {
        hasHitQuotaView: function hasHitQuotaView() {
            if (!this.duration) {
                return false;
            }

            return Math.round(this.player.currentTime()) === Math.round(10 * this.duration / 100);
        },
        createView: function createView() {
            this.$http.post('/videos/' + this.videoUniqueId + '/views');
        }
    }
};

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            uploading: false,
            uploadingComplete: false,
            failed: false,
            saveStatus: null,
            fileProgress: 0,
            authenticated: window.Laravel.user.authenticated,

            // Video model
            unique_id: null,
            user_id: window.Laravel.user.id,
            title: 'Untitled',
            name: window.Laravel.user.name,
            event: 'trampoline',
            visibility: 'private',
            description: null,
            extension: null
        };
    },

    methods: {
        fileInputChange: function fileInputChange() {
            var _this = this;

            this.uploading = true;
            this.failed = false;

            this.file = document.getElementById('video').files[0];

            this.store().then(function () {
                var form = new FormData();

                form.append('video', _this.file);
                form.append('unique_id', _this.unique_id);

                _this.$http.post('/upload', form, {
                    progress: function progress(e) {
                        if (e.lengthComputable) {
                            _this.updateProgress(e);
                        }
                    }
                }).then(function () {
                    _this.uploadingComplete = true;
                }, function (fail) {
                    _this.failed = true;
                });
            }, function (fail) {
                _this.failed = true;
            });
        },
        store: function store() {
            var _this2 = this;

            this.extension = this.file.name.split('.').pop();

            return this.$http.post('/videos', {
                user_id: this.user_id,
                title: this.title,
                description: this.description,
                name: this.name,
                event: this.event,
                extension: this.extension,
                visibility: this.visibility
            }).then(Vue.getJson).then(function (response) {
                _this2.unique_id = response.data.unique_id;
            });
        },
        update: function update() {
            var _this3 = this;

            this.saveStatus = 'Saving changes.';

            return this.$http.put('/videos/' + this.unique_id, {
                title: this.title,
                description: this.description,
                name: this.name,
                event: this.event,
                extension: this.extension,
                visibility: this.visibility
            }).then(function (response) {
                _this3.saveStatus = 'Changes saved.';

                setTimeout(function () {
                    _this3.saveStatus = null;
                }, 3000);
            }, function () {
                _this3.saveStatus = 'Failed to save changes.';
            });
        },
        updateProgress: function updateProgress(e) {
            e.percent = e.loaded / e.total * 100;
            this.fileProgress = e.percent;
        }
    },
    computed: {
        videoUrl: function videoUrl() {
            return this.$root.url + '/videos/' + this.unique_id;
        }
    },
    mounted: function mounted() {
        var _this4 = this;

        window.onbeforeunload = function () {
            if (_this4.uploading && !_this4.uploadingComplete && !_this4.failed) {
                return 'Are you sure you want to navigate away?';
            }
        };
    }
};

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            up: null,
            down: null,
            userVote: null,
            canVote: false
        };
    },

    props: {
        videoUniqueId: null
    },
    mounted: function mounted() {
        this.getVotes();
    },

    methods: {
        getVotes: function getVotes() {
            var _this = this;

            this.$http.get('/videos/' + this.videoUniqueId + '/votes').then(Vue.getJson).then(function (response) {
                _this.up = response.data.up;
                _this.down = response.data.down;
                _this.userVote = response.data.user_vote;
                _this.canVote = response.data.can_vote;
            });
        },
        vote: function vote(type) {
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
        deleteVote: function deleteVote(type) {
            this.$http.delete('/videos/' + this.videoUniqueId + '/votes', { type: type });
        },
        createVote: function createVote(type) {
            this.$http.post('/videos/' + this.videoUniqueId + '/votes', { type: type });
        }
    }
};

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DoubleMiniScore__ = __webpack_require__(339);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            score: null
        };
    },
    created: function created() {
        this.score = new __WEBPACK_IMPORTED_MODULE_1__DoubleMiniScore__["a" /* default */]();
    },


    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__["a" /* default */]]
};

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TrampolineScore__ = __webpack_require__(340);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            score: null
        };
    },
    created: function created() {
        this.score = new __WEBPACK_IMPORTED_MODULE_1__TrampolineScore__["a" /* default */]();
    },


    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__["a" /* default */]]
};

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TumblingScore__ = __webpack_require__(341);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            score: null
        };
    },
    created: function created() {
        this.score = new __WEBPACK_IMPORTED_MODULE_1__TumblingScore__["a" /* default */]();
    },


    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__["a" /* default */]]
};

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(90);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DoubleMiniScore = function (_Score) {
    _inherits(DoubleMiniScore, _Score);

    function DoubleMiniScore() {
        _classCallCheck(this, DoubleMiniScore);

        var _this = _possibleConstructorReturn(this, (DoubleMiniScore.__proto__ || Object.getPrototypeOf(DoubleMiniScore)).call(this));

        _this.discipline = 'dmt';
        _this.label = 'Double Mini';
        _this.routineKeys = ['prelim_pass_1', 'prelim_pass_2', 'final_pass_3', 'final_pass_4'];
        return _this;
    }

    return DoubleMiniScore;
}(__WEBPACK_IMPORTED_MODULE_0__Score__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = DoubleMiniScore;

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(90);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TrampolineScore = function (_Score) {
    _inherits(TrampolineScore, _Score);

    function TrampolineScore() {
        _classCallCheck(this, TrampolineScore);

        var _this = _possibleConstructorReturn(this, (TrampolineScore.__proto__ || Object.getPrototypeOf(TrampolineScore)).call(this));

        _this.discipline = 'trampoline';
        _this.label = 'Trampoline';
        _this.routineKeys = ['prelim_compulsory', 'prelim_optional', 'semi_final_optional', 'final_optional'];

        _this.attrs.time_of_flight = {
            order: 10,
            label: 'TOF',
            title: 'Time of Flight',
            value: null
        };

        _this.attrs.horizontal_displacement = {
            order: 11,
            label: 'HD',
            title: 'Horizontal Displacement',
            value: null
        };

        return _this;
    }

    return TrampolineScore;
}(__WEBPACK_IMPORTED_MODULE_0__Score__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = TrampolineScore;

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(90);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TumblingScore = function (_Score) {
    _inherits(TumblingScore, _Score);

    function TumblingScore() {
        _classCallCheck(this, TumblingScore);

        var _this = _possibleConstructorReturn(this, (TumblingScore.__proto__ || Object.getPrototypeOf(TumblingScore)).call(this));

        _this.discipline = 'tumbling';
        _this.label = 'Tumbling';
        _this.routineKeys = ['prelim_pass_1', 'prelim_pass_2', 'final_pass_3', 'final_pass_4'];
        return _this;
    }

    return TumblingScore;
}(__WEBPACK_IMPORTED_MODULE_0__Score__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = TumblingScore;

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(87);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = __webpack_require__(86);

__webpack_require__(118);

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = __webpack_require__(122);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(117);

window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(329),
  /* template */
  __webpack_require__(802),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/CompetitionForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CompetitionForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75beb2ec", Component.options)
  } else {
    hotAPI.reload("data-v-75beb2ec", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(330),
  /* template */
  __webpack_require__(797),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/MultipleVideoUpload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MultipleVideoUpload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29543d93", Component.options)
  } else {
    hotAPI.reload("data-v-29543d93", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(331),
  /* template */
  __webpack_require__(801),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/RoutineVideo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RoutineVideo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b6c0540", Component.options)
  } else {
    hotAPI.reload("data-v-5b6c0540", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(332),
  /* template */
  __webpack_require__(806),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/VideoComments.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VideoComments.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ee7b2e94", Component.options)
  } else {
    hotAPI.reload("data-v-ee7b2e94", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(333),
  /* template */
  __webpack_require__(800),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/VideoPlayer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VideoPlayer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-450169a3", Component.options)
  } else {
    hotAPI.reload("data-v-450169a3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(334),
  /* template */
  __webpack_require__(803),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/VideoUpload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VideoUpload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ccf667a", Component.options)
  } else {
    hotAPI.reload("data-v-8ccf667a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(335),
  /* template */
  __webpack_require__(799),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/VideoVoting.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VideoVoting.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-319a98e9", Component.options)
  } else {
    hotAPI.reload("data-v-319a98e9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(336),
  /* template */
  __webpack_require__(804),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/scores/DoubleMiniScore.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DoubleMiniScore.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9338a636", Component.options)
  } else {
    hotAPI.reload("data-v-9338a636", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(337),
  /* template */
  __webpack_require__(805),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/scores/TrampolineScore.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TrampolineScore.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e4e3a3a0", Component.options)
  } else {
    hotAPI.reload("data-v-e4e3a3a0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(338),
  /* template */
  __webpack_require__(798),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/scores/TumblingScore.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TumblingScore.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a6a8d21", Component.options)
  } else {
    hotAPI.reload("data-v-2a6a8d21", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Upload Your Videos")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "event"
    }
  }, [_vm._v("Event")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event),
      expression: "event"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "event"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.event = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "trampoline"
    }
  }, [_vm._v("Trampoline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "double mini"
    }
  }, [_vm._v("Double-mini")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tumbling"
    }
  }, [_vm._v("Tumbling")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "visibility"
    }
  }, [_vm._v("Visibility")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.visibility),
      expression: "visibility"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "visibility"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.visibility = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "private"
    }
  }, [_vm._v("Private")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "unlisted"
    }
  }, [_vm._v("Unlisted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "public"
    }
  }, [_vm._v("Public")])])]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.queued),
      expression: "!queued"
    }],
    staticClass: "btn btn-default",
    attrs: {
      "disabled": _vm.$upload.meta('video-upload').status === 'sending'
    },
    on: {
      "click": function($event) {
        _vm.$upload.select('video-upload')
      }
    }
  }, [_vm._v("\n                        Select Videos\n                    ")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.queued),
      expression: "queued"
    }],
    staticClass: "btn btn-default",
    attrs: {
      "disabled": _vm.$upload.meta('video-upload').status === 'sending'
    },
    on: {
      "click": function($event) {
        _vm.$upload.start('video-upload')
      }
    }
  }, [_vm._v("\n                        Start\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "disabled": _vm.$upload.meta('video-upload').status === 'sending'
    },
    on: {
      "click": function () {
        _vm.$upload.reset('video-upload');
        _vm.queued = false
      }
    }
  }, [_vm._v("\n                        Cancel\n                    ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$upload.meta('video-upload').status === 'sending'),
      expression: "$upload.meta('video-upload').status === 'sending'"
    }],
    staticClass: "upload-progress progress"
  }, [_c('div', {
    staticClass: "progress-bar",
    style: ('width: ' + _vm.$upload.meta('video-upload').percentComplete + '%;')
  }, [_vm._v("\n                            " + _vm._s(_vm.$upload.meta('video-upload').percentComplete) + "% Complete\n                        ")])]), _vm._v(" "), (_vm.$upload.errors('video-upload').length) ? _c('div', {
    staticClass: "text-danger"
  }, [_vm._v("\n                        " + _vm._s(_vm.$upload.errors('video-upload')[0].message) + "\n                    ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "upload-result"
  }, [_c('h3', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$upload.files('video-upload').queued.length > 0),
      expression: "$upload.files('video-upload').queued.length > 0"
    }]
  }, [_c('div', {
    staticClass: "label label-default"
  }, [_vm._v("\n                                " + _vm._s(_vm.$upload.files('video-upload').queued.length) + " " + _vm._s(_vm._f("pluralize")(_vm.$upload.files('video-upload').queued.length, 'file')) + " ready\n                            ")]), _vm._v("\n                             \n                            "), _c('button', {
    staticClass: "btn btn-default btn-sm",
    on: {
      "click": _vm.toggleShowQueued
    }
  }, [(_vm.showQueuedFiles) ? _c('i', {
    staticClass: "glyphicon glyphicon-menu-up"
  }) : _vm._e(), _vm._v(" "), (!_vm.showQueuedFiles) ? _c('i', {
    staticClass: "glyphicon glyphicon-menu-down"
  }) : _vm._e()])]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showQueuedFiles),
      expression: "showQueuedFiles"
    }]
  }, _vm._l((_vm.$upload.files('video-upload').queued), function(file) {
    return _c('li', [_vm._v("\n                                " + _vm._s(file.name) + "\n                            ")])
  })), _vm._v(" "), _vm._l((_vm.$upload.files('video-upload').complete), function(file) {
    return _c('div', [(file.errors.length) ? _c('div', [_c('span', {
      staticClass: "label label-danger"
    }, [_vm._v(_vm._s(file.name))]), _vm._v("\n                                " + _vm._s(file.errors[0].message) + "\n                            ")]) : _vm._e(), _vm._v(" "), (!file.errors.length) ? _c('div', [_c('span', {
      staticClass: "label label-success"
    }, [_vm._v(_vm._s(file.name))]), _vm._v("\n                                Uploaded successfully.\n                            ")]) : _vm._e()])
  })], 2)])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-29543d93", module.exports)
  }
}

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group score-tile"
  }, [_c('h5', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('routine-video', {
    attrs: {
      "discipline": _vm.score.discipline,
      "routine-key": _vm.routineKey
    },
    on: {
      "video-uploaded": _vm.videoUploaded
    }
  }), _vm._v(" "), _vm._l((_vm.score.scoreKeys()), function(component_key) {
    return _c('div', [(component_key !== 'total_score') ? _c('div', [_c('label', {
      attrs: {
        "for": _vm.formId(component_key),
        "title": _vm.score.getTitle(component_key)
      }
    }, [_vm._v(_vm._s(_vm.score.getLabel(component_key)))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: (_vm.score.attrs[component_key].value),
        expression: "score.attrs[component_key].value",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "form-control",
      attrs: {
        "name": _vm.formId(component_key),
        "type": "number",
        "step": "any"
      },
      domProps: {
        "value": (_vm.score.attrs[component_key].value)
      },
      on: {
        "change": _vm.computeScore,
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.score.attrs[component_key].value = _vm._n($event.target.value)
        },
        "blur": function($event) {
          _vm.$forceUpdate()
        }
      }
    })]) : _vm._e(), _vm._v(" "), (component_key === 'total_score') ? _c('div', [_c('label', {
      attrs: {
        "for": _vm.formId('total_score'),
        "title": _vm.score.getTitle(component_key)
      }
    }, [_vm._v(_vm._s(_vm.score.getLabel('total_score')))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: (_vm.score.attrs.total_score.value),
        expression: "score.attrs.total_score.value",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "form-control",
      attrs: {
        "name": _vm.formId('total_score'),
        "type": "number",
        "step": "any"
      },
      domProps: {
        "value": (_vm.score.attrs.total_score.value)
      },
      on: {
        "change": _vm.computeTotalScore,
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.score.attrs.total_score.value = _vm._n($event.target.value)
        },
        "blur": function($event) {
          _vm.$forceUpdate()
        }
      }
    })]) : _vm._e()])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a6a8d21", module.exports)
  }
}

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video__voting"
  }, [_c('a', {
    staticClass: "video__voting-button",
    class: {
      'video__voting-button--voted': _vm.userVote == 'up'
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.vote('up')
      }
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-thumbs-up"
  })]), _vm._v(" " + _vm._s(_vm.up) + "  \n\n    "), _c('a', {
    staticClass: "video__voting-button",
    class: {
      'video__voting-button--voted': _vm.userVote == 'down'
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.vote('down')
      }
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-thumbs-down"
  })]), _vm._v(" " + _vm._s(_vm.down) + "\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-319a98e9", module.exports)
  }
}

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('video', {
    staticClass: "video-js vjs-default-skin vjs-big-play-centered vjs-16-9",
    attrs: {
      "id": "video",
      "controls": "",
      "preload": "auto",
      "data-setup": "{\"fluid\": true, \"preload\": \"auto\"}",
      "poster": _vm.thumbnailUrl
    }
  }, [_c('source', {
    attrs: {
      "type": "video/mp4",
      "src": _vm.videoUrl
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-450169a3", module.exports)
  }
}

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.uploaded),
      expression: "!uploaded"
    }],
    staticClass: "btn btn-default btn-xs",
    attrs: {
      "disabled": _vm.$upload.meta('video-upload-' + _vm.routineKey).status === 'sending',
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.$upload.select('video-upload-' + _vm.routineKey)
      }
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-paperclip"
  }), _vm._v(" Attach Video\n    ")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.uploaded),
      expression: "uploaded"
    }]
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-check"
  }), _vm._v(" " + _vm._s(_vm.filename) + " attached.")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$upload.meta('video-upload-' + _vm.routineKey).status === 'sending'),
      expression: "$upload.meta('video-upload-'+routineKey).status === 'sending'"
    }],
    staticClass: "upload-progress progress"
  }, [_c('div', {
    staticClass: "progress-bar",
    style: ('width: ' + _vm.$upload.meta('video-upload-' + _vm.routineKey).percentComplete + '%;')
  }, [_vm._v("\n            " + _vm._s(_vm.$upload.meta('video-upload-' + _vm.routineKey).percentComplete) + "% Complete\n        ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b6c0540", module.exports)
  }
}

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('div', {
    class: {
      'form-group': true, 'has-error': _vm.errors.has('title')
    }
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "title"
    }
  }, [_vm._v("Competition Title")]), _vm._v(" "), _c('p', {
    class: {
      'control': true
    }
  }, [_c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate:title.initial",
      value: ('required'),
      expression: "'required'",
      arg: "title",
      modifiers: {
        "initial": true
      }
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.title),
      expression: "title",
      arg: "title"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "title",
      "type": "text",
      "name": "title"
    },
    domProps: {
      "value": (_vm.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.title = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('title')),
      expression: "errors.has('title')"
    }],
    staticClass: "help-block"
  }, [_c('strong', [_vm._v(_vm._s(_vm.errors.first('title')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "location"
    }
  }, [_vm._v("Location")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.location),
      expression: "location"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "location",
      "type": "text",
      "name": "location"
    },
    domProps: {
      "value": (_vm.location)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.location = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (false),
      expression: "false"
    }],
    staticClass: "help-block"
  }, [_c('strong', [_vm._v("Error message")])])]), _vm._v(" "), _c('div', {
    class: {
      'form-group': true, 'has-error': _vm.errors.has('start_date')
    }
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "start_date"
    }
  }, [_vm._v("Start Date")]), _vm._v(" "), _c('p', {
    class: {
      'control': true
    }
  }, [_c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate:start_date.initial",
      value: ('date_format:YYYY-MM-DD'),
      expression: "'date_format:YYYY-MM-DD'",
      arg: "start_date",
      modifiers: {
        "initial": true
      }
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.start_date),
      expression: "start_date",
      arg: "start_date"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "start_date",
      "type": "date",
      "name": "start_date"
    },
    domProps: {
      "value": (_vm.start_date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.start_date = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('start_date')),
      expression: "errors.has('start_date')"
    }],
    staticClass: "help-block"
  }, [_c('strong', [_vm._v(_vm._s(_vm.errors.first('start_date')))])])])]), _vm._v(" "), _c('div', {
    class: {
      'form-group': true, 'has-error': _vm.errors.has('end_date')
    }
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "end_date"
    }
  }, [_vm._v("Start Date")]), _vm._v(" "), _c('p', {
    class: {
      'control': true
    }
  }, [_c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate:end_date.initial",
      value: ('date_format:YYYY-MM-DD'),
      expression: "'date_format:YYYY-MM-DD'",
      arg: "end_date",
      modifiers: {
        "initial": true
      }
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.end_date),
      expression: "end_date",
      arg: "end_date"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "end_date",
      "type": "date",
      "name": "end_date"
    },
    domProps: {
      "value": (_vm.end_date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.end_date = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('end_date')),
      expression: "errors.has('end_date')"
    }],
    staticClass: "help-block"
  }, [_c('strong', [_vm._v(_vm._s(_vm.errors.first('end_date')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "event-selection"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('h4', [_vm._v("Events")]), _vm._v(" "), _c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.trampoline),
      expression: "trampoline"
    }],
    attrs: {
      "id": "trampoline",
      "type": "checkbox",
      "name": "trampoline"
    },
    domProps: {
      "checked": Array.isArray(_vm.trampoline) ? _vm._i(_vm.trampoline, null) > -1 : (_vm.trampoline)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.trampoline,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.trampoline = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.trampoline = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.trampoline = $$c
        }
      }
    }
  }), _vm._v("\n                Trampoline\n                "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.trampoline),
      expression: "trampoline"
    }],
    staticClass: "btn btn-xs btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.trampolineRoutines.showSemiFinal = !_vm.trampolineRoutines.showSemiFinal
      }
    }
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.trampolineRoutines.showSemiFinal),
      expression: "trampolineRoutines.showSemiFinal"
    }],
    staticClass: "glyphicon glyphicon-ok"
  }), _vm._v(" Semi-Finals\n                ")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.trampoline),
      expression: "trampoline"
    }],
    staticClass: "btn btn-xs btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.trampolineRoutines.showFinal = !_vm.trampolineRoutines.showFinal
      }
    }
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.trampolineRoutines.showFinal),
      expression: "trampolineRoutines.showFinal"
    }],
    staticClass: "glyphicon glyphicon-ok"
  }), _vm._v(" Finals\n                ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.trampoline),
      expression: "trampoline"
    }],
    staticClass: "row"
  }, [_c('div', {
    class: 'col-md-' + _vm.trampColSize
  }, [_c('trampoline-score', {
    attrs: {
      "title": "Compulsory",
      "routine-key": "prelim_compulsory"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1), _vm._v(" "), _c('div', {
    class: 'col-md-' + _vm.trampColSize
  }, [_c('trampoline-score', {
    attrs: {
      "title": "Prelim Optional",
      "routine-key": "prelim_optional"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.trampolineRoutines.showSemiFinal),
      expression: "trampolineRoutines.showSemiFinal"
    }],
    class: 'col-md-' + _vm.trampColSize
  }, [_c('trampoline-score', {
    attrs: {
      "title": "Semi-Final",
      "routine-key": "semi_final_optional"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.trampolineRoutines.showFinal),
      expression: "trampolineRoutines.showFinal"
    }],
    class: 'col-md-' + _vm.trampColSize
  }, [_c('trampoline-score', {
    attrs: {
      "title": "Final Optional",
      "routine-key": "final_optional"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1)]), _vm._v(" "), _c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dmt),
      expression: "dmt"
    }],
    attrs: {
      "id": "dmt",
      "type": "checkbox",
      "name": "dmt"
    },
    domProps: {
      "checked": Array.isArray(_vm.dmt) ? _vm._i(_vm.dmt, null) > -1 : (_vm.dmt)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.dmt,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.dmt = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.dmt = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.dmt = $$c
        }
      }
    }
  }), _vm._v("\n                Double Mini\n                "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dmt),
      expression: "dmt"
    }],
    staticClass: "btn btn-xs btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.doubleMiniPasses.showFinal = !_vm.doubleMiniPasses.showFinal
      }
    }
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.doubleMiniPasses.showFinal),
      expression: "doubleMiniPasses.showFinal"
    }],
    staticClass: "glyphicon glyphicon-ok"
  }), _vm._v(" Finals\n                ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dmt),
      expression: "dmt"
    }],
    staticClass: "row"
  }, [_c('div', {
    class: 'col-md-' + _vm.dmtColSize
  }, [_c('dmt-score', {
    attrs: {
      "title": "Pass 1",
      "routine-key": "prelim_pass_1"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1), _vm._v(" "), _c('div', {
    class: 'col-md-' + _vm.dmtColSize
  }, [_c('dmt-score', {
    attrs: {
      "title": "Pass 2",
      "routine-key": "prelim_pass_2"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.doubleMiniPasses.showFinal),
      expression: "doubleMiniPasses.showFinal"
    }],
    class: 'col-md-' + _vm.dmtColSize
  }, [_c('dmt-score', {
    attrs: {
      "title": "Pass 3",
      "routine-key": "prelim_pass_3"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.doubleMiniPasses.showFinal),
      expression: "doubleMiniPasses.showFinal"
    }],
    class: 'col-md-' + _vm.dmtColSize
  }, [_c('dmt-score', {
    attrs: {
      "title": "Pass 4",
      "routine-key": "prelim_pass_4"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1)]), _vm._v(" "), _c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.tumbling),
      expression: "tumbling"
    }],
    attrs: {
      "id": "tumbling",
      "type": "checkbox",
      "name": "tumbling"
    },
    domProps: {
      "checked": Array.isArray(_vm.tumbling) ? _vm._i(_vm.tumbling, null) > -1 : (_vm.tumbling)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.tumbling,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.tumbling = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.tumbling = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.tumbling = $$c
        }
      }
    }
  }), _vm._v("\n                Tumbling\n                "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tumbling),
      expression: "tumbling"
    }],
    staticClass: "btn btn-xs btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.tumblingPasses.showFinal = !_vm.tumblingPasses.showFinal
      }
    }
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tumblingPasses.showFinal),
      expression: "tumblingPasses.showFinal"
    }],
    staticClass: "glyphicon glyphicon-ok"
  }), _vm._v(" Finals\n                ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tumbling),
      expression: "tumbling"
    }],
    staticClass: "row"
  }, [_c('div', {
    class: 'col-md-' + _vm.tumblingColSize
  }, [_c('tumbling-score', {
    attrs: {
      "title": "Pass 1",
      "routine-key": "prelim_pass_1"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1), _vm._v(" "), _c('div', {
    class: 'col-md-' + _vm.tumblingColSize
  }, [_c('tumbling-score', {
    attrs: {
      "title": "Pass 2",
      "routine-key": "prelim_pass_2"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tumblingPasses.showFinal),
      expression: "tumblingPasses.showFinal"
    }],
    class: 'col-md-' + _vm.tumblingColSize
  }, [_c('tumbling-score', {
    attrs: {
      "title": "Pass 3",
      "routine-key": "prelim_pass_3"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tumblingPasses.showFinal),
      expression: "tumblingPasses.showFinal"
    }],
    class: 'col-md-' + _vm.tumblingColSize
  }, [_c('tumbling-score', {
    attrs: {
      "title": "Pass 4",
      "routine-key": "prelim_pass_4"
    },
    on: {
      "scorechanged": _vm.updateAllScores
    }
  })], 1)])])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "disabled": _vm.errors.any() || _vm.eventsInvalid()
    }
  }, [_vm._v("Submit Competition")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75beb2ec", module.exports)
  }
}

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Upload Your Video")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": _vm.authenticated
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "event"
    }
  }, [_vm._v("Event")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event),
      expression: "event"
    }],
    staticClass: "form-control",
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.event = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "trampoline"
    }
  }, [_vm._v("Trampoline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "double mini"
    }
  }, [_vm._v("Double-mini")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tumbling"
    }
  }, [_vm._v("Tumbling")])])]), _vm._v(" "), (!_vm.uploading) ? _c('input', {
    attrs: {
      "type": "file",
      "name": "video",
      "id": "video",
      "disabled": !_vm.name || !_vm.event
    },
    on: {
      "change": _vm.fileInputChange
    }
  }) : _vm._e(), _vm._v(" "), (_vm.failed) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v("Something went wrong. Please try again.")]) : _vm._e(), _vm._v(" "), (_vm.uploading && !_vm.failed) ? _c('div', {
    attrs: {
      "id": "video-form"
    }
  }, [(!_vm.uploadingComplete) ? _c('div', {
    staticClass: "alert alert-info"
  }, [_c('i', {
    staticClass: "fa fa-refresh fa-spin"
  }), _vm._v(" Your video is uploading...\n                        ")]) : _vm._e(), _vm._v(" "), (_vm.uploadingComplete) ? _c('div', {
    staticClass: "alert alert-success"
  }, [_vm._v("\n                            Upload complete. Video is now processing. "), _c('a', {
    attrs: {
      "href": "/videos"
    }
  }, [_vm._v("Go to your videos.")])]) : _vm._e(), _vm._v(" "), (!_vm.uploadingComplete) ? _c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar",
    style: ({
      width: _vm.fileProgress + '%'
    })
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "title"
    }
  }, [_vm._v("Title")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.title),
      expression: "title"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.title = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "description"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.description),
      expression: "description"
    }],
    staticClass: "form-control",
    domProps: {
      "value": (_vm.description)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.description = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "visibility"
    }
  }, [_vm._v("Visibility")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.visibility),
      expression: "visibility"
    }],
    staticClass: "form-control",
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.visibility = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "private"
    }
  }, [_vm._v("Private")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "unlisted"
    }
  }, [_vm._v("Unlisted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "public"
    }
  }, [_vm._v("Public")])])]), _vm._v(" "), _c('span', {
    staticClass: "help-block pull-right"
  }, [_vm._v(_vm._s(_vm.saveStatus))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.update($event)
      }
    }
  }, [_vm._v("Save Changes")])]) : _vm._e()])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8ccf667a", module.exports)
  }
}

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group score-tile"
  }, [_c('h5', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('routine-video', {
    attrs: {
      "discipline": _vm.score.discipline,
      "routine-key": _vm.routineKey
    },
    on: {
      "video-uploaded": _vm.videoUploaded
    }
  }), _vm._v(" "), _vm._l((_vm.score.scoreKeys()), function(component_key) {
    return _c('div', [(component_key !== 'total_score') ? _c('div', [_c('label', {
      attrs: {
        "for": _vm.formId(component_key),
        "title": _vm.score.getTitle(component_key)
      }
    }, [_vm._v(_vm._s(_vm.score.getLabel(component_key)))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: (_vm.score.attrs[component_key].value),
        expression: "score.attrs[component_key].value",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "form-control",
      attrs: {
        "name": _vm.formId(component_key),
        "type": "number",
        "step": "any"
      },
      domProps: {
        "value": (_vm.score.attrs[component_key].value)
      },
      on: {
        "change": _vm.computeScore,
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.score.attrs[component_key].value = _vm._n($event.target.value)
        },
        "blur": function($event) {
          _vm.$forceUpdate()
        }
      }
    })]) : _vm._e(), _vm._v(" "), (component_key === 'total_score') ? _c('div', [_c('label', {
      attrs: {
        "for": _vm.formId('total_score'),
        "title": _vm.score.getTitle('total_score')
      }
    }, [_vm._v(_vm._s(_vm.score.getLabel('total_score')))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: (_vm.score.attrs.total_score.value),
        expression: "score.attrs.total_score.value",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "form-control",
      attrs: {
        "name": _vm.formId('total_score'),
        "type": "number",
        "step": "any"
      },
      domProps: {
        "value": (_vm.score.attrs.total_score.value)
      },
      on: {
        "change": _vm.computeTotalScore,
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.score.attrs.total_score.value = _vm._n($event.target.value)
        },
        "blur": function($event) {
          _vm.$forceUpdate()
        }
      }
    })]) : _vm._e()])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9338a636", module.exports)
  }
}

/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group score-tile"
  }, [_c('h5', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('routine-video', {
    attrs: {
      "discipline": _vm.score.discipline,
      "routine-key": _vm.routineKey
    },
    on: {
      "video-uploaded": _vm.videoUploaded
    }
  }), _vm._v(" "), _vm._l((_vm.score.scoreKeys()), function(component_key) {
    return _c('div', [(component_key !== 'total_score') ? _c('div', [_c('label', {
      attrs: {
        "for": _vm.formId(component_key),
        "title": _vm.score.getTitle(component_key)
      }
    }, [_vm._v(_vm._s(_vm.score.getLabel(component_key)))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: (_vm.score.attrs[component_key].value),
        expression: "score.attrs[component_key].value",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "form-control",
      attrs: {
        "name": _vm.formId(component_key),
        "type": "number",
        "step": "any"
      },
      domProps: {
        "value": (_vm.score.attrs[component_key].value)
      },
      on: {
        "change": _vm.computeScore,
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.score.attrs[component_key].value = _vm._n($event.target.value)
        },
        "blur": function($event) {
          _vm.$forceUpdate()
        }
      }
    })]) : _vm._e(), _vm._v(" "), (component_key === 'total_score') ? _c('div', [_c('label', {
      attrs: {
        "for": _vm.formId('total_score'),
        "title": _vm.score.getTitle('total_score')
      }
    }, [_vm._v(_vm._s(_vm.score.getLabel('total_score')))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: (_vm.score.attrs.total_score.value),
        expression: "score.attrs.total_score.value",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "form-control",
      attrs: {
        "name": _vm.formId('total_score'),
        "type": "number",
        "step": "any"
      },
      domProps: {
        "value": (_vm.score.attrs.total_score.value)
      },
      on: {
        "change": _vm.computeTotalScore,
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.score.attrs.total_score.value = _vm._n($event.target.value)
        },
        "blur": function($event) {
          _vm.$forceUpdate()
        }
      }
    })]) : _vm._e()])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e4e3a3a0", module.exports)
  }
}

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v(_vm._s(_vm.comments.length) + " " + _vm._s(_vm._f("pluralize")(_vm.comments.length, 'comment')))]), _vm._v(" "), _c('div', {
    staticClass: "video-comment clearfix",
    attrs: {
      "if": "$root.user.authenticated"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.body),
      expression: "body"
    }],
    staticClass: "form-control video-comment__input",
    attrs: {
      "placeholder": "Say something..."
    },
    domProps: {
      "value": (_vm.body)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.body = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pull-right",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.createComment($event)
      }
    }
  }, [(_vm.posting) ? _c('i', {
    staticClass: "glyphicon glyphicon-refresh spinning"
  }) : _vm._e(), _vm._v(" Post\n            ")])])]), _vm._v(" "), _c('ul', {
    staticClass: "media-list"
  }, _vm._l((_vm.comments), function(comment) {
    return _c('li', {
      staticClass: "media"
    }, [_c('div', {
      staticClass: "media-left"
    }, [_c('a', {
      attrs: {
        "href": _vm.userUrl(comment)
      }
    }, [_c('img', {
      staticClass: "media-object img-avatar",
      attrs: {
        "src": comment.user.data.image,
        "alt": comment.user.data.name
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "media-body"
    }, [_c('a', {
      attrs: {
        "href": _vm.userUrl(comment)
      }
    }, [_vm._v(_vm._s(comment.user.data.name))]), _vm._v(" " + _vm._s(comment.created_at_human) + "\n\n                "), (comment.replies.data.length) ? _c('span', [_vm._v("(" + _vm._s(comment.replies.data.length) + "  " + _vm._s(_vm._f("pluralize")(comment.replies.data.length, 'reply', 'replies')) + ")")]) : _vm._e(), _vm._v(" "), _c('p', [_vm._v(_vm._s(comment.body))]), _vm._v(" "), (_vm.$root.user.authenticated) ? _c('ul', {
      staticClass: "list-inline"
    }, [_c('li', [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.toggleReplyForm(comment.id)
        }
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.replyFormVisible === comment.id ? 'Cancel reply' : 'Reply') + "\n                        ")])]), _vm._v(" "), (comment.user_id === _vm.$root.user.id) ? _c('li', [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.deleteComment(comment.id)
        }
      }
    }, [(_vm.deleting === comment.id) ? _c('i', {
      staticClass: "glyphicon glyphicon-refresh spinning"
    }) : _vm._e(), _vm._v(" Delete\n                        ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.replyFormVisible === comment.id) ? _c('div', {
      staticClass: "video-comment clear"
    }, [_c('textarea', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.replyBody),
        expression: "replyBody"
      }],
      staticClass: "form-control video-comment__input",
      domProps: {
        "value": (_vm.replyBody)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.replyBody = $event.target.value
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "pull-right",
      staticStyle: {
        "margin-top": "10px"
      }
    }, [_c('button', {
      staticClass: "btn btn-primary",
      attrs: {
        "type": "submit"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.createReply(comment.id)
        }
      }
    }, [(_vm.replying) ? _c('i', {
      staticClass: "glyphicon glyphicon-refresh spinning"
    }) : _vm._e(), _vm._v(" Reply\n                        ")])])]) : _vm._e(), _vm._v(" "), _vm._l((comment.replies.data), function(reply) {
      return _c('div', {
        staticClass: "media"
      }, [_c('div', {
        staticClass: "media-left"
      }, [_c('a', {
        attrs: {
          "href": _vm.userUrl(reply)
        }
      }, [_c('img', {
        staticClass: "media-object img-avatar",
        attrs: {
          "src": reply.user.data.image,
          "alt": reply.user.data.name
        }
      })])]), _vm._v(" "), _c('div', {
        staticClass: "media-body"
      }, [_c('a', {
        attrs: {
          "href": _vm.userUrl(reply)
        }
      }, [_vm._v(_vm._s(reply.user.data.name))]), _vm._v(" " + _vm._s(reply.created_at_human) + "\n\n                        "), _c('p', [_vm._v(_vm._s(reply.body))]), _vm._v(" "), (_vm.$root.user.authenticated) ? _c('ul', {
        staticClass: "list-inline"
      }, [_c('li', [(reply.user_id === _vm.$root.user.id) ? _c('a', {
        attrs: {
          "href": "#"
        },
        on: {
          "click": function($event) {
            $event.preventDefault();
            _vm.deleteComment(reply.id)
          }
        }
      }, [(_vm.deleting === reply.id) ? _c('i', {
        staticClass: "glyphicon glyphicon-refresh spinning"
      }) : _vm._e(), _vm._v(" Delete\n                                ")]) : _vm._e()])]) : _vm._e()])])
    })], 2)])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ee7b2e94", module.exports)
  }
}

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(309);
module.exports = __webpack_require__(310);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
    function Score() {
        _classCallCheck(this, Score);

        this.attrs = {
            execution: {
                order: 1,
                label: 'Execution',
                title: 'Execution',
                value: null
            },
            difficulty: {
                order: 2,
                label: 'Difficulty',
                title: 'Difficulty',
                value: null
            },
            neutral_deduction: {
                order: 20,
                label: 'ND',
                title: 'Neutral Deduction',
                value: null
            },
            total_score: {
                order: 100,
                label: 'Total Score',
                title: 'Total Score',
                value: null
            }
        };

        this.video_id = null;
    }

    _createClass(Score, [{
        key: 'setVideoId',
        value: function setVideoId(id) {
            this.video_id = id;
        }
    }, {
        key: 'updateAttributes',
        value: function updateAttributes(attributes) {
            var _this = this;

            Object.keys(attributes).forEach(function (key) {
                _this.attrs[key] = attributes[key];
            });
        }
    }, {
        key: 'scoreKeys',
        value: function scoreKeys() {
            var _this2 = this;

            return Object.keys(this.attrs).sort(function (a, b) {
                return _this2.attrs[a].order - _this2.attrs[b].order;
            });
        }
    }, {
        key: 'getLabel',
        value: function getLabel(key) {
            return this.attrs[key].label;
        }
    }, {
        key: 'getTitle',
        value: function getTitle(key) {
            return this.attrs[key].title;
        }
    }, {
        key: 'hasScore',
        value: function hasScore() {
            return this.attrs.total_score.value !== null && this.attrs.total_score.value > 0;
        }
    }]);

    return Score;
}();

/* harmony default export */ __webpack_exports__["a"] = Score;

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var math = __webpack_require__(119);
var _ = __webpack_require__(87);

var ScoreMixin = {

    props: {
        title: null,
        routineKey: null
    },

    methods: {
        formId: function formId(component) {
            return [this.discipline, this.routineKey, component].join('_');
        },
        toggleShowQueued: function toggleShowQueued() {
            this.showQueuedFiles = !this.showQueuedFiles;
        },
        videoUploaded: function videoUploaded(data) {
            this.score.setVideoId(data.video.id);

            this.$emit('scorechanged', {
                routineKey: this.routineKey,
                score: this.score
            });
        },
        computeScore: function computeScore() {
            var _this = this;

            var sum = 0;

            this.score.scoreKeys().forEach(function (component_key) {
                if (component_key === 'neutral_deduction') {
                    sum = _this.score.attrs.neutral_deduction.value ? math.subtract(sum, _this.score.attrs.neutral_deduction.value) : sum;
                } else if (component_key !== 'total_score') {
                    sum = _this.score.attrs[component_key].value ? math.add(sum, _this.score.attrs[component_key].value) : sum;
                }
            });

            this.score.attrs.total_score.value = math.round(sum, 3);

            this.$emit('scorechanged', {
                routineKey: this.routineKey,
                score: this.score
            });
        },
        computeTotalScore: function computeTotalScore() {
            var _this2 = this;

            this.score.scoreKeys().forEach(function (component_key) {
                if (component_key !== 'total_score') {
                    _this2.score.attrs[component_key].value = null;
                }
            });

            this.$emit('scorechanged', {
                routineKey: this.routineKey,
                score: this.score
            });
        },
        mounted: function mounted() {
            this.$upload.reset('video-upload', {
                url: '/upload/multiple',
                currentFiles: 0,
                dropzoneId: 'video-upload-dropzone'
            });
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = ScoreMixin;

/***/ })

},[810]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3M/MjY5MSIsIndlYnBhY2s6Ly8vQ29tcGV0aXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vTXVsdGlwbGVWaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vL1JvdXRpbmVWaWRlby52dWUiLCJ3ZWJwYWNrOi8vL1ZpZGVvQ29tbWVudHMudnVlIiwid2VicGFjazovLy9WaWRlb1BsYXllci52dWUiLCJ3ZWJwYWNrOi8vL1ZpZGVvVXBsb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vVmlkZW9Wb3RpbmcudnVlIiwid2VicGFjazovLy9Eb3VibGVNaW5pU2NvcmUudnVlIiwid2VicGFjazovLy9UcmFtcG9saW5lU2NvcmUudnVlIiwid2VicGFjazovLy9UdW1ibGluZ1Njb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0RvdWJsZU1pbmlTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvVHJhbXBvbGluZVNjb3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvVHVtYmxpbmdTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvQ29tbWVudHMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1BsYXllci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Wb3RpbmcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWU/NGJlNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1R1bWJsaW5nU2NvcmUudnVlPzBmZDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZT9hYzk0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1BsYXllci52dWU/NGM4OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZT8wZDU1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21wZXRpdGlvbkZvcm0udnVlPzhkMjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZT80MDY0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZT9mNmYxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZT8xOTlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZT83ZTcxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvc2NvcmUubWl4aW4uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlZ1ZSIsImNvbXBvbmVudCIsInVzZSIsIndpbmRvdyIsIkV2ZW50IiwiaW5zdGFsbCIsIm9wdGlvbnMiLCJnZXRKc29uIiwicmVzcG9uc2UiLCJqc29uIiwiaHR0cCIsImhlYWRlcnMiLCJjb21tb24iLCJMYXJhdmVsIiwiY3NyZlRva2VuIiwiYXBwIiwiZWwiLCJkYXRhIiwiRG91YmxlTWluaVNjb3JlIiwiZGlzY2lwbGluZSIsImxhYmVsIiwicm91dGluZUtleXMiLCJUcmFtcG9saW5lU2NvcmUiLCJhdHRycyIsInRpbWVfb2ZfZmxpZ2h0Iiwib3JkZXIiLCJ0aXRsZSIsInZhbHVlIiwiaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQiLCJUdW1ibGluZ1Njb3JlIiwiXyIsIiQiLCJqUXVlcnkiLCJheGlvcyIsImRlZmF1bHRzIiwiU2NvcmUiLCJleGVjdXRpb24iLCJkaWZmaWN1bHR5IiwibmV1dHJhbF9kZWR1Y3Rpb24iLCJ0b3RhbF9zY29yZSIsInZpZGVvX2lkIiwiaWQiLCJhdHRyaWJ1dGVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzb3J0IiwiYSIsImIiLCJtYXRoIiwiU2NvcmVNaXhpbiIsInByb3BzIiwicm91dGluZUtleSIsIm1ldGhvZHMiLCJmb3JtSWQiLCJqb2luIiwidG9nZ2xlU2hvd1F1ZXVlZCIsInNob3dRdWV1ZWRGaWxlcyIsInZpZGVvVXBsb2FkZWQiLCJzY29yZSIsInNldFZpZGVvSWQiLCJ2aWRlbyIsIiRlbWl0IiwiY29tcHV0ZVNjb3JlIiwic3VtIiwic2NvcmVLZXlzIiwiY29tcG9uZW50X2tleSIsInN1YnRyYWN0IiwiYWRkIiwicm91bmQiLCJjb21wdXRlVG90YWxTY29yZSIsIm1vdW50ZWQiLCIkdXBsb2FkIiwicmVzZXQiLCJ1cmwiLCJjdXJyZW50RmlsZXMiLCJkcm9wem9uZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0FBTUEsbUJBQUFBLENBQVEsR0FBUjtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BQyxJQUFJQyxTQUFKLENBQWMsY0FBZCxFQUE4QixtQkFBQUYsQ0FBUSxHQUFSLENBQTlCO0FBQ0FDLElBQUlDLFNBQUosQ0FBYyx1QkFBZCxFQUF1QyxtQkFBQUYsQ0FBUSxHQUFSLENBQXZDO0FBQ0FDLElBQUlDLFNBQUosQ0FBYyxjQUFkLEVBQThCLG1CQUFBRixDQUFRLEdBQVIsQ0FBOUI7QUFDQUMsSUFBSUMsU0FBSixDQUFjLGNBQWQsRUFBOEIsbUJBQUFGLENBQVEsR0FBUixDQUE5QjtBQUNBQyxJQUFJQyxTQUFKLENBQWMsZ0JBQWQsRUFBZ0MsbUJBQUFGLENBQVEsR0FBUixDQUFoQztBQUNBQyxJQUFJQyxTQUFKLENBQWMsa0JBQWQsRUFBa0MsbUJBQUFGLENBQVEsR0FBUixDQUFsQztBQUNBQyxJQUFJQyxTQUFKLENBQWMsZUFBZCxFQUErQixtQkFBQUYsQ0FBUSxHQUFSLENBQS9CO0FBQ0FDLElBQUlDLFNBQUosQ0FBYyxrQkFBZCxFQUFrQyxtQkFBQUYsQ0FBUSxHQUFSLENBQWxDO0FBQ0FDLElBQUlDLFNBQUosQ0FBYyxXQUFkLEVBQTJCLG1CQUFBRixDQUFRLEdBQVIsQ0FBM0I7QUFDQUMs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Q0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RUFBOEU7QUFDOUUsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDaE1BLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNybEJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FB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LENBRmlCO0FBRy9CQyw0QkFBWTtBQUhtQixhQUFuQztBQUtIO0FBeERJO0FBUE0sQ0FBbkI7O0FBbUVBLHdEQUFlMUIsVUFBZixDIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuaW1wb3J0IFZ1ZTJGaWx0ZXJzIGZyb20gJ3Z1ZTItZmlsdGVycyc7XG5pbXBvcnQgVmVlVmFsaWRhdGUgZnJvbSAndmVlLXZhbGlkYXRlJztcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cblZ1ZS5jb21wb25lbnQoJ3ZpZGVvLXVwbG9hZCcsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdtdWx0aXBsZS12aWRlby11cGxvYWQnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd2aWRlby1wbGF5ZXInLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndmlkZW8tdm90aW5nJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3ZpZGVvLWNvbW1lbnRzJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL1ZpZGVvQ29tbWVudHMudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnY29tcGV0aXRpb24tZm9ybScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9Db21wZXRpdGlvbkZvcm0udnVlJykpO1xuVnVlLmNvbXBvbmVudCgncm91dGluZS12aWRlbycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9Sb3V0aW5lVmlkZW8udnVlJykpO1xuVnVlLmNvbXBvbmVudCgndHJhbXBvbGluZS1zY29yZScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2RtdC1zY29yZScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3R1bWJsaW5nLXNjb3JlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZScpKTtcblxuVnVlLnVzZShyZXF1aXJlKCd2dWUtcmVzb3VyY2UnKSk7XG5WdWUudXNlKFZ1ZTJGaWx0ZXJzKTtcblZ1ZS51c2UocmVxdWlyZSgnQHdlYnNhbm92YS92dWUtdXBsb2FkJykpO1xuVnVlLnVzZShWZWVWYWxpZGF0ZSk7XG5cbndpbmRvdy5FdmVudCA9IG5ldyBWdWUoKTtcblxuVnVlLnVzZSh7XG4gICAgaW5zdGFsbDogKFZ1ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgICBWdWUuZ2V0SnNvbiA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cblZ1ZS5odHRwLmhlYWRlcnMuY29tbW9uWydYLUNTUkYtVE9LRU4nXSA9IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbjtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBkYXRhOiB3aW5kb3cuTGFyYXZlbCxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwidmFsaWRhdGVCZWZvcmVTdWJtaXRcIj5cblxuICAgICAgICA8IS0tIENvbXBldGl0aW9uIHRpdGxlIC0tPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0aXRsZScpfVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+Q29tcGV0aXRpb24gVGl0bGU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8cCA6Y2xhc3M9XCJ7J2NvbnRyb2wnOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LXZhbGlkYXRlOnRpdGxlLmluaXRpYWw9XCIncmVxdWlyZWQnXCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCd0aXRsZScpXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3JzLmZpcnN0KCd0aXRsZScpIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQ29tcGV0aXRpb24gTG9jYXRpb24gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibG9jYXRpb25cIiBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIj5Mb2NhdGlvbjwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImxvY2F0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJsb2NhdGlvblwiIG5hbWU9XCJsb2NhdGlvblwiPlxuXG4gICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJmYWxzZVwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RXJyb3IgbWVzc2FnZTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENvbXBldGl0aW9uIFN0YXJ0IERhdGUgLS0+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwieydmb3JtLWdyb3VwJzogdHJ1ZSwgJ2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKX1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGFydF9kYXRlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+U3RhcnQgRGF0ZTwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxwIDpjbGFzcz1cInsnY29udHJvbCc6IHRydWV9XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHYtdmFsaWRhdGU6c3RhcnRfZGF0ZS5pbml0aWFsPVwiJ2RhdGVfZm9ybWF0OllZWVktTU0tREQnXCIgaWQ9XCJzdGFydF9kYXRlXCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJzdGFydF9kYXRlXCIgbmFtZT1cInN0YXJ0X2RhdGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCdzdGFydF9kYXRlJylcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QoJ3N0YXJ0X2RhdGUnKSB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBDb21wZXRpdGlvbiBFbmQgRGF0ZSAtLT5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7J2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZW5kX2RhdGUnKX1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbmRfZGF0ZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPlN0YXJ0IERhdGU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8cCA6Y2xhc3M9XCJ7J2NvbnRyb2wnOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LXZhbGlkYXRlOmVuZF9kYXRlLmluaXRpYWw9XCInZGF0ZV9mb3JtYXQ6WVlZWS1NTS1ERCdcIiBpZD1cImVuZF9kYXRlXCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJlbmRfZGF0ZVwiIG5hbWU9XCJlbmRfZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImVycm9ycy5oYXMoJ2VuZF9kYXRlJylcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QoJ2VuZF9kYXRlJykgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gRXZlbnQgc2VsZWN0aW9uIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtc2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoND5FdmVudHM8L2g0PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0cmFtcG9saW5lXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInRyYW1wb2xpbmVcIiB2LW1vZGVsPVwidHJhbXBvbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICBUcmFtcG9saW5lXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwidHJhbXBvbGluZVwiIEBjbGljaz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsID0gIXRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1zaG93PVwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tb2tcIj48L2k+IFNlbWktRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInRyYW1wb2xpbmVcIiBAY2xpY2s9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsID0gIXRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LXNob3c9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwidHJhbXBvbGluZVwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHJhbXBDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIkNvbXB1bHNvcnlcIiByb3V0aW5lLWtleT1cInByZWxpbV9jb21wdWxzb3J5XCIgQHNjb3JlY2hhbmdlZD1cInVwZGF0ZUFsbFNjb3Jlc1wiPjwvdHJhbXBvbGluZS1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHJhbXBDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIlByZWxpbSBPcHRpb25hbFwiIHJvdXRpbmUta2V5PVwicHJlbGltX29wdGlvbmFsXCIgQHNjb3JlY2hhbmdlZD1cInVwZGF0ZUFsbFNjb3Jlc1wiPjwvdHJhbXBvbGluZS1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHJhbXBDb2xTaXplXCIgdi1zaG93PVwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFtcG9saW5lLXNjb3JlIHRpdGxlPVwiU2VtaS1GaW5hbFwiIHJvdXRpbmUta2V5PVwic2VtaV9maW5hbF9vcHRpb25hbFwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L3RyYW1wb2xpbmUtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHRyYW1wQ29sU2l6ZVwiIHYtc2hvdz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFtcG9saW5lLXNjb3JlIHRpdGxlPVwiRmluYWwgT3B0aW9uYWxcIiByb3V0aW5lLWtleT1cImZpbmFsX29wdGlvbmFsXCIgQHNjb3JlY2hhbmdlZD1cInVwZGF0ZUFsbFNjb3Jlc1wiPjwvdHJhbXBvbGluZS1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRtdFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkbXRcIiB2LW1vZGVsPVwiZG10XCI+XG4gICAgICAgICAgICAgICAgICAgIERvdWJsZSBNaW5pXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwiZG10XCIgQGNsaWNrPVwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwgPSAhZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LXNob3c9XCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvaT4gRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImRtdFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRtdC1zY29yZSB0aXRsZT1cIlBhc3MgMVwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfMVwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRtdC1zY29yZSB0aXRsZT1cIlBhc3MgMlwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfMlwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyAzXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fcGFzc18zXCIgQHNjb3JlY2hhbmdlZD1cInVwZGF0ZUFsbFNjb3Jlc1wiPjwvZG10LXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyBkbXRDb2xTaXplXCIgdi1zaG93PVwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbXQtc2NvcmUgdGl0bGU9XCJQYXNzIDRcIiByb3V0aW5lLWtleT1cInByZWxpbV9wYXNzXzRcIiBAc2NvcmVjaGFuZ2VkPVwidXBkYXRlQWxsU2NvcmVzXCI+PC9kbXQtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0dW1ibGluZ1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ0dW1ibGluZ1wiIHYtbW9kZWw9XCJ0dW1ibGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICBUdW1ibGluZ1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInR1bWJsaW5nXCIgQGNsaWNrPVwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsID0gIXR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtc2hvdz1cInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvaT4gRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtc2hvdz1cInR1bWJsaW5nXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgMVwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfMVwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgMlwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfMlwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIiB2LXNob3c9XCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgM1wiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfM1wiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIiB2LXNob3c9XCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgNFwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfNFwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIDpkaXNhYmxlZD1cImVycm9ycy5hbnkoKSB8fCBldmVudHNJbnZhbGlkKClcIj5TdWJtaXQgQ29tcGV0aXRpb248L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuICAgIGNvbnN0IGRpc2NpcGxpbmVNYXAgPSB7XG4gICAgICAgIHRyYW1wb2xpbmU6ICd0cmFtcG9saW5lUm91dGluZXMnLFxuICAgICAgICBkbXQ6ICdkb3VibGVNaW5pUGFzc2VzJyxcbiAgICAgICAgdHVtYmxpbmc6ICd0dW1ibGluZ1Bhc3NlcycsXG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiBudWxsLFxuICAgICAgICAgICAgICAgIGVuZF9kYXRlOiBudWxsLFxuXG4gICAgICAgICAgICAgICAgdHJhbXBvbGluZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG10OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0dW1ibGluZzogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBldmVudFZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW1wb2xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkbXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0dW1ibGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHRyYW1wb2xpbmVSb3V0aW5lczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93U2VtaUZpbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0ZpbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdWJsZU1pbmlQYXNzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0ZpbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR1bWJsaW5nUGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdHJhbXBDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWwgJiYgdGhpcy50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzMnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsIHx8IHRoaXMudHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc0JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkbXRDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCkgPyAnMycgOiAnNic7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHVtYmxpbmdDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpID8gJzMnIDogJzYnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBldmVudHNJbnZhbGlkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIXRoaXMuZXZlbnRWYWxpZGF0aW9ucy50cmFtcG9saW5lICYmICF0aGlzLmV2ZW50VmFsaWRhdGlvbnMuZG10ICYmICF0aGlzLmV2ZW50VmFsaWRhdGlvbnMudHVtYmxpbmcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZUFsbFNjb3JlcygkZXZlbnQpIHtcblxuICAgICAgICAgICAgICAgIGxldCBzY29yZSA9ICRldmVudC5zY29yZTtcbiAgICAgICAgICAgICAgICBsZXQgZGlzY2lwbGluZSA9IGRpc2NpcGxpbmVNYXBbc2NvcmUuZGlzY2lwbGluZV07XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRyYW1wb2xpbmVSb3V0aW5lc1sncHJlbGltX2NvbXB1bHNvcnknXSA9IHtleGVjdXRpb246IC4uLiwgZGlmZmljdWx0eTogLi4uLCBldGMufVxuICAgICAgICAgICAgICAgIHRoaXNbZGlzY2lwbGluZV1bJGV2ZW50LnJvdXRpbmVLZXldID0gc2NvcmU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRXZlbnRzKHNjb3JlLmRpc2NpcGxpbmUsIHRoaXNbZGlzY2lwbGluZV0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdENvbXBldGl0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBhdHRyS2V5cyA9IFsndGl0bGUnLCAnbG9jYXRpb24nLCAnc3RhcnRfZGF0ZScsICdlbmRfZGF0ZScsICd0cmFtcG9saW5lJywgJ2RtdCcsICd0dW1ibGluZycsICd0cmFtcG9saW5lUm91dGluZXMnLCAnZG91YmxlTWluaVBhc3NlcycsICd0dW1ibGluZ1Bhc3NlcyddO1xuICAgICAgICAgICAgICAgIGxldCBhdHRycyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgYXR0cktleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy9jb21wZXRpdGlvbnMnLCBhdHRycykudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jb21wZXRpdGlvbnMnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2hlY2tFdmVudHMoZXZlbnQsIHNjb3Jlcykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpc1tldmVudF0pIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChldmVudCA9PT0gJ3RyYW1wb2xpbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3V0aW5lcyA9IFsncHJlbGltX2NvbXB1bHNvcnknLCAncHJlbGltX29wdGlvbmFsJywgJ3NlbWlfZmluYWxfb3B0aW9uYWwnLCAnZmluYWxfb3B0aW9uYWwnXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGluZXMgPSBbJ3ByZWxpbV9wYXNzXzEnLCAncHJlbGltX3Bhc3NfMicsICdmaW5hbF9wYXNzXzMnLCAnZmluYWxfcGFzc180J107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm91dGluZSBvZiByb3V0aW5lcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmVzLmhhc093blByb3BlcnR5KHJvdXRpbmUpICYmIHNjb3Jlc1tyb3V0aW5lXS5oYXNTY29yZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50VmFsaWRhdGlvbnNbZXZlbnRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRWYWxpZGF0aW9uc1tldmVudF0gPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZUJlZm9yZVN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRDb21wZXRpdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBjb3JyZWN0IHRoZSBlcnJvcnMuJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAndmVlLXZhbGlkYXRlJztcbiAgICBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICAgICBlbjoge1xuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29tcGV0aXRpb24gVGl0bGUnLFxuICAgICAgICAgICAgICAgIHN0YXJ0X2RhdGU6ICdTdGFydCBEYXRlJyxcbiAgICAgICAgICAgICAgICBlbmRfZGF0ZTogJ0VuZCBEYXRlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgVmFsaWRhdG9yLnVwZGF0ZURpY3Rpb25hcnkoZGljdGlvbmFyeSk7XG4gICAgVmFsaWRhdG9yLmluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMobW9tZW50KTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDb21wZXRpdGlvbkZvcm0udnVlPzQ5ZjUwOTUzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+VXBsb2FkIFlvdXIgVmlkZW9zPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXZlbnRcIj5FdmVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZXZlbnRcIiB2LW1vZGVsPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRyYW1wb2xpbmVcIj5UcmFtcG9saW5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkb3VibGUgbWluaVwiPkRvdWJsZS1taW5pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0dW1ibGluZ1wiPlR1bWJsaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidmlzaWJpbGl0eVwiPlZpc2liaWxpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInZpc2liaWxpdHlcIiB2LW1vZGVsPVwidmlzaWJpbGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpdmF0ZVwiPlByaXZhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVubGlzdGVkXCI+VW5saXN0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB1YmxpY1wiPlB1YmxpYzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwiIXF1ZXVlZFwiIEBjbGljaz1cIiR1cGxvYWQuc2VsZWN0KCd2aWRlby11cGxvYWQnKVwiIDpkaXNhYmxlZD1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBWaWRlb3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInF1ZXVlZFwiIEBjbGljaz1cIiR1cGxvYWQuc3RhcnQoJ3ZpZGVvLXVwbG9hZCcpXCIgOmRpc2FibGVkPVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIigpID0+IHskdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnKTtxdWV1ZWQgPSBmYWxzZX1cIiA6ZGlzYWJsZWQ9XCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCIgdi1zaG93PVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyAkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnBlcmNlbnRDb21wbGV0ZSArICclOydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5wZXJjZW50Q29tcGxldGUgfX0lIENvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHVwbG9hZC5lcnJvcnMoJ3ZpZGVvLXVwbG9hZCcpLmxlbmd0aFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdXBsb2FkLmVycm9ycygndmlkZW8tdXBsb2FkJylbMF0ubWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtcmVzdWx0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgdi1zaG93PVwiJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsIGxhYmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggfX0ge3sgJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCB8IHBsdXJhbGl6ZSgnZmlsZScpIH19IHJlYWR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVTaG93UXVldWVkXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwic2hvd1F1ZXVlZEZpbGVzXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwiIXNob3dRdWV1ZWRGaWxlc1wiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgdi1zaG93PVwic2hvd1F1ZXVlZEZpbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImZpbGUgaW4gJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWxlLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImZpbGUgaW4gJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykuY29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmlsZS5lcnJvcnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWRhbmdlclwiPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpbGUuZXJyb3JzWzBdLm1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWZpbGUuZXJyb3JzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+e3sgZmlsZS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5uZXcoJ3ZpZGVvLXVwbG9hZCcsIHtcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXhGaWxlczogMjAsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbWF4U2l6ZVBlckZpbGU6IDIwNDgwMCwgLy8gMjAwIE1CXG4gICAgICAgICAgICAgICAgc3RhcnRPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogWydtcDQnLCAnd2VibScsICdhdmknLCAnYXNmJywgJ3dtdicsICdtcGVndHMnLCAnbW92JywgJ2ZsdicsICdta3YnLCAnM2dwJ10sXG4gICAgICAgICAgICAgICAgaHR0cDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5ib2R5LmFwcGVuZCgndmlzaWJpbGl0eScsIHRoaXMudmlzaWJpbGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYm9keS5hcHBlbmQoJ2V2ZW50JywgdGhpcy5ldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QoZGF0YS51cmwsIGRhdGEuYm9keSwge3Byb2dyZXNzOiBkYXRhLnByb2dyZXNzfSkudGhlbihkYXRhLnN1Y2Nlc3MsIGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25RdWV1ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UXVldWVkRmlsZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN0YXJ0KCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dRdWV1ZWRGaWxlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL3ZpZGVvcyc7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkVuZCgpIHtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93UXVldWVkRmlsZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJyxcblxuICAgICAgICAgICAgICAgIGV2ZW50OiAndHJhbXBvbGluZScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdG9nZ2xlU2hvd1F1ZXVlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dRdWV1ZWRGaWxlcyA9ICF0aGlzLnNob3dRdWV1ZWRGaWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3VwbG9hZC9tdWx0aXBsZScsXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGVzOiAwLFxuICAgICAgICAgICAgICAgIGRyb3B6b25lSWQ6ICd2aWRlby11cGxvYWQtZHJvcHpvbmUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkJywge1xuICAgICAgICAgICAgICAgIGRyb3B6b25lSWQ6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBNdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZT82ODJmMGZhYSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIHYtc2hvdz1cIiF1cGxvYWRlZFwiIEBjbGljaz1cIiR1cGxvYWQuc2VsZWN0KCd2aWRlby11cGxvYWQtJytyb3V0aW5lS2V5KVwiIDpkaXNhYmxlZD1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkLScrcm91dGluZUtleSkuc3RhdHVzID09PSAnc2VuZGluZydcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4teHNcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGFwZXJjbGlwXCI+PC9pPiBBdHRhY2ggVmlkZW9cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPHNwYW4gdi1zaG93PVwidXBsb2FkZWRcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hlY2tcIj48L2k+IHt7IGZpbGVuYW1lIH19IGF0dGFjaGVkLjwvc3Bhbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCIgdi1zaG93PVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQtJytyb3V0aW5lS2V5KS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIDpzdHlsZT1cIid3aWR0aDogJyArICR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkLScrcm91dGluZUtleSkucGVyY2VudENvbXBsZXRlICsgJyU7J1wiPlxuICAgICAgICAgICAgICAgIHt7ICR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkLScrcm91dGluZUtleSkucGVyY2VudENvbXBsZXRlIH19JSBDb21wbGV0ZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHJvdXRpbmVLZXk6IG51bGwsXG4gICAgICAgICAgICBkaXNjaXBsaW5lOiBudWxsLFxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVwbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmaWxlbmFtZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLm5ldygndmlkZW8tdXBsb2FkLScrdGhpcy5yb3V0aW5lS2V5LCB7XG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgbWF4RmlsZXM6IDEsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1heFNpemVQZXJGaWxlOiAyMDQ4MDAsIC8vIDIwMCBNQlxuICAgICAgICAgICAgICAgIHN0YXJ0T25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogWydtcDQnLCAnd2VibScsICdhdmknLCAnYXNmJywgJ3dtdicsICdtcGVndHMnLCAnbW92JywgJ2ZsdicsICdta3YnLCAnM2dwJ10sXG4gICAgICAgICAgICAgICAgaHR0cDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5ib2R5LmFwcGVuZCgnZXZlbnQnLCB0aGlzLmRpc2NpcGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KGRhdGEudXJsLCBkYXRhLmJvZHksIHtwcm9ncmVzczogZGF0YS5wcm9ncmVzc30pLnRoZW4oZGF0YS5zdWNjZXNzLCBkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd2aWRlby11cGxvYWRlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvOiByZXNwb25zZS5kYXRhLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNjaXBsaW5lOiB0aGlzLmRpc2NpcGxpbmUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVuYW1lID0gcmVzcG9uc2UuZGF0YS5kYXRhLnRpdGxlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQtJyt0aGlzLnJvdXRpbmVLZXksIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdXBsb2FkL211bHRpcGxlJyxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZXM6IDAsXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVJZDogJ3ZpZGVvLXVwbG9hZC1kcm9wem9uZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQtJyt0aGlzLnJvdXRpbmVLZXksIHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUlkOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJvdXRpbmVWaWRlby52dWU/M2FhYmRhMTQiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHA+e3sgY29tbWVudHMubGVuZ3RoIH19IHt7IGNvbW1lbnRzLmxlbmd0aCB8IHBsdXJhbGl6ZSgnY29tbWVudCcpIH19PC9wPlxuXG4gICAgICAgIDwhLS0gVmlkZW8gY29tbWVudCBib3ggLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1jb21tZW50IGNsZWFyZml4XCIgaWY9XCIkcm9vdC51c2VyLmF1dGhlbnRpY2F0ZWRcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlNheSBzb21ldGhpbmcuLi5cIiBjbGFzcz1cImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiIHYtbW9kZWw9XCJib2R5XCI+PC90ZXh0YXJlYT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIiBzdHlsZT1cIm1hcmdpbi10b3A6MTBweFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJjcmVhdGVDb21tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCIgdi1pZj1cInBvc3RpbmdcIj48L2k+IFBvc3RcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIExpc3Qgb2YgY29tbWVudHMgLS0+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1lZGlhLWxpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lZGlhXCIgdi1mb3I9XCJjb21tZW50IGluIGNvbW1lbnRzXCI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIFVzZXIgaW1hZ2UgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJ1c2VyVXJsKGNvbW1lbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtYmluZDpzcmM9XCJjb21tZW50LnVzZXIuZGF0YS5pbWFnZVwiIDphbHQ9XCJjb21tZW50LnVzZXIuZGF0YS5uYW1lXCIgY2xhc3M9XCJtZWRpYS1vYmplY3QgaW1nLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIENvbW1lbnQgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJ1c2VyVXJsKGNvbW1lbnQpXCI+e3sgY29tbWVudC51c2VyLmRhdGEubmFtZSB9fTwvYT4ge3sgY29tbWVudC5jcmVhdGVkX2F0X2h1bWFuIH19XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aFwiPih7eyBjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGggfX0gIHt7IGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCB8IHBsdXJhbGl6ZSgncmVwbHknLCAncmVwbGllcycpIH19KTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8cD57eyBjb21tZW50LmJvZHkgfX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBDb21tZW50IHJlcGx5L2RlbGV0ZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmVcIiB2LWlmPVwiJHJvb3QudXNlci5hdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInRvZ2dsZVJlcGx5Rm9ybShjb21tZW50LmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyByZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50LmlkID8gJ0NhbmNlbCByZXBseScgOiAnUmVwbHknIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwiY29tbWVudC51c2VyX2lkID09PSAkcm9vdC51c2VyLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cImRlbGV0ZUNvbW1lbnQoY29tbWVudC5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIiB2LWlmPVwiZGVsZXRpbmcgPT09IGNvbW1lbnQuaWRcIj48L2k+IERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXBseSBib3ggLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1jb21tZW50IGNsZWFyXCIgdi1pZj1cInJlcGx5Rm9ybVZpc2libGUgPT09IGNvbW1lbnQuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiIHYtbW9kZWw9XCJyZXBseUJvZHlcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIiBzdHlsZT1cIm1hcmdpbi10b3A6MTBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJjcmVhdGVSZXBseShjb21tZW50LmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiIHYtaWY9XCJyZXBseWluZ1wiPjwvaT4gUmVwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFJlcGxpZXMgdG8gY29tbWVudCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCIgdi1mb3I9XCJyZXBseSBpbiBjb21tZW50LnJlcGxpZXMuZGF0YVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFVzZXIgaW1hZ2UgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXNlclVybChyZXBseSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWJpbmQ6c3JjPVwicmVwbHkudXNlci5kYXRhLmltYWdlXCIgOmFsdD1cInJlcGx5LnVzZXIuZGF0YS5uYW1lXCIgY2xhc3M9XCJtZWRpYS1vYmplY3QgaW1nLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFJlcGx5IGJvZHkgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXNlclVybChyZXBseSlcIj57eyByZXBseS51c2VyLmRhdGEubmFtZSB9fTwvYT4ge3sgcmVwbHkuY3JlYXRlZF9hdF9odW1hbiB9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgcmVwbHkuYm9keSB9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lXCIgdi1pZj1cIiRyb290LnVzZXIuYXV0aGVudGljYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwiZGVsZXRlQ29tbWVudChyZXBseS5pZClcIiB2LWlmPVwicmVwbHkudXNlcl9pZCA9PT0gJHJvb3QudXNlci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCIgdi1pZj1cImRlbGV0aW5nID09PSByZXBseS5pZFwiPjwvaT4gRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tbWVudHM6IFtdLFxuICAgICAgICAgICAgICAgIHBvc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJvZHk6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVwbHlCb2R5OiBudWxsLFxuICAgICAgICAgICAgICAgIHJlcGx5Rm9ybVZpc2libGU6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVwbHlpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlbGV0aW5nOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2aWRlb1VuaXF1ZUlkOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRlbGV0ZUNvbW1lbnQoY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tbWVudD8nKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGluZyA9IGNvbW1lbnRJZDtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZGVsZXRlKCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL2NvbW1lbnRzLycgKyBjb21tZW50SWQpLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQnlJZChjb21tZW50SWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0aW5nID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVCeUlkKGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudC5pZCA9PT0gY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LnJlcGxpZXMuZGF0YS5tYXAoKHJlcGx5LCByZXBseUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwbHkuaWQgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNbaW5kZXhdLnJlcGxpZXMuZGF0YS5zcGxpY2UocmVwbHlJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVSZXBseUZvcm0oY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBseUJvZHkgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVwbHlGb3JtVmlzaWJsZSA9PT0gY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbHlGb3JtVmlzaWJsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlcGx5Rm9ybVZpc2libGUgPSBjb21tZW50SWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlUmVwbHkoY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBseWluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvY29tbWVudHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMucmVwbHlCb2R5LFxuICAgICAgICAgICAgICAgICAgICByZXBseV9pZDogY29tbWVudElkXG4gICAgICAgICAgICAgICAgfSkudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudC5pZCA9PT0gY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50c1tpbmRleF0ucmVwbGllcy5kYXRhLnB1c2gocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGx5Qm9keSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbHlGb3JtVmlzaWJsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbHlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBwb3N0aW5nIHRoZSByZXBseS4nLCBlcnJSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbHlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy9jb21tZW50cycsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogdGhpcy5ib2R5XG4gICAgICAgICAgICAgICAgfSkudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBwb3N0aW5nIHRoZSBjb21tZW50LicsIGVyclJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Q29tbWVudHMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvY29tbWVudHMnKS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXJVcmwoY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnL3VzZXIvJyArIGNvbW1lbnQudXNlci5kYXRhLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21tZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZpZGVvQ29tbWVudHMudnVlPzJhZjY3ODg1IiwiPHRlbXBsYXRlPlxuICAgIDx2aWRlb1xuICAgICAgICAgICAgaWQ9XCJ2aWRlb1wiXG4gICAgICAgICAgICBjbGFzcz1cInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW4gdmpzLWJpZy1wbGF5LWNlbnRlcmVkIHZqcy0xNi05XCJcbiAgICAgICAgICAgIGNvbnRyb2xzIHByZWxvYWQ9XCJhdXRvXCJcbiAgICAgICAgICAgIGRhdGEtc2V0dXA9J3tcImZsdWlkXCI6IHRydWUsIFwicHJlbG9hZFwiOiBcImF1dG9cIn0nXG4gICAgICAgICAgICB2LWJpbmQ6cG9zdGVyPVwidGh1bWJuYWlsVXJsXCJcbiAgICA+XG4gICAgICAgIDxzb3VyY2UgdHlwZT1cInZpZGVvL21wNFwiIHYtYmluZDpzcmM9XCJ2aWRlb1VybFwiIC8+XG4gICAgPC92aWRlbz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHZpZGVvanMgZnJvbSBcInZpZGVvLmpzXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBsYXllcjogbnVsbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmlkZW9VbmlxdWVJZDogbnVsbCxcbiAgICAgICAgICAgIHZpZGVvVXJsOiBudWxsLFxuICAgICAgICAgICAgdGh1bWJuYWlsVXJsOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IHZpZGVvanMoJ3ZpZGVvJyk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9uKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5yb3VuZCh0aGlzLnBsYXllci5kdXJhdGlvbigpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzSGl0UXVvdGFWaWV3KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGhhc0hpdFF1b3RhVmlldygpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMucGxheWVyLmN1cnJlbnRUaW1lKCkpID09PSBNYXRoLnJvdW5kKCgxMCAqIHRoaXMuZHVyYXRpb24pIC8gMTAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVWaWV3KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy92aWV3cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZpZGVvUGxheWVyLnZ1ZT83NzgxNWVjNyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlVwbG9hZCBZb3VyIFZpZGVvPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cIm5hbWVcIiA6ZGlzYWJsZWQ9XCJhdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXZlbnRcIj5FdmVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHJhbXBvbGluZVwiPlRyYW1wb2xpbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRvdWJsZSBtaW5pXCI+RG91YmxlLW1pbmk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInR1bWJsaW5nXCI+VHVtYmxpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwidmlkZW9cIiBpZD1cInZpZGVvXCIgQGNoYW5nZT1cImZpbGVJbnB1dENoYW5nZVwiIHYtaWY9XCIhdXBsb2FkaW5nXCIgOmRpc2FibGVkPVwiIW5hbWUgfHwgIWV2ZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiB2LWlmPVwiZmFpbGVkXCI+U29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWRlby1mb3JtXCIgdi1pZj1cInVwbG9hZGluZyAmJiAhZmFpbGVkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHYtaWY9XCIhdXBsb2FkaW5nQ29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIj48L2k+IFlvdXIgdmlkZW8gaXMgdXBsb2FkaW5nLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiB2LWlmPVwidXBsb2FkaW5nQ29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGNvbXBsZXRlLiBWaWRlbyBpcyBub3cgcHJvY2Vzc2luZy4gPGEgaHJlZj1cIi92aWRlb3NcIj5HbyB0byB5b3VyIHZpZGVvcy48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiB2LWlmPVwiIXVwbG9hZGluZ0NvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiB2LWJpbmQ6c3R5bGU9XCJ7IHdpZHRoOiBmaWxlUHJvZ3Jlc3MgKyAnJScgfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInZpc2liaWxpdHlcIj5WaXNpYmlsaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJ2aXNpYmlsaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpdmF0ZVwiPlByaXZhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1bmxpc3RlZFwiPlVubGlzdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHVibGljXCI+UHVibGljPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrIHB1bGwtcmlnaHRcIj57eyBzYXZlU3RhdHVzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrLnByZXZlbnQ9XCJ1cGRhdGVcIj5TYXZlIENoYW5nZXM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVwbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXBsb2FkaW5nQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhaWxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2F2ZVN0YXR1czogbnVsbCxcbiAgICAgICAgICAgICAgICBmaWxlUHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogd2luZG93LkxhcmF2ZWwudXNlci5hdXRoZW50aWNhdGVkLFxuXG4gICAgICAgICAgICAgICAgLy8gVmlkZW8gbW9kZWxcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogd2luZG93LkxhcmF2ZWwudXNlci5pZCxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1VudGl0bGVkJyxcbiAgICAgICAgICAgICAgICBuYW1lOiB3aW5kb3cuTGFyYXZlbC51c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICd0cmFtcG9saW5lJyxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBmaWxlSW5wdXRDaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFpbGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKS5maWxlc1swXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgndmlkZW8nLCB0aGlzLmZpbGUpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgndW5pcXVlX2lkJywgdGhpcy51bmlxdWVfaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3VwbG9hZCcsIGZvcm0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRpbmdDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sIChmYWlsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIChmYWlsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHN0b3JlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gdGhpcy5maWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MnLCB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMudXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb246IHRoaXMuZXh0ZW5zaW9uLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB0aGlzLnZpc2liaWxpdHksXG4gICAgICAgICAgICAgICAgfSkudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmlxdWVfaWQgPSByZXNwb25zZS5kYXRhLnVuaXF1ZV9pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdHVzID0gJ1NhdmluZyBjaGFuZ2VzLic7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5wdXQoJy92aWRlb3MvJyArIHRoaXMudW5pcXVlX2lkLCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiB0aGlzLmV4dGVuc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdGhpcy52aXNpYmlsaXR5LFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXR1cyA9ICdDaGFuZ2VzIHNhdmVkLic7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0dXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdHVzID0gJ0ZhaWxlZCB0byBzYXZlIGNoYW5nZXMuJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGVQcm9ncmVzcyhlKSB7XG4gICAgICAgICAgICAgICAgZS5wZXJjZW50ID0gKGUubG9hZGVkIC8gZS50b3RhbCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlUHJvZ3Jlc3MgPSBlLnBlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB2aWRlb1VybDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJvb3QudXJsICsgJy92aWRlb3MvJyArIHRoaXMudW5pcXVlX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwbG9hZGluZyAmJiAhdGhpcy51cGxvYWRpbmdDb21wbGV0ZSAmJiAhdGhpcy5mYWlsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbmF2aWdhdGUgYXdheT8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZpZGVvVXBsb2FkLnZ1ZT8xOTYwZTEzMSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwidmlkZW9fX3ZvdGluZ1wiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidmlkZW9fX3ZvdGluZy1idXR0b25cIiB2LWJpbmQ6Y2xhc3M9XCJ7J3ZpZGVvX192b3RpbmctYnV0dG9uLS12b3RlZCc6IHVzZXJWb3RlID09ICd1cCd9XCIgQGNsaWNrLnByZXZlbnQ9XCJ2b3RlKCd1cCcpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwXCI+PC9pPlxuICAgICAgICA8L2E+IHt7IHVwIH19ICZuYnNwO1xuXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ2aWRlb19fdm90aW5nLWJ1dHRvblwiIHYtYmluZDpjbGFzcz1cInsndmlkZW9fX3ZvdGluZy1idXR0b24tLXZvdGVkJzogdXNlclZvdGUgPT0gJ2Rvd24nfVwiIEBjbGljay5wcmV2ZW50PVwidm90ZSgnZG93bicpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIj48L2k+XG4gICAgICAgIDwvYT4ge3sgZG93biB9fVxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVwOiBudWxsLFxuICAgICAgICAgICAgICAgIGRvd246IG51bGwsXG4gICAgICAgICAgICAgICAgdXNlclZvdGU6IG51bGwsXG4gICAgICAgICAgICAgICAgY2FuVm90ZTogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2aWRlb1VuaXF1ZUlkOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFZvdGVzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFZvdGVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL3ZvdGVzJykudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cCA9IHJlc3BvbnNlLmRhdGEudXA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG93biA9IHJlc3BvbnNlLmRhdGEuZG93bjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyVm90ZSA9IHJlc3BvbnNlLmRhdGEudXNlcl92b3RlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblZvdGUgPSByZXNwb25zZS5kYXRhLmNhbl92b3RlO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2b3RlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyVm90ZSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbdHlwZV0tLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyVm90ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVm90ZSh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJWb3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbdHlwZSA9PSAndXAnID8gJ2Rvd24nIDogJ3VwJ10tLTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzW3R5cGVdKys7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyVm90ZSA9IHR5cGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVZvdGUodHlwZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlVm90ZSh0eXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5kZWxldGUoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvdm90ZXMnLCB7dHlwZX0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZVZvdGUodHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy92b3RlcycsIHt0eXBlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVmlkZW9Wb3RpbmcudnVlPzJhZDVjZGYyIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIj5cbiAgICAgICAgPGg1Pnt7IHRpdGxlIH19PC9oNT5cblxuICAgICAgICA8cm91dGluZS12aWRlbyA6ZGlzY2lwbGluZT1cInNjb3JlLmRpc2NpcGxpbmVcIiA6cm91dGluZS1rZXk9XCJyb3V0aW5lS2V5XCIgQHZpZGVvLXVwbG9hZGVkPVwidmlkZW9VcGxvYWRlZFwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2IHYtZm9yPVwiY29tcG9uZW50X2tleSBpbiBzY29yZS5zY29yZUtleXMoKVwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiY29tcG9uZW50X2tleSAhPT0gJ3RvdGFsX3Njb3JlJ1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKGNvbXBvbmVudF9rZXkpXCIgOnRpdGxlPVwic2NvcmUuZ2V0VGl0bGUoY29tcG9uZW50X2tleSlcIj57eyBzY29yZS5nZXRMYWJlbChjb21wb25lbnRfa2V5KSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IEBjaGFuZ2U9XCJjb21wdXRlU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlXCIgOm5hbWU9XCJmb3JtSWQoY29tcG9uZW50X2tleSlcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImNvbXBvbmVudF9rZXkgPT09ICd0b3RhbF9zY29yZSdcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIDp0aXRsZT1cInNjb3JlLmdldFRpdGxlKCd0b3RhbF9zY29yZScpXCI+e3sgc2NvcmUuZ2V0TGFiZWwoJ3RvdGFsX3Njb3JlJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBAY2hhbmdlPVwiY29tcHV0ZVRvdGFsU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlXCIgOm5hbWU9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IERvdWJsZU1pbmlTY29yZSBmcm9tICcuLi8uLi9Eb3VibGVNaW5pU2NvcmUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY29yZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBEb3VibGVNaW5pU2NvcmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtaXhpbnM6IFtTY29yZU1peGluXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBEb3VibGVNaW5pU2NvcmUudnVlP2ZkN2Y2NjhjIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIj5cbiAgICAgICAgPGg1Pnt7IHRpdGxlIH19PC9oNT5cblxuICAgICAgICA8cm91dGluZS12aWRlbyA6ZGlzY2lwbGluZT1cInNjb3JlLmRpc2NpcGxpbmVcIiA6cm91dGluZS1rZXk9XCJyb3V0aW5lS2V5XCIgQHZpZGVvLXVwbG9hZGVkPVwidmlkZW9VcGxvYWRlZFwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2IHYtZm9yPVwiY29tcG9uZW50X2tleSBpbiBzY29yZS5zY29yZUtleXMoKVwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiY29tcG9uZW50X2tleSAhPT0gJ3RvdGFsX3Njb3JlJ1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKGNvbXBvbmVudF9rZXkpXCIgOnRpdGxlPVwic2NvcmUuZ2V0VGl0bGUoY29tcG9uZW50X2tleSlcIj57eyBzY29yZS5nZXRMYWJlbChjb21wb25lbnRfa2V5KSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IEBjaGFuZ2U9XCJjb21wdXRlU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlXCIgOm5hbWU9XCJmb3JtSWQoY29tcG9uZW50X2tleSlcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImNvbXBvbmVudF9rZXkgPT09ICd0b3RhbF9zY29yZSdcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIDp0aXRsZT1cInNjb3JlLmdldFRpdGxlKCd0b3RhbF9zY29yZScpXCI+e3sgc2NvcmUuZ2V0TGFiZWwoJ3RvdGFsX3Njb3JlJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBAY2hhbmdlPVwiY29tcHV0ZVRvdGFsU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlXCIgOm5hbWU9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IFRyYW1wb2xpbmVTY29yZSBmcm9tICcuLi8uLi9UcmFtcG9saW5lU2NvcmUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY29yZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBUcmFtcG9saW5lU2NvcmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtaXhpbnM6IFtTY29yZU1peGluXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUcmFtcG9saW5lU2NvcmUudnVlPzkwYzlkNWEwIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIj5cbiAgICAgICAgPGg1Pnt7IHRpdGxlIH19PC9oNT5cblxuICAgICAgICA8cm91dGluZS12aWRlbyA6ZGlzY2lwbGluZT1cInNjb3JlLmRpc2NpcGxpbmVcIiA6cm91dGluZS1rZXk9XCJyb3V0aW5lS2V5XCIgQHZpZGVvLXVwbG9hZGVkPVwidmlkZW9VcGxvYWRlZFwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2IHYtZm9yPVwiY29tcG9uZW50X2tleSBpbiBzY29yZS5zY29yZUtleXMoKVwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiY29tcG9uZW50X2tleSAhPT0gJ3RvdGFsX3Njb3JlJ1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKGNvbXBvbmVudF9rZXkpXCIgOnRpdGxlPVwic2NvcmUuZ2V0VGl0bGUoY29tcG9uZW50X2tleSlcIj57eyBzY29yZS5nZXRMYWJlbChjb21wb25lbnRfa2V5KSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IEBjaGFuZ2U9XCJjb21wdXRlU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlXCIgOm5hbWU9XCJmb3JtSWQoY29tcG9uZW50X2tleSlcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImNvbXBvbmVudF9rZXkgPT09ICd0b3RhbF9zY29yZSdcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIDp0aXRsZT1cInNjb3JlLmdldFRpdGxlKGNvbXBvbmVudF9rZXkpXCI+e3sgc2NvcmUuZ2V0TGFiZWwoJ3RvdGFsX3Njb3JlJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBAY2hhbmdlPVwiY29tcHV0ZVRvdGFsU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlXCIgOm5hbWU9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IFR1bWJsaW5nU2NvcmUgZnJvbSAnLi4vLi4vVHVtYmxpbmdTY29yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjb3JlOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gbmV3IFR1bWJsaW5nU2NvcmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtaXhpbnM6IFtTY29yZU1peGluXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUdW1ibGluZ1Njb3JlLnZ1ZT84YmJiYmYxMCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUnO1xuXG5jbGFzcyBEb3VibGVNaW5pU2NvcmUgZXh0ZW5kcyBTY29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGlzY2lwbGluZSA9ICdkbXQnO1xuICAgICAgICB0aGlzLmxhYmVsID0gJ0RvdWJsZSBNaW5pJztcbiAgICAgICAgdGhpcy5yb3V0aW5lS2V5cyA9IFsncHJlbGltX3Bhc3NfMScsICdwcmVsaW1fcGFzc18yJywgJ2ZpbmFsX3Bhc3NfMycsICdmaW5hbF9wYXNzXzQnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvdWJsZU1pbmlTY29yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0RvdWJsZU1pbmlTY29yZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XG5cbmNsYXNzIFRyYW1wb2xpbmVTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ3RyYW1wb2xpbmUnO1xuICAgICAgICB0aGlzLmxhYmVsID0gJ1RyYW1wb2xpbmUnO1xuICAgICAgICB0aGlzLnJvdXRpbmVLZXlzID0gWydwcmVsaW1fY29tcHVsc29yeScsICdwcmVsaW1fb3B0aW9uYWwnLCAnc2VtaV9maW5hbF9vcHRpb25hbCcsICdmaW5hbF9vcHRpb25hbCddO1xuXG4gICAgICAgIHRoaXMuYXR0cnMudGltZV9vZl9mbGlnaHQgPSB7XG4gICAgICAgICAgICBvcmRlcjogMTAsXG4gICAgICAgICAgICBsYWJlbDogJ1RPRicsXG4gICAgICAgICAgICB0aXRsZTogJ1RpbWUgb2YgRmxpZ2h0JyxcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdHRycy5ob3Jpem9udGFsX2Rpc3BsYWNlbWVudCA9IHtcbiAgICAgICAgICAgIG9yZGVyOiAxMSxcbiAgICAgICAgICAgIGxhYmVsOiAnSEQnLFxuICAgICAgICAgICAgdGl0bGU6ICdIb3Jpem9udGFsIERpc3BsYWNlbWVudCcsXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFtcG9saW5lU2NvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9UcmFtcG9saW5lU2NvcmUuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcblxuY2xhc3MgVHVtYmxpbmdTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ3R1bWJsaW5nJztcbiAgICAgICAgdGhpcy5sYWJlbCA9ICdUdW1ibGluZyc7XG4gICAgICAgIHRoaXMucm91dGluZUtleXMgPSBbJ3ByZWxpbV9wYXNzXzEnLCAncHJlbGltX3Bhc3NfMicsICdmaW5hbF9wYXNzXzMnLCAnZmluYWxfcGFzc180J107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUdW1ibGluZ1Njb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvVHVtYmxpbmdTY29yZS5qcyIsIlxud2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbndpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5yZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xuXG4vKipcbiAqIFZ1ZSBpcyBhIG1vZGVybiBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIGludGVyYWN0aXZlIHdlYiBpbnRlcmZhY2VzXG4gKiB1c2luZyByZWFjdGl2ZSBkYXRhIGJpbmRpbmcgYW5kIHJldXNhYmxlIGNvbXBvbmVudHMuIFZ1ZSdzIEFQSSBpcyBjbGVhblxuICogYW5kIHNpbXBsZSwgbGVhdmluZyB5b3UgdG8gZm9jdXMgb24gYnVpbGRpbmcgeW91ciBuZXh0IGdyZWF0IHByb2plY3QuXG4gKi9cblxud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7XG4gICAgJ1gtQ1NSRi1UT0tFTic6IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbixcbiAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbn07XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tIFwibGFyYXZlbC1lY2hvXCJcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogJ3lvdXItcHVzaGVyLWtleSdcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBldGl0aW9uRm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzViZWIyZWMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbXBldGl0aW9uRm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENvbXBldGl0aW9uRm9ybS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzViZWIyZWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NWJlYjJlY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjk1NDNkOTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL011bHRpcGxlVmlkZW9VcGxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTXVsdGlwbGVWaWRlb1VwbG9hZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjk1NDNkOTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yOTU0M2Q5M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDc4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JvdXRpbmVWaWRlby52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWI2YzA1NDAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JvdXRpbmVWaWRlby52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJvdXRpbmVWaWRlby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWI2YzA1NDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01YjZjMDU0MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVmlkZW9Db21tZW50cy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZWU3YjJlOTQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZpZGVvQ29tbWVudHMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvQ29tbWVudHMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVmlkZW9Db21tZW50cy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZWU3YjJlOTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lZTdiMmU5NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDc5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvUGxheWVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00NTAxNjlhMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9QbGF5ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvUGxheWVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NTAxNjlhM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ1MDE2OWEzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1BsYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IDc5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvVXBsb2FkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi04Y2NmNjY3YSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9VcGxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvVXBsb2FkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04Y2NmNjY3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LThjY2Y2NjdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDc5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvVm90aW5nLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zMTlhOThlOSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9Wb3RpbmcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvVm90aW5nLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMTlhOThlOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMxOWE5OGU5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDc5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0RvdWJsZU1pbmlTY29yZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOTMzOGE2MzYhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0RvdWJsZU1pbmlTY29yZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBEb3VibGVNaW5pU2NvcmUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTkzMzhhNjM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOTMzOGE2MzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9Eb3VibGVNaW5pU2NvcmUudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UcmFtcG9saW5lU2NvcmUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWU0ZTNhM2EwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UcmFtcG9saW5lU2NvcmUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UcmFtcG9saW5lU2NvcmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVHJhbXBvbGluZVNjb3JlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lNGUzYTNhMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWU0ZTNhM2EwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVHVtYmxpbmdTY29yZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmE2YThkMjEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1R1bWJsaW5nU2NvcmUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFR1bWJsaW5nU2NvcmUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJhNmE4ZDIxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmE2YThkMjFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW192bS5fdihcIlVwbG9hZCBZb3VyIFZpZGVvc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJldmVudFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRXZlbnRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudCksXG4gICAgICBleHByZXNzaW9uOiBcImV2ZW50XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImV2ZW50XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS5ldmVudCA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUcmFtcG9saW5lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJkb3VibGUgbWluaVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRG91YmxlLW1pbmlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInR1bWJsaW5nXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUdW1ibGluZ1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJ2aXNpYmlsaXR5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJWaXNpYmlsaXR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udmlzaWJpbGl0eSksXG4gICAgICBleHByZXNzaW9uOiBcInZpc2liaWxpdHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidmlzaWJpbGl0eVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0udmlzaWJpbGl0eSA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwcml2YXRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQcml2YXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJ1bmxpc3RlZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVW5saXN0ZWRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInB1YmxpY1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHVibGljXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0ucXVldWVkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiIXF1ZXVlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHVwbG9hZC5zZWxlY3QoJ3ZpZGVvLXVwbG9hZCcpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IFZpZGVvc1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnF1ZXVlZCksXG4gICAgICBleHByZXNzaW9uOiBcInF1ZXVlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHVwbG9hZC5zdGFydCgndmlkZW8tdXBsb2FkJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFydFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3ZtLiR1cGxvYWQucmVzZXQoJ3ZpZGVvLXVwbG9hZCcpO1xuICAgICAgICBfdm0ucXVldWVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgc3R5bGU6ICgnd2lkdGg6ICcgKyBfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5wZXJjZW50Q29tcGxldGUgKyAnJTsnKVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnBlcmNlbnRDb21wbGV0ZSkgKyBcIiUgQ29tcGxldGVcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiR1cGxvYWQuZXJyb3JzKCd2aWRlby11cGxvYWQnKS5sZW5ndGgpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHVwbG9hZC5lcnJvcnMoJ3ZpZGVvLXVwbG9hZCcpWzBdLm1lc3NhZ2UpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXJlc3VsdFwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggPiAwKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCA+IDBcIlxuICAgIH1dXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWRlZmF1bHRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCkgKyBcIiBcIiArIF92bS5fcyhfdm0uX2YoXCJwbHVyYWxpemVcIikoX3ZtLiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGgsICdmaWxlJykpICsgXCIgcmVhZHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDCoFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b2dnbGVTaG93UXVldWVkXG4gICAgfVxuICB9LCBbKF92bS5zaG93UXVldWVkRmlsZXMpID8gX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LXVwXCJcbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uc2hvd1F1ZXVlZEZpbGVzKSA/IF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tbWVudS1kb3duXCJcbiAgfSkgOiBfdm0uX2UoKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvd1F1ZXVlZEZpbGVzKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd1F1ZXVlZEZpbGVzXCJcbiAgICB9XVxuICB9LCBfdm0uX2woKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQpLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGZpbGUubmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLmNvbXBsZXRlKSwgZnVuY3Rpb24oZmlsZSkge1xuICAgIHJldHVybiBfYygnZGl2JywgWyhmaWxlLmVycm9ycy5sZW5ndGgpID8gX2MoJ2RpdicsIFtfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWRhbmdlclwiXG4gICAgfSwgW192bS5fdihfdm0uX3MoZmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhmaWxlLmVycm9yc1swXS5tZXNzYWdlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICghZmlsZS5lcnJvcnMubGVuZ3RoKSA/IF9jKCdkaXYnLCBbX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1zdWNjZXNzXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhmaWxlLm5hbWUpKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZGVkIHN1Y2Nlc3NmdWxseS5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKV0pXG4gIH0pXSwgMildKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTI5NTQzZDkzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yOTU0M2Q5MyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBzY29yZS10aWxlXCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0aW5lLXZpZGVvJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2NpcGxpbmVcIjogX3ZtLnNjb3JlLmRpc2NpcGxpbmUsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IF92bS5yb3V0aW5lS2V5XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJ2aWRlby11cGxvYWRlZFwiOiBfdm0udmlkZW9VcGxvYWRlZFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnNjb3JlLnNjb3JlS2V5cygpKSwgZnVuY3Rpb24oY29tcG9uZW50X2tleSkge1xuICAgIHJldHVybiBfYygnZGl2JywgWyhjb21wb25lbnRfa2V5ICE9PSAndG90YWxfc2NvcmUnKSA/IF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZChjb21wb25lbnRfa2V5KSxcbiAgICAgICAgXCJ0aXRsZVwiOiBfdm0uc2NvcmUuZ2V0VGl0bGUoY29tcG9uZW50X2tleSlcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uc2NvcmUuZ2V0TGFiZWwoY29tcG9uZW50X2tleSkpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgICAgdmFsdWU6IChfdm0uc2NvcmUuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUpLFxuICAgICAgICBleHByZXNzaW9uOiBcInNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlXCIsXG4gICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKGNvbXBvbmVudF9rZXkpLFxuICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IChfdm0uc2NvcmUuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUpXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjaGFuZ2VcIjogX3ZtLmNvbXB1dGVTY29yZSxcbiAgICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgX3ZtLnNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKGNvbXBvbmVudF9rZXkgPT09ICd0b3RhbF9zY29yZScpID8gX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgICBcInRpdGxlXCI6IF92bS5zY29yZS5nZXRUaXRsZShjb21wb25lbnRfa2V5KVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zY29yZS5nZXRMYWJlbCgndG90YWxfc2NvcmUnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgICB2YWx1ZTogKF92bS5zY29yZS5hdHRycy50b3RhbF9zY29yZS52YWx1ZSksXG4gICAgICAgIGV4cHJlc3Npb246IFwic2NvcmUuYXR0cnMudG90YWxfc2NvcmUudmFsdWVcIixcbiAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogKF92bS5zY29yZS5hdHRycy50b3RhbF9zY29yZS52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNoYW5nZVwiOiBfdm0uY29tcHV0ZVRvdGFsU2NvcmUsXG4gICAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICAgIF92bS5zY29yZS5hdHRycy50b3RhbF9zY29yZS52YWx1ZSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9LFxuICAgICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KV0pIDogX3ZtLl9lKCldKVxuICB9KV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJhNmE4ZDIxXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yYTZhOGQyMSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvX192b3RpbmdcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW9fX3ZvdGluZy1idXR0b25cIixcbiAgICBjbGFzczoge1xuICAgICAgJ3ZpZGVvX192b3RpbmctYnV0dG9uLS12b3RlZCc6IF92bS51c2VyVm90ZSA9PSAndXAnXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS52b3RlKCd1cCcpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXBcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnVwKSArIFwiIMKgXFxuXFxuICAgIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW9fX3ZvdGluZy1idXR0b25cIixcbiAgICBjbGFzczoge1xuICAgICAgJ3ZpZGVvX192b3RpbmctYnV0dG9uLS12b3RlZCc6IF92bS51c2VyVm90ZSA9PSAnZG93bidcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnZvdGUoJ2Rvd24nKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmRvd24pICsgXCJcXG5cIildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zMTlhOThlOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzE5YTk4ZTkhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDc5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3ZpZGVvJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW4gdmpzLWJpZy1wbGF5LWNlbnRlcmVkIHZqcy0xNi05XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ2aWRlb1wiLFxuICAgICAgXCJjb250cm9sc1wiOiBcIlwiLFxuICAgICAgXCJwcmVsb2FkXCI6IFwiYXV0b1wiLFxuICAgICAgXCJkYXRhLXNldHVwXCI6IFwie1xcXCJmbHVpZFxcXCI6IHRydWUsIFxcXCJwcmVsb2FkXFxcIjogXFxcImF1dG9cXFwifVwiLFxuICAgICAgXCJwb3N0ZXJcIjogX3ZtLnRodW1ibmFpbFVybFxuICAgIH1cbiAgfSwgW19jKCdzb3VyY2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInZpZGVvL21wNFwiLFxuICAgICAgXCJzcmNcIjogX3ZtLnZpZGVvVXJsXG4gICAgfVxuICB9KV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ1MDE2OWEzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00NTAxNjlhMyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS51cGxvYWRlZCksXG4gICAgICBleHByZXNzaW9uOiBcIiF1cGxvYWRlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi14c1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZC0nICsgX3ZtLnJvdXRpbmVLZXkpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnLFxuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHVwbG9hZC5zZWxlY3QoJ3ZpZGVvLXVwbG9hZC0nICsgX3ZtLnJvdXRpbmVLZXkpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wYXBlcmNsaXBcIlxuICB9KSwgX3ZtLl92KFwiIEF0dGFjaCBWaWRlb1xcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVwbG9hZGVkKSxcbiAgICAgIGV4cHJlc3Npb246IFwidXBsb2FkZWRcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZWNrXCJcbiAgfSksIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uZmlsZW5hbWUpICsgXCIgYXR0YWNoZWQuXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkLScgKyBfdm0ucm91dGluZUtleSkuc3RhdHVzID09PSAnc2VuZGluZycpLFxuICAgICAgZXhwcmVzc2lvbjogXCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZC0nK3JvdXRpbmVLZXkpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtcHJvZ3Jlc3MgcHJvZ3Jlc3NcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy1iYXJcIixcbiAgICBzdHlsZTogKCd3aWR0aDogJyArIF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZC0nICsgX3ZtLnJvdXRpbmVLZXkpLnBlcmNlbnRDb21wbGV0ZSArICclOycpXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQtJyArIF92bS5yb3V0aW5lS2V5KS5wZXJjZW50Q29tcGxldGUpICsgXCIlIENvbXBsZXRlXFxuICAgICAgICBcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWI2YzA1NDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTViNmMwNTQwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udmFsaWRhdGVCZWZvcmVTdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdmb3JtLWdyb3VwJzogdHJ1ZSwgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCd0aXRsZScpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJ0aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ29tcGV0aXRpb24gVGl0bGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdjb250cm9sJzogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlOnRpdGxlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoJ3JlcXVpcmVkJyksXG4gICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgIGFyZzogXCJ0aXRsZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50aXRsZSksXG4gICAgICBleHByZXNzaW9uOiBcInRpdGxlXCIsXG4gICAgICBhcmc6IFwidGl0bGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidGl0bGVcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcInRpdGxlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udGl0bGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udGl0bGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RpdGxlJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0aXRsZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCd0aXRsZScpKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibG9jYXRpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkxvY2F0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sb2NhdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcImxvY2F0aW9uXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImxvY2F0aW9uXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJsb2NhdGlvblwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmxvY2F0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmxvY2F0aW9uID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKGZhbHNlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZmFsc2VcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJFcnJvciBtZXNzYWdlXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnc3RhcnRfZGF0ZScpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJzdGFydF9kYXRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTdGFydCBEYXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnY29udHJvbCc6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZTpzdGFydF9kYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoJ2RhdGVfZm9ybWF0OllZWVktTU0tREQnKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJ2RhdGVfZm9ybWF0OllZWVktTU0tREQnXCIsXG4gICAgICBhcmc6IFwic3RhcnRfZGF0ZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zdGFydF9kYXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwic3RhcnRfZGF0ZVwiLFxuICAgICAgYXJnOiBcInN0YXJ0X2RhdGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwic3RhcnRfZGF0ZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxuICAgICAgXCJuYW1lXCI6IFwic3RhcnRfZGF0ZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnN0YXJ0X2RhdGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc3RhcnRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnc3RhcnRfZGF0ZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnc3RhcnRfZGF0ZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdzdGFydF9kYXRlJykpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZW5kX2RhdGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZW5kX2RhdGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlN0YXJ0IERhdGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdjb250cm9sJzogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlOmVuZF9kYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoJ2RhdGVfZm9ybWF0OllZWVktTU0tREQnKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJ2RhdGVfZm9ybWF0OllZWVktTU0tREQnXCIsXG4gICAgICBhcmc6IFwiZW5kX2RhdGVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZW5kX2RhdGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlbmRfZGF0ZVwiLFxuICAgICAgYXJnOiBcImVuZF9kYXRlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImVuZF9kYXRlXCIsXG4gICAgICBcInR5cGVcIjogXCJkYXRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJlbmRfZGF0ZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmVuZF9kYXRlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmVuZF9kYXRlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdlbmRfZGF0ZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZW5kX2RhdGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZW5kX2RhdGUnKSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXZlbnQtc2VsZWN0aW9uXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnaDQnLCBbX3ZtLl92KFwiRXZlbnRzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZSksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidHJhbXBvbGluZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwibmFtZVwiOiBcInRyYW1wb2xpbmVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiY2hlY2tlZFwiOiBBcnJheS5pc0FycmF5KF92bS50cmFtcG9saW5lKSA/IF92bS5faShfdm0udHJhbXBvbGluZSwgbnVsbCkgPiAtMSA6IChfdm0udHJhbXBvbGluZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIl9fY1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IF92bS50cmFtcG9saW5lLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdik7XG4gICAgICAgICAgaWYgKCQkYykge1xuICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnRyYW1wb2xpbmUgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0udHJhbXBvbGluZSA9ICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdm0udHJhbXBvbGluZSA9ICQkY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFRyYW1wb2xpbmVcXG4gICAgICAgICAgICAgICAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbCA9ICFfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiXG4gIH0pLCBfdm0uX3YoXCIgU2VtaS1GaW5hbHNcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWwgPSAhX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIlxuICB9KSwgX3ZtLl92KFwiIEZpbmFsc1xcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50cmFtcENvbFNpemVcbiAgfSwgW19jKCd0cmFtcG9saW5lLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiQ29tcHVsc29yeVwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9jb21wdWxzb3J5XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNjb3JlY2hhbmdlZFwiOiBfdm0udXBkYXRlQWxsU2NvcmVzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHJhbXBDb2xTaXplXG4gIH0sIFtfYygndHJhbXBvbGluZS1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlByZWxpbSBPcHRpb25hbFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9vcHRpb25hbFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50cmFtcENvbFNpemVcbiAgfSwgW19jKCd0cmFtcG9saW5lLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiU2VtaS1GaW5hbFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInNlbWlfZmluYWxfb3B0aW9uYWxcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwic2NvcmVjaGFuZ2VkXCI6IF92bS51cGRhdGVBbGxTY29yZXNcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnRyYW1wQ29sU2l6ZVxuICB9LCBbX2MoJ3RyYW1wb2xpbmUtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJGaW5hbCBPcHRpb25hbFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcImZpbmFsX29wdGlvbmFsXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNjb3JlY2hhbmdlZFwiOiBfdm0udXBkYXRlQWxsU2NvcmVzXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZG10KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZG10XCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImRtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwibmFtZVwiOiBcImRtdFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLmRtdCkgPyBfdm0uX2koX3ZtLmRtdCwgbnVsbCkgPiAtMSA6IChfdm0uZG10KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLmRtdCxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5kbXQgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0uZG10ID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS5kbXQgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBEb3VibGUgTWluaVxcbiAgICAgICAgICAgICAgICBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRtdCksXG4gICAgICBleHByZXNzaW9uOiBcImRtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCA9ICFfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiXG4gIH0pLCBfdm0uX3YoXCIgRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRtdCksXG4gICAgICBleHByZXNzaW9uOiBcImRtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS5kbXRDb2xTaXplXG4gIH0sIFtfYygnZG10LXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAxXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfMVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLmRtdENvbFNpemVcbiAgfSwgW19jKCdkbXQtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDJcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18yXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNjb3JlY2hhbmdlZFwiOiBfdm0udXBkYXRlQWxsU2NvcmVzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLmRtdENvbFNpemVcbiAgfSwgW19jKCdkbXQtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDNcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18zXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNjb3JlY2hhbmdlZFwiOiBfdm0udXBkYXRlQWxsU2NvcmVzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLmRtdENvbFNpemVcbiAgfSwgW19jKCdkbXQtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDRcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc180XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNjb3JlY2hhbmdlZFwiOiBfdm0udXBkYXRlQWxsU2NvcmVzXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udHVtYmxpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1wiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0dW1ibGluZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwibmFtZVwiOiBcInR1bWJsaW5nXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0udHVtYmxpbmcpID8gX3ZtLl9pKF92bS50dW1ibGluZywgbnVsbCkgPiAtMSA6IChfdm0udHVtYmxpbmcpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0udHVtYmxpbmcsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0udHVtYmxpbmcgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0udHVtYmxpbmcgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLnR1bWJsaW5nID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgVHVtYmxpbmdcXG4gICAgICAgICAgICAgICAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZyksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbCA9ICFfdm0udHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiXG4gIH0pLCBfdm0uX3YoXCIgRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHVtYmxpbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHVtYmxpbmdDb2xTaXplXG4gIH0sIFtfYygndHVtYmxpbmctc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDFcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18xXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNjb3JlY2hhbmdlZFwiOiBfdm0udXBkYXRlQWxsU2NvcmVzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHVtYmxpbmdDb2xTaXplXG4gIH0sIFtfYygndHVtYmxpbmctc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDJcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18yXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNjb3JlY2hhbmdlZFwiOiBfdm0udXBkYXRlQWxsU2NvcmVzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHVtYmxpbmdDb2xTaXplXG4gIH0sIFtfYygndHVtYmxpbmctc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDNcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18zXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNjb3JlY2hhbmdlZFwiOiBfdm0udXBkYXRlQWxsU2NvcmVzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHVtYmxpbmdDb2xTaXplXG4gIH0sIFtfYygndHVtYmxpbmctc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDRcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc180XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNjb3JlY2hhbmdlZFwiOiBfdm0udXBkYXRlQWxsU2NvcmVzXG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmVycm9ycy5hbnkoKSB8fCBfdm0uZXZlbnRzSW52YWxpZCgpXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3VibWl0IENvbXBldGl0aW9uXCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03NWJlYjJlY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzViZWIyZWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21wZXRpdGlvbkZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA4MDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIlxuICB9LCBbX3ZtLl92KFwiVXBsb2FkIFlvdXIgVmlkZW9cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmFtZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcIm5hbWVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5hdXRoZW50aWNhdGVkXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZXZlbnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV2ZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLmV2ZW50ID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInRyYW1wb2xpbmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRyYW1wb2xpbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImRvdWJsZSBtaW5pXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEb3VibGUtbWluaVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidHVtYmxpbmdcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlR1bWJsaW5nXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoIV92bS51cGxvYWRpbmcpID8gX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJmaWxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJ2aWRlb1wiLFxuICAgICAgXCJpZFwiOiBcInZpZGVvXCIsXG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0ubmFtZSB8fCAhX3ZtLmV2ZW50XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLmZpbGVJbnB1dENoYW5nZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mYWlsZWQpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51cGxvYWRpbmcgJiYgIV92bS5mYWlsZWQpID8gX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInZpZGVvLWZvcm1cIlxuICAgIH1cbiAgfSwgWyghX3ZtLnVwbG9hZGluZ0NvbXBsZXRlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtaW5mb1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIlxuICB9KSwgX3ZtLl92KFwiIFlvdXIgdmlkZW8gaXMgdXBsb2FkaW5nLi4uXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51cGxvYWRpbmdDb21wbGV0ZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBjb21wbGV0ZS4gVmlkZW8gaXMgbm93IHByb2Nlc3NpbmcuIFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIi92aWRlb3NcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkdvIHRvIHlvdXIgdmlkZW9zLlwiKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0udXBsb2FkaW5nQ29tcGxldGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLWJhclwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgd2lkdGg6IF92bS5maWxlUHJvZ3Jlc3MgKyAnJSdcbiAgICB9KVxuICB9KV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRpdGxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50aXRsZSksXG4gICAgICBleHByZXNzaW9uOiBcInRpdGxlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpdGxlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRpdGxlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJkZXNjcmlwdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGVzY3JpcHRpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRlc2NyaXB0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGVzY3JpcHRpb25cIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZGVzY3JpcHRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGVzY3JpcHRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInZpc2liaWxpdHlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlZpc2liaWxpdHlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS52aXNpYmlsaXR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwidmlzaWJpbGl0eVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLnZpc2liaWxpdHkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicHJpdmF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHJpdmF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidW5saXN0ZWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlVubGlzdGVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwdWJsaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlB1YmxpY1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBwdWxsLXJpZ2h0XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnNhdmVTdGF0dXMpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udXBkYXRlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTYXZlIENoYW5nZXNcIildKV0pIDogX3ZtLl9lKCldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LThjY2Y2NjdhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi04Y2NmNjY3YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGluZS12aWRlbycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNjaXBsaW5lXCI6IF92bS5zY29yZS5kaXNjaXBsaW5lLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBfdm0ucm91dGluZUtleVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwidmlkZW8tdXBsb2FkZWRcIjogX3ZtLnZpZGVvVXBsb2FkZWRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5zY29yZS5zY29yZUtleXMoKSksIGZ1bmN0aW9uKGNvbXBvbmVudF9rZXkpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIFsoY29tcG9uZW50X2tleSAhPT0gJ3RvdGFsX3Njb3JlJykgPyBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoY29tcG9uZW50X2tleSksXG4gICAgICAgIFwidGl0bGVcIjogX3ZtLnNjb3JlLmdldFRpdGxlKGNvbXBvbmVudF9rZXkpXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnNjb3JlLmdldExhYmVsKGNvbXBvbmVudF9rZXkpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICAgIHZhbHVlOiAoX3ZtLnNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJzY29yZS5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZVwiLFxuICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZChjb21wb25lbnRfa2V5KSxcbiAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlKVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2hhbmdlXCI6IF92bS5jb21wdXRlU2NvcmUsXG4gICAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICAgIF92bS5zY29yZS5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9LFxuICAgICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChjb21wb25lbnRfa2V5ID09PSAndG90YWxfc2NvcmUnKSA/IF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgndG90YWxfc2NvcmUnKSxcbiAgICAgICAgXCJ0aXRsZVwiOiBfdm0uc2NvcmUuZ2V0VGl0bGUoJ3RvdGFsX3Njb3JlJylcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uc2NvcmUuZ2V0TGFiZWwoJ3RvdGFsX3Njb3JlJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgICAgdmFsdWU6IChfdm0uc2NvcmUuYXR0cnMudG90YWxfc2NvcmUudmFsdWUpLFxuICAgICAgICBleHByZXNzaW9uOiBcInNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlXCIsXG4gICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IChfdm0uc2NvcmUuYXR0cnMudG90YWxfc2NvcmUudmFsdWUpXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjaGFuZ2VcIjogX3ZtLmNvbXB1dGVUb3RhbFNjb3JlLFxuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0uc2NvcmUuYXR0cnMudG90YWxfc2NvcmUudmFsdWUgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSldKSA6IF92bS5fZSgpXSlcbiAgfSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi05MzM4YTYzNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOTMzOGE2MzYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGluZS12aWRlbycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNjaXBsaW5lXCI6IF92bS5zY29yZS5kaXNjaXBsaW5lLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBfdm0ucm91dGluZUtleVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwidmlkZW8tdXBsb2FkZWRcIjogX3ZtLnZpZGVvVXBsb2FkZWRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5zY29yZS5zY29yZUtleXMoKSksIGZ1bmN0aW9uKGNvbXBvbmVudF9rZXkpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIFsoY29tcG9uZW50X2tleSAhPT0gJ3RvdGFsX3Njb3JlJykgPyBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoY29tcG9uZW50X2tleSksXG4gICAgICAgIFwidGl0bGVcIjogX3ZtLnNjb3JlLmdldFRpdGxlKGNvbXBvbmVudF9rZXkpXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnNjb3JlLmdldExhYmVsKGNvbXBvbmVudF9rZXkpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICAgIHZhbHVlOiAoX3ZtLnNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJzY29yZS5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZVwiLFxuICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZChjb21wb25lbnRfa2V5KSxcbiAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlKVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2hhbmdlXCI6IF92bS5jb21wdXRlU2NvcmUsXG4gICAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICAgIF92bS5zY29yZS5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9LFxuICAgICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChjb21wb25lbnRfa2V5ID09PSAndG90YWxfc2NvcmUnKSA/IF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgndG90YWxfc2NvcmUnKSxcbiAgICAgICAgXCJ0aXRsZVwiOiBfdm0uc2NvcmUuZ2V0VGl0bGUoJ3RvdGFsX3Njb3JlJylcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uc2NvcmUuZ2V0TGFiZWwoJ3RvdGFsX3Njb3JlJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgICAgdmFsdWU6IChfdm0uc2NvcmUuYXR0cnMudG90YWxfc2NvcmUudmFsdWUpLFxuICAgICAgICBleHByZXNzaW9uOiBcInNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlXCIsXG4gICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IChfdm0uc2NvcmUuYXR0cnMudG90YWxfc2NvcmUudmFsdWUpXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjaGFuZ2VcIjogX3ZtLmNvbXB1dGVUb3RhbFNjb3JlLFxuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0uc2NvcmUuYXR0cnMudG90YWxfc2NvcmUudmFsdWUgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSldKSA6IF92bS5fZSgpXSlcbiAgfSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lNGUzYTNhMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZTRlM2EzYTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihfdm0uX3MoX3ZtLmNvbW1lbnRzLmxlbmd0aCkgKyBcIiBcIiArIF92bS5fcyhfdm0uX2YoXCJwbHVyYWxpemVcIikoX3ZtLmNvbW1lbnRzLmxlbmd0aCwgJ2NvbW1lbnQnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW8tY29tbWVudCBjbGVhcmZpeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlmXCI6IFwiJHJvb3QudXNlci5hdXRoZW50aWNhdGVkXCJcbiAgICB9XG4gIH0sIFtfYygndGV4dGFyZWEnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uYm9keSksXG4gICAgICBleHByZXNzaW9uOiBcImJvZHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU2F5IHNvbWV0aGluZy4uLlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmJvZHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uYm9keSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHRcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMTBweFwiXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmNyZWF0ZUNvbW1lbnQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyhfdm0ucG9zdGluZykgPyBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgUG9zdFxcbiAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLWxpc3RcIlxuICB9LCBfdm0uX2woKF92bS5jb21tZW50cyksIGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWFcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGVmdFwiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKGNvbW1lbnQpXG4gICAgICB9XG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1vYmplY3QgaW1nLWF2YXRhclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogY29tbWVudC51c2VyLmRhdGEuaW1hZ2UsXG4gICAgICAgIFwiYWx0XCI6IGNvbW1lbnQudXNlci5kYXRhLm5hbWVcbiAgICAgIH1cbiAgICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1ib2R5XCJcbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogX3ZtLnVzZXJVcmwoY29tbWVudClcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhjb21tZW50LnVzZXIuZGF0YS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGNvbW1lbnQuY3JlYXRlZF9hdF9odW1hbikgKyBcIlxcblxcbiAgICAgICAgICAgICAgICBcIiksIChjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGgpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCkgKyBcIiAgXCIgKyBfdm0uX3MoX3ZtLl9mKFwicGx1cmFsaXplXCIpKGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCwgJ3JlcGx5JywgJ3JlcGxpZXMnKSkgKyBcIilcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoX3ZtLl9zKGNvbW1lbnQuYm9keSkpXSksIF92bS5fdihcIiBcIiksIChfdm0uJHJvb3QudXNlci5hdXRoZW50aWNhdGVkKSA/IF9jKCd1bCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtaW5saW5lXCJcbiAgICB9LCBbX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0udG9nZ2xlUmVwbHlGb3JtKGNvbW1lbnQuaWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5yZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50LmlkID8gJ0NhbmNlbCByZXBseScgOiAnUmVwbHknKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKGNvbW1lbnQudXNlcl9pZCA9PT0gX3ZtLiRyb290LnVzZXIuaWQpID8gX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uZGVsZXRlQ29tbWVudChjb21tZW50LmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgWyhfdm0uZGVsZXRpbmcgPT09IGNvbW1lbnQuaWQpID8gX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICAgIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBEZWxldGVcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnJlcGx5Rm9ybVZpc2libGUgPT09IGNvbW1lbnQuaWQpID8gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvLWNvbW1lbnQgY2xlYXJcIlxuICAgIH0sIFtfYygndGV4dGFyZWEnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICB2YWx1ZTogKF92bS5yZXBseUJvZHkpLFxuICAgICAgICBleHByZXNzaW9uOiBcInJlcGx5Qm9keVwiXG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiLFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlcGx5Qm9keSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0ucmVwbHlCb2R5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIxMHB4XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5jcmVhdGVSZXBseShjb21tZW50LmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgWyhfdm0ucmVwbHlpbmcpID8gX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICAgIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBSZXBseVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKGNvbW1lbnQucmVwbGllcy5kYXRhKSwgZnVuY3Rpb24ocmVwbHkpIHtcbiAgICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZWRpYVwiXG4gICAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGVmdFwiXG4gICAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKHJlcGx5KVxuICAgICAgICB9XG4gICAgICB9LCBbX2MoJ2ltZycsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtb2JqZWN0IGltZy1hdmF0YXJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcInNyY1wiOiByZXBseS51c2VyLmRhdGEuaW1hZ2UsXG4gICAgICAgICAgXCJhbHRcIjogcmVwbHkudXNlci5kYXRhLm5hbWVcbiAgICAgICAgfVxuICAgICAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1ib2R5XCJcbiAgICAgIH0sIFtfYygnYScsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImhyZWZcIjogX3ZtLnVzZXJVcmwocmVwbHkpXG4gICAgICAgIH1cbiAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHJlcGx5LnVzZXIuZGF0YS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHJlcGx5LmNyZWF0ZWRfYXRfaHVtYW4pICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCdwJywgW192bS5fdihfdm0uX3MocmVwbHkuYm9keSkpXSksIF92bS5fdihcIiBcIiksIChfdm0uJHJvb3QudXNlci5hdXRoZW50aWNhdGVkKSA/IF9jKCd1bCcsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1pbmxpbmVcIlxuICAgICAgfSwgW19jKCdsaScsIFsocmVwbHkudXNlcl9pZCA9PT0gX3ZtLiRyb290LnVzZXIuaWQpID8gX2MoJ2EnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbW1lbnQocmVwbHkuaWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBbKF92bS5kZWxldGluZyA9PT0gcmVwbHkuaWQpID8gX2MoJ2knLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiXG4gICAgICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpXSldKSA6IF92bS5fZSgpXSldKVxuICAgIH0pXSwgMildKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lZTdiMmU5NFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZWU3YjJlOTQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2NvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmF0dHJzID0ge1xuICAgICAgICAgICAgZXhlY3V0aW9uOiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdFeGVjdXRpb24nLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXhlY3V0aW9uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpZmZpY3VsdHk6IHtcbiAgICAgICAgICAgICAgICBvcmRlcjogMixcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0RpZmZpY3VsdHknLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGlmZmljdWx0eScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXV0cmFsX2RlZHVjdGlvbjoge1xuICAgICAgICAgICAgICAgIG9yZGVyOiAyMCxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ05EJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05ldXRyYWwgRGVkdWN0aW9uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdGFsX3Njb3JlOiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDEwMCxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RvdGFsIFNjb3JlJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RvdGFsIFNjb3JlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpZGVvX2lkID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRWaWRlb0lkKGlkKSB7XG4gICAgICAgIHRoaXMudmlkZW9faWQgPSBpZDtcbiAgICB9XG5cbiAgICB1cGRhdGVBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF0dHJzW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNjb3JlS2V5cygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYXR0cnMpLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIHRoaXMuYXR0cnNbYV0ub3JkZXIgLSB0aGlzLmF0dHJzW2JdLm9yZGVyOyB9KTtcbiAgICB9XG5cbiAgICBnZXRMYWJlbChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cnNba2V5XS5sYWJlbDtcbiAgICB9XG5cbiAgICBnZXRUaXRsZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cnNba2V5XS50aXRsZTtcbiAgICB9XG5cbiAgICBoYXNTY29yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cnMudG90YWxfc2NvcmUudmFsdWUgIT09IG51bGwgJiYgdGhpcy5hdHRycy50b3RhbF9zY29yZS52YWx1ZSA+IDA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1Njb3JlLmpzIiwidmFyIG1hdGggPSByZXF1aXJlKCdtYXRoanMnKTtcbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmNvbnN0IFNjb3JlTWl4aW4gPSB7XG5cbiAgICBwcm9wczoge1xuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgcm91dGluZUtleTogbnVsbCxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBmb3JtSWQoY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMuZGlzY2lwbGluZSwgdGhpcy5yb3V0aW5lS2V5LCBjb21wb25lbnRdLmpvaW4oJ18nKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGVTaG93UXVldWVkKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UXVldWVkRmlsZXMgPSAhdGhpcy5zaG93UXVldWVkRmlsZXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdmlkZW9VcGxvYWRlZChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlLnNldFZpZGVvSWQoZGF0YS52aWRlby5pZCk7XG5cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Njb3JlY2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksXG4gICAgICAgICAgICAgICAgc2NvcmU6IHRoaXMuc2NvcmUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlU2NvcmUoKSB7XG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICAgICAgdGhpcy5zY29yZS5zY29yZUtleXMoKS5mb3JFYWNoKChjb21wb25lbnRfa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudF9rZXkgPT09ICduZXV0cmFsX2RlZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gKHRoaXMuc2NvcmUuYXR0cnMubmV1dHJhbF9kZWR1Y3Rpb24udmFsdWUpID8gbWF0aC5zdWJ0cmFjdChzdW0sIHRoaXMuc2NvcmUuYXR0cnMubmV1dHJhbF9kZWR1Y3Rpb24udmFsdWUpIDogc3VtO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50X2tleSAhPT0gJ3RvdGFsX3Njb3JlJykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAodGhpcy5zY29yZS5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSkgPyBtYXRoLmFkZChzdW0sIHRoaXMuc2NvcmUuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUpIDogc3VtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlID0gbWF0aC5yb3VuZChzdW0sIDMpO1xuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzY29yZWNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LFxuICAgICAgICAgICAgICAgIHNjb3JlOiB0aGlzLnNjb3JlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlVG90YWxTY29yZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUuc2NvcmVLZXlzKCkuZm9yRWFjaCgoY29tcG9uZW50X2tleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRfa2V5ICE9PSAndG90YWxfc2NvcmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzY29yZWNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LFxuICAgICAgICAgICAgICAgIHNjb3JlOiB0aGlzLnNjb3JlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3VwbG9hZC9tdWx0aXBsZScsXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGVzOiAwLFxuICAgICAgICAgICAgICAgIGRyb3B6b25lSWQ6ICd2aWRlby11cGxvYWQtZHJvcHpvbmUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlTWl4aW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvc2NvcmUubWl4aW4uanMiXSwic291cmNlUm9vdCI6IiJ9