webpackJsonp([1],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(95);


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

/* harmony default export */ __webpack_exports__["a"] = (DoubleMiniScore);

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var UniqueIdMixin = {
    methods: {
        uniqueId: function uniqueId(prefix, id) {
            return prefix + '-' + id;
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (UniqueIdMixin);

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

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
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_filters__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vee_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(359);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(358);




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('video-upload', __webpack_require__(811));
Vue.component('multiple-video-upload', __webpack_require__(806));
Vue.component('video-player', __webpack_require__(810));
Vue.component('video-voting', __webpack_require__(812));
Vue.component('video-comments', __webpack_require__(809));
Vue.component('competition-form', __webpack_require__(805));
Vue.component('routine-video', __webpack_require__(807));
Vue.component('trampoline-score', __webpack_require__(819));
Vue.component('dmt-score', __webpack_require__(818));
Vue.component('tumbling-score', __webpack_require__(820));
Vue.component('small-video', __webpack_require__(808));
Vue.component('athletes', __webpack_require__(814));
Vue.component('athlete', __webpack_require__(813));
Vue.component('view-athlete-list', __webpack_require__(815));
Vue.component('view-athlete', __webpack_require__(816));
Vue.component('view-athletes', __webpack_require__(817));

Vue.use(__webpack_require__(126));
Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue2_filters___default.a);
Vue.use(__webpack_require__(123));
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
    data: window.Laravel,
    store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */]
});

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TrampolineScore__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DoubleMiniScore__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TumblingScore__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vee_validate__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
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


    props: {
        competitionId: null
    },

    mounted: function mounted() {
        var _this = this;

        if (this.competitionId) {
            this.$store.dispatch('LOAD_COMPETITION', this.competitionId).then(function (response) {
                _this.trampoline = _this.$store.getters.eventChecked('trampolineRoutines');
                _this.dmt = _this.$store.getters.eventChecked('doubleMiniPasses');
                _this.tumbling = _this.$store.getters.eventChecked('tumblingPasses');
            });
        }
    },


    computed: {
        trampolineRoutines: function trampolineRoutines() {
            return this.$store.state.trampolineRoutines;
        },
        doubleMiniPasses: function doubleMiniPasses() {
            return this.$store.state.doubleMiniPasses;
        },
        tumblingPasses: function tumblingPasses() {
            return this.$store.state.tumblingPasses;
        },

        title: {
            get: function get() {
                return this.$store.state.title;
            },
            set: function set(value) {
                this.$store.commit('SET_TITLE', value);
            }
        },
        location: {
            get: function get() {
                return this.$store.state.location;
            },
            set: function set(value) {
                this.$store.commit('SET_LOCATION', value);
            }
        },
        start_date: {
            get: function get() {
                return this.$store.state.start_date;
            },
            set: function set(value) {
                this.$store.commit('SET_START_DATE', value);
            }
        },
        end_date: {
            get: function get() {
                return this.$store.state.end_date;
            },
            set: function set(value) {
                this.$store.commit('SET_END_DATE', value);
            }
        },

        eventsValid: function eventsValid() {
            return this.$store.getters.eventChecked('trampolineRoutines') || this.$store.getters.eventChecked('doubleMiniPasses') || this.$store.getters.eventChecked('tumblingPasses');
        },
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
        submitCompetition: function submitCompetition() {

            var data = this.$store.getters.allData;

            var xhr = this.$store.state.competition_id ? this.$http.put('/competitions/' + this.$store.state.competition_id, data) : this.$http.post('/competitions', data);

            xhr.then(Vue.getJson).then(function (response) {
                window.location = '/competitions/' + response.competition.id;
            }).catch(function (err) {
                console.error(err);
                alert('There was an error submitting the scores.');
            });
        },
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this2 = this;

            this.$validator.validateAll().then(function () {
                _this2.submitCompetition();
            }).catch(function (err) {
                console.error(err);
                alert('Please correct the errors.');
            });
        }
    }
});


var dictionary = {
    en: {
        attributes: {
            title: 'Competition Title',
            start_date: 'Start Date',
            end_date: 'End Date'
        }
    }
};

__WEBPACK_IMPORTED_MODULE_4_vee_validate__["Validator"].updateDictionary(dictionary);
__WEBPACK_IMPORTED_MODULE_4_vee_validate__["Validator"].installDateTimeValidators(__WEBPACK_IMPORTED_MODULE_0_moment___default.a);

/***/ }),

/***/ 343:
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
            visibility: 'public',

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
    },


    computed: {
        visibilityDescription: function visibilityDescription() {
            return this.visibility === 'private' ? 'Only coaches who are following you and national coaches will be able to see your video.' : 'Anyone can see your video.';
        }
    }
});

/***/ }),

/***/ 344:
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

/* harmony default export */ __webpack_exports__["default"] = ({

    props: {
        routineKey: null,
        routines: null,
        discipline: null
    },

    data: function data() {
        return {
            uploaded: false
        };
    },


    computed: {
        hasAttachment: function hasAttachment() {
            return this.$store.state.competition_id && this.$store.state[this.routines][this.routineKey].hasVideo();
        },
        filename: function filename() {
            return this.$store.state[this.routines][this.routineKey].videoFilename;
        },
        uniqueId: function uniqueId() {
            return 'video-upload' + this.routines + '-' + this.routineKey;
        }
    },

    methods: {
        removeAttachment: function removeAttachment() {
            this.$store.commit('REMOVE_ATTACHMENT', {
                routines: this.routines,
                routineKey: this.routineKey
            });

            this.uploaded = false;
        }
    },

    created: function created() {
        var _this = this;

        var _self = this;

        this.$upload.new(this.uniqueId, {
            async: true,
            maxFiles: 1,
            multiple: false,
            maxSizePerFile: 204800, // 200 MB
            startOnSelect: true,
            extensions: ['mp4', 'webm', 'avi', 'asf', 'wmv', 'mpegts', 'mov', 'flv', 'mkv', '3gp'],
            http: function http(data) {
                data.body.append('event', _self.discipline);
                return _this.$http.post(data.url, data.body, { progress: data.progress }).then(data.success, data.error);
            },
            onSuccess: function onSuccess(response) {
                this.$store.commit('ATTACH_VIDEO', {
                    video: response.data.data,
                    routineKey: this.routineKey,
                    routines: this.routines
                });

                this.uploaded = true;
            }
        });
    },
    mounted: function mounted() {
        this.$upload.reset(this.uniqueId, {
            url: '/upload/multiple',
            currentFiles: 0,
            dropzoneId: 'video-upload-dropzone'
        });
    },
    beforeDestroy: function beforeDestroy() {
        this.$upload.reset(this.uniqueId, {
            dropzoneId: null
        });
    }
});

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_video_js__ = __webpack_require__(91);
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
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            player: null,
            duration: null,
            showVideo: false
        };
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
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.player = __WEBPACK_IMPORTED_MODULE_0_video_js___default()('video-' + this.videoId);

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
        playVideo: function playVideo() {
            this.showVideo = true;
            this.player.show();
            this.player.play();
        },
        hideVideo: function hideVideo() {
            this.showVideo = false;
            this.player.hide();
            this.player.pause();
        },
        hasHitQuotaView: function hasHitQuotaView() {
            if (!this.duration) {
                return false;
            }

            return Math.round(this.player.currentTime()) === Math.round(10 * this.duration / 100);
        },
        createView: function createView() {
            this.$http.post('/videos/' + this.videoId + '/views');
        }
    }
});

/***/ }),

/***/ 346:
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

/* harmony default export */ __webpack_exports__["default"] = ({
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
});

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_video_js__ = __webpack_require__(91);
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



/* harmony default export */ __webpack_exports__["default"] = ({
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
});

/***/ }),

/***/ 348:
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

/* harmony default export */ __webpack_exports__["default"] = ({
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
        },
        visibilityDescription: function visibilityDescription() {
            return this.visibility === 'private' ? 'Only coaches who are following you and National Coaches will be able to see your video.' : 'Anyone can see your video.';
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
});

/***/ }),

/***/ 349:
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

/* harmony default export */ __webpack_exports__["default"] = ({
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
});

/***/ }),

/***/ 350:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            followed: 0
        };
    },


    props: {
        athleteId: {
            required: true
        },
        userId: {
            required: true
        },
        isFollowed: {
            required: true
        }
    },

    methods: {
        follow: function follow() {
            var _this = this;

            this.$http.post('/athletes/follow', {
                athleteId: this.athleteId
            }).then(Vue.getJson).then(function (response) {
                if (response.status == "ok") {
                    _this.followed = response.verified == true ? 2 : 1;
                }
            });
        },
        unfollow: function unfollow() {
            var _this2 = this;

            this.$http.post('/athletes/unfollow', {
                athleteId: this.athleteId
            }).then(Vue.getJson).then(function (response) {
                if (response.status == "ok") {
                    _this2.followed = 0;
                }
            });
        }
    },

    mounted: function mounted() {
        this.followed = this.isFollowed;
    }
});

/***/ }),

/***/ 351:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            all_athletes: null,
            my_athletes: [],
            searchQuery: null
        };
    },


    props: {
        userId: {
            required: true
        },
        role: null
    },

    mounted: function mounted() {
        var _this = this;

        this.$http.get('/athletes/search').then(Vue.getJson).then(function (response) {
            _this.all_athletes = response.all_athletes;
            _this.my_athletes = response.my_athletes;
        });
    },


    computed: {
        searched: function searched() {
            var _this2 = this;

            var self = this;

            if (!this.searchQuery || !this.all_athletes) {
                return this.all_athletes;
            }

            return this.all_athletes.filter(function (athlete) {
                return athlete.name.toLowerCase().indexOf(_this2.searchQuery.toLowerCase()) !== -1;
            });
        }
    },

    methods: {
        followed: function followed(athlete) {
            var followed = 0;

            this.my_athletes.forEach(function (followedAthlete) {
                if (followedAthlete.id == athlete.id) {
                    followed = followedAthlete.pivot.verified ? 2 : 1;
                    return;
                }
            });

            return followed;
        }
    }
});

/***/ }),

/***/ 352:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        athletes: function athletes() {
            return this.$store.state.athleteView.allAthletes;
        }
    },

    data: function data() {
        return {
            shown: {}
        };
    },


    methods: {
        shownAthletes: function shownAthletes() {
            this.$store.commit('ATHLETE_VIEW_CHANGE_ATHLETE', this.shown);
        }
    },

    mounted: function mounted() {
        var _this = this;

        this.$store.dispatch('ATHLETE_VIEW_LOAD_ATHLETES').then(function () {
            _this.$store.state.athleteView.allAthletes.forEach(function (athlete) {
                _this.$set(_this.shown, athlete.id, true);
            });
            _this.shownAthletes();
        });
    }
});

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_unique_id_mixin__ = __webpack_require__(134);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            showVideos: null,
            showCompetitions: null
        };
    },


    props: {
        athlete: {
            required: true
        }
    },

    mounted: function mounted() {
        this.showVideos = this.athlete.videos.length > 0;
        this.showCompetitions = this.athlete.competitions.length > 0;
    },


    methods: {
        videoThumbnail: function videoThumbnail(video) {
            return '/storage/videos/' + video.unique_id + '_t.jpg';
        },
        videoUrl: function videoUrl(video) {
            return '/videos/' + video.unique_id;
        },
        competitionUrl: function competitionUrl(competition) {
            return '/competitions/' + competition.id;
        }
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_unique_id_mixin__["a" /* default */]]
});

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_unique_id_mixin__ = __webpack_require__(134);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },


    computed: {
        athletes: function athletes() {
            return this.$store.state.athleteView.shownAthletes;
        }
    },

    mounted: function mounted() {},


    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_unique_id_mixin__["a" /* default */]]
});

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TumblingScore__ = __webpack_require__(69);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            discipline: 'double mini',
            routines: 'doubleMiniPasses'
        };
    },


    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__["a" /* default */]]
});

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TrampolineScore__ = __webpack_require__(96);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            discipline: 'trampoline',
            routines: 'trampolineRoutines'
        };
    },


    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__["a" /* default */]]
});

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TumblingScore__ = __webpack_require__(69);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            discipline: 'tumbling',
            routines: 'tumblingPasses'
        };
    },


    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__["a" /* default */]]
});

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(88);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = __webpack_require__(87);

__webpack_require__(125);

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = __webpack_require__(92);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(124);

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

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TrampolineScore__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DoubleMiniScore__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TumblingScore__ = __webpack_require__(69);









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({

    strict: false,

    /*
     |--------------------------------------------------------------------------
     | State
     |--------------------------------------------------------------------------
     |
     | Single State Tree
     |
     | Vuex uses a single state tree - that is, this single object contains all
     | your application level state and serves as the "single source of truth".
     | This also means usually you will have only one store for each application.
     | A single state tree makes it straightforward to locate a specific piece of
     | state, and allows us to easily take snapshots of the current app state for
     | debugging purposes.
     |
     */
    state: {
        competition_id: null,

        title: null,
        location: null,
        start_date: null,
        end_date: null,

        trampolineRoutines: {
            prelim_compulsory: new __WEBPACK_IMPORTED_MODULE_3__TrampolineScore__["a" /* default */](),
            prelim_optional: new __WEBPACK_IMPORTED_MODULE_3__TrampolineScore__["a" /* default */](),
            semi_final_optional: new __WEBPACK_IMPORTED_MODULE_3__TrampolineScore__["a" /* default */](),
            final_optional: new __WEBPACK_IMPORTED_MODULE_3__TrampolineScore__["a" /* default */]()
        },
        doubleMiniPasses: {
            prelim_pass_1: new __WEBPACK_IMPORTED_MODULE_4__DoubleMiniScore__["a" /* default */](),
            prelim_pass_2: new __WEBPACK_IMPORTED_MODULE_4__DoubleMiniScore__["a" /* default */](),
            final_pass_3: new __WEBPACK_IMPORTED_MODULE_4__DoubleMiniScore__["a" /* default */](),
            final_pass_4: new __WEBPACK_IMPORTED_MODULE_4__DoubleMiniScore__["a" /* default */]()
        },
        tumblingPasses: {
            prelim_pass_1: new __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */](),
            prelim_pass_2: new __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */](),
            final_pass_3: new __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */](),
            final_pass_4: new __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */]()
        },

        // SHOULD BE NAMESPACED
        athleteView: {
            componentTitle: null,
            shownAthletes: null,
            allAthletes: null
        }
    },

    /*
     |--------------------------------------------------------------------------
     | Actions
     |--------------------------------------------------------------------------
     |
     | Actions are similar to mutations, the difference being that:
     |
     | * Instead of mutating the state, actions commit mutations.
     | * Actions can contain arbitrary asynchronous operations.
     |
     */
    actions: {
        LOAD_COMPETITION: function LOAD_COMPETITION(context, competitionId) {
            return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.get('/competitions/' + competitionId).then(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.getJson).then(function (response) {
                var competition = response.data;
                console.log('Competition: ', competition);

                store.commit('SET_COMPETITION_ID', competition.id);
                store.commit('SET_COMPETITION_FIELDS', { fields: competition });

                if (competition.trampolineScores.data.length) {
                    store.commit('SET_SCORES', {
                        scores: competition.trampolineScores.data,
                        scoreClass: __WEBPACK_IMPORTED_MODULE_3__TrampolineScore__["a" /* default */],
                        stateIndex: 'trampolineRoutines'
                    });
                }

                if (competition.doubleMiniScores.data.length) {
                    store.commit('SET_SCORES', {
                        scores: competition.doubleMiniScores.data,
                        scoreClass: __WEBPACK_IMPORTED_MODULE_4__DoubleMiniScore__["a" /* default */],
                        stateIndex: 'doubleMiniPasses'
                    });
                }

                if (competition.tumblingScores.data.length) {
                    store.commit('SET_SCORES', {
                        scores: competition.tumblingScores.data,
                        scoreClass: __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */],
                        stateIndex: 'tumblingPasses'
                    });
                }
            });
        },

        ATHLETE_VIEW_LOAD_ATHLETES: function ATHLETE_VIEW_LOAD_ATHLETES(context) {
            return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.get('/api/athletes').then(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.getJson).then(function (response) {
                store.commit('ATHLETE_VIEW_SET_ATHLETES', response.athletes);
            });
        }
    },

    /*
     |--------------------------------------------------------------------------
     | Mutations
     |--------------------------------------------------------------------------
     |
     | The only way to actually change state in a Vuex store is by committing
     | a mutation. Vuex mutations are very similar to events: each mutation has
     | a string type and a handler. The handler function is where we perform
     | actual state modifications, and it will receive the state as the first
     | argument.
     |
     */
    mutations: {
        SET_COMPETITION_ID: function SET_COMPETITION_ID(state, id) {
            state.competition_id = id;
        },

        SET_COMPETITION_FIELDS: function SET_COMPETITION_FIELDS(state, _ref) {
            var fields = _ref.fields;

            state.title = fields.title;
            state.location = fields.location;
            state.start_date = __WEBPACK_IMPORTED_MODULE_2_moment___default()(fields.start_date.date).format('YYYY-MM-DD');
            state.end_date = __WEBPACK_IMPORTED_MODULE_2_moment___default()(fields.end_date.date).format('YYYY-MM-DD');
        },

        SET_TITLE: function SET_TITLE(state, title) {
            state.title = title;
        },

        SET_LOCATION: function SET_LOCATION(state, location) {
            state.location = location;
        },

        SET_START_DATE: function SET_START_DATE(state, start_date) {
            state.start_date = start_date;
        },

        SET_END_DATE: function SET_END_DATE(state, end_date) {
            state.end_date = end_date;
        },

        SET_SCORES: function SET_SCORES(state, _ref2) {
            var scores = _ref2.scores,
                scoreClass = _ref2.scoreClass,
                stateIndex = _ref2.stateIndex;

            scores.forEach(function (score) {
                var scoreInstance = new scoreClass();
                var scoreMap = {};

                Object.keys(scoreInstance.attrs).forEach(function (scorePart) {
                    scoreMap[scorePart] = score[scorePart];
                });

                scoreInstance.updateAttributes(scoreMap);
                scoreInstance.setId(score.id);
                scoreInstance.setVideoId(score.video_id);

                if (score.video.data.hasOwnProperty('title')) {
                    scoreInstance.setVideoFilename(score.video.data.title);
                }

                state[stateIndex][score.routine] = scoreInstance;
            });
        },

        SET_ROUTINE_PROPERTY: function SET_ROUTINE_PROPERTY(state, _ref3) {
            var discipline = _ref3.discipline,
                routineKey = _ref3.routineKey,
                component = _ref3.component,
                value = _ref3.value;

            state[discipline][routineKey].attrs[component].value = value;

            if (component !== 'total_score') {
                state[discipline][routineKey].computeTotal();
            } else {
                state[discipline][routineKey].setTotal(value);
            }
        },

        REMOVE_ATTACHMENT: function REMOVE_ATTACHMENT(state, _ref4) {
            var routines = _ref4.routines,
                routineKey = _ref4.routineKey;

            state[routines][routineKey].setVideoId(null);
            state[routines][routineKey].setVideoFilename(null);
        },

        ATTACH_VIDEO: function ATTACH_VIDEO(state, _ref5) {
            var routines = _ref5.routines,
                routineKey = _ref5.routineKey,
                video = _ref5.video;

            state[routines][routineKey].setVideoId(video.id);
            state[routines][routineKey].setVideoFilename(video.title);
        },

        ATHLETE_VIEW_SET_ATHLETES: function ATHLETE_VIEW_SET_ATHLETES(state, athletes) {
            state.athleteView.allAthletes = athletes;
        },

        ATHLETE_VIEW_CHANGE_ATHLETE: function ATHLETE_VIEW_CHANGE_ATHLETE(state, shown) {
            var tempListOfAthletes = state.athleteView.allAthletes.filter(function (athlete) {
                return shown[athlete.id];
            });

            state.athleteView.shownAthletes = tempListOfAthletes;
        }
    },

    /*
     |--------------------------------------------------------------------------
     | Getters
     |--------------------------------------------------------------------------
     |
     | Sometimes we may need to compute derived state based on store state, for
     | example filtering through a list of items and counting them.
     |
     */
    getters: {
        eventChecked: function eventChecked(state, getters) {
            return function (discipline) {
                var checked = false;
                Object.keys(state[discipline]).forEach(function (routineKey) {
                    if (!checked && parseInt(state[discipline][routineKey].attrs.total_score.value) > 0) {
                        checked = true;
                    }
                });

                return checked;
            };
        },

        validRoutines: function validRoutines(state, getters) {
            return function (discipline) {
                var valid = null;

                Object.keys(state[discipline]).forEach(function (routineKey) {
                    if (parseInt(state[discipline][routineKey].attrs.total_score.value) > 0) {
                        if (!valid) {
                            valid = {};
                        }
                        valid[routineKey] = state[discipline][routineKey];
                    }
                });

                return valid;
            };
        },

        allData: function allData(state, getters) {
            return {
                competition_id: state.competition_id,
                title: state.title,
                location: state.location,
                start_date: state.start_date,
                end_date: state.end_date,

                trampoline: getters.eventChecked('trampolineRoutines'),
                dmt: getters.eventChecked('doubleMiniPasses'),
                tumbling: getters.eventChecked('tumblingPasses'),

                trampolineRoutines: getters.validRoutines('trampolineRoutines'),
                doubleMiniPasses: getters.validRoutines('doubleMiniPasses'),
                tumblingPasses: getters.validRoutines('tumblingPasses')
            };
        }
    },

    /*
     |--------------------------------------------------------------------------
     | Modules
     |--------------------------------------------------------------------------
     |
     | Due to using a single state tree, all state of our application is
     | contained inside one big object. However, as our application grows in
     | scale, the store can get really bloated.
     |
     | To help with that, Vuex allows us to divide our store into modules.
     | Each module can contain its own state, mutations, actions, getters, and
     | even nested modules - it's fractal all the way down.
     |
     */
    modules: {}
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(95);


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

/* harmony default export */ __webpack_exports__["a"] = (TumblingScore);

/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(342),
  /* template */
  __webpack_require__(830),
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

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(343),
  /* template */
  __webpack_require__(822),
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

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(344),
  /* template */
  __webpack_require__(827),
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

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(345),
  /* template */
  __webpack_require__(831),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/SmallVideo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SmallVideo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b3086c6", Component.options)
  } else {
    hotAPI.reload("data-v-7b3086c6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(346),
  /* template */
  __webpack_require__(835),
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

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(347),
  /* template */
  __webpack_require__(826),
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

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(348),
  /* template */
  __webpack_require__(832),
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

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(349),
  /* template */
  __webpack_require__(824),
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

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(350),
  /* template */
  __webpack_require__(821),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/athletes/search/Athlete.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Athlete.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2523e19a", Component.options)
  } else {
    hotAPI.reload("data-v-2523e19a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(351),
  /* template */
  __webpack_require__(836),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/athletes/search/Athletes.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Athletes.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f9f81a6e", Component.options)
  } else {
    hotAPI.reload("data-v-f9f81a6e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(352),
  /* template */
  __webpack_require__(829),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/athletes/view/AthleteList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AthleteList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67854bd5", Component.options)
  } else {
    hotAPI.reload("data-v-67854bd5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(353),
  /* template */
  __webpack_require__(828),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/athletes/view/AthleteView.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AthleteView.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e977a5c", Component.options)
  } else {
    hotAPI.reload("data-v-5e977a5c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(354),
  /* template */
  __webpack_require__(825),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/austinwhite/Sites/usag-videos/resources/assets/js/components/athletes/view/AthletesView.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AthletesView.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4327c0b1", Component.options)
  } else {
    hotAPI.reload("data-v-4327c0b1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(355),
  /* template */
  __webpack_require__(833),
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

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(356),
  /* template */
  __webpack_require__(834),
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

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(19)(
  /* script */
  __webpack_require__(357),
  /* template */
  __webpack_require__(823),
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

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.followed === 0) ? _c('button', {
    staticClass: "btn btn-default",
    on: {
      "click": _vm.follow
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-eye-open"
  }), _vm._v(" Follow\n    ")]) : _vm._e(), _vm._v(" "), (_vm.followed === 1) ? _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "disabled": ""
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-hourglass"
  }), _vm._v(" Waiting for verification\n    ")]) : _vm._e(), _vm._v(" "), (_vm.followed === 2) ? _c('button', {
    staticClass: "btn btn-default",
    on: {
      "click": _vm.unfollow
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-eye-close"
  }), _vm._v(" Unfollow\n    ")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2523e19a", module.exports)
  }
}

/***/ }),

