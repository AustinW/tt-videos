webpackJsonp([1,2],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(94);


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

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* unused harmony export mapGetters */
/* unused harmony export mapActions */
/**
 * vuex v2.2.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
};

var prototypeAccessors$1 = { state: {},namespaced: {} };

prototypeAccessors$1.state.get = function () {
  return this._rawModule.state || {}
};

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  var this$1 = this;

  // register root module (Vuex.Store options)
  this.root = new Module(rawRootModule, false);

  // register all nested modules
  if (rawRootModule.modules) {
    forEachValue(rawRootModule.modules, function (rawModule, key) {
      this$1.register([key], rawModule, false);
    });
  }
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update(this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  var parent = this.get(path.slice(0, -1));
  var newModule = new Module(rawModule, runtime);
  parent.addChild(path[path.length - 1], newModule);

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (targetModule, newModule) {
  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed'
        );
        return
      }
      update(targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

  var state = options.state; if ( state === void 0 ) state = {};
  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); });
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  assert(false, "Use store.replaceState() to explicit replace store state.");
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    console.error(("[vuex] unknown mutation type: " + type));
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (options && options.silent) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var entry = this._actions[type];
  if (!entry) {
    console.error(("[vuex] unknown action type: " + type));
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers;
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  assert(typeof getter === 'function', "store.watch only accepts a function.");
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule) {
  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path));
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (namespace) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var namespacedType = namespace + key;
    registerAction(store, namespacedType, action, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler(local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler({
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    console.error(("[vuex] duplicate getter key: " + type));
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue) {
    console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
    );
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
        return
      }
      return this.$store.commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (!(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
        return
      }
      return this.$store.dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (!module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.2.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions
};

/* harmony default export */ __webpack_exports__["a"] = index_esm;


/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_filters__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vee_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(345);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(344);




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('video-upload', __webpack_require__(796));
Vue.component('multiple-video-upload', __webpack_require__(791));
Vue.component('video-player', __webpack_require__(795));
Vue.component('video-voting', __webpack_require__(797));
Vue.component('video-comments', __webpack_require__(794));
Vue.component('competition-form', __webpack_require__(790));
Vue.component('routine-video', __webpack_require__(792));
Vue.component('trampoline-score', __webpack_require__(799));
Vue.component('dmt-score', __webpack_require__(798));
Vue.component('tumbling-score', __webpack_require__(800));
Vue.component('small-video', __webpack_require__(793));

Vue.use(__webpack_require__(124));
Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue2_filters___default.a);
Vue.use(__webpack_require__(121));
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

/***/ 314:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 32:
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

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TrampolineScore__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DoubleMiniScore__ = __webpack_require__(131);
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






/* harmony default export */ __webpack_exports__["default"] = {
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

__WEBPACK_IMPORTED_MODULE_4_vee_validate__["Validator"].updateDictionary(dictionary);
__WEBPACK_IMPORTED_MODULE_4_vee_validate__["Validator"].installDateTimeValidators(__WEBPACK_IMPORTED_MODULE_0_moment___default.a);

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
//
//
//
//
//
//
//
//
//
//
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
        }
    },

    methods: {
        removeAttachment: function removeAttachment() {
            this.$store.commit('REMOVE_ATTACHMENT', {
                routines: this.routines,
                routineKey: this.routineKey
            });

            this.uploaded = false;
        },
        uniqueId: function uniqueId() {
            return 'video-upload' + this.routines + '-' + this.routineKey;
        }
    },

    created: function created() {
        var _this = this;

        var _self = this;

        this.$upload.new('video-upload' + this.routines + '-' + this.routineKey, {
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
        this.$upload.reset('video-upload' + this.routines + '-' + this.routineKey, {
            url: '/upload/multiple',
            currentFiles: 0,
            dropzoneId: 'video-upload-dropzone'
        });
    },
    beforeDestroy: function beforeDestroy() {
        this.$upload.reset('video-upload' + this.routines + '-' + this.routineKey, {
            dropzoneId: null
        });
    }
};

/***/ }),

/***/ 336:
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



/* harmony default export */ __webpack_exports__["default"] = {
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
};

/***/ }),

/***/ 337:
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

/***/ 338:
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

/***/ 339:
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

/***/ 340:
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

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(96);
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




/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            discipline: 'double mini',
            routines: 'doubleMiniPasses'
        };
    },


    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__["a" /* default */]]
};

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TrampolineScore__ = __webpack_require__(95);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            discipline: 'trampoline',
            routines: 'trampolineRoutines'
        };
    },


    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__["a" /* default */]]
};

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(96);
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




/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            discipline: 'tumbling',
            routines: 'tumblingPasses'
        };
    },


    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__["a" /* default */]]
};

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(88);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = __webpack_require__(87);

__webpack_require__(123);

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

window.axios = __webpack_require__(122);

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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TrampolineScore__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DoubleMiniScore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TumblingScore__ = __webpack_require__(69);









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({

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
                    store.commit('SET_TRAMPOLINE_SCORES', { scores: competition.trampolineScores.data });
                }

                if (competition.doubleMiniScores.data.length) {
                    store.commit('SET_DOUBLE_MINI_SCORES', { scores: competition.doubleMiniScores.data });
                }

                if (competition.tumblingScores.data.length) {
                    store.commit('SET_TUMBLING_SCORES', { scores: competition.tumblingScores.data });
                }
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
                scoreClass = _ref2.scoreClass;

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
                console.log(scoreInstance.videoFilename);
                state.tumblingPasses[score.routine] = scoreInstance;
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

        SET_TRAMPOLINE_SCORES: function SET_TRAMPOLINE_SCORES(state, _ref4) {
            var scores = _ref4.scores;

            return store.commit('SET_SCORES', {
                scores: scores,
                scoreClass: __WEBPACK_IMPORTED_MODULE_3__TrampolineScore__["a" /* default */]
            });
        },

        SET_DOUBLE_MINI_SCORES: function SET_DOUBLE_MINI_SCORES(state, _ref5) {
            var scores = _ref5.scores;

            return store.commit('SET_SCORES', {
                scores: scores,
                scoreClass: __WEBPACK_IMPORTED_MODULE_4__DoubleMiniScore__["a" /* default */]
            });
        },

        SET_TUMBLING_SCORES: function SET_TUMBLING_SCORES(state, _ref6) {
            var scores = _ref6.scores;

            return store.commit('SET_SCORES', {
                scores: scores,
                scoreClass: __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */]
            });
        },

        REMOVE_ATTACHMENT: function REMOVE_ATTACHMENT(state, _ref7) {
            var routines = _ref7.routines,
                routineKey = _ref7.routineKey;

            state[routines][routineKey].setVideoId(null);
            state[routines][routineKey].setVideoFilename(null);
        },

        ATTACH_VIDEO: function ATTACH_VIDEO(state, _ref8) {
            var routines = _ref8.routines,
                routineKey = _ref8.routineKey,
                video = _ref8.video;

            state[routines][routineKey].setVideoId(video.id);
            state[routines][routineKey].setVideoFilename(video.title);
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

/* harmony default export */ __webpack_exports__["a"] = store;

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(94);


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

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(333),
  /* template */
  __webpack_require__(806),
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

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(334),
  /* template */
  __webpack_require__(801),
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

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(335),
  /* template */
  __webpack_require__(805),
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

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(336),
  /* template */
  __webpack_require__(807),
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

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(337),
  /* template */
  __webpack_require__(811),
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

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(338),
  /* template */
  __webpack_require__(804),
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

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(339),
  /* template */
  __webpack_require__(808),
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

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(340),
  /* template */
  __webpack_require__(803),
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

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(341),
  /* template */
  __webpack_require__(809),
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

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(342),
  /* template */
  __webpack_require__(810),
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

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(343),
  /* template */
  __webpack_require__(802),
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

/***/ 801:
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

/***/ 802:
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

/***/ 803:
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

/***/ 804:
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

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.uploaded && !_vm.hasAttachment),
      expression: "!uploaded && !hasAttachment"
    }],
    staticClass: "btn btn-default btn-xs",
    attrs: {
      "disabled": _vm.$upload.meta('video-upload' + _vm.routines + '-' + _vm.routineKey).status === 'sending',
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.$upload.select('video-upload' + _vm.routines + '-' + _vm.routineKey)
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
      value: (_vm.$upload.meta('video-upload' + _vm.routines + '-' + _vm.routineKey).status === 'sending'),
      expression: "$upload.meta('video-upload' + routines + '-' + routineKey).status === 'sending'"
    }],
    staticClass: "upload-progress progress"
  }, [_c('div', {
    staticClass: "progress-bar",
    style: ('width: ' + _vm.$upload.meta('video-upload' + _vm.routines + '-' + _vm.routineKey).percentComplete + '%;')
  }, [_vm._v("\n            " + _vm._s(_vm.$upload.meta('video-upload' + _vm.routines + '-' + _vm.routineKey).percentComplete) + "% Complete\n        ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b6c0540", module.exports)
  }
}

/***/ }),

/***/ 806:
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

/***/ 807:
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
    staticClass: "glyphicon glyphicon-play"
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
      "data-setup": "{\"fluid\": true}",
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

/***/ 808:
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

/***/ 809:
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

/***/ 810:
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

/***/ 811:
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

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(313);
module.exports = __webpack_require__(314);


/***/ }),

/***/ 94:
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

/* harmony default export */ __webpack_exports__["a"] = Score;

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(94);


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

/* harmony default export */ __webpack_exports__["a"] = TrampolineScore;

/***/ }),

/***/ 96:
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

/* harmony default export */ __webpack_exports__["a"] = ScoreMixin;

