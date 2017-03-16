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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0RvdWJsZU1pbmlTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZXgvZGlzdC92dWV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3M/MjY5MSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy9Db21wZXRpdGlvbkZvcm0udnVlIiwid2VicGFjazovLy9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vUm91dGluZVZpZGVvLnZ1ZSIsIndlYnBhY2s6Ly8vU21hbGxWaWRlby52dWUiLCJ3ZWJwYWNrOi8vL1ZpZGVvQ29tbWVudHMudnVlIiwid2VicGFjazovLy9WaWRlb1BsYXllci52dWUiLCJ3ZWJwYWNrOi8vL1ZpZGVvVXBsb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vVmlkZW9Wb3RpbmcudnVlIiwid2VicGFjazovLy9Eb3VibGVNaW5pU2NvcmUudnVlIiwid2VicGFjazovLy9UcmFtcG9saW5lU2NvcmUudnVlIiwid2VicGFjazovLy9UdW1ibGluZ1Njb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvVHVtYmxpbmdTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UcmFtcG9saW5lU2NvcmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlPzRiZTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZT8wZmQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWU/YWM5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlPzRjODgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWU/MGQ1NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZT84ZDI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZT8wZWNlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWU/NDA2NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWU/ZjZmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWU/MTk5YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWU/N2U3MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1Njb3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvVHJhbXBvbGluZVNjb3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Njb3JlLm1peGluLmpzIl0sIm5hbWVzIjpbIkRvdWJsZU1pbmlTY29yZSIsImRpc2NpcGxpbmUiLCJsYWJlbCIsInJvdXRpbmVLZXlzIiwicmVxdWlyZSIsIlZ1ZSIsImNvbXBvbmVudCIsInVzZSIsIndpbmRvdyIsIkV2ZW50IiwiaW5zdGFsbCIsIm9wdGlvbnMiLCJnZXRKc29uIiwicmVzcG9uc2UiLCJqc29uIiwiaHR0cCIsImhlYWRlcnMiLCJjb21tb24iLCJMYXJhdmVsIiwiY3NyZlRva2VuIiwiYXBwIiwiZWwiLCJkYXRhIiwic3RvcmUiLCJfIiwiJCIsImpRdWVyeSIsImF4aW9zIiwiZGVmYXVsdHMiLCJWdWV4IiwiU3RvcmUiLCJzdHJpY3QiLCJzdGF0ZSIsImNvbXBldGl0aW9uX2lkIiwidGl0bGUiLCJsb2NhdGlvbiIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInRyYW1wb2xpbmVSb3V0aW5lcyIsInByZWxpbV9jb21wdWxzb3J5IiwicHJlbGltX29wdGlvbmFsIiwic2VtaV9maW5hbF9vcHRpb25hbCIsImZpbmFsX29wdGlvbmFsIiwiZG91YmxlTWluaVBhc3NlcyIsInByZWxpbV9wYXNzXzEiLCJwcmVsaW1fcGFzc18yIiwiZmluYWxfcGFzc18zIiwiZmluYWxfcGFzc180IiwidHVtYmxpbmdQYXNzZXMiLCJhY3Rpb25zIiwiTE9BRF9DT01QRVRJVElPTiIsImNvbnRleHQiLCJjb21wZXRpdGlvbklkIiwiZ2V0IiwidGhlbiIsImNvbXBldGl0aW9uIiwiY29uc29sZSIsImxvZyIsImNvbW1pdCIsImlkIiwiZmllbGRzIiwidHJhbXBvbGluZVNjb3JlcyIsImxlbmd0aCIsInNjb3JlcyIsInNjb3JlQ2xhc3MiLCJzdGF0ZUluZGV4IiwiZG91YmxlTWluaVNjb3JlcyIsInR1bWJsaW5nU2NvcmVzIiwibXV0YXRpb25zIiwiU0VUX0NPTVBFVElUSU9OX0lEIiwiU0VUX0NPTVBFVElUSU9OX0ZJRUxEUyIsIm1vbWVudCIsImRhdGUiLCJmb3JtYXQiLCJTRVRfVElUTEUiLCJTRVRfTE9DQVRJT04iLCJTRVRfU1RBUlRfREFURSIsIlNFVF9FTkRfREFURSIsIlNFVF9TQ09SRVMiLCJmb3JFYWNoIiwic2NvcmUiLCJzY29yZUluc3RhbmNlIiwic2NvcmVNYXAiLCJPYmplY3QiLCJrZXlzIiwiYXR0cnMiLCJzY29yZVBhcnQiLCJ1cGRhdGVBdHRyaWJ1dGVzIiwic2V0SWQiLCJzZXRWaWRlb0lkIiwidmlkZW9faWQiLCJ2aWRlbyIsImhhc093blByb3BlcnR5Iiwic2V0VmlkZW9GaWxlbmFtZSIsInJvdXRpbmUiLCJTRVRfUk9VVElORV9QUk9QRVJUWSIsInJvdXRpbmVLZXkiLCJ2YWx1ZSIsImNvbXB1dGVUb3RhbCIsInNldFRvdGFsIiwiUkVNT1ZFX0FUVEFDSE1FTlQiLCJyb3V0aW5lcyIsIkFUVEFDSF9WSURFTyIsImdldHRlcnMiLCJldmVudENoZWNrZWQiLCJjaGVja2VkIiwicGFyc2VJbnQiLCJ0b3RhbF9zY29yZSIsInZhbGlkUm91dGluZXMiLCJ2YWxpZCIsImFsbERhdGEiLCJ0cmFtcG9saW5lIiwiZG10IiwidHVtYmxpbmciLCJtb2R1bGVzIiwiVHVtYmxpbmdTY29yZSIsIlNjb3JlIiwiZXhlY3V0aW9uIiwib3JkZXIiLCJkaWZmaWN1bHR5IiwibmV1dHJhbF9kZWR1Y3Rpb24iLCJ2aWRlb0ZpbGVuYW1lIiwidmlkZW9JZCIsImF0dHJpYnV0ZXMiLCJrZXkiLCJzb3J0IiwiYSIsImIiLCJzdW0iLCJzY29yZUtleXMiLCJjb21wb25lbnRfa2V5IiwibWF0aCIsInN1YnRyYWN0IiwiYWRkIiwicm91bmQiLCJUcmFtcG9saW5lU2NvcmUiLCJ0aW1lX29mX2ZsaWdodCIsImhvcml6b250YWxfZGlzcGxhY2VtZW50IiwiU2NvcmVNaXhpbiIsInByb3BzIiwiY29tcHV0ZWQiLCIkc3RvcmUiLCJzZXQiLCJtZXRob2RzIiwiZm9ybUlkIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBOztJQUVNQSxlOzs7QUFDRiwrQkFBYztBQUFBOztBQUFBOztBQUVWLGNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxjQUFLQyxLQUFMLEdBQWEsYUFBYjtBQUNBLGNBQUtDLFdBQUwsR0FBbUIsQ0FBQyxlQUFELEVBQWtCLGVBQWxCLEVBQW1DLGNBQW5DLEVBQW1ELGNBQW5ELENBQW5CO0FBSlU7QUFLYjs7O0VBTnlCLHVEOztBQVM5Qix3REFBZUgsZUFBZixDOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCLElBQUkseUJBQXlCO0FBQ3hFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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Q0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLDhFQUE4RTtBQUM5RSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNoTUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDckpBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDM0NBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhFQUE4RTtBQUNwRztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdkJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0Esb0hBQW9IO0FBQ3BILEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzdEQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2pqQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQXdEO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDaEVBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7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QUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLQTs7Ozs7O0FBRUE7O0lBRU1DLEs7QUFDRixxQkFBYztBQUFBOztBQUNWLGFBQUsvQixLQUFMLEdBQWE7QUFDVGdDLHVCQUFXO0FBQ1BDLHVCQUFPLENBREE7QUFFUHJCLHVCQUFPO0FBRkEsYUFERjtBQUtUc0Isd0JBQVk7QUFDUkQsdUJBQU8sQ0FEQztBQUVSckIsdUJBQU87QUFGQyxhQUxIO0FBU1R1QiwrQkFBbUI7QUFDZkYsdUJBQU8sRUFEUTtBQUVmckIsdUJBQU87QUFGUSxhQVRWO0FBYVRVLHlCQUFhO0FBQ1RXLHVCQUFPLEdBREU7QUFFVHJCLHVCQUFPO0FBRkU7QUFiSixTQUFiOztBQW1CQSxhQUFLUCxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsYUFBSytCLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxhQUFLOUQsRUFBTCxHQUFVLElBQVY7QUFDSDs7Ozs4QkFFS0EsRSxFQUFJO0FBQ04saUJBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNIOzs7bUNBRVUrRCxPLEVBQVM7QUFDaEIsaUJBQUtoQyxRQUFMLEdBQWdCZ0MsT0FBaEI7QUFDSDs7O3lDQUVnQkQsYSxFQUFlO0FBQzVCLGlCQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNIOzs7bUNBRVU7QUFDUCxtQkFBTyxDQUFDLENBQUUsS0FBSy9CLFFBQWY7QUFDSDs7O3lDQUVnQmlDLFUsRUFBWTtBQUFBOztBQUN6QnhDLG1CQUFPQyxJQUFQLENBQVl1QyxVQUFaLEVBQXdCNUMsT0FBeEIsQ0FBZ0MsVUFBQzZDLEdBQUQsRUFBUztBQUNyQyxzQkFBS3ZDLEtBQUwsQ0FBV3VDLEdBQVgsRUFBZ0IzQixLQUFoQixHQUF3QjBCLFdBQVdDLEdBQVgsQ0FBeEI7QUFDSCxhQUZEO0FBR0g7OztvQ0FFVztBQUFBOztBQUNSLG1CQUFPekMsT0FBT0MsSUFBUCxDQUFZLEtBQUtDLEtBQWpCLEVBQXdCd0MsSUFBeEIsQ0FBNkIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFBRSx1QkFBTyxPQUFLMUMsS0FBTCxDQUFXeUMsQ0FBWCxFQUFjUixLQUFkLEdBQXNCLE9BQUtqQyxLQUFMLENBQVcwQyxDQUFYLEVBQWNULEtBQTNDO0FBQW1ELGFBQTVGLENBQVA7QUFDSDs7O21DQUVVO0FBQ04saUJBQUtqQyxLQUFMLENBQVdzQixXQUFYLENBQXVCVixLQUF2QixLQUFpQyxJQUFqQyxJQUF5QyxLQUFLWixLQUFMLENBQVdzQixXQUFYLENBQXVCVixLQUF2QixHQUErQixDQUF6RTtBQUNIOzs7a0NBRVMyQixHLEVBQUs7QUFDWCxpQkFBS3ZDLEtBQUwsQ0FBV3VDLEdBQVgsRUFBZ0IzQixLQUFoQjtBQUNIOzs7dUNBRWM7QUFBQTs7QUFDWCxnQkFBSStCLE1BQU0sQ0FBVjs7QUFFQSxpQkFBS0MsU0FBTCxHQUFpQmxELE9BQWpCLENBQXlCLFVBQUNtRCxhQUFELEVBQW1CO0FBQ3hDLG9CQUFJQSxrQkFBa0IsbUJBQXRCLEVBQTJDO0FBQ3ZDRiwwQkFBTyxPQUFLM0MsS0FBTCxDQUFXbUMsaUJBQVgsQ0FBNkJ2QixLQUE5QixHQUF1Qyw4Q0FBQWtDLENBQUtDLFFBQUwsQ0FBY0osR0FBZCxFQUFtQixPQUFLM0MsS0FBTCxDQUFXbUMsaUJBQVgsQ0FBNkJ2QixLQUFoRCxDQUF2QyxHQUFnRytCLEdBQXRHO0FBQ0gsaUJBRkQsTUFFTyxJQUFJRSxrQkFBa0IsYUFBdEIsRUFBcUM7QUFDeENGLDBCQUFPLE9BQUszQyxLQUFMLENBQVc2QyxhQUFYLEVBQTBCakMsS0FBM0IsR0FBb0MsOENBQUFrQyxDQUFLRSxHQUFMLENBQVNMLEdBQVQsRUFBYyxPQUFLM0MsS0FBTCxDQUFXNkMsYUFBWCxFQUEwQmpDLEtBQXhDLENBQXBDLEdBQXFGK0IsR0FBM0Y7QUFDSDtBQUNKLGFBTkQ7O0FBUUEsaUJBQUszQyxLQUFMLENBQVdzQixXQUFYLENBQXVCVixLQUF2QixHQUErQiw4Q0FBQWtDLENBQUtHLEtBQUwsQ0FBV04sR0FBWCxFQUFnQixDQUFoQixDQUEvQjtBQUNIOzs7aUNBRVEvQixLLEVBQU87QUFBQTs7QUFDWixpQkFBS2dDLFNBQUwsR0FBaUJsRCxPQUFqQixDQUF5QixVQUFDbUQsYUFBRCxFQUFtQjtBQUN4QyxvQkFBSUEsa0JBQWtCLGFBQXRCLEVBQXFDO0FBQ2pDLDJCQUFLN0MsS0FBTCxDQUFXNkMsYUFBWCxFQUEwQmpDLEtBQTFCLEdBQWtDLElBQWxDO0FBQ0g7QUFDSixhQUpEOztBQU1BLGlCQUFLWixLQUFMLENBQVdzQixXQUFYLENBQXVCVixLQUF2QixHQUFnQ0EsVUFBVSxFQUFYLEdBQWlCLDhDQUFBa0MsQ0FBS0csS0FBTCxDQUFXckMsS0FBWCxFQUFrQixDQUFsQixDQUFqQixHQUF3QyxFQUF2RTtBQUNIOzs7Ozs7QUFHTCx3REFBZW1CLEtBQWYsQzs7Ozs7Ozs7O0FDekZBOzs7Ozs7OztBQUVBOztJQUVNbUIsZTs7O0FBQ0YsK0JBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLdEksVUFBTCxHQUFrQixZQUFsQjtBQUNBLGNBQUtDLEtBQUwsR0FBYSxZQUFiO0FBQ0EsY0FBS0MsV0FBTCxHQUFtQixDQUFDLG1CQUFELEVBQXNCLGlCQUF0QixFQUF5QyxxQkFBekMsRUFBZ0UsZ0JBQWhFLENBQW5COztBQUVBLGNBQUtrRixLQUFMLENBQVdtRCxjQUFYLEdBQTRCO0FBQ3hCbEIsbUJBQU8sRUFEaUI7QUFFeEJyQixtQkFBTztBQUZpQixTQUE1Qjs7QUFLQSxjQUFLWixLQUFMLENBQVdvRCx1QkFBWCxHQUFxQztBQUNqQ25CLG1CQUFPLEVBRDBCO0FBRWpDckIsbUJBQU87QUFGMEIsU0FBckM7O0FBWFU7QUFnQmI7OztFQWpCeUIsdUQ7O0FBb0I5Qix3REFBZXNDLGVBQWYsQzs7Ozs7Ozs7QUN4QkEsSUFBSUosT0FBTyxtQkFBQS9ILENBQVEsRUFBUixDQUFYO0FBQ0EsSUFBSW9CLElBQUksbUJBQUFwQixDQUFRLEVBQVIsQ0FBUjs7QUFFQSxJQUFNc0ksYUFBYTs7QUFFZkMsV0FBTztBQUNIekcsZUFBTyxJQURKO0FBRUg4RCxvQkFBWTtBQUZULEtBRlE7O0FBT2Y0QyxjQUFVO0FBQ052QixtQkFBVztBQUNQaEUsZUFETyxpQkFDRDtBQUFFLHVCQUFPLEtBQUt3RixNQUFMLENBQVk3RyxLQUFaLENBQWtCLEtBQUtxRSxRQUF2QixFQUFpQyxLQUFLTCxVQUF0QyxFQUFrRFgsS0FBbEQsQ0FBd0RnQyxTQUF4RCxDQUFrRXBCLEtBQXpFO0FBQWdGLGFBRGpGO0FBRVA2QyxlQUZPLGVBRUg3QyxLQUZHLEVBRUk7QUFBRSxxQkFBSzRDLE1BQUwsQ0FBWW5GLE1BQVosQ0FBbUIsc0JBQW5CLEVBQTJDLEVBQUV6RCxZQUFZLEtBQUtvRyxRQUFuQixFQUE2QkwsWUFBWSxLQUFLQSxVQUE5QyxFQUEwRDFGLFdBQVcsV0FBckUsRUFBa0YyRixZQUFsRixFQUEzQztBQUF1STtBQUY3SSxTQURMO0FBS05zQixvQkFBWTtBQUNSbEUsZUFEUSxpQkFDRjtBQUFFLHVCQUFPLEtBQUt3RixNQUFMLENBQVk3RyxLQUFaLENBQWtCLEtBQUtxRSxRQUF2QixFQUFpQyxLQUFLTCxVQUF0QyxFQUFrRFgsS0FBbEQsQ0FBd0RrQyxVQUF4RCxDQUFtRXRCLEtBQTFFO0FBQWlGLGFBRGpGO0FBRVI2QyxlQUZRLGVBRUo3QyxLQUZJLEVBRUc7QUFBRSxxQkFBSzRDLE1BQUwsQ0FBWW5GLE1BQVosQ0FBbUIsc0JBQW5CLEVBQTJDLEVBQUV6RCxZQUFZLEtBQUtvRyxRQUFuQixFQUE2QkwsWUFBWSxLQUFLQSxVQUE5QyxFQUEwRDFGLFdBQVcsWUFBckUsRUFBbUYyRixZQUFuRixFQUEzQztBQUF3STtBQUY3SSxTQUxOO0FBU051Qyx3QkFBZ0I7QUFDWm5GLGVBRFksaUJBQ047QUFBRSx1QkFBTyxLQUFLd0YsTUFBTCxDQUFZN0csS0FBWixDQUFrQixLQUFLcUUsUUFBdkIsRUFBaUMsS0FBS0wsVUFBdEMsRUFBa0RYLEtBQWxELENBQXdEbUQsY0FBeEQsQ0FBdUV2QyxLQUE5RTtBQUFxRixhQURqRjtBQUVaNkMsZUFGWSxlQUVSN0MsS0FGUSxFQUVEO0FBQUUscUJBQUs0QyxNQUFMLENBQVluRixNQUFaLENBQW1CLHNCQUFuQixFQUEyQyxFQUFFekQsWUFBWSxLQUFLb0csUUFBbkIsRUFBNkJMLFlBQVksS0FBS0EsVUFBOUMsRUFBMEQxRixXQUFXLGdCQUFyRSxFQUF1RjJGLFlBQXZGLEVBQTNDO0FBQTRJO0FBRjdJLFNBVFY7QUFhTndDLGlDQUF5QjtBQUNyQnBGLGVBRHFCLGlCQUNmO0FBQUUsdUJBQU8sS0FBS3dGLE1BQUwsQ0FBWTdHLEtBQVosQ0FBa0IsS0FBS3FFLFFBQXZCLEVBQWlDLEtBQUtMLFVBQXRDLEVBQWtEWCxLQUFsRCxDQUF3RG9ELHVCQUF4RCxDQUFnRnhDLEtBQXZGO0FBQThGLGFBRGpGO0FBRXJCNkMsZUFGcUIsZUFFakI3QyxLQUZpQixFQUVWO0FBQUUscUJBQUs0QyxNQUFMLENBQVluRixNQUFaLENBQW1CLHNCQUFuQixFQUEyQyxFQUFFekQsWUFBWSxLQUFLb0csUUFBbkIsRUFBNkJMLFlBQVksS0FBS0EsVUFBOUMsRUFBMEQxRixXQUFXLHlCQUFyRSxFQUFnRzJGLFlBQWhHLEVBQTNDO0FBQXFKO0FBRjdJLFNBYm5CO0FBaUJOdUIsMkJBQW1CO0FBQ2ZuRSxlQURlLGlCQUNUO0FBQUUsdUJBQU8sS0FBS3dGLE1BQUwsQ0FBWTdHLEtBQVosQ0FBa0IsS0FBS3FFLFFBQXZCLEVBQWlDLEtBQUtMLFVBQXRDLEVBQWtEWCxLQUFsRCxDQUF3RG1DLGlCQUF4RCxDQUEwRXZCLEtBQWpGO0FBQXdGLGFBRGpGO0FBRWY2QyxlQUZlLGVBRVg3QyxLQUZXLEVBRUo7QUFBRSxxQkFBSzRDLE1BQUwsQ0FBWW5GLE1BQVosQ0FBbUIsc0JBQW5CLEVBQTJDLEVBQUV6RCxZQUFZLEtBQUtvRyxRQUFuQixFQUE2QkwsWUFBWSxLQUFLQSxVQUE5QyxFQUEwRDFGLFdBQVcsbUJBQXJFLEVBQTBGMkYsWUFBMUYsRUFBM0M7QUFBK0k7QUFGN0ksU0FqQmI7QUFxQk5VLHFCQUFhO0FBQ1R0RCxlQURTLGlCQUNIO0FBQUUsdUJBQU8sS0FBS3dGLE1BQUwsQ0FBWTdHLEtBQVosQ0FBa0IsS0FBS3FFLFFBQXZCLEVBQWlDLEtBQUtMLFVBQXRDLEVBQWtEWCxLQUFsRCxDQUF3RHNCLFdBQXhELENBQW9FVixLQUEzRTtBQUFrRixhQURqRjtBQUVUNkMsZUFGUyxlQUVMN0MsS0FGSyxFQUVFO0FBQUUscUJBQUs0QyxNQUFMLENBQVluRixNQUFaLENBQW1CLHNCQUFuQixFQUEyQyxFQUFFekQsWUFBWSxLQUFLb0csUUFBbkIsRUFBNkJMLFlBQVksS0FBS0EsVUFBOUMsRUFBMEQxRixXQUFXLGFBQXJFLEVBQW9GMkYsWUFBcEYsRUFBM0M7QUFBeUk7QUFGN0k7QUFyQlAsS0FQSzs7QUFrQ2Y4QyxhQUFTO0FBQ0xDLGNBREssa0JBQ0UxSSxTQURGLEVBQ2E7QUFDZCxtQkFBTyxDQUFDLEtBQUtMLFVBQU4sRUFBa0IsS0FBSytGLFVBQXZCLEVBQW1DMUYsU0FBbkMsRUFBOEMySSxJQUE5QyxDQUFtRCxHQUFuRCxDQUFQO0FBQ0g7QUFISTtBQWxDTSxDQUFuQjs7QUEwQ0Esd0RBQWVQLFVBQWYsQyIsImZpbGUiOiIvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XG5cbmNsYXNzIERvdWJsZU1pbmlTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ2RtdCc7XG4gICAgICAgIHRoaXMubGFiZWwgPSAnRG91YmxlIE1pbmknO1xuICAgICAgICB0aGlzLnJvdXRpbmVLZXlzID0gWydwcmVsaW1fcGFzc18xJywgJ3ByZWxpbV9wYXNzXzInLCAnZmluYWxfcGFzc18zJywgJ2ZpbmFsX3Bhc3NfNCddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG91YmxlTWluaVNjb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvRG91YmxlTWluaVNjb3JlLmpzIiwiLyoqXG4gKiB2dWV4IHYyLjIuMVxuICogKGMpIDIwMTcgRXZhbiBZb3VcbiAqIEBsaWNlbnNlIE1JVFxuICovXG52YXIgYXBwbHlNaXhpbiA9IGZ1bmN0aW9uIChWdWUpIHtcbiAgdmFyIHZlcnNpb24gPSBOdW1iZXIoVnVlLnZlcnNpb24uc3BsaXQoJy4nKVswXSk7XG5cbiAgaWYgKHZlcnNpb24gPj0gMikge1xuICAgIHZhciB1c2VzSW5pdCA9IFZ1ZS5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmluZGV4T2YoJ2luaXQnKSA+IC0xO1xuICAgIFZ1ZS5taXhpbih1c2VzSW5pdCA/IHsgaW5pdDogdnVleEluaXQgfSA6IHsgYmVmb3JlQ3JlYXRlOiB2dWV4SW5pdCB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBvdmVycmlkZSBpbml0IGFuZCBpbmplY3QgdnVleCBpbml0IHByb2NlZHVyZVxuICAgIC8vIGZvciAxLnggYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgdmFyIF9pbml0ID0gVnVlLnByb3RvdHlwZS5faW5pdDtcbiAgICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gICAgICBvcHRpb25zLmluaXQgPSBvcHRpb25zLmluaXRcbiAgICAgICAgPyBbdnVleEluaXRdLmNvbmNhdChvcHRpb25zLmluaXQpXG4gICAgICAgIDogdnVleEluaXQ7XG4gICAgICBfaW5pdC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVnVleCBpbml0IGhvb2ssIGluamVjdGVkIGludG8gZWFjaCBpbnN0YW5jZXMgaW5pdCBob29rcyBsaXN0LlxuICAgKi9cblxuICBmdW5jdGlvbiB2dWV4SW5pdCAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zO1xuICAgIC8vIHN0b3JlIGluamVjdGlvblxuICAgIGlmIChvcHRpb25zLnN0b3JlKSB7XG4gICAgICB0aGlzLiRzdG9yZSA9IG9wdGlvbnMuc3RvcmU7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnBhcmVudCAmJiBvcHRpb25zLnBhcmVudC4kc3RvcmUpIHtcbiAgICAgIHRoaXMuJHN0b3JlID0gb3B0aW9ucy5wYXJlbnQuJHN0b3JlO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGRldnRvb2xIb29rID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbmZ1bmN0aW9uIGRldnRvb2xQbHVnaW4gKHN0b3JlKSB7XG4gIGlmICghZGV2dG9vbEhvb2spIHsgcmV0dXJuIH1cblxuICBzdG9yZS5fZGV2dG9vbEhvb2sgPSBkZXZ0b29sSG9vaztcblxuICBkZXZ0b29sSG9vay5lbWl0KCd2dWV4OmluaXQnLCBzdG9yZSk7XG5cbiAgZGV2dG9vbEhvb2sub24oJ3Z1ZXg6dHJhdmVsLXRvLXN0YXRlJywgZnVuY3Rpb24gKHRhcmdldFN0YXRlKSB7XG4gICAgc3RvcmUucmVwbGFjZVN0YXRlKHRhcmdldFN0YXRlKTtcbiAgfSk7XG5cbiAgc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uIChtdXRhdGlvbiwgc3RhdGUpIHtcbiAgICBkZXZ0b29sSG9vay5lbWl0KCd2dWV4Om11dGF0aW9uJywgbXV0YXRpb24sIHN0YXRlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBpdGVtIHRoYXQgcGFzcyB0aGUgdGVzdFxuICogYnkgc2Vjb25kIGFyZ3VtZW50IGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gbGlzdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZlxuICogQHJldHVybiB7Kn1cbiAqL1xuLyoqXG4gKiBEZWVwIGNvcHkgdGhlIGdpdmVuIG9iamVjdCBjb25zaWRlcmluZyBjaXJjdWxhciBzdHJ1Y3R1cmUuXG4gKiBUaGlzIGZ1bmN0aW9uIGNhY2hlcyBhbGwgbmVzdGVkIG9iamVjdHMgYW5kIGl0cyBjb3BpZXMuXG4gKiBJZiBpdCBkZXRlY3RzIGNpcmN1bGFyIHN0cnVjdHVyZSwgdXNlIGNhY2hlZCBjb3B5IHRvIGF2b2lkIGluZmluaXRlIGxvb3AuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gY2FjaGVcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuXG4vKipcbiAqIGZvckVhY2ggZm9yIG9iamVjdFxuICovXG5mdW5jdGlvbiBmb3JFYWNoVmFsdWUgKG9iaiwgZm4pIHtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKG9ialtrZXldLCBrZXkpOyB9KTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gIHJldHVybiB2YWwgJiYgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAoY29uZGl0aW9uLCBtc2cpIHtcbiAgaWYgKCFjb25kaXRpb24pIHsgdGhyb3cgbmV3IEVycm9yKChcIlt2dWV4XSBcIiArIG1zZykpIH1cbn1cblxudmFyIE1vZHVsZSA9IGZ1bmN0aW9uIE1vZHVsZSAocmF3TW9kdWxlLCBydW50aW1lKSB7XG4gIHRoaXMucnVudGltZSA9IHJ1bnRpbWU7XG4gIHRoaXMuX2NoaWxkcmVuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fcmF3TW9kdWxlID0gcmF3TW9kdWxlO1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyQxID0geyBzdGF0ZToge30sbmFtZXNwYWNlZDoge30gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fcmF3TW9kdWxlLnN0YXRlIHx8IHt9XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5uYW1lc3BhY2VkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5fcmF3TW9kdWxlLm5hbWVzcGFjZWRcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiBhZGRDaGlsZCAoa2V5LCBtb2R1bGUpIHtcbiAgdGhpcy5fY2hpbGRyZW5ba2V5XSA9IG1vZHVsZTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiByZW1vdmVDaGlsZCAoa2V5KSB7XG4gIGRlbGV0ZSB0aGlzLl9jaGlsZHJlbltrZXldO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uIGdldENoaWxkIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW2tleV1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChyYXdNb2R1bGUpIHtcbiAgdGhpcy5fcmF3TW9kdWxlLm5hbWVzcGFjZWQgPSByYXdNb2R1bGUubmFtZXNwYWNlZDtcbiAgaWYgKHJhd01vZHVsZS5hY3Rpb25zKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMgPSByYXdNb2R1bGUuYWN0aW9ucztcbiAgfVxuICBpZiAocmF3TW9kdWxlLm11dGF0aW9ucykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMgPSByYXdNb2R1bGUubXV0YXRpb25zO1xuICB9XG4gIGlmIChyYXdNb2R1bGUuZ2V0dGVycykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzID0gcmF3TW9kdWxlLmdldHRlcnM7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gZm9yRWFjaENoaWxkIChmbikge1xuICBmb3JFYWNoVmFsdWUodGhpcy5fY2hpbGRyZW4sIGZuKTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaEdldHRlciA9IGZ1bmN0aW9uIGZvckVhY2hHZXR0ZXIgKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycywgZm4pO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hBY3Rpb24gPSBmdW5jdGlvbiBmb3JFYWNoQWN0aW9uIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMsIGZuKTtcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoTXV0YXRpb24gPSBmdW5jdGlvbiBmb3JFYWNoTXV0YXRpb24gKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMsIGZuKTtcbiAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIE1vZHVsZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyQxICk7XG5cbnZhciBNb2R1bGVDb2xsZWN0aW9uID0gZnVuY3Rpb24gTW9kdWxlQ29sbGVjdGlvbiAocmF3Um9vdE1vZHVsZSkge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyByZWdpc3RlciByb290IG1vZHVsZSAoVnVleC5TdG9yZSBvcHRpb25zKVxuICB0aGlzLnJvb3QgPSBuZXcgTW9kdWxlKHJhd1Jvb3RNb2R1bGUsIGZhbHNlKTtcblxuICAvLyByZWdpc3RlciBhbGwgbmVzdGVkIG1vZHVsZXNcbiAgaWYgKHJhd1Jvb3RNb2R1bGUubW9kdWxlcykge1xuICAgIGZvckVhY2hWYWx1ZShyYXdSb290TW9kdWxlLm1vZHVsZXMsIGZ1bmN0aW9uIChyYXdNb2R1bGUsIGtleSkge1xuICAgICAgdGhpcyQxLnJlZ2lzdGVyKFtrZXldLCByYXdNb2R1bGUsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlZHVjZShmdW5jdGlvbiAobW9kdWxlLCBrZXkpIHtcbiAgICByZXR1cm4gbW9kdWxlLmdldENoaWxkKGtleSlcbiAgfSwgdGhpcy5yb290KVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0TmFtZXNwYWNlID0gZnVuY3Rpb24gZ2V0TmFtZXNwYWNlIChwYXRoKSB7XG4gIHZhciBtb2R1bGUgPSB0aGlzLnJvb3Q7XG4gIHJldHVybiBwYXRoLnJlZHVjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBrZXkpIHtcbiAgICBtb2R1bGUgPSBtb2R1bGUuZ2V0Q2hpbGQoa2V5KTtcbiAgICByZXR1cm4gbmFtZXNwYWNlICsgKG1vZHVsZS5uYW1lc3BhY2VkID8ga2V5ICsgJy8nIDogJycpXG4gIH0sICcnKVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlJDEgKHJhd1Jvb3RNb2R1bGUpIHtcbiAgdXBkYXRlKHRoaXMucm9vdCwgcmF3Um9vdE1vZHVsZSk7XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyIChwYXRoLCByYXdNb2R1bGUsIHJ1bnRpbWUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICBpZiAoIHJ1bnRpbWUgPT09IHZvaWQgMCApIHJ1bnRpbWUgPSB0cnVlO1xuXG4gIHZhciBwYXJlbnQgPSB0aGlzLmdldChwYXRoLnNsaWNlKDAsIC0xKSk7XG4gIHZhciBuZXdNb2R1bGUgPSBuZXcgTW9kdWxlKHJhd01vZHVsZSwgcnVudGltZSk7XG4gIHBhcmVudC5hZGRDaGlsZChwYXRoW3BhdGgubGVuZ3RoIC0gMV0sIG5ld01vZHVsZSk7XG5cbiAgLy8gcmVnaXN0ZXIgbmVzdGVkIG1vZHVsZXNcbiAgaWYgKHJhd01vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHJhd01vZHVsZS5tb2R1bGVzLCBmdW5jdGlvbiAocmF3Q2hpbGRNb2R1bGUsIGtleSkge1xuICAgICAgdGhpcyQxLnJlZ2lzdGVyKHBhdGguY29uY2F0KGtleSksIHJhd0NoaWxkTW9kdWxlLCBydW50aW1lKTtcbiAgICB9KTtcbiAgfVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUudW5yZWdpc3RlciA9IGZ1bmN0aW9uIHVucmVnaXN0ZXIgKHBhdGgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgdmFyIGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgaWYgKCFwYXJlbnQuZ2V0Q2hpbGQoa2V5KS5ydW50aW1lKSB7IHJldHVybiB9XG5cbiAgcGFyZW50LnJlbW92ZUNoaWxkKGtleSk7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGUgKHRhcmdldE1vZHVsZSwgbmV3TW9kdWxlKSB7XG4gIC8vIHVwZGF0ZSB0YXJnZXQgbW9kdWxlXG4gIHRhcmdldE1vZHVsZS51cGRhdGUobmV3TW9kdWxlKTtcblxuICAvLyB1cGRhdGUgbmVzdGVkIG1vZHVsZXNcbiAgaWYgKG5ld01vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG5ld01vZHVsZS5tb2R1bGVzKSB7XG4gICAgICBpZiAoIXRhcmdldE1vZHVsZS5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIlt2dWV4XSB0cnlpbmcgdG8gYWRkIGEgbmV3IG1vZHVsZSAnXCIgKyBrZXkgKyBcIicgb24gaG90IHJlbG9hZGluZywgXCIgK1xuICAgICAgICAgICdtYW51YWwgcmVsb2FkIGlzIG5lZWRlZCdcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUodGFyZ2V0TW9kdWxlLmdldENoaWxkKGtleSksIG5ld01vZHVsZS5tb2R1bGVzW2tleV0pO1xuICAgIH1cbiAgfVxufVxuXG52YXIgVnVlOyAvLyBiaW5kIG9uIGluc3RhbGxcblxudmFyIFN0b3JlID0gZnVuY3Rpb24gU3RvcmUgKG9wdGlvbnMpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIGFzc2VydChWdWUsIFwibXVzdCBjYWxsIFZ1ZS51c2UoVnVleCkgYmVmb3JlIGNyZWF0aW5nIGEgc3RvcmUgaW5zdGFuY2UuXCIpO1xuICBhc3NlcnQodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnLCBcInZ1ZXggcmVxdWlyZXMgYSBQcm9taXNlIHBvbHlmaWxsIGluIHRoaXMgYnJvd3Nlci5cIik7XG5cbiAgdmFyIHN0YXRlID0gb3B0aW9ucy5zdGF0ZTsgaWYgKCBzdGF0ZSA9PT0gdm9pZCAwICkgc3RhdGUgPSB7fTtcbiAgdmFyIHBsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnM7IGlmICggcGx1Z2lucyA9PT0gdm9pZCAwICkgcGx1Z2lucyA9IFtdO1xuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3Q7IGlmICggc3RyaWN0ID09PSB2b2lkIDAgKSBzdHJpY3QgPSBmYWxzZTtcblxuICAvLyBzdG9yZSBpbnRlcm5hbCBzdGF0ZVxuICB0aGlzLl9jb21taXR0aW5nID0gZmFsc2U7XG4gIHRoaXMuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9tdXRhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX21vZHVsZXMgPSBuZXcgTW9kdWxlQ29sbGVjdGlvbihvcHRpb25zKTtcbiAgdGhpcy5fbW9kdWxlc05hbWVzcGFjZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG4gIHRoaXMuX3dhdGNoZXJWTSA9IG5ldyBWdWUoKTtcblxuICAvLyBiaW5kIGNvbW1pdCBhbmQgZGlzcGF0Y2ggdG8gc2VsZlxuICB2YXIgc3RvcmUgPSB0aGlzO1xuICB2YXIgcmVmID0gdGhpcztcbiAgdmFyIGRpc3BhdGNoID0gcmVmLmRpc3BhdGNoO1xuICB2YXIgY29tbWl0ID0gcmVmLmNvbW1pdDtcbiAgdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uIGJvdW5kRGlzcGF0Y2ggKHR5cGUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2guY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZClcbiAgfTtcbiAgdGhpcy5jb21taXQgPSBmdW5jdGlvbiBib3VuZENvbW1pdCAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjb21taXQuY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZCwgb3B0aW9ucylcbiAgfTtcblxuICAvLyBzdHJpY3QgbW9kZVxuICB0aGlzLnN0cmljdCA9IHN0cmljdDtcblxuICAvLyBpbml0IHJvb3QgbW9kdWxlLlxuICAvLyB0aGlzIGFsc28gcmVjdXJzaXZlbHkgcmVnaXN0ZXJzIGFsbCBzdWItbW9kdWxlc1xuICAvLyBhbmQgY29sbGVjdHMgYWxsIG1vZHVsZSBnZXR0ZXJzIGluc2lkZSB0aGlzLl93cmFwcGVkR2V0dGVyc1xuICBpbnN0YWxsTW9kdWxlKHRoaXMsIHN0YXRlLCBbXSwgdGhpcy5fbW9kdWxlcy5yb290KTtcblxuICAvLyBpbml0aWFsaXplIHRoZSBzdG9yZSB2bSwgd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSByZWFjdGl2aXR5XG4gIC8vIChhbHNvIHJlZ2lzdGVycyBfd3JhcHBlZEdldHRlcnMgYXMgY29tcHV0ZWQgcHJvcGVydGllcylcbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHN0YXRlKTtcblxuICAvLyBhcHBseSBwbHVnaW5zXG4gIHBsdWdpbnMuY29uY2F0KGRldnRvb2xQbHVnaW4pLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikgeyByZXR1cm4gcGx1Z2luKHRoaXMkMSk7IH0pO1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgc3RhdGU6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5zdGF0ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl92bS5fZGF0YS4kJHN0YXRlXG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuc3RhdGUuc2V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgYXNzZXJ0KGZhbHNlLCBcIlVzZSBzdG9yZS5yZXBsYWNlU3RhdGUoKSB0byBleHBsaWNpdCByZXBsYWNlIHN0b3JlIHN0YXRlLlwiKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5jb21taXQgPSBmdW5jdGlvbiBjb21taXQgKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyBjaGVjayBvYmplY3Qtc3R5bGUgY29tbWl0XG4gIHZhciByZWYgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIHBheWxvYWQgPSByZWYucGF5bG9hZDtcbiAgICB2YXIgb3B0aW9ucyA9IHJlZi5vcHRpb25zO1xuXG4gIHZhciBtdXRhdGlvbiA9IHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCB9O1xuICB2YXIgZW50cnkgPSB0aGlzLl9tdXRhdGlvbnNbdHlwZV07XG4gIGlmICghZW50cnkpIHtcbiAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIHJldHVyblxuICB9XG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIGVudHJ5LmZvckVhY2goZnVuY3Rpb24gY29tbWl0SXRlcmF0b3IgKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIocGF5bG9hZCk7XG4gICAgfSk7XG4gIH0pO1xuICB0aGlzLl9zdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1YihtdXRhdGlvbiwgdGhpcyQxLnN0YXRlKTsgfSk7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zaWxlbnQpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIlt2dWV4XSBtdXRhdGlvbiB0eXBlOiBcIiArIHR5cGUgKyBcIi4gU2lsZW50IG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBcIiArXG4gICAgICAnVXNlIHRoZSBmaWx0ZXIgZnVuY3Rpb25hbGl0eSBpbiB0aGUgdnVlLWRldnRvb2xzJ1xuICAgICk7XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoIChfdHlwZSwgX3BheWxvYWQpIHtcbiAgLy8gY2hlY2sgb2JqZWN0LXN0eWxlIGRpc3BhdGNoXG4gIHZhciByZWYgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCk7XG4gICAgdmFyIHR5cGUgPSByZWYudHlwZTtcbiAgICB2YXIgcGF5bG9hZCA9IHJlZi5wYXlsb2FkO1xuXG4gIHZhciBlbnRyeSA9IHRoaXMuX2FjdGlvbnNbdHlwZV07XG4gIGlmICghZW50cnkpIHtcbiAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGFjdGlvbiB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICByZXR1cm5cbiAgfVxuICByZXR1cm4gZW50cnkubGVuZ3RoID4gMVxuICAgID8gUHJvbWlzZS5hbGwoZW50cnkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiBoYW5kbGVyKHBheWxvYWQpOyB9KSlcbiAgICA6IGVudHJ5WzBdKHBheWxvYWQpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlIChmbikge1xuICB2YXIgc3VicyA9IHRoaXMuX3N1YnNjcmliZXJzO1xuICBpZiAoc3Vicy5pbmRleE9mKGZuKSA8IDApIHtcbiAgICBzdWJzLnB1c2goZm4pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGkgPSBzdWJzLmluZGV4T2YoZm4pO1xuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHN1YnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gd2F0Y2ggKGdldHRlciwgY2IsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBhc3NlcnQodHlwZW9mIGdldHRlciA9PT0gJ2Z1bmN0aW9uJywgXCJzdG9yZS53YXRjaCBvbmx5IGFjY2VwdHMgYSBmdW5jdGlvbi5cIik7XG4gIHJldHVybiB0aGlzLl93YXRjaGVyVk0uJHdhdGNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldHRlcih0aGlzJDEuc3RhdGUsIHRoaXMkMS5nZXR0ZXJzKTsgfSwgY2IsIG9wdGlvbnMpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUucmVwbGFjZVN0YXRlID0gZnVuY3Rpb24gcmVwbGFjZVN0YXRlIChzdGF0ZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS5fdm0uX2RhdGEuJCRzdGF0ZSA9IHN0YXRlO1xuICB9KTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5yZWdpc3Rlck1vZHVsZSA9IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlIChwYXRoLCByYXdNb2R1bGUpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG4gIGFzc2VydChBcnJheS5pc0FycmF5KHBhdGgpLCBcIm1vZHVsZSBwYXRoIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpO1xuICB0aGlzLl9tb2R1bGVzLnJlZ2lzdGVyKHBhdGgsIHJhd01vZHVsZSk7XG4gIGluc3RhbGxNb2R1bGUodGhpcywgdGhpcy5zdGF0ZSwgcGF0aCwgdGhpcy5fbW9kdWxlcy5nZXQocGF0aCkpO1xuICAvLyByZXNldCBzdG9yZSB0byB1cGRhdGUgZ2V0dGVycy4uLlxuICByZXNldFN0b3JlVk0odGhpcywgdGhpcy5zdGF0ZSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUudW5yZWdpc3Rlck1vZHVsZSA9IGZ1bmN0aW9uIHVucmVnaXN0ZXJNb2R1bGUgKHBhdGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7IHBhdGggPSBbcGF0aF07IH1cbiAgYXNzZXJ0KEFycmF5LmlzQXJyYXkocGF0aCksIFwibW9kdWxlIHBhdGggbXVzdCBiZSBhIHN0cmluZyBvciBhbiBBcnJheS5cIik7XG4gIHRoaXMuX21vZHVsZXMudW5yZWdpc3RlcihwYXRoKTtcbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudFN0YXRlID0gZ2V0TmVzdGVkU3RhdGUodGhpcyQxLnN0YXRlLCBwYXRoLnNsaWNlKDAsIC0xKSk7XG4gICAgVnVlLmRlbGV0ZShwYXJlbnRTdGF0ZSwgcGF0aFtwYXRoLmxlbmd0aCAtIDFdKTtcbiAgfSk7XG4gIHJlc2V0U3RvcmUodGhpcyk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuaG90VXBkYXRlID0gZnVuY3Rpb24gaG90VXBkYXRlIChuZXdPcHRpb25zKSB7XG4gIHRoaXMuX21vZHVsZXMudXBkYXRlKG5ld09wdGlvbnMpO1xuICByZXNldFN0b3JlKHRoaXMsIHRydWUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLl93aXRoQ29tbWl0ID0gZnVuY3Rpb24gX3dpdGhDb21taXQgKGZuKSB7XG4gIHZhciBjb21taXR0aW5nID0gdGhpcy5fY29tbWl0dGluZztcbiAgdGhpcy5fY29tbWl0dGluZyA9IHRydWU7XG4gIGZuKCk7XG4gIHRoaXMuX2NvbW1pdHRpbmcgPSBjb21taXR0aW5nO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFN0b3JlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbmZ1bmN0aW9uIHJlc2V0U3RvcmUgKHN0b3JlLCBob3QpIHtcbiAgc3RvcmUuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fbXV0YXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX3dyYXBwZWRHZXR0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgc3RhdGUgPSBzdG9yZS5zdGF0ZTtcbiAgLy8gaW5pdCBhbGwgbW9kdWxlc1xuICBpbnN0YWxsTW9kdWxlKHN0b3JlLCBzdGF0ZSwgW10sIHN0b3JlLl9tb2R1bGVzLnJvb3QsIHRydWUpO1xuICAvLyByZXNldCB2bVxuICByZXNldFN0b3JlVk0oc3RvcmUsIHN0YXRlLCBob3QpO1xufVxuXG5mdW5jdGlvbiByZXNldFN0b3JlVk0gKHN0b3JlLCBzdGF0ZSwgaG90KSB7XG4gIHZhciBvbGRWbSA9IHN0b3JlLl92bTtcblxuICAvLyBiaW5kIHN0b3JlIHB1YmxpYyBnZXR0ZXJzXG4gIHN0b3JlLmdldHRlcnMgPSB7fTtcbiAgdmFyIHdyYXBwZWRHZXR0ZXJzID0gc3RvcmUuX3dyYXBwZWRHZXR0ZXJzO1xuICB2YXIgY29tcHV0ZWQgPSB7fTtcbiAgZm9yRWFjaFZhbHVlKHdyYXBwZWRHZXR0ZXJzLCBmdW5jdGlvbiAoZm4sIGtleSkge1xuICAgIC8vIHVzZSBjb21wdXRlZCB0byBsZXZlcmFnZSBpdHMgbGF6eS1jYWNoaW5nIG1lY2hhbmlzbVxuICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmbihzdG9yZSk7IH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0b3JlLmdldHRlcnMsIGtleSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5fdm1ba2V5XTsgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUgLy8gZm9yIGxvY2FsIGdldHRlcnNcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gdXNlIGEgVnVlIGluc3RhbmNlIHRvIHN0b3JlIHRoZSBzdGF0ZSB0cmVlXG4gIC8vIHN1cHByZXNzIHdhcm5pbmdzIGp1c3QgaW4gY2FzZSB0aGUgdXNlciBoYXMgYWRkZWRcbiAgLy8gc29tZSBmdW5reSBnbG9iYWwgbWl4aW5zXG4gIHZhciBzaWxlbnQgPSBWdWUuY29uZmlnLnNpbGVudDtcbiAgVnVlLmNvbmZpZy5zaWxlbnQgPSB0cnVlO1xuICBzdG9yZS5fdm0gPSBuZXcgVnVlKHtcbiAgICBkYXRhOiB7XG4gICAgICAkJHN0YXRlOiBzdGF0ZVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IGNvbXB1dGVkXG4gIH0pO1xuICBWdWUuY29uZmlnLnNpbGVudCA9IHNpbGVudDtcblxuICAvLyBlbmFibGUgc3RyaWN0IG1vZGUgZm9yIG5ldyB2bVxuICBpZiAoc3RvcmUuc3RyaWN0KSB7XG4gICAgZW5hYmxlU3RyaWN0TW9kZShzdG9yZSk7XG4gIH1cblxuICBpZiAob2xkVm0pIHtcbiAgICBpZiAoaG90KSB7XG4gICAgICAvLyBkaXNwYXRjaCBjaGFuZ2VzIGluIGFsbCBzdWJzY3JpYmVkIHdhdGNoZXJzXG4gICAgICAvLyB0byBmb3JjZSBnZXR0ZXIgcmUtZXZhbHVhdGlvbiBmb3IgaG90IHJlbG9hZGluZy5cbiAgICAgIHN0b3JlLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2xkVm0uX2RhdGEuJCRzdGF0ZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9sZFZtLiRkZXN0cm95KCk7IH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGxNb2R1bGUgKHN0b3JlLCByb290U3RhdGUsIHBhdGgsIG1vZHVsZSwgaG90KSB7XG4gIHZhciBpc1Jvb3QgPSAhcGF0aC5sZW5ndGg7XG4gIHZhciBuYW1lc3BhY2UgPSBzdG9yZS5fbW9kdWxlcy5nZXROYW1lc3BhY2UocGF0aCk7XG5cbiAgLy8gcmVnaXN0ZXIgaW4gbmFtZXNwYWNlIG1hcFxuICBpZiAobmFtZXNwYWNlKSB7XG4gICAgc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXBbbmFtZXNwYWNlXSA9IG1vZHVsZTtcbiAgfVxuXG4gIC8vIHNldCBzdGF0ZVxuICBpZiAoIWlzUm9vdCAmJiAhaG90KSB7XG4gICAgdmFyIHBhcmVudFN0YXRlID0gZ2V0TmVzdGVkU3RhdGUocm9vdFN0YXRlLCBwYXRoLnNsaWNlKDAsIC0xKSk7XG4gICAgdmFyIG1vZHVsZU5hbWUgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgc3RvcmUuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgICAgVnVlLnNldChwYXJlbnRTdGF0ZSwgbW9kdWxlTmFtZSwgbW9kdWxlLnN0YXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBsb2NhbCA9IG1vZHVsZS5jb250ZXh0ID0gbWFrZUxvY2FsQ29udGV4dChzdG9yZSwgbmFtZXNwYWNlLCBwYXRoKTtcblxuICBtb2R1bGUuZm9yRWFjaE11dGF0aW9uKGZ1bmN0aW9uIChtdXRhdGlvbiwga2V5KSB7XG4gICAgdmFyIG5hbWVzcGFjZWRUeXBlID0gbmFtZXNwYWNlICsga2V5O1xuICAgIHJlZ2lzdGVyTXV0YXRpb24oc3RvcmUsIG5hbWVzcGFjZWRUeXBlLCBtdXRhdGlvbiwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaEFjdGlvbihmdW5jdGlvbiAoYWN0aW9uLCBrZXkpIHtcbiAgICB2YXIgbmFtZXNwYWNlZFR5cGUgPSBuYW1lc3BhY2UgKyBrZXk7XG4gICAgcmVnaXN0ZXJBY3Rpb24oc3RvcmUsIG5hbWVzcGFjZWRUeXBlLCBhY3Rpb24sIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hHZXR0ZXIoZnVuY3Rpb24gKGdldHRlciwga2V5KSB7XG4gICAgdmFyIG5hbWVzcGFjZWRUeXBlID0gbmFtZXNwYWNlICsga2V5O1xuICAgIHJlZ2lzdGVyR2V0dGVyKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgZ2V0dGVyLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNoaWxkLCBrZXkpIHtcbiAgICBpbnN0YWxsTW9kdWxlKHN0b3JlLCByb290U3RhdGUsIHBhdGguY29uY2F0KGtleSksIGNoaWxkLCBob3QpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBtYWtlIGxvY2FsaXplZCBkaXNwYXRjaCwgY29tbWl0LCBnZXR0ZXJzIGFuZCBzdGF0ZVxuICogaWYgdGhlcmUgaXMgbm8gbmFtZXNwYWNlLCBqdXN0IHVzZSByb290IG9uZXNcbiAqL1xuZnVuY3Rpb24gbWFrZUxvY2FsQ29udGV4dCAoc3RvcmUsIG5hbWVzcGFjZSwgcGF0aCkge1xuICB2YXIgbm9OYW1lc3BhY2UgPSBuYW1lc3BhY2UgPT09ICcnO1xuXG4gIHZhciBsb2NhbCA9IHtcbiAgICBkaXNwYXRjaDogbm9OYW1lc3BhY2UgPyBzdG9yZS5kaXNwYXRjaCA6IGZ1bmN0aW9uIChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgICB2YXIgYXJncyA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFyZ3MucGF5bG9hZDtcbiAgICAgIHZhciBvcHRpb25zID0gYXJncy5vcHRpb25zO1xuICAgICAgdmFyIHR5cGUgPSBhcmdzLnR5cGU7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5yb290KSB7XG4gICAgICAgIHR5cGUgPSBuYW1lc3BhY2UgKyB0eXBlO1xuICAgICAgICBpZiAoIXN0b3JlLl9hY3Rpb25zW3R5cGVdKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBsb2NhbCBhY3Rpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKHR5cGUsIHBheWxvYWQpXG4gICAgfSxcblxuICAgIGNvbW1pdDogbm9OYW1lc3BhY2UgPyBzdG9yZS5jb21taXQgOiBmdW5jdGlvbiAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgICAgdmFyIGFyZ3MgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgICAgdmFyIHBheWxvYWQgPSBhcmdzLnBheWxvYWQ7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3Mub3B0aW9ucztcbiAgICAgIHZhciB0eXBlID0gYXJncy50eXBlO1xuXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMucm9vdCkge1xuICAgICAgICB0eXBlID0gbmFtZXNwYWNlICsgdHlwZTtcbiAgICAgICAgaWYgKCFzdG9yZS5fbXV0YXRpb25zW3R5cGVdKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBsb2NhbCBtdXRhdGlvbiB0eXBlOiBcIiArIChhcmdzLnR5cGUpICsgXCIsIGdsb2JhbCB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdG9yZS5jb21taXQodHlwZSwgcGF5bG9hZCwgb3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGdldHRlcnMgYW5kIHN0YXRlIG9iamVjdCBtdXN0IGJlIGdvdHRlbiBsYXppbHlcbiAgLy8gYmVjYXVzZSB0aGV5IHdpbGwgYmUgY2hhbmdlZCBieSB2bSB1cGRhdGVcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobG9jYWwsIHtcbiAgICBnZXR0ZXJzOiB7XG4gICAgICBnZXQ6IG5vTmFtZXNwYWNlXG4gICAgICAgID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuZ2V0dGVyczsgfVxuICAgICAgICA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1ha2VMb2NhbEdldHRlcnMoc3RvcmUsIG5hbWVzcGFjZSk7IH1cbiAgICB9LFxuICAgIHN0YXRlOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldE5lc3RlZFN0YXRlKHN0b3JlLnN0YXRlLCBwYXRoKTsgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxvY2FsXG59XG5cbmZ1bmN0aW9uIG1ha2VMb2NhbEdldHRlcnMgKHN0b3JlLCBuYW1lc3BhY2UpIHtcbiAgdmFyIGdldHRlcnNQcm94eSA9IHt9O1xuXG4gIHZhciBzcGxpdFBvcyA9IG5hbWVzcGFjZS5sZW5ndGg7XG4gIE9iamVjdC5rZXlzKHN0b3JlLmdldHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAvLyBza2lwIGlmIHRoZSB0YXJnZXQgZ2V0dGVyIGlzIG5vdCBtYXRjaCB0aGlzIG5hbWVzcGFjZVxuICAgIGlmICh0eXBlLnNsaWNlKDAsIHNwbGl0UG9zKSAhPT0gbmFtZXNwYWNlKSB7IHJldHVybiB9XG5cbiAgICAvLyBleHRyYWN0IGxvY2FsIGdldHRlciB0eXBlXG4gICAgdmFyIGxvY2FsVHlwZSA9IHR5cGUuc2xpY2Uoc3BsaXRQb3MpO1xuXG4gICAgLy8gQWRkIGEgcG9ydCB0byB0aGUgZ2V0dGVycyBwcm94eS5cbiAgICAvLyBEZWZpbmUgYXMgZ2V0dGVyIHByb3BlcnR5IGJlY2F1c2VcbiAgICAvLyB3ZSBkbyBub3Qgd2FudCB0byBldmFsdWF0ZSB0aGUgZ2V0dGVycyBpbiB0aGlzIHRpbWUuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdldHRlcnNQcm94eSwgbG9jYWxUeXBlLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLmdldHRlcnNbdHlwZV07IH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBnZXR0ZXJzUHJveHlcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJNdXRhdGlvbiAoc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKSB7XG4gIHZhciBlbnRyeSA9IHN0b3JlLl9tdXRhdGlvbnNbdHlwZV0gfHwgKHN0b3JlLl9tdXRhdGlvbnNbdHlwZV0gPSBbXSk7XG4gIGVudHJ5LnB1c2goZnVuY3Rpb24gd3JhcHBlZE11dGF0aW9uSGFuZGxlciAocGF5bG9hZCkge1xuICAgIGhhbmRsZXIobG9jYWwuc3RhdGUsIHBheWxvYWQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJBY3Rpb24gKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCkge1xuICB2YXIgZW50cnkgPSBzdG9yZS5fYWN0aW9uc1t0eXBlXSB8fCAoc3RvcmUuX2FjdGlvbnNbdHlwZV0gPSBbXSk7XG4gIGVudHJ5LnB1c2goZnVuY3Rpb24gd3JhcHBlZEFjdGlvbkhhbmRsZXIgKHBheWxvYWQsIGNiKSB7XG4gICAgdmFyIHJlcyA9IGhhbmRsZXIoe1xuICAgICAgZGlzcGF0Y2g6IGxvY2FsLmRpc3BhdGNoLFxuICAgICAgY29tbWl0OiBsb2NhbC5jb21taXQsXG4gICAgICBnZXR0ZXJzOiBsb2NhbC5nZXR0ZXJzLFxuICAgICAgc3RhdGU6IGxvY2FsLnN0YXRlLFxuICAgICAgcm9vdEdldHRlcnM6IHN0b3JlLmdldHRlcnMsXG4gICAgICByb290U3RhdGU6IHN0b3JlLnN0YXRlXG4gICAgfSwgcGF5bG9hZCwgY2IpO1xuICAgIGlmICghaXNQcm9taXNlKHJlcykpIHtcbiAgICAgIHJlcyA9IFByb21pc2UucmVzb2x2ZShyZXMpO1xuICAgIH1cbiAgICBpZiAoc3RvcmUuX2RldnRvb2xIb29rKSB7XG4gICAgICByZXR1cm4gcmVzLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgc3RvcmUuX2RldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6ZXJyb3InLCBlcnIpO1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckdldHRlciAoc3RvcmUsIHR5cGUsIHJhd0dldHRlciwgbG9jYWwpIHtcbiAgaWYgKHN0b3JlLl93cmFwcGVkR2V0dGVyc1t0eXBlXSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIGR1cGxpY2F0ZSBnZXR0ZXIga2V5OiBcIiArIHR5cGUpKTtcbiAgICByZXR1cm5cbiAgfVxuICBzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0gPSBmdW5jdGlvbiB3cmFwcGVkR2V0dGVyIChzdG9yZSkge1xuICAgIHJldHVybiByYXdHZXR0ZXIoXG4gICAgICBsb2NhbC5zdGF0ZSwgLy8gbG9jYWwgc3RhdGVcbiAgICAgIGxvY2FsLmdldHRlcnMsIC8vIGxvY2FsIGdldHRlcnNcbiAgICAgIHN0b3JlLnN0YXRlLCAvLyByb290IHN0YXRlXG4gICAgICBzdG9yZS5nZXR0ZXJzIC8vIHJvb3QgZ2V0dGVyc1xuICAgIClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlU3RyaWN0TW9kZSAoc3RvcmUpIHtcbiAgc3RvcmUuX3ZtLiR3YXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kYXRhLiQkc3RhdGUgfSwgZnVuY3Rpb24gKCkge1xuICAgIGFzc2VydChzdG9yZS5fY29tbWl0dGluZywgXCJEbyBub3QgbXV0YXRlIHZ1ZXggc3RvcmUgc3RhdGUgb3V0c2lkZSBtdXRhdGlvbiBoYW5kbGVycy5cIik7XG4gIH0sIHsgZGVlcDogdHJ1ZSwgc3luYzogdHJ1ZSB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TmVzdGVkU3RhdGUgKHN0YXRlLCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLmxlbmd0aFxuICAgID8gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKHN0YXRlLCBrZXkpIHsgcmV0dXJuIHN0YXRlW2tleV07IH0sIHN0YXRlKVxuICAgIDogc3RhdGVcbn1cblxuZnVuY3Rpb24gdW5pZnlPYmplY3RTdHlsZSAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICBpZiAoaXNPYmplY3QodHlwZSkgJiYgdHlwZS50eXBlKSB7XG4gICAgb3B0aW9ucyA9IHBheWxvYWQ7XG4gICAgcGF5bG9hZCA9IHR5cGU7XG4gICAgdHlwZSA9IHR5cGUudHlwZTtcbiAgfVxuXG4gIGFzc2VydCh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycsIChcIkV4cGVjdHMgc3RyaW5nIGFzIHRoZSB0eXBlLCBidXQgZm91bmQgXCIgKyAodHlwZW9mIHR5cGUpICsgXCIuXCIpKTtcblxuICByZXR1cm4geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkLCBvcHRpb25zOiBvcHRpb25zIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbCAoX1Z1ZSkge1xuICBpZiAoVnVlKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdbdnVleF0gYWxyZWFkeSBpbnN0YWxsZWQuIFZ1ZS51c2UoVnVleCkgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IG9uY2UuJ1xuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgVnVlID0gX1Z1ZTtcbiAgYXBwbHlNaXhpbihWdWUpO1xufVxuXG4vLyBhdXRvIGluc3RhbGwgaW4gZGlzdCBtb2RlXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICBpbnN0YWxsKHdpbmRvdy5WdWUpO1xufVxuXG52YXIgbWFwU3RhdGUgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgc3RhdGVzKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKHN0YXRlcykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZFN0YXRlICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuJHN0b3JlLnN0YXRlO1xuICAgICAgdmFyIGdldHRlcnMgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzO1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbW9kdWxlID0gZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBTdGF0ZScsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUgPSBtb2R1bGUuY29udGV4dC5zdGF0ZTtcbiAgICAgICAgZ2V0dGVycyA9IG1vZHVsZS5jb250ZXh0LmdldHRlcnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHZhbC5jYWxsKHRoaXMsIHN0YXRlLCBnZXR0ZXJzKVxuICAgICAgICA6IHN0YXRlW3ZhbF1cbiAgICB9O1xuICAgIC8vIG1hcmsgdnVleCBnZXR0ZXIgZm9yIGRldnRvb2xzXG4gICAgcmVzW2tleV0udnVleCA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcE11dGF0aW9ucyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBtdXRhdGlvbnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAobXV0YXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHZhbCA9IG5hbWVzcGFjZSArIHZhbDtcbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZE11dGF0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICBpZiAobmFtZXNwYWNlICYmICFnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcE11dGF0aW9ucycsIG5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuY29tbWl0LmFwcGx5KHRoaXMuJHN0b3JlLCBbdmFsXS5jb25jYXQoYXJncykpXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgbWFwR2V0dGVycyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBnZXR0ZXJzKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKGdldHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgdmFsID0gbmFtZXNwYWNlICsgdmFsO1xuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkR2V0dGVyICgpIHtcbiAgICAgIGlmIChuYW1lc3BhY2UgJiYgIWdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwR2V0dGVycycsIG5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoISh2YWwgaW4gdGhpcy4kc3RvcmUuZ2V0dGVycykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBnZXR0ZXI6IFwiICsgdmFsKSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbdmFsXVxuICAgIH07XG4gICAgLy8gbWFyayB2dWV4IGdldHRlciBmb3IgZGV2dG9vbHNcbiAgICByZXNba2V5XS52dWV4ID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgbWFwQWN0aW9ucyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBhY3Rpb25zKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgdmFsID0gbmFtZXNwYWNlICsgdmFsO1xuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkQWN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICBpZiAobmFtZXNwYWNlICYmICFnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcEFjdGlvbnMnLCBuYW1lc3BhY2UpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmRpc3BhdGNoLmFwcGx5KHRoaXMuJHN0b3JlLCBbdmFsXS5jb25jYXQoYXJncykpXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG5mdW5jdGlvbiBub3JtYWxpemVNYXAgKG1hcCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShtYXApXG4gICAgPyBtYXAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICh7IGtleToga2V5LCB2YWw6IGtleSB9KTsgfSlcbiAgICA6IE9iamVjdC5rZXlzKG1hcCkubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICh7IGtleToga2V5LCB2YWw6IG1hcFtrZXldIH0pOyB9KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lc3BhY2UgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobmFtZXNwYWNlLCBtYXApIHtcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG1hcCA9IG5hbWVzcGFjZTtcbiAgICAgIG5hbWVzcGFjZSA9ICcnO1xuICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlLmNoYXJBdChuYW1lc3BhY2UubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgICAgbmFtZXNwYWNlICs9ICcvJztcbiAgICB9XG4gICAgcmV0dXJuIGZuKG5hbWVzcGFjZSwgbWFwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldE1vZHVsZUJ5TmFtZXNwYWNlIChzdG9yZSwgaGVscGVyLCBuYW1lc3BhY2UpIHtcbiAgdmFyIG1vZHVsZSA9IHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwW25hbWVzcGFjZV07XG4gIGlmICghbW9kdWxlKSB7XG4gICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gbW9kdWxlIG5hbWVzcGFjZSBub3QgZm91bmQgaW4gXCIgKyBoZWxwZXIgKyBcIigpOiBcIiArIG5hbWVzcGFjZSkpO1xuICB9XG4gIHJldHVybiBtb2R1bGVcbn1cblxudmFyIGluZGV4X2VzbSA9IHtcbiAgU3RvcmU6IFN0b3JlLFxuICBpbnN0YWxsOiBpbnN0YWxsLFxuICB2ZXJzaW9uOiAnMi4yLjEnLFxuICBtYXBTdGF0ZTogbWFwU3RhdGUsXG4gIG1hcE11dGF0aW9uczogbWFwTXV0YXRpb25zLFxuICBtYXBHZXR0ZXJzOiBtYXBHZXR0ZXJzLFxuICBtYXBBY3Rpb25zOiBtYXBBY3Rpb25zXG59O1xuXG5leHBvcnQgeyBTdG9yZSwgbWFwU3RhdGUsIG1hcE11dGF0aW9ucywgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9O2V4cG9ydCBkZWZhdWx0IGluZGV4X2VzbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWV4L2Rpc3QvdnVleC5lc20uanNcbi8vIG1vZHVsZSBpZCA9IDMxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuaW1wb3J0IFZ1ZTJGaWx0ZXJzIGZyb20gJ3Z1ZTItZmlsdGVycyc7XG5pbXBvcnQgVmVlVmFsaWRhdGUgZnJvbSAndmVlLXZhbGlkYXRlJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuXG4vKipcbiAqIE5leHQsIHdlIHdpbGwgY3JlYXRlIGEgZnJlc2ggVnVlIGFwcGxpY2F0aW9uIGluc3RhbmNlIGFuZCBhdHRhY2ggaXQgdG9cbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cbiAqIG9yIGN1c3RvbWl6ZSB0aGUgSmF2YVNjcmlwdCBzY2FmZm9sZGluZyB0byBmaXQgeW91ciB1bmlxdWUgbmVlZHMuXG4gKi9cblxuVnVlLmNvbXBvbmVudCgndmlkZW8tdXBsb2FkJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ211bHRpcGxlLXZpZGVvLXVwbG9hZCcsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3ZpZGVvLXBsYXllcicsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9WaWRlb1BsYXllci52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd2aWRlby12b3RpbmcnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvVmlkZW9Wb3RpbmcudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndmlkZW8tY29tbWVudHMnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdjb21wZXRpdGlvbi1mb3JtJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL0NvbXBldGl0aW9uRm9ybS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdyb3V0aW5lLXZpZGVvJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd0cmFtcG9saW5lLXNjb3JlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL3Njb3Jlcy9UcmFtcG9saW5lU2NvcmUudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnZG10LXNjb3JlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL3Njb3Jlcy9Eb3VibGVNaW5pU2NvcmUudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndHVtYmxpbmctc2NvcmUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2NvcmVzL1R1bWJsaW5nU2NvcmUudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnc21hbGwtdmlkZW8nLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvU21hbGxWaWRlby52dWUnKSk7XG5cblZ1ZS51c2UocmVxdWlyZSgndnVlLXJlc291cmNlJykpO1xuVnVlLnVzZShWdWUyRmlsdGVycyk7XG5WdWUudXNlKHJlcXVpcmUoJ0B3ZWJzYW5vdmEvdnVlLXVwbG9hZCcpKTtcblZ1ZS51c2UoVmVlVmFsaWRhdGUpO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbndpbmRvdy5FdmVudCA9IG5ldyBWdWUoKTtcblxuVnVlLnVzZSh7XG4gICAgaW5zdGFsbDogKFZ1ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgICBWdWUuZ2V0SnNvbiA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cblZ1ZS5odHRwLmhlYWRlcnMuY29tbW9uWydYLUNTUkYtVE9LRU4nXSA9IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbjtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBkYXRhOiB3aW5kb3cuTGFyYXZlbCxcbiAgICBzdG9yZVxufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInZhbGlkYXRlQmVmb3JlU3VibWl0XCI+XG5cbiAgICAgICAgPCEtLSBDb21wZXRpdGlvbiB0aXRsZSAtLT5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7J2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndGl0bGUnKX1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPkNvbXBldGl0aW9uIFRpdGxlPC9sYWJlbD5cblxuICAgICAgICAgICAgPHAgOmNsYXNzPVwieydjb250cm9sJzogdHJ1ZX1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdi12YWxpZGF0ZTp0aXRsZS5pbml0aWFsPVwiJ3JlcXVpcmVkJ1wiIGlkPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1zaG93PVwiZXJyb3JzLmhhcygndGl0bGUnKVwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGVycm9ycy5maXJzdCgndGl0bGUnKSB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENvbXBldGl0aW9uIExvY2F0aW9uIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvY2F0aW9uXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+TG9jYXRpb248L2xhYmVsPlxuXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJsb2NhdGlvblwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwibG9jYXRpb25cIiBuYW1lPVwibG9jYXRpb25cIj5cblxuICAgICAgICAgICAgPHNwYW4gdi1zaG93PVwiZmFsc2VcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkVycm9yIG1lc3NhZ2U8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBDb21wZXRpdGlvbiBTdGFydCBEYXRlIC0tPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdzdGFydF9kYXRlJyl9XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhcnRfZGF0ZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPlN0YXJ0IERhdGU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8cCA6Y2xhc3M9XCJ7J2NvbnRyb2wnOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LXZhbGlkYXRlOnN0YXJ0X2RhdGUuaW5pdGlhbD1cIidkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJ1wiIGlkPVwic3RhcnRfZGF0ZVwiIHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwic3RhcnRfZGF0ZVwiIG5hbWU9XCJzdGFydF9kYXRlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1zaG93PVwiZXJyb3JzLmhhcygnc3RhcnRfZGF0ZScpXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3JzLmZpcnN0KCdzdGFydF9kYXRlJykgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQ29tcGV0aXRpb24gRW5kIERhdGUgLS0+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwieydmb3JtLWdyb3VwJzogdHJ1ZSwgJ2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2VuZF9kYXRlJyl9XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW5kX2RhdGVcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIj5TdGFydCBEYXRlPC9sYWJlbD5cblxuICAgICAgICAgICAgPHAgOmNsYXNzPVwieydjb250cm9sJzogdHJ1ZX1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdi12YWxpZGF0ZTplbmRfZGF0ZS5pbml0aWFsPVwiJ2RhdGVfZm9ybWF0OllZWVktTU0tREQnXCIgaWQ9XCJlbmRfZGF0ZVwiIHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZW5kX2RhdGVcIiBuYW1lPVwiZW5kX2RhdGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCdlbmRfZGF0ZScpXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3JzLmZpcnN0KCdlbmRfZGF0ZScpIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIEV2ZW50IHNlbGVjdGlvbiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXNlbGVjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aDQ+RXZlbnRzPC9oND5cblxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidHJhbXBvbGluZVwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ0cmFtcG9saW5lXCIgdi1tb2RlbD1cInRyYW1wb2xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgVHJhbXBvbGluZVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInRyYW1wb2xpbmVcIiBAY2xpY2s9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbCA9ICF0cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtc2hvdz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBTZW1pLUZpbmFsc1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCJ0cmFtcG9saW5lXCIgQGNsaWNrPVwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbCA9ICF0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1zaG93PVwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbFwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvaT4gRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtc2hvdz1cInRyYW1wb2xpbmVcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHRyYW1wQ29sU2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW1wb2xpbmUtc2NvcmUgdGl0bGU9XCJDb21wdWxzb3J5XCIgcm91dGluZS1rZXk9XCJwcmVsaW1fY29tcHVsc29yeVwiPjwvdHJhbXBvbGluZS1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHJhbXBDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIlByZWxpbSBPcHRpb25hbFwiIHJvdXRpbmUta2V5PVwicHJlbGltX29wdGlvbmFsXCI+PC90cmFtcG9saW5lLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0cmFtcENvbFNpemVcIiB2LXNob3c9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW1wb2xpbmUtc2NvcmUgdGl0bGU9XCJTZW1pLUZpbmFsXCIgcm91dGluZS1rZXk9XCJzZW1pX2ZpbmFsX29wdGlvbmFsXCI+PC90cmFtcG9saW5lLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0cmFtcENvbFNpemVcIiB2LXNob3c9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIkZpbmFsIE9wdGlvbmFsXCIgcm91dGluZS1rZXk9XCJmaW5hbF9vcHRpb25hbFwiPjwvdHJhbXBvbGluZS1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRtdFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkbXRcIiB2LW1vZGVsPVwiZG10XCI+XG4gICAgICAgICAgICAgICAgICAgIERvdWJsZSBNaW5pXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwiZG10XCIgQGNsaWNrPVwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwgPSAhZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LXNob3c9XCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvaT4gRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImRtdFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRtdC1zY29yZSB0aXRsZT1cIlBhc3MgMVwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfMVwiPjwvZG10LXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyBkbXRDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyAyXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fcGFzc18yXCI+PC9kbXQtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIGRtdENvbFNpemVcIiB2LXNob3c9XCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRtdC1zY29yZSB0aXRsZT1cIlBhc3MgM1wiIHJvdXRpbmUta2V5PVwiZmluYWxfcGFzc18zXCI+PC9kbXQtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIGRtdENvbFNpemVcIiB2LXNob3c9XCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRtdC1zY29yZSB0aXRsZT1cIlBhc3MgNFwiIHJvdXRpbmUta2V5PVwiZmluYWxfcGFzc180XCI+PC9kbXQtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0dW1ibGluZ1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ0dW1ibGluZ1wiIHYtbW9kZWw9XCJ0dW1ibGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICBUdW1ibGluZ1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInR1bWJsaW5nXCIgQGNsaWNrPVwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsID0gIXR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtc2hvdz1cInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvaT4gRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtc2hvdz1cInR1bWJsaW5nXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgMVwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfMVwiPjwvdHVtYmxpbmctc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHR1bWJsaW5nQ29sU2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHR1bWJsaW5nLXNjb3JlIHRpdGxlPVwiUGFzcyAyXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fcGFzc18yXCI+PC90dW1ibGluZy1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHVtYmxpbmdDb2xTaXplXCIgdi1zaG93PVwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHVtYmxpbmctc2NvcmUgdGl0bGU9XCJQYXNzIDNcIiByb3V0aW5lLWtleT1cImZpbmFsX3Bhc3NfM1wiPjwvdHVtYmxpbmctc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHR1bWJsaW5nQ29sU2l6ZVwiIHYtc2hvdz1cInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHR1bWJsaW5nLXNjb3JlIHRpdGxlPVwiUGFzcyA0XCIgcm91dGluZS1rZXk9XCJmaW5hbF9wYXNzXzRcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIDpkaXNhYmxlZD1cImVycm9ycy5hbnkoKSB8fCAhZXZlbnRzVmFsaWRcIj5TdWJtaXQgQ29tcGV0aXRpb248L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbiAgICBpbXBvcnQgVHJhbXBvbGluZVNjb3JlIGZyb20gJy4uL1RyYW1wb2xpbmVTY29yZSc7XG4gICAgaW1wb3J0IERvdWJsZU1pbmlTY29yZSBmcm9tICcuLi9Eb3VibGVNaW5pU2NvcmUnO1xuICAgIGltcG9ydCBUdW1ibGluZ1Njb3JlIGZyb20gJy4uL1R1bWJsaW5nU2NvcmUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0cmFtcG9saW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkbXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR1bWJsaW5nOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgIGV2ZW50VmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbXBvbGluZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRtdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHR1bWJsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgdHJhbXBvbGluZVJvdXRpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dTZW1pRmluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzaG93RmluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG91YmxlTWluaVBhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93RmluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHVtYmxpbmdQYXNzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0ZpbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY29tcGV0aXRpb25JZDogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb21wZXRpdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0xPQURfQ09NUEVUSVRJT04nLCB0aGlzLmNvbXBldGl0aW9uSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbXBvbGluZSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZXZlbnRDaGVja2VkKCd0cmFtcG9saW5lUm91dGluZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kbXQgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmV2ZW50Q2hlY2tlZCgnZG91YmxlTWluaVBhc3NlcycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR1bWJsaW5nID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5ldmVudENoZWNrZWQoJ3R1bWJsaW5nUGFzc2VzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRyYW1wb2xpbmVSb3V0aW5lcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudHJhbXBvbGluZVJvdXRpbmVzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG91YmxlTWluaVBhc3NlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZG91YmxlTWluaVBhc3Nlc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR1bWJsaW5nUGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50dW1ibGluZ1Bhc3Nlc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudGl0bGU7IH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1RJVExFJywgdmFsdWUpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmxvY2F0aW9uOyB9LFxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkgeyB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9MT0NBVElPTicsIHZhbHVlKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnRfZGF0ZToge1xuICAgICAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnN0YXJ0X2RhdGU7IH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1NUQVJUX0RBVEUnLCB2YWx1ZSkgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZF9kYXRlOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZW5kX2RhdGU7IH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0VORF9EQVRFJywgdmFsdWUpIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGV2ZW50c1ZhbGlkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMuZXZlbnRDaGVja2VkKCd0cmFtcG9saW5lUm91dGluZXMnKSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5nZXR0ZXJzLmV2ZW50Q2hlY2tlZCgnZG91YmxlTWluaVBhc3NlcycpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMuZXZlbnRDaGVja2VkKCd0dW1ibGluZ1Bhc3NlcycpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRyYW1wQ29sU2l6ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsICYmIHRoaXMudHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICczJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbCB8fCB0aGlzLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnNCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc2JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG10Q29sU2l6ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwpID8gJzMnIDogJzYnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR1bWJsaW5nQ29sU2l6ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMudHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsKSA/ICczJyA6ICc2JztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0Q29tcGV0aXRpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuYWxsRGF0YTtcblxuICAgICAgICAgICAgICAgIGxldCB4aHIgPSAodGhpcy4kc3RvcmUuc3RhdGUuY29tcGV0aXRpb25faWQpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy4kaHR0cC5wdXQoJy9jb21wZXRpdGlvbnMvJyArIHRoaXMuJHN0b3JlLnN0YXRlLmNvbXBldGl0aW9uX2lkLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuJGh0dHAucG9zdCgnL2NvbXBldGl0aW9ucycsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgeGhyLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvY29tcGV0aXRpb25zLycgKyByZXNwb25zZS5jb21wZXRpdGlvbi5pZDtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBlcnJvciBzdWJtaXR0aW5nIHRoZSBzY29yZXMuJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWxpZGF0ZUJlZm9yZVN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRDb21wZXRpdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIGNvcnJlY3QgdGhlIGVycm9ycy4nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAndmVlLXZhbGlkYXRlJztcbiAgICBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICAgICBlbjoge1xuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29tcGV0aXRpb24gVGl0bGUnLFxuICAgICAgICAgICAgICAgIHN0YXJ0X2RhdGU6ICdTdGFydCBEYXRlJyxcbiAgICAgICAgICAgICAgICBlbmRfZGF0ZTogJ0VuZCBEYXRlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgVmFsaWRhdG9yLnVwZGF0ZURpY3Rpb25hcnkoZGljdGlvbmFyeSk7XG4gICAgVmFsaWRhdG9yLmluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMobW9tZW50KTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDb21wZXRpdGlvbkZvcm0udnVlP2Y5OTM4Y2MwIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+VXBsb2FkIFlvdXIgVmlkZW9zPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXZlbnRcIj5FdmVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZXZlbnRcIiB2LW1vZGVsPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRyYW1wb2xpbmVcIj5UcmFtcG9saW5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkb3VibGUgbWluaVwiPkRvdWJsZS1taW5pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0dW1ibGluZ1wiPlR1bWJsaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidmlzaWJpbGl0eVwiPlZpc2liaWxpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInZpc2liaWxpdHlcIiB2LW1vZGVsPVwidmlzaWJpbGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpdmF0ZVwiPlByaXZhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVubGlzdGVkXCI+VW5saXN0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB1YmxpY1wiPlB1YmxpYzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwiIXF1ZXVlZFwiIEBjbGljaz1cIiR1cGxvYWQuc2VsZWN0KCd2aWRlby11cGxvYWQnKVwiIDpkaXNhYmxlZD1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBWaWRlb3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInF1ZXVlZFwiIEBjbGljaz1cIiR1cGxvYWQuc3RhcnQoJ3ZpZGVvLXVwbG9hZCcpXCIgOmRpc2FibGVkPVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIigpID0+IHskdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnKTtxdWV1ZWQgPSBmYWxzZX1cIiA6ZGlzYWJsZWQ9XCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCIgdi1zaG93PVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyAkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnBlcmNlbnRDb21wbGV0ZSArICclOydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5wZXJjZW50Q29tcGxldGUgfX0lIENvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHVwbG9hZC5lcnJvcnMoJ3ZpZGVvLXVwbG9hZCcpLmxlbmd0aFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdXBsb2FkLmVycm9ycygndmlkZW8tdXBsb2FkJylbMF0ubWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtcmVzdWx0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgdi1zaG93PVwiJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsIGxhYmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggfX0ge3sgJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCB8IHBsdXJhbGl6ZSgnZmlsZScpIH19IHJlYWR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVTaG93UXVldWVkXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwic2hvd1F1ZXVlZEZpbGVzXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwiIXNob3dRdWV1ZWRGaWxlc1wiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgdi1zaG93PVwic2hvd1F1ZXVlZEZpbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImZpbGUgaW4gJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWxlLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImZpbGUgaW4gJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykuY29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmlsZS5lcnJvcnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWRhbmdlclwiPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpbGUuZXJyb3JzWzBdLm1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWZpbGUuZXJyb3JzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+e3sgZmlsZS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5uZXcoJ3ZpZGVvLXVwbG9hZCcsIHtcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXhGaWxlczogMjAsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbWF4U2l6ZVBlckZpbGU6IDIwNDgwMCwgLy8gMjAwIE1CXG4gICAgICAgICAgICAgICAgc3RhcnRPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogWydtcDQnLCAnd2VibScsICdhdmknLCAnYXNmJywgJ3dtdicsICdtcGVndHMnLCAnbW92JywgJ2ZsdicsICdta3YnLCAnM2dwJ10sXG4gICAgICAgICAgICAgICAgaHR0cDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5ib2R5LmFwcGVuZCgndmlzaWJpbGl0eScsIHRoaXMudmlzaWJpbGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYm9keS5hcHBlbmQoJ2V2ZW50JywgdGhpcy5ldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QoZGF0YS51cmwsIGRhdGEuYm9keSwge3Byb2dyZXNzOiBkYXRhLnByb2dyZXNzfSkudGhlbihkYXRhLnN1Y2Nlc3MsIGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25RdWV1ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UXVldWVkRmlsZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN0YXJ0KCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dRdWV1ZWRGaWxlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL3ZpZGVvcyc7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkVuZCgpIHtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93UXVldWVkRmlsZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJyxcblxuICAgICAgICAgICAgICAgIGV2ZW50OiAndHJhbXBvbGluZScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdG9nZ2xlU2hvd1F1ZXVlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dRdWV1ZWRGaWxlcyA9ICF0aGlzLnNob3dRdWV1ZWRGaWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3VwbG9hZC9tdWx0aXBsZScsXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGVzOiAwLFxuICAgICAgICAgICAgICAgIGRyb3B6b25lSWQ6ICd2aWRlby11cGxvYWQtZHJvcHpvbmUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkJywge1xuICAgICAgICAgICAgICAgIGRyb3B6b25lSWQ6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBNdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZT82ODJmMGZhYSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIHYtc2hvdz1cIiF1cGxvYWRlZCAmJiAhaGFzQXR0YWNobWVudFwiIEBjbGljaz1cIiR1cGxvYWQuc2VsZWN0KCd2aWRlby11cGxvYWQnICsgcm91dGluZXMgKyAnLScgKyByb3V0aW5lS2V5KVwiIDpkaXNhYmxlZD1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJyArIHJvdXRpbmVzICsgJy0nICsgcm91dGluZUtleSkuc3RhdHVzID09PSAnc2VuZGluZydcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4teHNcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGFwZXJjbGlwXCI+PC9pPiBBdHRhY2ggVmlkZW9cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPHNwYW4gdi1zaG93PVwidXBsb2FkZWQgfHwgaGFzQXR0YWNobWVudFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZWNrXCI+PC9pPiB7eyBmaWxlbmFtZSB9fVxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInJlbW92ZUF0dGFjaG1lbnRcIiBjbGFzcz1cInJlbW92ZS1hdHRhY2htZW50XCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZS1zaWduXCI+PC9pPjwvYT5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtcHJvZ3Jlc3MgcHJvZ3Jlc3NcIiB2LXNob3c9XCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyByb3V0aW5lcyArICctJyArIHJvdXRpbmVLZXkpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnICsgcm91dGluZXMgKyAnLScgKyByb3V0aW5lS2V5KS5wZXJjZW50Q29tcGxldGUgKyAnJTsnXCI+XG4gICAgICAgICAgICAgICAge3sgJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnICsgcm91dGluZXMgKyAnLScgKyByb3V0aW5lS2V5KS5wZXJjZW50Q29tcGxldGUgfX0lIENvbXBsZXRlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcm91dGluZUtleTogbnVsbCxcbiAgICAgICAgICAgIHJvdXRpbmVzOiBudWxsLFxuICAgICAgICAgICAgZGlzY2lwbGluZTogbnVsbCxcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGhhc0F0dGFjaG1lbnQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbXBldGl0aW9uX2lkICYmIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uaGFzVmlkZW8oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWxlbmFtZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbdGhpcy5yb3V0aW5lc11bdGhpcy5yb3V0aW5lS2V5XS52aWRlb0ZpbGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHJlbW92ZUF0dGFjaG1lbnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdSRU1PVkVfQVRUQUNITUVOVCcsIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGluZXM6IHRoaXMucm91dGluZXMsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRpbmVLZXk6IHRoaXMucm91dGluZUtleSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVuaXF1ZUlkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndmlkZW8tdXBsb2FkJyArIHRoaXMucm91dGluZXMgKyAnLScgKyB0aGlzLnJvdXRpbmVLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5uZXcoJ3ZpZGVvLXVwbG9hZCcgKyB0aGlzLnJvdXRpbmVzICsgJy0nICsgdGhpcy5yb3V0aW5lS2V5LCB7XG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgbWF4RmlsZXM6IDEsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1heFNpemVQZXJGaWxlOiAyMDQ4MDAsIC8vIDIwMCBNQlxuICAgICAgICAgICAgICAgIHN0YXJ0T25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogWydtcDQnLCAnd2VibScsICdhdmknLCAnYXNmJywgJ3dtdicsICdtcGVndHMnLCAnbW92JywgJ2ZsdicsICdta3YnLCAnM2dwJ10sXG4gICAgICAgICAgICAgICAgaHR0cDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5ib2R5LmFwcGVuZCgnZXZlbnQnLCBfc2VsZi5kaXNjaXBsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdChkYXRhLnVybCwgZGF0YS5ib2R5LCB7cHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3N9KS50aGVuKGRhdGEuc3VjY2VzcywgZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdBVFRBQ0hfVklERU8nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogcmVzcG9uc2UuZGF0YS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZXM6IHRoaXMucm91dGluZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnICsgdGhpcy5yb3V0aW5lcyArICctJyArIHRoaXMucm91dGluZUtleSwge1xuICAgICAgICAgICAgICAgIHVybDogJy91cGxvYWQvbXVsdGlwbGUnLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlczogMCxcbiAgICAgICAgICAgICAgICBkcm9wem9uZUlkOiAndmlkZW8tdXBsb2FkLWRyb3B6b25lJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLiR1cGxvYWQucmVzZXQoJ3ZpZGVvLXVwbG9hZCcgKyB0aGlzLnJvdXRpbmVzICsgJy0nICsgdGhpcy5yb3V0aW5lS2V5LCB7XG4gICAgICAgICAgICAgICAgZHJvcHpvbmVJZDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSb3V0aW5lVmlkZW8udnVlPzMyM2U5MDNlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnRcIj5cbiAgICAgICAgPGEgdi1zaG93PVwiIXNob3dWaWRlb1wiIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJwbGF5VmlkZW9cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1mYWNldGltZS12aWRlb1wiPjwvaT5cbiAgICAgICAgICAgIFBsYXkgVmlkZW9cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSB2LXNob3c9XCJzaG93VmlkZW9cIiBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwiaGlkZVZpZGVvXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWVudS11cFwiPjwvaT5cbiAgICAgICAgICAgIEhpZGUgVmlkZW9cbiAgICAgICAgPC9hPlxuICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgIDppZD1cIid2aWRlby0nICsgdmlkZW9JZFwiXG4gICAgICAgICAgICBjbGFzcz1cInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW4gdmpzLWJpZy1wbGF5LWNlbnRlcmVkIHZqcy0xNi05IHZqcy1oaWRkZW5cIlxuICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgIGRhdGEtc2V0dXA9J3tcImZsdWlkXCI6IHRydWUsIFwicGxheWJhY2tSYXRlc1wiOiBbMC4yNSwgMC4zMywgMSwgMl0gfSdcbiAgICAgICAgICAgIDpwb3N0ZXI9XCJpbWdcIlxuICAgICAgICAgICAgOndpZHRoPVwid2lkdGhcIlxuICAgICAgICAgICAgOmhlaWdodD1cImhlaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxzb3VyY2UgdHlwZT1cInZpZGVvL21wNFwiIDpzcmM9XCJzcmNcIiAvPlxuICAgICAgICA8L3ZpZGVvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdmlkZW9qcyBmcm9tIFwidmlkZW8uanNcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGxheWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIHNob3dWaWRlbzogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2aWRlb0lkOiBudWxsLFxuICAgICAgICAgICAgc3JjOiBudWxsLFxuICAgICAgICAgICAgaW1nOiBudWxsLFxuICAgICAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiA0ODAsXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMjcwLFxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gdmlkZW9qcygndmlkZW8tJyArIHRoaXMudmlkZW9JZCk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9uKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5yb3VuZCh0aGlzLnBsYXllci5kdXJhdGlvbigpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzSGl0UXVvdGFWaWV3KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHBsYXlWaWRlbygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWRlbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWRlVmlkZW8oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VmlkZW8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNIaXRRdW90YVZpZXcoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnBsYXllci5jdXJyZW50VGltZSgpKSA9PT0gTWF0aC5yb3VuZCgoMTAgKiB0aGlzLmR1cmF0aW9uKSAvIDEwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlVmlldygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MvJyArIHRoaXMudmlkZW9JZCArICcvdmlld3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBTbWFsbFZpZGVvLnZ1ZT81MTg1YTc5OCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cD57eyBjb21tZW50cy5sZW5ndGggfX0ge3sgY29tbWVudHMubGVuZ3RoIHwgcGx1cmFsaXplKCdjb21tZW50JykgfX08L3A+XG5cbiAgICAgICAgPCEtLSBWaWRlbyBjb21tZW50IGJveCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWNvbW1lbnQgY2xlYXJmaXhcIiBpZj1cIiRyb290LnVzZXIuYXV0aGVudGljYXRlZFwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiU2F5IHNvbWV0aGluZy4uLlwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHZpZGVvLWNvbW1lbnRfX2lucHV0XCIgdi1tb2RlbD1cImJvZHlcIj48L3RleHRhcmVhPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cImNyZWF0ZUNvbW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIiB2LWlmPVwicG9zdGluZ1wiPjwvaT4gUG9zdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gTGlzdCBvZiBjb21tZW50cyAtLT5cbiAgICAgICAgPHVsIGNsYXNzPVwibWVkaWEtbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVkaWFcIiB2LWZvcj1cImNvbW1lbnQgaW4gY29tbWVudHNcIj5cblxuICAgICAgICAgICAgICAgIDwhLS0gVXNlciBpbWFnZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInVzZXJVcmwoY29tbWVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1iaW5kOnNyYz1cImNvbW1lbnQudXNlci5kYXRhLmltYWdlXCIgOmFsdD1cImNvbW1lbnQudXNlci5kYXRhLm5hbWVcIiBjbGFzcz1cIm1lZGlhLW9iamVjdCBpbWctYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gQ29tbWVudCAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInVzZXJVcmwoY29tbWVudClcIj57eyBjb21tZW50LnVzZXIuZGF0YS5uYW1lIH19PC9hPiB7eyBjb21tZW50LmNyZWF0ZWRfYXRfaHVtYW4gfX1cblxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiY29tbWVudC5yZXBsaWVzLmRhdGEubGVuZ3RoXCI+KHt7IGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCB9fSAge3sgY29tbWVudC5yZXBsaWVzLmRhdGEubGVuZ3RoIHwgcGx1cmFsaXplKCdyZXBseScsICdyZXBsaWVzJykgfX0pPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IGNvbW1lbnQuYm9keSB9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIENvbW1lbnQgcmVwbHkvZGVsZXRlIC0tPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZVwiIHYtaWY9XCIkcm9vdC51c2VyLmF1dGhlbnRpY2F0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlUmVwbHlGb3JtKGNvbW1lbnQuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJlcGx5Rm9ybVZpc2libGUgPT09IGNvbW1lbnQuaWQgPyAnQ2FuY2VsIHJlcGx5JyA6ICdSZXBseScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJjb21tZW50LnVzZXJfaWQgPT09ICRyb290LnVzZXIuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwiZGVsZXRlQ29tbWVudChjb21tZW50LmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiIHYtaWY9XCJkZWxldGluZyA9PT0gY29tbWVudC5pZFwiPjwvaT4gRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFJlcGx5IGJveCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWNvbW1lbnQgY2xlYXJcIiB2LWlmPVwicmVwbHlGb3JtVmlzaWJsZSA9PT0gY29tbWVudC5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sIHZpZGVvLWNvbW1lbnRfX2lucHV0XCIgdi1tb2RlbD1cInJlcGx5Qm9keVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cImNyZWF0ZVJlcGx5KGNvbW1lbnQuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCIgdi1pZj1cInJlcGx5aW5nXCI+PC9pPiBSZXBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUmVwbGllcyB0byBjb21tZW50IC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIiB2LWZvcj1cInJlcGx5IGluIGNvbW1lbnQucmVwbGllcy5kYXRhXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVXNlciBpbWFnZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJ1c2VyVXJsKHJlcGx5KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtYmluZDpzcmM9XCJyZXBseS51c2VyLmRhdGEuaW1hZ2VcIiA6YWx0PVwicmVwbHkudXNlci5kYXRhLm5hbWVcIiBjbGFzcz1cIm1lZGlhLW9iamVjdCBpbWctYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUmVwbHkgYm9keSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJ1c2VyVXJsKHJlcGx5KVwiPnt7IHJlcGx5LnVzZXIuZGF0YS5uYW1lIH19PC9hPiB7eyByZXBseS5jcmVhdGVkX2F0X2h1bWFuIH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyByZXBseS5ib2R5IH19PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmVcIiB2LWlmPVwiJHJvb3QudXNlci5hdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJkZWxldGVDb21tZW50KHJlcGx5LmlkKVwiIHYtaWY9XCJyZXBseS51c2VyX2lkID09PSAkcm9vdC51c2VyLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIiB2LWlmPVwiZGVsZXRpbmcgPT09IHJlcGx5LmlkXCI+PC9pPiBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb21tZW50czogW10sXG4gICAgICAgICAgICAgICAgcG9zdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYm9keTogbnVsbCxcbiAgICAgICAgICAgICAgICByZXBseUJvZHk6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVwbHlGb3JtVmlzaWJsZTogbnVsbCxcbiAgICAgICAgICAgICAgICByZXBseWluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVsZXRpbmc6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvVW5pcXVlSWQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZGVsZXRlQ29tbWVudChjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21tZW50PycpKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0aW5nID0gY29tbWVudElkO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5kZWxldGUoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvY29tbWVudHMvJyArIGNvbW1lbnRJZCkudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCeUlkKGNvbW1lbnRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZUJ5SWQoY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LmlkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQucmVwbGllcy5kYXRhLm1hcCgocmVwbHksIHJlcGx5SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBseS5pZCA9PT0gY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50c1tpbmRleF0ucmVwbGllcy5kYXRhLnNwbGljZShyZXBseUluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVJlcGx5Rm9ybShjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGx5Qm9keSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBseUZvcm1WaXNpYmxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucmVwbHlGb3JtVmlzaWJsZSA9IGNvbW1lbnRJZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVSZXBseShjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGx5aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy9jb21tZW50cycsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogdGhpcy5yZXBseUJvZHksXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5X2lkOiBjb21tZW50SWRcbiAgICAgICAgICAgICAgICB9KS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LmlkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzW2luZGV4XS5yZXBsaWVzLmRhdGEucHVzaChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbHlCb2R5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBseUZvcm1WaXNpYmxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBseWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIChlcnJSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHBvc3RpbmcgdGhlIHJlcGx5LicsIGVyclJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBseWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlQ29tbWVudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL2NvbW1lbnRzJywge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmJvZHlcbiAgICAgICAgICAgICAgICB9KS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIChlcnJSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHBvc3RpbmcgdGhlIGNvbW1lbnQuJywgZXJyUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDb21tZW50cygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy9jb21tZW50cycpLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlclVybChjb21tZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvdXNlci8nICsgY29tbWVudC51c2VyLmRhdGEuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVmlkZW9Db21tZW50cy52dWU/MmFmNjc4ODUiLCI8dGVtcGxhdGU+XG4gICAgPHZpZGVvXG4gICAgICAgICAgICBpZD1cInZpZGVvXCJcbiAgICAgICAgICAgIGNsYXNzPVwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpbiB2anMtYmlnLXBsYXktY2VudGVyZWQgdmpzLTE2LTlcIlxuICAgICAgICAgICAgY29udHJvbHMgcHJlbG9hZD1cImF1dG9cIlxuICAgICAgICAgICAgZGF0YS1zZXR1cD0ne1wiZmx1aWRcIjogdHJ1ZSwgXCJwcmVsb2FkXCI6IFwiYXV0b1wiLCBcInBsYXliYWNrUmF0ZXNcIjogWzAuMjUsIDAuMzMsIDEsIDJdfSdcbiAgICAgICAgICAgIHYtYmluZDpwb3N0ZXI9XCJ0aHVtYm5haWxVcmxcIlxuICAgID5cbiAgICAgICAgPHNvdXJjZSB0eXBlPVwidmlkZW8vbXA0XCIgdi1iaW5kOnNyYz1cInZpZGVvVXJsXCIgLz5cbiAgICA8L3ZpZGVvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdmlkZW9qcyBmcm9tIFwidmlkZW8uanNcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGxheWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2aWRlb1VuaXF1ZUlkOiBudWxsLFxuICAgICAgICAgICAgdmlkZW9Vcmw6IG51bGwsXG4gICAgICAgICAgICB0aHVtYm5haWxVcmw6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gdmlkZW9qcygndmlkZW8nKTtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLnJvdW5kKHRoaXMucGxheWVyLmR1cmF0aW9uKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNIaXRRdW90YVZpZXcoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGFzSGl0UXVvdGFWaWV3KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5wbGF5ZXIuY3VycmVudFRpbWUoKSkgPT09IE1hdGgucm91bmQoKDEwICogdGhpcy5kdXJhdGlvbikgLyAxMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZVZpZXcoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL3ZpZXdzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVmlkZW9QbGF5ZXIudnVlPzM4YzliNDAyIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+VXBsb2FkIFlvdXIgVmlkZW88L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwibmFtZVwiIDpkaXNhYmxlZD1cImF1dGhlbnRpY2F0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJldmVudFwiPkV2ZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cmFtcG9saW5lXCI+VHJhbXBvbGluZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZG91YmxlIG1pbmlcIj5Eb3VibGUtbWluaTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHVtYmxpbmdcIj5UdW1ibGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJ2aWRlb1wiIGlkPVwidmlkZW9cIiBAY2hhbmdlPVwiZmlsZUlucHV0Q2hhbmdlXCIgdi1pZj1cIiF1cGxvYWRpbmdcIiA6ZGlzYWJsZWQ9XCIhbmFtZSB8fCAhZXZlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHYtaWY9XCJmYWlsZWRcIj5Tb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInZpZGVvLWZvcm1cIiB2LWlmPVwidXBsb2FkaW5nICYmICFmYWlsZWRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgdi1pZj1cIiF1cGxvYWRpbmdDb21wbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZnJlc2ggZmEtc3BpblwiPjwvaT4gWW91ciB2aWRlbyBpcyB1cGxvYWRpbmcuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHYtaWY9XCJ1cGxvYWRpbmdDb21wbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgY29tcGxldGUuIFZpZGVvIGlzIG5vdyBwcm9jZXNzaW5nLiA8YSBocmVmPVwiL3ZpZGVvc1wiPkdvIHRvIHlvdXIgdmlkZW9zLjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIHYtaWY9XCIhdXBsb2FkaW5nQ29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIHYtYmluZDpzdHlsZT1cInsgd2lkdGg6IGZpbGVQcm9ncmVzcyArICclJyB9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJkZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidmlzaWJpbGl0eVwiPlZpc2liaWxpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInZpc2liaWxpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcml2YXRlXCI+UHJpdmF0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVubGlzdGVkXCI+VW5saXN0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwdWJsaWNcIj5QdWJsaWM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2sgcHVsbC1yaWdodFwiPnt7IHNhdmVTdGF0dXMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2sucHJldmVudD1cInVwZGF0ZVwiPlNhdmUgQ2hhbmdlczwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cGxvYWRpbmdDb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmFpbGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzYXZlU3RhdHVzOiBudWxsLFxuICAgICAgICAgICAgICAgIGZpbGVQcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiB3aW5kb3cuTGFyYXZlbC51c2VyLmF1dGhlbnRpY2F0ZWQsXG5cbiAgICAgICAgICAgICAgICAvLyBWaWRlbyBtb2RlbFxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB3aW5kb3cuTGFyYXZlbC51c2VyLmlkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVW50aXRsZWQnLFxuICAgICAgICAgICAgICAgIG5hbWU6IHdpbmRvdy5MYXJhdmVsLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICBldmVudDogJ3RyYW1wb2xpbmUnLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBleHRlbnNpb246IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZpbGVJbnB1dENoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWlsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpLmZpbGVzWzBdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd2aWRlbycsIHRoaXMuZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd1bmlxdWVfaWQnLCB0aGlzLnVuaXF1ZV9pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdXBsb2FkJywgZm9ybSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGluZ0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGZhaWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgKGZhaWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3RvcmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRlbnNpb24gPSB0aGlzLmZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcycsIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogdGhpcy5leHRlbnNpb24sXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHRoaXMudmlzaWJpbGl0eSxcbiAgICAgICAgICAgICAgICB9KS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXF1ZV9pZCA9IHJlc3BvbnNlLmRhdGEudW5pcXVlX2lkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0dXMgPSAnU2F2aW5nIGNoYW5nZXMuJztcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLnB1dCgnL3ZpZGVvcy8nICsgdGhpcy51bmlxdWVfaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb246IHRoaXMuZXh0ZW5zaW9uLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB0aGlzLnZpc2liaWxpdHksXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdHVzID0gJ0NoYW5nZXMgc2F2ZWQuJztcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXR1cyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0dXMgPSAnRmFpbGVkIHRvIHNhdmUgY2hhbmdlcy4nO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKGUpIHtcbiAgICAgICAgICAgICAgICBlLnBlcmNlbnQgPSAoZS5sb2FkZWQgLyBlLnRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVQcm9ncmVzcyA9IGUucGVyY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHZpZGVvVXJsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcm9vdC51cmwgKyAnL3ZpZGVvcy8nICsgdGhpcy51bmlxdWVfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBsb2FkaW5nICYmICF0aGlzLnVwbG9hZGluZ0NvbXBsZXRlICYmICF0aGlzLmZhaWxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5Pyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVmlkZW9VcGxvYWQudnVlPzE5NjBlMTMxIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWRlb19fdm90aW5nXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ2aWRlb19fdm90aW5nLWJ1dHRvblwiIHYtYmluZDpjbGFzcz1cInsndmlkZW9fX3ZvdGluZy1idXR0b24tLXZvdGVkJzogdXNlclZvdGUgPT0gJ3VwJ31cIiBAY2xpY2sucHJldmVudD1cInZvdGUoJ3VwJylcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXBcIj48L2k+XG4gICAgICAgIDwvYT4ge3sgdXAgfX0gJm5ic3A7XG5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInZpZGVvX192b3RpbmctYnV0dG9uXCIgdi1iaW5kOmNsYXNzPVwieyd2aWRlb19fdm90aW5nLWJ1dHRvbi0tdm90ZWQnOiB1c2VyVm90ZSA9PSAnZG93bid9XCIgQGNsaWNrLnByZXZlbnQ9XCJ2b3RlKCdkb3duJylcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtZG93blwiPjwvaT5cbiAgICAgICAgPC9hPiB7eyBkb3duIH19XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXA6IG51bGwsXG4gICAgICAgICAgICAgICAgZG93bjogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VyVm90ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBjYW5Wb3RlOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvVW5pcXVlSWQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Vm90ZXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0Vm90ZXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvdm90ZXMnKS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwID0gcmVzcG9uc2UuZGF0YS51cDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3duID0gcmVzcG9uc2UuZGF0YS5kb3duO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJWb3RlID0gcmVzcG9uc2UuZGF0YS51c2VyX3ZvdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVm90ZSA9IHJlc3BvbnNlLmRhdGEuY2FuX3ZvdGU7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZvdGUodHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJWb3RlID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1t0eXBlXS0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJWb3RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVWb3RlKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlclZvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1t0eXBlID09ICd1cCcgPyAnZG93bicgOiAndXAnXS0tO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNbdHlwZV0rKztcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJWb3RlID0gdHlwZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVm90ZSh0eXBlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVWb3RlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmRlbGV0ZSgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy92b3RlcycsIHt0eXBlfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlVm90ZSh0eXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL3ZvdGVzJywge3R5cGV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWaWRlb1ZvdGluZy52dWU/MmFkNWNkZjIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiPlxuICAgICAgICA8aDU+e3sgdGl0bGUgfX08L2g1PlxuXG4gICAgICAgIDxyb3V0aW5lLXZpZGVvIDpyb3V0aW5lcz1cInJvdXRpbmVzXCIgOmRpc2NpcGxpbmU9XCJkaXNjaXBsaW5lXCIgOnJvdXRpbmUta2V5PVwicm91dGluZUtleVwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdGl0bGU9XCJFeGVjdXRpb25cIj5FeGVjdXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZXhlY3V0aW9uXCIgOm5hbWU9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2RpZmZpY3VsdHknKVwiIHRpdGxlPVwiRGlmZmljdWx0eVwiPkRpZmZpY3VsdHk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZGlmZmljdWx0eVwiIDpuYW1lPVwiZm9ybUlkKCdkaWZmaWN1bHR5JylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKVwiIHRpdGxlPVwiTmV1dHJhbCBEZWR1Y3Rpb25cIj5ORDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJuZXV0cmFsX2RlZHVjdGlvblwiIDpuYW1lPVwiZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0aXRsZT1cIlRvdGFsIFNjb3JlXCI+VG90YWwgU2NvcmU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwidG90YWxfc2NvcmVcIiA6bmFtZT1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IFR1bWJsaW5nU2NvcmUgZnJvbSAnLi4vLi4vVHVtYmxpbmdTY29yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzY2lwbGluZTogJ2RvdWJsZSBtaW5pJyxcbiAgICAgICAgICAgICAgICByb3V0aW5lczogJ2RvdWJsZU1pbmlQYXNzZXMnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1peGluczogW1Njb3JlTWl4aW5dXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIERvdWJsZU1pbmlTY29yZS52dWU/N2JmN2NkZWMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiPlxuICAgICAgICA8aDU+e3sgdGl0bGUgfX08L2g1PlxuXG4gICAgICAgIDxyb3V0aW5lLXZpZGVvIDpyb3V0aW5lcz1cInJvdXRpbmVzXCIgOmRpc2NpcGxpbmU9XCJkaXNjaXBsaW5lXCIgOnJvdXRpbmUta2V5PVwicm91dGluZUtleVwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdGl0bGU9XCJFeGVjdXRpb25cIj5FeGVjdXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZXhlY3V0aW9uXCIgOm5hbWU9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2RpZmZpY3VsdHknKVwiIHRpdGxlPVwiRGlmZmljdWx0eVwiPkRpZmZpY3VsdHk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZGlmZmljdWx0eVwiIDpuYW1lPVwiZm9ybUlkKCdkaWZmaWN1bHR5JylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndGltZV9vZl9mbGlnaHQnKVwiIHRpdGxlPVwiVGltZSBvZiBGbGlnaHRcIj5UT0Y8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwidGltZV9vZl9mbGlnaHRcIiA6bmFtZT1cImZvcm1JZCgndGltZV9vZl9mbGlnaHQnKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCdob3Jpem9udGFsX2Rpc3BsYWNlbWVudCcpXCIgdGl0bGU9XCJIb3Jpem9udGFsIERpc3BsYWNlbWVudFwiPkhEPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cImhvcml6b250YWxfZGlzcGxhY2VtZW50XCIgOm5hbWU9XCJmb3JtSWQoJ2hvcml6b250YWxfZGlzcGxhY2VtZW50JylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKVwiIHRpdGxlPVwiTmV1dHJhbCBEZWR1Y3Rpb25cIj5ORDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJuZXV0cmFsX2RlZHVjdGlvblwiIDpuYW1lPVwiZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0aXRsZT1cIlRvdGFsIFNjb3JlXCI+VG90YWwgU2NvcmU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwidG90YWxfc2NvcmVcIiA6bmFtZT1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IFRyYW1wb2xpbmVTY29yZSBmcm9tICcuLi8uLi9UcmFtcG9saW5lU2NvcmUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkaXNjaXBsaW5lOiAndHJhbXBvbGluZScsXG4gICAgICAgICAgICAgICAgcm91dGluZXM6ICd0cmFtcG9saW5lUm91dGluZXMnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cblxuICAgICAgICBtaXhpbnM6IFtTY29yZU1peGluXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUcmFtcG9saW5lU2NvcmUudnVlPzc1MzVhYjI1IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIj5cbiAgICAgICAgPGg1Pnt7IHRpdGxlIH19PC9oNT5cblxuICAgICAgICA8cm91dGluZS12aWRlbyA6cm91dGluZXM9XCJyb3V0aW5lc1wiIDpkaXNjaXBsaW5lPVwiZGlzY2lwbGluZVwiIDpyb3V0aW5lLWtleT1cInJvdXRpbmVLZXlcIj48L3JvdXRpbmUtdmlkZW8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCdleGVjdXRpb24nKVwiIHRpdGxlPVwiRXhlY3V0aW9uXCI+RXhlY3V0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cImV4ZWN1dGlvblwiIDpuYW1lPVwiZm9ybUlkKCdleGVjdXRpb24nKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCdkaWZmaWN1bHR5JylcIiB0aXRsZT1cIkRpZmZpY3VsdHlcIj5EaWZmaWN1bHR5PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cImRpZmZpY3VsdHlcIiA6bmFtZT1cImZvcm1JZCgnZGlmZmljdWx0eScpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJylcIiB0aXRsZT1cIk5ldXRyYWwgRGVkdWN0aW9uXCI+TkQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwibmV1dHJhbF9kZWR1Y3Rpb25cIiA6bmFtZT1cImZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCd0b3RhbF9zY29yZScpXCIgdGl0bGU9XCJUb3RhbCBTY29yZVwiPlRvdGFsIFNjb3JlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cInRvdGFsX3Njb3JlXCIgOm5hbWU9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU2NvcmVNaXhpbiBmcm9tICcuLi8uLi9taXhpbnMvc2NvcmUubWl4aW4nO1xuICAgIGltcG9ydCBUdW1ibGluZ1Njb3JlIGZyb20gJy4uLy4uL1R1bWJsaW5nU2NvcmUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpc2NpcGxpbmU6ICd0dW1ibGluZycsXG4gICAgICAgICAgICAgICAgcm91dGluZXM6ICd0dW1ibGluZ1Bhc3NlcycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWl4aW5zOiBbU2NvcmVNaXhpbl1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVHVtYmxpbmdTY29yZS52dWU/OGViMmEyMzgiLCJcbndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxucmVxdWlyZSgnYm9vdHN0cmFwLXNhc3MnKTtcblxuLyoqXG4gKiBWdWUgaXMgYSBtb2Rlcm4gSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyBpbnRlcmFjdGl2ZSB3ZWIgaW50ZXJmYWNlc1xuICogdXNpbmcgcmVhY3RpdmUgZGF0YSBiaW5kaW5nIGFuZCByZXVzYWJsZSBjb21wb25lbnRzLiBWdWUncyBBUEkgaXMgY2xlYW5cbiAqIGFuZCBzaW1wbGUsIGxlYXZpbmcgeW91IHRvIGZvY3VzIG9uIGJ1aWxkaW5nIHlvdXIgbmV4dCBncmVhdCBwcm9qZWN0LlxuICovXG5cbndpbmRvdy5WdWUgPSByZXF1aXJlKCd2dWUnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge1xuICAgICdYLUNTUkYtVE9LRU4nOiB3aW5kb3cuTGFyYXZlbC5jc3JmVG9rZW4sXG4gICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG59O1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSBcImxhcmF2ZWwtZWNob1wiXG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6ICd5b3VyLXB1c2hlci1rZXknXG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IFRyYW1wb2xpbmVTY29yZSBmcm9tICcuL1RyYW1wb2xpbmVTY29yZSc7XG5pbXBvcnQgRG91YmxlTWluaVNjb3JlIGZyb20gJy4vRG91YmxlTWluaVNjb3JlJztcbmltcG9ydCBUdW1ibGluZ1Njb3JlIGZyb20gJy4vVHVtYmxpbmdTY29yZSc7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuXG4gICAgc3RyaWN0OiBmYWxzZSxcblxuICAgIC8qXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8IFN0YXRlXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8XG4gICAgIHwgU2luZ2xlIFN0YXRlIFRyZWVcbiAgICAgfFxuICAgICB8IFZ1ZXggdXNlcyBhIHNpbmdsZSBzdGF0ZSB0cmVlIC0gdGhhdCBpcywgdGhpcyBzaW5nbGUgb2JqZWN0IGNvbnRhaW5zIGFsbFxuICAgICB8IHlvdXIgYXBwbGljYXRpb24gbGV2ZWwgc3RhdGUgYW5kIHNlcnZlcyBhcyB0aGUgXCJzaW5nbGUgc291cmNlIG9mIHRydXRoXCIuXG4gICAgIHwgVGhpcyBhbHNvIG1lYW5zIHVzdWFsbHkgeW91IHdpbGwgaGF2ZSBvbmx5IG9uZSBzdG9yZSBmb3IgZWFjaCBhcHBsaWNhdGlvbi5cbiAgICAgfCBBIHNpbmdsZSBzdGF0ZSB0cmVlIG1ha2VzIGl0IHN0cmFpZ2h0Zm9yd2FyZCB0byBsb2NhdGUgYSBzcGVjaWZpYyBwaWVjZSBvZlxuICAgICB8IHN0YXRlLCBhbmQgYWxsb3dzIHVzIHRvIGVhc2lseSB0YWtlIHNuYXBzaG90cyBvZiB0aGUgY3VycmVudCBhcHAgc3RhdGUgZm9yXG4gICAgIHwgZGVidWdnaW5nIHB1cnBvc2VzLlxuICAgICB8XG4gICAgICovXG4gICAgc3RhdGU6IHtcbiAgICAgICAgY29tcGV0aXRpb25faWQ6IG51bGwsXG5cbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIGxvY2F0aW9uOiBudWxsLFxuICAgICAgICBzdGFydF9kYXRlOiBudWxsLFxuICAgICAgICBlbmRfZGF0ZTogbnVsbCxcblxuICAgICAgICB0cmFtcG9saW5lUm91dGluZXM6IHtcbiAgICAgICAgICAgIHByZWxpbV9jb21wdWxzb3J5OiBuZXcgVHJhbXBvbGluZVNjb3JlKCksXG4gICAgICAgICAgICBwcmVsaW1fb3B0aW9uYWw6IG5ldyBUcmFtcG9saW5lU2NvcmUoKSxcbiAgICAgICAgICAgIHNlbWlfZmluYWxfb3B0aW9uYWw6IG5ldyBUcmFtcG9saW5lU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX29wdGlvbmFsOiBuZXcgVHJhbXBvbGluZVNjb3JlKCksXG4gICAgICAgIH0sXG4gICAgICAgIGRvdWJsZU1pbmlQYXNzZXM6IHtcbiAgICAgICAgICAgIHByZWxpbV9wYXNzXzE6IG5ldyBEb3VibGVNaW5pU2NvcmUoKSxcbiAgICAgICAgICAgIHByZWxpbV9wYXNzXzI6IG5ldyBEb3VibGVNaW5pU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX3Bhc3NfMzogbmV3IERvdWJsZU1pbmlTY29yZSgpLFxuICAgICAgICAgICAgZmluYWxfcGFzc180OiBuZXcgRG91YmxlTWluaVNjb3JlKCksXG4gICAgICAgIH0sXG4gICAgICAgIHR1bWJsaW5nUGFzc2VzOiB7XG4gICAgICAgICAgICBwcmVsaW1fcGFzc18xOiBuZXcgVHVtYmxpbmdTY29yZSgpLFxuICAgICAgICAgICAgcHJlbGltX3Bhc3NfMjogbmV3IFR1bWJsaW5nU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX3Bhc3NfMzogbmV3IFR1bWJsaW5nU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX3Bhc3NfNDogbmV3IFR1bWJsaW5nU2NvcmUoKSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfCBBY3Rpb25zXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8XG4gICAgIHwgQWN0aW9ucyBhcmUgc2ltaWxhciB0byBtdXRhdGlvbnMsIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQ6XG4gICAgIHxcbiAgICAgfCAqIEluc3RlYWQgb2YgbXV0YXRpbmcgdGhlIHN0YXRlLCBhY3Rpb25zIGNvbW1pdCBtdXRhdGlvbnMuXG4gICAgIHwgKiBBY3Rpb25zIGNhbiBjb250YWluIGFyYml0cmFyeSBhc3luY2hyb25vdXMgb3BlcmF0aW9ucy5cbiAgICAgfFxuICAgICAqL1xuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgTE9BRF9DT01QRVRJVElPTjogKGNvbnRleHQsIGNvbXBldGl0aW9uSWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9jb21wZXRpdGlvbnMvJyArIGNvbXBldGl0aW9uSWQpLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBldGl0aW9uID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcGV0aXRpb246ICcsIGNvbXBldGl0aW9uKTtcblxuICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX0NPTVBFVElUSU9OX0lEJywgY29tcGV0aXRpb24uaWQpO1xuICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX0NPTVBFVElUSU9OX0ZJRUxEUycsIHsgZmllbGRzOiBjb21wZXRpdGlvbiB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChjb21wZXRpdGlvbi50cmFtcG9saW5lU2NvcmVzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX1NDT1JFUycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlczogY29tcGV0aXRpb24udHJhbXBvbGluZVNjb3Jlcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDbGFzczogVHJhbXBvbGluZVNjb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVJbmRleDogJ3RyYW1wb2xpbmVSb3V0aW5lcycsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb21wZXRpdGlvbi5kb3VibGVNaW5pU2NvcmVzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX1NDT1JFUycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlczogY29tcGV0aXRpb24uZG91YmxlTWluaVNjb3Jlcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDbGFzczogRG91YmxlTWluaVNjb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVJbmRleDogJ2RvdWJsZU1pbmlQYXNzZXMnLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcGV0aXRpb24udHVtYmxpbmdTY29yZXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdTRVRfU0NPUkVTJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVzOiBjb21wZXRpdGlvbi50dW1ibGluZ1Njb3Jlcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDbGFzczogVHVtYmxpbmdTY29yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlSW5kZXg6ICd0dW1ibGluZ1Bhc3NlcycsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8IE11dGF0aW9uc1xuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfFxuICAgICB8IFRoZSBvbmx5IHdheSB0byBhY3R1YWxseSBjaGFuZ2Ugc3RhdGUgaW4gYSBWdWV4IHN0b3JlIGlzIGJ5IGNvbW1pdHRpbmdcbiAgICAgfCBhIG11dGF0aW9uLiBWdWV4IG11dGF0aW9ucyBhcmUgdmVyeSBzaW1pbGFyIHRvIGV2ZW50czogZWFjaCBtdXRhdGlvbiBoYXNcbiAgICAgfCBhIHN0cmluZyB0eXBlIGFuZCBhIGhhbmRsZXIuIFRoZSBoYW5kbGVyIGZ1bmN0aW9uIGlzIHdoZXJlIHdlIHBlcmZvcm1cbiAgICAgfCBhY3R1YWwgc3RhdGUgbW9kaWZpY2F0aW9ucywgYW5kIGl0IHdpbGwgcmVjZWl2ZSB0aGUgc3RhdGUgYXMgdGhlIGZpcnN0XG4gICAgIHwgYXJndW1lbnQuXG4gICAgIHxcbiAgICAgKi9cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgU0VUX0NPTVBFVElUSU9OX0lEOiAoc3RhdGUsIGlkKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5jb21wZXRpdGlvbl9pZCA9IGlkO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9DT01QRVRJVElPTl9GSUVMRFM6IChzdGF0ZSwgeyBmaWVsZHMgfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmaWVsZHMudGl0bGU7XG4gICAgICAgICAgICBzdGF0ZS5sb2NhdGlvbiA9IGZpZWxkcy5sb2NhdGlvbjtcbiAgICAgICAgICAgIHN0YXRlLnN0YXJ0X2RhdGUgPSBtb21lbnQoZmllbGRzLnN0YXJ0X2RhdGUuZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgICAgICBzdGF0ZS5lbmRfZGF0ZSA9IG1vbWVudChmaWVsZHMuZW5kX2RhdGUuZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX1RJVExFOiAoc3RhdGUsIHRpdGxlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS50aXRsZSA9IHRpdGxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9MT0NBVElPTjogKHN0YXRlLCBsb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfU1RBUlRfREFURTogKHN0YXRlLCBzdGFydF9kYXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGFydF9kYXRlID0gc3RhcnRfZGF0ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfRU5EX0RBVEU6IChzdGF0ZSwgZW5kX2RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmVuZF9kYXRlID0gZW5kX2RhdGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX1NDT1JFUzogKHN0YXRlLCB7IHNjb3Jlcywgc2NvcmVDbGFzcywgc3RhdGVJbmRleH0pID0+IHtcbiAgICAgICAgICAgIHNjb3Jlcy5mb3JFYWNoKChzY29yZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzY29yZUluc3RhbmNlID0gbmV3IHNjb3JlQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmVNYXAgPSB7fTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3JlSW5zdGFuY2UuYXR0cnMpLmZvckVhY2goKHNjb3JlUGFydCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY29yZU1hcFtzY29yZVBhcnRdID0gc2NvcmVbc2NvcmVQYXJ0XTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNjb3JlSW5zdGFuY2UudXBkYXRlQXR0cmlidXRlcyhzY29yZU1hcCk7XG4gICAgICAgICAgICAgICAgc2NvcmVJbnN0YW5jZS5zZXRJZChzY29yZS5pZCk7XG4gICAgICAgICAgICAgICAgc2NvcmVJbnN0YW5jZS5zZXRWaWRlb0lkKHNjb3JlLnZpZGVvX2lkKTtcblxuICAgICAgICAgICAgICAgIGlmIChzY29yZS52aWRlby5kYXRhLmhhc093blByb3BlcnR5KCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlSW5zdGFuY2Uuc2V0VmlkZW9GaWxlbmFtZShzY29yZS52aWRlby5kYXRhLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdGF0ZVtzdGF0ZUluZGV4XVtzY29yZS5yb3V0aW5lXSA9IHNjb3JlSW5zdGFuY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfUk9VVElORV9QUk9QRVJUWTogKHN0YXRlLCB7IGRpc2NpcGxpbmUsIHJvdXRpbmVLZXksIGNvbXBvbmVudCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uYXR0cnNbY29tcG9uZW50XS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICE9PSAndG90YWxfc2NvcmUnKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uY29tcHV0ZVRvdGFsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlW2Rpc2NpcGxpbmVdW3JvdXRpbmVLZXldLnNldFRvdGFsKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBSRU1PVkVfQVRUQUNITUVOVDogKHN0YXRlLCB7IHJvdXRpbmVzLCByb3V0aW5lS2V5IH0pID0+IHtcbiAgICAgICAgICAgIHN0YXRlW3JvdXRpbmVzXVtyb3V0aW5lS2V5XS5zZXRWaWRlb0lkKG51bGwpO1xuICAgICAgICAgICAgc3RhdGVbcm91dGluZXNdW3JvdXRpbmVLZXldLnNldFZpZGVvRmlsZW5hbWUobnVsbCk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBBVFRBQ0hfVklERU86IChzdGF0ZSwgeyByb3V0aW5lcywgcm91dGluZUtleSwgdmlkZW8gfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVbcm91dGluZXNdW3JvdXRpbmVLZXldLnNldFZpZGVvSWQodmlkZW8uaWQpO1xuICAgICAgICAgICAgc3RhdGVbcm91dGluZXNdW3JvdXRpbmVLZXldLnNldFZpZGVvRmlsZW5hbWUodmlkZW8udGl0bGUpO1xuXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8qXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8IEdldHRlcnNcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHxcbiAgICAgfCBTb21ldGltZXMgd2UgbWF5IG5lZWQgdG8gY29tcHV0ZSBkZXJpdmVkIHN0YXRlIGJhc2VkIG9uIHN0b3JlIHN0YXRlLCBmb3JcbiAgICAgfCBleGFtcGxlIGZpbHRlcmluZyB0aHJvdWdoIGEgbGlzdCBvZiBpdGVtcyBhbmQgY291bnRpbmcgdGhlbS5cbiAgICAgfFxuICAgICAqL1xuICAgIGdldHRlcnM6IHtcbiAgICAgICAgZXZlbnRDaGVja2VkOiAoc3RhdGUsIGdldHRlcnMpID0+IChkaXNjaXBsaW5lKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RhdGVbZGlzY2lwbGluZV0pLmZvckVhY2goKHJvdXRpbmVLZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrZWQgJiYgcGFyc2VJbnQoc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uYXR0cnMudG90YWxfc2NvcmUudmFsdWUpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsaWRSb3V0aW5lczogKHN0YXRlLCBnZXR0ZXJzKSA9PiAoZGlzY2lwbGluZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gbnVsbDtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RhdGVbZGlzY2lwbGluZV0pLmZvckVhY2goKHJvdXRpbmVLZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uYXR0cnMudG90YWxfc2NvcmUudmFsdWUpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkW3JvdXRpbmVLZXldID0gc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgICAgfSxcblxuICAgICAgICBhbGxEYXRhOiAoc3RhdGUsIGdldHRlcnMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tcGV0aXRpb25faWQ6IHN0YXRlLmNvbXBldGl0aW9uX2lkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBzdGF0ZS50aXRsZSxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogc3RhdGUuc3RhcnRfZGF0ZSxcbiAgICAgICAgICAgICAgICBlbmRfZGF0ZTogc3RhdGUuZW5kX2RhdGUsXG5cbiAgICAgICAgICAgICAgICB0cmFtcG9saW5lOiBnZXR0ZXJzLmV2ZW50Q2hlY2tlZCgndHJhbXBvbGluZVJvdXRpbmVzJyksXG4gICAgICAgICAgICAgICAgZG10OiBnZXR0ZXJzLmV2ZW50Q2hlY2tlZCgnZG91YmxlTWluaVBhc3NlcycpLFxuICAgICAgICAgICAgICAgIHR1bWJsaW5nOiBnZXR0ZXJzLmV2ZW50Q2hlY2tlZCgndHVtYmxpbmdQYXNzZXMnKSxcblxuICAgICAgICAgICAgICAgIHRyYW1wb2xpbmVSb3V0aW5lczogZ2V0dGVycy52YWxpZFJvdXRpbmVzKCd0cmFtcG9saW5lUm91dGluZXMnKSxcbiAgICAgICAgICAgICAgICBkb3VibGVNaW5pUGFzc2VzOiBnZXR0ZXJzLnZhbGlkUm91dGluZXMoJ2RvdWJsZU1pbmlQYXNzZXMnKSxcbiAgICAgICAgICAgICAgICB0dW1ibGluZ1Bhc3NlczogZ2V0dGVycy52YWxpZFJvdXRpbmVzKCd0dW1ibGluZ1Bhc3NlcycpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfCBNb2R1bGVzXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8XG4gICAgIHwgRHVlIHRvIHVzaW5nIGEgc2luZ2xlIHN0YXRlIHRyZWUsIGFsbCBzdGF0ZSBvZiBvdXIgYXBwbGljYXRpb24gaXNcbiAgICAgfCBjb250YWluZWQgaW5zaWRlIG9uZSBiaWcgb2JqZWN0LiBIb3dldmVyLCBhcyBvdXIgYXBwbGljYXRpb24gZ3Jvd3MgaW5cbiAgICAgfCBzY2FsZSwgdGhlIHN0b3JlIGNhbiBnZXQgcmVhbGx5IGJsb2F0ZWQuXG4gICAgIHxcbiAgICAgfCBUbyBoZWxwIHdpdGggdGhhdCwgVnVleCBhbGxvd3MgdXMgdG8gZGl2aWRlIG91ciBzdG9yZSBpbnRvIG1vZHVsZXMuXG4gICAgIHwgRWFjaCBtb2R1bGUgY2FuIGNvbnRhaW4gaXRzIG93biBzdGF0ZSwgbXV0YXRpb25zLCBhY3Rpb25zLCBnZXR0ZXJzLCBhbmRcbiAgICAgfCBldmVuIG5lc3RlZCBtb2R1bGVzIC0gaXQncyBmcmFjdGFsIGFsbCB0aGUgd2F5IGRvd24uXG4gICAgIHxcbiAgICAgKi9cbiAgICBtb2R1bGVzOiB7XG5cbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XG5cbmNsYXNzIFR1bWJsaW5nU2NvcmUgZXh0ZW5kcyBTY29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGlzY2lwbGluZSA9ICd0dW1ibGluZyc7XG4gICAgICAgIHRoaXMubGFiZWwgPSAnVHVtYmxpbmcnO1xuICAgICAgICB0aGlzLnJvdXRpbmVLZXlzID0gWydwcmVsaW1fcGFzc18xJywgJ3ByZWxpbV9wYXNzXzInLCAnZmluYWxfcGFzc18zJywgJ2ZpbmFsX3Bhc3NfNCddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHVtYmxpbmdTY29yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1R1bWJsaW5nU2NvcmUuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBldGl0aW9uRm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzViZWIyZWMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbXBldGl0aW9uRm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENvbXBldGl0aW9uRm9ybS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzViZWIyZWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NWJlYjJlY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjk1NDNkOTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL011bHRpcGxlVmlkZW9VcGxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTXVsdGlwbGVWaWRlb1VwbG9hZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjk1NDNkOTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yOTU0M2Q5M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDc5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JvdXRpbmVWaWRlby52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWI2YzA1NDAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JvdXRpbmVWaWRlby52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJvdXRpbmVWaWRlby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWI2YzA1NDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01YjZjMDU0MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU21hbGxWaWRlby52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2IzMDg2YzYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1NtYWxsVmlkZW8udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gU21hbGxWaWRlby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2IzMDg2YzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03YjMwODZjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU21hbGxWaWRlby52dWVcbi8vIG1vZHVsZSBpZCA9IDc5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvQ29tbWVudHMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWVlN2IyZTk0IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WaWRlb0NvbW1lbnRzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvQ29tbWVudHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWVlN2IyZTk0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZWU3YjJlOTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvQ29tbWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WaWRlb1BsYXllci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDUwMTY5YTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZpZGVvUGxheWVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1BsYXllci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBWaWRlb1BsYXllci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDUwMTY5YTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NTAxNjlhM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WaWRlb1VwbG9hZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOGNjZjY2N2EhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZpZGVvVXBsb2FkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBWaWRlb1VwbG9hZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOGNjZjY2N2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04Y2NmNjY3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9VcGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WaWRlb1ZvdGluZy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzE5YTk4ZTkhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZpZGVvVm90aW5nLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBWaWRlb1ZvdGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzE5YTk4ZTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMTlhOThlOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Wb3RpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Eb3VibGVNaW5pU2NvcmUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTkzMzhhNjM2IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Eb3VibGVNaW5pU2NvcmUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9Eb3VibGVNaW5pU2NvcmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gRG91YmxlTWluaVNjb3JlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05MzM4YTYzNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTkzMzhhNjM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVHJhbXBvbGluZVNjb3JlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lNGUzYTNhMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVHJhbXBvbGluZVNjb3JlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFRyYW1wb2xpbmVTY29yZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTRlM2EzYTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lNGUzYTNhMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDc5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1R1bWJsaW5nU2NvcmUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJhNmE4ZDIxIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UdW1ibGluZ1Njb3JlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBUdW1ibGluZ1Njb3JlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYTZhOGQyMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJhNmE4ZDIxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgWW91ciBWaWRlb3NcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZXZlbnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV2ZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJldmVudFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0uZXZlbnQgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidHJhbXBvbGluZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVHJhbXBvbGluZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZG91YmxlIG1pbmlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRvdWJsZS1taW5pXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJ0dW1ibGluZ1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVHVtYmxpbmdcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidmlzaWJpbGl0eVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVmlzaWJpbGl0eVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnZpc2liaWxpdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ2aXNpYmlsaXR5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInZpc2liaWxpdHlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLnZpc2liaWxpdHkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicHJpdmF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHJpdmF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidW5saXN0ZWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlVubGlzdGVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwdWJsaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlB1YmxpY1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnF1ZXVlZCksXG4gICAgICBleHByZXNzaW9uOiBcIiFxdWV1ZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiR1cGxvYWQuc2VsZWN0KCd2aWRlby11cGxvYWQnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBWaWRlb3NcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5xdWV1ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJxdWV1ZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiR1cGxvYWQuc3RhcnQoJ3ZpZGVvLXVwbG9hZCcpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF92bS4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnKTtcbiAgICAgICAgX3ZtLnF1ZXVlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJyksXG4gICAgICBleHByZXNzaW9uOiBcIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1wcm9ncmVzcyBwcm9ncmVzc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLWJhclwiLFxuICAgIHN0eWxlOiAoJ3dpZHRoOiAnICsgX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykucGVyY2VudENvbXBsZXRlICsgJyU7JylcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5wZXJjZW50Q29tcGxldGUpICsgXCIlIENvbXBsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS4kdXBsb2FkLmVycm9ycygndmlkZW8tdXBsb2FkJykubGVuZ3RoKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR1cGxvYWQuZXJyb3JzKCd2aWRlby11cGxvYWQnKVswXS5tZXNzYWdlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1yZXN1bHRcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoID4gMCksXG4gICAgICBleHByZXNzaW9uOiBcIiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggPiAwXCJcbiAgICB9XVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kZWZhdWx0XCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGgpICsgXCIgXCIgKyBfdm0uX3MoX3ZtLl9mKFwicGx1cmFsaXplXCIpKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoLCAnZmlsZScpKSArIFwiIHJlYWR5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgwqBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9nZ2xlU2hvd1F1ZXVlZFxuICAgIH1cbiAgfSwgWyhfdm0uc2hvd1F1ZXVlZEZpbGVzKSA/IF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tbWVudS11cFwiXG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICghX3ZtLnNob3dRdWV1ZWRGaWxlcykgPyBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtZG93blwiXG4gIH0pIDogX3ZtLl9lKCldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dRdWV1ZWRGaWxlcyksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dRdWV1ZWRGaWxlc1wiXG4gICAgfV1cbiAgfSwgX3ZtLl9sKChfdm0uJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkKSwgZnVuY3Rpb24oZmlsZSkge1xuICAgIHJldHVybiBfYygnbGknLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhmaWxlLm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5jb21wbGV0ZSksIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIFsoZmlsZS5lcnJvcnMubGVuZ3RoKSA/IF9jKCdkaXYnLCBbX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kYW5nZXJcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoZmlsZS5lcnJvcnNbMF0ubWVzc2FnZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIWZpbGUuZXJyb3JzLmxlbmd0aCkgPyBfYygnZGl2JywgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gICAgfSwgW192bS5fdihfdm0uX3MoZmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWRlZCBzdWNjZXNzZnVsbHkuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCldKVxuICB9KV0sIDIpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yOTU0M2Q5M1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjk1NDNkOTMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGluZS12aWRlbycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyb3V0aW5lc1wiOiBfdm0ucm91dGluZXMsXG4gICAgICBcImRpc2NpcGxpbmVcIjogX3ZtLmRpc2NpcGxpbmUsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IF92bS5yb3V0aW5lS2V5XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2V4ZWN1dGlvbicpLFxuICAgICAgXCJ0aXRsZVwiOiBcIkV4ZWN1dGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRXhlY3V0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uZXhlY3V0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXhlY3V0aW9uXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnZXhlY3V0aW9uJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmV4ZWN1dGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5leGVjdXRpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2RpZmZpY3VsdHknKSxcbiAgICAgIFwidGl0bGVcIjogXCJEaWZmaWN1bHR5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEaWZmaWN1bHR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uZGlmZmljdWx0eSksXG4gICAgICBleHByZXNzaW9uOiBcImRpZmZpY3VsdHlcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCdkaWZmaWN1bHR5JyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmRpZmZpY3VsdHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGlmZmljdWx0eSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKSxcbiAgICAgIFwidGl0bGVcIjogXCJOZXV0cmFsIERlZHVjdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTkRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5uZXV0cmFsX2RlZHVjdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcIm5ldXRyYWxfZGVkdWN0aW9uXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubmV1dHJhbF9kZWR1Y3Rpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubmV1dHJhbF9kZWR1Y3Rpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInRpdGxlXCI6IFwiVG90YWwgU2NvcmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRvdGFsIFNjb3JlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0udG90YWxfc2NvcmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3RhbF9zY29yZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRvdGFsX3Njb3JlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdGFsX3Njb3JlID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yYTZhOGQyMVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmE2YThkMjEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlb19fdm90aW5nXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvX192b3RpbmctYnV0dG9uXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICd2aWRlb19fdm90aW5nLWJ1dHRvbi0tdm90ZWQnOiBfdm0udXNlclZvdGUgPT0gJ3VwJ1xuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udm90ZSgndXAnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS51cCkgKyBcIiDCoFxcblxcbiAgICBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvX192b3RpbmctYnV0dG9uXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICd2aWRlb19fdm90aW5nLWJ1dHRvbi0tdm90ZWQnOiBfdm0udXNlclZvdGUgPT0gJ2Rvd24nXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS52b3RlKCdkb3duJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5kb3duKSArIFwiXFxuXCIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzE5YTk4ZTlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTMxOWE5OGU5IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Wb3RpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSA4MDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd2aWRlbycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luIHZqcy1iaWctcGxheS1jZW50ZXJlZCB2anMtMTYtOVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidmlkZW9cIixcbiAgICAgIFwiY29udHJvbHNcIjogXCJcIixcbiAgICAgIFwicHJlbG9hZFwiOiBcImF1dG9cIixcbiAgICAgIFwiZGF0YS1zZXR1cFwiOiBcIntcXFwiZmx1aWRcXFwiOiB0cnVlLCBcXFwicHJlbG9hZFxcXCI6IFxcXCJhdXRvXFxcIiwgXFxcInBsYXliYWNrUmF0ZXNcXFwiOiBbMC4yNSwgMC4zMywgMSwgMl19XCIsXG4gICAgICBcInBvc3RlclwiOiBfdm0udGh1bWJuYWlsVXJsXG4gICAgfVxuICB9LCBbX2MoJ3NvdXJjZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidmlkZW8vbXA0XCIsXG4gICAgICBcInNyY1wiOiBfdm0udmlkZW9VcmxcbiAgICB9XG4gIH0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDUwMTY5YTNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQ1MDE2OWEzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA4MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnVwbG9hZGVkICYmICFfdm0uaGFzQXR0YWNobWVudCksXG4gICAgICBleHByZXNzaW9uOiBcIiF1cGxvYWRlZCAmJiAhaGFzQXR0YWNobWVudFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi14c1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyBfdm0ucm91dGluZXMgKyAnLScgKyBfdm0ucm91dGluZUtleSkuc3RhdHVzID09PSAnc2VuZGluZycsXG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kdXBsb2FkLnNlbGVjdCgndmlkZW8tdXBsb2FkJyArIF92bS5yb3V0aW5lcyArICctJyArIF92bS5yb3V0aW5lS2V5KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tcGFwZXJjbGlwXCJcbiAgfSksIF92bS5fdihcIiBBdHRhY2ggVmlkZW9cXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS51cGxvYWRlZCB8fCBfdm0uaGFzQXR0YWNobWVudCksXG4gICAgICBleHByZXNzaW9uOiBcInVwbG9hZGVkIHx8IGhhc0F0dGFjaG1lbnRcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZWNrXCJcbiAgfSksIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uZmlsZW5hbWUpICsgXCJcXG4gICAgICAgIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmVtb3ZlLWF0dGFjaG1lbnRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5yZW1vdmVBdHRhY2htZW50KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZS1zaWduXCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyBfdm0ucm91dGluZXMgKyAnLScgKyBfdm0ucm91dGluZUtleSkuc3RhdHVzID09PSAnc2VuZGluZycpLFxuICAgICAgZXhwcmVzc2lvbjogXCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyByb3V0aW5lcyArICctJyArIHJvdXRpbmVLZXkpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtcHJvZ3Jlc3MgcHJvZ3Jlc3NcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy1iYXJcIixcbiAgICBzdHlsZTogKCd3aWR0aDogJyArIF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyBfdm0ucm91dGluZXMgKyAnLScgKyBfdm0ucm91dGluZUtleSkucGVyY2VudENvbXBsZXRlICsgJyU7JylcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyBfdm0ucm91dGluZXMgKyAnLScgKyBfdm0ucm91dGluZUtleSkucGVyY2VudENvbXBsZXRlKSArIFwiJSBDb21wbGV0ZVxcbiAgICAgICAgXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTViNmMwNTQwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01YjZjMDU0MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWVcbi8vIG1vZHVsZSBpZCA9IDgwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnZhbGlkYXRlQmVmb3JlU3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndGl0bGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbXBldGl0aW9uIFRpdGxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnY29udHJvbCc6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZTp0aXRsZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdyZXF1aXJlZCcpLFxuICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICBhcmc6IFwidGl0bGVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udGl0bGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0aXRsZVwiLFxuICAgICAgYXJnOiBcInRpdGxlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInRpdGxlXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0aXRsZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpdGxlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRpdGxlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0aXRsZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndGl0bGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndGl0bGUnKSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImxvY2F0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2NhdGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9jYXRpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2NhdGlvblwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJsb2NhdGlvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibG9jYXRpb25cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sb2NhdGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5sb2NhdGlvbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChmYWxzZSksXG4gICAgICBleHByZXNzaW9uOiBcImZhbHNlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiRXJyb3IgbWVzc2FnZVwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3RhcnRfZGF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3RhcnQgRGF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2NvbnRyb2wnOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGU6c3RhcnRfZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJyksXG4gICAgICBleHByZXNzaW9uOiBcIidkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJ1wiLFxuICAgICAgYXJnOiBcInN0YXJ0X2RhdGVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc3RhcnRfZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcInN0YXJ0X2RhdGVcIixcbiAgICAgIGFyZzogXCJzdGFydF9kYXRlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInN0YXJ0X2RhdGVcIixcbiAgICAgIFwidHlwZVwiOiBcImRhdGVcIixcbiAgICAgIFwibmFtZVwiOiBcInN0YXJ0X2RhdGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5zdGFydF9kYXRlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnN0YXJ0X2RhdGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnc3RhcnRfZGF0ZScpKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2VuZF9kYXRlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImVuZF9kYXRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTdGFydCBEYXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnY29udHJvbCc6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZTplbmRfZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJyksXG4gICAgICBleHByZXNzaW9uOiBcIidkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJ1wiLFxuICAgICAgYXJnOiBcImVuZF9kYXRlXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVuZF9kYXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZW5kX2RhdGVcIixcbiAgICAgIGFyZzogXCJlbmRfZGF0ZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJlbmRfZGF0ZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZW5kX2RhdGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5lbmRfZGF0ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5lbmRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZW5kX2RhdGUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2VuZF9kYXRlJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2VuZF9kYXRlJykpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImV2ZW50LXNlbGVjdGlvblwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2g0JywgW192bS5fdihcIkV2ZW50c1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInRyYW1wb2xpbmVcIixcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0cmFtcG9saW5lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0udHJhbXBvbGluZSkgPyBfdm0uX2koX3ZtLnRyYW1wb2xpbmUsIG51bGwpID4gLTEgOiAoX3ZtLnRyYW1wb2xpbmUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0udHJhbXBvbGluZSxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS50cmFtcG9saW5lID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLnRyYW1wb2xpbmUgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLnRyYW1wb2xpbmUgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBUcmFtcG9saW5lXFxuICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZSksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwgPSAhX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIlxuICB9KSwgX3ZtLl92KFwiIFNlbWktRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsID0gIV92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCJcbiAgfSksIF92bS5fdihcIiBGaW5hbHNcXG4gICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZSksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHJhbXBDb2xTaXplXG4gIH0sIFtfYygndHJhbXBvbGluZS1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkNvbXB1bHNvcnlcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fY29tcHVsc29yeVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHJhbXBDb2xTaXplXG4gIH0sIFtfYygndHJhbXBvbGluZS1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlByZWxpbSBPcHRpb25hbFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9vcHRpb25hbFwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnRyYW1wQ29sU2l6ZVxuICB9LCBbX2MoJ3RyYW1wb2xpbmUtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJTZW1pLUZpbmFsXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwic2VtaV9maW5hbF9vcHRpb25hbFwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50cmFtcENvbFNpemVcbiAgfSwgW19jKCd0cmFtcG9saW5lLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiRmluYWwgT3B0aW9uYWxcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJmaW5hbF9vcHRpb25hbFwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZG10KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZG10XCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImRtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwibmFtZVwiOiBcImRtdFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLmRtdCkgPyBfdm0uX2koX3ZtLmRtdCwgbnVsbCkgPiAtMSA6IChfdm0uZG10KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLmRtdCxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5kbXQgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0uZG10ID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS5kbXQgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBEb3VibGUgTWluaVxcbiAgICAgICAgICAgICAgICBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRtdCksXG4gICAgICBleHByZXNzaW9uOiBcImRtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCA9ICFfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiXG4gIH0pLCBfdm0uX3YoXCIgRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRtdCksXG4gICAgICBleHByZXNzaW9uOiBcImRtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS5kbXRDb2xTaXplXG4gIH0sIFtfYygnZG10LXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAxXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfMVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0uZG10Q29sU2l6ZVxuICB9LCBbX2MoJ2RtdC1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgMlwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9wYXNzXzJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS5kbXRDb2xTaXplXG4gIH0sIFtfYygnZG10LXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAzXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwiZmluYWxfcGFzc18zXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0uZG10Q29sU2l6ZVxuICB9LCBbX2MoJ2RtdC1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgNFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcImZpbmFsX3Bhc3NfNFwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udHVtYmxpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1wiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0dW1ibGluZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwibmFtZVwiOiBcInR1bWJsaW5nXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0udHVtYmxpbmcpID8gX3ZtLl9pKF92bS50dW1ibGluZywgbnVsbCkgPiAtMSA6IChfdm0udHVtYmxpbmcpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0udHVtYmxpbmcsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0udHVtYmxpbmcgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0udHVtYmxpbmcgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLnR1bWJsaW5nID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgVHVtYmxpbmdcXG4gICAgICAgICAgICAgICAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZyksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbCA9ICFfdm0udHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiXG4gIH0pLCBfdm0uX3YoXCIgRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHVtYmxpbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHVtYmxpbmdDb2xTaXplXG4gIH0sIFtfYygndHVtYmxpbmctc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDFcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18xXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50dW1ibGluZ0NvbFNpemVcbiAgfSwgW19jKCd0dW1ibGluZy1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgMlwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9wYXNzXzJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnR1bWJsaW5nQ29sU2l6ZVxuICB9LCBbX2MoJ3R1bWJsaW5nLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAzXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwiZmluYWxfcGFzc18zXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50dW1ibGluZ0NvbFNpemVcbiAgfSwgW19jKCd0dW1ibGluZy1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgNFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcImZpbmFsX3Bhc3NfNFwiXG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmVycm9ycy5hbnkoKSB8fCAhX3ZtLmV2ZW50c1ZhbGlkXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3VibWl0IENvbXBldGl0aW9uXCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03NWJlYjJlY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzViZWIyZWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21wZXRpdGlvbkZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA4MDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrICFpbXBvcnRhbnRcIlxuICAgIH1cbiAgfSwgW19jKCdhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0uc2hvd1ZpZGVvKSxcbiAgICAgIGV4cHJlc3Npb246IFwiIXNob3dWaWRlb1wiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0ucGxheVZpZGVvKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgUGxheSBWaWRlb1xcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dWaWRlbyksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dWaWRlb1wiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uaGlkZVZpZGVvKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtdXBcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICBIaWRlIFZpZGVvXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndmlkZW8nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpbiB2anMtYmlnLXBsYXktY2VudGVyZWQgdmpzLTE2LTkgdmpzLWhpZGRlblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6ICd2aWRlby0nICsgX3ZtLnZpZGVvSWQsXG4gICAgICBcImNvbnRyb2xzXCI6IFwiXCIsXG4gICAgICBcImRhdGEtc2V0dXBcIjogXCJ7XFxcImZsdWlkXFxcIjogdHJ1ZSwgXFxcInBsYXliYWNrUmF0ZXNcXFwiOiBbMC4yNSwgMC4zMywgMSwgMl0gfVwiLFxuICAgICAgXCJwb3N0ZXJcIjogX3ZtLmltZyxcbiAgICAgIFwid2lkdGhcIjogX3ZtLndpZHRoLFxuICAgICAgXCJoZWlnaHRcIjogX3ZtLmhlaWdodFxuICAgIH1cbiAgfSwgW19jKCdzb3VyY2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInZpZGVvL21wNFwiLFxuICAgICAgXCJzcmNcIjogX3ZtLnNyY1xuICAgIH1cbiAgfSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdiMzA4NmM2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03YjMwODZjNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlXG4vLyBtb2R1bGUgaWQgPSA4MDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIlxuICB9LCBbX3ZtLl92KFwiVXBsb2FkIFlvdXIgVmlkZW9cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmFtZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcIm5hbWVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5hdXRoZW50aWNhdGVkXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZXZlbnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV2ZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLmV2ZW50ID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInRyYW1wb2xpbmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRyYW1wb2xpbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImRvdWJsZSBtaW5pXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEb3VibGUtbWluaVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidHVtYmxpbmdcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlR1bWJsaW5nXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoIV92bS51cGxvYWRpbmcpID8gX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJmaWxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJ2aWRlb1wiLFxuICAgICAgXCJpZFwiOiBcInZpZGVvXCIsXG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0ubmFtZSB8fCAhX3ZtLmV2ZW50XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLmZpbGVJbnB1dENoYW5nZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mYWlsZWQpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51cGxvYWRpbmcgJiYgIV92bS5mYWlsZWQpID8gX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInZpZGVvLWZvcm1cIlxuICAgIH1cbiAgfSwgWyghX3ZtLnVwbG9hZGluZ0NvbXBsZXRlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtaW5mb1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIlxuICB9KSwgX3ZtLl92KFwiIFlvdXIgdmlkZW8gaXMgdXBsb2FkaW5nLi4uXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51cGxvYWRpbmdDb21wbGV0ZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBjb21wbGV0ZS4gVmlkZW8gaXMgbm93IHByb2Nlc3NpbmcuIFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIi92aWRlb3NcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkdvIHRvIHlvdXIgdmlkZW9zLlwiKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0udXBsb2FkaW5nQ29tcGxldGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLWJhclwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgd2lkdGg6IF92bS5maWxlUHJvZ3Jlc3MgKyAnJSdcbiAgICB9KVxuICB9KV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRpdGxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50aXRsZSksXG4gICAgICBleHByZXNzaW9uOiBcInRpdGxlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpdGxlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRpdGxlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJkZXNjcmlwdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGVzY3JpcHRpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRlc2NyaXB0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGVzY3JpcHRpb25cIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZGVzY3JpcHRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGVzY3JpcHRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInZpc2liaWxpdHlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlZpc2liaWxpdHlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS52aXNpYmlsaXR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwidmlzaWJpbGl0eVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLnZpc2liaWxpdHkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicHJpdmF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHJpdmF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidW5saXN0ZWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlVubGlzdGVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwdWJsaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlB1YmxpY1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBwdWxsLXJpZ2h0XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnNhdmVTdGF0dXMpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udXBkYXRlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTYXZlIENoYW5nZXNcIildKV0pIDogX3ZtLl9lKCldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LThjY2Y2NjdhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi04Y2NmNjY3YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGluZS12aWRlbycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyb3V0aW5lc1wiOiBfdm0ucm91dGluZXMsXG4gICAgICBcImRpc2NpcGxpbmVcIjogX3ZtLmRpc2NpcGxpbmUsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IF92bS5yb3V0aW5lS2V5XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2V4ZWN1dGlvbicpLFxuICAgICAgXCJ0aXRsZVwiOiBcIkV4ZWN1dGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRXhlY3V0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uZXhlY3V0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXhlY3V0aW9uXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnZXhlY3V0aW9uJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmV4ZWN1dGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5leGVjdXRpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2RpZmZpY3VsdHknKSxcbiAgICAgIFwidGl0bGVcIjogXCJEaWZmaWN1bHR5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEaWZmaWN1bHR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uZGlmZmljdWx0eSksXG4gICAgICBleHByZXNzaW9uOiBcImRpZmZpY3VsdHlcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCdkaWZmaWN1bHR5JyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmRpZmZpY3VsdHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGlmZmljdWx0eSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKSxcbiAgICAgIFwidGl0bGVcIjogXCJOZXV0cmFsIERlZHVjdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTkRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5uZXV0cmFsX2RlZHVjdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcIm5ldXRyYWxfZGVkdWN0aW9uXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubmV1dHJhbF9kZWR1Y3Rpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubmV1dHJhbF9kZWR1Y3Rpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInRpdGxlXCI6IFwiVG90YWwgU2NvcmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRvdGFsIFNjb3JlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0udG90YWxfc2NvcmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3RhbF9zY29yZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRvdGFsX3Njb3JlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdGFsX3Njb3JlID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi05MzM4YTYzNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOTMzOGE2MzYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGluZS12aWRlbycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyb3V0aW5lc1wiOiBfdm0ucm91dGluZXMsXG4gICAgICBcImRpc2NpcGxpbmVcIjogX3ZtLmRpc2NpcGxpbmUsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IF92bS5yb3V0aW5lS2V5XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2V4ZWN1dGlvbicpLFxuICAgICAgXCJ0aXRsZVwiOiBcIkV4ZWN1dGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRXhlY3V0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uZXhlY3V0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXhlY3V0aW9uXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnZXhlY3V0aW9uJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmV4ZWN1dGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5leGVjdXRpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2RpZmZpY3VsdHknKSxcbiAgICAgIFwidGl0bGVcIjogXCJEaWZmaWN1bHR5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEaWZmaWN1bHR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uZGlmZmljdWx0eSksXG4gICAgICBleHByZXNzaW9uOiBcImRpZmZpY3VsdHlcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCdkaWZmaWN1bHR5JyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmRpZmZpY3VsdHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGlmZmljdWx0eSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgndGltZV9vZl9mbGlnaHQnKSxcbiAgICAgIFwidGl0bGVcIjogXCJUaW1lIG9mIEZsaWdodFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVE9GXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0udGltZV9vZl9mbGlnaHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0aW1lX29mX2ZsaWdodFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ3RpbWVfb2ZfZmxpZ2h0JyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpbWVfb2ZfZmxpZ2h0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRpbWVfb2ZfZmxpZ2h0ID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdob3Jpem9udGFsX2Rpc3BsYWNlbWVudCcpLFxuICAgICAgXCJ0aXRsZVwiOiBcIkhvcml6b250YWwgRGlzcGxhY2VtZW50XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJIRFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmhvcml6b250YWxfZGlzcGxhY2VtZW50KSxcbiAgICAgIGV4cHJlc3Npb246IFwiaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnRcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCdob3Jpem9udGFsX2Rpc3BsYWNlbWVudCcpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5ob3Jpem9udGFsX2Rpc3BsYWNlbWVudClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5ob3Jpem9udGFsX2Rpc3BsYWNlbWVudCA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKSxcbiAgICAgIFwidGl0bGVcIjogXCJOZXV0cmFsIERlZHVjdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTkRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5uZXV0cmFsX2RlZHVjdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcIm5ldXRyYWxfZGVkdWN0aW9uXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubmV1dHJhbF9kZWR1Y3Rpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubmV1dHJhbF9kZWR1Y3Rpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInRpdGxlXCI6IFwiVG90YWwgU2NvcmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRvdGFsIFNjb3JlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0udG90YWxfc2NvcmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3RhbF9zY29yZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRvdGFsX3Njb3JlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdGFsX3Njb3JlID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lNGUzYTNhMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZTRlM2EzYTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihfdm0uX3MoX3ZtLmNvbW1lbnRzLmxlbmd0aCkgKyBcIiBcIiArIF92bS5fcyhfdm0uX2YoXCJwbHVyYWxpemVcIikoX3ZtLmNvbW1lbnRzLmxlbmd0aCwgJ2NvbW1lbnQnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW8tY29tbWVudCBjbGVhcmZpeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlmXCI6IFwiJHJvb3QudXNlci5hdXRoZW50aWNhdGVkXCJcbiAgICB9XG4gIH0sIFtfYygndGV4dGFyZWEnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uYm9keSksXG4gICAgICBleHByZXNzaW9uOiBcImJvZHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU2F5IHNvbWV0aGluZy4uLlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmJvZHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uYm9keSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHRcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMTBweFwiXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmNyZWF0ZUNvbW1lbnQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyhfdm0ucG9zdGluZykgPyBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgUG9zdFxcbiAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLWxpc3RcIlxuICB9LCBfdm0uX2woKF92bS5jb21tZW50cyksIGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWFcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGVmdFwiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKGNvbW1lbnQpXG4gICAgICB9XG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1vYmplY3QgaW1nLWF2YXRhclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogY29tbWVudC51c2VyLmRhdGEuaW1hZ2UsXG4gICAgICAgIFwiYWx0XCI6IGNvbW1lbnQudXNlci5kYXRhLm5hbWVcbiAgICAgIH1cbiAgICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1ib2R5XCJcbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogX3ZtLnVzZXJVcmwoY29tbWVudClcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhjb21tZW50LnVzZXIuZGF0YS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGNvbW1lbnQuY3JlYXRlZF9hdF9odW1hbikgKyBcIlxcblxcbiAgICAgICAgICAgICAgICBcIiksIChjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGgpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCkgKyBcIiAgXCIgKyBfdm0uX3MoX3ZtLl9mKFwicGx1cmFsaXplXCIpKGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCwgJ3JlcGx5JywgJ3JlcGxpZXMnKSkgKyBcIilcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoX3ZtLl9zKGNvbW1lbnQuYm9keSkpXSksIF92bS5fdihcIiBcIiksIChfdm0uJHJvb3QudXNlci5hdXRoZW50aWNhdGVkKSA/IF9jKCd1bCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtaW5saW5lXCJcbiAgICB9LCBbX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0udG9nZ2xlUmVwbHlGb3JtKGNvbW1lbnQuaWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5yZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50LmlkID8gJ0NhbmNlbCByZXBseScgOiAnUmVwbHknKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKGNvbW1lbnQudXNlcl9pZCA9PT0gX3ZtLiRyb290LnVzZXIuaWQpID8gX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uZGVsZXRlQ29tbWVudChjb21tZW50LmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgWyhfdm0uZGVsZXRpbmcgPT09IGNvbW1lbnQuaWQpID8gX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICAgIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBEZWxldGVcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnJlcGx5Rm9ybVZpc2libGUgPT09IGNvbW1lbnQuaWQpID8gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvLWNvbW1lbnQgY2xlYXJcIlxuICAgIH0sIFtfYygndGV4dGFyZWEnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICB2YWx1ZTogKF92bS5yZXBseUJvZHkpLFxuICAgICAgICBleHByZXNzaW9uOiBcInJlcGx5Qm9keVwiXG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiLFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlcGx5Qm9keSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0ucmVwbHlCb2R5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIxMHB4XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5jcmVhdGVSZXBseShjb21tZW50LmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgWyhfdm0ucmVwbHlpbmcpID8gX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICAgIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBSZXBseVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKGNvbW1lbnQucmVwbGllcy5kYXRhKSwgZnVuY3Rpb24ocmVwbHkpIHtcbiAgICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZWRpYVwiXG4gICAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGVmdFwiXG4gICAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKHJlcGx5KVxuICAgICAgICB9XG4gICAgICB9LCBbX2MoJ2ltZycsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtb2JqZWN0IGltZy1hdmF0YXJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcInNyY1wiOiByZXBseS51c2VyLmRhdGEuaW1hZ2UsXG4gICAgICAgICAgXCJhbHRcIjogcmVwbHkudXNlci5kYXRhLm5hbWVcbiAgICAgICAgfVxuICAgICAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1ib2R5XCJcbiAgICAgIH0sIFtfYygnYScsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImhyZWZcIjogX3ZtLnVzZXJVcmwocmVwbHkpXG4gICAgICAgIH1cbiAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHJlcGx5LnVzZXIuZGF0YS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHJlcGx5LmNyZWF0ZWRfYXRfaHVtYW4pICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCdwJywgW192bS5fdihfdm0uX3MocmVwbHkuYm9keSkpXSksIF92bS5fdihcIiBcIiksIChfdm0uJHJvb3QudXNlci5hdXRoZW50aWNhdGVkKSA/IF9jKCd1bCcsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1pbmxpbmVcIlxuICAgICAgfSwgW19jKCdsaScsIFsocmVwbHkudXNlcl9pZCA9PT0gX3ZtLiRyb290LnVzZXIuaWQpID8gX2MoJ2EnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbW1lbnQocmVwbHkuaWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBbKF92bS5kZWxldGluZyA9PT0gcmVwbHkuaWQpID8gX2MoJ2knLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiXG4gICAgICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpXSldKSA6IF92bS5fZSgpXSldKVxuICAgIH0pXSwgMildKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lZTdiMmU5NFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZWU3YjJlOTQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IG1hdGggZnJvbSAnbWF0aGpzJztcblxuY2xhc3MgU2NvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmF0dHJzID0ge1xuICAgICAgICAgICAgZXhlY3V0aW9uOiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWZmaWN1bHR5OiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXV0cmFsX2RlZHVjdGlvbjoge1xuICAgICAgICAgICAgICAgIG9yZGVyOiAyMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdGFsX3Njb3JlOiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpZGVvX2lkID0gbnVsbDtcbiAgICAgICAgdGhpcy52aWRlb0ZpbGVuYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0SWQoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIHNldFZpZGVvSWQodmlkZW9JZCkge1xuICAgICAgICB0aGlzLnZpZGVvX2lkID0gdmlkZW9JZDtcbiAgICB9XG5cbiAgICBzZXRWaWRlb0ZpbGVuYW1lKHZpZGVvRmlsZW5hbWUpIHtcbiAgICAgICAgdGhpcy52aWRlb0ZpbGVuYW1lID0gdmlkZW9GaWxlbmFtZTtcbiAgICB9XG5cbiAgICBoYXNWaWRlbygpIHtcbiAgICAgICAgcmV0dXJuICEhIHRoaXMudmlkZW9faWQ7XG4gICAgfVxuXG4gICAgdXBkYXRlQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdHRyc1trZXldLnZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzY29yZUtleXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmF0dHJzKS5zb3J0KChhLCBiKSA9PiB7IHJldHVybiB0aGlzLmF0dHJzW2FdLm9yZGVyIC0gdGhpcy5hdHRyc1tiXS5vcmRlcjsgfSk7XG4gICAgfVxuXG4gICAgaGFzU2NvcmUoKSB7XG4gICAgICAgICh0aGlzLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlICE9PSBudWxsICYmIHRoaXMuYXR0cnMudG90YWxfc2NvcmUudmFsdWUgPiAwKTtcbiAgICB9XG5cbiAgICBhdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHRoaXMuYXR0cnNba2V5XS52YWx1ZTtcbiAgICB9XG5cbiAgICBjb21wdXRlVG90YWwoKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIHRoaXMuc2NvcmVLZXlzKCkuZm9yRWFjaCgoY29tcG9uZW50X2tleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudF9rZXkgPT09ICduZXV0cmFsX2RlZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzdW0gPSAodGhpcy5hdHRycy5uZXV0cmFsX2RlZHVjdGlvbi52YWx1ZSkgPyBtYXRoLnN1YnRyYWN0KHN1bSwgdGhpcy5hdHRycy5uZXV0cmFsX2RlZHVjdGlvbi52YWx1ZSkgOiBzdW07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudF9rZXkgIT09ICd0b3RhbF9zY29yZScpIHtcbiAgICAgICAgICAgICAgICBzdW0gPSAodGhpcy5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSkgPyBtYXRoLmFkZChzdW0sIHRoaXMuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUpIDogc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlID0gbWF0aC5yb3VuZChzdW0sIDMpO1xuICAgIH1cblxuICAgIHNldFRvdGFsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2NvcmVLZXlzKCkuZm9yRWFjaCgoY29tcG9uZW50X2tleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudF9rZXkgIT09ICd0b3RhbF9zY29yZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hdHRycy50b3RhbF9zY29yZS52YWx1ZSA9ICh2YWx1ZSAhPT0gJycpID8gbWF0aC5yb3VuZCh2YWx1ZSwgMykgOiAnJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvU2NvcmUuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcblxuY2xhc3MgVHJhbXBvbGluZVNjb3JlIGV4dGVuZHMgU2NvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRpc2NpcGxpbmUgPSAndHJhbXBvbGluZSc7XG4gICAgICAgIHRoaXMubGFiZWwgPSAnVHJhbXBvbGluZSc7XG4gICAgICAgIHRoaXMucm91dGluZUtleXMgPSBbJ3ByZWxpbV9jb21wdWxzb3J5JywgJ3ByZWxpbV9vcHRpb25hbCcsICdzZW1pX2ZpbmFsX29wdGlvbmFsJywgJ2ZpbmFsX29wdGlvbmFsJ107XG5cbiAgICAgICAgdGhpcy5hdHRycy50aW1lX29mX2ZsaWdodCA9IHtcbiAgICAgICAgICAgIG9yZGVyOiAxMCxcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdHRycy5ob3Jpem9udGFsX2Rpc3BsYWNlbWVudCA9IHtcbiAgICAgICAgICAgIG9yZGVyOiAxMSxcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH07XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW1wb2xpbmVTY29yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1RyYW1wb2xpbmVTY29yZS5qcyIsInZhciBtYXRoID0gcmVxdWlyZSgnbWF0aGpzJyk7XG52YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5jb25zdCBTY29yZU1peGluID0ge1xuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHJvdXRpbmVLZXk6IG51bGwsXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGV4ZWN1dGlvbjoge1xuICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbdGhpcy5yb3V0aW5lc11bdGhpcy5yb3V0aW5lS2V5XS5hdHRycy5leGVjdXRpb24udmFsdWUgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkgeyB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9ST1VUSU5FX1BST1BFUlRZJywgeyBkaXNjaXBsaW5lOiB0aGlzLnJvdXRpbmVzLCByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksIGNvbXBvbmVudDogJ2V4ZWN1dGlvbicsIHZhbHVlIH0pIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGlmZmljdWx0eToge1xuICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbdGhpcy5yb3V0aW5lc11bdGhpcy5yb3V0aW5lS2V5XS5hdHRycy5kaWZmaWN1bHR5LnZhbHVlIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfUk9VVElORV9QUk9QRVJUWScsIHsgZGlzY2lwbGluZTogdGhpcy5yb3V0aW5lcywgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LCBjb21wb25lbnQ6ICdkaWZmaWN1bHR5JywgdmFsdWUgfSkgfVxuICAgICAgICB9LFxuICAgICAgICB0aW1lX29mX2ZsaWdodDoge1xuICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbdGhpcy5yb3V0aW5lc11bdGhpcy5yb3V0aW5lS2V5XS5hdHRycy50aW1lX29mX2ZsaWdodC52YWx1ZSB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1JPVVRJTkVfUFJPUEVSVFknLCB7IGRpc2NpcGxpbmU6IHRoaXMucm91dGluZXMsIHJvdXRpbmVLZXk6IHRoaXMucm91dGluZUtleSwgY29tcG9uZW50OiAndGltZV9vZl9mbGlnaHQnLCB2YWx1ZSB9KSB9XG4gICAgICAgIH0sXG4gICAgICAgIGhvcml6b250YWxfZGlzcGxhY2VtZW50OiB7XG4gICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVt0aGlzLnJvdXRpbmVzXVt0aGlzLnJvdXRpbmVLZXldLmF0dHJzLmhvcml6b250YWxfZGlzcGxhY2VtZW50LnZhbHVlIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfUk9VVElORV9QUk9QRVJUWScsIHsgZGlzY2lwbGluZTogdGhpcy5yb3V0aW5lcywgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LCBjb21wb25lbnQ6ICdob3Jpem9udGFsX2Rpc3BsYWNlbWVudCcsIHZhbHVlIH0pIH1cbiAgICAgICAgfSxcbiAgICAgICAgbmV1dHJhbF9kZWR1Y3Rpb246IHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uYXR0cnMubmV1dHJhbF9kZWR1Y3Rpb24udmFsdWUgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkgeyB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9ST1VUSU5FX1BST1BFUlRZJywgeyBkaXNjaXBsaW5lOiB0aGlzLnJvdXRpbmVzLCByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksIGNvbXBvbmVudDogJ25ldXRyYWxfZGVkdWN0aW9uJywgdmFsdWUgfSkgfVxuICAgICAgICB9LFxuICAgICAgICB0b3RhbF9zY29yZToge1xuICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbdGhpcy5yb3V0aW5lc11bdGhpcy5yb3V0aW5lS2V5XS5hdHRycy50b3RhbF9zY29yZS52YWx1ZSB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1JPVVRJTkVfUFJPUEVSVFknLCB7IGRpc2NpcGxpbmU6IHRoaXMucm91dGluZXMsIHJvdXRpbmVLZXk6IHRoaXMucm91dGluZUtleSwgY29tcG9uZW50OiAndG90YWxfc2NvcmUnLCB2YWx1ZSB9KSB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBmb3JtSWQoY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMuZGlzY2lwbGluZSwgdGhpcy5yb3V0aW5lS2V5LCBjb21wb25lbnRdLmpvaW4oJ18nKTtcbiAgICAgICAgfSxcblxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY29yZU1peGluO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Njb3JlLm1peGluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==