/***/ 822:
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
      "value": "public"
    }
  }, [_vm._v("Public")])]), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_c('i', {
    class: {
      'glyphicon': true, 'glyphicon-lock': _vm.visibility == 'private', 'glyphicon-eye-open': _vm.visibility == 'public'
    }
  }), _vm._v("\n                            " + _vm._s(_vm.visibilityDescription) + "\n                        ")])]), _vm._v(" "), _c('button', {
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

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group score-tile"
  }, [_c('h5', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('routine-video', {
    attrs: {
      "routines": _vm.routines,
      "discipline": _vm.discipline,
      "routine-key": _vm.routineKey
    }
  }), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('execution'),
      "title": "Execution"
    }
  }, [_vm._v("Execution")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.execution),
      expression: "execution",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('execution'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.execution)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.execution = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('difficulty'),
      "title": "Difficulty"
    }
  }, [_vm._v("Difficulty")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.difficulty),
      expression: "difficulty",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('difficulty'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.difficulty)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.difficulty = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('neutral_deduction'),
      "title": "Neutral Deduction"
    }
  }, [_vm._v("ND")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.neutral_deduction),
      expression: "neutral_deduction",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('neutral_deduction'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.neutral_deduction)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.neutral_deduction = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('total_score'),
      "title": "Total Score"
    }
  }, [_vm._v("Total Score")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.total_score),
      expression: "total_score",
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
      "value": (_vm.total_score)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.total_score = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a6a8d21", module.exports)
  }
}

/***/ }),

/***/ 824:
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

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.athletes), function(athlete) {
    return _c('div', [_c('view-athlete', {
      attrs: {
        "athlete": athlete
      }
    })], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4327c0b1", module.exports)
  }
}

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('video', {
    staticClass: "video-js vjs-default-skin vjs-big-play-centered vjs-16-9",
    attrs: {
      "id": "video",
      "controls": "",
      "preload": "auto",
      "data-setup": "{\"fluid\": true, \"preload\": \"auto\", \"playbackRates\": [0.25, 0.33, 1, 2]}",
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

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.$upload.files(_vm.uniqueId).error.length) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$upload.files(_vm.uniqueId).error[0].name))]), _vm._v("\n        " + _vm._s(_vm.$upload.files(_vm.uniqueId).error[0].errors[0].message) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.uploaded && !_vm.hasAttachment),
      expression: "!uploaded && !hasAttachment"
    }],
    staticClass: "btn btn-default btn-xs",
    attrs: {
      "disabled": _vm.$upload.meta(_vm.uniqueId).status === 'sending',
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.$upload.select(_vm.uniqueId)
      }
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-paperclip"
  }), _vm._v(" Attach Video\n    ")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.uploaded || _vm.hasAttachment),
      expression: "uploaded || hasAttachment"
    }]
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-check"
  }), _vm._v(" " + _vm._s(_vm.filename) + "\n        "), _c('a', {
    staticClass: "remove-attachment",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.removeAttachment($event)
      }
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-remove-sign"
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$upload.meta(_vm.uniqueId).status === 'sending'),
      expression: "$upload.meta(uniqueId).status === 'sending'"
    }],
    staticClass: "upload-progress progress"
  }, [_c('div', {
    staticClass: "progress-bar",
    style: ('width: ' + _vm.$upload.meta(_vm.uniqueId).percentComplete + '%;')
  }, [_vm._v("\n            " + _vm._s(_vm.$upload.meta(_vm.uniqueId).percentComplete) + "% Complete\n        ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b6c0540", module.exports)
  }
}

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('div', {
    staticClass: "panel-title"
  }, [_vm._v(_vm._s(_vm.athlete.name))])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-inline"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.showVideos),
      expression: "showVideos"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.showVideos) ? _vm._i(_vm.showVideos, null) > -1 : (_vm.showVideos)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.showVideos,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.showVideos = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.showVideos = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.showVideos = $$c
        }
      }
    }
  }), _vm._v("\n                    Videos (" + _vm._s(_vm.athlete.videos.length) + ")\n                ")])]), _vm._v("\n\n              \n\n            "), _c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.showCompetitions),
      expression: "showCompetitions"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.showCompetitions) ? _vm._i(_vm.showCompetitions, null) > -1 : (_vm.showCompetitions)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.showCompetitions,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.showCompetitions = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.showCompetitions = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.showCompetitions = $$c
        }
      }
    }
  }), _vm._v("\n                    Competitions (" + _vm._s(_vm.athlete.competitions.length) + ")\n                ")])])]), _vm._v(" "), (_vm.showVideos && _vm.athlete.videos.length) ? _c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.athlete.videos), function(video) {
    return _c('div', [_c('div', {
      staticClass: "col-sm-6 col-md-4"
    }, [_c('div', {
      staticClass: "thumbnail"
    }, [_c('a', {
      attrs: {
        "href": _vm.videoUrl(video)
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.videoThumbnail(video),
        "alt": video.title
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "caption"
    }, [_c('a', {
      attrs: {
        "href": _vm.videoUrl(video)
      }
    }, [_vm._v(_vm._s(video.title))])])])])])
  })], 2) : _vm._e(), _vm._v(" "), (_vm.showCompetitions && _vm.athlete.competitions.length) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("Competitions:")]), _vm._v(" "), _c('table', {
    staticClass: "table table-hover table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.athlete.competitions), function(competition) {
    return _c('tr', [_c('td', {
      staticStyle: {
        "width": "55%"
      }
    }, [_c('a', {
      attrs: {
        "href": _vm.competitionUrl(competition)
      }
    }, [_vm._v(_vm._s(competition.title))])]), _vm._v(" "), _c('td', [(competition.videoCount > 0) ? _c('span', {
      staticClass: "badge badge-default"
    }, [_c('i', {
      staticClass: "glyphicon glyphicon-facetime-video"
    }), _vm._v(" " + _vm._s(competition.videoCount))]) : _vm._e(), _vm._v(" "), (competition.trampoline_scores.length) ? _c('span', {
      staticClass: "label discipline-tra"
    }, [_vm._v("Trampoline")]) : _vm._e(), _vm._v(" "), (competition.double_mini_scores.length) ? _c('span', {
      staticClass: "label discipline-dmt"
    }, [_vm._v("Double Mini")]) : _vm._e(), _vm._v(" "), (competition.tumbling_scores.length) ? _c('span', {
      staticClass: "label discipline-tum"
    }, [_vm._v("Tumbling")]) : _vm._e()])])
  }))])])]) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("Videos:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Events")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e977a5c", module.exports)
  }
}

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "list-group"
  }, _vm._l((_vm.athletes), function(athlete) {
    return _c('li', {
      staticClass: "list-group-item"
    }, [_c('label', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.shown[athlete.id]),
        expression: "shown[athlete.id]"
      }],
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(_vm.shown[athlete.id]) ? _vm._i(_vm.shown[athlete.id], null) > -1 : (_vm.shown[athlete.id])
      },
      on: {
        "change": _vm.shownAthletes,
        "__c": function($event) {
          var $$a = _vm.shown[athlete.id],
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$c) {
              $$i < 0 && (_vm.shown[athlete.id] = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.shown[athlete.id] = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.shown[athlete.id] = $$c
          }
        }
      }
    }), _vm._v(" " + _vm._s(athlete.name))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-67854bd5", module.exports)
  }
}

/***/ }),

/***/ 830:
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
      expression: "title"
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
      expression: "start_date"
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
  }, [_vm._v("End Date")]), _vm._v(" "), _c('p', {
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
      expression: "end_date"
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
    }
  })], 1), _vm._v(" "), _c('div', {
    class: 'col-md-' + _vm.trampColSize
  }, [_c('trampoline-score', {
    attrs: {
      "title": "Prelim Optional",
      "routine-key": "prelim_optional"
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
    }
  })], 1), _vm._v(" "), _c('div', {
    class: 'col-md-' + _vm.dmtColSize
  }, [_c('dmt-score', {
    attrs: {
      "title": "Pass 2",
      "routine-key": "prelim_pass_2"
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
      "routine-key": "final_pass_3"
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
      "routine-key": "final_pass_4"
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
    }
  })], 1), _vm._v(" "), _c('div', {
    class: 'col-md-' + _vm.tumblingColSize
  }, [_c('tumbling-score', {
    attrs: {
      "title": "Pass 2",
      "routine-key": "prelim_pass_2"
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
      "routine-key": "final_pass_3"
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
      "routine-key": "final_pass_4"
    }
  })], 1)])])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "disabled": _vm.errors.any() || !_vm.eventsValid
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

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "display": "block !important"
    }
  }, [_c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showVideo),
      expression: "!showVideo"
    }],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.playVideo($event)
      }
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-facetime-video"
  }), _vm._v("\n        Play Video\n    ")]), _vm._v(" "), _c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showVideo),
      expression: "showVideo"
    }],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.hideVideo($event)
      }
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-menu-up"
  }), _vm._v("\n        Hide Video\n    ")]), _vm._v(" "), _c('video', {
    staticClass: "video-js vjs-default-skin vjs-big-play-centered vjs-16-9 vjs-hidden",
    attrs: {
      "id": 'video-' + _vm.videoId,
      "controls": "",
      "data-setup": "{\"fluid\": true, \"playbackRates\": [0.25, 0.33, 1, 2] }",
      "poster": _vm.img,
      "width": _vm.width,
      "height": _vm.height
    }
  }, [_c('source', {
    attrs: {
      "type": "video/mp4",
      "src": _vm.src
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b3086c6", module.exports)
  }
}

/***/ }),

/***/ 832:
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
      "value": "public"
    }
  }, [_vm._v("Public")])]), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.visibilityDescription))])]), _vm._v(" "), _c('span', {
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

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group score-tile"
  }, [_c('h5', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('routine-video', {
    attrs: {
      "routines": _vm.routines,
      "discipline": _vm.discipline,
      "routine-key": _vm.routineKey
    }
  }), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('execution'),
      "title": "Execution"
    }
  }, [_vm._v("Execution")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.execution),
      expression: "execution",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('execution'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.execution)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.execution = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('difficulty'),
      "title": "Difficulty"
    }
  }, [_vm._v("Difficulty")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.difficulty),
      expression: "difficulty",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('difficulty'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.difficulty)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.difficulty = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('neutral_deduction'),
      "title": "Neutral Deduction"
    }
  }, [_vm._v("ND")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.neutral_deduction),
      expression: "neutral_deduction",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('neutral_deduction'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.neutral_deduction)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.neutral_deduction = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('total_score'),
      "title": "Total Score"
    }
  }, [_vm._v("Total Score")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.total_score),
      expression: "total_score",
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
      "value": (_vm.total_score)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.total_score = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9338a636", module.exports)
  }
}

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group score-tile"
  }, [_c('h5', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('routine-video', {
    attrs: {
      "routines": _vm.routines,
      "discipline": _vm.discipline,
      "routine-key": _vm.routineKey
    }
  }), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('execution'),
      "title": "Execution"
    }
  }, [_vm._v("Execution")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.execution),
      expression: "execution",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('execution'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.execution)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.execution = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('difficulty'),
      "title": "Difficulty"
    }
  }, [_vm._v("Difficulty")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.difficulty),
      expression: "difficulty",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('difficulty'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.difficulty)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.difficulty = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('time_of_flight'),
      "title": "Time of Flight"
    }
  }, [_vm._v("TOF")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.time_of_flight),
      expression: "time_of_flight",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('time_of_flight'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.time_of_flight)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.time_of_flight = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('horizontal_displacement'),
      "title": "Horizontal Displacement"
    }
  }, [_vm._v("HD")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.horizontal_displacement),
      expression: "horizontal_displacement",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('horizontal_displacement'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.horizontal_displacement)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.horizontal_displacement = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('neutral_deduction'),
      "title": "Neutral Deduction"
    }
  }, [_vm._v("ND")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.neutral_deduction),
      expression: "neutral_deduction",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "name": _vm.formId('neutral_deduction'),
      "type": "number",
      "step": "any"
    },
    domProps: {
      "value": (_vm.neutral_deduction)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.neutral_deduction = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": _vm.formId('total_score'),
      "title": "Total Score"
    }
  }, [_vm._v("Total Score")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.total_score),
      expression: "total_score",
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
      "value": (_vm.total_score)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.total_score = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e4e3a3a0", module.exports)
  }
}

/***/ }),