/***/ })

},[815]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0RvdWJsZU1pbmlTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZXgvZGlzdC92dWV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3M/MjY5MSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy9Db21wZXRpdGlvbkZvcm0udnVlIiwid2VicGFjazovLy9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vUm91dGluZVZpZGVvLnZ1ZSIsIndlYnBhY2s6Ly8vU21hbGxWaWRlby52dWUiLCJ3ZWJwYWNrOi8vL1ZpZGVvQ29tbWVudHMudnVlIiwid2VicGFjazovLy9WaWRlb1BsYXllci52dWUiLCJ3ZWJwYWNrOi8vL1ZpZGVvVXBsb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vVmlkZW9Wb3RpbmcudnVlIiwid2VicGFjazovLy9Eb3VibGVNaW5pU2NvcmUudnVlIiwid2VicGFjazovLy9UcmFtcG9saW5lU2NvcmUudnVlIiwid2VicGFjazovLy9UdW1ibGluZ1Njb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvVHVtYmxpbmdTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UcmFtcG9saW5lU2NvcmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlPzRiZTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZT8wZmQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWU/YWM5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlPzRjODgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWU/MGQ1NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZT84ZDI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZT8wZWNlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWU/NDA2NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWU/ZjZmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWU/MTk5YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWU/N2U3MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1Njb3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvVHJhbXBvbGluZVNjb3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Njb3JlLm1peGluLmpzIl0sIm5hbWVzIjpbIkRvdWJsZU1pbmlTY29yZSIsImRpc2NpcGxpbmUiLCJsYWJlbCIsInJvdXRpbmVLZXlzIiwicmVxdWlyZSIsIlZ1ZSIsImNvbXBvbmVudCIsInVzZSIsIndpbmRvdyIsIkV2ZW50IiwiaW5zdGFsbCIsIm9wdGlvbnMiLCJnZXRKc29uIiwicmVzcG9uc2UiLCJqc29uIiwiaHR0cCIsImhlYWRlcnMiLCJjb21tb24iLCJMYXJhdmVsIiwiY3NyZlRva2VuIiwiYXBwIiwiZWwiLCJkYXRhIiwic3RvcmUiLCJfIiwiJCIsImpRdWVyeSIsImF4aW9zIiwiZGVmYXVsdHMiLCJWdWV4IiwiU3RvcmUiLCJzdHJpY3QiLCJzdGF0ZSIsImNvbXBldGl0aW9uX2lkIiwidGl0bGUiLCJsb2NhdGlvbiIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInRyYW1wb2xpbmVSb3V0aW5lcyIsInByZWxpbV9jb21wdWxzb3J5IiwicHJlbGltX29wdGlvbmFsIiwic2VtaV9maW5hbF9vcHRpb25hbCIsImZpbmFsX29wdGlvbmFsIiwiZG91YmxlTWluaVBhc3NlcyIsInByZWxpbV9wYXNzXzEiLCJwcmVsaW1fcGFzc18yIiwiZmluYWxfcGFzc18zIiwiZmluYWxfcGFzc180IiwidHVtYmxpbmdQYXNzZXMiLCJhY3Rpb25zIiwiTE9BRF9DT01QRVRJVElPTiIsImNvbnRleHQiLCJjb21wZXRpdGlvbklkIiwiZ2V0IiwidGhlbiIsImNvbXBldGl0aW9uIiwiY29uc29sZSIsImxvZyIsImNvbW1pdCIsImlkIiwiZmllbGRzIiwidHJhbXBvbGluZVNjb3JlcyIsImxlbmd0aCIsInNjb3JlcyIsImRvdWJsZU1pbmlTY29yZXMiLCJ0dW1ibGluZ1Njb3JlcyIsIm11dGF0aW9ucyIsIlNFVF9DT01QRVRJVElPTl9JRCIsIlNFVF9DT01QRVRJVElPTl9GSUVMRFMiLCJtb21lbnQiLCJkYXRlIiwiZm9ybWF0IiwiU0VUX1RJVExFIiwiU0VUX0xPQ0FUSU9OIiwiU0VUX1NUQVJUX0RBVEUiLCJTRVRfRU5EX0RBVEUiLCJTRVRfU0NPUkVTIiwic2NvcmVDbGFzcyIsImZvckVhY2giLCJzY29yZSIsInNjb3JlSW5zdGFuY2UiLCJzY29yZU1hcCIsIk9iamVjdCIsImtleXMiLCJhdHRycyIsInNjb3JlUGFydCIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJzZXRJZCIsInNldFZpZGVvSWQiLCJ2aWRlb19pZCIsInZpZGVvIiwiaGFzT3duUHJvcGVydHkiLCJzZXRWaWRlb0ZpbGVuYW1lIiwidmlkZW9GaWxlbmFtZSIsInJvdXRpbmUiLCJTRVRfUk9VVElORV9QUk9QRVJUWSIsInJvdXRpbmVLZXkiLCJ2YWx1ZSIsImNvbXB1dGVUb3RhbCIsInNldFRvdGFsIiwiU0VUX1RSQU1QT0xJTkVfU0NPUkVTIiwiVHJhbXBvbGluZVNjb3JlIiwiU0VUX0RPVUJMRV9NSU5JX1NDT1JFUyIsIlNFVF9UVU1CTElOR19TQ09SRVMiLCJUdW1ibGluZ1Njb3JlIiwiUkVNT1ZFX0FUVEFDSE1FTlQiLCJyb3V0aW5lcyIsIkFUVEFDSF9WSURFTyIsImdldHRlcnMiLCJldmVudENoZWNrZWQiLCJjaGVja2VkIiwicGFyc2VJbnQiLCJ0b3RhbF9zY29yZSIsInZhbGlkUm91dGluZXMiLCJ2YWxpZCIsImFsbERhdGEiLCJ0cmFtcG9saW5lIiwiZG10IiwidHVtYmxpbmciLCJtb2R1bGVzIiwiU2NvcmUiLCJleGVjdXRpb24iLCJvcmRlciIsImRpZmZpY3VsdHkiLCJuZXV0cmFsX2RlZHVjdGlvbiIsInZpZGVvSWQiLCJhdHRyaWJ1dGVzIiwia2V5Iiwic29ydCIsImEiLCJiIiwic3VtIiwic2NvcmVLZXlzIiwiY29tcG9uZW50X2tleSIsIm1hdGgiLCJzdWJ0cmFjdCIsImFkZCIsInJvdW5kIiwidGltZV9vZl9mbGlnaHQiLCJob3Jpem9udGFsX2Rpc3BsYWNlbWVudCIsIlNjb3JlTWl4aW4iLCJwcm9wcyIsImNvbXB1dGVkIiwiJHN0b3JlIiwic2V0IiwibWV0aG9kcyIsImZvcm1JZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTs7SUFFTUEsZTs7O0FBQ0YsK0JBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLGFBQWI7QUFDQSxjQUFLQyxXQUFMLEdBQW1CLENBQUMsZUFBRCxFQUFrQixlQUFsQixFQUFtQyxjQUFuQyxFQUFtRCxjQUFuRCxDQUFuQjtBQUpVO0FBS2I7OztFQU55Qix1RDs7QUFTOUIsd0RBQWVILGVBQWYsQzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGlC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O0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsOEVBQThFO0FBQzlFLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2hNQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7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QUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDampCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNoRUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pOQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNySkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxL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REYsRUFDYTtBQUNkLG1CQUFPLENBQUMsS0FBS0wsVUFBTixFQUFrQixLQUFLK0YsVUFBdkIsRUFBbUMxRixTQUFuQyxFQUE4QzZJLElBQTlDLENBQW1ELEdBQW5ELENBQVA7QUFDSDtBQUhJO0FBbENNLENBQW5COztBQTBDQSx3REFBZVAsVUFBZixDIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcblxuY2xhc3MgRG91YmxlTWluaVNjb3JlIGV4dGVuZHMgU2NvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRpc2NpcGxpbmUgPSAnZG10JztcbiAgICAgICAgdGhpcy5sYWJlbCA9ICdEb3VibGUgTWluaSc7XG4gICAgICAgIHRoaXMucm91dGluZUtleXMgPSBbJ3ByZWxpbV9wYXNzXzEnLCAncHJlbGltX3Bhc3NfMicsICdmaW5hbF9wYXNzXzMnLCAnZmluYWxfcGFzc180J107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb3VibGVNaW5pU2NvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9Eb3VibGVNaW5pU2NvcmUuanMiLCIvKipcbiAqIHZ1ZXggdjIuMi4xXG4gKiAoYykgMjAxNyBFdmFuIFlvdVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbnZhciBhcHBseU1peGluID0gZnVuY3Rpb24gKFZ1ZSkge1xuICB2YXIgdmVyc2lvbiA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzBdKTtcblxuICBpZiAodmVyc2lvbiA+PSAyKSB7XG4gICAgdmFyIHVzZXNJbml0ID0gVnVlLmNvbmZpZy5fbGlmZWN5Y2xlSG9va3MuaW5kZXhPZignaW5pdCcpID4gLTE7XG4gICAgVnVlLm1peGluKHVzZXNJbml0ID8geyBpbml0OiB2dWV4SW5pdCB9IDogeyBiZWZvcmVDcmVhdGU6IHZ1ZXhJbml0IH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIG92ZXJyaWRlIGluaXQgYW5kIGluamVjdCB2dWV4IGluaXQgcHJvY2VkdXJlXG4gICAgLy8gZm9yIDEueCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICB2YXIgX2luaXQgPSBWdWUucHJvdG90eXBlLl9pbml0O1xuICAgIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgICAgIG9wdGlvbnMuaW5pdCA9IG9wdGlvbnMuaW5pdFxuICAgICAgICA/IFt2dWV4SW5pdF0uY29uY2F0KG9wdGlvbnMuaW5pdClcbiAgICAgICAgOiB2dWV4SW5pdDtcbiAgICAgIF9pbml0LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWdWV4IGluaXQgaG9vaywgaW5qZWN0ZWQgaW50byBlYWNoIGluc3RhbmNlcyBpbml0IGhvb2tzIGxpc3QuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHZ1ZXhJbml0ICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnM7XG4gICAgLy8gc3RvcmUgaW5qZWN0aW9uXG4gICAgaWYgKG9wdGlvbnMuc3RvcmUpIHtcbiAgICAgIHRoaXMuJHN0b3JlID0gb3B0aW9ucy5zdG9yZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LiRzdG9yZSkge1xuICAgICAgdGhpcy4kc3RvcmUgPSBvcHRpb25zLnBhcmVudC4kc3RvcmU7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZGV2dG9vbEhvb2sgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuZnVuY3Rpb24gZGV2dG9vbFBsdWdpbiAoc3RvcmUpIHtcbiAgaWYgKCFkZXZ0b29sSG9vaykgeyByZXR1cm4gfVxuXG4gIHN0b3JlLl9kZXZ0b29sSG9vayA9IGRldnRvb2xIb29rO1xuXG4gIGRldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6aW5pdCcsIHN0b3JlKTtcblxuICBkZXZ0b29sSG9vay5vbigndnVleDp0cmF2ZWwtdG8tc3RhdGUnLCBmdW5jdGlvbiAodGFyZ2V0U3RhdGUpIHtcbiAgICBzdG9yZS5yZXBsYWNlU3RhdGUodGFyZ2V0U3RhdGUpO1xuICB9KTtcblxuICBzdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG11dGF0aW9uLCBzdGF0ZSkge1xuICAgIGRldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6bXV0YXRpb24nLCBtdXRhdGlvbiwgc3RhdGUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IGl0ZW0gdGhhdCBwYXNzIHRoZSB0ZXN0XG4gKiBieSBzZWNvbmQgYXJndW1lbnQgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcmV0dXJuIHsqfVxuICovXG4vKipcbiAqIERlZXAgY29weSB0aGUgZ2l2ZW4gb2JqZWN0IGNvbnNpZGVyaW5nIGNpcmN1bGFyIHN0cnVjdHVyZS5cbiAqIFRoaXMgZnVuY3Rpb24gY2FjaGVzIGFsbCBuZXN0ZWQgb2JqZWN0cyBhbmQgaXRzIGNvcGllcy5cbiAqIElmIGl0IGRldGVjdHMgY2lyY3VsYXIgc3RydWN0dXJlLCB1c2UgY2FjaGVkIGNvcHkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcC5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBjYWNoZVxuICogQHJldHVybiB7Kn1cbiAqL1xuXG5cbi8qKlxuICogZm9yRWFjaCBmb3Igb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hWYWx1ZSAob2JqLCBmbikge1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZm4ob2JqW2tleV0sIGtleSk7IH0pO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgdmFsLnRoZW4gPT09ICdmdW5jdGlvbidcbn1cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kaXRpb24sIG1zZykge1xuICBpZiAoIWNvbmRpdGlvbikgeyB0aHJvdyBuZXcgRXJyb3IoKFwiW3Z1ZXhdIFwiICsgbXNnKSkgfVxufVxuXG52YXIgTW9kdWxlID0gZnVuY3Rpb24gTW9kdWxlIChyYXdNb2R1bGUsIHJ1bnRpbWUpIHtcbiAgdGhpcy5ydW50aW1lID0gcnVudGltZTtcbiAgdGhpcy5fY2hpbGRyZW4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9yYXdNb2R1bGUgPSByYXdNb2R1bGU7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzJDEgPSB7IHN0YXRlOiB7fSxuYW1lc3BhY2VkOiB7fSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5zdGF0ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9yYXdNb2R1bGUuc3RhdGUgfHwge31cbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLm5hbWVzcGFjZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISF0aGlzLl9yYXdNb2R1bGUubmFtZXNwYWNlZFxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIGFkZENoaWxkIChrZXksIG1vZHVsZSkge1xuICB0aGlzLl9jaGlsZHJlbltrZXldID0gbW9kdWxlO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIHJlbW92ZUNoaWxkIChrZXkpIHtcbiAgZGVsZXRlIHRoaXMuX2NoaWxkcmVuW2tleV07XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24gZ2V0Q2hpbGQgKGtleSkge1xuICByZXR1cm4gdGhpcy5fY2hpbGRyZW5ba2V5XVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKHJhd01vZHVsZSkge1xuICB0aGlzLl9yYXdNb2R1bGUubmFtZXNwYWNlZCA9IHJhd01vZHVsZS5uYW1lc3BhY2VkO1xuICBpZiAocmF3TW9kdWxlLmFjdGlvbnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucyA9IHJhd01vZHVsZS5hY3Rpb25zO1xuICB9XG4gIGlmIChyYXdNb2R1bGUubXV0YXRpb25zKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucyA9IHJhd01vZHVsZS5tdXRhdGlvbnM7XG4gIH1cbiAgaWYgKHJhd01vZHVsZS5nZXR0ZXJzKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLmdldHRlcnMgPSByYXdNb2R1bGUuZ2V0dGVycztcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiBmb3JFYWNoQ2hpbGQgKGZuKSB7XG4gIGZvckVhY2hWYWx1ZSh0aGlzLl9jaGlsZHJlbiwgZm4pO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoR2V0dGVyID0gZnVuY3Rpb24gZm9yRWFjaEdldHRlciAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzLCBmbik7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaEFjdGlvbiA9IGZ1bmN0aW9uIGZvckVhY2hBY3Rpb24gKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucywgZm4pO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hNdXRhdGlvbiA9IGZ1bmN0aW9uIGZvckVhY2hNdXRhdGlvbiAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucywgZm4pO1xuICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggTW9kdWxlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzJDEgKTtcblxudmFyIE1vZHVsZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiBNb2R1bGVDb2xsZWN0aW9uIChyYXdSb290TW9kdWxlKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIHJlZ2lzdGVyIHJvb3QgbW9kdWxlIChWdWV4LlN0b3JlIG9wdGlvbnMpXG4gIHRoaXMucm9vdCA9IG5ldyBNb2R1bGUocmF3Um9vdE1vZHVsZSwgZmFsc2UpO1xuXG4gIC8vIHJlZ2lzdGVyIGFsbCBuZXN0ZWQgbW9kdWxlc1xuICBpZiAocmF3Um9vdE1vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHJhd1Jvb3RNb2R1bGUubW9kdWxlcywgZnVuY3Rpb24gKHJhd01vZHVsZSwga2V5KSB7XG4gICAgICB0aGlzJDEucmVnaXN0ZXIoW2tleV0sIHJhd01vZHVsZSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVkdWNlKGZ1bmN0aW9uIChtb2R1bGUsIGtleSkge1xuICAgIHJldHVybiBtb2R1bGUuZ2V0Q2hpbGQoa2V5KVxuICB9LCB0aGlzLnJvb3QpXG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXROYW1lc3BhY2UgPSBmdW5jdGlvbiBnZXROYW1lc3BhY2UgKHBhdGgpIHtcbiAgdmFyIG1vZHVsZSA9IHRoaXMucm9vdDtcbiAgcmV0dXJuIHBhdGgucmVkdWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGtleSkge1xuICAgIG1vZHVsZSA9IG1vZHVsZS5nZXRDaGlsZChrZXkpO1xuICAgIHJldHVybiBuYW1lc3BhY2UgKyAobW9kdWxlLm5hbWVzcGFjZWQgPyBrZXkgKyAnLycgOiAnJylcbiAgfSwgJycpXG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUkMSAocmF3Um9vdE1vZHVsZSkge1xuICB1cGRhdGUodGhpcy5yb290LCByYXdSb290TW9kdWxlKTtcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIgKHBhdGgsIHJhd01vZHVsZSwgcnVudGltZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggcnVudGltZSA9PT0gdm9pZCAwICkgcnVudGltZSA9IHRydWU7XG5cbiAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgdmFyIG5ld01vZHVsZSA9IG5ldyBNb2R1bGUocmF3TW9kdWxlLCBydW50aW1lKTtcbiAgcGFyZW50LmFkZENoaWxkKHBhdGhbcGF0aC5sZW5ndGggLSAxXSwgbmV3TW9kdWxlKTtcblxuICAvLyByZWdpc3RlciBuZXN0ZWQgbW9kdWxlc1xuICBpZiAocmF3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICBmb3JFYWNoVmFsdWUocmF3TW9kdWxlLm1vZHVsZXMsIGZ1bmN0aW9uIChyYXdDaGlsZE1vZHVsZSwga2V5KSB7XG4gICAgICB0aGlzJDEucmVnaXN0ZXIocGF0aC5jb25jYXQoa2V5KSwgcmF3Q2hpbGRNb2R1bGUsIHJ1bnRpbWUpO1xuICAgIH0pO1xuICB9XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gdW5yZWdpc3RlciAocGF0aCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5nZXQocGF0aC5zbGljZSgwLCAtMSkpO1xuICB2YXIga2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICBpZiAoIXBhcmVudC5nZXRDaGlsZChrZXkpLnJ1bnRpbWUpIHsgcmV0dXJuIH1cblxuICBwYXJlbnQucmVtb3ZlQ2hpbGQoa2V5KTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZSAodGFyZ2V0TW9kdWxlLCBuZXdNb2R1bGUpIHtcbiAgLy8gdXBkYXRlIHRhcmdldCBtb2R1bGVcbiAgdGFyZ2V0TW9kdWxlLnVwZGF0ZShuZXdNb2R1bGUpO1xuXG4gIC8vIHVwZGF0ZSBuZXN0ZWQgbW9kdWxlc1xuICBpZiAobmV3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmV3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICAgIGlmICghdGFyZ2V0TW9kdWxlLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiW3Z1ZXhdIHRyeWluZyB0byBhZGQgYSBuZXcgbW9kdWxlICdcIiArIGtleSArIFwiJyBvbiBob3QgcmVsb2FkaW5nLCBcIiArXG4gICAgICAgICAgJ21hbnVhbCByZWxvYWQgaXMgbmVlZGVkJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZSh0YXJnZXRNb2R1bGUuZ2V0Q2hpbGQoa2V5KSwgbmV3TW9kdWxlLm1vZHVsZXNba2V5XSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBWdWU7IC8vIGJpbmQgb24gaW5zdGFsbFxuXG52YXIgU3RvcmUgPSBmdW5jdGlvbiBTdG9yZSAob3B0aW9ucykge1xuICB2YXIgdGhpcyQxID0gdGhpcztcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgYXNzZXJ0KFZ1ZSwgXCJtdXN0IGNhbGwgVnVlLnVzZShWdWV4KSBiZWZvcmUgY3JlYXRpbmcgYSBzdG9yZSBpbnN0YW5jZS5cIik7XG4gIGFzc2VydCh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcsIFwidnVleCByZXF1aXJlcyBhIFByb21pc2UgcG9seWZpbGwgaW4gdGhpcyBicm93c2VyLlwiKTtcblxuICB2YXIgc3RhdGUgPSBvcHRpb25zLnN0YXRlOyBpZiAoIHN0YXRlID09PSB2b2lkIDAgKSBzdGF0ZSA9IHt9O1xuICB2YXIgcGx1Z2lucyA9IG9wdGlvbnMucGx1Z2luczsgaWYgKCBwbHVnaW5zID09PSB2b2lkIDAgKSBwbHVnaW5zID0gW107XG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdDsgaWYgKCBzdHJpY3QgPT09IHZvaWQgMCApIHN0cmljdCA9IGZhbHNlO1xuXG4gIC8vIHN0b3JlIGludGVybmFsIHN0YXRlXG4gIHRoaXMuX2NvbW1pdHRpbmcgPSBmYWxzZTtcbiAgdGhpcy5fYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX211dGF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3dyYXBwZWRHZXR0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fbW9kdWxlcyA9IG5ldyBNb2R1bGVDb2xsZWN0aW9uKG9wdGlvbnMpO1xuICB0aGlzLl9tb2R1bGVzTmFtZXNwYWNlTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgdGhpcy5fd2F0Y2hlclZNID0gbmV3IFZ1ZSgpO1xuXG4gIC8vIGJpbmQgY29tbWl0IGFuZCBkaXNwYXRjaCB0byBzZWxmXG4gIHZhciBzdG9yZSA9IHRoaXM7XG4gIHZhciByZWYgPSB0aGlzO1xuICB2YXIgZGlzcGF0Y2ggPSByZWYuZGlzcGF0Y2g7XG4gIHZhciBjb21taXQgPSByZWYuY29tbWl0O1xuICB0aGlzLmRpc3BhdGNoID0gZnVuY3Rpb24gYm91bmREaXNwYXRjaCAodHlwZSwgcGF5bG9hZCkge1xuICAgIHJldHVybiBkaXNwYXRjaC5jYWxsKHN0b3JlLCB0eXBlLCBwYXlsb2FkKVxuICB9O1xuICB0aGlzLmNvbW1pdCA9IGZ1bmN0aW9uIGJvdW5kQ29tbWl0ICh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbW1pdC5jYWxsKHN0b3JlLCB0eXBlLCBwYXlsb2FkLCBvcHRpb25zKVxuICB9O1xuXG4gIC8vIHN0cmljdCBtb2RlXG4gIHRoaXMuc3RyaWN0ID0gc3RyaWN0O1xuXG4gIC8vIGluaXQgcm9vdCBtb2R1bGUuXG4gIC8vIHRoaXMgYWxzbyByZWN1cnNpdmVseSByZWdpc3RlcnMgYWxsIHN1Yi1tb2R1bGVzXG4gIC8vIGFuZCBjb2xsZWN0cyBhbGwgbW9kdWxlIGdldHRlcnMgaW5zaWRlIHRoaXMuX3dyYXBwZWRHZXR0ZXJzXG4gIGluc3RhbGxNb2R1bGUodGhpcywgc3RhdGUsIFtdLCB0aGlzLl9tb2R1bGVzLnJvb3QpO1xuXG4gIC8vIGluaXRpYWxpemUgdGhlIHN0b3JlIHZtLCB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHJlYWN0aXZpdHlcbiAgLy8gKGFsc28gcmVnaXN0ZXJzIF93cmFwcGVkR2V0dGVycyBhcyBjb21wdXRlZCBwcm9wZXJ0aWVzKVxuICByZXNldFN0b3JlVk0odGhpcywgc3RhdGUpO1xuXG4gIC8vIGFwcGx5IHBsdWdpbnNcbiAgcGx1Z2lucy5jb25jYXQoZGV2dG9vbFBsdWdpbikuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7IHJldHVybiBwbHVnaW4odGhpcyQxKTsgfSk7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBzdGF0ZToge30gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzLnN0YXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3ZtLl9kYXRhLiQkc3RhdGVcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5zdGF0ZS5zZXQgPSBmdW5jdGlvbiAodikge1xuICBhc3NlcnQoZmFsc2UsIFwiVXNlIHN0b3JlLnJlcGxhY2VTdGF0ZSgpIHRvIGV4cGxpY2l0IHJlcGxhY2Ugc3RvcmUgc3RhdGUuXCIpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uIGNvbW1pdCAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBjb21taXRcbiAgdmFyIHJlZiA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgdmFyIHR5cGUgPSByZWYudHlwZTtcbiAgICB2YXIgcGF5bG9hZCA9IHJlZi5wYXlsb2FkO1xuICAgIHZhciBvcHRpb25zID0gcmVmLm9wdGlvbnM7XG5cbiAgdmFyIG11dGF0aW9uID0geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkIH07XG4gIHZhciBlbnRyeSA9IHRoaXMuX211dGF0aW9uc1t0eXBlXTtcbiAgaWYgKCFlbnRyeSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbXV0YXRpb24gdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgZW50cnkuZm9yRWFjaChmdW5jdGlvbiBjb21taXRJdGVyYXRvciAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihwYXlsb2FkKTtcbiAgICB9KTtcbiAgfSk7XG4gIHRoaXMuX3N1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViKG11dGF0aW9uLCB0aGlzJDEuc3RhdGUpOyB9KTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNpbGVudCkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW3Z1ZXhdIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSArIFwiLiBTaWxlbnQgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIFwiICtcbiAgICAgICdVc2UgdGhlIGZpbHRlciBmdW5jdGlvbmFsaXR5IGluIHRoZSB2dWUtZGV2dG9vbHMnXG4gICAgKTtcbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2ggKF90eXBlLCBfcGF5bG9hZCkge1xuICAvLyBjaGVjayBvYmplY3Qtc3R5bGUgZGlzcGF0Y2hcbiAgdmFyIHJlZiA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkKTtcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciBwYXlsb2FkID0gcmVmLnBheWxvYWQ7XG5cbiAgdmFyIGVudHJ5ID0gdGhpcy5fYWN0aW9uc1t0eXBlXTtcbiAgaWYgKCFlbnRyeSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gYWN0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIHJldHVyblxuICB9XG4gIHJldHVybiBlbnRyeS5sZW5ndGggPiAxXG4gICAgPyBQcm9taXNlLmFsbChlbnRyeS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIocGF5bG9hZCk7IH0pKVxuICAgIDogZW50cnlbMF0ocGF5bG9hZClcbn07XG5cblN0b3JlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUgKGZuKSB7XG4gIHZhciBzdWJzID0gdGhpcy5fc3Vic2NyaWJlcnM7XG4gIGlmIChzdWJzLmluZGV4T2YoZm4pIDwgMCkge1xuICAgIHN1YnMucHVzaChmbik7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9IHN1YnMuaW5kZXhPZihmbik7XG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgc3Vicy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59O1xuXG5TdG9yZS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiB3YXRjaCAoZ2V0dGVyLCBjYiwgb3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGFzc2VydCh0eXBlb2YgZ2V0dGVyID09PSAnZnVuY3Rpb24nLCBcInN0b3JlLndhdGNoIG9ubHkgYWNjZXB0cyBhIGZ1bmN0aW9uLlwiKTtcbiAgcmV0dXJuIHRoaXMuX3dhdGNoZXJWTS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0dGVyKHRoaXMkMS5zdGF0ZSwgdGhpcyQxLmdldHRlcnMpOyB9LCBjYiwgb3B0aW9ucylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbiByZXBsYWNlU3RhdGUgKHN0YXRlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLl92bS5fZGF0YS4kJHN0YXRlID0gc3RhdGU7XG4gIH0pO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGUgKHBhdGgsIHJhd01vZHVsZSkge1xuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7IHBhdGggPSBbcGF0aF07IH1cbiAgYXNzZXJ0KEFycmF5LmlzQXJyYXkocGF0aCksIFwibW9kdWxlIHBhdGggbXVzdCBiZSBhIHN0cmluZyBvciBhbiBBcnJheS5cIik7XG4gIHRoaXMuX21vZHVsZXMucmVnaXN0ZXIocGF0aCwgcmF3TW9kdWxlKTtcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCB0aGlzLnN0YXRlLCBwYXRoLCB0aGlzLl9tb2R1bGVzLmdldChwYXRoKSk7XG4gIC8vIHJlc2V0IHN0b3JlIHRvIHVwZGF0ZSBnZXR0ZXJzLi4uXG4gIHJlc2V0U3RvcmVWTSh0aGlzLCB0aGlzLnN0YXRlKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS51bnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gdW5yZWdpc3Rlck1vZHVsZSAocGF0aCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXTsgfVxuICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKTtcbiAgdGhpcy5fbW9kdWxlcy51bnJlZ2lzdGVyKHBhdGgpO1xuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50U3RhdGUgPSBnZXROZXN0ZWRTdGF0ZSh0aGlzJDEuc3RhdGUsIHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICBWdWUuZGVsZXRlKHBhcmVudFN0YXRlLCBwYXRoW3BhdGgubGVuZ3RoIC0gMV0pO1xuICB9KTtcbiAgcmVzZXRTdG9yZSh0aGlzKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5ob3RVcGRhdGUgPSBmdW5jdGlvbiBob3RVcGRhdGUgKG5ld09wdGlvbnMpIHtcbiAgdGhpcy5fbW9kdWxlcy51cGRhdGUobmV3T3B0aW9ucyk7XG4gIHJlc2V0U3RvcmUodGhpcywgdHJ1ZSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuX3dpdGhDb21taXQgPSBmdW5jdGlvbiBfd2l0aENvbW1pdCAoZm4pIHtcbiAgdmFyIGNvbW1pdHRpbmcgPSB0aGlzLl9jb21taXR0aW5nO1xuICB0aGlzLl9jb21taXR0aW5nID0gdHJ1ZTtcbiAgZm4oKTtcbiAgdGhpcy5fY29tbWl0dGluZyA9IGNvbW1pdHRpbmc7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggU3RvcmUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuZnVuY3Rpb24gcmVzZXRTdG9yZSAoc3RvcmUsIGhvdCkge1xuICBzdG9yZS5fYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl9tdXRhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fd3JhcHBlZEdldHRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBzdGF0ZSA9IHN0b3JlLnN0YXRlO1xuICAvLyBpbml0IGFsbCBtb2R1bGVzXG4gIGluc3RhbGxNb2R1bGUoc3RvcmUsIHN0YXRlLCBbXSwgc3RvcmUuX21vZHVsZXMucm9vdCwgdHJ1ZSk7XG4gIC8vIHJlc2V0IHZtXG4gIHJlc2V0U3RvcmVWTShzdG9yZSwgc3RhdGUsIGhvdCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0U3RvcmVWTSAoc3RvcmUsIHN0YXRlLCBob3QpIHtcbiAgdmFyIG9sZFZtID0gc3RvcmUuX3ZtO1xuXG4gIC8vIGJpbmQgc3RvcmUgcHVibGljIGdldHRlcnNcbiAgc3RvcmUuZ2V0dGVycyA9IHt9O1xuICB2YXIgd3JhcHBlZEdldHRlcnMgPSBzdG9yZS5fd3JhcHBlZEdldHRlcnM7XG4gIHZhciBjb21wdXRlZCA9IHt9O1xuICBmb3JFYWNoVmFsdWUod3JhcHBlZEdldHRlcnMsIGZ1bmN0aW9uIChmbiwga2V5KSB7XG4gICAgLy8gdXNlIGNvbXB1dGVkIHRvIGxldmVyYWdlIGl0cyBsYXp5LWNhY2hpbmcgbWVjaGFuaXNtXG4gICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZuKHN0b3JlKTsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3RvcmUuZ2V0dGVycywga2V5LCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLl92bVtrZXldOyB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSAvLyBmb3IgbG9jYWwgZ2V0dGVyc1xuICAgIH0pO1xuICB9KTtcblxuICAvLyB1c2UgYSBWdWUgaW5zdGFuY2UgdG8gc3RvcmUgdGhlIHN0YXRlIHRyZWVcbiAgLy8gc3VwcHJlc3Mgd2FybmluZ3MganVzdCBpbiBjYXNlIHRoZSB1c2VyIGhhcyBhZGRlZFxuICAvLyBzb21lIGZ1bmt5IGdsb2JhbCBtaXhpbnNcbiAgdmFyIHNpbGVudCA9IFZ1ZS5jb25maWcuc2lsZW50O1xuICBWdWUuY29uZmlnLnNpbGVudCA9IHRydWU7XG4gIHN0b3JlLl92bSA9IG5ldyBWdWUoe1xuICAgIGRhdGE6IHtcbiAgICAgICQkc3RhdGU6IHN0YXRlXG4gICAgfSxcbiAgICBjb21wdXRlZDogY29tcHV0ZWRcbiAgfSk7XG4gIFZ1ZS5jb25maWcuc2lsZW50ID0gc2lsZW50O1xuXG4gIC8vIGVuYWJsZSBzdHJpY3QgbW9kZSBmb3IgbmV3IHZtXG4gIGlmIChzdG9yZS5zdHJpY3QpIHtcbiAgICBlbmFibGVTdHJpY3RNb2RlKHN0b3JlKTtcbiAgfVxuXG4gIGlmIChvbGRWbSkge1xuICAgIGlmIChob3QpIHtcbiAgICAgIC8vIGRpc3BhdGNoIGNoYW5nZXMgaW4gYWxsIHN1YnNjcmliZWQgd2F0Y2hlcnNcbiAgICAgIC8vIHRvIGZvcmNlIGdldHRlciByZS1ldmFsdWF0aW9uIGZvciBob3QgcmVsb2FkaW5nLlxuICAgICAgc3RvcmUuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvbGRWbS5fZGF0YS4kJHN0YXRlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkgeyByZXR1cm4gb2xkVm0uJGRlc3Ryb3koKTsgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbE1vZHVsZSAoc3RvcmUsIHJvb3RTdGF0ZSwgcGF0aCwgbW9kdWxlLCBob3QpIHtcbiAgdmFyIGlzUm9vdCA9ICFwYXRoLmxlbmd0aDtcbiAgdmFyIG5hbWVzcGFjZSA9IHN0b3JlLl9tb2R1bGVzLmdldE5hbWVzcGFjZShwYXRoKTtcblxuICAvLyByZWdpc3RlciBpbiBuYW1lc3BhY2UgbWFwXG4gIGlmIChuYW1lc3BhY2UpIHtcbiAgICBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcFtuYW1lc3BhY2VdID0gbW9kdWxlO1xuICB9XG5cbiAgLy8gc2V0IHN0YXRlXG4gIGlmICghaXNSb290ICYmICFob3QpIHtcbiAgICB2YXIgcGFyZW50U3RhdGUgPSBnZXROZXN0ZWRTdGF0ZShyb290U3RhdGUsIHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICB2YXIgbW9kdWxlTmFtZSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICBWdWUuc2V0KHBhcmVudFN0YXRlLCBtb2R1bGVOYW1lLCBtb2R1bGUuc3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGxvY2FsID0gbW9kdWxlLmNvbnRleHQgPSBtYWtlTG9jYWxDb250ZXh0KHN0b3JlLCBuYW1lc3BhY2UsIHBhdGgpO1xuXG4gIG1vZHVsZS5mb3JFYWNoTXV0YXRpb24oZnVuY3Rpb24gKG11dGF0aW9uLCBrZXkpIHtcbiAgICB2YXIgbmFtZXNwYWNlZFR5cGUgPSBuYW1lc3BhY2UgKyBrZXk7XG4gICAgcmVnaXN0ZXJNdXRhdGlvbihzdG9yZSwgbmFtZXNwYWNlZFR5cGUsIG11dGF0aW9uLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoQWN0aW9uKGZ1bmN0aW9uIChhY3Rpb24sIGtleSkge1xuICAgIHZhciBuYW1lc3BhY2VkVHlwZSA9IG5hbWVzcGFjZSArIGtleTtcbiAgICByZWdpc3RlckFjdGlvbihzdG9yZSwgbmFtZXNwYWNlZFR5cGUsIGFjdGlvbiwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaEdldHRlcihmdW5jdGlvbiAoZ2V0dGVyLCBrZXkpIHtcbiAgICB2YXIgbmFtZXNwYWNlZFR5cGUgPSBuYW1lc3BhY2UgKyBrZXk7XG4gICAgcmVnaXN0ZXJHZXR0ZXIoc3RvcmUsIG5hbWVzcGFjZWRUeXBlLCBnZXR0ZXIsIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hDaGlsZChmdW5jdGlvbiAoY2hpbGQsIGtleSkge1xuICAgIGluc3RhbGxNb2R1bGUoc3RvcmUsIHJvb3RTdGF0ZSwgcGF0aC5jb25jYXQoa2V5KSwgY2hpbGQsIGhvdCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIG1ha2UgbG9jYWxpemVkIGRpc3BhdGNoLCBjb21taXQsIGdldHRlcnMgYW5kIHN0YXRlXG4gKiBpZiB0aGVyZSBpcyBubyBuYW1lc3BhY2UsIGp1c3QgdXNlIHJvb3Qgb25lc1xuICovXG5mdW5jdGlvbiBtYWtlTG9jYWxDb250ZXh0IChzdG9yZSwgbmFtZXNwYWNlLCBwYXRoKSB7XG4gIHZhciBub05hbWVzcGFjZSA9IG5hbWVzcGFjZSA9PT0gJyc7XG5cbiAgdmFyIGxvY2FsID0ge1xuICAgIGRpc3BhdGNoOiBub05hbWVzcGFjZSA/IHN0b3JlLmRpc3BhdGNoIDogZnVuY3Rpb24gKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICAgIHZhciBhcmdzID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICAgIHZhciBwYXlsb2FkID0gYXJncy5wYXlsb2FkO1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzLm9wdGlvbnM7XG4gICAgICB2YXIgdHlwZSA9IGFyZ3MudHlwZTtcblxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnJvb3QpIHtcbiAgICAgICAgdHlwZSA9IG5hbWVzcGFjZSArIHR5cGU7XG4gICAgICAgIGlmICghc3RvcmUuX2FjdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGxvY2FsIGFjdGlvbiB0eXBlOiBcIiArIChhcmdzLnR5cGUpICsgXCIsIGdsb2JhbCB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2godHlwZSwgcGF5bG9hZClcbiAgICB9LFxuXG4gICAgY29tbWl0OiBub05hbWVzcGFjZSA/IHN0b3JlLmNvbW1pdCA6IGZ1bmN0aW9uIChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgICB2YXIgYXJncyA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFyZ3MucGF5bG9hZDtcbiAgICAgIHZhciBvcHRpb25zID0gYXJncy5vcHRpb25zO1xuICAgICAgdmFyIHR5cGUgPSBhcmdzLnR5cGU7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5yb290KSB7XG4gICAgICAgIHR5cGUgPSBuYW1lc3BhY2UgKyB0eXBlO1xuICAgICAgICBpZiAoIXN0b3JlLl9tdXRhdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGxvY2FsIG11dGF0aW9uIHR5cGU6IFwiICsgKGFyZ3MudHlwZSkgKyBcIiwgZ2xvYmFsIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0b3JlLmNvbW1pdCh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gZ2V0dGVycyBhbmQgc3RhdGUgb2JqZWN0IG11c3QgYmUgZ290dGVuIGxhemlseVxuICAvLyBiZWNhdXNlIHRoZXkgd2lsbCBiZSBjaGFuZ2VkIGJ5IHZtIHVwZGF0ZVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsb2NhbCwge1xuICAgIGdldHRlcnM6IHtcbiAgICAgIGdldDogbm9OYW1lc3BhY2VcbiAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5nZXR0ZXJzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFrZUxvY2FsR2V0dGVycyhzdG9yZSwgbmFtZXNwYWNlKTsgfVxuICAgIH0sXG4gICAgc3RhdGU6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0TmVzdGVkU3RhdGUoc3RvcmUuc3RhdGUsIHBhdGgpOyB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9jYWxcbn1cblxuZnVuY3Rpb24gbWFrZUxvY2FsR2V0dGVycyAoc3RvcmUsIG5hbWVzcGFjZSkge1xuICB2YXIgZ2V0dGVyc1Byb3h5ID0ge307XG5cbiAgdmFyIHNwbGl0UG9zID0gbmFtZXNwYWNlLmxlbmd0aDtcbiAgT2JqZWN0LmtleXMoc3RvcmUuZ2V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIC8vIHNraXAgaWYgdGhlIHRhcmdldCBnZXR0ZXIgaXMgbm90IG1hdGNoIHRoaXMgbmFtZXNwYWNlXG4gICAgaWYgKHR5cGUuc2xpY2UoMCwgc3BsaXRQb3MpICE9PSBuYW1lc3BhY2UpIHsgcmV0dXJuIH1cblxuICAgIC8vIGV4dHJhY3QgbG9jYWwgZ2V0dGVyIHR5cGVcbiAgICB2YXIgbG9jYWxUeXBlID0gdHlwZS5zbGljZShzcGxpdFBvcyk7XG5cbiAgICAvLyBBZGQgYSBwb3J0IHRvIHRoZSBnZXR0ZXJzIHByb3h5LlxuICAgIC8vIERlZmluZSBhcyBnZXR0ZXIgcHJvcGVydHkgYmVjYXVzZVxuICAgIC8vIHdlIGRvIG5vdCB3YW50IHRvIGV2YWx1YXRlIHRoZSBnZXR0ZXJzIGluIHRoaXMgdGltZS5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2V0dGVyc1Byb3h5LCBsb2NhbFR5cGUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuZ2V0dGVyc1t0eXBlXTsgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGdldHRlcnNQcm94eVxufVxuXG5mdW5jdGlvbiByZWdpc3Rlck11dGF0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpIHtcbiAgdmFyIGVudHJ5ID0gc3RvcmUuX211dGF0aW9uc1t0eXBlXSB8fCAoc3RvcmUuX211dGF0aW9uc1t0eXBlXSA9IFtdKTtcbiAgZW50cnkucHVzaChmdW5jdGlvbiB3cmFwcGVkTXV0YXRpb25IYW5kbGVyIChwYXlsb2FkKSB7XG4gICAgaGFuZGxlcihsb2NhbC5zdGF0ZSwgcGF5bG9hZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckFjdGlvbiAoc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKSB7XG4gIHZhciBlbnRyeSA9IHN0b3JlLl9hY3Rpb25zW3R5cGVdIHx8IChzdG9yZS5fYWN0aW9uc1t0eXBlXSA9IFtdKTtcbiAgZW50cnkucHVzaChmdW5jdGlvbiB3cmFwcGVkQWN0aW9uSGFuZGxlciAocGF5bG9hZCwgY2IpIHtcbiAgICB2YXIgcmVzID0gaGFuZGxlcih7XG4gICAgICBkaXNwYXRjaDogbG9jYWwuZGlzcGF0Y2gsXG4gICAgICBjb21taXQ6IGxvY2FsLmNvbW1pdCxcbiAgICAgIGdldHRlcnM6IGxvY2FsLmdldHRlcnMsXG4gICAgICBzdGF0ZTogbG9jYWwuc3RhdGUsXG4gICAgICByb290R2V0dGVyczogc3RvcmUuZ2V0dGVycyxcbiAgICAgIHJvb3RTdGF0ZTogc3RvcmUuc3RhdGVcbiAgICB9LCBwYXlsb2FkLCBjYik7XG4gICAgaWYgKCFpc1Byb21pc2UocmVzKSkge1xuICAgICAgcmVzID0gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgfVxuICAgIGlmIChzdG9yZS5fZGV2dG9vbEhvb2spIHtcbiAgICAgIHJldHVybiByZXMuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBzdG9yZS5fZGV2dG9vbEhvb2suZW1pdCgndnVleDplcnJvcicsIGVycik7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyR2V0dGVyIChzdG9yZSwgdHlwZSwgcmF3R2V0dGVyLCBsb2NhbCkge1xuICBpZiAoc3RvcmUuX3dyYXBwZWRHZXR0ZXJzW3R5cGVdKSB7XG4gICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gZHVwbGljYXRlIGdldHRlciBrZXk6IFwiICsgdHlwZSkpO1xuICAgIHJldHVyblxuICB9XG4gIHN0b3JlLl93cmFwcGVkR2V0dGVyc1t0eXBlXSA9IGZ1bmN0aW9uIHdyYXBwZWRHZXR0ZXIgKHN0b3JlKSB7XG4gICAgcmV0dXJuIHJhd0dldHRlcihcbiAgICAgIGxvY2FsLnN0YXRlLCAvLyBsb2NhbCBzdGF0ZVxuICAgICAgbG9jYWwuZ2V0dGVycywgLy8gbG9jYWwgZ2V0dGVyc1xuICAgICAgc3RvcmUuc3RhdGUsIC8vIHJvb3Qgc3RhdGVcbiAgICAgIHN0b3JlLmdldHRlcnMgLy8gcm9vdCBnZXR0ZXJzXG4gICAgKVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbmFibGVTdHJpY3RNb2RlIChzdG9yZSkge1xuICBzdG9yZS5fdm0uJHdhdGNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEuJCRzdGF0ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgYXNzZXJ0KHN0b3JlLl9jb21taXR0aW5nLCBcIkRvIG5vdCBtdXRhdGUgdnVleCBzdG9yZSBzdGF0ZSBvdXRzaWRlIG11dGF0aW9uIGhhbmRsZXJzLlwiKTtcbiAgfSwgeyBkZWVwOiB0cnVlLCBzeW5jOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiBnZXROZXN0ZWRTdGF0ZSAoc3RhdGUsIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgubGVuZ3RoXG4gICAgPyBwYXRoLnJlZHVjZShmdW5jdGlvbiAoc3RhdGUsIGtleSkgeyByZXR1cm4gc3RhdGVba2V5XTsgfSwgc3RhdGUpXG4gICAgOiBzdGF0ZVxufVxuXG5mdW5jdGlvbiB1bmlmeU9iamVjdFN0eWxlICh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKSB7XG4gIGlmIChpc09iamVjdCh0eXBlKSAmJiB0eXBlLnR5cGUpIHtcbiAgICBvcHRpb25zID0gcGF5bG9hZDtcbiAgICBwYXlsb2FkID0gdHlwZTtcbiAgICB0eXBlID0gdHlwZS50eXBlO1xuICB9XG5cbiAgYXNzZXJ0KHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJywgKFwiRXhwZWN0cyBzdHJpbmcgYXMgdGhlIHR5cGUsIGJ1dCBmb3VuZCBcIiArICh0eXBlb2YgdHlwZSkgKyBcIi5cIikpO1xuXG4gIHJldHVybiB7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHBheWxvYWQsIG9wdGlvbnM6IG9wdGlvbnMgfVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsIChfVnVlKSB7XG4gIGlmIChWdWUpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgJ1t2dWV4XSBhbHJlYWR5IGluc3RhbGxlZC4gVnVlLnVzZShWdWV4KSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgb25jZS4nXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBWdWUgPSBfVnVlO1xuICBhcHBseU1peGluKFZ1ZSk7XG59XG5cbi8vIGF1dG8gaW5zdGFsbCBpbiBkaXN0IG1vZGVcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIGluc3RhbGwod2luZG93LlZ1ZSk7XG59XG5cbnZhciBtYXBTdGF0ZSA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBzdGF0ZXMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoc3RhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkU3RhdGUgKCkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy4kc3RvcmUuc3RhdGU7XG4gICAgICB2YXIgZ2V0dGVycyA9IHRoaXMuJHN0b3JlLmdldHRlcnM7XG4gICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBtb2R1bGUgPSBnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcFN0YXRlJywgbmFtZXNwYWNlKTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzdGF0ZSA9IG1vZHVsZS5jb250ZXh0LnN0YXRlO1xuICAgICAgICBnZXR0ZXJzID0gbW9kdWxlLmNvbnRleHQuZ2V0dGVycztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmNhbGwodGhpcywgc3RhdGUsIGdldHRlcnMpXG4gICAgICAgIDogc3RhdGVbdmFsXVxuICAgIH07XG4gICAgLy8gbWFyayB2dWV4IGdldHRlciBmb3IgZGV2dG9vbHNcbiAgICByZXNba2V5XS52dWV4ID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgbWFwTXV0YXRpb25zID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIG11dGF0aW9ucykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChtdXRhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgdmFsID0gbmFtZXNwYWNlICsgdmFsO1xuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkTXV0YXRpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIGlmIChuYW1lc3BhY2UgJiYgIWdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwTXV0YXRpb25zJywgbmFtZXNwYWNlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5jb21taXQuYXBwbHkodGhpcy4kc3RvcmUsIFt2YWxdLmNvbmNhdChhcmdzKSlcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBHZXR0ZXJzID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGdldHRlcnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoZ2V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICB2YWwgPSBuYW1lc3BhY2UgKyB2YWw7XG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRHZXR0ZXIgKCkge1xuICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBHZXR0ZXJzJywgbmFtZXNwYWNlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghKHZhbCBpbiB0aGlzLiRzdG9yZS5nZXR0ZXJzKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGdldHRlcjogXCIgKyB2YWwpKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1t2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBBY3Rpb25zID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGFjdGlvbnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICB2YWwgPSBuYW1lc3BhY2UgKyB2YWw7XG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRBY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIGlmIChuYW1lc3BhY2UgJiYgIWdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwQWN0aW9ucycsIG5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZGlzcGF0Y2guYXBwbHkodGhpcy4kc3RvcmUsIFt2YWxdLmNvbmNhdChhcmdzKSlcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1hcCAobWFwKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG1hcClcbiAgICA/IG1hcC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKHsga2V5OiBrZXksIHZhbDoga2V5IH0pOyB9KVxuICAgIDogT2JqZWN0LmtleXMobWFwKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKHsga2V5OiBrZXksIHZhbDogbWFwW2tleV0gfSk7IH0pXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWVzcGFjZSAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1hcCkge1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlICE9PSAnc3RyaW5nJykge1xuICAgICAgbWFwID0gbmFtZXNwYWNlO1xuICAgICAgbmFtZXNwYWNlID0gJyc7XG4gICAgfSBlbHNlIGlmIChuYW1lc3BhY2UuY2hhckF0KG5hbWVzcGFjZS5sZW5ndGggLSAxKSAhPT0gJy8nKSB7XG4gICAgICBuYW1lc3BhY2UgKz0gJy8nO1xuICAgIH1cbiAgICByZXR1cm4gZm4obmFtZXNwYWNlLCBtYXApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TW9kdWxlQnlOYW1lc3BhY2UgKHN0b3JlLCBoZWxwZXIsIG5hbWVzcGFjZSkge1xuICB2YXIgbW9kdWxlID0gc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXBbbmFtZXNwYWNlXTtcbiAgaWYgKCFtb2R1bGUpIHtcbiAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSBtb2R1bGUgbmFtZXNwYWNlIG5vdCBmb3VuZCBpbiBcIiArIGhlbHBlciArIFwiKCk6IFwiICsgbmFtZXNwYWNlKSk7XG4gIH1cbiAgcmV0dXJuIG1vZHVsZVxufVxuXG52YXIgaW5kZXhfZXNtID0ge1xuICBTdG9yZTogU3RvcmUsXG4gIGluc3RhbGw6IGluc3RhbGwsXG4gIHZlcnNpb246ICcyLjIuMScsXG4gIG1hcFN0YXRlOiBtYXBTdGF0ZSxcbiAgbWFwTXV0YXRpb25zOiBtYXBNdXRhdGlvbnMsXG4gIG1hcEdldHRlcnM6IG1hcEdldHRlcnMsXG4gIG1hcEFjdGlvbnM6IG1hcEFjdGlvbnNcbn07XG5cbmV4cG9ydCB7IFN0b3JlLCBtYXBTdGF0ZSwgbWFwTXV0YXRpb25zLCBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH07ZXhwb3J0IGRlZmF1bHQgaW5kZXhfZXNtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZXgvZGlzdC92dWV4LmVzbS5qc1xuLy8gbW9kdWxlIGlkID0gMzEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlcyBWdWUgYW5kIG90aGVyIGxpYnJhcmllcy4gSXQgaXMgYSBncmVhdCBzdGFydGluZyBwb2ludCB3aGVuXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5pbXBvcnQgVnVlMkZpbHRlcnMgZnJvbSAndnVlMi1maWx0ZXJzJztcbmltcG9ydCBWZWVWYWxpZGF0ZSBmcm9tICd2ZWUtdmFsaWRhdGUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCd2aWRlby11cGxvYWQnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvVmlkZW9VcGxvYWQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnbXVsdGlwbGUtdmlkZW8tdXBsb2FkJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndmlkZW8tcGxheWVyJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3ZpZGVvLXZvdGluZycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd2aWRlby1jb21tZW50cycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2NvbXBldGl0aW9uLWZvcm0nLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3JvdXRpbmUtdmlkZW8nLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3RyYW1wb2xpbmUtc2NvcmUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdkbXQtc2NvcmUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd0dW1ibGluZy1zY29yZScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdzbWFsbC12aWRlbycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZScpKTtcblxuVnVlLnVzZShyZXF1aXJlKCd2dWUtcmVzb3VyY2UnKSk7XG5WdWUudXNlKFZ1ZTJGaWx0ZXJzKTtcblZ1ZS51c2UocmVxdWlyZSgnQHdlYnNhbm92YS92dWUtdXBsb2FkJykpO1xuVnVlLnVzZShWZWVWYWxpZGF0ZSk7XG5cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxud2luZG93LkV2ZW50ID0gbmV3IFZ1ZSgpO1xuXG5WdWUudXNlKHtcbiAgICBpbnN0YWxsOiAoVnVlLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIFZ1ZS5nZXRKc29uID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuVnVlLmh0dHAuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIGRhdGE6IHdpbmRvdy5MYXJhdmVsLFxuICAgIHN0b3JlXG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwidmFsaWRhdGVCZWZvcmVTdWJtaXRcIj5cblxuICAgICAgICA8IS0tIENvbXBldGl0aW9uIHRpdGxlIC0tPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0aXRsZScpfVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+Q29tcGV0aXRpb24gVGl0bGU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8cCA6Y2xhc3M9XCJ7J2NvbnRyb2wnOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LXZhbGlkYXRlOnRpdGxlLmluaXRpYWw9XCIncmVxdWlyZWQnXCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCd0aXRsZScpXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3JzLmZpcnN0KCd0aXRsZScpIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQ29tcGV0aXRpb24gTG9jYXRpb24gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibG9jYXRpb25cIiBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIj5Mb2NhdGlvbjwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImxvY2F0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJsb2NhdGlvblwiIG5hbWU9XCJsb2NhdGlvblwiPlxuXG4gICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJmYWxzZVwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RXJyb3IgbWVzc2FnZTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENvbXBldGl0aW9uIFN0YXJ0IERhdGUgLS0+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwieydmb3JtLWdyb3VwJzogdHJ1ZSwgJ2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKX1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGFydF9kYXRlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+U3RhcnQgRGF0ZTwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxwIDpjbGFzcz1cInsnY29udHJvbCc6IHRydWV9XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHYtdmFsaWRhdGU6c3RhcnRfZGF0ZS5pbml0aWFsPVwiJ2RhdGVfZm9ybWF0OllZWVktTU0tREQnXCIgaWQ9XCJzdGFydF9kYXRlXCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJzdGFydF9kYXRlXCIgbmFtZT1cInN0YXJ0X2RhdGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCdzdGFydF9kYXRlJylcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QoJ3N0YXJ0X2RhdGUnKSB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBDb21wZXRpdGlvbiBFbmQgRGF0ZSAtLT5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7J2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZW5kX2RhdGUnKX1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbmRfZGF0ZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPlN0YXJ0IERhdGU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8cCA6Y2xhc3M9XCJ7J2NvbnRyb2wnOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LXZhbGlkYXRlOmVuZF9kYXRlLmluaXRpYWw9XCInZGF0ZV9mb3JtYXQ6WVlZWS1NTS1ERCdcIiBpZD1cImVuZF9kYXRlXCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJlbmRfZGF0ZVwiIG5hbWU9XCJlbmRfZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImVycm9ycy5oYXMoJ2VuZF9kYXRlJylcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QoJ2VuZF9kYXRlJykgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gRXZlbnQgc2VsZWN0aW9uIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtc2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoND5FdmVudHM8L2g0PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0cmFtcG9saW5lXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInRyYW1wb2xpbmVcIiB2LW1vZGVsPVwidHJhbXBvbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICBUcmFtcG9saW5lXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwidHJhbXBvbGluZVwiIEBjbGljaz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsID0gIXRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1zaG93PVwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tb2tcIj48L2k+IFNlbWktRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInRyYW1wb2xpbmVcIiBAY2xpY2s9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsID0gIXRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LXNob3c9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwidHJhbXBvbGluZVwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHJhbXBDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIkNvbXB1bHNvcnlcIiByb3V0aW5lLWtleT1cInByZWxpbV9jb21wdWxzb3J5XCI+PC90cmFtcG9saW5lLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0cmFtcENvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFtcG9saW5lLXNjb3JlIHRpdGxlPVwiUHJlbGltIE9wdGlvbmFsXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fb3B0aW9uYWxcIj48L3RyYW1wb2xpbmUtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHRyYW1wQ29sU2l6ZVwiIHYtc2hvdz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIlNlbWktRmluYWxcIiByb3V0aW5lLWtleT1cInNlbWlfZmluYWxfb3B0aW9uYWxcIj48L3RyYW1wb2xpbmUtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHRyYW1wQ29sU2l6ZVwiIHYtc2hvdz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFtcG9saW5lLXNjb3JlIHRpdGxlPVwiRmluYWwgT3B0aW9uYWxcIiByb3V0aW5lLWtleT1cImZpbmFsX29wdGlvbmFsXCI+PC90cmFtcG9saW5lLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZG10XCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRtdFwiIHYtbW9kZWw9XCJkbXRcIj5cbiAgICAgICAgICAgICAgICAgICAgRG91YmxlIE1pbmlcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCJkbXRcIiBAY2xpY2s9XCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCA9ICFkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwiZG10XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyBkbXRDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyAxXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fcGFzc18xXCI+PC9kbXQtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIGRtdENvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbXQtc2NvcmUgdGl0bGU9XCJQYXNzIDJcIiByb3V0aW5lLWtleT1cInByZWxpbV9wYXNzXzJcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyAzXCIgcm91dGluZS1rZXk9XCJmaW5hbF9wYXNzXzNcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyA0XCIgcm91dGluZS1rZXk9XCJmaW5hbF9wYXNzXzRcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInR1bWJsaW5nXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInR1bWJsaW5nXCIgdi1tb2RlbD1cInR1bWJsaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIFR1bWJsaW5nXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwidHVtYmxpbmdcIiBAY2xpY2s9XCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwgPSAhdHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1zaG93PVwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwidHVtYmxpbmdcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHR1bWJsaW5nQ29sU2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHR1bWJsaW5nLXNjb3JlIHRpdGxlPVwiUGFzcyAxXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fcGFzc18xXCI+PC90dW1ibGluZy1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHVtYmxpbmdDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHVtYmxpbmctc2NvcmUgdGl0bGU9XCJQYXNzIDJcIiByb3V0aW5lLWtleT1cInByZWxpbV9wYXNzXzJcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIiB2LXNob3c9XCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgM1wiIHJvdXRpbmUta2V5PVwiZmluYWxfcGFzc18zXCI+PC90dW1ibGluZy1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHVtYmxpbmdDb2xTaXplXCIgdi1zaG93PVwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHVtYmxpbmctc2NvcmUgdGl0bGU9XCJQYXNzIDRcIiByb3V0aW5lLWtleT1cImZpbmFsX3Bhc3NfNFwiPjwvdHVtYmxpbmctc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgOmRpc2FibGVkPVwiZXJyb3JzLmFueSgpIHx8ICFldmVudHNWYWxpZFwiPlN1Ym1pdCBDb21wZXRpdGlvbjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuICAgIGltcG9ydCBUcmFtcG9saW5lU2NvcmUgZnJvbSAnLi4vVHJhbXBvbGluZVNjb3JlJztcbiAgICBpbXBvcnQgRG91YmxlTWluaVNjb3JlIGZyb20gJy4uL0RvdWJsZU1pbmlTY29yZSc7XG4gICAgaW1wb3J0IFR1bWJsaW5nU2NvcmUgZnJvbSAnLi4vVHVtYmxpbmdTY29yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW1wb2xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRtdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHVtYmxpbmc6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgZXZlbnRWYWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0cmFtcG9saW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZG10OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdHVtYmxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB0cmFtcG9saW5lUm91dGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NlbWlGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNob3dGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3VibGVNaW5pUGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0dW1ibGluZ1Bhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93RmluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb21wZXRpdGlvbklkOiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBldGl0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnTE9BRF9DT01QRVRJVElPTicsIHRoaXMuY29tcGV0aXRpb25JZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFtcG9saW5lID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5ldmVudENoZWNrZWQoJ3RyYW1wb2xpbmVSb3V0aW5lcycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRtdCA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZXZlbnRDaGVja2VkKCdkb3VibGVNaW5pUGFzc2VzJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHVtYmxpbmcgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmV2ZW50Q2hlY2tlZCgndHVtYmxpbmdQYXNzZXMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdHJhbXBvbGluZVJvdXRpbmVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50cmFtcG9saW5lUm91dGluZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3VibGVNaW5pUGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5kb3VibGVNaW5pUGFzc2VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHVtYmxpbmdQYXNzZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnR1bWJsaW5nUGFzc2VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50aXRsZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfVElUTEUnLCB2YWx1ZSkgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUubG9jYXRpb247IH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0xPQ0FUSU9OJywgdmFsdWUpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydF9kYXRlOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuc3RhcnRfZGF0ZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfU1RBUlRfREFURScsIHZhbHVlKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kX2RhdGU6IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lbmRfZGF0ZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfRU5EX0RBVEUnLCB2YWx1ZSkgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZXZlbnRzVmFsaWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZ2V0dGVycy5ldmVudENoZWNrZWQoJ3RyYW1wb2xpbmVSb3V0aW5lcycpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMuZXZlbnRDaGVja2VkKCdkb3VibGVNaW5pUGFzc2VzJykgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZ2V0dGVycy5ldmVudENoZWNrZWQoJ3R1bWJsaW5nUGFzc2VzJylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdHJhbXBDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWwgJiYgdGhpcy50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzMnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsIHx8IHRoaXMudHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc0JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkbXRDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCkgPyAnMycgOiAnNic7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHVtYmxpbmdDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpID8gJzMnIDogJzYnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXRDb21wZXRpdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5hbGxEYXRhO1xuXG4gICAgICAgICAgICAgICAgbGV0IHhociA9ICh0aGlzLiRzdG9yZS5zdGF0ZS5jb21wZXRpdGlvbl9pZClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiRodHRwLnB1dCgnL2NvbXBldGl0aW9ucy8nICsgdGhpcy4kc3RvcmUuc3RhdGUuY29tcGV0aXRpb25faWQsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy4kaHR0cC5wb3N0KCcvY29tcGV0aXRpb25zJywgZGF0YSk7XG5cbiAgICAgICAgICAgICAgICB4aHIudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jb21wZXRpdGlvbnMvJyArIHJlc3BvbnNlLmNvbXBldGl0aW9uLmlkO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGhlcmUgd2FzIGFuIGVycm9yIHN1Ym1pdHRpbmcgdGhlIHNjb3Jlcy4nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbGlkYXRlQmVmb3JlU3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdENvbXBldGl0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgY29ycmVjdCB0aGUgZXJyb3JzLicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICd2ZWUtdmFsaWRhdGUnO1xuICAgIGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgICAgIGVuOiB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb21wZXRpdGlvbiBUaXRsZScsXG4gICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogJ1N0YXJ0IERhdGUnLFxuICAgICAgICAgICAgICAgIGVuZF9kYXRlOiAnRW5kIERhdGUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBWYWxpZGF0b3IudXBkYXRlRGljdGlvbmFyeShkaWN0aW9uYXJ5KTtcbiAgICBWYWxpZGF0b3IuaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyhtb21lbnQpO1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENvbXBldGl0aW9uRm9ybS52dWU/Zjk5MzhjYzAiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5VcGxvYWQgWW91ciBWaWRlb3M8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJldmVudFwiPkV2ZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJldmVudFwiIHYtbW9kZWw9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHJhbXBvbGluZVwiPlRyYW1wb2xpbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRvdWJsZSBtaW5pXCI+RG91YmxlLW1pbmk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInR1bWJsaW5nXCI+VHVtYmxpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ2aXNpYmlsaXR5XCI+VmlzaWJpbGl0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidmlzaWJpbGl0eVwiIHYtbW9kZWw9XCJ2aXNpYmlsaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcml2YXRlXCI+UHJpdmF0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidW5saXN0ZWRcIj5Vbmxpc3RlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHVibGljXCI+UHVibGljPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCIhcXVldWVkXCIgQGNsaWNrPVwiJHVwbG9hZC5zZWxlY3QoJ3ZpZGVvLXVwbG9hZCcpXCIgOmRpc2FibGVkPVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IFZpZGVvc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwicXVldWVkXCIgQGNsaWNrPVwiJHVwbG9hZC5zdGFydCgndmlkZW8tdXBsb2FkJylcIiA6ZGlzYWJsZWQ9XCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiKCkgPT4geyR1cGxvYWQucmVzZXQoJ3ZpZGVvLXVwbG9hZCcpO3F1ZXVlZCA9IGZhbHNlfVwiIDpkaXNhYmxlZD1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtcHJvZ3Jlc3MgcHJvZ3Jlc3NcIiB2LXNob3c9XCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIDpzdHlsZT1cIid3aWR0aDogJyArICR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykucGVyY2VudENvbXBsZXRlICsgJyU7J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnBlcmNlbnRDb21wbGV0ZSB9fSUgQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIkdXBsb2FkLmVycm9ycygndmlkZW8tdXBsb2FkJykubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR1cGxvYWQuZXJyb3JzKCd2aWRlby11cGxvYWQnKVswXS5tZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1yZXN1bHRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyB2LXNob3c9XCIkdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwgbGFiZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCB9fSB7eyAkdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoIHwgcGx1cmFsaXplKCdmaWxlJykgfX0gcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZVNob3dRdWV1ZWRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtaWY9XCJzaG93UXVldWVkRmlsZXNcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWVudS11cFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtaWY9XCIhc2hvd1F1ZXVlZEZpbGVzXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCB2LXNob3c9XCJzaG93UXVldWVkRmlsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiZmlsZSBpbiAkdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpbGUubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZmlsZSBpbiAkdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5jb21wbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJmaWxlLmVycm9ycy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtZGFuZ2VyXCI+e3sgZmlsZS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlsZS5lcnJvcnNbMF0ubWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhZmlsZS5lcnJvcnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIj57eyBmaWxlLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWRlZCBzdWNjZXNzZnVsbHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLm5ldygndmlkZW8tdXBsb2FkJywge1xuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1heEZpbGVzOiAyMCxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXhTaXplUGVyRmlsZTogMjA0ODAwLCAvLyAyMDAgTUJcbiAgICAgICAgICAgICAgICBzdGFydE9uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBbJ21wNCcsICd3ZWJtJywgJ2F2aScsICdhc2YnLCAnd212JywgJ21wZWd0cycsICdtb3YnLCAnZmx2JywgJ21rdicsICczZ3AnXSxcbiAgICAgICAgICAgICAgICBodHRwOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmJvZHkuYXBwZW5kKCd2aXNpYmlsaXR5JywgdGhpcy52aXNpYmlsaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5ib2R5LmFwcGVuZCgnZXZlbnQnLCB0aGlzLmV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdChkYXRhLnVybCwgZGF0YS5ib2R5LCB7cHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3N9KS50aGVuKGRhdGEuc3VjY2VzcywgZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblF1ZXVlKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dRdWV1ZWRGaWxlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1F1ZXVlZEZpbGVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvdmlkZW9zJztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRW5kKCkge1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dRdWV1ZWRGaWxlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxuXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICd0cmFtcG9saW5lJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0b2dnbGVTaG93UXVldWVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1F1ZXVlZEZpbGVzID0gIXRoaXMuc2hvd1F1ZXVlZEZpbGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiR1cGxvYWQucmVzZXQoJ3ZpZGVvLXVwbG9hZCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdXBsb2FkL211bHRpcGxlJyxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZXM6IDAsXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVJZDogJ3ZpZGVvLXVwbG9hZC1kcm9wem9uZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgZHJvcHpvbmVJZDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE11bHRpcGxlVmlkZW9VcGxvYWQudnVlPzY4MmYwZmFhIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gdi1zaG93PVwiIXVwbG9hZGVkICYmICFoYXNBdHRhY2htZW50XCIgQGNsaWNrPVwiJHVwbG9hZC5zZWxlY3QoJ3ZpZGVvLXVwbG9hZCcgKyByb3V0aW5lcyArICctJyArIHJvdXRpbmVLZXkpXCIgOmRpc2FibGVkPVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnICsgcm91dGluZXMgKyAnLScgKyByb3V0aW5lS2V5KS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi14c1wiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wYXBlcmNsaXBcIj48L2k+IEF0dGFjaCBWaWRlb1xuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8c3BhbiB2LXNob3c9XCJ1cGxvYWRlZCB8fCBoYXNBdHRhY2htZW50XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hlY2tcIj48L2k+IHt7IGZpbGVuYW1lIH19XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwicmVtb3ZlQXR0YWNobWVudFwiIGNsYXNzPVwicmVtb3ZlLWF0dGFjaG1lbnRcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlLXNpZ25cIj48L2k+PC9hPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1wcm9ncmVzcyBwcm9ncmVzc1wiIHYtc2hvdz1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJyArIHJvdXRpbmVzICsgJy0nICsgcm91dGluZUtleSkuc3RhdHVzID09PSAnc2VuZGluZydcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyAkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyByb3V0aW5lcyArICctJyArIHJvdXRpbmVLZXkpLnBlcmNlbnRDb21wbGV0ZSArICclOydcIj5cbiAgICAgICAgICAgICAgICB7eyAkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyByb3V0aW5lcyArICctJyArIHJvdXRpbmVLZXkpLnBlcmNlbnRDb21wbGV0ZSB9fSUgQ29tcGxldGVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICByb3V0aW5lS2V5OiBudWxsLFxuICAgICAgICAgICAgcm91dGluZXM6IG51bGwsXG4gICAgICAgICAgICBkaXNjaXBsaW5lOiBudWxsLFxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVwbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaGFzQXR0YWNobWVudCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tcGV0aXRpb25faWQgJiYgdGhpcy4kc3RvcmUuc3RhdGVbdGhpcy5yb3V0aW5lc11bdGhpcy5yb3V0aW5lS2V5XS5oYXNWaWRlbygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbGVuYW1lKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVt0aGlzLnJvdXRpbmVzXVt0aGlzLnJvdXRpbmVLZXldLnZpZGVvRmlsZW5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcmVtb3ZlQXR0YWNobWVudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1JFTU9WRV9BVFRBQ0hNRU5UJywge1xuICAgICAgICAgICAgICAgICAgICByb3V0aW5lczogdGhpcy5yb3V0aW5lcyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdW5pcXVlSWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd2aWRlby11cGxvYWQnICsgdGhpcy5yb3V0aW5lcyArICctJyArIHRoaXMucm91dGluZUtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLm5ldygndmlkZW8tdXBsb2FkJyArIHRoaXMucm91dGluZXMgKyAnLScgKyB0aGlzLnJvdXRpbmVLZXksIHtcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXhGaWxlczogMSxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWF4U2l6ZVBlckZpbGU6IDIwNDgwMCwgLy8gMjAwIE1CXG4gICAgICAgICAgICAgICAgc3RhcnRPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBbJ21wNCcsICd3ZWJtJywgJ2F2aScsICdhc2YnLCAnd212JywgJ21wZWd0cycsICdtb3YnLCAnZmx2JywgJ21rdicsICczZ3AnXSxcbiAgICAgICAgICAgICAgICBodHRwOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmJvZHkuYXBwZW5kKCdldmVudCcsIF9zZWxmLmRpc2NpcGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KGRhdGEudXJsLCBkYXRhLmJvZHksIHtwcm9ncmVzczogZGF0YS5wcm9ncmVzc30pLnRoZW4oZGF0YS5zdWNjZXNzLCBkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ0FUVEFDSF9WSURFTycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvOiByZXNwb25zZS5kYXRhLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lczogdGhpcy5yb3V0aW5lcyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiR1cGxvYWQucmVzZXQoJ3ZpZGVvLXVwbG9hZCcgKyB0aGlzLnJvdXRpbmVzICsgJy0nICsgdGhpcy5yb3V0aW5lS2V5LCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3VwbG9hZC9tdWx0aXBsZScsXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGVzOiAwLFxuICAgICAgICAgICAgICAgIGRyb3B6b25lSWQ6ICd2aWRlby11cGxvYWQtZHJvcHpvbmUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkJyArIHRoaXMucm91dGluZXMgKyAnLScgKyB0aGlzLnJvdXRpbmVLZXksIHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUlkOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJvdXRpbmVWaWRlby52dWU/MzIzZTkwM2UiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6YmxvY2sgIWltcG9ydGFudFwiPlxuICAgICAgICA8YSB2LXNob3c9XCIhc2hvd1ZpZGVvXCIgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInBsYXlWaWRlb1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsYXlcIj48L2k+XG4gICAgICAgICAgICBQbGF5IFZpZGVvXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgdi1zaG93PVwic2hvd1ZpZGVvXCIgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cImhpZGVWaWRlb1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtdXBcIj48L2k+XG4gICAgICAgICAgICBIaWRlIFZpZGVvXG4gICAgICAgIDwvYT5cbiAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICA6aWQ9XCIndmlkZW8tJyArIHZpZGVvSWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luIHZqcy1iaWctcGxheS1jZW50ZXJlZCB2anMtMTYtOSB2anMtaGlkZGVuXCJcbiAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICBkYXRhLXNldHVwPSd7XCJmbHVpZFwiOiB0cnVlfSdcbiAgICAgICAgICAgIDpwb3N0ZXI9XCJpbWdcIlxuICAgICAgICAgICAgOndpZHRoPVwid2lkdGhcIlxuICAgICAgICAgICAgOmhlaWdodD1cImhlaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxzb3VyY2UgdHlwZT1cInZpZGVvL21wNFwiIDpzcmM9XCJzcmNcIiAvPlxuICAgICAgICA8L3ZpZGVvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdmlkZW9qcyBmcm9tIFwidmlkZW8uanNcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGxheWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIHNob3dWaWRlbzogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2aWRlb0lkOiBudWxsLFxuICAgICAgICAgICAgc3JjOiBudWxsLFxuICAgICAgICAgICAgaW1nOiBudWxsLFxuICAgICAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiA0ODAsXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMjcwLFxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gdmlkZW9qcygndmlkZW8tJyArIHRoaXMudmlkZW9JZCk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9uKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5yb3VuZCh0aGlzLnBsYXllci5kdXJhdGlvbigpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzSGl0UXVvdGFWaWV3KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHBsYXlWaWRlbygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWRlbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWRlVmlkZW8oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VmlkZW8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNIaXRRdW90YVZpZXcoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnBsYXllci5jdXJyZW50VGltZSgpKSA9PT0gTWF0aC5yb3VuZCgoMTAgKiB0aGlzLmR1cmF0aW9uKSAvIDEwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlVmlldygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MvJyArIHRoaXMudmlkZW9JZCArICcvdmlld3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBTbWFsbFZpZGVvLnZ1ZT80ZWZlMTJjNCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cD57eyBjb21tZW50cy5sZW5ndGggfX0ge3sgY29tbWVudHMubGVuZ3RoIHwgcGx1cmFsaXplKCdjb21tZW50JykgfX08L3A+XG5cbiAgICAgICAgPCEtLSBWaWRlbyBjb21tZW50IGJveCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWNvbW1lbnQgY2xlYXJmaXhcIiBpZj1cIiRyb290LnVzZXIuYXV0aGVudGljYXRlZFwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiU2F5IHNvbWV0aGluZy4uLlwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHZpZGVvLWNvbW1lbnRfX2lucHV0XCIgdi1tb2RlbD1cImJvZHlcIj48L3RleHRhcmVhPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cImNyZWF0ZUNvbW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIiB2LWlmPVwicG9zdGluZ1wiPjwvaT4gUG9zdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gTGlzdCBvZiBjb21tZW50cyAtLT5cbiAgICAgICAgPHVsIGNsYXNzPVwibWVkaWEtbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVkaWFcIiB2LWZvcj1cImNvbW1lbnQgaW4gY29tbWVudHNcIj5cblxuICAgICAgICAgICAgICAgIDwhLS0gVXNlciBpbWFnZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInVzZXJVcmwoY29tbWVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1iaW5kOnNyYz1cImNvbW1lbnQudXNlci5kYXRhLmltYWdlXCIgOmFsdD1cImNvbW1lbnQudXNlci5kYXRhLm5hbWVcIiBjbGFzcz1cIm1lZGlhLW9iamVjdCBpbWctYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gQ29tbWVudCAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInVzZXJVcmwoY29tbWVudClcIj57eyBjb21tZW50LnVzZXIuZGF0YS5uYW1lIH19PC9hPiB7eyBjb21tZW50LmNyZWF0ZWRfYXRfaHVtYW4gfX1cblxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiY29tbWVudC5yZXBsaWVzLmRhdGEubGVuZ3RoXCI+KHt7IGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCB9fSAge3sgY29tbWVudC5yZXBsaWVzLmRhdGEubGVuZ3RoIHwgcGx1cmFsaXplKCdyZXBseScsICdyZXBsaWVzJykgfX0pPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IGNvbW1lbnQuYm9keSB9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIENvbW1lbnQgcmVwbHkvZGVsZXRlIC0tPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZVwiIHYtaWY9XCIkcm9vdC51c2VyLmF1dGhlbnRpY2F0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlUmVwbHlGb3JtKGNvbW1lbnQuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJlcGx5Rm9ybVZpc2libGUgPT09IGNvbW1lbnQuaWQgPyAnQ2FuY2VsIHJlcGx5JyA6ICdSZXBseScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJjb21tZW50LnVzZXJfaWQgPT09ICRyb290LnVzZXIuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwiZGVsZXRlQ29tbWVudChjb21tZW50LmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiIHYtaWY9XCJkZWxldGluZyA9PT0gY29tbWVudC5pZFwiPjwvaT4gRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFJlcGx5IGJveCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWNvbW1lbnQgY2xlYXJcIiB2LWlmPVwicmVwbHlGb3JtVmlzaWJsZSA9PT0gY29tbWVudC5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sIHZpZGVvLWNvbW1lbnRfX2lucHV0XCIgdi1tb2RlbD1cInJlcGx5Qm9keVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cImNyZWF0ZVJlcGx5KGNvbW1lbnQuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCIgdi1pZj1cInJlcGx5aW5nXCI+PC9pPiBSZXBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUmVwbGllcyB0byBjb21tZW50IC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIiB2LWZvcj1cInJlcGx5IGluIGNvbW1lbnQucmVwbGllcy5kYXRhXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVXNlciBpbWFnZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJ1c2VyVXJsKHJlcGx5KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtYmluZDpzcmM9XCJyZXBseS51c2VyLmRhdGEuaW1hZ2VcIiA6YWx0PVwicmVwbHkudXNlci5kYXRhLm5hbWVcIiBjbGFzcz1cIm1lZGlhLW9iamVjdCBpbWctYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUmVwbHkgYm9keSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJ1c2VyVXJsKHJlcGx5KVwiPnt7IHJlcGx5LnVzZXIuZGF0YS5uYW1lIH19PC9hPiB7eyByZXBseS5jcmVhdGVkX2F0X2h1bWFuIH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyByZXBseS5ib2R5IH19PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmVcIiB2LWlmPVwiJHJvb3QudXNlci5hdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJkZWxldGVDb21tZW50KHJlcGx5LmlkKVwiIHYtaWY9XCJyZXBseS51c2VyX2lkID09PSAkcm9vdC51c2VyLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIiB2LWlmPVwiZGVsZXRpbmcgPT09IHJlcGx5LmlkXCI+PC9pPiBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb21tZW50czogW10sXG4gICAgICAgICAgICAgICAgcG9zdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYm9keTogbnVsbCxcbiAgICAgICAgICAgICAgICByZXBseUJvZHk6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVwbHlGb3JtVmlzaWJsZTogbnVsbCxcbiAgICAgICAgICAgICAgICByZXBseWluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVsZXRpbmc6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvVW5pcXVlSWQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZGVsZXRlQ29tbWVudChjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21tZW50PycpKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0aW5nID0gY29tbWVudElkO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5kZWxldGUoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvY29tbWVudHMvJyArIGNvbW1lbnRJZCkudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCeUlkKGNvbW1lbnRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZUJ5SWQoY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LmlkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQucmVwbGllcy5kYXRhLm1hcCgocmVwbHksIHJlcGx5SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBseS5pZCA9PT0gY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50c1tpbmRleF0ucmVwbGllcy5kYXRhLnNwbGljZShyZXBseUluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVJlcGx5Rm9ybShjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGx5Qm9keSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBseUZvcm1WaXNpYmxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucmVwbHlGb3JtVmlzaWJsZSA9IGNvbW1lbnRJZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVSZXBseShjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGx5aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy9jb21tZW50cycsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogdGhpcy5yZXBseUJvZHksXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5X2lkOiBjb21tZW50SWRcbiAgICAgICAgICAgICAgICB9KS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LmlkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzW2luZGV4XS5yZXBsaWVzLmRhdGEucHVzaChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbHlCb2R5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBseUZvcm1WaXNpYmxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBseWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIChlcnJSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHBvc3RpbmcgdGhlIHJlcGx5LicsIGVyclJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBseWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlQ29tbWVudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL2NvbW1lbnRzJywge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmJvZHlcbiAgICAgICAgICAgICAgICB9KS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIChlcnJSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHBvc3RpbmcgdGhlIGNvbW1lbnQuJywgZXJyUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDb21tZW50cygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy9jb21tZW50cycpLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlclVybChjb21tZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvdXNlci8nICsgY29tbWVudC51c2VyLmRhdGEuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVmlkZW9Db21tZW50cy52dWU/MmFmNjc4ODUiLCI8dGVtcGxhdGU+XG4gICAgPHZpZGVvXG4gICAgICAgICAgICBpZD1cInZpZGVvXCJcbiAgICAgICAgICAgIGNsYXNzPVwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpbiB2anMtYmlnLXBsYXktY2VudGVyZWQgdmpzLTE2LTlcIlxuICAgICAgICAgICAgY29udHJvbHMgcHJlbG9hZD1cImF1dG9cIlxuICAgICAgICAgICAgZGF0YS1zZXR1cD0ne1wiZmx1aWRcIjogdHJ1ZSwgXCJwcmVsb2FkXCI6IFwiYXV0b1wifSdcbiAgICAgICAgICAgIHYtYmluZDpwb3N0ZXI9XCJ0aHVtYm5haWxVcmxcIlxuICAgID5cbiAgICAgICAgPHNvdXJjZSB0eXBlPVwidmlkZW8vbXA0XCIgdi1iaW5kOnNyYz1cInZpZGVvVXJsXCIgLz5cbiAgICA8L3ZpZGVvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdmlkZW9qcyBmcm9tIFwidmlkZW8uanNcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGxheWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2aWRlb1VuaXF1ZUlkOiBudWxsLFxuICAgICAgICAgICAgdmlkZW9Vcmw6IG51bGwsXG4gICAgICAgICAgICB0aHVtYm5haWxVcmw6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gdmlkZW9qcygndmlkZW8nKTtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLnJvdW5kKHRoaXMucGxheWVyLmR1cmF0aW9uKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNIaXRRdW90YVZpZXcoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGFzSGl0UXVvdGFWaWV3KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5wbGF5ZXIuY3VycmVudFRpbWUoKSkgPT09IE1hdGgucm91bmQoKDEwICogdGhpcy5kdXJhdGlvbikgLyAxMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZVZpZXcoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL3ZpZXdzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVmlkZW9QbGF5ZXIudnVlPzc3ODE1ZWM3IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+VXBsb2FkIFlvdXIgVmlkZW88L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwibmFtZVwiIDpkaXNhYmxlZD1cImF1dGhlbnRpY2F0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJldmVudFwiPkV2ZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cmFtcG9saW5lXCI+VHJhbXBvbGluZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZG91YmxlIG1pbmlcIj5Eb3VibGUtbWluaTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHVtYmxpbmdcIj5UdW1ibGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJ2aWRlb1wiIGlkPVwidmlkZW9cIiBAY2hhbmdlPVwiZmlsZUlucHV0Q2hhbmdlXCIgdi1pZj1cIiF1cGxvYWRpbmdcIiA6ZGlzYWJsZWQ9XCIhbmFtZSB8fCAhZXZlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHYtaWY9XCJmYWlsZWRcIj5Tb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInZpZGVvLWZvcm1cIiB2LWlmPVwidXBsb2FkaW5nICYmICFmYWlsZWRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgdi1pZj1cIiF1cGxvYWRpbmdDb21wbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZnJlc2ggZmEtc3BpblwiPjwvaT4gWW91ciB2aWRlbyBpcyB1cGxvYWRpbmcuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHYtaWY9XCJ1cGxvYWRpbmdDb21wbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgY29tcGxldGUuIFZpZGVvIGlzIG5vdyBwcm9jZXNzaW5nLiA8YSBocmVmPVwiL3ZpZGVvc1wiPkdvIHRvIHlvdXIgdmlkZW9zLjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIHYtaWY9XCIhdXBsb2FkaW5nQ29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIHYtYmluZDpzdHlsZT1cInsgd2lkdGg6IGZpbGVQcm9ncmVzcyArICclJyB9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJkZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidmlzaWJpbGl0eVwiPlZpc2liaWxpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInZpc2liaWxpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcml2YXRlXCI+UHJpdmF0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVubGlzdGVkXCI+VW5saXN0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwdWJsaWNcIj5QdWJsaWM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2sgcHVsbC1yaWdodFwiPnt7IHNhdmVTdGF0dXMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2sucHJldmVudD1cInVwZGF0ZVwiPlNhdmUgQ2hhbmdlczwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cGxvYWRpbmdDb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmFpbGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzYXZlU3RhdHVzOiBudWxsLFxuICAgICAgICAgICAgICAgIGZpbGVQcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiB3aW5kb3cuTGFyYXZlbC51c2VyLmF1dGhlbnRpY2F0ZWQsXG5cbiAgICAgICAgICAgICAgICAvLyBWaWRlbyBtb2RlbFxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB3aW5kb3cuTGFyYXZlbC51c2VyLmlkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVW50aXRsZWQnLFxuICAgICAgICAgICAgICAgIG5hbWU6IHdpbmRvdy5MYXJhdmVsLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICBldmVudDogJ3RyYW1wb2xpbmUnLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBleHRlbnNpb246IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZpbGVJbnB1dENoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWlsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpLmZpbGVzWzBdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd2aWRlbycsIHRoaXMuZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd1bmlxdWVfaWQnLCB0aGlzLnVuaXF1ZV9pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdXBsb2FkJywgZm9ybSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGluZ0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGZhaWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgKGZhaWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3RvcmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRlbnNpb24gPSB0aGlzLmZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcycsIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogdGhpcy5leHRlbnNpb24sXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHRoaXMudmlzaWJpbGl0eSxcbiAgICAgICAgICAgICAgICB9KS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXF1ZV9pZCA9IHJlc3BvbnNlLmRhdGEudW5pcXVlX2lkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0dXMgPSAnU2F2aW5nIGNoYW5nZXMuJztcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLnB1dCgnL3ZpZGVvcy8nICsgdGhpcy51bmlxdWVfaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb246IHRoaXMuZXh0ZW5zaW9uLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB0aGlzLnZpc2liaWxpdHksXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdHVzID0gJ0NoYW5nZXMgc2F2ZWQuJztcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXR1cyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0dXMgPSAnRmFpbGVkIHRvIHNhdmUgY2hhbmdlcy4nO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKGUpIHtcbiAgICAgICAgICAgICAgICBlLnBlcmNlbnQgPSAoZS5sb2FkZWQgLyBlLnRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVQcm9ncmVzcyA9IGUucGVyY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHZpZGVvVXJsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcm9vdC51cmwgKyAnL3ZpZGVvcy8nICsgdGhpcy51bmlxdWVfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBsb2FkaW5nICYmICF0aGlzLnVwbG9hZGluZ0NvbXBsZXRlICYmICF0aGlzLmZhaWxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5Pyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVmlkZW9VcGxvYWQudnVlPzE5NjBlMTMxIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWRlb19fdm90aW5nXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ2aWRlb19fdm90aW5nLWJ1dHRvblwiIHYtYmluZDpjbGFzcz1cInsndmlkZW9fX3ZvdGluZy1idXR0b24tLXZvdGVkJzogdXNlclZvdGUgPT0gJ3VwJ31cIiBAY2xpY2sucHJldmVudD1cInZvdGUoJ3VwJylcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXBcIj48L2k+XG4gICAgICAgIDwvYT4ge3sgdXAgfX0gJm5ic3A7XG5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInZpZGVvX192b3RpbmctYnV0dG9uXCIgdi1iaW5kOmNsYXNzPVwieyd2aWRlb19fdm90aW5nLWJ1dHRvbi0tdm90ZWQnOiB1c2VyVm90ZSA9PSAnZG93bid9XCIgQGNsaWNrLnByZXZlbnQ9XCJ2b3RlKCdkb3duJylcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtZG93blwiPjwvaT5cbiAgICAgICAgPC9hPiB7eyBkb3duIH19XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXA6IG51bGwsXG4gICAgICAgICAgICAgICAgZG93bjogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VyVm90ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBjYW5Wb3RlOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvVW5pcXVlSWQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Vm90ZXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0Vm90ZXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvdm90ZXMnKS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwID0gcmVzcG9uc2UuZGF0YS51cDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3duID0gcmVzcG9uc2UuZGF0YS5kb3duO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJWb3RlID0gcmVzcG9uc2UuZGF0YS51c2VyX3ZvdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVm90ZSA9IHJlc3BvbnNlLmRhdGEuY2FuX3ZvdGU7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZvdGUodHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJWb3RlID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1t0eXBlXS0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJWb3RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVWb3RlKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlclZvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1t0eXBlID09ICd1cCcgPyAnZG93bicgOiAndXAnXS0tO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNbdHlwZV0rKztcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJWb3RlID0gdHlwZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVm90ZSh0eXBlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVWb3RlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmRlbGV0ZSgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy92b3RlcycsIHt0eXBlfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlVm90ZSh0eXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL3ZvdGVzJywge3R5cGV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWaWRlb1ZvdGluZy52dWU/MmFkNWNkZjIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiPlxuICAgICAgICA8aDU+e3sgdGl0bGUgfX08L2g1PlxuXG4gICAgICAgIDxyb3V0aW5lLXZpZGVvIDpyb3V0aW5lcz1cInJvdXRpbmVzXCIgOmRpc2NpcGxpbmU9XCJkaXNjaXBsaW5lXCIgOnJvdXRpbmUta2V5PVwicm91dGluZUtleVwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdGl0bGU9XCJFeGVjdXRpb25cIj5FeGVjdXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZXhlY3V0aW9uXCIgOm5hbWU9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2RpZmZpY3VsdHknKVwiIHRpdGxlPVwiRGlmZmljdWx0eVwiPkRpZmZpY3VsdHk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZGlmZmljdWx0eVwiIDpuYW1lPVwiZm9ybUlkKCdkaWZmaWN1bHR5JylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKVwiIHRpdGxlPVwiTmV1dHJhbCBEZWR1Y3Rpb25cIj5ORDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJuZXV0cmFsX2RlZHVjdGlvblwiIDpuYW1lPVwiZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0aXRsZT1cIlRvdGFsIFNjb3JlXCI+VG90YWwgU2NvcmU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwidG90YWxfc2NvcmVcIiA6bmFtZT1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IFR1bWJsaW5nU2NvcmUgZnJvbSAnLi4vLi4vVHVtYmxpbmdTY29yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzY2lwbGluZTogJ2RvdWJsZSBtaW5pJyxcbiAgICAgICAgICAgICAgICByb3V0aW5lczogJ2RvdWJsZU1pbmlQYXNzZXMnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1peGluczogW1Njb3JlTWl4aW5dXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIERvdWJsZU1pbmlTY29yZS52dWU/N2JmN2NkZWMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiPlxuICAgICAgICA8aDU+e3sgdGl0bGUgfX08L2g1PlxuXG4gICAgICAgIDxyb3V0aW5lLXZpZGVvIDpyb3V0aW5lcz1cInJvdXRpbmVzXCIgOmRpc2NpcGxpbmU9XCJkaXNjaXBsaW5lXCIgOnJvdXRpbmUta2V5PVwicm91dGluZUtleVwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdGl0bGU9XCJFeGVjdXRpb25cIj5FeGVjdXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZXhlY3V0aW9uXCIgOm5hbWU9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2RpZmZpY3VsdHknKVwiIHRpdGxlPVwiRGlmZmljdWx0eVwiPkRpZmZpY3VsdHk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZGlmZmljdWx0eVwiIDpuYW1lPVwiZm9ybUlkKCdkaWZmaWN1bHR5JylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndGltZV9vZl9mbGlnaHQnKVwiIHRpdGxlPVwiVGltZSBvZiBGbGlnaHRcIj5UT0Y8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwidGltZV9vZl9mbGlnaHRcIiA6bmFtZT1cImZvcm1JZCgndGltZV9vZl9mbGlnaHQnKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCdob3Jpem9udGFsX2Rpc3BsYWNlbWVudCcpXCIgdGl0bGU9XCJIb3Jpem9udGFsIERpc3BsYWNlbWVudFwiPkhEPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cImhvcml6b250YWxfZGlzcGxhY2VtZW50XCIgOm5hbWU9XCJmb3JtSWQoJ2hvcml6b250YWxfZGlzcGxhY2VtZW50JylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKVwiIHRpdGxlPVwiTmV1dHJhbCBEZWR1Y3Rpb25cIj5ORDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJuZXV0cmFsX2RlZHVjdGlvblwiIDpuYW1lPVwiZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0aXRsZT1cIlRvdGFsIFNjb3JlXCI+VG90YWwgU2NvcmU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwidG90YWxfc2NvcmVcIiA6bmFtZT1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IFRyYW1wb2xpbmVTY29yZSBmcm9tICcuLi8uLi9UcmFtcG9saW5lU2NvcmUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkaXNjaXBsaW5lOiAndHJhbXBvbGluZScsXG4gICAgICAgICAgICAgICAgcm91dGluZXM6ICd0cmFtcG9saW5lUm91dGluZXMnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cblxuICAgICAgICBtaXhpbnM6IFtTY29yZU1peGluXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUcmFtcG9saW5lU2NvcmUudnVlPzc1MzVhYjI1IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIj5cbiAgICAgICAgPGg1Pnt7IHRpdGxlIH19PC9oNT5cblxuICAgICAgICA8cm91dGluZS12aWRlbyA6cm91dGluZXM9XCJyb3V0aW5lc1wiIDpkaXNjaXBsaW5lPVwiZGlzY2lwbGluZVwiIDpyb3V0aW5lLWtleT1cInJvdXRpbmVLZXlcIj48L3JvdXRpbmUtdmlkZW8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCdleGVjdXRpb24nKVwiIHRpdGxlPVwiRXhlY3V0aW9uXCI+RXhlY3V0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cImV4ZWN1dGlvblwiIDpuYW1lPVwiZm9ybUlkKCdleGVjdXRpb24nKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCdkaWZmaWN1bHR5JylcIiB0aXRsZT1cIkRpZmZpY3VsdHlcIj5EaWZmaWN1bHR5PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cImRpZmZpY3VsdHlcIiA6bmFtZT1cImZvcm1JZCgnZGlmZmljdWx0eScpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJylcIiB0aXRsZT1cIk5ldXRyYWwgRGVkdWN0aW9uXCI+TkQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwibmV1dHJhbF9kZWR1Y3Rpb25cIiA6bmFtZT1cImZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCd0b3RhbF9zY29yZScpXCIgdGl0bGU9XCJUb3RhbCBTY29yZVwiPlRvdGFsIFNjb3JlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cInRvdGFsX3Njb3JlXCIgOm5hbWU9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU2NvcmVNaXhpbiBmcm9tICcuLi8uLi9taXhpbnMvc2NvcmUubWl4aW4nO1xuICAgIGltcG9ydCBUdW1ibGluZ1Njb3JlIGZyb20gJy4uLy4uL1R1bWJsaW5nU2NvcmUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpc2NpcGxpbmU6ICd0dW1ibGluZycsXG4gICAgICAgICAgICAgICAgcm91dGluZXM6ICd0dW1ibGluZ1Bhc3NlcycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWl4aW5zOiBbU2NvcmVNaXhpbl1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVHVtYmxpbmdTY29yZS52dWU/OGViMmEyMzgiLCJcbndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxucmVxdWlyZSgnYm9vdHN0cmFwLXNhc3MnKTtcblxuLyoqXG4gKiBWdWUgaXMgYSBtb2Rlcm4gSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyBpbnRlcmFjdGl2ZSB3ZWIgaW50ZXJmYWNlc1xuICogdXNpbmcgcmVhY3RpdmUgZGF0YSBiaW5kaW5nIGFuZCByZXVzYWJsZSBjb21wb25lbnRzLiBWdWUncyBBUEkgaXMgY2xlYW5cbiAqIGFuZCBzaW1wbGUsIGxlYXZpbmcgeW91IHRvIGZvY3VzIG9uIGJ1aWxkaW5nIHlvdXIgbmV4dCBncmVhdCBwcm9qZWN0LlxuICovXG5cbndpbmRvdy5WdWUgPSByZXF1aXJlKCd2dWUnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge1xuICAgICdYLUNTUkYtVE9LRU4nOiB3aW5kb3cuTGFyYXZlbC5jc3JmVG9rZW4sXG4gICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG59O1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSBcImxhcmF2ZWwtZWNob1wiXG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6ICd5b3VyLXB1c2hlci1rZXknXG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IFRyYW1wb2xpbmVTY29yZSBmcm9tICcuL1RyYW1wb2xpbmVTY29yZSc7XG5pbXBvcnQgRG91YmxlTWluaVNjb3JlIGZyb20gJy4vRG91YmxlTWluaVNjb3JlJztcbmltcG9ydCBUdW1ibGluZ1Njb3JlIGZyb20gJy4vVHVtYmxpbmdTY29yZSc7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuXG4gICAgc3RyaWN0OiBmYWxzZSxcblxuICAgIC8qXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8IFN0YXRlXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8XG4gICAgIHwgU2luZ2xlIFN0YXRlIFRyZWVcbiAgICAgfFxuICAgICB8IFZ1ZXggdXNlcyBhIHNpbmdsZSBzdGF0ZSB0cmVlIC0gdGhhdCBpcywgdGhpcyBzaW5nbGUgb2JqZWN0IGNvbnRhaW5zIGFsbFxuICAgICB8IHlvdXIgYXBwbGljYXRpb24gbGV2ZWwgc3RhdGUgYW5kIHNlcnZlcyBhcyB0aGUgXCJzaW5nbGUgc291cmNlIG9mIHRydXRoXCIuXG4gICAgIHwgVGhpcyBhbHNvIG1lYW5zIHVzdWFsbHkgeW91IHdpbGwgaGF2ZSBvbmx5IG9uZSBzdG9yZSBmb3IgZWFjaCBhcHBsaWNhdGlvbi5cbiAgICAgfCBBIHNpbmdsZSBzdGF0ZSB0cmVlIG1ha2VzIGl0IHN0cmFpZ2h0Zm9yd2FyZCB0byBsb2NhdGUgYSBzcGVjaWZpYyBwaWVjZSBvZlxuICAgICB8IHN0YXRlLCBhbmQgYWxsb3dzIHVzIHRvIGVhc2lseSB0YWtlIHNuYXBzaG90cyBvZiB0aGUgY3VycmVudCBhcHAgc3RhdGUgZm9yXG4gICAgIHwgZGVidWdnaW5nIHB1cnBvc2VzLlxuICAgICB8XG4gICAgICovXG4gICAgc3RhdGU6IHtcbiAgICAgICAgY29tcGV0aXRpb25faWQ6IG51bGwsXG5cbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIGxvY2F0aW9uOiBudWxsLFxuICAgICAgICBzdGFydF9kYXRlOiBudWxsLFxuICAgICAgICBlbmRfZGF0ZTogbnVsbCxcblxuICAgICAgICB0cmFtcG9saW5lUm91dGluZXM6IHtcbiAgICAgICAgICAgIHByZWxpbV9jb21wdWxzb3J5OiBuZXcgVHJhbXBvbGluZVNjb3JlKCksXG4gICAgICAgICAgICBwcmVsaW1fb3B0aW9uYWw6IG5ldyBUcmFtcG9saW5lU2NvcmUoKSxcbiAgICAgICAgICAgIHNlbWlfZmluYWxfb3B0aW9uYWw6IG5ldyBUcmFtcG9saW5lU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX29wdGlvbmFsOiBuZXcgVHJhbXBvbGluZVNjb3JlKCksXG4gICAgICAgIH0sXG4gICAgICAgIGRvdWJsZU1pbmlQYXNzZXM6IHtcbiAgICAgICAgICAgIHByZWxpbV9wYXNzXzE6IG5ldyBEb3VibGVNaW5pU2NvcmUoKSxcbiAgICAgICAgICAgIHByZWxpbV9wYXNzXzI6IG5ldyBEb3VibGVNaW5pU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX3Bhc3NfMzogbmV3IERvdWJsZU1pbmlTY29yZSgpLFxuICAgICAgICAgICAgZmluYWxfcGFzc180OiBuZXcgRG91YmxlTWluaVNjb3JlKCksXG4gICAgICAgIH0sXG4gICAgICAgIHR1bWJsaW5nUGFzc2VzOiB7XG4gICAgICAgICAgICBwcmVsaW1fcGFzc18xOiBuZXcgVHVtYmxpbmdTY29yZSgpLFxuICAgICAgICAgICAgcHJlbGltX3Bhc3NfMjogbmV3IFR1bWJsaW5nU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX3Bhc3NfMzogbmV3IFR1bWJsaW5nU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX3Bhc3NfNDogbmV3IFR1bWJsaW5nU2NvcmUoKSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfCBBY3Rpb25zXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8XG4gICAgIHwgQWN0aW9ucyBhcmUgc2ltaWxhciB0byBtdXRhdGlvbnMsIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQ6XG4gICAgIHxcbiAgICAgfCAqIEluc3RlYWQgb2YgbXV0YXRpbmcgdGhlIHN0YXRlLCBhY3Rpb25zIGNvbW1pdCBtdXRhdGlvbnMuXG4gICAgIHwgKiBBY3Rpb25zIGNhbiBjb250YWluIGFyYml0cmFyeSBhc3luY2hyb25vdXMgb3BlcmF0aW9ucy5cbiAgICAgfFxuICAgICAqL1xuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgTE9BRF9DT01QRVRJVElPTjogKGNvbnRleHQsIGNvbXBldGl0aW9uSWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9jb21wZXRpdGlvbnMvJyArIGNvbXBldGl0aW9uSWQpLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBldGl0aW9uID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcGV0aXRpb246ICcsIGNvbXBldGl0aW9uKTtcblxuICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX0NPTVBFVElUSU9OX0lEJywgY29tcGV0aXRpb24uaWQpO1xuICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX0NPTVBFVElUSU9OX0ZJRUxEUycsIHsgZmllbGRzOiBjb21wZXRpdGlvbiB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChjb21wZXRpdGlvbi50cmFtcG9saW5lU2NvcmVzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX1RSQU1QT0xJTkVfU0NPUkVTJywge3Njb3JlczogY29tcGV0aXRpb24udHJhbXBvbGluZVNjb3Jlcy5kYXRhfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBldGl0aW9uLmRvdWJsZU1pbmlTY29yZXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdTRVRfRE9VQkxFX01JTklfU0NPUkVTJywge3Njb3JlczogY29tcGV0aXRpb24uZG91YmxlTWluaVNjb3Jlcy5kYXRhfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBldGl0aW9uLnR1bWJsaW5nU2NvcmVzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX1RVTUJMSU5HX1NDT1JFUycsIHtzY29yZXM6IGNvbXBldGl0aW9uLnR1bWJsaW5nU2NvcmVzLmRhdGF9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfCBNdXRhdGlvbnNcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHxcbiAgICAgfCBUaGUgb25seSB3YXkgdG8gYWN0dWFsbHkgY2hhbmdlIHN0YXRlIGluIGEgVnVleCBzdG9yZSBpcyBieSBjb21taXR0aW5nXG4gICAgIHwgYSBtdXRhdGlvbi4gVnVleCBtdXRhdGlvbnMgYXJlIHZlcnkgc2ltaWxhciB0byBldmVudHM6IGVhY2ggbXV0YXRpb24gaGFzXG4gICAgIHwgYSBzdHJpbmcgdHlwZSBhbmQgYSBoYW5kbGVyLiBUaGUgaGFuZGxlciBmdW5jdGlvbiBpcyB3aGVyZSB3ZSBwZXJmb3JtXG4gICAgIHwgYWN0dWFsIHN0YXRlIG1vZGlmaWNhdGlvbnMsIGFuZCBpdCB3aWxsIHJlY2VpdmUgdGhlIHN0YXRlIGFzIHRoZSBmaXJzdFxuICAgICB8IGFyZ3VtZW50LlxuICAgICB8XG4gICAgICovXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFNFVF9DT01QRVRJVElPTl9JRDogKHN0YXRlLCBpZCkgPT4ge1xuICAgICAgICAgICAgc3RhdGUuY29tcGV0aXRpb25faWQgPSBpZDtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfQ09NUEVUSVRJT05fRklFTERTOiAoc3RhdGUsIHsgZmllbGRzIH0pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmllbGRzLnRpdGxlO1xuICAgICAgICAgICAgc3RhdGUubG9jYXRpb24gPSBmaWVsZHMubG9jYXRpb247XG4gICAgICAgICAgICBzdGF0ZS5zdGFydF9kYXRlID0gbW9tZW50KGZpZWxkcy5zdGFydF9kYXRlLmRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAgICAgc3RhdGUuZW5kX2RhdGUgPSBtb21lbnQoZmllbGRzLmVuZF9kYXRlLmRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9USVRMRTogKHN0YXRlLCB0aXRsZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfTE9DQVRJT046IChzdGF0ZSwgbG9jYXRpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX1NUQVJUX0RBVEU6IChzdGF0ZSwgc3RhcnRfZGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhcnRfZGF0ZSA9IHN0YXJ0X2RhdGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX0VORF9EQVRFOiAoc3RhdGUsIGVuZF9kYXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5lbmRfZGF0ZSA9IGVuZF9kYXRlO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9TQ09SRVM6IChzdGF0ZSwgeyBzY29yZXMsIHNjb3JlQ2xhc3N9KSA9PiB7XG4gICAgICAgICAgICBzY29yZXMuZm9yRWFjaCgoc2NvcmUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmVJbnN0YW5jZSA9IG5ldyBzY29yZUNsYXNzKCk7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlTWFwID0ge307XG5cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzY29yZUluc3RhbmNlLmF0dHJzKS5mb3JFYWNoKChzY29yZVBhcnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVNYXBbc2NvcmVQYXJ0XSA9IHNjb3JlW3Njb3JlUGFydF07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzY29yZUluc3RhbmNlLnVwZGF0ZUF0dHJpYnV0ZXMoc2NvcmVNYXApO1xuICAgICAgICAgICAgICAgIHNjb3JlSW5zdGFuY2Uuc2V0SWQoc2NvcmUuaWQpO1xuICAgICAgICAgICAgICAgIHNjb3JlSW5zdGFuY2Uuc2V0VmlkZW9JZChzY29yZS52aWRlb19pZCk7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3JlLnZpZGVvLmRhdGEuaGFzT3duUHJvcGVydHkoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVJbnN0YW5jZS5zZXRWaWRlb0ZpbGVuYW1lKHNjb3JlLnZpZGVvLmRhdGEudGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY29yZUluc3RhbmNlLnZpZGVvRmlsZW5hbWUpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnR1bWJsaW5nUGFzc2VzW3Njb3JlLnJvdXRpbmVdID0gc2NvcmVJbnN0YW5jZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9ST1VUSU5FX1BST1BFUlRZOiAoc3RhdGUsIHsgZGlzY2lwbGluZSwgcm91dGluZUtleSwgY29tcG9uZW50LCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZVtkaXNjaXBsaW5lXVtyb3V0aW5lS2V5XS5hdHRyc1tjb21wb25lbnRdLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgIT09ICd0b3RhbF9zY29yZScpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtkaXNjaXBsaW5lXVtyb3V0aW5lS2V5XS5jb21wdXRlVG90YWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uc2V0VG90YWwodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9UUkFNUE9MSU5FX1NDT1JFUzogKHN0YXRlLCB7IHNjb3JlcyB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuY29tbWl0KCdTRVRfU0NPUkVTJywge1xuICAgICAgICAgICAgICAgIHNjb3JlcyxcbiAgICAgICAgICAgICAgICBzY29yZUNsYXNzOiBUcmFtcG9saW5lU2NvcmVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9ET1VCTEVfTUlOSV9TQ09SRVM6IChzdGF0ZSwgeyBzY29yZXMgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmNvbW1pdCgnU0VUX1NDT1JFUycsIHtcbiAgICAgICAgICAgICAgICBzY29yZXMsXG4gICAgICAgICAgICAgICAgc2NvcmVDbGFzczogRG91YmxlTWluaVNjb3JlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfVFVNQkxJTkdfU0NPUkVTOiAoc3RhdGUsIHsgc2NvcmVzIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5jb21taXQoJ1NFVF9TQ09SRVMnLCB7XG4gICAgICAgICAgICAgICAgc2NvcmVzLFxuICAgICAgICAgICAgICAgIHNjb3JlQ2xhc3M6IFR1bWJsaW5nU2NvcmVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIFJFTU9WRV9BVFRBQ0hNRU5UOiAoc3RhdGUsIHsgcm91dGluZXMsIHJvdXRpbmVLZXkgfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVbcm91dGluZXNdW3JvdXRpbmVLZXldLnNldFZpZGVvSWQobnVsbCk7XG4gICAgICAgICAgICBzdGF0ZVtyb3V0aW5lc11bcm91dGluZUtleV0uc2V0VmlkZW9GaWxlbmFtZShudWxsKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIEFUVEFDSF9WSURFTzogKHN0YXRlLCB7IHJvdXRpbmVzLCByb3V0aW5lS2V5LCB2aWRlbyB9KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZVtyb3V0aW5lc11bcm91dGluZUtleV0uc2V0VmlkZW9JZCh2aWRlby5pZCk7XG4gICAgICAgICAgICBzdGF0ZVtyb3V0aW5lc11bcm91dGluZUtleV0uc2V0VmlkZW9GaWxlbmFtZSh2aWRlby50aXRsZSk7XG5cbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLypcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHwgR2V0dGVyc1xuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfFxuICAgICB8IFNvbWV0aW1lcyB3ZSBtYXkgbmVlZCB0byBjb21wdXRlIGRlcml2ZWQgc3RhdGUgYmFzZWQgb24gc3RvcmUgc3RhdGUsIGZvclxuICAgICB8IGV4YW1wbGUgZmlsdGVyaW5nIHRocm91Z2ggYSBsaXN0IG9mIGl0ZW1zIGFuZCBjb3VudGluZyB0aGVtLlxuICAgICB8XG4gICAgICovXG4gICAgZ2V0dGVyczoge1xuICAgICAgICBldmVudENoZWNrZWQ6IChzdGF0ZSwgZ2V0dGVycykgPT4gKGRpc2NpcGxpbmUpID0+IHtcbiAgICAgICAgICAgIGxldCBjaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZVtkaXNjaXBsaW5lXSkuZm9yRWFjaCgocm91dGluZUtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tlZCAmJiBwYXJzZUludChzdGF0ZVtkaXNjaXBsaW5lXVtyb3V0aW5lS2V5XS5hdHRycy50b3RhbF9zY29yZS52YWx1ZSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICAgICAgfSxcblxuICAgICAgICB2YWxpZFJvdXRpbmVzOiAoc3RhdGUsIGdldHRlcnMpID0+IChkaXNjaXBsaW5lKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBudWxsO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZVtkaXNjaXBsaW5lXSkuZm9yRWFjaCgocm91dGluZUtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChzdGF0ZVtkaXNjaXBsaW5lXVtyb3V0aW5lS2V5XS5hdHRycy50b3RhbF9zY29yZS52YWx1ZSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRbcm91dGluZUtleV0gPSBzdGF0ZVtkaXNjaXBsaW5lXVtyb3V0aW5lS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFsbERhdGE6IChzdGF0ZSwgZ2V0dGVycykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb21wZXRpdGlvbl9pZDogc3RhdGUuY29tcGV0aXRpb25faWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHN0YXRlLnRpdGxlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiBzdGF0ZS5zdGFydF9kYXRlLFxuICAgICAgICAgICAgICAgIGVuZF9kYXRlOiBzdGF0ZS5lbmRfZGF0ZSxcblxuICAgICAgICAgICAgICAgIHRyYW1wb2xpbmU6IGdldHRlcnMuZXZlbnRDaGVja2VkKCd0cmFtcG9saW5lUm91dGluZXMnKSxcbiAgICAgICAgICAgICAgICBkbXQ6IGdldHRlcnMuZXZlbnRDaGVja2VkKCdkb3VibGVNaW5pUGFzc2VzJyksXG4gICAgICAgICAgICAgICAgdHVtYmxpbmc6IGdldHRlcnMuZXZlbnRDaGVja2VkKCd0dW1ibGluZ1Bhc3NlcycpLFxuXG4gICAgICAgICAgICAgICAgdHJhbXBvbGluZVJvdXRpbmVzOiBnZXR0ZXJzLnZhbGlkUm91dGluZXMoJ3RyYW1wb2xpbmVSb3V0aW5lcycpLFxuICAgICAgICAgICAgICAgIGRvdWJsZU1pbmlQYXNzZXM6IGdldHRlcnMudmFsaWRSb3V0aW5lcygnZG91YmxlTWluaVBhc3NlcycpLFxuICAgICAgICAgICAgICAgIHR1bWJsaW5nUGFzc2VzOiBnZXR0ZXJzLnZhbGlkUm91dGluZXMoJ3R1bWJsaW5nUGFzc2VzJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8IE1vZHVsZXNcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHxcbiAgICAgfCBEdWUgdG8gdXNpbmcgYSBzaW5nbGUgc3RhdGUgdHJlZSwgYWxsIHN0YXRlIG9mIG91ciBhcHBsaWNhdGlvbiBpc1xuICAgICB8IGNvbnRhaW5lZCBpbnNpZGUgb25lIGJpZyBvYmplY3QuIEhvd2V2ZXIsIGFzIG91ciBhcHBsaWNhdGlvbiBncm93cyBpblxuICAgICB8IHNjYWxlLCB0aGUgc3RvcmUgY2FuIGdldCByZWFsbHkgYmxvYXRlZC5cbiAgICAgfFxuICAgICB8IFRvIGhlbHAgd2l0aCB0aGF0LCBWdWV4IGFsbG93cyB1cyB0byBkaXZpZGUgb3VyIHN0b3JlIGludG8gbW9kdWxlcy5cbiAgICAgfCBFYWNoIG1vZHVsZSBjYW4gY29udGFpbiBpdHMgb3duIHN0YXRlLCBtdXRhdGlvbnMsIGFjdGlvbnMsIGdldHRlcnMsIGFuZFxuICAgICB8IGV2ZW4gbmVzdGVkIG1vZHVsZXMgLSBpdCdzIGZyYWN0YWwgYWxsIHRoZSB3YXkgZG93bi5cbiAgICAgfFxuICAgICAqL1xuICAgIG1vZHVsZXM6IHtcblxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcblxuY2xhc3MgVHVtYmxpbmdTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ3R1bWJsaW5nJztcbiAgICAgICAgdGhpcy5sYWJlbCA9ICdUdW1ibGluZyc7XG4gICAgICAgIHRoaXMucm91dGluZUtleXMgPSBbJ3ByZWxpbV9wYXNzXzEnLCAncHJlbGltX3Bhc3NfMicsICdmaW5hbF9wYXNzXzMnLCAnZmluYWxfcGFzc180J107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUdW1ibGluZ1Njb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvVHVtYmxpbmdTY29yZS5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGV0aXRpb25Gb3JtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03NWJlYjJlYyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29tcGV0aXRpb25Gb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21wZXRpdGlvbkZvcm0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ29tcGV0aXRpb25Gb3JtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NWJlYjJlY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc1YmViMmVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21wZXRpdGlvbkZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA3OTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yOTU0M2Q5MyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBNdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yOTU0M2Q5M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI5NTQzZDkzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUm91dGluZVZpZGVvLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01YjZjMDU0MCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUm91dGluZVZpZGVvLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3V0aW5lVmlkZW8udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUm91dGluZVZpZGVvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01YjZjMDU0MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTViNmMwNTQwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3V0aW5lVmlkZW8udnVlXG4vLyBtb2R1bGUgaWQgPSA3OTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TbWFsbFZpZGVvLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03YjMwODZjNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU21hbGxWaWRlby52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU21hbGxWaWRlby52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBTbWFsbFZpZGVvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YjMwODZjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdiMzA4NmM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVmlkZW9Db21tZW50cy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZWU3YjJlOTQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZpZGVvQ29tbWVudHMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvQ29tbWVudHMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVmlkZW9Db21tZW50cy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZWU3YjJlOTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lZTdiMmU5NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDc5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvUGxheWVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00NTAxNjlhMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9QbGF5ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvUGxheWVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NTAxNjlhM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ1MDE2OWEzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1BsYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IDc5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvVXBsb2FkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi04Y2NmNjY3YSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9VcGxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvVXBsb2FkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04Y2NmNjY3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LThjY2Y2NjdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDc5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvVm90aW5nLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zMTlhOThlOSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9Wb3RpbmcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvVm90aW5nLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMTlhOThlOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMxOWE5OGU5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDc5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0RvdWJsZU1pbmlTY29yZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOTMzOGE2MzYhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0RvdWJsZU1pbmlTY29yZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBEb3VibGVNaW5pU2NvcmUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTkzMzhhNjM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOTMzOGE2MzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9Eb3VibGVNaW5pU2NvcmUudnVlXG4vLyBtb2R1bGUgaWQgPSA3OThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UcmFtcG9saW5lU2NvcmUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWU0ZTNhM2EwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UcmFtcG9saW5lU2NvcmUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UcmFtcG9saW5lU2NvcmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVHJhbXBvbGluZVNjb3JlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lNGUzYTNhMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWU0ZTNhM2EwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVHVtYmxpbmdTY29yZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmE2YThkMjEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1R1bWJsaW5nU2NvcmUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFR1bWJsaW5nU2NvcmUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJhNmE4ZDIxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmE2YThkMjFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW192bS5fdihcIlVwbG9hZCBZb3VyIFZpZGVvc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJldmVudFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRXZlbnRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudCksXG4gICAgICBleHByZXNzaW9uOiBcImV2ZW50XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImV2ZW50XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS5ldmVudCA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUcmFtcG9saW5lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJkb3VibGUgbWluaVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRG91YmxlLW1pbmlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInR1bWJsaW5nXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUdW1ibGluZ1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJ2aXNpYmlsaXR5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJWaXNpYmlsaXR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udmlzaWJpbGl0eSksXG4gICAgICBleHByZXNzaW9uOiBcInZpc2liaWxpdHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidmlzaWJpbGl0eVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0udmlzaWJpbGl0eSA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwcml2YXRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQcml2YXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJ1bmxpc3RlZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVW5saXN0ZWRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInB1YmxpY1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHVibGljXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0ucXVldWVkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiIXF1ZXVlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHVwbG9hZC5zZWxlY3QoJ3ZpZGVvLXVwbG9hZCcpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IFZpZGVvc1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnF1ZXVlZCksXG4gICAgICBleHByZXNzaW9uOiBcInF1ZXVlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHVwbG9hZC5zdGFydCgndmlkZW8tdXBsb2FkJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFydFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3ZtLiR1cGxvYWQucmVzZXQoJ3ZpZGVvLXVwbG9hZCcpO1xuICAgICAgICBfdm0ucXVldWVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgc3R5bGU6ICgnd2lkdGg6ICcgKyBfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5wZXJjZW50Q29tcGxldGUgKyAnJTsnKVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnBlcmNlbnRDb21wbGV0ZSkgKyBcIiUgQ29tcGxldGVcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiR1cGxvYWQuZXJyb3JzKCd2aWRlby11cGxvYWQnKS5sZW5ndGgpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHVwbG9hZC5lcnJvcnMoJ3ZpZGVvLXVwbG9hZCcpWzBdLm1lc3NhZ2UpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXJlc3VsdFwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggPiAwKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCA+IDBcIlxuICAgIH1dXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWRlZmF1bHRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCkgKyBcIiBcIiArIF92bS5fcyhfdm0uX2YoXCJwbHVyYWxpemVcIikoX3ZtLiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGgsICdmaWxlJykpICsgXCIgcmVhZHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDCoFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b2dnbGVTaG93UXVldWVkXG4gICAgfVxuICB9LCBbKF92bS5zaG93UXVldWVkRmlsZXMpID8gX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LXVwXCJcbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uc2hvd1F1ZXVlZEZpbGVzKSA/IF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tbWVudS1kb3duXCJcbiAgfSkgOiBfdm0uX2UoKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvd1F1ZXVlZEZpbGVzKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd1F1ZXVlZEZpbGVzXCJcbiAgICB9XVxuICB9LCBfdm0uX2woKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQpLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGZpbGUubmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLmNvbXBsZXRlKSwgZnVuY3Rpb24oZmlsZSkge1xuICAgIHJldHVybiBfYygnZGl2JywgWyhmaWxlLmVycm9ycy5sZW5ndGgpID8gX2MoJ2RpdicsIFtfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWRhbmdlclwiXG4gICAgfSwgW192bS5fdihfdm0uX3MoZmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhmaWxlLmVycm9yc1swXS5tZXNzYWdlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICghZmlsZS5lcnJvcnMubGVuZ3RoKSA/IF9jKCdkaXYnLCBbX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1zdWNjZXNzXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhmaWxlLm5hbWUpKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZGVkIHN1Y2Nlc3NmdWxseS5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKV0pXG4gIH0pXSwgMildKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTI5NTQzZDkzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yOTU0M2Q5MyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSA4MDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBzY29yZS10aWxlXCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0aW5lLXZpZGVvJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJvdXRpbmVzXCI6IF92bS5yb3V0aW5lcyxcbiAgICAgIFwiZGlzY2lwbGluZVwiOiBfdm0uZGlzY2lwbGluZSxcbiAgICAgIFwicm91dGluZS1rZXlcIjogX3ZtLnJvdXRpbmVLZXlcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnZXhlY3V0aW9uJyksXG4gICAgICBcInRpdGxlXCI6IFwiRXhlY3V0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJFeGVjdXRpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5leGVjdXRpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJleGVjdXRpb25cIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCdleGVjdXRpb24nKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZXhlY3V0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmV4ZWN1dGlvbiA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnZGlmZmljdWx0eScpLFxuICAgICAgXCJ0aXRsZVwiOiBcIkRpZmZpY3VsdHlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRpZmZpY3VsdHlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5kaWZmaWN1bHR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGlmZmljdWx0eVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ2RpZmZpY3VsdHknKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZGlmZmljdWx0eSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5kaWZmaWN1bHR5ID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpLFxuICAgICAgXCJ0aXRsZVwiOiBcIk5ldXRyYWwgRGVkdWN0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJORFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm5ldXRyYWxfZGVkdWN0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwibmV1dHJhbF9kZWR1Y3Rpb25cIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5uZXV0cmFsX2RlZHVjdGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5uZXV0cmFsX2RlZHVjdGlvbiA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgndG90YWxfc2NvcmUnKSxcbiAgICAgIFwidGl0bGVcIjogXCJUb3RhbCBTY29yZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVG90YWwgU2NvcmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3RhbF9zY29yZSksXG4gICAgICBleHByZXNzaW9uOiBcInRvdGFsX3Njb3JlXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgndG90YWxfc2NvcmUnKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udG90YWxfc2NvcmUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG90YWxfc2NvcmUgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJhNmE4ZDIxXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yYTZhOGQyMSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvX192b3RpbmdcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW9fX3ZvdGluZy1idXR0b25cIixcbiAgICBjbGFzczoge1xuICAgICAgJ3ZpZGVvX192b3RpbmctYnV0dG9uLS12b3RlZCc6IF92bS51c2VyVm90ZSA9PSAndXAnXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS52b3RlKCd1cCcpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXBcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnVwKSArIFwiIMKgXFxuXFxuICAgIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW9fX3ZvdGluZy1idXR0b25cIixcbiAgICBjbGFzczoge1xuICAgICAgJ3ZpZGVvX192b3RpbmctYnV0dG9uLS12b3RlZCc6IF92bS51c2VyVm90ZSA9PSAnZG93bidcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnZvdGUoJ2Rvd24nKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmRvd24pICsgXCJcXG5cIildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zMTlhOThlOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzE5YTk4ZTkhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDgwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3ZpZGVvJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW4gdmpzLWJpZy1wbGF5LWNlbnRlcmVkIHZqcy0xNi05XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ2aWRlb1wiLFxuICAgICAgXCJjb250cm9sc1wiOiBcIlwiLFxuICAgICAgXCJwcmVsb2FkXCI6IFwiYXV0b1wiLFxuICAgICAgXCJkYXRhLXNldHVwXCI6IFwie1xcXCJmbHVpZFxcXCI6IHRydWUsIFxcXCJwcmVsb2FkXFxcIjogXFxcImF1dG9cXFwifVwiLFxuICAgICAgXCJwb3N0ZXJcIjogX3ZtLnRodW1ibmFpbFVybFxuICAgIH1cbiAgfSwgW19jKCdzb3VyY2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInZpZGVvL21wNFwiLFxuICAgICAgXCJzcmNcIjogX3ZtLnZpZGVvVXJsXG4gICAgfVxuICB9KV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ1MDE2OWEzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00NTAxNjlhMyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS51cGxvYWRlZCAmJiAhX3ZtLmhhc0F0dGFjaG1lbnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhdXBsb2FkZWQgJiYgIWhhc0F0dGFjaG1lbnRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4teHNcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnICsgX3ZtLnJvdXRpbmVzICsgJy0nICsgX3ZtLnJvdXRpbmVLZXkpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnLFxuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHVwbG9hZC5zZWxlY3QoJ3ZpZGVvLXVwbG9hZCcgKyBfdm0ucm91dGluZXMgKyAnLScgKyBfdm0ucm91dGluZUtleSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXBhcGVyY2xpcFwiXG4gIH0pLCBfdm0uX3YoXCIgQXR0YWNoIFZpZGVvXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udXBsb2FkZWQgfHwgX3ZtLmhhc0F0dGFjaG1lbnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1cGxvYWRlZCB8fCBoYXNBdHRhY2htZW50XCJcbiAgICB9XVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGVja1wiXG4gIH0pLCBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmZpbGVuYW1lKSArIFwiXFxuICAgICAgICBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJlbW92ZS1hdHRhY2htZW50XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0ucmVtb3ZlQXR0YWNobWVudCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUtc2lnblwiXG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnICsgX3ZtLnJvdXRpbmVzICsgJy0nICsgX3ZtLnJvdXRpbmVLZXkpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnICsgcm91dGluZXMgKyAnLScgKyByb3V0aW5lS2V5KS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgc3R5bGU6ICgnd2lkdGg6ICcgKyBfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnICsgX3ZtLnJvdXRpbmVzICsgJy0nICsgX3ZtLnJvdXRpbmVLZXkpLnBlcmNlbnRDb21wbGV0ZSArICclOycpXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnICsgX3ZtLnJvdXRpbmVzICsgJy0nICsgX3ZtLnJvdXRpbmVLZXkpLnBlcmNlbnRDb21wbGV0ZSkgKyBcIiUgQ29tcGxldGVcXG4gICAgICAgIFwiKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01YjZjMDU0MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWI2YzA1NDAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3V0aW5lVmlkZW8udnVlXG4vLyBtb2R1bGUgaWQgPSA4MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS52YWxpZGF0ZUJlZm9yZVN1Ym1pdCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RpdGxlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDb21wZXRpdGlvbiBUaXRsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2NvbnRyb2wnOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGU6dGl0bGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6ICgncmVxdWlyZWQnKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiLFxuICAgICAgYXJnOiBcInRpdGxlXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRpdGxlKSxcbiAgICAgIGV4cHJlc3Npb246IFwidGl0bGVcIixcbiAgICAgIGFyZzogXCJ0aXRsZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0aXRsZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwidGl0bGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50aXRsZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50aXRsZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygndGl0bGUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3RpdGxlJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RpdGxlJykpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJsb2NhdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9jYXRpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvY2F0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwibG9jYXRpb25cIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibG9jYXRpb25cIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcImxvY2F0aW9uXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubG9jYXRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubG9jYXRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoZmFsc2UpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmYWxzZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIkVycm9yIG1lc3NhZ2VcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdmb3JtLWdyb3VwJzogdHJ1ZSwgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdzdGFydF9kYXRlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInN0YXJ0X2RhdGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlN0YXJ0IERhdGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdjb250cm9sJzogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlOnN0YXJ0X2RhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6ICgnZGF0ZV9mb3JtYXQ6WVlZWS1NTS1ERCcpLFxuICAgICAgZXhwcmVzc2lvbjogXCInZGF0ZV9mb3JtYXQ6WVlZWS1NTS1ERCdcIixcbiAgICAgIGFyZzogXCJzdGFydF9kYXRlXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnN0YXJ0X2RhdGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzdGFydF9kYXRlXCIsXG4gICAgICBhcmc6IFwic3RhcnRfZGF0ZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJzdGFydF9kYXRlXCIsXG4gICAgICBcInR5cGVcIjogXCJkYXRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJzdGFydF9kYXRlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uc3RhcnRfZGF0ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zdGFydF9kYXRlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdzdGFydF9kYXRlJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdzdGFydF9kYXRlJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3N0YXJ0X2RhdGUnKSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdmb3JtLWdyb3VwJzogdHJ1ZSwgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdlbmRfZGF0ZScpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJlbmRfZGF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3RhcnQgRGF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2NvbnRyb2wnOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGU6ZW5kX2RhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6ICgnZGF0ZV9mb3JtYXQ6WVlZWS1NTS1ERCcpLFxuICAgICAgZXhwcmVzc2lvbjogXCInZGF0ZV9mb3JtYXQ6WVlZWS1NTS1ERCdcIixcbiAgICAgIGFyZzogXCJlbmRfZGF0ZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5lbmRfZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcImVuZF9kYXRlXCIsXG4gICAgICBhcmc6IFwiZW5kX2RhdGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZW5kX2RhdGVcIixcbiAgICAgIFwidHlwZVwiOiBcImRhdGVcIixcbiAgICAgIFwibmFtZVwiOiBcImVuZF9kYXRlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZW5kX2RhdGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZW5kX2RhdGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2VuZF9kYXRlJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdlbmRfZGF0ZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdlbmRfZGF0ZScpKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJldmVudC1zZWxlY3Rpb25cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdoNCcsIFtfdm0uX3YoXCJFdmVudHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0cmFtcG9saW5lXCIsXG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJuYW1lXCI6IFwidHJhbXBvbGluZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLnRyYW1wb2xpbmUpID8gX3ZtLl9pKF92bS50cmFtcG9saW5lLCBudWxsKSA+IC0xIDogKF92bS50cmFtcG9saW5lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLnRyYW1wb2xpbmUsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0udHJhbXBvbGluZSA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKF92bS50cmFtcG9saW5lID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS50cmFtcG9saW5lID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgVHJhbXBvbGluZVxcbiAgICAgICAgICAgICAgICBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsID0gIV92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbFxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCJcbiAgfSksIF92bS5fdihcIiBTZW1pLUZpbmFsc1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZSksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbCA9ICFfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbFxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiXG4gIH0pLCBfdm0uX3YoXCIgRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnRyYW1wQ29sU2l6ZVxuICB9LCBbX2MoJ3RyYW1wb2xpbmUtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJDb21wdWxzb3J5XCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX2NvbXB1bHNvcnlcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnRyYW1wQ29sU2l6ZVxuICB9LCBbX2MoJ3RyYW1wb2xpbmUtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQcmVsaW0gT3B0aW9uYWxcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fb3B0aW9uYWxcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50cmFtcENvbFNpemVcbiAgfSwgW19jKCd0cmFtcG9saW5lLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiU2VtaS1GaW5hbFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInNlbWlfZmluYWxfb3B0aW9uYWxcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHJhbXBDb2xTaXplXG4gIH0sIFtfYygndHJhbXBvbGluZS1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkZpbmFsIE9wdGlvbmFsXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwiZmluYWxfb3B0aW9uYWxcIlxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRtdCksXG4gICAgICBleHByZXNzaW9uOiBcImRtdFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJkbXRcIixcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcIm5hbWVcIjogXCJkbXRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiY2hlY2tlZFwiOiBBcnJheS5pc0FycmF5KF92bS5kbXQpID8gX3ZtLl9pKF92bS5kbXQsIG51bGwpID4gLTEgOiAoX3ZtLmRtdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIl9fY1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IF92bS5kbXQsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uZG10ID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLmRtdCA9ICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdm0uZG10ID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgRG91YmxlIE1pbmlcXG4gICAgICAgICAgICAgICAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5kbXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwgPSAhX3ZtLmRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIlxuICB9KSwgX3ZtLl92KFwiIEZpbmFsc1xcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5kbXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0uZG10Q29sU2l6ZVxuICB9LCBbX2MoJ2RtdC1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgMVwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9wYXNzXzFcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLmRtdENvbFNpemVcbiAgfSwgW19jKCdkbXQtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDJcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18yXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0uZG10Q29sU2l6ZVxuICB9LCBbX2MoJ2RtdC1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgM1wiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcImZpbmFsX3Bhc3NfM1wiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLmRtdENvbFNpemVcbiAgfSwgW19jKCdkbXQtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDRcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJmaW5hbF9wYXNzXzRcIlxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHVtYmxpbmdcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidHVtYmxpbmdcIixcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0dW1ibGluZ1wiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLnR1bWJsaW5nKSA/IF92bS5faShfdm0udHVtYmxpbmcsIG51bGwpID4gLTEgOiAoX3ZtLnR1bWJsaW5nKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLnR1bWJsaW5nLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdik7XG4gICAgICAgICAgaWYgKCQkYykge1xuICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnR1bWJsaW5nID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLnR1bWJsaW5nID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS50dW1ibGluZyA9ICQkY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFR1bWJsaW5nXFxuICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHVtYmxpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwgPSAhX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIlxuICB9KSwgX3ZtLl92KFwiIEZpbmFsc1xcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZyksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnR1bWJsaW5nQ29sU2l6ZVxuICB9LCBbX2MoJ3R1bWJsaW5nLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAxXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfMVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHVtYmxpbmdDb2xTaXplXG4gIH0sIFtfYygndHVtYmxpbmctc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDJcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18yXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50dW1ibGluZ0NvbFNpemVcbiAgfSwgW19jKCd0dW1ibGluZy1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgM1wiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcImZpbmFsX3Bhc3NfM1wiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHVtYmxpbmdDb2xTaXplXG4gIH0sIFtfYygndHVtYmxpbmctc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDRcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJmaW5hbF9wYXNzXzRcIlxuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5lcnJvcnMuYW55KCkgfHwgIV92bS5ldmVudHNWYWxpZFxuICAgIH1cbiAgfSwgW192bS5fdihcIlN1Ym1pdCBDb21wZXRpdGlvblwiKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzViZWIyZWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc1YmViMmVjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJibG9jayAhaW1wb3J0YW50XCJcbiAgICB9XG4gIH0sIFtfYygnYScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnNob3dWaWRlbyksXG4gICAgICBleHByZXNzaW9uOiBcIiFzaG93VmlkZW9cIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnBsYXlWaWRlbygkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5XCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgUGxheSBWaWRlb1xcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dWaWRlbyksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dWaWRlb1wiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uaGlkZVZpZGVvKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtdXBcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICBIaWRlIFZpZGVvXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndmlkZW8nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpbiB2anMtYmlnLXBsYXktY2VudGVyZWQgdmpzLTE2LTkgdmpzLWhpZGRlblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6ICd2aWRlby0nICsgX3ZtLnZpZGVvSWQsXG4gICAgICBcImNvbnRyb2xzXCI6IFwiXCIsXG4gICAgICBcImRhdGEtc2V0dXBcIjogXCJ7XFxcImZsdWlkXFxcIjogdHJ1ZX1cIixcbiAgICAgIFwicG9zdGVyXCI6IF92bS5pbWcsXG4gICAgICBcIndpZHRoXCI6IF92bS53aWR0aCxcbiAgICAgIFwiaGVpZ2h0XCI6IF92bS5oZWlnaHRcbiAgICB9XG4gIH0sIFtfYygnc291cmNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ2aWRlby9tcDRcIixcbiAgICAgIFwic3JjXCI6IF92bS5zcmNcbiAgICB9XG4gIH0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03YjMwODZjNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2IzMDg2YzYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW192bS5fdihcIlVwbG9hZCBZb3VyIFZpZGVvXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5hbWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJuYW1lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uYXV0aGVudGljYXRlZFxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5uYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImV2ZW50XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJFdmVudFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV2ZW50KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXZlbnRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS5ldmVudCA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUcmFtcG9saW5lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJkb3VibGUgbWluaVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRG91YmxlLW1pbmlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInR1bWJsaW5nXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUdW1ibGluZ1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0udXBsb2FkaW5nKSA/IF9jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZmlsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwidmlkZW9cIixcbiAgICAgIFwiaWRcIjogXCJ2aWRlb1wiLFxuICAgICAgXCJkaXNhYmxlZFwiOiAhX3ZtLm5hbWUgfHwgIV92bS5ldmVudFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5maWxlSW5wdXRDaGFuZ2VcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uZmFpbGVkKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0udXBsb2FkaW5nICYmICFfdm0uZmFpbGVkKSA/IF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ2aWRlby1mb3JtXCJcbiAgICB9XG4gIH0sIFsoIV92bS51cGxvYWRpbmdDb21wbGV0ZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWluZm9cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcmVmcmVzaCBmYS1zcGluXCJcbiAgfSksIF92bS5fdihcIiBZb3VyIHZpZGVvIGlzIHVwbG9hZGluZy4uLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0udXBsb2FkaW5nQ29tcGxldGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1zdWNjZXNzXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgY29tcGxldGUuIFZpZGVvIGlzIG5vdyBwcm9jZXNzaW5nLiBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIvdmlkZW9zXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJHbyB0byB5b3VyIHZpZGVvcy5cIildKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICghX3ZtLnVwbG9hZGluZ0NvbXBsZXRlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy1iYXJcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIHdpZHRoOiBfdm0uZmlsZVByb2dyZXNzICsgJyUnXG4gICAgfSlcbiAgfSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUaXRsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udGl0bGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0aXRsZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50aXRsZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50aXRsZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZGVzY3JpcHRpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRlc2NyaXB0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kZXNjcmlwdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcImRlc2NyaXB0aW9uXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmRlc2NyaXB0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmRlc2NyaXB0aW9uID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJ2aXNpYmlsaXR5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJWaXNpYmlsaXR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udmlzaWJpbGl0eSksXG4gICAgICBleHByZXNzaW9uOiBcInZpc2liaWxpdHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS52aXNpYmlsaXR5ID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInByaXZhdGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlByaXZhdGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInVubGlzdGVkXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVbmxpc3RlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicHVibGljXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQdWJsaWNcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgcHVsbC1yaWdodFwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zYXZlU3RhdHVzKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU2F2ZSBDaGFuZ2VzXCIpXSldKSA6IF92bS5fZSgpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi04Y2NmNjY3YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOGNjZjY2N2EhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDgwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRpbmUtdmlkZW8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm91dGluZXNcIjogX3ZtLnJvdXRpbmVzLFxuICAgICAgXCJkaXNjaXBsaW5lXCI6IF92bS5kaXNjaXBsaW5lLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBfdm0ucm91dGluZUtleVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdleGVjdXRpb24nKSxcbiAgICAgIFwidGl0bGVcIjogXCJFeGVjdXRpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV4ZWN1dGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV4ZWN1dGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcImV4ZWN1dGlvblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ2V4ZWN1dGlvbicpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5leGVjdXRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXhlY3V0aW9uID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdkaWZmaWN1bHR5JyksXG4gICAgICBcInRpdGxlXCI6IFwiRGlmZmljdWx0eVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGlmZmljdWx0eVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRpZmZpY3VsdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkaWZmaWN1bHR5XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnZGlmZmljdWx0eScpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5kaWZmaWN1bHR5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmRpZmZpY3VsdHkgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJyksXG4gICAgICBcInRpdGxlXCI6IFwiTmV1dHJhbCBEZWR1Y3Rpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk5EXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0ubmV1dHJhbF9kZWR1Y3Rpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJuZXV0cmFsX2RlZHVjdGlvblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm5ldXRyYWxfZGVkdWN0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm5ldXRyYWxfZGVkdWN0aW9uID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgXCJ0aXRsZVwiOiBcIlRvdGFsIFNjb3JlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUb3RhbCBTY29yZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdGFsX3Njb3JlKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG90YWxfc2NvcmVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50b3RhbF9zY29yZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3RhbF9zY29yZSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOTMzOGE2MzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTkzMzhhNjM2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRpbmUtdmlkZW8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm91dGluZXNcIjogX3ZtLnJvdXRpbmVzLFxuICAgICAgXCJkaXNjaXBsaW5lXCI6IF92bS5kaXNjaXBsaW5lLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBfdm0ucm91dGluZUtleVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdleGVjdXRpb24nKSxcbiAgICAgIFwidGl0bGVcIjogXCJFeGVjdXRpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV4ZWN1dGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV4ZWN1dGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcImV4ZWN1dGlvblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ2V4ZWN1dGlvbicpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5leGVjdXRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXhlY3V0aW9uID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdkaWZmaWN1bHR5JyksXG4gICAgICBcInRpdGxlXCI6IFwiRGlmZmljdWx0eVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGlmZmljdWx0eVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRpZmZpY3VsdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkaWZmaWN1bHR5XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnZGlmZmljdWx0eScpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5kaWZmaWN1bHR5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmRpZmZpY3VsdHkgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ3RpbWVfb2ZfZmxpZ2h0JyksXG4gICAgICBcInRpdGxlXCI6IFwiVGltZSBvZiBGbGlnaHRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRPRlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRpbWVfb2ZfZmxpZ2h0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidGltZV9vZl9mbGlnaHRcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCd0aW1lX29mX2ZsaWdodCcpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50aW1lX29mX2ZsaWdodClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50aW1lX29mX2ZsaWdodCA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQnKSxcbiAgICAgIFwidGl0bGVcIjogXCJIb3Jpem9udGFsIERpc3BsYWNlbWVudFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSERcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5ob3Jpem9udGFsX2Rpc3BsYWNlbWVudCksXG4gICAgICBleHByZXNzaW9uOiBcImhvcml6b250YWxfZGlzcGxhY2VtZW50XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQnKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJyksXG4gICAgICBcInRpdGxlXCI6IFwiTmV1dHJhbCBEZWR1Y3Rpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk5EXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0ubmV1dHJhbF9kZWR1Y3Rpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJuZXV0cmFsX2RlZHVjdGlvblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm5ldXRyYWxfZGVkdWN0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm5ldXRyYWxfZGVkdWN0aW9uID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgXCJ0aXRsZVwiOiBcIlRvdGFsIFNjb3JlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUb3RhbCBTY29yZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdGFsX3Njb3JlKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG90YWxfc2NvcmVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50b3RhbF9zY29yZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3RhbF9zY29yZSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZTRlM2EzYTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWU0ZTNhM2EwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncCcsIFtfdm0uX3YoX3ZtLl9zKF92bS5jb21tZW50cy5sZW5ndGgpICsgXCIgXCIgKyBfdm0uX3MoX3ZtLl9mKFwicGx1cmFsaXplXCIpKF92bS5jb21tZW50cy5sZW5ndGgsICdjb21tZW50JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvLWNvbW1lbnQgY2xlYXJmaXhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZlwiOiBcIiRyb290LnVzZXIuYXV0aGVudGljYXRlZFwiXG4gICAgfVxuICB9LCBbX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmJvZHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJib2R5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgdmlkZW8tY29tbWVudF9faW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlNheSBzb21ldGhpbmcuLi5cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5ib2R5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmJvZHkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjEwcHhcIlxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5jcmVhdGVDb21tZW50KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFsoX3ZtLnBvc3RpbmcpID8gX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCJcbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFBvc3RcXG4gICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1saXN0XCJcbiAgfSwgX3ZtLl9sKChfdm0uY29tbWVudHMpLCBmdW5jdGlvbihjb21tZW50KSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLWxlZnRcIlxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBfdm0udXNlclVybChjb21tZW50KVxuICAgICAgfVxuICAgIH0sIFtfYygnaW1nJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtb2JqZWN0IGltZy1hdmF0YXJcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IGNvbW1lbnQudXNlci5kYXRhLmltYWdlLFxuICAgICAgICBcImFsdFwiOiBjb21tZW50LnVzZXIuZGF0YS5uYW1lXG4gICAgICB9XG4gICAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtYm9keVwiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKGNvbW1lbnQpXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoY29tbWVudC51c2VyLmRhdGEubmFtZSkpXSksIF92bS5fdihcIiBcIiArIF92bS5fcyhjb21tZW50LmNyZWF0ZWRfYXRfaHVtYW4pICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgXCIpLCAoY29tbWVudC5yZXBsaWVzLmRhdGEubGVuZ3RoKSA/IF9jKCdzcGFuJywgW192bS5fdihcIihcIiArIF92bS5fcyhjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGgpICsgXCIgIFwiICsgX3ZtLl9zKF92bS5fZihcInBsdXJhbGl6ZVwiKShjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGgsICdyZXBseScsICdyZXBsaWVzJykpICsgXCIpXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KF92bS5fcyhjb21tZW50LmJvZHkpKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiRyb290LnVzZXIuYXV0aGVudGljYXRlZCkgPyBfYygndWwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWlubGluZVwiXG4gICAgfSwgW19jKCdsaScsIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLnRvZ2dsZVJlcGx5Rm9ybShjb21tZW50LmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucmVwbHlGb3JtVmlzaWJsZSA9PT0gY29tbWVudC5pZCA/ICdDYW5jZWwgcmVwbHknIDogJ1JlcGx5JykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIChjb21tZW50LnVzZXJfaWQgPT09IF92bS4kcm9vdC51c2VyLmlkKSA/IF9jKCdsaScsIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLmRlbGV0ZUNvbW1lbnQoY29tbWVudC5pZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFsoX3ZtLmRlbGV0aW5nID09PSBjb21tZW50LmlkKSA/IF9jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCJcbiAgICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5yZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50LmlkKSA/IF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1jb21tZW50IGNsZWFyXCJcbiAgICB9LCBbX2MoJ3RleHRhcmVhJywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgdmFsdWU6IChfdm0ucmVwbHlCb2R5KSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJyZXBseUJvZHlcIlxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgdmlkZW8tY29tbWVudF9faW5wdXRcIixcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogKF92bS5yZXBseUJvZHkpXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgX3ZtLnJlcGx5Qm9keSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodFwiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMTBweFwiXG4gICAgICB9XG4gICAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uY3JlYXRlUmVwbHkoY29tbWVudC5pZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFsoX3ZtLnJlcGx5aW5nKSA/IF9jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCJcbiAgICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgUmVwbHlcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChjb21tZW50LnJlcGxpZXMuZGF0YSksIGZ1bmN0aW9uKHJlcGx5KSB7XG4gICAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWFcIlxuICAgICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLWxlZnRcIlxuICAgICAgfSwgW19jKCdhJywge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiaHJlZlwiOiBfdm0udXNlclVybChyZXBseSlcbiAgICAgICAgfVxuICAgICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLW9iamVjdCBpbWctYXZhdGFyXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJzcmNcIjogcmVwbHkudXNlci5kYXRhLmltYWdlLFxuICAgICAgICAgIFwiYWx0XCI6IHJlcGx5LnVzZXIuZGF0YS5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtYm9keVwiXG4gICAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKHJlcGx5KVxuICAgICAgICB9XG4gICAgICB9LCBbX3ZtLl92KF92bS5fcyhyZXBseS51c2VyLmRhdGEubmFtZSkpXSksIF92bS5fdihcIiBcIiArIF92bS5fcyhyZXBseS5jcmVhdGVkX2F0X2h1bWFuKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygncCcsIFtfdm0uX3YoX3ZtLl9zKHJlcGx5LmJvZHkpKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiRyb290LnVzZXIuYXV0aGVudGljYXRlZCkgPyBfYygndWwnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtaW5saW5lXCJcbiAgICAgIH0sIFtfYygnbGknLCBbKHJlcGx5LnVzZXJfaWQgPT09IF92bS4kcm9vdC51c2VyLmlkKSA/IF9jKCdhJywge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIF92bS5kZWxldGVDb21tZW50KHJlcGx5LmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgWyhfdm0uZGVsZXRpbmcgPT09IHJlcGx5LmlkKSA/IF9jKCdpJywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICAgICAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKV0pXSkgOiBfdm0uX2UoKV0pXSlcbiAgICB9KV0sIDIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZWU3YjJlOTRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWVlN2IyZTk0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDgxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBtYXRoIGZyb20gJ21hdGhqcyc7XG5cbmNsYXNzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hdHRycyA9IHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xuICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlmZmljdWx0eToge1xuICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV1dHJhbF9kZWR1Y3Rpb246IHtcbiAgICAgICAgICAgICAgICBvcmRlcjogMjAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3RhbF9zY29yZToge1xuICAgICAgICAgICAgICAgIG9yZGVyOiAxMDAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aWRlb19pZCA9IG51bGw7XG4gICAgICAgIHRoaXMudmlkZW9GaWxlbmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIH1cblxuICAgIHNldElkKGlkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBzZXRWaWRlb0lkKHZpZGVvSWQpIHtcbiAgICAgICAgdGhpcy52aWRlb19pZCA9IHZpZGVvSWQ7XG4gICAgfVxuXG4gICAgc2V0VmlkZW9GaWxlbmFtZSh2aWRlb0ZpbGVuYW1lKSB7XG4gICAgICAgIHRoaXMudmlkZW9GaWxlbmFtZSA9IHZpZGVvRmlsZW5hbWU7XG4gICAgfVxuXG4gICAgaGFzVmlkZW8oKSB7XG4gICAgICAgIHJldHVybiAhISB0aGlzLnZpZGVvX2lkO1xuICAgIH1cblxuICAgIHVwZGF0ZUF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXR0cnNba2V5XS52YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2NvcmVLZXlzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5hdHRycykuc29ydCgoYSwgYikgPT4geyByZXR1cm4gdGhpcy5hdHRyc1thXS5vcmRlciAtIHRoaXMuYXR0cnNbYl0ub3JkZXI7IH0pO1xuICAgIH1cblxuICAgIGhhc1Njb3JlKCkge1xuICAgICAgICAodGhpcy5hdHRycy50b3RhbF9zY29yZS52YWx1ZSAhPT0gbnVsbCAmJiB0aGlzLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlID4gMCk7XG4gICAgfVxuXG4gICAgYXR0cmlidXRlKGtleSkge1xuICAgICAgICB0aGlzLmF0dHJzW2tleV0udmFsdWU7XG4gICAgfVxuXG4gICAgY29tcHV0ZVRvdGFsKCkge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICB0aGlzLnNjb3JlS2V5cygpLmZvckVhY2goKGNvbXBvbmVudF9rZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRfa2V5ID09PSAnbmV1dHJhbF9kZWR1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc3VtID0gKHRoaXMuYXR0cnMubmV1dHJhbF9kZWR1Y3Rpb24udmFsdWUpID8gbWF0aC5zdWJ0cmFjdChzdW0sIHRoaXMuYXR0cnMubmV1dHJhbF9kZWR1Y3Rpb24udmFsdWUpIDogc3VtO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRfa2V5ICE9PSAndG90YWxfc2NvcmUnKSB7XG4gICAgICAgICAgICAgICAgc3VtID0gKHRoaXMuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUpID8gbWF0aC5hZGQoc3VtLCB0aGlzLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlKSA6IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hdHRycy50b3RhbF9zY29yZS52YWx1ZSA9IG1hdGgucm91bmQoc3VtLCAzKTtcbiAgICB9XG5cbiAgICBzZXRUb3RhbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNjb3JlS2V5cygpLmZvckVhY2goKGNvbXBvbmVudF9rZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRfa2V5ICE9PSAndG90YWxfc2NvcmUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXR0cnMudG90YWxfc2NvcmUudmFsdWUgPSAodmFsdWUgIT09ICcnKSA/IG1hdGgucm91bmQodmFsdWUsIDMpIDogJyc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1Njb3JlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XG5cbmNsYXNzIFRyYW1wb2xpbmVTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ3RyYW1wb2xpbmUnO1xuICAgICAgICB0aGlzLmxhYmVsID0gJ1RyYW1wb2xpbmUnO1xuICAgICAgICB0aGlzLnJvdXRpbmVLZXlzID0gWydwcmVsaW1fY29tcHVsc29yeScsICdwcmVsaW1fb3B0aW9uYWwnLCAnc2VtaV9maW5hbF9vcHRpb25hbCcsICdmaW5hbF9vcHRpb25hbCddO1xuXG4gICAgICAgIHRoaXMuYXR0cnMudGltZV9vZl9mbGlnaHQgPSB7XG4gICAgICAgICAgICBvcmRlcjogMTAsXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXR0cnMuaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQgPSB7XG4gICAgICAgICAgICBvcmRlcjogMTEsXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFtcG9saW5lU2NvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9UcmFtcG9saW5lU2NvcmUuanMiLCJ2YXIgbWF0aCA9IHJlcXVpcmUoJ21hdGhqcycpO1xudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuY29uc3QgU2NvcmVNaXhpbiA9IHtcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICByb3V0aW5lS2V5OiBudWxsLFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBleGVjdXRpb246IHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uYXR0cnMuZXhlY3V0aW9uLnZhbHVlIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfUk9VVElORV9QUk9QRVJUWScsIHsgZGlzY2lwbGluZTogdGhpcy5yb3V0aW5lcywgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LCBjb21wb25lbnQ6ICdleGVjdXRpb24nLCB2YWx1ZSB9KSB9XG4gICAgICAgIH0sXG4gICAgICAgIGRpZmZpY3VsdHk6IHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uYXR0cnMuZGlmZmljdWx0eS52YWx1ZSB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1JPVVRJTkVfUFJPUEVSVFknLCB7IGRpc2NpcGxpbmU6IHRoaXMucm91dGluZXMsIHJvdXRpbmVLZXk6IHRoaXMucm91dGluZUtleSwgY29tcG9uZW50OiAnZGlmZmljdWx0eScsIHZhbHVlIH0pIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGltZV9vZl9mbGlnaHQ6IHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uYXR0cnMudGltZV9vZl9mbGlnaHQudmFsdWUgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkgeyB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9ST1VUSU5FX1BST1BFUlRZJywgeyBkaXNjaXBsaW5lOiB0aGlzLnJvdXRpbmVzLCByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksIGNvbXBvbmVudDogJ3RpbWVfb2ZfZmxpZ2h0JywgdmFsdWUgfSkgfVxuICAgICAgICB9LFxuICAgICAgICBob3Jpem9udGFsX2Rpc3BsYWNlbWVudDoge1xuICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbdGhpcy5yb3V0aW5lc11bdGhpcy5yb3V0aW5lS2V5XS5hdHRycy5ob3Jpem9udGFsX2Rpc3BsYWNlbWVudC52YWx1ZSB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1JPVVRJTkVfUFJPUEVSVFknLCB7IGRpc2NpcGxpbmU6IHRoaXMucm91dGluZXMsIHJvdXRpbmVLZXk6IHRoaXMucm91dGluZUtleSwgY29tcG9uZW50OiAnaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQnLCB2YWx1ZSB9KSB9XG4gICAgICAgIH0sXG4gICAgICAgIG5ldXRyYWxfZGVkdWN0aW9uOiB7XG4gICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVt0aGlzLnJvdXRpbmVzXVt0aGlzLnJvdXRpbmVLZXldLmF0dHJzLm5ldXRyYWxfZGVkdWN0aW9uLnZhbHVlIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfUk9VVElORV9QUk9QRVJUWScsIHsgZGlzY2lwbGluZTogdGhpcy5yb3V0aW5lcywgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LCBjb21wb25lbnQ6ICduZXV0cmFsX2RlZHVjdGlvbicsIHZhbHVlIH0pIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG90YWxfc2NvcmU6IHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uYXR0cnMudG90YWxfc2NvcmUudmFsdWUgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkgeyB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9ST1VUSU5FX1BST1BFUlRZJywgeyBkaXNjaXBsaW5lOiB0aGlzLnJvdXRpbmVzLCByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksIGNvbXBvbmVudDogJ3RvdGFsX3Njb3JlJywgdmFsdWUgfSkgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZm9ybUlkKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLmRpc2NpcGxpbmUsIHRoaXMucm91dGluZUtleSwgY29tcG9uZW50XS5qb2luKCdfJyk7XG4gICAgICAgIH0sXG5cbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVNaXhpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9zY29yZS5taXhpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=