/***/ 835:
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

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('div', {
    staticClass: "panel-title pull-left"
  }, [_vm._v("All Athletes")]), _vm._v(" "), _c('div', {
    staticClass: "panel-title pull-right col-md-4"
  }, [_c('div', {
    staticClass: "input-group add-on"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchQuery),
      expression: "searchQuery"
    }],
    staticClass: "form-control col-md-4",
    attrs: {
      "placeholder": "Search",
      "type": "text"
    },
    domProps: {
      "value": (_vm.searchQuery)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchQuery = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [(_vm.searched.length) ? _c('div', [(_vm.role === 'owner' || _vm.role === 'admin' || _vm.role === 'national-coach') ? _c('p', {
    staticStyle: {
      "font-style": "italic"
    }
  }, [_vm._v("\n                    Athletes that you follow will be notified.\n                ")]) : _vm._e(), _vm._v(" "), (_vm.role === 'coach') ? _c('p', {
    staticStyle: {
      "font-style": "italic"
    }
  }, [_vm._v("\n                    Athletes that you request to follow will be notified and asked to verify before you can view their\n                    videos and competition results.\n                ")]) : _vm._e(), _vm._v(" "), _c('table', {
    staticClass: "table table-striped table-hover"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.searched), function(athlete) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(athlete.name))]), _vm._v(" "), _c('td', [_c('a', {
      attrs: {
        "href": 'mailto:' + athlete.email
      }
    }, [_vm._v(_vm._s(athlete.email))])]), _vm._v(" "), _c('td', [_c('athlete', {
      attrs: {
        "athlete-id": athlete.id,
        "user-id": _vm.userId,
        "is-followed": _vm.followed(athlete)
      }
    })], 1)])
  }))])]) : _c('div', [_c('span', {
    staticStyle: {
      "font-style": "italic"
    }
  }, [_vm._v("No athletes to display")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-search"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Email")]), _vm._v(" "), _c('th')])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f9f81a6e", module.exports)
  }
}

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(322);
module.exports = __webpack_require__(323);


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mathjs__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Score = function () {
    function Score() {
        _classCallCheck(this, Score);

        this.attrs = {
            execution: {
                order: 1,
                value: null
            },
            difficulty: {
                order: 2,
                value: null
            },
            neutral_deduction: {
                order: 20,
                value: null
            },
            total_score: {
                order: 100,
                value: null
            }
        };

        this.video_id = null;
        this.videoFilename = null;
        this.id = null;
    }

    _createClass(Score, [{
        key: 'setId',
        value: function setId(id) {
            this.id = id;
        }
    }, {
        key: 'setVideoId',
        value: function setVideoId(videoId) {
            this.video_id = videoId;
        }
    }, {
        key: 'setVideoFilename',
        value: function setVideoFilename(videoFilename) {
            this.videoFilename = videoFilename;
        }
    }, {
        key: 'hasVideo',
        value: function hasVideo() {
            return !!this.video_id;
        }
    }, {
        key: 'updateAttributes',
        value: function updateAttributes(attributes) {
            var _this = this;

            Object.keys(attributes).forEach(function (key) {
                _this.attrs[key].value = attributes[key];
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
        key: 'hasScore',
        value: function hasScore() {
            this.attrs.total_score.value !== null && this.attrs.total_score.value > 0;
        }
    }, {
        key: 'attribute',
        value: function attribute(key) {
            this.attrs[key].value;
        }
    }, {
        key: 'computeTotal',
        value: function computeTotal() {
            var _this3 = this;

            var sum = 0;

            this.scoreKeys().forEach(function (component_key) {
                if (component_key === 'neutral_deduction') {
                    sum = _this3.attrs.neutral_deduction.value ? __WEBPACK_IMPORTED_MODULE_0_mathjs___default.a.subtract(sum, _this3.attrs.neutral_deduction.value) : sum;
                } else if (component_key !== 'total_score') {
                    sum = _this3.attrs[component_key].value ? __WEBPACK_IMPORTED_MODULE_0_mathjs___default.a.add(sum, _this3.attrs[component_key].value) : sum;
                }
            });

            this.attrs.total_score.value = __WEBPACK_IMPORTED_MODULE_0_mathjs___default.a.round(sum, 3);
        }
    }, {
        key: 'setTotal',
        value: function setTotal(value) {
            var _this4 = this;

            this.scoreKeys().forEach(function (component_key) {
                if (component_key !== 'total_score') {
                    _this4.attrs[component_key].value = null;
                }
            });

            this.attrs.total_score.value = value !== '' ? __WEBPACK_IMPORTED_MODULE_0_mathjs___default.a.round(value, 3) : '';
        }
    }]);

    return Score;
}();

/* harmony default export */ __webpack_exports__["a"] = (Score);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(95);


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
            value: null
        };

        _this.attrs.horizontal_displacement = {
            order: 11,
            value: null
        };

        return _this;
    }

    return TrampolineScore;
}(__WEBPACK_IMPORTED_MODULE_0__Score__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (TrampolineScore);

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var math = __webpack_require__(89);
var _ = __webpack_require__(88);

var ScoreMixin = {

    props: {
        title: null,
        routineKey: null
    },

    computed: {
        execution: {
            get: function get() {
                return this.$store.state[this.routines][this.routineKey].attrs.execution.value;
            },
            set: function set(value) {
                this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'execution', value: value });
            }
        },
        difficulty: {
            get: function get() {
                return this.$store.state[this.routines][this.routineKey].attrs.difficulty.value;
            },
            set: function set(value) {
                this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'difficulty', value: value });
            }
        },
        time_of_flight: {
            get: function get() {
                return this.$store.state[this.routines][this.routineKey].attrs.time_of_flight.value;
            },
            set: function set(value) {
                this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'time_of_flight', value: value });
            }
        },
        horizontal_displacement: {
            get: function get() {
                return this.$store.state[this.routines][this.routineKey].attrs.horizontal_displacement.value;
            },
            set: function set(value) {
                this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'horizontal_displacement', value: value });
            }
        },
        neutral_deduction: {
            get: function get() {
                return this.$store.state[this.routines][this.routineKey].attrs.neutral_deduction.value;
            },
            set: function set(value) {
                this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'neutral_deduction', value: value });
            }
        },
        total_score: {
            get: function get() {
                return this.$store.state[this.routines][this.routineKey].attrs.total_score.value;
            },
            set: function set(value) {
                this.$store.commit('SET_ROUTINE_PROPERTY', { discipline: this.routines, routineKey: this.routineKey, component: 'total_score', value: value });
            }
        }
    },

    methods: {
        formId: function formId(component) {
            return [this.discipline, this.routineKey, component].join('_');
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (ScoreMixin);

/***/ })

},[840]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0RvdWJsZU1pbmlTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91bmlxdWUtaWQubWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vL0NvbXBldGl0aW9uRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL011bHRpcGxlVmlkZW9VcGxvYWQudnVlIiwid2VicGFjazovLy9Sb3V0aW5lVmlkZW8udnVlIiwid2VicGFjazovLy9TbWFsbFZpZGVvLnZ1ZSIsIndlYnBhY2s6Ly8vVmlkZW9Db21tZW50cy52dWUiLCJ3ZWJwYWNrOi8vL1ZpZGVvUGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vVmlkZW9VcGxvYWQudnVlIiwid2VicGFjazovLy9WaWRlb1ZvdGluZy52dWUiLCJ3ZWJwYWNrOi8vL0F0aGxldGUudnVlIiwid2VicGFjazovLy9BdGhsZXRlcy52dWUiLCJ3ZWJwYWNrOi8vL0F0aGxldGVMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vQXRobGV0ZVZpZXcudnVlIiwid2VicGFjazovLy9BdGhsZXRlc1ZpZXcudnVlIiwid2VicGFjazovLy9Eb3VibGVNaW5pU2NvcmUudnVlIiwid2VicGFjazovLy9UcmFtcG9saW5lU2NvcmUudnVlIiwid2VicGFjazovLy9UdW1ibGluZ1Njb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvVHVtYmxpbmdTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXRobGV0ZXMvc2VhcmNoL0F0aGxldGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdGhsZXRlcy9zZWFyY2gvQXRobGV0ZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdGhsZXRlcy92aWV3L0F0aGxldGVMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXRobGV0ZXMvdmlldy9BdGhsZXRlVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F0aGxldGVzL3ZpZXcvQXRobGV0ZXNWaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UcmFtcG9saW5lU2NvcmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F0aGxldGVzL3NlYXJjaC9BdGhsZXRlLnZ1ZT85MjAwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZT9hNzA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWU/ZjU2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Wb3RpbmcudnVlPzYzNmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F0aGxldGVzL3ZpZXcvQXRobGV0ZXNWaWV3LnZ1ZT83N2RjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1BsYXllci52dWU/OTMxYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZT8xYjQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdGhsZXRlcy92aWV3L0F0aGxldGVWaWV3LnZ1ZT80NWNjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdGhsZXRlcy92aWV3L0F0aGxldGVMaXN0LnZ1ZT80YTA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21wZXRpdGlvbkZvcm0udnVlP2FmYzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlPzhmNzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZT9mYzEyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZT85NmY3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZT9lMjYxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZT80Y2I4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdGhsZXRlcy9zZWFyY2gvQXRobGV0ZXMudnVlPzI0YzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9TY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1RyYW1wb2xpbmVTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9zY29yZS5taXhpbi5qcyJdLCJuYW1lcyI6WyJEb3VibGVNaW5pU2NvcmUiLCJkaXNjaXBsaW5lIiwibGFiZWwiLCJyb3V0aW5lS2V5cyIsIlVuaXF1ZUlkTWl4aW4iLCJtZXRob2RzIiwidW5pcXVlSWQiLCJwcmVmaXgiLCJpZCIsInJlcXVpcmUiLCJWdWUiLCJjb21wb25lbnQiLCJ1c2UiLCJ3aW5kb3ciLCJFdmVudCIsImluc3RhbGwiLCJvcHRpb25zIiwiZ2V0SnNvbiIsInJlc3BvbnNlIiwianNvbiIsImh0dHAiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsImFwcCIsImVsIiwiZGF0YSIsInN0b3JlIiwiXyIsIiQiLCJqUXVlcnkiLCJheGlvcyIsImRlZmF1bHRzIiwiVnVleCIsIlN0b3JlIiwic3RyaWN0Iiwic3RhdGUiLCJjb21wZXRpdGlvbl9pZCIsInRpdGxlIiwibG9jYXRpb24iLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJ0cmFtcG9saW5lUm91dGluZXMiLCJwcmVsaW1fY29tcHVsc29yeSIsInByZWxpbV9vcHRpb25hbCIsInNlbWlfZmluYWxfb3B0aW9uYWwiLCJmaW5hbF9vcHRpb25hbCIsImRvdWJsZU1pbmlQYXNzZXMiLCJwcmVsaW1fcGFzc18xIiwicHJlbGltX3Bhc3NfMiIsImZpbmFsX3Bhc3NfMyIsImZpbmFsX3Bhc3NfNCIsInR1bWJsaW5nUGFzc2VzIiwiYXRobGV0ZVZpZXciLCJjb21wb25lbnRUaXRsZSIsInNob3duQXRobGV0ZXMiLCJhbGxBdGhsZXRlcyIsImFjdGlvbnMiLCJMT0FEX0NPTVBFVElUSU9OIiwiY29udGV4dCIsImNvbXBldGl0aW9uSWQiLCJnZXQiLCJ0aGVuIiwiY29tcGV0aXRpb24iLCJjb25zb2xlIiwibG9nIiwiY29tbWl0IiwiZmllbGRzIiwidHJhbXBvbGluZVNjb3JlcyIsImxlbmd0aCIsInNjb3JlcyIsInNjb3JlQ2xhc3MiLCJzdGF0ZUluZGV4IiwiZG91YmxlTWluaVNjb3JlcyIsInR1bWJsaW5nU2NvcmVzIiwiQVRITEVURV9WSUVXX0xPQURfQVRITEVURVMiLCJhdGhsZXRlcyIsIm11dGF0aW9ucyIsIlNFVF9DT01QRVRJVElPTl9JRCIsIlNFVF9DT01QRVRJVElPTl9GSUVMRFMiLCJtb21lbnQiLCJkYXRlIiwiZm9ybWF0IiwiU0VUX1RJVExFIiwiU0VUX0xPQ0FUSU9OIiwiU0VUX1NUQVJUX0RBVEUiLCJTRVRfRU5EX0RBVEUiLCJTRVRfU0NPUkVTIiwiZm9yRWFjaCIsInNjb3JlIiwic2NvcmVJbnN0YW5jZSIsInNjb3JlTWFwIiwiT2JqZWN0Iiwia2V5cyIsImF0dHJzIiwic2NvcmVQYXJ0IiwidXBkYXRlQXR0cmlidXRlcyIsInNldElkIiwic2V0VmlkZW9JZCIsInZpZGVvX2lkIiwidmlkZW8iLCJoYXNPd25Qcm9wZXJ0eSIsInNldFZpZGVvRmlsZW5hbWUiLCJyb3V0aW5lIiwiU0VUX1JPVVRJTkVfUFJPUEVSVFkiLCJyb3V0aW5lS2V5IiwidmFsdWUiLCJjb21wdXRlVG90YWwiLCJzZXRUb3RhbCIsIlJFTU9WRV9BVFRBQ0hNRU5UIiwicm91dGluZXMiLCJBVFRBQ0hfVklERU8iLCJBVEhMRVRFX1ZJRVdfU0VUX0FUSExFVEVTIiwiQVRITEVURV9WSUVXX0NIQU5HRV9BVEhMRVRFIiwic2hvd24iLCJ0ZW1wTGlzdE9mQXRobGV0ZXMiLCJmaWx0ZXIiLCJhdGhsZXRlIiwiZ2V0dGVycyIsImV2ZW50Q2hlY2tlZCIsImNoZWNrZWQiLCJwYXJzZUludCIsInRvdGFsX3Njb3JlIiwidmFsaWRSb3V0aW5lcyIsInZhbGlkIiwiYWxsRGF0YSIsInRyYW1wb2xpbmUiLCJkbXQiLCJ0dW1ibGluZyIsIm1vZHVsZXMiLCJUdW1ibGluZ1Njb3JlIiwiU2NvcmUiLCJleGVjdXRpb24iLCJvcmRlciIsImRpZmZpY3VsdHkiLCJuZXV0cmFsX2RlZHVjdGlvbiIsInZpZGVvRmlsZW5hbWUiLCJ2aWRlb0lkIiwiYXR0cmlidXRlcyIsImtleSIsInNvcnQiLCJhIiwiYiIsInN1bSIsInNjb3JlS2V5cyIsImNvbXBvbmVudF9rZXkiLCJtYXRoIiwic3VidHJhY3QiLCJhZGQiLCJyb3VuZCIsIlRyYW1wb2xpbmVTY29yZSIsInRpbWVfb2ZfZmxpZ2h0IiwiaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQiLCJTY29yZU1peGluIiwicHJvcHMiLCJjb21wdXRlZCIsIiRzdG9yZSIsInNldCIsImZvcm1JZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTs7SUFFTUEsZTs7O0FBQ0YsK0JBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxVQUFMLEdBQWtCLEtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx5QkFBa0c7QUFDbEc7QUFDQSx5QkFBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzlCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsOEVBQThFO0FBQzlFLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2xNQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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O0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM5aUJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdEQUF3RDtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2hFQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFD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QSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdk5BLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNB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QUF3RDRCLFdBQXhELENBQW9FaEIsS0FBM0U7QUFBa0YsYUFEakY7QUFFVG1ELGVBRlMsZUFFTG5ELEtBRkssRUFFRTtBQUFFLHFCQUFLa0QsTUFBTCxDQUFZMUYsTUFBWixDQUFtQixzQkFBbkIsRUFBMkMsRUFBRWxFLFlBQVksS0FBSzhHLFFBQW5CLEVBQTZCTCxZQUFZLEtBQUtBLFVBQTlDLEVBQTBEL0YsV0FBVyxhQUFyRSxFQUFvRmdHLFlBQXBGLEVBQTNDO0FBQXlJO0FBRjdJO0FBckJQLEtBUEs7O0FBa0NmdEcsYUFBUztBQUNMMEosY0FESyxrQkFDRXBKLFNBREYsRUFDYTtBQUNkLG1CQUFPLENBQUMsS0FBS1YsVUFBTixFQUFrQixLQUFLeUcsVUFBdkIsRUFBbUMvRixTQUFuQyxFQUE4Q3FKLElBQTlDLENBQW1ELEdBQW5ELENBQVA7QUFDSDtBQUhJO0FBbENNLENBQW5COztBQTBDQSx5REFBZU4sVUFBZixFIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcblxuY2xhc3MgRG91YmxlTWluaVNjb3JlIGV4dGVuZHMgU2NvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRpc2NpcGxpbmUgPSAnZG10JztcbiAgICAgICAgdGhpcy5sYWJlbCA9ICdEb3VibGUgTWluaSc7XG4gICAgICAgIHRoaXMucm91dGluZUtleXMgPSBbJ3ByZWxpbV9wYXNzXzEnLCAncHJlbGltX3Bhc3NfMicsICdmaW5hbF9wYXNzXzMnLCAnZmluYWxfcGFzc180J107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb3VibGVNaW5pU2NvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9Eb3VibGVNaW5pU2NvcmUuanMiLCJjb25zdCBVbmlxdWVJZE1peGluID0ge1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdW5pcXVlSWQocHJlZml4LCBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArICctJyArIGlkO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5pcXVlSWRNaXhpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91bmlxdWUtaWQubWl4aW4uanMiLCIvLyB0aGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGVcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IE9iamVjdC5jcmVhdGUob3B0aW9ucy5jb21wdXRlZCB8fCBudWxsKVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgICBvcHRpb25zLmNvbXB1dGVkID0gY29tcHV0ZWRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlcyBWdWUgYW5kIG90aGVyIGxpYnJhcmllcy4gSXQgaXMgYSBncmVhdCBzdGFydGluZyBwb2ludCB3aGVuXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5pbXBvcnQgVnVlMkZpbHRlcnMgZnJvbSAndnVlMi1maWx0ZXJzJztcbmltcG9ydCBWZWVWYWxpZGF0ZSBmcm9tICd2ZWUtdmFsaWRhdGUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCd2aWRlby11cGxvYWQnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvVmlkZW9VcGxvYWQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnbXVsdGlwbGUtdmlkZW8tdXBsb2FkJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndmlkZW8tcGxheWVyJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3ZpZGVvLXZvdGluZycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd2aWRlby1jb21tZW50cycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2NvbXBldGl0aW9uLWZvcm0nLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3JvdXRpbmUtdmlkZW8nLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3RyYW1wb2xpbmUtc2NvcmUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdkbXQtc2NvcmUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd0dW1ibGluZy1zY29yZScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdzbWFsbC12aWRlbycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2F0aGxldGVzJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL2F0aGxldGVzL3NlYXJjaC9BdGhsZXRlcy52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdhdGhsZXRlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL2F0aGxldGVzL3NlYXJjaC9BdGhsZXRlLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3ZpZXctYXRobGV0ZS1saXN0JywgcmVxdWlyZSgnLi9jb21wb25lbnRzL2F0aGxldGVzL3ZpZXcvQXRobGV0ZUxpc3QudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndmlldy1hdGhsZXRlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL2F0aGxldGVzL3ZpZXcvQXRobGV0ZVZpZXcudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndmlldy1hdGhsZXRlcycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9hdGhsZXRlcy92aWV3L0F0aGxldGVzVmlldy52dWUnKSk7XG5cblZ1ZS51c2UocmVxdWlyZSgndnVlLXJlc291cmNlJykpO1xuVnVlLnVzZShWdWUyRmlsdGVycyk7XG5WdWUudXNlKHJlcXVpcmUoJ0B3ZWJzYW5vdmEvdnVlLXVwbG9hZCcpKTtcblZ1ZS51c2UoVmVlVmFsaWRhdGUpO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbndpbmRvdy5FdmVudCA9IG5ldyBWdWUoKTtcblxuVnVlLnVzZSh7XG4gICAgaW5zdGFsbDogKFZ1ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgICBWdWUuZ2V0SnNvbiA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cblZ1ZS5odHRwLmhlYWRlcnMuY29tbW9uWydYLUNTUkYtVE9LRU4nXSA9IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbjtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBkYXRhOiB3aW5kb3cuTGFyYXZlbCxcbiAgICBzdG9yZVxufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJ2YWxpZGF0ZUJlZm9yZVN1Ym1pdFwiPlxuXG4gICAgICAgIDwhLS0gQ29tcGV0aXRpb24gdGl0bGUgLS0+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwieydmb3JtLWdyb3VwJzogdHJ1ZSwgJ2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RpdGxlJyl9XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIj5Db21wZXRpdGlvbiBUaXRsZTwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxwIDpjbGFzcz1cInsnY29udHJvbCc6IHRydWV9XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHYtdmFsaWRhdGU6dGl0bGUuaW5pdGlhbD1cIidyZXF1aXJlZCdcIiBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImVycm9ycy5oYXMoJ3RpdGxlJylcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QoJ3RpdGxlJykgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBDb21wZXRpdGlvbiBMb2NhdGlvbiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2NhdGlvblwiIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPkxvY2F0aW9uPC9sYWJlbD5cblxuICAgICAgICAgICAgPGlucHV0IGlkPVwibG9jYXRpb25cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImxvY2F0aW9uXCIgbmFtZT1cImxvY2F0aW9uXCI+XG5cbiAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImZhbHNlXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5FcnJvciBtZXNzYWdlPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQ29tcGV0aXRpb24gU3RhcnQgRGF0ZSAtLT5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7J2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnc3RhcnRfZGF0ZScpfVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXJ0X2RhdGVcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIj5TdGFydCBEYXRlPC9sYWJlbD5cblxuICAgICAgICAgICAgPHAgOmNsYXNzPVwieydjb250cm9sJzogdHJ1ZX1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdi12YWxpZGF0ZTpzdGFydF9kYXRlLmluaXRpYWw9XCInZGF0ZV9mb3JtYXQ6WVlZWS1NTS1ERCdcIiBpZD1cInN0YXJ0X2RhdGVcIiB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInN0YXJ0X2RhdGVcIiBuYW1lPVwic3RhcnRfZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKVwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGVycm9ycy5maXJzdCgnc3RhcnRfZGF0ZScpIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENvbXBldGl0aW9uIEVuZCBEYXRlIC0tPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdlbmRfZGF0ZScpfVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVuZF9kYXRlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+RW5kIERhdGU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8cCA6Y2xhc3M9XCJ7J2NvbnRyb2wnOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LXZhbGlkYXRlOmVuZF9kYXRlLmluaXRpYWw9XCInZGF0ZV9mb3JtYXQ6WVlZWS1NTS1ERCdcIiBpZD1cImVuZF9kYXRlXCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJlbmRfZGF0ZVwiIG5hbWU9XCJlbmRfZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImVycm9ycy5oYXMoJ2VuZF9kYXRlJylcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QoJ2VuZF9kYXRlJykgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gRXZlbnQgc2VsZWN0aW9uIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtc2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoND5FdmVudHM8L2g0PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0cmFtcG9saW5lXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInRyYW1wb2xpbmVcIiB2LW1vZGVsPVwidHJhbXBvbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICBUcmFtcG9saW5lXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwidHJhbXBvbGluZVwiIEBjbGljaz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsID0gIXRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1zaG93PVwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tb2tcIj48L2k+IFNlbWktRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInRyYW1wb2xpbmVcIiBAY2xpY2s9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsID0gIXRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LXNob3c9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwidHJhbXBvbGluZVwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHJhbXBDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIkNvbXB1bHNvcnlcIiByb3V0aW5lLWtleT1cInByZWxpbV9jb21wdWxzb3J5XCI+PC90cmFtcG9saW5lLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0cmFtcENvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFtcG9saW5lLXNjb3JlIHRpdGxlPVwiUHJlbGltIE9wdGlvbmFsXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fb3B0aW9uYWxcIj48L3RyYW1wb2xpbmUtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHRyYW1wQ29sU2l6ZVwiIHYtc2hvdz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIlNlbWktRmluYWxcIiByb3V0aW5lLWtleT1cInNlbWlfZmluYWxfb3B0aW9uYWxcIj48L3RyYW1wb2xpbmUtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHRyYW1wQ29sU2l6ZVwiIHYtc2hvdz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFtcG9saW5lLXNjb3JlIHRpdGxlPVwiRmluYWwgT3B0aW9uYWxcIiByb3V0aW5lLWtleT1cImZpbmFsX29wdGlvbmFsXCI+PC90cmFtcG9saW5lLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZG10XCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRtdFwiIHYtbW9kZWw9XCJkbXRcIj5cbiAgICAgICAgICAgICAgICAgICAgRG91YmxlIE1pbmlcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCJkbXRcIiBAY2xpY2s9XCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCA9ICFkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwiZG10XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyBkbXRDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyAxXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fcGFzc18xXCI+PC9kbXQtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIGRtdENvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbXQtc2NvcmUgdGl0bGU9XCJQYXNzIDJcIiByb3V0aW5lLWtleT1cInByZWxpbV9wYXNzXzJcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyAzXCIgcm91dGluZS1rZXk9XCJmaW5hbF9wYXNzXzNcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyA0XCIgcm91dGluZS1rZXk9XCJmaW5hbF9wYXNzXzRcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInR1bWJsaW5nXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInR1bWJsaW5nXCIgdi1tb2RlbD1cInR1bWJsaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIFR1bWJsaW5nXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwidHVtYmxpbmdcIiBAY2xpY2s9XCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwgPSAhdHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1zaG93PVwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwidHVtYmxpbmdcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHR1bWJsaW5nQ29sU2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHR1bWJsaW5nLXNjb3JlIHRpdGxlPVwiUGFzcyAxXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fcGFzc18xXCI+PC90dW1ibGluZy1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHVtYmxpbmdDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHVtYmxpbmctc2NvcmUgdGl0bGU9XCJQYXNzIDJcIiByb3V0aW5lLWtleT1cInByZWxpbV9wYXNzXzJcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIiB2LXNob3c9XCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgM1wiIHJvdXRpbmUta2V5PVwiZmluYWxfcGFzc18zXCI+PC90dW1ibGluZy1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHVtYmxpbmdDb2xTaXplXCIgdi1zaG93PVwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHVtYmxpbmctc2NvcmUgdGl0bGU9XCJQYXNzIDRcIiByb3V0aW5lLWtleT1cImZpbmFsX3Bhc3NfNFwiPjwvdHVtYmxpbmctc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgOmRpc2FibGVkPVwiZXJyb3JzLmFueSgpIHx8ICFldmVudHNWYWxpZFwiPlN1Ym1pdCBDb21wZXRpdGlvbjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuICAgIGltcG9ydCBUcmFtcG9saW5lU2NvcmUgZnJvbSAnLi4vVHJhbXBvbGluZVNjb3JlJztcbiAgICBpbXBvcnQgRG91YmxlTWluaVNjb3JlIGZyb20gJy4uL0RvdWJsZU1pbmlTY29yZSc7XG4gICAgaW1wb3J0IFR1bWJsaW5nU2NvcmUgZnJvbSAnLi4vVHVtYmxpbmdTY29yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW1wb2xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRtdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHVtYmxpbmc6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgZXZlbnRWYWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0cmFtcG9saW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZG10OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdHVtYmxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB0cmFtcG9saW5lUm91dGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NlbWlGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNob3dGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3VibGVNaW5pUGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0dW1ibGluZ1Bhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93RmluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb21wZXRpdGlvbklkOiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBldGl0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnTE9BRF9DT01QRVRJVElPTicsIHRoaXMuY29tcGV0aXRpb25JZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFtcG9saW5lID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5ldmVudENoZWNrZWQoJ3RyYW1wb2xpbmVSb3V0aW5lcycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRtdCA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZXZlbnRDaGVja2VkKCdkb3VibGVNaW5pUGFzc2VzJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHVtYmxpbmcgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmV2ZW50Q2hlY2tlZCgndHVtYmxpbmdQYXNzZXMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdHJhbXBvbGluZVJvdXRpbmVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50cmFtcG9saW5lUm91dGluZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3VibGVNaW5pUGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5kb3VibGVNaW5pUGFzc2VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHVtYmxpbmdQYXNzZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnR1bWJsaW5nUGFzc2VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50aXRsZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfVElUTEUnLCB2YWx1ZSkgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUubG9jYXRpb247IH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0xPQ0FUSU9OJywgdmFsdWUpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydF9kYXRlOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuc3RhcnRfZGF0ZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfU1RBUlRfREFURScsIHZhbHVlKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kX2RhdGU6IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lbmRfZGF0ZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfRU5EX0RBVEUnLCB2YWx1ZSkgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZXZlbnRzVmFsaWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZ2V0dGVycy5ldmVudENoZWNrZWQoJ3RyYW1wb2xpbmVSb3V0aW5lcycpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMuZXZlbnRDaGVja2VkKCdkb3VibGVNaW5pUGFzc2VzJykgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZ2V0dGVycy5ldmVudENoZWNrZWQoJ3R1bWJsaW5nUGFzc2VzJylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdHJhbXBDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWwgJiYgdGhpcy50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzMnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsIHx8IHRoaXMudHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc0JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkbXRDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCkgPyAnMycgOiAnNic7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHVtYmxpbmdDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpID8gJzMnIDogJzYnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXRDb21wZXRpdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5hbGxEYXRhO1xuXG4gICAgICAgICAgICAgICAgbGV0IHhociA9ICh0aGlzLiRzdG9yZS5zdGF0ZS5jb21wZXRpdGlvbl9pZClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiRodHRwLnB1dCgnL2NvbXBldGl0aW9ucy8nICsgdGhpcy4kc3RvcmUuc3RhdGUuY29tcGV0aXRpb25faWQsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy4kaHR0cC5wb3N0KCcvY29tcGV0aXRpb25zJywgZGF0YSk7XG5cbiAgICAgICAgICAgICAgICB4aHIudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jb21wZXRpdGlvbnMvJyArIHJlc3BvbnNlLmNvbXBldGl0aW9uLmlkO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGhlcmUgd2FzIGFuIGVycm9yIHN1Ym1pdHRpbmcgdGhlIHNjb3Jlcy4nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbGlkYXRlQmVmb3JlU3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdENvbXBldGl0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgY29ycmVjdCB0aGUgZXJyb3JzLicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICd2ZWUtdmFsaWRhdGUnO1xuICAgIGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgICAgIGVuOiB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb21wZXRpdGlvbiBUaXRsZScsXG4gICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogJ1N0YXJ0IERhdGUnLFxuICAgICAgICAgICAgICAgIGVuZF9kYXRlOiAnRW5kIERhdGUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBWYWxpZGF0b3IudXBkYXRlRGljdGlvbmFyeShkaWN0aW9uYXJ5KTtcbiAgICBWYWxpZGF0b3IuaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyhtb21lbnQpO1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENvbXBldGl0aW9uRm9ybS52dWU/MGEyYTc2NzIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5VcGxvYWQgWW91ciBWaWRlb3M8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJldmVudFwiPkV2ZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJldmVudFwiIHYtbW9kZWw9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHJhbXBvbGluZVwiPlRyYW1wb2xpbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRvdWJsZSBtaW5pXCI+RG91YmxlLW1pbmk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInR1bWJsaW5nXCI+VHVtYmxpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ2aXNpYmlsaXR5XCI+VmlzaWJpbGl0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidmlzaWJpbGl0eVwiIHYtbW9kZWw9XCJ2aXNpYmlsaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcml2YXRlXCI+UHJpdmF0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHVibGljXCI+UHVibGljPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cInsnZ2x5cGhpY29uJzogdHJ1ZSwgJ2dseXBoaWNvbi1sb2NrJzogdmlzaWJpbGl0eSA9PSAncHJpdmF0ZScsICdnbHlwaGljb24tZXllLW9wZW4nOiB2aXNpYmlsaXR5ID09ICdwdWJsaWMnfVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmlzaWJpbGl0eURlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwiIXF1ZXVlZFwiIEBjbGljaz1cIiR1cGxvYWQuc2VsZWN0KCd2aWRlby11cGxvYWQnKVwiIDpkaXNhYmxlZD1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBWaWRlb3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInF1ZXVlZFwiIEBjbGljaz1cIiR1cGxvYWQuc3RhcnQoJ3ZpZGVvLXVwbG9hZCcpXCIgOmRpc2FibGVkPVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIigpID0+IHskdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnKTtxdWV1ZWQgPSBmYWxzZX1cIiA6ZGlzYWJsZWQ9XCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCIgdi1zaG93PVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyAkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnBlcmNlbnRDb21wbGV0ZSArICclOydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5wZXJjZW50Q29tcGxldGUgfX0lIENvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHVwbG9hZC5lcnJvcnMoJ3ZpZGVvLXVwbG9hZCcpLmxlbmd0aFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdXBsb2FkLmVycm9ycygndmlkZW8tdXBsb2FkJylbMF0ubWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtcmVzdWx0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgdi1zaG93PVwiJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsIGxhYmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggfX0ge3sgJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCB8IHBsdXJhbGl6ZSgnZmlsZScpIH19IHJlYWR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVTaG93UXVldWVkXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwic2hvd1F1ZXVlZEZpbGVzXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwiIXNob3dRdWV1ZWRGaWxlc1wiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgdi1zaG93PVwic2hvd1F1ZXVlZEZpbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImZpbGUgaW4gJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWxlLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImZpbGUgaW4gJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykuY29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmlsZS5lcnJvcnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWRhbmdlclwiPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpbGUuZXJyb3JzWzBdLm1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWZpbGUuZXJyb3JzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+e3sgZmlsZS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5uZXcoJ3ZpZGVvLXVwbG9hZCcsIHtcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXhGaWxlczogMjAsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbWF4U2l6ZVBlckZpbGU6IDIwNDgwMCwgLy8gMjAwIE1CXG4gICAgICAgICAgICAgICAgc3RhcnRPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogWydtcDQnLCAnd2VibScsICdhdmknLCAnYXNmJywgJ3dtdicsICdtcGVndHMnLCAnbW92JywgJ2ZsdicsICdta3YnLCAnM2dwJ10sXG4gICAgICAgICAgICAgICAgaHR0cDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5ib2R5LmFwcGVuZCgndmlzaWJpbGl0eScsIHRoaXMudmlzaWJpbGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYm9keS5hcHBlbmQoJ2V2ZW50JywgdGhpcy5ldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QoZGF0YS51cmwsIGRhdGEuYm9keSwge3Byb2dyZXNzOiBkYXRhLnByb2dyZXNzfSkudGhlbihkYXRhLnN1Y2Nlc3MsIGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25RdWV1ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UXVldWVkRmlsZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN0YXJ0KCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dRdWV1ZWRGaWxlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL3ZpZGVvcyc7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkVuZCgpIHtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93UXVldWVkRmlsZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdwdWJsaWMnLFxuXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICd0cmFtcG9saW5lJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0b2dnbGVTaG93UXVldWVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1F1ZXVlZEZpbGVzID0gIXRoaXMuc2hvd1F1ZXVlZEZpbGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiR1cGxvYWQucmVzZXQoJ3ZpZGVvLXVwbG9hZCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdXBsb2FkL211bHRpcGxlJyxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZXM6IDAsXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVJZDogJ3ZpZGVvLXVwbG9hZC1kcm9wem9uZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgZHJvcHpvbmVJZDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHZpc2liaWxpdHlEZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMudmlzaWJpbGl0eSA9PT0gJ3ByaXZhdGUnKVxuICAgICAgICAgICAgICAgICAgICA/ICdPbmx5IGNvYWNoZXMgd2hvIGFyZSBmb2xsb3dpbmcgeW91IGFuZCBuYXRpb25hbCBjb2FjaGVzIHdpbGwgYmUgYWJsZSB0byBzZWUgeW91ciB2aWRlby4nXG4gICAgICAgICAgICAgICAgICAgIDogJ0FueW9uZSBjYW4gc2VlIHlvdXIgdmlkZW8uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTXVsdGlwbGVWaWRlb1VwbG9hZC52dWU/N2FiZmJjMWIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwiJHVwbG9hZC5maWxlcyh1bmlxdWVJZCkuZXJyb3IubGVuZ3RoXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+e3sgJHVwbG9hZC5maWxlcyh1bmlxdWVJZCkuZXJyb3JbMF0ubmFtZSB9fTwvc3Ryb25nPlxuICAgICAgICAgICAge3sgJHVwbG9hZC5maWxlcyh1bmlxdWVJZCkuZXJyb3JbMF0uZXJyb3JzWzBdLm1lc3NhZ2UgfX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCIhdXBsb2FkZWQgJiYgIWhhc0F0dGFjaG1lbnRcIiBAY2xpY2s9XCIkdXBsb2FkLnNlbGVjdCh1bmlxdWVJZClcIiA6ZGlzYWJsZWQ9XCIkdXBsb2FkLm1ldGEodW5pcXVlSWQpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXhzXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBhcGVyY2xpcFwiPjwvaT4gQXR0YWNoIFZpZGVvXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxzcGFuIHYtc2hvdz1cInVwbG9hZGVkIHx8IGhhc0F0dGFjaG1lbnRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGVja1wiPjwvaT4ge3sgZmlsZW5hbWUgfX1cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJyZW1vdmVBdHRhY2htZW50XCIgY2xhc3M9XCJyZW1vdmUtYXR0YWNobWVudFwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUtc2lnblwiPjwvaT48L2E+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCIgdi1zaG93PVwiJHVwbG9hZC5tZXRhKHVuaXF1ZUlkKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIDpzdHlsZT1cIid3aWR0aDogJyArICR1cGxvYWQubWV0YSh1bmlxdWVJZCkucGVyY2VudENvbXBsZXRlICsgJyU7J1wiPlxuICAgICAgICAgICAgICAgIHt7ICR1cGxvYWQubWV0YSh1bmlxdWVJZCkucGVyY2VudENvbXBsZXRlIH19JSBDb21wbGV0ZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHJvdXRpbmVLZXk6IG51bGwsXG4gICAgICAgICAgICByb3V0aW5lczogbnVsbCxcbiAgICAgICAgICAgIGRpc2NpcGxpbmU6IG51bGwsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBoYXNBdHRhY2htZW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21wZXRpdGlvbl9pZCAmJiB0aGlzLiRzdG9yZS5zdGF0ZVt0aGlzLnJvdXRpbmVzXVt0aGlzLnJvdXRpbmVLZXldLmhhc1ZpZGVvKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsZW5hbWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0udmlkZW9GaWxlbmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmlxdWVJZCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3ZpZGVvLXVwbG9hZCcgKyB0aGlzLnJvdXRpbmVzICsgJy0nICsgdGhpcy5yb3V0aW5lS2V5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcmVtb3ZlQXR0YWNobWVudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1JFTU9WRV9BVFRBQ0hNRU5UJywge1xuICAgICAgICAgICAgICAgICAgICByb3V0aW5lczogdGhpcy5yb3V0aW5lcyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLm5ldyh0aGlzLnVuaXF1ZUlkLCB7XG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgbWF4RmlsZXM6IDEsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1heFNpemVQZXJGaWxlOiAyMDQ4MDAsIC8vIDIwMCBNQlxuICAgICAgICAgICAgICAgIHN0YXJ0T25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogWydtcDQnLCAnd2VibScsICdhdmknLCAnYXNmJywgJ3dtdicsICdtcGVndHMnLCAnbW92JywgJ2ZsdicsICdta3YnLCAnM2dwJ10sXG4gICAgICAgICAgICAgICAgaHR0cDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5ib2R5LmFwcGVuZCgnZXZlbnQnLCBfc2VsZi5kaXNjaXBsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdChkYXRhLnVybCwgZGF0YS5ib2R5LCB7cHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3N9KS50aGVuKGRhdGEuc3VjY2VzcywgZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdBVFRBQ0hfVklERU8nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogcmVzcG9uc2UuZGF0YS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZXM6IHRoaXMucm91dGluZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KHRoaXMudW5pcXVlSWQsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdXBsb2FkL211bHRpcGxlJyxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZXM6IDAsXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVJZDogJ3ZpZGVvLXVwbG9hZC1kcm9wem9uZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KHRoaXMudW5pcXVlSWQsIHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUlkOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJvdXRpbmVWaWRlby52dWU/MTRlNzEzODgiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6YmxvY2sgIWltcG9ydGFudFwiPlxuICAgICAgICA8YSB2LXNob3c9XCIhc2hvd1ZpZGVvXCIgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInBsYXlWaWRlb1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvXCI+PC9pPlxuICAgICAgICAgICAgUGxheSBWaWRlb1xuICAgICAgICA8L2E+XG4gICAgICAgIDxhIHYtc2hvdz1cInNob3dWaWRlb1wiIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJoaWRlVmlkZW9cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LXVwXCI+PC9pPlxuICAgICAgICAgICAgSGlkZSBWaWRlb1xuICAgICAgICA8L2E+XG4gICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgOmlkPVwiJ3ZpZGVvLScgKyB2aWRlb0lkXCJcbiAgICAgICAgICAgIGNsYXNzPVwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpbiB2anMtYmlnLXBsYXktY2VudGVyZWQgdmpzLTE2LTkgdmpzLWhpZGRlblwiXG4gICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgZGF0YS1zZXR1cD0ne1wiZmx1aWRcIjogdHJ1ZSwgXCJwbGF5YmFja1JhdGVzXCI6IFswLjI1LCAwLjMzLCAxLCAyXSB9J1xuICAgICAgICAgICAgOnBvc3Rlcj1cImltZ1wiXG4gICAgICAgICAgICA6d2lkdGg9XCJ3aWR0aFwiXG4gICAgICAgICAgICA6aGVpZ2h0PVwiaGVpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHNvdXJjZSB0eXBlPVwidmlkZW8vbXA0XCIgOnNyYz1cInNyY1wiIC8+XG4gICAgICAgIDwvdmlkZW8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB2aWRlb2pzIGZyb20gXCJ2aWRlby5qc1wiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgc2hvd1ZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvSWQ6IG51bGwsXG4gICAgICAgICAgICBzcmM6IG51bGwsXG4gICAgICAgICAgICBpbWc6IG51bGwsXG4gICAgICAgICAgICB3aWR0aDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDQ4MCxcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAyNzAsXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKCd2aWRlby0nICsgdGhpcy52aWRlb0lkKTtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLnJvdW5kKHRoaXMucGxheWVyLmR1cmF0aW9uKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNIaXRRdW90YVZpZXcoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcGxheVZpZGVvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZGVvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZGVWaWRlbygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWRlbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc0hpdFF1b3RhVmlldygpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMucGxheWVyLmN1cnJlbnRUaW1lKCkpID09PSBNYXRoLnJvdW5kKCgxMCAqIHRoaXMuZHVyYXRpb24pIC8gMTAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVWaWV3KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb0lkICsgJy92aWV3cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNtYWxsVmlkZW8udnVlPzUxODVhNzk4IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwPnt7IGNvbW1lbnRzLmxlbmd0aCB9fSB7eyBjb21tZW50cy5sZW5ndGggfCBwbHVyYWxpemUoJ2NvbW1lbnQnKSB9fTwvcD5cblxuICAgICAgICA8IS0tIFZpZGVvIGNvbW1lbnQgYm94IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tY29tbWVudCBjbGVhcmZpeFwiIGlmPVwiJHJvb3QudXNlci5hdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJTYXkgc29tZXRoaW5nLi4uXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdmlkZW8tY29tbWVudF9faW5wdXRcIiB2LW1vZGVsPVwiYm9keVwiPjwvdGV4dGFyZWE+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwiY3JlYXRlQ29tbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiIHYtaWY9XCJwb3N0aW5nXCI+PC9pPiBQb3N0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBMaXN0IG9mIGNvbW1lbnRzIC0tPlxuICAgICAgICA8dWwgY2xhc3M9XCJtZWRpYS1saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZWRpYVwiIHYtZm9yPVwiY29tbWVudCBpbiBjb21tZW50c1wiPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBVc2VyIGltYWdlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXNlclVybChjb21tZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWJpbmQ6c3JjPVwiY29tbWVudC51c2VyLmRhdGEuaW1hZ2VcIiA6YWx0PVwiY29tbWVudC51c2VyLmRhdGEubmFtZVwiIGNsYXNzPVwibWVkaWEtb2JqZWN0IGltZy1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBDb21tZW50IC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXNlclVybChjb21tZW50KVwiPnt7IGNvbW1lbnQudXNlci5kYXRhLm5hbWUgfX08L2E+IHt7IGNvbW1lbnQuY3JlYXRlZF9hdF9odW1hbiB9fVxuXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGhcIj4oe3sgY29tbWVudC5yZXBsaWVzLmRhdGEubGVuZ3RoIH19ICB7eyBjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGggfCBwbHVyYWxpemUoJ3JlcGx5JywgJ3JlcGxpZXMnKSB9fSk8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgY29tbWVudC5ib2R5IH19PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQ29tbWVudCByZXBseS9kZWxldGUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lXCIgdi1pZj1cIiRyb290LnVzZXIuYXV0aGVudGljYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVSZXBseUZvcm0oY29tbWVudC5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcmVwbHlGb3JtVmlzaWJsZSA9PT0gY29tbWVudC5pZCA/ICdDYW5jZWwgcmVwbHknIDogJ1JlcGx5JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cImNvbW1lbnQudXNlcl9pZCA9PT0gJHJvb3QudXNlci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJkZWxldGVDb21tZW50KGNvbW1lbnQuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCIgdi1pZj1cImRlbGV0aW5nID09PSBjb21tZW50LmlkXCI+PC9pPiBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUmVwbHkgYm94IC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tY29tbWVudCBjbGVhclwiIHYtaWY9XCJyZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50LmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdmlkZW8tY29tbWVudF9faW5wdXRcIiB2LW1vZGVsPVwicmVwbHlCb2R5XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwiY3JlYXRlUmVwbHkoY29tbWVudC5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIiB2LWlmPVwicmVwbHlpbmdcIj48L2k+IFJlcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXBsaWVzIHRvIGNvbW1lbnQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYVwiIHYtZm9yPVwicmVwbHkgaW4gY29tbWVudC5yZXBsaWVzLmRhdGFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBVc2VyIGltYWdlIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInVzZXJVcmwocmVwbHkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1iaW5kOnNyYz1cInJlcGx5LnVzZXIuZGF0YS5pbWFnZVwiIDphbHQ9XCJyZXBseS51c2VyLmRhdGEubmFtZVwiIGNsYXNzPVwibWVkaWEtb2JqZWN0IGltZy1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXBseSBib2R5IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInVzZXJVcmwocmVwbHkpXCI+e3sgcmVwbHkudXNlci5kYXRhLm5hbWUgfX08L2E+IHt7IHJlcGx5LmNyZWF0ZWRfYXRfaHVtYW4gfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IHJlcGx5LmJvZHkgfX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZVwiIHYtaWY9XCIkcm9vdC51c2VyLmF1dGhlbnRpY2F0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cImRlbGV0ZUNvbW1lbnQocmVwbHkuaWQpXCIgdi1pZj1cInJlcGx5LnVzZXJfaWQgPT09ICRyb290LnVzZXIuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiIHYtaWY9XCJkZWxldGluZyA9PT0gcmVwbHkuaWRcIj48L2k+IERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICBwb3N0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAgICAgICAgIHJlcGx5Qm9keTogbnVsbCxcbiAgICAgICAgICAgICAgICByZXBseUZvcm1WaXNpYmxlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlcGx5aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWxldGluZzogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmlkZW9VbmlxdWVJZDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBkZWxldGVDb21tZW50KGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbW1lbnQ/JykpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRpbmcgPSBjb21tZW50SWQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmRlbGV0ZSgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy9jb21tZW50cy8nICsgY29tbWVudElkKS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJ5SWQoY29tbWVudElkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGluZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlQnlJZChjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnQuaWQgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC5yZXBsaWVzLmRhdGEubWFwKChyZXBseSwgcmVwbHlJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGx5LmlkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzW2luZGV4XS5yZXBsaWVzLmRhdGEuc3BsaWNlKHJlcGx5SW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlUmVwbHlGb3JtKGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwbHlCb2R5ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcGx5Rm9ybVZpc2libGUgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGx5Rm9ybVZpc2libGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBseUZvcm1WaXNpYmxlID0gY29tbWVudElkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZVJlcGx5KGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwbHlpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL2NvbW1lbnRzJywge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiB0aGlzLnJlcGx5Qm9keSxcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlfaWQ6IGNvbW1lbnRJZFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnQuaWQgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNbaW5kZXhdLnJlcGxpZXMuZGF0YS5wdXNoKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBseUJvZHkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGx5Rm9ybVZpc2libGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGx5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgKGVyclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gcG9zdGluZyB0aGUgcmVwbHkuJywgZXJyUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGx5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVDb21tZW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvY29tbWVudHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuYm9keVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMudW5zaGlmdChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgKGVyclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gcG9zdGluZyB0aGUgY29tbWVudC4nLCBlcnJSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldENvbW1lbnRzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL2NvbW1lbnRzJykudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VyVXJsKGNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy91c2VyLycgKyBjb21tZW50LnVzZXIuZGF0YS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWaWRlb0NvbW1lbnRzLnZ1ZT8yYWY2Nzg4NSIsIjx0ZW1wbGF0ZT5cbiAgICA8dmlkZW9cbiAgICAgICAgICAgIGlkPVwidmlkZW9cIlxuICAgICAgICAgICAgY2xhc3M9XCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luIHZqcy1iaWctcGxheS1jZW50ZXJlZCB2anMtMTYtOVwiXG4gICAgICAgICAgICBjb250cm9scyBwcmVsb2FkPVwiYXV0b1wiXG4gICAgICAgICAgICBkYXRhLXNldHVwPSd7XCJmbHVpZFwiOiB0cnVlLCBcInByZWxvYWRcIjogXCJhdXRvXCIsIFwicGxheWJhY2tSYXRlc1wiOiBbMC4yNSwgMC4zMywgMSwgMl19J1xuICAgICAgICAgICAgdi1iaW5kOnBvc3Rlcj1cInRodW1ibmFpbFVybFwiXG4gICAgPlxuICAgICAgICA8c291cmNlIHR5cGU9XCJ2aWRlby9tcDRcIiB2LWJpbmQ6c3JjPVwidmlkZW9VcmxcIiAvPlxuICAgIDwvdmlkZW8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB2aWRlb2pzIGZyb20gXCJ2aWRlby5qc1wiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvVW5pcXVlSWQ6IG51bGwsXG4gICAgICAgICAgICB2aWRlb1VybDogbnVsbCxcbiAgICAgICAgICAgIHRodW1ibmFpbFVybDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKCd2aWRlbycpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGgucm91bmQodGhpcy5wbGF5ZXIuZHVyYXRpb24oKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0hpdFF1b3RhVmlldygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBoYXNIaXRRdW90YVZpZXcoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnBsYXllci5jdXJyZW50VGltZSgpKSA9PT0gTWF0aC5yb3VuZCgoMTAgKiB0aGlzLmR1cmF0aW9uKSAvIDEwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlVmlldygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvdmlld3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWaWRlb1BsYXllci52dWU/MzhjOWI0MDIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5VcGxvYWQgWW91ciBWaWRlbzwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJuYW1lXCIgOmRpc2FibGVkPVwiYXV0aGVudGljYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV2ZW50XCI+RXZlbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRyYW1wb2xpbmVcIj5UcmFtcG9saW5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkb3VibGUgbWluaVwiPkRvdWJsZS1taW5pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0dW1ibGluZ1wiPlR1bWJsaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInZpZGVvXCIgaWQ9XCJ2aWRlb1wiIEBjaGFuZ2U9XCJmaWxlSW5wdXRDaGFuZ2VcIiB2LWlmPVwiIXVwbG9hZGluZ1wiIDpkaXNhYmxlZD1cIiFuYW1lIHx8ICFldmVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgdi1pZj1cImZhaWxlZFwiPlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidmlkZW8tZm9ybVwiIHYtaWY9XCJ1cGxvYWRpbmcgJiYgIWZhaWxlZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiB2LWlmPVwiIXVwbG9hZGluZ0NvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaCBmYS1zcGluXCI+PC9pPiBZb3VyIHZpZGVvIGlzIHVwbG9hZGluZy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgdi1pZj1cInVwbG9hZGluZ0NvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBjb21wbGV0ZS4gVmlkZW8gaXMgbm93IHByb2Nlc3NpbmcuIDxhIGhyZWY9XCIvdmlkZW9zXCI+R28gdG8geW91ciB2aWRlb3MuPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgdi1pZj1cIiF1cGxvYWRpbmdDb21wbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgdi1iaW5kOnN0eWxlPVwieyB3aWR0aDogZmlsZVByb2dyZXNzICsgJyUnIH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ2aXNpYmlsaXR5XCI+VmlzaWJpbGl0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidmlzaWJpbGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaXZhdGVcIj5Qcml2YXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHVibGljXCI+UHVibGljPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAtYmxvY2tcIj57eyB2aXNpYmlsaXR5RGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2sgcHVsbC1yaWdodFwiPnt7IHNhdmVTdGF0dXMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2sucHJldmVudD1cInVwZGF0ZVwiPlNhdmUgQ2hhbmdlczwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cGxvYWRpbmdDb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmFpbGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzYXZlU3RhdHVzOiBudWxsLFxuICAgICAgICAgICAgICAgIGZpbGVQcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiB3aW5kb3cuTGFyYXZlbC51c2VyLmF1dGhlbnRpY2F0ZWQsXG5cbiAgICAgICAgICAgICAgICAvLyBWaWRlbyBtb2RlbFxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB3aW5kb3cuTGFyYXZlbC51c2VyLmlkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVW50aXRsZWQnLFxuICAgICAgICAgICAgICAgIG5hbWU6IHdpbmRvdy5MYXJhdmVsLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICBldmVudDogJ3RyYW1wb2xpbmUnLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBleHRlbnNpb246IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZpbGVJbnB1dENoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWlsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpLmZpbGVzWzBdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd2aWRlbycsIHRoaXMuZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd1bmlxdWVfaWQnLCB0aGlzLnVuaXF1ZV9pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdXBsb2FkJywgZm9ybSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGluZ0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGZhaWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgKGZhaWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3RvcmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRlbnNpb24gPSB0aGlzLmZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcycsIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogdGhpcy5leHRlbnNpb24sXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHRoaXMudmlzaWJpbGl0eSxcbiAgICAgICAgICAgICAgICB9KS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXF1ZV9pZCA9IHJlc3BvbnNlLmRhdGEudW5pcXVlX2lkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0dXMgPSAnU2F2aW5nIGNoYW5nZXMuJztcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLnB1dCgnL3ZpZGVvcy8nICsgdGhpcy51bmlxdWVfaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb246IHRoaXMuZXh0ZW5zaW9uLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB0aGlzLnZpc2liaWxpdHksXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdHVzID0gJ0NoYW5nZXMgc2F2ZWQuJztcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXR1cyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0dXMgPSAnRmFpbGVkIHRvIHNhdmUgY2hhbmdlcy4nO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKGUpIHtcbiAgICAgICAgICAgICAgICBlLnBlcmNlbnQgPSAoZS5sb2FkZWQgLyBlLnRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVQcm9ncmVzcyA9IGUucGVyY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHZpZGVvVXJsKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyb290LnVybCArICcvdmlkZW9zLycgKyB0aGlzLnVuaXF1ZV9pZDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZpc2liaWxpdHlEZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMudmlzaWJpbGl0eSA9PT0gJ3ByaXZhdGUnKVxuICAgICAgICAgICAgICAgICAgICA/ICdPbmx5IGNvYWNoZXMgd2hvIGFyZSBmb2xsb3dpbmcgeW91IGFuZCBOYXRpb25hbCBDb2FjaGVzIHdpbGwgYmUgYWJsZSB0byBzZWUgeW91ciB2aWRlby4nXG4gICAgICAgICAgICAgICAgICAgIDogJ0FueW9uZSBjYW4gc2VlIHlvdXIgdmlkZW8uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGxvYWRpbmcgJiYgIXRoaXMudXBsb2FkaW5nQ29tcGxldGUgJiYgIXRoaXMuZmFpbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG5hdmlnYXRlIGF3YXk/JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWaWRlb1VwbG9hZC52dWU/MDg0M2UyYWMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInZpZGVvX192b3RpbmdcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInZpZGVvX192b3RpbmctYnV0dG9uXCIgdi1iaW5kOmNsYXNzPVwieyd2aWRlb19fdm90aW5nLWJ1dHRvbi0tdm90ZWQnOiB1c2VyVm90ZSA9PSAndXAnfVwiIEBjbGljay5wcmV2ZW50PVwidm90ZSgndXAnKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cFwiPjwvaT5cbiAgICAgICAgPC9hPiB7eyB1cCB9fSAmbmJzcDtcblxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidmlkZW9fX3ZvdGluZy1idXR0b25cIiB2LWJpbmQ6Y2xhc3M9XCJ7J3ZpZGVvX192b3RpbmctYnV0dG9uLS12b3RlZCc6IHVzZXJWb3RlID09ICdkb3duJ31cIiBAY2xpY2sucHJldmVudD1cInZvdGUoJ2Rvd24nKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duXCI+PC9pPlxuICAgICAgICA8L2E+IHt7IGRvd24gfX1cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cDogbnVsbCxcbiAgICAgICAgICAgICAgICBkb3duOiBudWxsLFxuICAgICAgICAgICAgICAgIHVzZXJWb3RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGNhblZvdGU6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmlkZW9VbmlxdWVJZDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRWb3RlcygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRWb3RlcygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy92b3RlcycpLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXAgPSByZXNwb25zZS5kYXRhLnVwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd24gPSByZXNwb25zZS5kYXRhLmRvd247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclZvdGUgPSByZXNwb25zZS5kYXRhLnVzZXJfdm90ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Wb3RlID0gcmVzcG9uc2UuZGF0YS5jYW5fdm90ZTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm90ZSh0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlclZvdGUgPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3R5cGVdLS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclZvdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVZvdGUodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyVm90ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3R5cGUgPT0gJ3VwJyA/ICdkb3duJyA6ICd1cCddLS07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpc1t0eXBlXSsrO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclZvdGUgPSB0eXBlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVWb3RlKHR5cGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVZvdGUodHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZGVsZXRlKCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL3ZvdGVzJywge3R5cGV9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVWb3RlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvdm90ZXMnLCB7dHlwZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZpZGVvVm90aW5nLnZ1ZT8yYWQ1Y2RmMiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8IS0tTm90IGZvbGxvd2VkLS0+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiB2LWlmPVwiZm9sbG93ZWQgPT09IDBcIiBAY2xpY2s9XCJmb2xsb3dcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1leWUtb3BlblwiPjwvaT4gRm9sbG93XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDwhLS1OZWVkcyB2ZXJpZmljYXRpb24tLT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHYtaWY9XCJmb2xsb3dlZCA9PT0gMVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWhvdXJnbGFzc1wiPjwvaT4gV2FpdGluZyBmb3IgdmVyaWZpY2F0aW9uXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDwhLS1WZXJpZmllZC0tPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdi1pZj1cImZvbGxvd2VkID09PSAyXCIgQGNsaWNrPVwidW5mb2xsb3dcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1leWUtY2xvc2VcIj48L2k+IFVuZm9sbG93XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZvbGxvd2VkOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhdGhsZXRlSWQ6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXJJZDoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNGb2xsb3dlZDoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZm9sbG93KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL2F0aGxldGVzL2ZvbGxvdycsIHtcbiAgICAgICAgICAgICAgICAgICAgYXRobGV0ZUlkOiB0aGlzLmF0aGxldGVJZFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd2VkID0gKHJlc3BvbnNlLnZlcmlmaWVkID09IHRydWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdW5mb2xsb3coKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvYXRobGV0ZXMvdW5mb2xsb3cnLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0aGxldGVJZDogdGhpcy5hdGhsZXRlSWRcbiAgICAgICAgICAgICAgICB9KS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwib2tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmZvbGxvd2VkID0gdGhpcy5pc0ZvbGxvd2VkO1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBBdGhsZXRlLnZ1ZT82ZDY4NWQxOCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtdGl0bGUgcHVsbC1sZWZ0XCI+QWxsIEF0aGxldGVzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLXRpdGxlIHB1bGwtcmlnaHQgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGFkZC1vblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGNvbC1tZC00XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiB2LW1vZGVsPVwic2VhcmNoUXVlcnlcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiB0eXBlPVwic3VibWl0XCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInNlYXJjaGVkLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwicm9sZSA9PT0gJ293bmVyJyB8fCByb2xlID09PSAnYWRtaW4nIHx8IHJvbGUgPT09ICduYXRpb25hbC1jb2FjaCdcIiBzdHlsZT1cImZvbnQtc3R5bGU6aXRhbGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBdGhsZXRlcyB0aGF0IHlvdSBmb2xsb3cgd2lsbCBiZSBub3RpZmllZC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwicm9sZSA9PT0gJ2NvYWNoJ1wiIHN0eWxlPVwiZm9udC1zdHlsZTppdGFsaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEF0aGxldGVzIHRoYXQgeW91IHJlcXVlc3QgdG8gZm9sbG93IHdpbGwgYmUgbm90aWZpZWQgYW5kIGFza2VkIHRvIHZlcmlmeSBiZWZvcmUgeW91IGNhbiB2aWV3IHRoZWlyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3MgYW5kIGNvbXBldGl0aW9uIHJlc3VsdHMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cImF0aGxldGUgaW4gc2VhcmNoZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGF0aGxldGUubmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSA6aHJlZj1cIidtYWlsdG86JyArIGF0aGxldGUuZW1haWxcIj57eyBhdGhsZXRlLmVtYWlsIH19PC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhdGhsZXRlIDphdGhsZXRlLWlkPVwiYXRobGV0ZS5pZFwiIDp1c2VyLWlkPVwidXNlcklkXCIgOmlzLWZvbGxvd2VkPVwiZm9sbG93ZWQoYXRobGV0ZSlcIj48L2F0aGxldGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zdHlsZTppdGFsaWNcIj5ObyBhdGhsZXRlcyB0byBkaXNwbGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFsbF9hdGhsZXRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBteV9hdGhsZXRlczogW10sXG4gICAgICAgICAgICAgICAgc2VhcmNoUXVlcnk6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB1c2VySWQ6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb2xlOiBudWxsLFxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnL2F0aGxldGVzL3NlYXJjaCcpLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxfYXRobGV0ZXMgPSByZXNwb25zZS5hbGxfYXRobGV0ZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5teV9hdGhsZXRlcyA9IHJlc3BvbnNlLm15X2F0aGxldGVzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHNlYXJjaGVkKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hRdWVyeSB8fCAhdGhpcy5hbGxfYXRobGV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsX2F0aGxldGVzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbF9hdGhsZXRlcy5maWx0ZXIoKGF0aGxldGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0aGxldGUubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZm9sbG93ZWQoYXRobGV0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBmb2xsb3dlZCA9IDBcblxuICAgICAgICAgICAgICAgIHRoaXMubXlfYXRobGV0ZXMuZm9yRWFjaCgoZm9sbG93ZWRBdGhsZXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb2xsb3dlZEF0aGxldGUuaWQgPT0gYXRobGV0ZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZWQgPSAoZm9sbG93ZWRBdGhsZXRlLnBpdm90LnZlcmlmaWVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQXRobGV0ZXMudnVlPzI4ZTU4ZmQ3IiwiPHRlbXBsYXRlPlxuICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgPGxpIHYtZm9yPVwiYXRobGV0ZSBpbiBhdGhsZXRlc1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJzaG93blthdGhsZXRlLmlkXVwiIEBjaGFuZ2U9XCJzaG93bkF0aGxldGVzXCIgLz4ge3sgYXRobGV0ZS5uYW1lIH19PC9sYWJlbD5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBhdGhsZXRlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuYXRobGV0ZVZpZXcuYWxsQXRobGV0ZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNob3duOiB7fSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzaG93bkF0aGxldGVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnQVRITEVURV9WSUVXX0NIQU5HRV9BVEhMRVRFJywgdGhpcy5zaG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBVEhMRVRFX1ZJRVdfTE9BRF9BVEhMRVRFUycpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLnN0YXRlLmF0aGxldGVWaWV3LmFsbEF0aGxldGVzLmZvckVhY2goKGF0aGxldGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuc2hvd24sIGF0aGxldGUuaWQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93bkF0aGxldGVzKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBBdGhsZXRlTGlzdC52dWU/NjU1MTJiMjIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC10aXRsZVwiPnt7IGF0aGxldGUubmFtZSB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwic2hvd1ZpZGVvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVmlkZW9zICh7eyBhdGhsZXRlLnZpZGVvcy5sZW5ndGggfX0pXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cInNob3dDb21wZXRpdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBldGl0aW9ucyAoe3sgYXRobGV0ZS5jb21wZXRpdGlvbnMubGVuZ3RoIH19KVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJzaG93VmlkZW9zICYmIGF0aGxldGUudmlkZW9zLmxlbmd0aFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPjxoND5WaWRlb3M6PC9oND48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwidmlkZW8gaW4gYXRobGV0ZS52aWRlb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJ2aWRlb1VybCh2aWRlbylcIj48aW1nIDpzcmM9XCJ2aWRlb1RodW1ibmFpbCh2aWRlbylcIiA6YWx0PVwidmlkZW8udGl0bGVcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJ2aWRlb1VybCh2aWRlbylcIj57eyB2aWRlby50aXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJzaG93Q29tcGV0aXRpb25zICYmIGF0aGxldGUuY29tcGV0aXRpb25zLmxlbmd0aFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+Q29tcGV0aXRpb25zOjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FdmVudHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cImNvbXBldGl0aW9uIGluIGF0aGxldGUuY29tcGV0aXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cIndpZHRoOjU1JVwiPjxhIDpocmVmPVwiY29tcGV0aXRpb25VcmwoY29tcGV0aXRpb24pXCI+e3sgY29tcGV0aXRpb24udGl0bGUgfX08L2E+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNvbXBldGl0aW9uLnZpZGVvQ291bnQgPiAwXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS1kZWZhdWx0XCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvXCI+PC9pPiB7eyBjb21wZXRpdGlvbi52aWRlb0NvdW50IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBkaXNjaXBsaW5lLXRyYVwiIHYtaWY9XCJjb21wZXRpdGlvbi50cmFtcG9saW5lX3Njb3Jlcy5sZW5ndGhcIj5UcmFtcG9saW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBkaXNjaXBsaW5lLWRtdFwiIHYtaWY9XCJjb21wZXRpdGlvbi5kb3VibGVfbWluaV9zY29yZXMubGVuZ3RoXCI+RG91YmxlIE1pbmk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGRpc2NpcGxpbmUtdHVtXCIgdi1pZj1cImNvbXBldGl0aW9uLnR1bWJsaW5nX3Njb3Jlcy5sZW5ndGhcIj5UdW1ibGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFVuaXF1ZUlkTWl4aW4gZnJvbSAnLi4vLi4vLi4vbWl4aW5zL3VuaXF1ZS1pZC5taXhpbidcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2hvd1ZpZGVvczogbnVsbCxcbiAgICAgICAgICAgICAgICBzaG93Q29tcGV0aXRpb25zOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhdGhsZXRlOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VmlkZW9zID0gdGhpcy5hdGhsZXRlLnZpZGVvcy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgdGhpcy5zaG93Q29tcGV0aXRpb25zID0gdGhpcy5hdGhsZXRlLmNvbXBldGl0aW9ucy5sZW5ndGggPiAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHZpZGVvVGh1bWJuYWlsKHZpZGVvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvc3RvcmFnZS92aWRlb3MvJyArIHZpZGVvLnVuaXF1ZV9pZCArICdfdC5qcGcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZGVvVXJsKHZpZGVvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvdmlkZW9zLycgKyB2aWRlby51bmlxdWVfaWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGV0aXRpb25VcmwoY29tcGV0aXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy9jb21wZXRpdGlvbnMvJyArIGNvbXBldGl0aW9uLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1peGluczogW1VuaXF1ZUlkTWl4aW5dXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEF0aGxldGVWaWV3LnZ1ZT9iYWM1MjdlMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHYtZm9yPVwiYXRobGV0ZSBpbiBhdGhsZXRlc1wiPlxuICAgICAgICAgICAgPHZpZXctYXRobGV0ZSA6YXRobGV0ZT1cImF0aGxldGVcIj48L3ZpZXctYXRobGV0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBVbmlxdWVJZE1peGluIGZyb20gJy4uLy4uLy4uL21peGlucy91bmlxdWUtaWQubWl4aW4nXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGF0aGxldGVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5hdGhsZXRlVmlldy5zaG93bkF0aGxldGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWl4aW5zOiBbVW5pcXVlSWRNaXhpbl1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQXRobGV0ZXNWaWV3LnZ1ZT83OTk5ZTI4NCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY29yZS10aWxlXCI+XG4gICAgICAgIDxoNT57eyB0aXRsZSB9fTwvaDU+XG5cbiAgICAgICAgPHJvdXRpbmUtdmlkZW8gOnJvdXRpbmVzPVwicm91dGluZXNcIiA6ZGlzY2lwbGluZT1cImRpc2NpcGxpbmVcIiA6cm91dGluZS1rZXk9XCJyb3V0aW5lS2V5XCI+PC9yb3V0aW5lLXZpZGVvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnZXhlY3V0aW9uJylcIiB0aXRsZT1cIkV4ZWN1dGlvblwiPkV4ZWN1dGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJleGVjdXRpb25cIiA6bmFtZT1cImZvcm1JZCgnZXhlY3V0aW9uJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnZGlmZmljdWx0eScpXCIgdGl0bGU9XCJEaWZmaWN1bHR5XCI+RGlmZmljdWx0eTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJkaWZmaWN1bHR5XCIgOm5hbWU9XCJmb3JtSWQoJ2RpZmZpY3VsdHknKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpXCIgdGl0bGU9XCJOZXV0cmFsIERlZHVjdGlvblwiPk5EPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cIm5ldXRyYWxfZGVkdWN0aW9uXCIgOm5hbWU9XCJmb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIHRpdGxlPVwiVG90YWwgU2NvcmVcIj5Ub3RhbCBTY29yZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJ0b3RhbF9zY29yZVwiIDpuYW1lPVwiZm9ybUlkKCd0b3RhbF9zY29yZScpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFNjb3JlTWl4aW4gZnJvbSAnLi4vLi4vbWl4aW5zL3Njb3JlLm1peGluJztcbiAgICBpbXBvcnQgVHVtYmxpbmdTY29yZSBmcm9tICcuLi8uLi9UdW1ibGluZ1Njb3JlJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkaXNjaXBsaW5lOiAnZG91YmxlIG1pbmknLFxuICAgICAgICAgICAgICAgIHJvdXRpbmVzOiAnZG91YmxlTWluaVBhc3NlcycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWl4aW5zOiBbU2NvcmVNaXhpbl1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gRG91YmxlTWluaVNjb3JlLnZ1ZT83YmY3Y2RlYyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY29yZS10aWxlXCI+XG4gICAgICAgIDxoNT57eyB0aXRsZSB9fTwvaDU+XG5cbiAgICAgICAgPHJvdXRpbmUtdmlkZW8gOnJvdXRpbmVzPVwicm91dGluZXNcIiA6ZGlzY2lwbGluZT1cImRpc2NpcGxpbmVcIiA6cm91dGluZS1rZXk9XCJyb3V0aW5lS2V5XCI+PC9yb3V0aW5lLXZpZGVvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnZXhlY3V0aW9uJylcIiB0aXRsZT1cIkV4ZWN1dGlvblwiPkV4ZWN1dGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJleGVjdXRpb25cIiA6bmFtZT1cImZvcm1JZCgnZXhlY3V0aW9uJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnZGlmZmljdWx0eScpXCIgdGl0bGU9XCJEaWZmaWN1bHR5XCI+RGlmZmljdWx0eTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJkaWZmaWN1bHR5XCIgOm5hbWU9XCJmb3JtSWQoJ2RpZmZpY3VsdHknKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCd0aW1lX29mX2ZsaWdodCcpXCIgdGl0bGU9XCJUaW1lIG9mIEZsaWdodFwiPlRPRjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJ0aW1lX29mX2ZsaWdodFwiIDpuYW1lPVwiZm9ybUlkKCd0aW1lX29mX2ZsaWdodCcpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2hvcml6b250YWxfZGlzcGxhY2VtZW50JylcIiB0aXRsZT1cIkhvcml6b250YWwgRGlzcGxhY2VtZW50XCI+SEQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnRcIiA6bmFtZT1cImZvcm1JZCgnaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQnKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpXCIgdGl0bGU9XCJOZXV0cmFsIERlZHVjdGlvblwiPk5EPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cIm5ldXRyYWxfZGVkdWN0aW9uXCIgOm5hbWU9XCJmb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIHRpdGxlPVwiVG90YWwgU2NvcmVcIj5Ub3RhbCBTY29yZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJ0b3RhbF9zY29yZVwiIDpuYW1lPVwiZm9ybUlkKCd0b3RhbF9zY29yZScpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFNjb3JlTWl4aW4gZnJvbSAnLi4vLi4vbWl4aW5zL3Njb3JlLm1peGluJztcbiAgICBpbXBvcnQgVHJhbXBvbGluZVNjb3JlIGZyb20gJy4uLy4uL1RyYW1wb2xpbmVTY29yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpc2NpcGxpbmU6ICd0cmFtcG9saW5lJyxcbiAgICAgICAgICAgICAgICByb3V0aW5lczogJ3RyYW1wb2xpbmVSb3V0aW5lcycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblxuXG4gICAgICAgIG1peGluczogW1Njb3JlTWl4aW5dXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFRyYW1wb2xpbmVTY29yZS52dWU/NzUzNWFiMjUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiPlxuICAgICAgICA8aDU+e3sgdGl0bGUgfX08L2g1PlxuXG4gICAgICAgIDxyb3V0aW5lLXZpZGVvIDpyb3V0aW5lcz1cInJvdXRpbmVzXCIgOmRpc2NpcGxpbmU9XCJkaXNjaXBsaW5lXCIgOnJvdXRpbmUta2V5PVwicm91dGluZUtleVwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdGl0bGU9XCJFeGVjdXRpb25cIj5FeGVjdXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZXhlY3V0aW9uXCIgOm5hbWU9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2RpZmZpY3VsdHknKVwiIHRpdGxlPVwiRGlmZmljdWx0eVwiPkRpZmZpY3VsdHk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZGlmZmljdWx0eVwiIDpuYW1lPVwiZm9ybUlkKCdkaWZmaWN1bHR5JylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKVwiIHRpdGxlPVwiTmV1dHJhbCBEZWR1Y3Rpb25cIj5ORDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJuZXV0cmFsX2RlZHVjdGlvblwiIDpuYW1lPVwiZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0aXRsZT1cIlRvdGFsIFNjb3JlXCI+VG90YWwgU2NvcmU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwidG90YWxfc2NvcmVcIiA6bmFtZT1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IFR1bWJsaW5nU2NvcmUgZnJvbSAnLi4vLi4vVHVtYmxpbmdTY29yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzY2lwbGluZTogJ3R1bWJsaW5nJyxcbiAgICAgICAgICAgICAgICByb3V0aW5lczogJ3R1bWJsaW5nUGFzc2VzJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtaXhpbnM6IFtTY29yZU1peGluXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUdW1ibGluZ1Njb3JlLnZ1ZT84ZWIyYTIzOCIsIlxud2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbndpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5yZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xuXG4vKipcbiAqIFZ1ZSBpcyBhIG1vZGVybiBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIGludGVyYWN0aXZlIHdlYiBpbnRlcmZhY2VzXG4gKiB1c2luZyByZWFjdGl2ZSBkYXRhIGJpbmRpbmcgYW5kIHJldXNhYmxlIGNvbXBvbmVudHMuIFZ1ZSdzIEFQSSBpcyBjbGVhblxuICogYW5kIHNpbXBsZSwgbGVhdmluZyB5b3UgdG8gZm9jdXMgb24gYnVpbGRpbmcgeW91ciBuZXh0IGdyZWF0IHByb2plY3QuXG4gKi9cblxud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7XG4gICAgJ1gtQ1NSRi1UT0tFTic6IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbixcbiAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbn07XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tIFwibGFyYXZlbC1lY2hvXCJcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogJ3lvdXItcHVzaGVyLWtleSdcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgVHJhbXBvbGluZVNjb3JlIGZyb20gJy4vVHJhbXBvbGluZVNjb3JlJztcbmltcG9ydCBEb3VibGVNaW5pU2NvcmUgZnJvbSAnLi9Eb3VibGVNaW5pU2NvcmUnO1xuaW1wb3J0IFR1bWJsaW5nU2NvcmUgZnJvbSAnLi9UdW1ibGluZ1Njb3JlJztcblxuVnVlLnVzZShWdWV4KTtcblxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XG5cbiAgICBzdHJpY3Q6IGZhbHNlLFxuXG4gICAgLypcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHwgU3RhdGVcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHxcbiAgICAgfCBTaW5nbGUgU3RhdGUgVHJlZVxuICAgICB8XG4gICAgIHwgVnVleCB1c2VzIGEgc2luZ2xlIHN0YXRlIHRyZWUgLSB0aGF0IGlzLCB0aGlzIHNpbmdsZSBvYmplY3QgY29udGFpbnMgYWxsXG4gICAgIHwgeW91ciBhcHBsaWNhdGlvbiBsZXZlbCBzdGF0ZSBhbmQgc2VydmVzIGFzIHRoZSBcInNpbmdsZSBzb3VyY2Ugb2YgdHJ1dGhcIi5cbiAgICAgfCBUaGlzIGFsc28gbWVhbnMgdXN1YWxseSB5b3Ugd2lsbCBoYXZlIG9ubHkgb25lIHN0b3JlIGZvciBlYWNoIGFwcGxpY2F0aW9uLlxuICAgICB8IEEgc2luZ2xlIHN0YXRlIHRyZWUgbWFrZXMgaXQgc3RyYWlnaHRmb3J3YXJkIHRvIGxvY2F0ZSBhIHNwZWNpZmljIHBpZWNlIG9mXG4gICAgIHwgc3RhdGUsIGFuZCBhbGxvd3MgdXMgdG8gZWFzaWx5IHRha2Ugc25hcHNob3RzIG9mIHRoZSBjdXJyZW50IGFwcCBzdGF0ZSBmb3JcbiAgICAgfCBkZWJ1Z2dpbmcgcHVycG9zZXMuXG4gICAgIHxcbiAgICAgKi9cbiAgICBzdGF0ZToge1xuICAgICAgICBjb21wZXRpdGlvbl9pZDogbnVsbCxcblxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgbG9jYXRpb246IG51bGwsXG4gICAgICAgIHN0YXJ0X2RhdGU6IG51bGwsXG4gICAgICAgIGVuZF9kYXRlOiBudWxsLFxuXG4gICAgICAgIHRyYW1wb2xpbmVSb3V0aW5lczoge1xuICAgICAgICAgICAgcHJlbGltX2NvbXB1bHNvcnk6IG5ldyBUcmFtcG9saW5lU2NvcmUoKSxcbiAgICAgICAgICAgIHByZWxpbV9vcHRpb25hbDogbmV3IFRyYW1wb2xpbmVTY29yZSgpLFxuICAgICAgICAgICAgc2VtaV9maW5hbF9vcHRpb25hbDogbmV3IFRyYW1wb2xpbmVTY29yZSgpLFxuICAgICAgICAgICAgZmluYWxfb3B0aW9uYWw6IG5ldyBUcmFtcG9saW5lU2NvcmUoKSxcbiAgICAgICAgfSxcbiAgICAgICAgZG91YmxlTWluaVBhc3Nlczoge1xuICAgICAgICAgICAgcHJlbGltX3Bhc3NfMTogbmV3IERvdWJsZU1pbmlTY29yZSgpLFxuICAgICAgICAgICAgcHJlbGltX3Bhc3NfMjogbmV3IERvdWJsZU1pbmlTY29yZSgpLFxuICAgICAgICAgICAgZmluYWxfcGFzc18zOiBuZXcgRG91YmxlTWluaVNjb3JlKCksXG4gICAgICAgICAgICBmaW5hbF9wYXNzXzQ6IG5ldyBEb3VibGVNaW5pU2NvcmUoKSxcbiAgICAgICAgfSxcbiAgICAgICAgdHVtYmxpbmdQYXNzZXM6IHtcbiAgICAgICAgICAgIHByZWxpbV9wYXNzXzE6IG5ldyBUdW1ibGluZ1Njb3JlKCksXG4gICAgICAgICAgICBwcmVsaW1fcGFzc18yOiBuZXcgVHVtYmxpbmdTY29yZSgpLFxuICAgICAgICAgICAgZmluYWxfcGFzc18zOiBuZXcgVHVtYmxpbmdTY29yZSgpLFxuICAgICAgICAgICAgZmluYWxfcGFzc180OiBuZXcgVHVtYmxpbmdTY29yZSgpLFxuICAgICAgICB9LFxuXG5cbiAgICAgICAgLy8gU0hPVUxEIEJFIE5BTUVTUEFDRURcbiAgICAgICAgYXRobGV0ZVZpZXc6IHtcbiAgICAgICAgICAgIGNvbXBvbmVudFRpdGxlOiBudWxsLFxuICAgICAgICAgICAgc2hvd25BdGhsZXRlczogbnVsbCxcbiAgICAgICAgICAgIGFsbEF0aGxldGVzOm51bGwsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHwgQWN0aW9uc1xuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfFxuICAgICB8IEFjdGlvbnMgYXJlIHNpbWlsYXIgdG8gbXV0YXRpb25zLCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0OlxuICAgICB8XG4gICAgIHwgKiBJbnN0ZWFkIG9mIG11dGF0aW5nIHRoZSBzdGF0ZSwgYWN0aW9ucyBjb21taXQgbXV0YXRpb25zLlxuICAgICB8ICogQWN0aW9ucyBjYW4gY29udGFpbiBhcmJpdHJhcnkgYXN5bmNocm9ub3VzIG9wZXJhdGlvbnMuXG4gICAgIHxcbiAgICAgKi9cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIExPQURfQ09NUEVUSVRJT046IChjb250ZXh0LCBjb21wZXRpdGlvbklkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvY29tcGV0aXRpb25zLycgKyBjb21wZXRpdGlvbklkKS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBjb21wZXRpdGlvbiA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBldGl0aW9uOiAnLCBjb21wZXRpdGlvbik7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9DT01QRVRJVElPTl9JRCcsIGNvbXBldGl0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9DT01QRVRJVElPTl9GSUVMRFMnLCB7IGZpZWxkczogY29tcGV0aXRpb24gfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcGV0aXRpb24udHJhbXBvbGluZVNjb3Jlcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9TQ09SRVMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZXM6IGNvbXBldGl0aW9uLnRyYW1wb2xpbmVTY29yZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2xhc3M6IFRyYW1wb2xpbmVTY29yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlSW5kZXg6ICd0cmFtcG9saW5lUm91dGluZXMnLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcGV0aXRpb24uZG91YmxlTWluaVNjb3Jlcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9TQ09SRVMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZXM6IGNvbXBldGl0aW9uLmRvdWJsZU1pbmlTY29yZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2xhc3M6IERvdWJsZU1pbmlTY29yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlSW5kZXg6ICdkb3VibGVNaW5pUGFzc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBldGl0aW9uLnR1bWJsaW5nU2NvcmVzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX1NDT1JFUycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlczogY29tcGV0aXRpb24udHVtYmxpbmdTY29yZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2xhc3M6IFR1bWJsaW5nU2NvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUluZGV4OiAndHVtYmxpbmdQYXNzZXMnLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBBVEhMRVRFX1ZJRVdfTE9BRF9BVEhMRVRFUzogKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvYXRobGV0ZXMnKS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnQVRITEVURV9WSUVXX1NFVF9BVEhMRVRFUycsIHJlc3BvbnNlLmF0aGxldGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8IE11dGF0aW9uc1xuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfFxuICAgICB8IFRoZSBvbmx5IHdheSB0byBhY3R1YWxseSBjaGFuZ2Ugc3RhdGUgaW4gYSBWdWV4IHN0b3JlIGlzIGJ5IGNvbW1pdHRpbmdcbiAgICAgfCBhIG11dGF0aW9uLiBWdWV4IG11dGF0aW9ucyBhcmUgdmVyeSBzaW1pbGFyIHRvIGV2ZW50czogZWFjaCBtdXRhdGlvbiBoYXNcbiAgICAgfCBhIHN0cmluZyB0eXBlIGFuZCBhIGhhbmRsZXIuIFRoZSBoYW5kbGVyIGZ1bmN0aW9uIGlzIHdoZXJlIHdlIHBlcmZvcm1cbiAgICAgfCBhY3R1YWwgc3RhdGUgbW9kaWZpY2F0aW9ucywgYW5kIGl0IHdpbGwgcmVjZWl2ZSB0aGUgc3RhdGUgYXMgdGhlIGZpcnN0XG4gICAgIHwgYXJndW1lbnQuXG4gICAgIHxcbiAgICAgKi9cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgU0VUX0NPTVBFVElUSU9OX0lEOiAoc3RhdGUsIGlkKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5jb21wZXRpdGlvbl9pZCA9IGlkO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9DT01QRVRJVElPTl9GSUVMRFM6IChzdGF0ZSwgeyBmaWVsZHMgfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmaWVsZHMudGl0bGU7XG4gICAgICAgICAgICBzdGF0ZS5sb2NhdGlvbiA9IGZpZWxkcy5sb2NhdGlvbjtcbiAgICAgICAgICAgIHN0YXRlLnN0YXJ0X2RhdGUgPSBtb21lbnQoZmllbGRzLnN0YXJ0X2RhdGUuZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgICAgICBzdGF0ZS5lbmRfZGF0ZSA9IG1vbWVudChmaWVsZHMuZW5kX2RhdGUuZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX1RJVExFOiAoc3RhdGUsIHRpdGxlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS50aXRsZSA9IHRpdGxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9MT0NBVElPTjogKHN0YXRlLCBsb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfU1RBUlRfREFURTogKHN0YXRlLCBzdGFydF9kYXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGFydF9kYXRlID0gc3RhcnRfZGF0ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfRU5EX0RBVEU6IChzdGF0ZSwgZW5kX2RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmVuZF9kYXRlID0gZW5kX2RhdGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX1NDT1JFUzogKHN0YXRlLCB7IHNjb3Jlcywgc2NvcmVDbGFzcywgc3RhdGVJbmRleH0pID0+IHtcbiAgICAgICAgICAgIHNjb3Jlcy5mb3JFYWNoKChzY29yZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzY29yZUluc3RhbmNlID0gbmV3IHNjb3JlQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmVNYXAgPSB7fTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3JlSW5zdGFuY2UuYXR0cnMpLmZvckVhY2goKHNjb3JlUGFydCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY29yZU1hcFtzY29yZVBhcnRdID0gc2NvcmVbc2NvcmVQYXJ0XTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNjb3JlSW5zdGFuY2UudXBkYXRlQXR0cmlidXRlcyhzY29yZU1hcCk7XG4gICAgICAgICAgICAgICAgc2NvcmVJbnN0YW5jZS5zZXRJZChzY29yZS5pZCk7XG4gICAgICAgICAgICAgICAgc2NvcmVJbnN0YW5jZS5zZXRWaWRlb0lkKHNjb3JlLnZpZGVvX2lkKTtcblxuICAgICAgICAgICAgICAgIGlmIChzY29yZS52aWRlby5kYXRhLmhhc093blByb3BlcnR5KCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlSW5zdGFuY2Uuc2V0VmlkZW9GaWxlbmFtZShzY29yZS52aWRlby5kYXRhLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdGF0ZVtzdGF0ZUluZGV4XVtzY29yZS5yb3V0aW5lXSA9IHNjb3JlSW5zdGFuY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfUk9VVElORV9QUk9QRVJUWTogKHN0YXRlLCB7IGRpc2NpcGxpbmUsIHJvdXRpbmVLZXksIGNvbXBvbmVudCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uYXR0cnNbY29tcG9uZW50XS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICE9PSAndG90YWxfc2NvcmUnKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uY29tcHV0ZVRvdGFsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlW2Rpc2NpcGxpbmVdW3JvdXRpbmVLZXldLnNldFRvdGFsKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBSRU1PVkVfQVRUQUNITUVOVDogKHN0YXRlLCB7IHJvdXRpbmVzLCByb3V0aW5lS2V5IH0pID0+IHtcbiAgICAgICAgICAgIHN0YXRlW3JvdXRpbmVzXVtyb3V0aW5lS2V5XS5zZXRWaWRlb0lkKG51bGwpO1xuICAgICAgICAgICAgc3RhdGVbcm91dGluZXNdW3JvdXRpbmVLZXldLnNldFZpZGVvRmlsZW5hbWUobnVsbCk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBBVFRBQ0hfVklERU86IChzdGF0ZSwgeyByb3V0aW5lcywgcm91dGluZUtleSwgdmlkZW8gfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVbcm91dGluZXNdW3JvdXRpbmVLZXldLnNldFZpZGVvSWQodmlkZW8uaWQpO1xuICAgICAgICAgICAgc3RhdGVbcm91dGluZXNdW3JvdXRpbmVLZXldLnNldFZpZGVvRmlsZW5hbWUodmlkZW8udGl0bGUpO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgQVRITEVURV9WSUVXX1NFVF9BVEhMRVRFUzogKHN0YXRlLCBhdGhsZXRlcykgPT4ge1xuICAgICAgICAgICAgc3RhdGUuYXRobGV0ZVZpZXcuYWxsQXRobGV0ZXMgPSBhdGhsZXRlcztcbiAgICAgICAgfSxcblxuICAgICAgICBBVEhMRVRFX1ZJRVdfQ0hBTkdFX0FUSExFVEU6IChzdGF0ZSwgc2hvd24pID0+IHtcbiAgICAgICAgICAgIHZhciB0ZW1wTGlzdE9mQXRobGV0ZXMgPSBzdGF0ZS5hdGhsZXRlVmlldy5hbGxBdGhsZXRlcy5maWx0ZXIoKGF0aGxldGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd25bYXRobGV0ZS5pZF07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc3RhdGUuYXRobGV0ZVZpZXcuc2hvd25BdGhsZXRlcyA9IHRlbXBMaXN0T2ZBdGhsZXRlcztcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLypcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHwgR2V0dGVyc1xuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfFxuICAgICB8IFNvbWV0aW1lcyB3ZSBtYXkgbmVlZCB0byBjb21wdXRlIGRlcml2ZWQgc3RhdGUgYmFzZWQgb24gc3RvcmUgc3RhdGUsIGZvclxuICAgICB8IGV4YW1wbGUgZmlsdGVyaW5nIHRocm91Z2ggYSBsaXN0IG9mIGl0ZW1zIGFuZCBjb3VudGluZyB0aGVtLlxuICAgICB8XG4gICAgICovXG4gICAgZ2V0dGVyczoge1xuICAgICAgICBldmVudENoZWNrZWQ6IChzdGF0ZSwgZ2V0dGVycykgPT4gKGRpc2NpcGxpbmUpID0+IHtcbiAgICAgICAgICAgIGxldCBjaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZVtkaXNjaXBsaW5lXSkuZm9yRWFjaCgocm91dGluZUtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tlZCAmJiBwYXJzZUludChzdGF0ZVtkaXNjaXBsaW5lXVtyb3V0aW5lS2V5XS5hdHRycy50b3RhbF9zY29yZS52YWx1ZSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICAgICAgfSxcblxuICAgICAgICB2YWxpZFJvdXRpbmVzOiAoc3RhdGUsIGdldHRlcnMpID0+IChkaXNjaXBsaW5lKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBudWxsO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZVtkaXNjaXBsaW5lXSkuZm9yRWFjaCgocm91dGluZUtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChzdGF0ZVtkaXNjaXBsaW5lXVtyb3V0aW5lS2V5XS5hdHRycy50b3RhbF9zY29yZS52YWx1ZSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRbcm91dGluZUtleV0gPSBzdGF0ZVtkaXNjaXBsaW5lXVtyb3V0aW5lS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFsbERhdGE6IChzdGF0ZSwgZ2V0dGVycykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb21wZXRpdGlvbl9pZDogc3RhdGUuY29tcGV0aXRpb25faWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHN0YXRlLnRpdGxlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiBzdGF0ZS5zdGFydF9kYXRlLFxuICAgICAgICAgICAgICAgIGVuZF9kYXRlOiBzdGF0ZS5lbmRfZGF0ZSxcblxuICAgICAgICAgICAgICAgIHRyYW1wb2xpbmU6IGdldHRlcnMuZXZlbnRDaGVja2VkKCd0cmFtcG9saW5lUm91dGluZXMnKSxcbiAgICAgICAgICAgICAgICBkbXQ6IGdldHRlcnMuZXZlbnRDaGVja2VkKCdkb3VibGVNaW5pUGFzc2VzJyksXG4gICAgICAgICAgICAgICAgdHVtYmxpbmc6IGdldHRlcnMuZXZlbnRDaGVja2VkKCd0dW1ibGluZ1Bhc3NlcycpLFxuXG4gICAgICAgICAgICAgICAgdHJhbXBvbGluZVJvdXRpbmVzOiBnZXR0ZXJzLnZhbGlkUm91dGluZXMoJ3RyYW1wb2xpbmVSb3V0aW5lcycpLFxuICAgICAgICAgICAgICAgIGRvdWJsZU1pbmlQYXNzZXM6IGdldHRlcnMudmFsaWRSb3V0aW5lcygnZG91YmxlTWluaVBhc3NlcycpLFxuICAgICAgICAgICAgICAgIHR1bWJsaW5nUGFzc2VzOiBnZXR0ZXJzLnZhbGlkUm91dGluZXMoJ3R1bWJsaW5nUGFzc2VzJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8IE1vZHVsZXNcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHxcbiAgICAgfCBEdWUgdG8gdXNpbmcgYSBzaW5nbGUgc3RhdGUgdHJlZSwgYWxsIHN0YXRlIG9mIG91ciBhcHBsaWNhdGlvbiBpc1xuICAgICB8IGNvbnRhaW5lZCBpbnNpZGUgb25lIGJpZyBvYmplY3QuIEhvd2V2ZXIsIGFzIG91ciBhcHBsaWNhdGlvbiBncm93cyBpblxuICAgICB8IHNjYWxlLCB0aGUgc3RvcmUgY2FuIGdldCByZWFsbHkgYmxvYXRlZC5cbiAgICAgfFxuICAgICB8IFRvIGhlbHAgd2l0aCB0aGF0LCBWdWV4IGFsbG93cyB1cyB0byBkaXZpZGUgb3VyIHN0b3JlIGludG8gbW9kdWxlcy5cbiAgICAgfCBFYWNoIG1vZHVsZSBjYW4gY29udGFpbiBpdHMgb3duIHN0YXRlLCBtdXRhdGlvbnMsIGFjdGlvbnMsIGdldHRlcnMsIGFuZFxuICAgICB8IGV2ZW4gbmVzdGVkIG1vZHVsZXMgLSBpdCdzIGZyYWN0YWwgYWxsIHRoZSB3YXkgZG93bi5cbiAgICAgfFxuICAgICAqL1xuICAgIG1vZHVsZXM6IHtcblxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcblxuY2xhc3MgVHVtYmxpbmdTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ3R1bWJsaW5nJztcbiAgICAgICAgdGhpcy5sYWJlbCA9ICdUdW1ibGluZyc7XG4gICAgICAgIHRoaXMucm91dGluZUtleXMgPSBbJ3ByZWxpbV9wYXNzXzEnLCAncHJlbGltX3Bhc3NfMicsICdmaW5hbF9wYXNzXzMnLCAnZmluYWxfcGFzc180J107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUdW1ibGluZ1Njb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvVHVtYmxpbmdTY29yZS5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGV0aXRpb25Gb3JtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzViZWIyZWNcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29tcGV0aXRpb25Gb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21wZXRpdGlvbkZvcm0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ29tcGV0aXRpb25Gb3JtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NWJlYjJlY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc1YmViMmVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21wZXRpdGlvbkZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA4MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjk1NDNkOTNcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBNdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yOTU0M2Q5M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI5NTQzZDkzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUm91dGluZVZpZGVvLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWI2YzA1NDBcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUm91dGluZVZpZGVvLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3V0aW5lVmlkZW8udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUm91dGluZVZpZGVvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01YjZjMDU0MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTViNmMwNTQwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3V0aW5lVmlkZW8udnVlXG4vLyBtb2R1bGUgaWQgPSA4MDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TbWFsbFZpZGVvLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2IzMDg2YzZcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU21hbGxWaWRlby52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU21hbGxWaWRlby52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBTbWFsbFZpZGVvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YjMwODZjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdiMzA4NmM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVmlkZW9Db21tZW50cy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWVlN2IyZTk0XFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZpZGVvQ29tbWVudHMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvQ29tbWVudHMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVmlkZW9Db21tZW50cy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZWU3YjJlOTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lZTdiMmU5NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvUGxheWVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDUwMTY5YTNcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9QbGF5ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvUGxheWVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NTAxNjlhM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ1MDE2OWEzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1BsYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IDgxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvVXBsb2FkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOGNjZjY2N2FcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9VcGxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvVXBsb2FkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04Y2NmNjY3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LThjY2Y2NjdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDgxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvVm90aW5nLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzE5YTk4ZTlcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9Wb3RpbmcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvVm90aW5nLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMTlhOThlOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMxOWE5OGU5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDgxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0F0aGxldGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yNTIzZTE5YVxcXCJ9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BdGhsZXRlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdGhsZXRlcy9zZWFyY2gvQXRobGV0ZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBdGhsZXRlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yNTIzZTE5YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI1MjNlMTlhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdGhsZXRlcy9zZWFyY2gvQXRobGV0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0F0aGxldGVzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjlmODFhNmVcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXRobGV0ZXMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F0aGxldGVzL3NlYXJjaC9BdGhsZXRlcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBdGhsZXRlcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZjlmODFhNmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mOWY4MWE2ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXRobGV0ZXMvc2VhcmNoL0F0aGxldGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQXRobGV0ZUxpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02Nzg1NGJkNVxcXCJ9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BdGhsZXRlTGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXRobGV0ZXMvdmlldy9BdGhsZXRlTGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBdGhsZXRlTGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjc4NTRiZDVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02Nzg1NGJkNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXRobGV0ZXMvdmlldy9BdGhsZXRlTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDgxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0F0aGxldGVWaWV3LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWU5NzdhNWNcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXRobGV0ZVZpZXcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F0aGxldGVzL3ZpZXcvQXRobGV0ZVZpZXcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQXRobGV0ZVZpZXcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlOTc3YTVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWU5NzdhNWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F0aGxldGVzL3ZpZXcvQXRobGV0ZVZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSA4MTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BdGhsZXRlc1ZpZXcudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MzI3YzBiMVxcXCJ9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BdGhsZXRlc1ZpZXcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F0aGxldGVzL3ZpZXcvQXRobGV0ZXNWaWV3LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEF0aGxldGVzVmlldy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDMyN2MwYjFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00MzI3YzBiMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXRobGV0ZXMvdmlldy9BdGhsZXRlc1ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSA4MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Eb3VibGVNaW5pU2NvcmUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi05MzM4YTYzNlxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Eb3VibGVNaW5pU2NvcmUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9Eb3VibGVNaW5pU2NvcmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gRG91YmxlTWluaVNjb3JlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05MzM4YTYzNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTkzMzhhNjM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVHJhbXBvbGluZVNjb3JlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZTRlM2EzYTBcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVHJhbXBvbGluZVNjb3JlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFRyYW1wb2xpbmVTY29yZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTRlM2EzYTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lNGUzYTNhMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1R1bWJsaW5nU2NvcmUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYTZhOGQyMVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UdW1ibGluZ1Njb3JlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBUdW1ibGluZ1Njb3JlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYTZhOGQyMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJhNmE4ZDIxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFsoX3ZtLmZvbGxvd2VkID09PSAwKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmZvbGxvd1xuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tZXllLW9wZW5cIlxuICB9KSwgX3ZtLl92KFwiIEZvbGxvd1xcbiAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmZvbGxvd2VkID09PSAxKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24taG91cmdsYXNzXCJcbiAgfSksIF92bS5fdihcIiBXYWl0aW5nIGZvciB2ZXJpZmljYXRpb25cXG4gICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mb2xsb3dlZCA9PT0gMikgPyBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS51bmZvbGxvd1xuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tZXllLWNsb3NlXCJcbiAgfSksIF92bS5fdihcIiBVbmZvbGxvd1xcbiAgICBcIildKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjUyM2UxOWFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yNTIzZTE5YVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F0aGxldGVzL3NlYXJjaC9BdGhsZXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW192bS5fdihcIlVwbG9hZCBZb3VyIFZpZGVvc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJldmVudFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRXZlbnRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudCksXG4gICAgICBleHByZXNzaW9uOiBcImV2ZW50XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImV2ZW50XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS5ldmVudCA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUcmFtcG9saW5lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJkb3VibGUgbWluaVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRG91YmxlLW1pbmlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInR1bWJsaW5nXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUdW1ibGluZ1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJ2aXNpYmlsaXR5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJWaXNpYmlsaXR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udmlzaWJpbGl0eSksXG4gICAgICBleHByZXNzaW9uOiBcInZpc2liaWxpdHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidmlzaWJpbGl0eVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0udmlzaWJpbGl0eSA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwcml2YXRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQcml2YXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwdWJsaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlB1YmxpY1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdnbHlwaGljb24nOiB0cnVlLCAnZ2x5cGhpY29uLWxvY2snOiBfdm0udmlzaWJpbGl0eSA9PSAncHJpdmF0ZScsICdnbHlwaGljb24tZXllLW9wZW4nOiBfdm0udmlzaWJpbGl0eSA9PSAncHVibGljJ1xuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udmlzaWJpbGl0eURlc2NyaXB0aW9uKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnF1ZXVlZCksXG4gICAgICBleHByZXNzaW9uOiBcIiFxdWV1ZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiR1cGxvYWQuc2VsZWN0KCd2aWRlby11cGxvYWQnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBWaWRlb3NcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5xdWV1ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJxdWV1ZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiR1cGxvYWQuc3RhcnQoJ3ZpZGVvLXVwbG9hZCcpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF92bS4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnKTtcbiAgICAgICAgX3ZtLnF1ZXVlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJyksXG4gICAgICBleHByZXNzaW9uOiBcIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1wcm9ncmVzcyBwcm9ncmVzc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLWJhclwiLFxuICAgIHN0eWxlOiAoJ3dpZHRoOiAnICsgX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykucGVyY2VudENvbXBsZXRlICsgJyU7JylcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5wZXJjZW50Q29tcGxldGUpICsgXCIlIENvbXBsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS4kdXBsb2FkLmVycm9ycygndmlkZW8tdXBsb2FkJykubGVuZ3RoKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR1cGxvYWQuZXJyb3JzKCd2aWRlby11cGxvYWQnKVswXS5tZXNzYWdlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1yZXN1bHRcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoID4gMCksXG4gICAgICBleHByZXNzaW9uOiBcIiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggPiAwXCJcbiAgICB9XVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kZWZhdWx0XCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGgpICsgXCIgXCIgKyBfdm0uX3MoX3ZtLl9mKFwicGx1cmFsaXplXCIpKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoLCAnZmlsZScpKSArIFwiIHJlYWR5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgwqBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9nZ2xlU2hvd1F1ZXVlZFxuICAgIH1cbiAgfSwgWyhfdm0uc2hvd1F1ZXVlZEZpbGVzKSA/IF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tbWVudS11cFwiXG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICghX3ZtLnNob3dRdWV1ZWRGaWxlcykgPyBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtZG93blwiXG4gIH0pIDogX3ZtLl9lKCldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dRdWV1ZWRGaWxlcyksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dRdWV1ZWRGaWxlc1wiXG4gICAgfV1cbiAgfSwgX3ZtLl9sKChfdm0uJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkKSwgZnVuY3Rpb24oZmlsZSkge1xuICAgIHJldHVybiBfYygnbGknLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhmaWxlLm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5jb21wbGV0ZSksIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIFsoZmlsZS5lcnJvcnMubGVuZ3RoKSA/IF9jKCdkaXYnLCBbX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kYW5nZXJcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoZmlsZS5lcnJvcnNbMF0ubWVzc2FnZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIWZpbGUuZXJyb3JzLmxlbmd0aCkgPyBfYygnZGl2JywgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gICAgfSwgW192bS5fdihfdm0uX3MoZmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWRlZCBzdWNjZXNzZnVsbHkuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCldKVxuICB9KV0sIDIpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yOTU0M2Q5M1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTI5NTQzZDkzXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDgyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRpbmUtdmlkZW8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm91dGluZXNcIjogX3ZtLnJvdXRpbmVzLFxuICAgICAgXCJkaXNjaXBsaW5lXCI6IF92bS5kaXNjaXBsaW5lLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBfdm0ucm91dGluZUtleVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdleGVjdXRpb24nKSxcbiAgICAgIFwidGl0bGVcIjogXCJFeGVjdXRpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV4ZWN1dGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV4ZWN1dGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcImV4ZWN1dGlvblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ2V4ZWN1dGlvbicpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5leGVjdXRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXhlY3V0aW9uID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdkaWZmaWN1bHR5JyksXG4gICAgICBcInRpdGxlXCI6IFwiRGlmZmljdWx0eVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGlmZmljdWx0eVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRpZmZpY3VsdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkaWZmaWN1bHR5XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnZGlmZmljdWx0eScpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5kaWZmaWN1bHR5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmRpZmZpY3VsdHkgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJyksXG4gICAgICBcInRpdGxlXCI6IFwiTmV1dHJhbCBEZWR1Y3Rpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk5EXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0ubmV1dHJhbF9kZWR1Y3Rpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJuZXV0cmFsX2RlZHVjdGlvblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm5ldXRyYWxfZGVkdWN0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm5ldXRyYWxfZGVkdWN0aW9uID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgXCJ0aXRsZVwiOiBcIlRvdGFsIFNjb3JlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUb3RhbCBTY29yZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdGFsX3Njb3JlKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG90YWxfc2NvcmVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50b3RhbF9zY29yZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3RhbF9zY29yZSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmE2YThkMjFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yYTZhOGQyMVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvX192b3RpbmdcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW9fX3ZvdGluZy1idXR0b25cIixcbiAgICBjbGFzczoge1xuICAgICAgJ3ZpZGVvX192b3RpbmctYnV0dG9uLS12b3RlZCc6IF92bS51c2VyVm90ZSA9PSAndXAnXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS52b3RlKCd1cCcpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXBcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnVwKSArIFwiIMKgXFxuXFxuICAgIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW9fX3ZvdGluZy1idXR0b25cIixcbiAgICBjbGFzczoge1xuICAgICAgJ3ZpZGVvX192b3RpbmctYnV0dG9uLS12b3RlZCc6IF92bS51c2VyVm90ZSA9PSAnZG93bidcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnZvdGUoJ2Rvd24nKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmRvd24pICsgXCJcXG5cIildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zMTlhOThlOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTMxOWE5OGU5XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Wb3RpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSA4MjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBfdm0uX2woKF92bS5hdGhsZXRlcyksIGZ1bmN0aW9uKGF0aGxldGUpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIFtfYygndmlldy1hdGhsZXRlJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJhdGhsZXRlXCI6IGF0aGxldGVcbiAgICAgIH1cbiAgICB9KV0sIDEpXG4gIH0pKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00MzI3YzBiMVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQzMjdjMGIxXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXRobGV0ZXMvdmlldy9BdGhsZXRlc1ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSA4MjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd2aWRlbycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luIHZqcy1iaWctcGxheS1jZW50ZXJlZCB2anMtMTYtOVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidmlkZW9cIixcbiAgICAgIFwiY29udHJvbHNcIjogXCJcIixcbiAgICAgIFwicHJlbG9hZFwiOiBcImF1dG9cIixcbiAgICAgIFwiZGF0YS1zZXR1cFwiOiBcIntcXFwiZmx1aWRcXFwiOiB0cnVlLCBcXFwicHJlbG9hZFxcXCI6IFxcXCJhdXRvXFxcIiwgXFxcInBsYXliYWNrUmF0ZXNcXFwiOiBbMC4yNSwgMC4zMywgMSwgMl19XCIsXG4gICAgICBcInBvc3RlclwiOiBfdm0udGh1bWJuYWlsVXJsXG4gICAgfVxuICB9LCBbX2MoJ3NvdXJjZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidmlkZW8vbXA0XCIsXG4gICAgICBcInNyY1wiOiBfdm0udmlkZW9VcmxcbiAgICB9XG4gIH0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDUwMTY5YTNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NTAxNjlhM1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgWyhfdm0uJHVwbG9hZC5maWxlcyhfdm0udW5pcXVlSWQpLmVycm9yLmxlbmd0aCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoX3ZtLiR1cGxvYWQuZmlsZXMoX3ZtLnVuaXF1ZUlkKS5lcnJvclswXS5uYW1lKSldKSwgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uJHVwbG9hZC5maWxlcyhfdm0udW5pcXVlSWQpLmVycm9yWzBdLmVycm9yc1swXS5tZXNzYWdlKSArIFwiXFxuICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS51cGxvYWRlZCAmJiAhX3ZtLmhhc0F0dGFjaG1lbnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhdXBsb2FkZWQgJiYgIWhhc0F0dGFjaG1lbnRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4teHNcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uJHVwbG9hZC5tZXRhKF92bS51bmlxdWVJZCkuc3RhdHVzID09PSAnc2VuZGluZycsXG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kdXBsb2FkLnNlbGVjdChfdm0udW5pcXVlSWQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wYXBlcmNsaXBcIlxuICB9KSwgX3ZtLl92KFwiIEF0dGFjaCBWaWRlb1xcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVwbG9hZGVkIHx8IF92bS5oYXNBdHRhY2htZW50KSxcbiAgICAgIGV4cHJlc3Npb246IFwidXBsb2FkZWQgfHwgaGFzQXR0YWNobWVudFwiXG4gICAgfV1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tY2hlY2tcIlxuICB9KSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5maWxlbmFtZSkgKyBcIlxcbiAgICAgICAgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyZW1vdmUtYXR0YWNobWVudFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnJlbW92ZUF0dGFjaG1lbnQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlLXNpZ25cIlxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLiR1cGxvYWQubWV0YShfdm0udW5pcXVlSWQpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJHVwbG9hZC5tZXRhKHVuaXF1ZUlkKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgc3R5bGU6ICgnd2lkdGg6ICcgKyBfdm0uJHVwbG9hZC5tZXRhKF92bS51bmlxdWVJZCkucGVyY2VudENvbXBsZXRlICsgJyU7JylcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdXBsb2FkLm1ldGEoX3ZtLnVuaXF1ZUlkKS5wZXJjZW50Q29tcGxldGUpICsgXCIlIENvbXBsZXRlXFxuICAgICAgICBcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWI2YzA1NDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01YjZjMDU0MFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWVcbi8vIG1vZHVsZSBpZCA9IDgyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmF0aGxldGUubmFtZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgW19jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0taW5saW5lXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hcIlxuICB9LCBbX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zaG93VmlkZW9zKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd1ZpZGVvc1wiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0uc2hvd1ZpZGVvcykgPyBfdm0uX2koX3ZtLnNob3dWaWRlb3MsIG51bGwpID4gLTEgOiAoX3ZtLnNob3dWaWRlb3MpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0uc2hvd1ZpZGVvcyxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5zaG93VmlkZW9zID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLnNob3dWaWRlb3MgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLnNob3dWaWRlb3MgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgVmlkZW9zIChcIiArIF92bS5fcyhfdm0uYXRobGV0ZS52aWRlb3MubGVuZ3RoKSArIFwiKVxcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCJcXG5cXG4gICAgICAgICAgICDCoMKgXFxuXFxuICAgICAgICAgICAgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94XCJcbiAgfSwgW19jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvd0NvbXBldGl0aW9ucyksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dDb21wZXRpdGlvbnNcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLnNob3dDb21wZXRpdGlvbnMpID8gX3ZtLl9pKF92bS5zaG93Q29tcGV0aXRpb25zLCBudWxsKSA+IC0xIDogKF92bS5zaG93Q29tcGV0aXRpb25zKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLnNob3dDb21wZXRpdGlvbnMsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uc2hvd0NvbXBldGl0aW9ucyA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKF92bS5zaG93Q29tcGV0aXRpb25zID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS5zaG93Q29tcGV0aXRpb25zID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIENvbXBldGl0aW9ucyAoXCIgKyBfdm0uX3MoX3ZtLmF0aGxldGUuY29tcGV0aXRpb25zLmxlbmd0aCkgKyBcIilcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dWaWRlb3MgJiYgX3ZtLmF0aGxldGUudmlkZW9zLmxlbmd0aCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmF0aGxldGUudmlkZW9zKSwgZnVuY3Rpb24odmlkZW8pIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTYgY29sLW1kLTRcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGh1bWJuYWlsXCJcbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogX3ZtLnZpZGVvVXJsKHZpZGVvKVxuICAgICAgfVxuICAgIH0sIFtfYygnaW1nJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogX3ZtLnZpZGVvVGh1bWJuYWlsKHZpZGVvKSxcbiAgICAgICAgXCJhbHRcIjogdmlkZW8udGl0bGVcbiAgICAgIH1cbiAgICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2FwdGlvblwiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IF92bS52aWRlb1VybCh2aWRlbylcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyh2aWRlby50aXRsZSkpXSldKV0pXSldKVxuICB9KV0sIDIpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0NvbXBldGl0aW9ucyAmJiBfdm0uYXRobGV0ZS5jb21wZXRpdGlvbnMubGVuZ3RoKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCJcbiAgfSwgW19jKCdoNCcsIFtfdm0uX3YoXCJDb21wZXRpdGlvbnM6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1ib3JkZXJlZFwiXG4gIH0sIFtfdm0uX20oMSksIF92bS5fdihcIiBcIiksIF9jKCd0Ym9keScsIF92bS5fbCgoX3ZtLmF0aGxldGUuY29tcGV0aXRpb25zKSwgZnVuY3Rpb24oY29tcGV0aXRpb24pIHtcbiAgICByZXR1cm4gX2MoJ3RyJywgW19jKCd0ZCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwid2lkdGhcIjogXCI1NSVcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBfdm0uY29tcGV0aXRpb25VcmwoY29tcGV0aXRpb24pXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoY29tcGV0aXRpb24udGl0bGUpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIFsoY29tcGV0aXRpb24udmlkZW9Db3VudCA+IDApID8gX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS1kZWZhdWx0XCJcbiAgICB9LCBbX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvXCJcbiAgICB9KSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGNvbXBldGl0aW9uLnZpZGVvQ291bnQpKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChjb21wZXRpdGlvbi50cmFtcG9saW5lX3Njb3Jlcy5sZW5ndGgpID8gX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBkaXNjaXBsaW5lLXRyYVwiXG4gICAgfSwgW192bS5fdihcIlRyYW1wb2xpbmVcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoY29tcGV0aXRpb24uZG91YmxlX21pbmlfc2NvcmVzLmxlbmd0aCkgPyBfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGRpc2NpcGxpbmUtZG10XCJcbiAgICB9LCBbX3ZtLl92KFwiRG91YmxlIE1pbmlcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoY29tcGV0aXRpb24udHVtYmxpbmdfc2NvcmVzLmxlbmd0aCkgPyBfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGRpc2NpcGxpbmUtdHVtXCJcbiAgICB9LCBbX3ZtLl92KFwiVHVtYmxpbmdcIildKSA6IF92bS5fZSgpXSldKVxuICB9KSldKV0pXSkgOiBfdm0uX2UoKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiXG4gIH0sIFtfYygnaDQnLCBbX3ZtLl92KFwiVmlkZW9zOlwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGhlYWQnLCBbX2MoJ3RyJywgW19jKCd0aCcsIFtfdm0uX3YoXCJOYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0aCcsIFtfdm0uX3YoXCJFdmVudHNcIildKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01ZTk3N2E1Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlOTc3YTVjXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXRobGV0ZXMvdmlldy9BdGhsZXRlVmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDgyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIlxuICB9LCBfdm0uX2woKF92bS5hdGhsZXRlcyksIGZ1bmN0aW9uKGF0aGxldGUpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtXCJcbiAgICB9LCBbX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgIHZhbHVlOiAoX3ZtLnNob3duW2F0aGxldGUuaWRdKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93blthdGhsZXRlLmlkXVwiXG4gICAgICB9XSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCJcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0uc2hvd25bYXRobGV0ZS5pZF0pID8gX3ZtLl9pKF92bS5zaG93blthdGhsZXRlLmlkXSwgbnVsbCkgPiAtMSA6IChfdm0uc2hvd25bYXRobGV0ZS5pZF0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjaGFuZ2VcIjogX3ZtLnNob3duQXRobGV0ZXMsXG4gICAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIHZhciAkJGEgPSBfdm0uc2hvd25bYXRobGV0ZS5pZF0sXG4gICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdik7XG4gICAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5zaG93blthdGhsZXRlLmlkXSA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0uc2hvd25bYXRobGV0ZS5pZF0gPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3ZtLnNob3duW2F0aGxldGUuaWRdID0gJCRjXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiArIF92bS5fcyhhdGhsZXRlLm5hbWUpKV0pXSlcbiAgfSkpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY3ODU0YmQ1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjc4NTRiZDVcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdGhsZXRlcy92aWV3L0F0aGxldGVMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udmFsaWRhdGVCZWZvcmVTdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdmb3JtLWdyb3VwJzogdHJ1ZSwgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCd0aXRsZScpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJ0aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ29tcGV0aXRpb24gVGl0bGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdjb250cm9sJzogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlOnRpdGxlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoJ3JlcXVpcmVkJyksXG4gICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIixcbiAgICAgIGFyZzogXCJ0aXRsZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50aXRsZSksXG4gICAgICBleHByZXNzaW9uOiBcInRpdGxlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInRpdGxlXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0aXRsZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpdGxlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRpdGxlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0aXRsZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndGl0bGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndGl0bGUnKSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImxvY2F0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2NhdGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9jYXRpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2NhdGlvblwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJsb2NhdGlvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibG9jYXRpb25cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sb2NhdGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5sb2NhdGlvbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChmYWxzZSksXG4gICAgICBleHByZXNzaW9uOiBcImZhbHNlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiRXJyb3IgbWVzc2FnZVwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3RhcnRfZGF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3RhcnQgRGF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2NvbnRyb2wnOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGU6c3RhcnRfZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJyksXG4gICAgICBleHByZXNzaW9uOiBcIidkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJ1wiLFxuICAgICAgYXJnOiBcInN0YXJ0X2RhdGVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc3RhcnRfZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcInN0YXJ0X2RhdGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwic3RhcnRfZGF0ZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxuICAgICAgXCJuYW1lXCI6IFwic3RhcnRfZGF0ZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnN0YXJ0X2RhdGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc3RhcnRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnc3RhcnRfZGF0ZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnc3RhcnRfZGF0ZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdzdGFydF9kYXRlJykpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZW5kX2RhdGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZW5kX2RhdGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkVuZCBEYXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnY29udHJvbCc6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZTplbmRfZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJyksXG4gICAgICBleHByZXNzaW9uOiBcIidkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJ1wiLFxuICAgICAgYXJnOiBcImVuZF9kYXRlXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVuZF9kYXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZW5kX2RhdGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZW5kX2RhdGVcIixcbiAgICAgIFwidHlwZVwiOiBcImRhdGVcIixcbiAgICAgIFwibmFtZVwiOiBcImVuZF9kYXRlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZW5kX2RhdGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZW5kX2RhdGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2VuZF9kYXRlJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdlbmRfZGF0ZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdlbmRfZGF0ZScpKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJldmVudC1zZWxlY3Rpb25cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdoNCcsIFtfdm0uX3YoXCJFdmVudHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0cmFtcG9saW5lXCIsXG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJuYW1lXCI6IFwidHJhbXBvbGluZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLnRyYW1wb2xpbmUpID8gX3ZtLl9pKF92bS50cmFtcG9saW5lLCBudWxsKSA+IC0xIDogKF92bS50cmFtcG9saW5lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLnRyYW1wb2xpbmUsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0udHJhbXBvbGluZSA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKF92bS50cmFtcG9saW5lID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS50cmFtcG9saW5lID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgVHJhbXBvbGluZVxcbiAgICAgICAgICAgICAgICBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsID0gIV92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbFxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCJcbiAgfSksIF92bS5fdihcIiBTZW1pLUZpbmFsc1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZSksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbCA9ICFfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbFxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiXG4gIH0pLCBfdm0uX3YoXCIgRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnRyYW1wQ29sU2l6ZVxuICB9LCBbX2MoJ3RyYW1wb2xpbmUtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJDb21wdWxzb3J5XCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX2NvbXB1bHNvcnlcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnRyYW1wQ29sU2l6ZVxuICB9LCBbX2MoJ3RyYW1wb2xpbmUtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQcmVsaW0gT3B0aW9uYWxcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fb3B0aW9uYWxcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50cmFtcENvbFNpemVcbiAgfSwgW19jKCd0cmFtcG9saW5lLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiU2VtaS1GaW5hbFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInNlbWlfZmluYWxfb3B0aW9uYWxcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHJhbXBDb2xTaXplXG4gIH0sIFtfYygndHJhbXBvbGluZS1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkZpbmFsIE9wdGlvbmFsXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwiZmluYWxfb3B0aW9uYWxcIlxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRtdCksXG4gICAgICBleHByZXNzaW9uOiBcImRtdFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJkbXRcIixcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcIm5hbWVcIjogXCJkbXRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiY2hlY2tlZFwiOiBBcnJheS5pc0FycmF5KF92bS5kbXQpID8gX3ZtLl9pKF92bS5kbXQsIG51bGwpID4gLTEgOiAoX3ZtLmRtdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIl9fY1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IF92bS5kbXQsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uZG10ID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLmRtdCA9ICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdm0uZG10ID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgRG91YmxlIE1pbmlcXG4gICAgICAgICAgICAgICAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5kbXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwgPSAhX3ZtLmRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIlxuICB9KSwgX3ZtLl92KFwiIEZpbmFsc1xcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5kbXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0uZG10Q29sU2l6ZVxuICB9LCBbX2MoJ2RtdC1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgMVwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9wYXNzXzFcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLmRtdENvbFNpemVcbiAgfSwgW19jKCdkbXQtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDJcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18yXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0uZG10Q29sU2l6ZVxuICB9LCBbX2MoJ2RtdC1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgM1wiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcImZpbmFsX3Bhc3NfM1wiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLmRtdENvbFNpemVcbiAgfSwgW19jKCdkbXQtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDRcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJmaW5hbF9wYXNzXzRcIlxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHVtYmxpbmdcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidHVtYmxpbmdcIixcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0dW1ibGluZ1wiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLnR1bWJsaW5nKSA/IF92bS5faShfdm0udHVtYmxpbmcsIG51bGwpID4gLTEgOiAoX3ZtLnR1bWJsaW5nKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLnR1bWJsaW5nLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdik7XG4gICAgICAgICAgaWYgKCQkYykge1xuICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnR1bWJsaW5nID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLnR1bWJsaW5nID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS50dW1ibGluZyA9ICQkY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFR1bWJsaW5nXFxuICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHVtYmxpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwgPSAhX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIlxuICB9KSwgX3ZtLl92KFwiIEZpbmFsc1xcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZyksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnR1bWJsaW5nQ29sU2l6ZVxuICB9LCBbX2MoJ3R1bWJsaW5nLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAxXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfMVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHVtYmxpbmdDb2xTaXplXG4gIH0sIFtfYygndHVtYmxpbmctc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDJcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18yXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50dW1ibGluZ0NvbFNpemVcbiAgfSwgW19jKCd0dW1ibGluZy1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgM1wiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcImZpbmFsX3Bhc3NfM1wiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHVtYmxpbmdDb2xTaXplXG4gIH0sIFtfYygndHVtYmxpbmctc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDRcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJmaW5hbF9wYXNzXzRcIlxuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5lcnJvcnMuYW55KCkgfHwgIV92bS5ldmVudHNWYWxpZFxuICAgIH1cbiAgfSwgW192bS5fdihcIlN1Ym1pdCBDb21wZXRpdGlvblwiKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzViZWIyZWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NWJlYjJlY1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbXBldGl0aW9uRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDgzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2sgIWltcG9ydGFudFwiXG4gICAgfVxuICB9LCBbX2MoJ2EnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS5zaG93VmlkZW8pLFxuICAgICAgZXhwcmVzc2lvbjogXCIhc2hvd1ZpZGVvXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5wbGF5VmlkZW8oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tZmFjZXRpbWUtdmlkZW9cIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICBQbGF5IFZpZGVvXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvd1ZpZGVvKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd1ZpZGVvXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5oaWRlVmlkZW8oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tbWVudS11cFwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgIEhpZGUgVmlkZW9cXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd2aWRlbycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luIHZqcy1iaWctcGxheS1jZW50ZXJlZCB2anMtMTYtOSB2anMtaGlkZGVuXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogJ3ZpZGVvLScgKyBfdm0udmlkZW9JZCxcbiAgICAgIFwiY29udHJvbHNcIjogXCJcIixcbiAgICAgIFwiZGF0YS1zZXR1cFwiOiBcIntcXFwiZmx1aWRcXFwiOiB0cnVlLCBcXFwicGxheWJhY2tSYXRlc1xcXCI6IFswLjI1LCAwLjMzLCAxLCAyXSB9XCIsXG4gICAgICBcInBvc3RlclwiOiBfdm0uaW1nLFxuICAgICAgXCJ3aWR0aFwiOiBfdm0ud2lkdGgsXG4gICAgICBcImhlaWdodFwiOiBfdm0uaGVpZ2h0XG4gICAgfVxuICB9LCBbX2MoJ3NvdXJjZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidmlkZW8vbXA0XCIsXG4gICAgICBcInNyY1wiOiBfdm0uc3JjXG4gICAgfVxuICB9KV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2IzMDg2YzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03YjMwODZjNlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlXG4vLyBtb2R1bGUgaWQgPSA4MzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIlxuICB9LCBbX3ZtLl92KFwiVXBsb2FkIFlvdXIgVmlkZW9cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmFtZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcIm5hbWVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5hdXRoZW50aWNhdGVkXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZXZlbnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV2ZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLmV2ZW50ID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInRyYW1wb2xpbmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRyYW1wb2xpbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImRvdWJsZSBtaW5pXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEb3VibGUtbWluaVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidHVtYmxpbmdcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlR1bWJsaW5nXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoIV92bS51cGxvYWRpbmcpID8gX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJmaWxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJ2aWRlb1wiLFxuICAgICAgXCJpZFwiOiBcInZpZGVvXCIsXG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0ubmFtZSB8fCAhX3ZtLmV2ZW50XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLmZpbGVJbnB1dENoYW5nZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mYWlsZWQpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51cGxvYWRpbmcgJiYgIV92bS5mYWlsZWQpID8gX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInZpZGVvLWZvcm1cIlxuICAgIH1cbiAgfSwgWyghX3ZtLnVwbG9hZGluZ0NvbXBsZXRlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtaW5mb1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIlxuICB9KSwgX3ZtLl92KFwiIFlvdXIgdmlkZW8gaXMgdXBsb2FkaW5nLi4uXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51cGxvYWRpbmdDb21wbGV0ZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBjb21wbGV0ZS4gVmlkZW8gaXMgbm93IHByb2Nlc3NpbmcuIFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIi92aWRlb3NcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkdvIHRvIHlvdXIgdmlkZW9zLlwiKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0udXBsb2FkaW5nQ29tcGxldGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLWJhclwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgd2lkdGg6IF92bS5maWxlUHJvZ3Jlc3MgKyAnJSdcbiAgICB9KVxuICB9KV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRpdGxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50aXRsZSksXG4gICAgICBleHByZXNzaW9uOiBcInRpdGxlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpdGxlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRpdGxlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJkZXNjcmlwdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGVzY3JpcHRpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRlc2NyaXB0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGVzY3JpcHRpb25cIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZGVzY3JpcHRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGVzY3JpcHRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInZpc2liaWxpdHlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlZpc2liaWxpdHlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS52aXNpYmlsaXR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwidmlzaWJpbGl0eVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLnZpc2liaWxpdHkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicHJpdmF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHJpdmF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicHVibGljXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQdWJsaWNcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnZpc2liaWxpdHlEZXNjcmlwdGlvbikpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBwdWxsLXJpZ2h0XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnNhdmVTdGF0dXMpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udXBkYXRlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTYXZlIENoYW5nZXNcIildKV0pIDogX3ZtLl9lKCldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LThjY2Y2NjdhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOGNjZjY2N2FcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDgzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRpbmUtdmlkZW8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm91dGluZXNcIjogX3ZtLnJvdXRpbmVzLFxuICAgICAgXCJkaXNjaXBsaW5lXCI6IF92bS5kaXNjaXBsaW5lLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBfdm0ucm91dGluZUtleVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdleGVjdXRpb24nKSxcbiAgICAgIFwidGl0bGVcIjogXCJFeGVjdXRpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV4ZWN1dGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV4ZWN1dGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcImV4ZWN1dGlvblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ2V4ZWN1dGlvbicpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5leGVjdXRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXhlY3V0aW9uID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdkaWZmaWN1bHR5JyksXG4gICAgICBcInRpdGxlXCI6IFwiRGlmZmljdWx0eVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGlmZmljdWx0eVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRpZmZpY3VsdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkaWZmaWN1bHR5XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnZGlmZmljdWx0eScpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5kaWZmaWN1bHR5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmRpZmZpY3VsdHkgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJyksXG4gICAgICBcInRpdGxlXCI6IFwiTmV1dHJhbCBEZWR1Y3Rpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk5EXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0ubmV1dHJhbF9kZWR1Y3Rpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJuZXV0cmFsX2RlZHVjdGlvblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm5ldXRyYWxfZGVkdWN0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm5ldXRyYWxfZGVkdWN0aW9uID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgXCJ0aXRsZVwiOiBcIlRvdGFsIFNjb3JlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUb3RhbCBTY29yZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdGFsX3Njb3JlKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG90YWxfc2NvcmVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50b3RhbF9zY29yZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3RhbF9zY29yZSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOTMzOGE2MzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05MzM4YTYzNlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9Eb3VibGVNaW5pU2NvcmUudnVlXG4vLyBtb2R1bGUgaWQgPSA4MzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBzY29yZS10aWxlXCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0aW5lLXZpZGVvJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJvdXRpbmVzXCI6IF92bS5yb3V0aW5lcyxcbiAgICAgIFwiZGlzY2lwbGluZVwiOiBfdm0uZGlzY2lwbGluZSxcbiAgICAgIFwicm91dGluZS1rZXlcIjogX3ZtLnJvdXRpbmVLZXlcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnZXhlY3V0aW9uJyksXG4gICAgICBcInRpdGxlXCI6IFwiRXhlY3V0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJFeGVjdXRpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5leGVjdXRpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJleGVjdXRpb25cIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCdleGVjdXRpb24nKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZXhlY3V0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmV4ZWN1dGlvbiA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnZGlmZmljdWx0eScpLFxuICAgICAgXCJ0aXRsZVwiOiBcIkRpZmZpY3VsdHlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRpZmZpY3VsdHlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5kaWZmaWN1bHR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGlmZmljdWx0eVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ2RpZmZpY3VsdHknKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZGlmZmljdWx0eSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5kaWZmaWN1bHR5ID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCd0aW1lX29mX2ZsaWdodCcpLFxuICAgICAgXCJ0aXRsZVwiOiBcIlRpbWUgb2YgRmxpZ2h0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUT0ZcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS50aW1lX29mX2ZsaWdodCksXG4gICAgICBleHByZXNzaW9uOiBcInRpbWVfb2ZfZmxpZ2h0XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgndGltZV9vZl9mbGlnaHQnKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udGltZV9vZl9mbGlnaHQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udGltZV9vZl9mbGlnaHQgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2hvcml6b250YWxfZGlzcGxhY2VtZW50JyksXG4gICAgICBcInRpdGxlXCI6IFwiSG9yaXpvbnRhbCBEaXNwbGFjZW1lbnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkhEXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJob3Jpem9udGFsX2Rpc3BsYWNlbWVudFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ2hvcml6b250YWxfZGlzcGxhY2VtZW50JyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmhvcml6b250YWxfZGlzcGxhY2VtZW50KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmhvcml6b250YWxfZGlzcGxhY2VtZW50ID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpLFxuICAgICAgXCJ0aXRsZVwiOiBcIk5ldXRyYWwgRGVkdWN0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJORFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm5ldXRyYWxfZGVkdWN0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwibmV1dHJhbF9kZWR1Y3Rpb25cIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5uZXV0cmFsX2RlZHVjdGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5uZXV0cmFsX2RlZHVjdGlvbiA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgndG90YWxfc2NvcmUnKSxcbiAgICAgIFwidGl0bGVcIjogXCJUb3RhbCBTY29yZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVG90YWwgU2NvcmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3RhbF9zY29yZSksXG4gICAgICBleHByZXNzaW9uOiBcInRvdGFsX3Njb3JlXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgndG90YWxfc2NvcmUnKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udG90YWxfc2NvcmUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG90YWxfc2NvcmUgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWU0ZTNhM2EwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZTRlM2EzYTBcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihfdm0uX3MoX3ZtLmNvbW1lbnRzLmxlbmd0aCkgKyBcIiBcIiArIF92bS5fcyhfdm0uX2YoXCJwbHVyYWxpemVcIikoX3ZtLmNvbW1lbnRzLmxlbmd0aCwgJ2NvbW1lbnQnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW8tY29tbWVudCBjbGVhcmZpeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlmXCI6IFwiJHJvb3QudXNlci5hdXRoZW50aWNhdGVkXCJcbiAgICB9XG4gIH0sIFtfYygndGV4dGFyZWEnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uYm9keSksXG4gICAgICBleHByZXNzaW9uOiBcImJvZHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU2F5IHNvbWV0aGluZy4uLlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmJvZHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uYm9keSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHRcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMTBweFwiXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmNyZWF0ZUNvbW1lbnQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyhfdm0ucG9zdGluZykgPyBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgUG9zdFxcbiAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLWxpc3RcIlxuICB9LCBfdm0uX2woKF92bS5jb21tZW50cyksIGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWFcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGVmdFwiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKGNvbW1lbnQpXG4gICAgICB9XG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1vYmplY3QgaW1nLWF2YXRhclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogY29tbWVudC51c2VyLmRhdGEuaW1hZ2UsXG4gICAgICAgIFwiYWx0XCI6IGNvbW1lbnQudXNlci5kYXRhLm5hbWVcbiAgICAgIH1cbiAgICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1ib2R5XCJcbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogX3ZtLnVzZXJVcmwoY29tbWVudClcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhjb21tZW50LnVzZXIuZGF0YS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGNvbW1lbnQuY3JlYXRlZF9hdF9odW1hbikgKyBcIlxcblxcbiAgICAgICAgICAgICAgICBcIiksIChjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGgpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCkgKyBcIiAgXCIgKyBfdm0uX3MoX3ZtLl9mKFwicGx1cmFsaXplXCIpKGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCwgJ3JlcGx5JywgJ3JlcGxpZXMnKSkgKyBcIilcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoX3ZtLl9zKGNvbW1lbnQuYm9keSkpXSksIF92bS5fdihcIiBcIiksIChfdm0uJHJvb3QudXNlci5hdXRoZW50aWNhdGVkKSA/IF9jKCd1bCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtaW5saW5lXCJcbiAgICB9LCBbX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0udG9nZ2xlUmVwbHlGb3JtKGNvbW1lbnQuaWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5yZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50LmlkID8gJ0NhbmNlbCByZXBseScgOiAnUmVwbHknKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKGNvbW1lbnQudXNlcl9pZCA9PT0gX3ZtLiRyb290LnVzZXIuaWQpID8gX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uZGVsZXRlQ29tbWVudChjb21tZW50LmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgWyhfdm0uZGVsZXRpbmcgPT09IGNvbW1lbnQuaWQpID8gX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICAgIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBEZWxldGVcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnJlcGx5Rm9ybVZpc2libGUgPT09IGNvbW1lbnQuaWQpID8gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvLWNvbW1lbnQgY2xlYXJcIlxuICAgIH0sIFtfYygndGV4dGFyZWEnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICB2YWx1ZTogKF92bS5yZXBseUJvZHkpLFxuICAgICAgICBleHByZXNzaW9uOiBcInJlcGx5Qm9keVwiXG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiLFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlcGx5Qm9keSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0ucmVwbHlCb2R5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIxMHB4XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5jcmVhdGVSZXBseShjb21tZW50LmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgWyhfdm0ucmVwbHlpbmcpID8gX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICAgIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBSZXBseVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKGNvbW1lbnQucmVwbGllcy5kYXRhKSwgZnVuY3Rpb24ocmVwbHkpIHtcbiAgICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZWRpYVwiXG4gICAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGVmdFwiXG4gICAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKHJlcGx5KVxuICAgICAgICB9XG4gICAgICB9LCBbX2MoJ2ltZycsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtb2JqZWN0IGltZy1hdmF0YXJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcInNyY1wiOiByZXBseS51c2VyLmRhdGEuaW1hZ2UsXG4gICAgICAgICAgXCJhbHRcIjogcmVwbHkudXNlci5kYXRhLm5hbWVcbiAgICAgICAgfVxuICAgICAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1ib2R5XCJcbiAgICAgIH0sIFtfYygnYScsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImhyZWZcIjogX3ZtLnVzZXJVcmwocmVwbHkpXG4gICAgICAgIH1cbiAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHJlcGx5LnVzZXIuZGF0YS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHJlcGx5LmNyZWF0ZWRfYXRfaHVtYW4pICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCdwJywgW192bS5fdihfdm0uX3MocmVwbHkuYm9keSkpXSksIF92bS5fdihcIiBcIiksIChfdm0uJHJvb3QudXNlci5hdXRoZW50aWNhdGVkKSA/IF9jKCd1bCcsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1pbmxpbmVcIlxuICAgICAgfSwgW19jKCdsaScsIFsocmVwbHkudXNlcl9pZCA9PT0gX3ZtLiRyb290LnVzZXIuaWQpID8gX2MoJ2EnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbW1lbnQocmVwbHkuaWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBbKF92bS5kZWxldGluZyA9PT0gcmVwbHkuaWQpID8gX2MoJ2knLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiXG4gICAgICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpXSldKSA6IF92bS5fZSgpXSldKVxuICAgIH0pXSwgMildKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lZTdiMmU5NFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWVlN2IyZTk0XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDgzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtdGl0bGUgcHVsbC1sZWZ0XCJcbiAgfSwgW192bS5fdihcIkFsbCBBdGhsZXRlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLXRpdGxlIHB1bGwtcmlnaHQgY29sLW1kLTRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBhZGQtb25cIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaFF1ZXJ5KSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoUXVlcnlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBjb2wtbWQtNFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU2VhcmNoXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uc2VhcmNoUXVlcnkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc2VhcmNoUXVlcnkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFsoX3ZtLnNlYXJjaGVkLmxlbmd0aCkgPyBfYygnZGl2JywgWyhfdm0ucm9sZSA9PT0gJ293bmVyJyB8fCBfdm0ucm9sZSA9PT0gJ2FkbWluJyB8fCBfdm0ucm9sZSA9PT0gJ25hdGlvbmFsLWNvYWNoJykgPyBfYygncCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJmb250LXN0eWxlXCI6IFwiaXRhbGljXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIEF0aGxldGVzIHRoYXQgeW91IGZvbGxvdyB3aWxsIGJlIG5vdGlmaWVkLlxcbiAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnJvbGUgPT09ICdjb2FjaCcpID8gX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZm9udC1zdHlsZVwiOiBcIml0YWxpY1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBBdGhsZXRlcyB0aGF0IHlvdSByZXF1ZXN0IHRvIGZvbGxvdyB3aWxsIGJlIG5vdGlmaWVkIGFuZCBhc2tlZCB0byB2ZXJpZnkgYmVmb3JlIHlvdSBjYW4gdmlldyB0aGVpclxcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9zIGFuZCBjb21wZXRpdGlvbiByZXN1bHRzLlxcbiAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygndGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiXG4gIH0sIFtfdm0uX20oMSksIF92bS5fdihcIiBcIiksIF9jKCd0Ym9keScsIF92bS5fbCgoX3ZtLnNlYXJjaGVkKSwgZnVuY3Rpb24oYXRobGV0ZSkge1xuICAgIHJldHVybiBfYygndHInLCBbX2MoJ3RkJywgW192bS5fdihfdm0uX3MoYXRobGV0ZS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6ICdtYWlsdG86JyArIGF0aGxldGUuZW1haWxcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhhdGhsZXRlLmVtYWlsKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCBbX2MoJ2F0aGxldGUnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImF0aGxldGUtaWRcIjogYXRobGV0ZS5pZCxcbiAgICAgICAgXCJ1c2VyLWlkXCI6IF92bS51c2VySWQsXG4gICAgICAgIFwiaXMtZm9sbG93ZWRcIjogX3ZtLmZvbGxvd2VkKGF0aGxldGUpXG4gICAgICB9XG4gICAgfSldLCAxKV0pXG4gIH0pKV0pXSkgOiBfYygnZGl2JywgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZvbnQtc3R5bGVcIjogXCJpdGFsaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk5vIGF0aGxldGVzIHRvIGRpc3BsYXlcIildKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1idG5cIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiXG4gIH0pXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0aGVhZCcsIFtfYygndHInLCBbX2MoJ3RoJywgW192bS5fdihcIk5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIkVtYWlsXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0aCcpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWY5ZjgxYTZlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZjlmODFhNmVcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdGhsZXRlcy9zZWFyY2gvQXRobGV0ZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA4MzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWF0aCBmcm9tICdtYXRoanMnO1xuXG5jbGFzcyBTY29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXR0cnMgPSB7XG4gICAgICAgICAgICBleGVjdXRpb246IHtcbiAgICAgICAgICAgICAgICBvcmRlcjogMSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpZmZpY3VsdHk6IHtcbiAgICAgICAgICAgICAgICBvcmRlcjogMixcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5ldXRyYWxfZGVkdWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDIwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG90YWxfc2NvcmU6IHtcbiAgICAgICAgICAgICAgICBvcmRlcjogMTAwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmlkZW9faWQgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZGVvRmlsZW5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRJZChpZCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgc2V0VmlkZW9JZCh2aWRlb0lkKSB7XG4gICAgICAgIHRoaXMudmlkZW9faWQgPSB2aWRlb0lkO1xuICAgIH1cblxuICAgIHNldFZpZGVvRmlsZW5hbWUodmlkZW9GaWxlbmFtZSkge1xuICAgICAgICB0aGlzLnZpZGVvRmlsZW5hbWUgPSB2aWRlb0ZpbGVuYW1lO1xuICAgIH1cblxuICAgIGhhc1ZpZGVvKCkge1xuICAgICAgICByZXR1cm4gISEgdGhpcy52aWRlb19pZDtcbiAgICB9XG5cbiAgICB1cGRhdGVBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF0dHJzW2tleV0udmFsdWUgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNjb3JlS2V5cygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYXR0cnMpLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIHRoaXMuYXR0cnNbYV0ub3JkZXIgLSB0aGlzLmF0dHJzW2JdLm9yZGVyOyB9KTtcbiAgICB9XG5cbiAgICBoYXNTY29yZSgpIHtcbiAgICAgICAgKHRoaXMuYXR0cnMudG90YWxfc2NvcmUudmFsdWUgIT09IG51bGwgJiYgdGhpcy5hdHRycy50b3RhbF9zY29yZS52YWx1ZSA+IDApO1xuICAgIH1cblxuICAgIGF0dHJpYnV0ZShrZXkpIHtcbiAgICAgICAgdGhpcy5hdHRyc1trZXldLnZhbHVlO1xuICAgIH1cblxuICAgIGNvbXB1dGVUb3RhbCgpIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgdGhpcy5zY29yZUtleXMoKS5mb3JFYWNoKChjb21wb25lbnRfa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50X2tleSA9PT0gJ25ldXRyYWxfZGVkdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHN1bSA9ICh0aGlzLmF0dHJzLm5ldXRyYWxfZGVkdWN0aW9uLnZhbHVlKSA/IG1hdGguc3VidHJhY3Qoc3VtLCB0aGlzLmF0dHJzLm5ldXRyYWxfZGVkdWN0aW9uLnZhbHVlKSA6IHN1bTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50X2tleSAhPT0gJ3RvdGFsX3Njb3JlJykge1xuICAgICAgICAgICAgICAgIHN1bSA9ICh0aGlzLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlKSA/IG1hdGguYWRkKHN1bSwgdGhpcy5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSkgOiBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXR0cnMudG90YWxfc2NvcmUudmFsdWUgPSBtYXRoLnJvdW5kKHN1bSwgMyk7XG4gICAgfVxuXG4gICAgc2V0VG90YWwodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zY29yZUtleXMoKS5mb3JFYWNoKChjb21wb25lbnRfa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50X2tleSAhPT0gJ3RvdGFsX3Njb3JlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlID0gKHZhbHVlICE9PSAnJykgPyBtYXRoLnJvdW5kKHZhbHVlLCAzKSA6ICcnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9TY29yZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUnO1xuXG5jbGFzcyBUcmFtcG9saW5lU2NvcmUgZXh0ZW5kcyBTY29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGlzY2lwbGluZSA9ICd0cmFtcG9saW5lJztcbiAgICAgICAgdGhpcy5sYWJlbCA9ICdUcmFtcG9saW5lJztcbiAgICAgICAgdGhpcy5yb3V0aW5lS2V5cyA9IFsncHJlbGltX2NvbXB1bHNvcnknLCAncHJlbGltX29wdGlvbmFsJywgJ3NlbWlfZmluYWxfb3B0aW9uYWwnLCAnZmluYWxfb3B0aW9uYWwnXTtcblxuICAgICAgICB0aGlzLmF0dHJzLnRpbWVfb2ZfZmxpZ2h0ID0ge1xuICAgICAgICAgICAgb3JkZXI6IDEwLFxuICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmF0dHJzLmhvcml6b250YWxfZGlzcGxhY2VtZW50ID0ge1xuICAgICAgICAgICAgb3JkZXI6IDExLFxuICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbXBvbGluZVNjb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvVHJhbXBvbGluZVNjb3JlLmpzIiwidmFyIG1hdGggPSByZXF1aXJlKCdtYXRoanMnKTtcbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmNvbnN0IFNjb3JlTWl4aW4gPSB7XG5cbiAgICBwcm9wczoge1xuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgcm91dGluZUtleTogbnVsbCxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgZXhlY3V0aW9uOiB7XG4gICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVt0aGlzLnJvdXRpbmVzXVt0aGlzLnJvdXRpbmVLZXldLmF0dHJzLmV4ZWN1dGlvbi52YWx1ZSB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1JPVVRJTkVfUFJPUEVSVFknLCB7IGRpc2NpcGxpbmU6IHRoaXMucm91dGluZXMsIHJvdXRpbmVLZXk6IHRoaXMucm91dGluZUtleSwgY29tcG9uZW50OiAnZXhlY3V0aW9uJywgdmFsdWUgfSkgfVxuICAgICAgICB9LFxuICAgICAgICBkaWZmaWN1bHR5OiB7XG4gICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVt0aGlzLnJvdXRpbmVzXVt0aGlzLnJvdXRpbmVLZXldLmF0dHJzLmRpZmZpY3VsdHkudmFsdWUgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkgeyB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9ST1VUSU5FX1BST1BFUlRZJywgeyBkaXNjaXBsaW5lOiB0aGlzLnJvdXRpbmVzLCByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksIGNvbXBvbmVudDogJ2RpZmZpY3VsdHknLCB2YWx1ZSB9KSB9XG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVfb2ZfZmxpZ2h0OiB7XG4gICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVt0aGlzLnJvdXRpbmVzXVt0aGlzLnJvdXRpbmVLZXldLmF0dHJzLnRpbWVfb2ZfZmxpZ2h0LnZhbHVlIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfUk9VVElORV9QUk9QRVJUWScsIHsgZGlzY2lwbGluZTogdGhpcy5yb3V0aW5lcywgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LCBjb21wb25lbnQ6ICd0aW1lX29mX2ZsaWdodCcsIHZhbHVlIH0pIH1cbiAgICAgICAgfSxcbiAgICAgICAgaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uYXR0cnMuaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQudmFsdWUgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkgeyB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9ST1VUSU5FX1BST1BFUlRZJywgeyBkaXNjaXBsaW5lOiB0aGlzLnJvdXRpbmVzLCByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksIGNvbXBvbmVudDogJ2hvcml6b250YWxfZGlzcGxhY2VtZW50JywgdmFsdWUgfSkgfVxuICAgICAgICB9LFxuICAgICAgICBuZXV0cmFsX2RlZHVjdGlvbjoge1xuICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbdGhpcy5yb3V0aW5lc11bdGhpcy5yb3V0aW5lS2V5XS5hdHRycy5uZXV0cmFsX2RlZHVjdGlvbi52YWx1ZSB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1JPVVRJTkVfUFJPUEVSVFknLCB7IGRpc2NpcGxpbmU6IHRoaXMucm91dGluZXMsIHJvdXRpbmVLZXk6IHRoaXMucm91dGluZUtleSwgY29tcG9uZW50OiAnbmV1dHJhbF9kZWR1Y3Rpb24nLCB2YWx1ZSB9KSB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvdGFsX3Njb3JlOiB7XG4gICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVt0aGlzLnJvdXRpbmVzXVt0aGlzLnJvdXRpbmVLZXldLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfUk9VVElORV9QUk9QRVJUWScsIHsgZGlzY2lwbGluZTogdGhpcy5yb3V0aW5lcywgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LCBjb21wb25lbnQ6ICd0b3RhbF9zY29yZScsIHZhbHVlIH0pIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGZvcm1JZChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbdGhpcy5kaXNjaXBsaW5lLCB0aGlzLnJvdXRpbmVLZXksIGNvbXBvbmVudF0uam9pbignXycpO1xuICAgICAgICB9LFxuXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlTWl4aW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvc2NvcmUubWl4aW4uanMiXSwic291cmNlUm9vdCI6IiJ9