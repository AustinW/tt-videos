webpackJsonp([1,2],{

/***/ 118:
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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(92);


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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(92);


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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(92);


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

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_filters__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vee_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(118);
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

Vue.use(__webpack_require__(123));
Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue2_filters___default.a);
Vue.use(__webpack_require__(119));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TrampolineScore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DoubleMiniScore__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TumblingScore__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__(88);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_video_js__ = __webpack_require__(89);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_video_js__ = __webpack_require__(89);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TumblingScore__ = __webpack_require__(132);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TrampolineScore__ = __webpack_require__(131);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_score_mixin__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TumblingScore__ = __webpack_require__(132);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


window._ = __webpack_require__(87);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = __webpack_require__(86);

__webpack_require__(121);

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = __webpack_require__(90);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(120);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TrampolineScore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DoubleMiniScore__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TumblingScore__ = __webpack_require__(132);









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({

    strict: true,

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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs__ = __webpack_require__(122);
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

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var math = __webpack_require__(122);
var _ = __webpack_require__(87);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZXgvZGlzdC92dWV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0RvdWJsZU1pbmlTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1RyYW1wb2xpbmVTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1R1bWJsaW5nU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzPzI2OTEiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vQ29tcGV0aXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vTXVsdGlwbGVWaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vL1JvdXRpbmVWaWRlby52dWUiLCJ3ZWJwYWNrOi8vL1NtYWxsVmlkZW8udnVlIiwid2VicGFjazovLy9WaWRlb0NvbW1lbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy9WaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vL1ZpZGVvVm90aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vRG91YmxlTWluaVNjb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vVHJhbXBvbGluZVNjb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vVHVtYmxpbmdTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UcmFtcG9saW5lU2NvcmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlPzRiZTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZT8wZmQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWU/YWM5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlPzRjODgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWU/MGQ1NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZT84ZDI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZT8wZWNlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWU/NDA2NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWU/ZjZmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWU/MTk5YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWU/N2U3MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1Njb3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Njb3JlLm1peGluLmpzIl0sIm5hbWVzIjpbIkRvdWJsZU1pbmlTY29yZSIsImRpc2NpcGxpbmUiLCJsYWJlbCIsInJvdXRpbmVLZXlzIiwiVHJhbXBvbGluZVNjb3JlIiwiYXR0cnMiLCJ0aW1lX29mX2ZsaWdodCIsIm9yZGVyIiwidmFsdWUiLCJob3Jpem9udGFsX2Rpc3BsYWNlbWVudCIsIlR1bWJsaW5nU2NvcmUiLCJyZXF1aXJlIiwiVnVlIiwiY29tcG9uZW50IiwidXNlIiwid2luZG93IiwiRXZlbnQiLCJpbnN0YWxsIiwib3B0aW9ucyIsImdldEpzb24iLCJyZXNwb25zZSIsImpzb24iLCJodHRwIiwiaGVhZGVycyIsImNvbW1vbiIsIkxhcmF2ZWwiLCJjc3JmVG9rZW4iLCJhcHAiLCJlbCIsImRhdGEiLCJzdG9yZSIsIl8iLCIkIiwialF1ZXJ5IiwiYXhpb3MiLCJkZWZhdWx0cyIsIlZ1ZXgiLCJTdG9yZSIsInN0cmljdCIsInN0YXRlIiwiY29tcGV0aXRpb25faWQiLCJ0aXRsZSIsImxvY2F0aW9uIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwidHJhbXBvbGluZVJvdXRpbmVzIiwicHJlbGltX2NvbXB1bHNvcnkiLCJwcmVsaW1fb3B0aW9uYWwiLCJzZW1pX2ZpbmFsX29wdGlvbmFsIiwiZmluYWxfb3B0aW9uYWwiLCJkb3VibGVNaW5pUGFzc2VzIiwicHJlbGltX3Bhc3NfMSIsInByZWxpbV9wYXNzXzIiLCJmaW5hbF9wYXNzXzMiLCJmaW5hbF9wYXNzXzQiLCJ0dW1ibGluZ1Bhc3NlcyIsImFjdGlvbnMiLCJMT0FEX0NPTVBFVElUSU9OIiwiY29udGV4dCIsImNvbXBldGl0aW9uSWQiLCJnZXQiLCJ0aGVuIiwiY29tcGV0aXRpb24iLCJjb25zb2xlIiwibG9nIiwiY29tbWl0IiwiaWQiLCJmaWVsZHMiLCJ0cmFtcG9saW5lU2NvcmVzIiwibGVuZ3RoIiwic2NvcmVzIiwiZG91YmxlTWluaVNjb3JlcyIsInR1bWJsaW5nU2NvcmVzIiwibXV0YXRpb25zIiwiU0VUX0NPTVBFVElUSU9OX0lEIiwiU0VUX0NPTVBFVElUSU9OX0ZJRUxEUyIsIm1vbWVudCIsImRhdGUiLCJmb3JtYXQiLCJTRVRfVElUTEUiLCJTRVRfTE9DQVRJT04iLCJTRVRfU1RBUlRfREFURSIsIlNFVF9FTkRfREFURSIsIlNFVF9TQ09SRVMiLCJzY29yZUNsYXNzIiwiZm9yRWFjaCIsInNjb3JlIiwic2NvcmVJbnN0YW5jZSIsInNjb3JlTWFwIiwiT2JqZWN0Iiwia2V5cyIsInNjb3JlUGFydCIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJzZXRJZCIsInNldFZpZGVvSWQiLCJ2aWRlb19pZCIsInZpZGVvIiwiaGFzT3duUHJvcGVydHkiLCJzZXRWaWRlb0ZpbGVuYW1lIiwidmlkZW9GaWxlbmFtZSIsInJvdXRpbmUiLCJTRVRfUk9VVElORV9QUk9QRVJUWSIsInJvdXRpbmVLZXkiLCJjb21wdXRlVG90YWwiLCJzZXRUb3RhbCIsIlNFVF9UUkFNUE9MSU5FX1NDT1JFUyIsIlNFVF9ET1VCTEVfTUlOSV9TQ09SRVMiLCJTRVRfVFVNQkxJTkdfU0NPUkVTIiwiUkVNT1ZFX0FUVEFDSE1FTlQiLCJyb3V0aW5lcyIsIkFUVEFDSF9WSURFTyIsImdldHRlcnMiLCJldmVudENoZWNrZWQiLCJjaGVja2VkIiwicGFyc2VJbnQiLCJ0b3RhbF9zY29yZSIsInZhbGlkUm91dGluZXMiLCJ2YWxpZCIsImFsbERhdGEiLCJ0cmFtcG9saW5lIiwiZG10IiwidHVtYmxpbmciLCJtb2R1bGVzIiwiU2NvcmUiLCJleGVjdXRpb24iLCJkaWZmaWN1bHR5IiwibmV1dHJhbF9kZWR1Y3Rpb24iLCJ2aWRlb0lkIiwiYXR0cmlidXRlcyIsImtleSIsInNvcnQiLCJhIiwiYiIsInN1bSIsInNjb3JlS2V5cyIsImNvbXBvbmVudF9rZXkiLCJtYXRoIiwic3VidHJhY3QiLCJhZGQiLCJyb3VuZCIsIlNjb3JlTWl4aW4iLCJwcm9wcyIsImNvbXB1dGVkIiwiJHN0b3JlIiwic2V0IiwibWV0aG9kcyIsImZvcm1JZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCLElBQUkseUJBQXlCO0FBQ3hFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7O0FBRXJCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVI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O0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RUFBOEU7QUFDOUUsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztB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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNqakJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2hFQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdB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O0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFD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QyxLQUFLWixVQUFOLEVBQWtCLEtBQUtxRyxVQUF2QixFQUFtQ3pGLFNBQW5DLEVBQThDc0ksSUFBOUMsQ0FBbUQsR0FBbkQsQ0FBUDtBQUNIO0FBSEk7QUFsQ00sQ0FBbkI7O0FBMENBLHdEQUFlUCxVQUFmLEMiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogdnVleCB2Mi4yLjFcbiAqIChjKSAyMDE3IEV2YW4gWW91XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xudmFyIGFwcGx5TWl4aW4gPSBmdW5jdGlvbiAoVnVlKSB7XG4gIHZhciB2ZXJzaW9uID0gTnVtYmVyKFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJylbMF0pO1xuXG4gIGlmICh2ZXJzaW9uID49IDIpIHtcbiAgICB2YXIgdXNlc0luaXQgPSBWdWUuY29uZmlnLl9saWZlY3ljbGVIb29rcy5pbmRleE9mKCdpbml0JykgPiAtMTtcbiAgICBWdWUubWl4aW4odXNlc0luaXQgPyB7IGluaXQ6IHZ1ZXhJbml0IH0gOiB7IGJlZm9yZUNyZWF0ZTogdnVleEluaXQgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3ZlcnJpZGUgaW5pdCBhbmQgaW5qZWN0IHZ1ZXggaW5pdCBwcm9jZWR1cmVcbiAgICAvLyBmb3IgMS54IGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgIHZhciBfaW5pdCA9IFZ1ZS5wcm90b3R5cGUuX2luaXQ7XG4gICAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICAgICAgb3B0aW9ucy5pbml0ID0gb3B0aW9ucy5pbml0XG4gICAgICAgID8gW3Z1ZXhJbml0XS5jb25jYXQob3B0aW9ucy5pbml0KVxuICAgICAgICA6IHZ1ZXhJbml0O1xuICAgICAgX2luaXQuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZ1ZXggaW5pdCBob29rLCBpbmplY3RlZCBpbnRvIGVhY2ggaW5zdGFuY2VzIGluaXQgaG9va3MgbGlzdC5cbiAgICovXG5cbiAgZnVuY3Rpb24gdnVleEluaXQgKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9ucztcbiAgICAvLyBzdG9yZSBpbmplY3Rpb25cbiAgICBpZiAob3B0aW9ucy5zdG9yZSkge1xuICAgICAgdGhpcy4kc3RvcmUgPSBvcHRpb25zLnN0b3JlO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5wYXJlbnQgJiYgb3B0aW9ucy5wYXJlbnQuJHN0b3JlKSB7XG4gICAgICB0aGlzLiRzdG9yZSA9IG9wdGlvbnMucGFyZW50LiRzdG9yZTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBkZXZ0b29sSG9vayA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG5mdW5jdGlvbiBkZXZ0b29sUGx1Z2luIChzdG9yZSkge1xuICBpZiAoIWRldnRvb2xIb29rKSB7IHJldHVybiB9XG5cbiAgc3RvcmUuX2RldnRvb2xIb29rID0gZGV2dG9vbEhvb2s7XG5cbiAgZGV2dG9vbEhvb2suZW1pdCgndnVleDppbml0Jywgc3RvcmUpO1xuXG4gIGRldnRvb2xIb29rLm9uKCd2dWV4OnRyYXZlbC10by1zdGF0ZScsIGZ1bmN0aW9uICh0YXJnZXRTdGF0ZSkge1xuICAgIHN0b3JlLnJlcGxhY2VTdGF0ZSh0YXJnZXRTdGF0ZSk7XG4gIH0pO1xuXG4gIHN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAobXV0YXRpb24sIHN0YXRlKSB7XG4gICAgZGV2dG9vbEhvb2suZW1pdCgndnVleDptdXRhdGlvbicsIG11dGF0aW9uLCBzdGF0ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgaXRlbSB0aGF0IHBhc3MgdGhlIHRlc3RcbiAqIGJ5IHNlY29uZCBhcmd1bWVudCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEByZXR1cm4geyp9XG4gKi9cbi8qKlxuICogRGVlcCBjb3B5IHRoZSBnaXZlbiBvYmplY3QgY29uc2lkZXJpbmcgY2lyY3VsYXIgc3RydWN0dXJlLlxuICogVGhpcyBmdW5jdGlvbiBjYWNoZXMgYWxsIG5lc3RlZCBvYmplY3RzIGFuZCBpdHMgY29waWVzLlxuICogSWYgaXQgZGV0ZWN0cyBjaXJjdWxhciBzdHJ1Y3R1cmUsIHVzZSBjYWNoZWQgY29weSB0byBhdm9pZCBpbmZpbml0ZSBsb29wLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGNhY2hlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5cblxuLyoqXG4gKiBmb3JFYWNoIGZvciBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZm9yRWFjaFZhbHVlIChvYmosIGZuKSB7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmbihvYmpba2V5XSwga2V5KTsgfSk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UgKHZhbCkge1xuICByZXR1cm4gdmFsICYmIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG5mdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbXNnKSB7XG4gIGlmICghY29uZGl0aW9uKSB7IHRocm93IG5ldyBFcnJvcigoXCJbdnVleF0gXCIgKyBtc2cpKSB9XG59XG5cbnZhciBNb2R1bGUgPSBmdW5jdGlvbiBNb2R1bGUgKHJhd01vZHVsZSwgcnVudGltZSkge1xuICB0aGlzLnJ1bnRpbWUgPSBydW50aW1lO1xuICB0aGlzLl9jaGlsZHJlbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3Jhd01vZHVsZSA9IHJhd01vZHVsZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMSA9IHsgc3RhdGU6IHt9LG5hbWVzcGFjZWQ6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLnN0YXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3Jhd01vZHVsZS5zdGF0ZSB8fCB7fVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEubmFtZXNwYWNlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIXRoaXMuX3Jhd01vZHVsZS5uYW1lc3BhY2VkXG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gYWRkQ2hpbGQgKGtleSwgbW9kdWxlKSB7XG4gIHRoaXMuX2NoaWxkcmVuW2tleV0gPSBtb2R1bGU7XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gcmVtb3ZlQ2hpbGQgKGtleSkge1xuICBkZWxldGUgdGhpcy5fY2hpbGRyZW5ba2V5XTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiBnZXRDaGlsZCAoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9jaGlsZHJlbltrZXldXG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAocmF3TW9kdWxlKSB7XG4gIHRoaXMuX3Jhd01vZHVsZS5uYW1lc3BhY2VkID0gcmF3TW9kdWxlLm5hbWVzcGFjZWQ7XG4gIGlmIChyYXdNb2R1bGUuYWN0aW9ucykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zID0gcmF3TW9kdWxlLmFjdGlvbnM7XG4gIH1cbiAgaWYgKHJhd01vZHVsZS5tdXRhdGlvbnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zID0gcmF3TW9kdWxlLm11dGF0aW9ucztcbiAgfVxuICBpZiAocmF3TW9kdWxlLmdldHRlcnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycyA9IHJhd01vZHVsZS5nZXR0ZXJzO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIGZvckVhY2hDaGlsZCAoZm4pIHtcbiAgZm9yRWFjaFZhbHVlKHRoaXMuX2NoaWxkcmVuLCBmbik7XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hHZXR0ZXIgPSBmdW5jdGlvbiBmb3JFYWNoR2V0dGVyIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLmdldHRlcnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLmdldHRlcnMsIGZuKTtcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoQWN0aW9uID0gZnVuY3Rpb24gZm9yRWFjaEFjdGlvbiAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zLCBmbik7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaE11dGF0aW9uID0gZnVuY3Rpb24gZm9yRWFjaE11dGF0aW9uIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zLCBmbik7XG4gIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBNb2R1bGUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMSApO1xuXG52YXIgTW9kdWxlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIE1vZHVsZUNvbGxlY3Rpb24gKHJhd1Jvb3RNb2R1bGUpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gcmVnaXN0ZXIgcm9vdCBtb2R1bGUgKFZ1ZXguU3RvcmUgb3B0aW9ucylcbiAgdGhpcy5yb290ID0gbmV3IE1vZHVsZShyYXdSb290TW9kdWxlLCBmYWxzZSk7XG5cbiAgLy8gcmVnaXN0ZXIgYWxsIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChyYXdSb290TW9kdWxlLm1vZHVsZXMpIHtcbiAgICBmb3JFYWNoVmFsdWUocmF3Um9vdE1vZHVsZS5tb2R1bGVzLCBmdW5jdGlvbiAocmF3TW9kdWxlLCBrZXkpIHtcbiAgICAgIHRoaXMkMS5yZWdpc3Rlcihba2V5XSwgcmF3TW9kdWxlLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG1vZHVsZSwga2V5KSB7XG4gICAgcmV0dXJuIG1vZHVsZS5nZXRDaGlsZChrZXkpXG4gIH0sIHRoaXMucm9vdClcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldE5hbWVzcGFjZSA9IGZ1bmN0aW9uIGdldE5hbWVzcGFjZSAocGF0aCkge1xuICB2YXIgbW9kdWxlID0gdGhpcy5yb290O1xuICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwga2V5KSB7XG4gICAgbW9kdWxlID0gbW9kdWxlLmdldENoaWxkKGtleSk7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSArIChtb2R1bGUubmFtZXNwYWNlZCA/IGtleSArICcvJyA6ICcnKVxuICB9LCAnJylcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSQxIChyYXdSb290TW9kdWxlKSB7XG4gIHVwZGF0ZSh0aGlzLnJvb3QsIHJhd1Jvb3RNb2R1bGUpO1xufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3RlciAocGF0aCwgcmF3TW9kdWxlLCBydW50aW1lKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBydW50aW1lID09PSB2b2lkIDAgKSBydW50aW1lID0gdHJ1ZTtcblxuICB2YXIgcGFyZW50ID0gdGhpcy5nZXQocGF0aC5zbGljZSgwLCAtMSkpO1xuICB2YXIgbmV3TW9kdWxlID0gbmV3IE1vZHVsZShyYXdNb2R1bGUsIHJ1bnRpbWUpO1xuICBwYXJlbnQuYWRkQ2hpbGQocGF0aFtwYXRoLmxlbmd0aCAtIDFdLCBuZXdNb2R1bGUpO1xuXG4gIC8vIHJlZ2lzdGVyIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChyYXdNb2R1bGUubW9kdWxlcykge1xuICAgIGZvckVhY2hWYWx1ZShyYXdNb2R1bGUubW9kdWxlcywgZnVuY3Rpb24gKHJhd0NoaWxkTW9kdWxlLCBrZXkpIHtcbiAgICAgIHRoaXMkMS5yZWdpc3RlcihwYXRoLmNvbmNhdChrZXkpLCByYXdDaGlsZE1vZHVsZSwgcnVudGltZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyIChwYXRoKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzLmdldChwYXRoLnNsaWNlKDAsIC0xKSk7XG4gIHZhciBrZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gIGlmICghcGFyZW50LmdldENoaWxkKGtleSkucnVudGltZSkgeyByZXR1cm4gfVxuXG4gIHBhcmVudC5yZW1vdmVDaGlsZChrZXkpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlICh0YXJnZXRNb2R1bGUsIG5ld01vZHVsZSkge1xuICAvLyB1cGRhdGUgdGFyZ2V0IG1vZHVsZVxuICB0YXJnZXRNb2R1bGUudXBkYXRlKG5ld01vZHVsZSk7XG5cbiAgLy8gdXBkYXRlIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChuZXdNb2R1bGUubW9kdWxlcykge1xuICAgIGZvciAodmFyIGtleSBpbiBuZXdNb2R1bGUubW9kdWxlcykge1xuICAgICAgaWYgKCF0YXJnZXRNb2R1bGUuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJbdnVleF0gdHJ5aW5nIHRvIGFkZCBhIG5ldyBtb2R1bGUgJ1wiICsga2V5ICsgXCInIG9uIGhvdCByZWxvYWRpbmcsIFwiICtcbiAgICAgICAgICAnbWFudWFsIHJlbG9hZCBpcyBuZWVkZWQnXG4gICAgICAgICk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKHRhcmdldE1vZHVsZS5nZXRDaGlsZChrZXkpLCBuZXdNb2R1bGUubW9kdWxlc1trZXldKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFZ1ZTsgLy8gYmluZCBvbiBpbnN0YWxsXG5cbnZhciBTdG9yZSA9IGZ1bmN0aW9uIFN0b3JlIChvcHRpb25zKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICBhc3NlcnQoVnVlLCBcIm11c3QgY2FsbCBWdWUudXNlKFZ1ZXgpIGJlZm9yZSBjcmVhdGluZyBhIHN0b3JlIGluc3RhbmNlLlwiKTtcbiAgYXNzZXJ0KHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJywgXCJ2dWV4IHJlcXVpcmVzIGEgUHJvbWlzZSBwb2x5ZmlsbCBpbiB0aGlzIGJyb3dzZXIuXCIpO1xuXG4gIHZhciBzdGF0ZSA9IG9wdGlvbnMuc3RhdGU7IGlmICggc3RhdGUgPT09IHZvaWQgMCApIHN0YXRlID0ge307XG4gIHZhciBwbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zOyBpZiAoIHBsdWdpbnMgPT09IHZvaWQgMCApIHBsdWdpbnMgPSBbXTtcbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0OyBpZiAoIHN0cmljdCA9PT0gdm9pZCAwICkgc3RyaWN0ID0gZmFsc2U7XG5cbiAgLy8gc3RvcmUgaW50ZXJuYWwgc3RhdGVcbiAgdGhpcy5fY29tbWl0dGluZyA9IGZhbHNlO1xuICB0aGlzLl9hY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fbXV0YXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fd3JhcHBlZEdldHRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9tb2R1bGVzID0gbmV3IE1vZHVsZUNvbGxlY3Rpb24ob3B0aW9ucyk7XG4gIHRoaXMuX21vZHVsZXNOYW1lc3BhY2VNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuICB0aGlzLl93YXRjaGVyVk0gPSBuZXcgVnVlKCk7XG5cbiAgLy8gYmluZCBjb21taXQgYW5kIGRpc3BhdGNoIHRvIHNlbGZcbiAgdmFyIHN0b3JlID0gdGhpcztcbiAgdmFyIHJlZiA9IHRoaXM7XG4gIHZhciBkaXNwYXRjaCA9IHJlZi5kaXNwYXRjaDtcbiAgdmFyIGNvbW1pdCA9IHJlZi5jb21taXQ7XG4gIHRoaXMuZGlzcGF0Y2ggPSBmdW5jdGlvbiBib3VuZERpc3BhdGNoICh0eXBlLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoLmNhbGwoc3RvcmUsIHR5cGUsIHBheWxvYWQpXG4gIH07XG4gIHRoaXMuY29tbWl0ID0gZnVuY3Rpb24gYm91bmRDb21taXQgKHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29tbWl0LmNhbGwoc3RvcmUsIHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpXG4gIH07XG5cbiAgLy8gc3RyaWN0IG1vZGVcbiAgdGhpcy5zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgLy8gaW5pdCByb290IG1vZHVsZS5cbiAgLy8gdGhpcyBhbHNvIHJlY3Vyc2l2ZWx5IHJlZ2lzdGVycyBhbGwgc3ViLW1vZHVsZXNcbiAgLy8gYW5kIGNvbGxlY3RzIGFsbCBtb2R1bGUgZ2V0dGVycyBpbnNpZGUgdGhpcy5fd3JhcHBlZEdldHRlcnNcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCBzdGF0ZSwgW10sIHRoaXMuX21vZHVsZXMucm9vdCk7XG5cbiAgLy8gaW5pdGlhbGl6ZSB0aGUgc3RvcmUgdm0sIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgcmVhY3Rpdml0eVxuICAvLyAoYWxzbyByZWdpc3RlcnMgX3dyYXBwZWRHZXR0ZXJzIGFzIGNvbXB1dGVkIHByb3BlcnRpZXMpXG4gIHJlc2V0U3RvcmVWTSh0aGlzLCBzdGF0ZSk7XG5cbiAgLy8gYXBwbHkgcGx1Z2luc1xuICBwbHVnaW5zLmNvbmNhdChkZXZ0b29sUGx1Z2luKS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHsgcmV0dXJuIHBsdWdpbih0aGlzJDEpOyB9KTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IHN0YXRlOiB7fSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fdm0uX2RhdGEuJCRzdGF0ZVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLnN0YXRlLnNldCA9IGZ1bmN0aW9uICh2KSB7XG4gIGFzc2VydChmYWxzZSwgXCJVc2Ugc3RvcmUucmVwbGFjZVN0YXRlKCkgdG8gZXhwbGljaXQgcmVwbGFjZSBzdG9yZSBzdGF0ZS5cIik7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24gY29tbWl0IChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gY2hlY2sgb2JqZWN0LXN0eWxlIGNvbW1pdFxuICB2YXIgcmVmID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciBwYXlsb2FkID0gcmVmLnBheWxvYWQ7XG4gICAgdmFyIG9wdGlvbnMgPSByZWYub3B0aW9ucztcblxuICB2YXIgbXV0YXRpb24gPSB7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHBheWxvYWQgfTtcbiAgdmFyIGVudHJ5ID0gdGhpcy5fbXV0YXRpb25zW3R5cGVdO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBtdXRhdGlvbiB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIGNvbW1pdEl0ZXJhdG9yIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKHBheWxvYWQpO1xuICAgIH0pO1xuICB9KTtcbiAgdGhpcy5fc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIobXV0YXRpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2lsZW50KSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCJbdnVleF0gbXV0YXRpb24gdHlwZTogXCIgKyB0eXBlICsgXCIuIFNpbGVudCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gXCIgK1xuICAgICAgJ1VzZSB0aGUgZmlsdGVyIGZ1bmN0aW9uYWxpdHkgaW4gdGhlIHZ1ZS1kZXZ0b29scydcbiAgICApO1xuICB9XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCAoX3R5cGUsIF9wYXlsb2FkKSB7XG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBkaXNwYXRjaFxuICB2YXIgcmVmID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQpO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIHBheWxvYWQgPSByZWYucGF5bG9hZDtcblxuICB2YXIgZW50cnkgPSB0aGlzLl9hY3Rpb25zW3R5cGVdO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBhY3Rpb24gdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgcmV0dXJuIGVudHJ5Lmxlbmd0aCA+IDFcbiAgICA/IFByb21pc2UuYWxsKGVudHJ5Lm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlcihwYXlsb2FkKTsgfSkpXG4gICAgOiBlbnRyeVswXShwYXlsb2FkKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZSAoZm4pIHtcbiAgdmFyIHN1YnMgPSB0aGlzLl9zdWJzY3JpYmVycztcbiAgaWYgKHN1YnMuaW5kZXhPZihmbikgPCAwKSB7XG4gICAgc3Vicy5wdXNoKGZuKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpID0gc3Vicy5pbmRleE9mKGZuKTtcbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBzdWJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIHdhdGNoIChnZXR0ZXIsIGNiLCBvcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgYXNzZXJ0KHR5cGVvZiBnZXR0ZXIgPT09ICdmdW5jdGlvbicsIFwic3RvcmUud2F0Y2ggb25seSBhY2NlcHRzIGEgZnVuY3Rpb24uXCIpO1xuICByZXR1cm4gdGhpcy5fd2F0Y2hlclZNLiR3YXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiBnZXR0ZXIodGhpcyQxLnN0YXRlLCB0aGlzJDEuZ2V0dGVycyk7IH0sIGNiLCBvcHRpb25zKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnJlcGxhY2VTdGF0ZSA9IGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZSAoc3RhdGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuX3ZtLl9kYXRhLiQkc3RhdGUgPSBzdGF0ZTtcbiAgfSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZSAocGF0aCwgcmF3TW9kdWxlKSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXTsgfVxuICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKTtcbiAgdGhpcy5fbW9kdWxlcy5yZWdpc3RlcihwYXRoLCByYXdNb2R1bGUpO1xuICBpbnN0YWxsTW9kdWxlKHRoaXMsIHRoaXMuc3RhdGUsIHBhdGgsIHRoaXMuX21vZHVsZXMuZ2V0KHBhdGgpKTtcbiAgLy8gcmVzZXQgc3RvcmUgdG8gdXBkYXRlIGdldHRlcnMuLi5cbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHRoaXMuc3RhdGUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnVucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyTW9kdWxlIChwYXRoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG4gIGFzc2VydChBcnJheS5pc0FycmF5KHBhdGgpLCBcIm1vZHVsZSBwYXRoIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpO1xuICB0aGlzLl9tb2R1bGVzLnVucmVnaXN0ZXIocGF0aCk7XG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHRoaXMkMS5zdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIFZ1ZS5kZWxldGUocGFyZW50U3RhdGUsIHBhdGhbcGF0aC5sZW5ndGggLSAxXSk7XG4gIH0pO1xuICByZXNldFN0b3JlKHRoaXMpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLmhvdFVwZGF0ZSA9IGZ1bmN0aW9uIGhvdFVwZGF0ZSAobmV3T3B0aW9ucykge1xuICB0aGlzLl9tb2R1bGVzLnVwZGF0ZShuZXdPcHRpb25zKTtcbiAgcmVzZXRTdG9yZSh0aGlzLCB0cnVlKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5fd2l0aENvbW1pdCA9IGZ1bmN0aW9uIF93aXRoQ29tbWl0IChmbikge1xuICB2YXIgY29tbWl0dGluZyA9IHRoaXMuX2NvbW1pdHRpbmc7XG4gIHRoaXMuX2NvbW1pdHRpbmcgPSB0cnVlO1xuICBmbigpO1xuICB0aGlzLl9jb21taXR0aW5nID0gY29tbWl0dGluZztcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBTdG9yZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG5mdW5jdGlvbiByZXNldFN0b3JlIChzdG9yZSwgaG90KSB7XG4gIHN0b3JlLl9hY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX211dGF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHN0YXRlID0gc3RvcmUuc3RhdGU7XG4gIC8vIGluaXQgYWxsIG1vZHVsZXNcbiAgaW5zdGFsbE1vZHVsZShzdG9yZSwgc3RhdGUsIFtdLCBzdG9yZS5fbW9kdWxlcy5yb290LCB0cnVlKTtcbiAgLy8gcmVzZXQgdm1cbiAgcmVzZXRTdG9yZVZNKHN0b3JlLCBzdGF0ZSwgaG90KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRTdG9yZVZNIChzdG9yZSwgc3RhdGUsIGhvdCkge1xuICB2YXIgb2xkVm0gPSBzdG9yZS5fdm07XG5cbiAgLy8gYmluZCBzdG9yZSBwdWJsaWMgZ2V0dGVyc1xuICBzdG9yZS5nZXR0ZXJzID0ge307XG4gIHZhciB3cmFwcGVkR2V0dGVycyA9IHN0b3JlLl93cmFwcGVkR2V0dGVycztcbiAgdmFyIGNvbXB1dGVkID0ge307XG4gIGZvckVhY2hWYWx1ZSh3cmFwcGVkR2V0dGVycywgZnVuY3Rpb24gKGZuLCBrZXkpIHtcbiAgICAvLyB1c2UgY29tcHV0ZWQgdG8gbGV2ZXJhZ2UgaXRzIGxhenktY2FjaGluZyBtZWNoYW5pc21cbiAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZm4oc3RvcmUpOyB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdG9yZS5nZXR0ZXJzLCBrZXksIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuX3ZtW2tleV07IH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlIC8vIGZvciBsb2NhbCBnZXR0ZXJzXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHVzZSBhIFZ1ZSBpbnN0YW5jZSB0byBzdG9yZSB0aGUgc3RhdGUgdHJlZVxuICAvLyBzdXBwcmVzcyB3YXJuaW5ncyBqdXN0IGluIGNhc2UgdGhlIHVzZXIgaGFzIGFkZGVkXG4gIC8vIHNvbWUgZnVua3kgZ2xvYmFsIG1peGluc1xuICB2YXIgc2lsZW50ID0gVnVlLmNvbmZpZy5zaWxlbnQ7XG4gIFZ1ZS5jb25maWcuc2lsZW50ID0gdHJ1ZTtcbiAgc3RvcmUuX3ZtID0gbmV3IFZ1ZSh7XG4gICAgZGF0YToge1xuICAgICAgJCRzdGF0ZTogc3RhdGVcbiAgICB9LFxuICAgIGNvbXB1dGVkOiBjb21wdXRlZFxuICB9KTtcbiAgVnVlLmNvbmZpZy5zaWxlbnQgPSBzaWxlbnQ7XG5cbiAgLy8gZW5hYmxlIHN0cmljdCBtb2RlIGZvciBuZXcgdm1cbiAgaWYgKHN0b3JlLnN0cmljdCkge1xuICAgIGVuYWJsZVN0cmljdE1vZGUoc3RvcmUpO1xuICB9XG5cbiAgaWYgKG9sZFZtKSB7XG4gICAgaWYgKGhvdCkge1xuICAgICAgLy8gZGlzcGF0Y2ggY2hhbmdlcyBpbiBhbGwgc3Vic2NyaWJlZCB3YXRjaGVyc1xuICAgICAgLy8gdG8gZm9yY2UgZ2V0dGVyIHJlLWV2YWx1YXRpb24gZm9yIGhvdCByZWxvYWRpbmcuXG4gICAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9sZFZtLl9kYXRhLiQkc3RhdGUgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJldHVybiBvbGRWbS4kZGVzdHJveSgpOyB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsTW9kdWxlIChzdG9yZSwgcm9vdFN0YXRlLCBwYXRoLCBtb2R1bGUsIGhvdCkge1xuICB2YXIgaXNSb290ID0gIXBhdGgubGVuZ3RoO1xuICB2YXIgbmFtZXNwYWNlID0gc3RvcmUuX21vZHVsZXMuZ2V0TmFtZXNwYWNlKHBhdGgpO1xuXG4gIC8vIHJlZ2lzdGVyIGluIG5hbWVzcGFjZSBtYXBcbiAgaWYgKG5hbWVzcGFjZSkge1xuICAgIHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwW25hbWVzcGFjZV0gPSBtb2R1bGU7XG4gIH1cblxuICAvLyBzZXQgc3RhdGVcbiAgaWYgKCFpc1Jvb3QgJiYgIWhvdCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHJvb3RTdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIHZhciBtb2R1bGVOYW1lID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgIHN0b3JlLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgIFZ1ZS5zZXQocGFyZW50U3RhdGUsIG1vZHVsZU5hbWUsIG1vZHVsZS5zdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbG9jYWwgPSBtb2R1bGUuY29udGV4dCA9IG1ha2VMb2NhbENvbnRleHQoc3RvcmUsIG5hbWVzcGFjZSwgcGF0aCk7XG5cbiAgbW9kdWxlLmZvckVhY2hNdXRhdGlvbihmdW5jdGlvbiAobXV0YXRpb24sIGtleSkge1xuICAgIHZhciBuYW1lc3BhY2VkVHlwZSA9IG5hbWVzcGFjZSArIGtleTtcbiAgICByZWdpc3Rlck11dGF0aW9uKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgbXV0YXRpb24sIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hBY3Rpb24oZnVuY3Rpb24gKGFjdGlvbiwga2V5KSB7XG4gICAgdmFyIG5hbWVzcGFjZWRUeXBlID0gbmFtZXNwYWNlICsga2V5O1xuICAgIHJlZ2lzdGVyQWN0aW9uKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgYWN0aW9uLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoR2V0dGVyKGZ1bmN0aW9uIChnZXR0ZXIsIGtleSkge1xuICAgIHZhciBuYW1lc3BhY2VkVHlwZSA9IG5hbWVzcGFjZSArIGtleTtcbiAgICByZWdpc3RlckdldHRlcihzdG9yZSwgbmFtZXNwYWNlZFR5cGUsIGdldHRlciwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjaGlsZCwga2V5KSB7XG4gICAgaW5zdGFsbE1vZHVsZShzdG9yZSwgcm9vdFN0YXRlLCBwYXRoLmNvbmNhdChrZXkpLCBjaGlsZCwgaG90KTtcbiAgfSk7XG59XG5cbi8qKlxuICogbWFrZSBsb2NhbGl6ZWQgZGlzcGF0Y2gsIGNvbW1pdCwgZ2V0dGVycyBhbmQgc3RhdGVcbiAqIGlmIHRoZXJlIGlzIG5vIG5hbWVzcGFjZSwganVzdCB1c2Ugcm9vdCBvbmVzXG4gKi9cbmZ1bmN0aW9uIG1ha2VMb2NhbENvbnRleHQgKHN0b3JlLCBuYW1lc3BhY2UsIHBhdGgpIHtcbiAgdmFyIG5vTmFtZXNwYWNlID0gbmFtZXNwYWNlID09PSAnJztcblxuICB2YXIgbG9jYWwgPSB7XG4gICAgZGlzcGF0Y2g6IG5vTmFtZXNwYWNlID8gc3RvcmUuZGlzcGF0Y2ggOiBmdW5jdGlvbiAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgICAgdmFyIGFyZ3MgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgICAgdmFyIHBheWxvYWQgPSBhcmdzLnBheWxvYWQ7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3Mub3B0aW9ucztcbiAgICAgIHZhciB0eXBlID0gYXJncy50eXBlO1xuXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMucm9vdCkge1xuICAgICAgICB0eXBlID0gbmFtZXNwYWNlICsgdHlwZTtcbiAgICAgICAgaWYgKCFzdG9yZS5fYWN0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgYWN0aW9uIHR5cGU6IFwiICsgKGFyZ3MudHlwZSkgKyBcIiwgZ2xvYmFsIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaCh0eXBlLCBwYXlsb2FkKVxuICAgIH0sXG5cbiAgICBjb21taXQ6IG5vTmFtZXNwYWNlID8gc3RvcmUuY29tbWl0IDogZnVuY3Rpb24gKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICAgIHZhciBhcmdzID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICAgIHZhciBwYXlsb2FkID0gYXJncy5wYXlsb2FkO1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzLm9wdGlvbnM7XG4gICAgICB2YXIgdHlwZSA9IGFyZ3MudHlwZTtcblxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnJvb3QpIHtcbiAgICAgICAgdHlwZSA9IG5hbWVzcGFjZSArIHR5cGU7XG4gICAgICAgIGlmICghc3RvcmUuX211dGF0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgbXV0YXRpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RvcmUuY29tbWl0KHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXR0ZXJzIGFuZCBzdGF0ZSBvYmplY3QgbXVzdCBiZSBnb3R0ZW4gbGF6aWx5XG4gIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIGNoYW5nZWQgYnkgdm0gdXBkYXRlXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxvY2FsLCB7XG4gICAgZ2V0dGVyczoge1xuICAgICAgZ2V0OiBub05hbWVzcGFjZVxuICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLmdldHRlcnM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYWtlTG9jYWxHZXR0ZXJzKHN0b3JlLCBuYW1lc3BhY2UpOyB9XG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXROZXN0ZWRTdGF0ZShzdG9yZS5zdGF0ZSwgcGF0aCk7IH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2NhbFxufVxuXG5mdW5jdGlvbiBtYWtlTG9jYWxHZXR0ZXJzIChzdG9yZSwgbmFtZXNwYWNlKSB7XG4gIHZhciBnZXR0ZXJzUHJveHkgPSB7fTtcblxuICB2YXIgc3BsaXRQb3MgPSBuYW1lc3BhY2UubGVuZ3RoO1xuICBPYmplY3Qua2V5cyhzdG9yZS5nZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgLy8gc2tpcCBpZiB0aGUgdGFyZ2V0IGdldHRlciBpcyBub3QgbWF0Y2ggdGhpcyBuYW1lc3BhY2VcbiAgICBpZiAodHlwZS5zbGljZSgwLCBzcGxpdFBvcykgIT09IG5hbWVzcGFjZSkgeyByZXR1cm4gfVxuXG4gICAgLy8gZXh0cmFjdCBsb2NhbCBnZXR0ZXIgdHlwZVxuICAgIHZhciBsb2NhbFR5cGUgPSB0eXBlLnNsaWNlKHNwbGl0UG9zKTtcblxuICAgIC8vIEFkZCBhIHBvcnQgdG8gdGhlIGdldHRlcnMgcHJveHkuXG4gICAgLy8gRGVmaW5lIGFzIGdldHRlciBwcm9wZXJ0eSBiZWNhdXNlXG4gICAgLy8gd2UgZG8gbm90IHdhbnQgdG8gZXZhbHVhdGUgdGhlIGdldHRlcnMgaW4gdGhpcyB0aW1lLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnZXR0ZXJzUHJveHksIGxvY2FsVHlwZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5nZXR0ZXJzW3R5cGVdOyB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZ2V0dGVyc1Byb3h5XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTXV0YXRpb24gKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCkge1xuICB2YXIgZW50cnkgPSBzdG9yZS5fbXV0YXRpb25zW3R5cGVdIHx8IChzdG9yZS5fbXV0YXRpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRNdXRhdGlvbkhhbmRsZXIgKHBheWxvYWQpIHtcbiAgICBoYW5kbGVyKGxvY2FsLnN0YXRlLCBwYXlsb2FkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQWN0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpIHtcbiAgdmFyIGVudHJ5ID0gc3RvcmUuX2FjdGlvbnNbdHlwZV0gfHwgKHN0b3JlLl9hY3Rpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRBY3Rpb25IYW5kbGVyIChwYXlsb2FkLCBjYikge1xuICAgIHZhciByZXMgPSBoYW5kbGVyKHtcbiAgICAgIGRpc3BhdGNoOiBsb2NhbC5kaXNwYXRjaCxcbiAgICAgIGNvbW1pdDogbG9jYWwuY29tbWl0LFxuICAgICAgZ2V0dGVyczogbG9jYWwuZ2V0dGVycyxcbiAgICAgIHN0YXRlOiBsb2NhbC5zdGF0ZSxcbiAgICAgIHJvb3RHZXR0ZXJzOiBzdG9yZS5nZXR0ZXJzLFxuICAgICAgcm9vdFN0YXRlOiBzdG9yZS5zdGF0ZVxuICAgIH0sIHBheWxvYWQsIGNiKTtcbiAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XG4gICAgICByZXMgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICB9XG4gICAgaWYgKHN0b3JlLl9kZXZ0b29sSG9vaykge1xuICAgICAgcmV0dXJuIHJlcy5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHN0b3JlLl9kZXZ0b29sSG9vay5lbWl0KCd2dWV4OmVycm9yJywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJHZXR0ZXIgKHN0b3JlLCB0eXBlLCByYXdHZXR0ZXIsIGxvY2FsKSB7XG4gIGlmIChzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0pIHtcbiAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSBkdXBsaWNhdGUgZ2V0dGVyIGtleTogXCIgKyB0eXBlKSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgc3RvcmUuX3dyYXBwZWRHZXR0ZXJzW3R5cGVdID0gZnVuY3Rpb24gd3JhcHBlZEdldHRlciAoc3RvcmUpIHtcbiAgICByZXR1cm4gcmF3R2V0dGVyKFxuICAgICAgbG9jYWwuc3RhdGUsIC8vIGxvY2FsIHN0YXRlXG4gICAgICBsb2NhbC5nZXR0ZXJzLCAvLyBsb2NhbCBnZXR0ZXJzXG4gICAgICBzdG9yZS5zdGF0ZSwgLy8gcm9vdCBzdGF0ZVxuICAgICAgc3RvcmUuZ2V0dGVycyAvLyByb290IGdldHRlcnNcbiAgICApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVN0cmljdE1vZGUgKHN0b3JlKSB7XG4gIHN0b3JlLl92bS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YS4kJHN0YXRlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBhc3NlcnQoc3RvcmUuX2NvbW1pdHRpbmcsIFwiRG8gbm90IG11dGF0ZSB2dWV4IHN0b3JlIHN0YXRlIG91dHNpZGUgbXV0YXRpb24gaGFuZGxlcnMuXCIpO1xuICB9LCB7IGRlZXA6IHRydWUsIHN5bmM6IHRydWUgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE5lc3RlZFN0YXRlIChzdGF0ZSwgcGF0aCkge1xuICByZXR1cm4gcGF0aC5sZW5ndGhcbiAgICA/IHBhdGgucmVkdWNlKGZ1bmN0aW9uIChzdGF0ZSwga2V5KSB7IHJldHVybiBzdGF0ZVtrZXldOyB9LCBzdGF0ZSlcbiAgICA6IHN0YXRlXG59XG5cbmZ1bmN0aW9uIHVuaWZ5T2JqZWN0U3R5bGUgKHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpIHtcbiAgaWYgKGlzT2JqZWN0KHR5cGUpICYmIHR5cGUudHlwZSkge1xuICAgIG9wdGlvbnMgPSBwYXlsb2FkO1xuICAgIHBheWxvYWQgPSB0eXBlO1xuICAgIHR5cGUgPSB0eXBlLnR5cGU7XG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnLCAoXCJFeHBlY3RzIHN0cmluZyBhcyB0aGUgdHlwZSwgYnV0IGZvdW5kIFwiICsgKHR5cGVvZiB0eXBlKSArIFwiLlwiKSk7XG5cbiAgcmV0dXJuIHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCwgb3B0aW9uczogb3B0aW9ucyB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGwgKF9WdWUpIHtcbiAgaWYgKFZ1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnW3Z1ZXhdIGFscmVhZHkgaW5zdGFsbGVkLiBWdWUudXNlKFZ1ZXgpIHNob3VsZCBiZSBjYWxsZWQgb25seSBvbmNlLidcbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIFZ1ZSA9IF9WdWU7XG4gIGFwcGx5TWl4aW4oVnVlKTtcbn1cblxuLy8gYXV0byBpbnN0YWxsIGluIGRpc3QgbW9kZVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgaW5zdGFsbCh3aW5kb3cuVnVlKTtcbn1cblxudmFyIG1hcFN0YXRlID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIHN0YXRlcykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChzdGF0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRTdGF0ZSAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLiRzdG9yZS5zdGF0ZTtcbiAgICAgIHZhciBnZXR0ZXJzID0gdGhpcy4kc3RvcmUuZ2V0dGVycztcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwU3RhdGUnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gbW9kdWxlLmNvbnRleHQuc3RhdGU7XG4gICAgICAgIGdldHRlcnMgPSBtb2R1bGUuY29udGV4dC5nZXR0ZXJzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuY2FsbCh0aGlzLCBzdGF0ZSwgZ2V0dGVycylcbiAgICAgICAgOiBzdGF0ZVt2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBNdXRhdGlvbnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgbXV0YXRpb25zKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKG11dGF0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICB2YWwgPSBuYW1lc3BhY2UgKyB2YWw7XG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRNdXRhdGlvbiAoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBNdXRhdGlvbnMnLCBuYW1lc3BhY2UpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmNvbW1pdC5hcHBseSh0aGlzLiRzdG9yZSwgW3ZhbF0uY29uY2F0KGFyZ3MpKVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcEdldHRlcnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgZ2V0dGVycykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChnZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHZhbCA9IG5hbWVzcGFjZSArIHZhbDtcbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZEdldHRlciAoKSB7XG4gICAgICBpZiAobmFtZXNwYWNlICYmICFnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcEdldHRlcnMnLCBuYW1lc3BhY2UpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCEodmFsIGluIHRoaXMuJHN0b3JlLmdldHRlcnMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gZ2V0dGVyOiBcIiArIHZhbCkpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW3ZhbF1cbiAgICB9O1xuICAgIC8vIG1hcmsgdnVleCBnZXR0ZXIgZm9yIGRldnRvb2xzXG4gICAgcmVzW2tleV0udnVleCA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcEFjdGlvbnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgYWN0aW9ucykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHZhbCA9IG5hbWVzcGFjZSArIHZhbDtcbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZEFjdGlvbiAoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBBY3Rpb25zJywgbmFtZXNwYWNlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5kaXNwYXRjaC5hcHBseSh0aGlzLiRzdG9yZSwgW3ZhbF0uY29uY2F0KGFyZ3MpKVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuZnVuY3Rpb24gbm9ybWFsaXplTWFwIChtYXApIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobWFwKVxuICAgID8gbWFwLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBrZXkgfSk7IH0pXG4gICAgOiBPYmplY3Qua2V5cyhtYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBtYXBba2V5XSB9KTsgfSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZXNwYWNlIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWFwKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICBtYXAgPSBuYW1lc3BhY2U7XG4gICAgICBuYW1lc3BhY2UgPSAnJztcbiAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZS5jaGFyQXQobmFtZXNwYWNlLmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICAgIG5hbWVzcGFjZSArPSAnLyc7XG4gICAgfVxuICAgIHJldHVybiBmbihuYW1lc3BhY2UsIG1hcClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2R1bGVCeU5hbWVzcGFjZSAoc3RvcmUsIGhlbHBlciwgbmFtZXNwYWNlKSB7XG4gIHZhciBtb2R1bGUgPSBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcFtuYW1lc3BhY2VdO1xuICBpZiAoIW1vZHVsZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIG1vZHVsZSBuYW1lc3BhY2Ugbm90IGZvdW5kIGluIFwiICsgaGVscGVyICsgXCIoKTogXCIgKyBuYW1lc3BhY2UpKTtcbiAgfVxuICByZXR1cm4gbW9kdWxlXG59XG5cbnZhciBpbmRleF9lc20gPSB7XG4gIFN0b3JlOiBTdG9yZSxcbiAgaW5zdGFsbDogaW5zdGFsbCxcbiAgdmVyc2lvbjogJzIuMi4xJyxcbiAgbWFwU3RhdGU6IG1hcFN0YXRlLFxuICBtYXBNdXRhdGlvbnM6IG1hcE11dGF0aW9ucyxcbiAgbWFwR2V0dGVyczogbWFwR2V0dGVycyxcbiAgbWFwQWN0aW9uczogbWFwQWN0aW9uc1xufTtcblxuZXhwb3J0IHsgU3RvcmUsIG1hcFN0YXRlLCBtYXBNdXRhdGlvbnMsIG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfTtleHBvcnQgZGVmYXVsdCBpbmRleF9lc207XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVleC9kaXN0L3Z1ZXguZXNtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XG5cbmNsYXNzIERvdWJsZU1pbmlTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ2RtdCc7XG4gICAgICAgIHRoaXMubGFiZWwgPSAnRG91YmxlIE1pbmknO1xuICAgICAgICB0aGlzLnJvdXRpbmVLZXlzID0gWydwcmVsaW1fcGFzc18xJywgJ3ByZWxpbV9wYXNzXzInLCAnZmluYWxfcGFzc18zJywgJ2ZpbmFsX3Bhc3NfNCddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG91YmxlTWluaVNjb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvRG91YmxlTWluaVNjb3JlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XG5cbmNsYXNzIFRyYW1wb2xpbmVTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ3RyYW1wb2xpbmUnO1xuICAgICAgICB0aGlzLmxhYmVsID0gJ1RyYW1wb2xpbmUnO1xuICAgICAgICB0aGlzLnJvdXRpbmVLZXlzID0gWydwcmVsaW1fY29tcHVsc29yeScsICdwcmVsaW1fb3B0aW9uYWwnLCAnc2VtaV9maW5hbF9vcHRpb25hbCcsICdmaW5hbF9vcHRpb25hbCddO1xuXG4gICAgICAgIHRoaXMuYXR0cnMudGltZV9vZl9mbGlnaHQgPSB7XG4gICAgICAgICAgICBvcmRlcjogMTAsXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXR0cnMuaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQgPSB7XG4gICAgICAgICAgICBvcmRlcjogMTEsXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFtcG9saW5lU2NvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9UcmFtcG9saW5lU2NvcmUuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcblxuY2xhc3MgVHVtYmxpbmdTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ3R1bWJsaW5nJztcbiAgICAgICAgdGhpcy5sYWJlbCA9ICdUdW1ibGluZyc7XG4gICAgICAgIHRoaXMucm91dGluZUtleXMgPSBbJ3ByZWxpbV9wYXNzXzEnLCAncHJlbGltX3Bhc3NfMicsICdmaW5hbF9wYXNzXzMnLCAnZmluYWxfcGFzc180J107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUdW1ibGluZ1Njb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvVHVtYmxpbmdTY29yZS5qcyIsIlxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlcyBWdWUgYW5kIG90aGVyIGxpYnJhcmllcy4gSXQgaXMgYSBncmVhdCBzdGFydGluZyBwb2ludCB3aGVuXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5pbXBvcnQgVnVlMkZpbHRlcnMgZnJvbSAndnVlMi1maWx0ZXJzJztcbmltcG9ydCBWZWVWYWxpZGF0ZSBmcm9tICd2ZWUtdmFsaWRhdGUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCd2aWRlby11cGxvYWQnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvVmlkZW9VcGxvYWQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnbXVsdGlwbGUtdmlkZW8tdXBsb2FkJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndmlkZW8tcGxheWVyJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3ZpZGVvLXZvdGluZycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd2aWRlby1jb21tZW50cycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2NvbXBldGl0aW9uLWZvcm0nLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3JvdXRpbmUtdmlkZW8nLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3RyYW1wb2xpbmUtc2NvcmUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdkbXQtc2NvcmUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd0dW1ibGluZy1zY29yZScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdzbWFsbC12aWRlbycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZScpKTtcblxuVnVlLnVzZShyZXF1aXJlKCd2dWUtcmVzb3VyY2UnKSk7XG5WdWUudXNlKFZ1ZTJGaWx0ZXJzKTtcblZ1ZS51c2UocmVxdWlyZSgnQHdlYnNhbm92YS92dWUtdXBsb2FkJykpO1xuVnVlLnVzZShWZWVWYWxpZGF0ZSk7XG5cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxud2luZG93LkV2ZW50ID0gbmV3IFZ1ZSgpO1xuXG5WdWUudXNlKHtcbiAgICBpbnN0YWxsOiAoVnVlLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIFZ1ZS5nZXRKc29uID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuVnVlLmh0dHAuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIGRhdGE6IHdpbmRvdy5MYXJhdmVsLFxuICAgIHN0b3JlXG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwidmFsaWRhdGVCZWZvcmVTdWJtaXRcIj5cblxuICAgICAgICA8IS0tIENvbXBldGl0aW9uIHRpdGxlIC0tPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0aXRsZScpfVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+Q29tcGV0aXRpb24gVGl0bGU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8cCA6Y2xhc3M9XCJ7J2NvbnRyb2wnOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LXZhbGlkYXRlOnRpdGxlLmluaXRpYWw9XCIncmVxdWlyZWQnXCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCd0aXRsZScpXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3JzLmZpcnN0KCd0aXRsZScpIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQ29tcGV0aXRpb24gTG9jYXRpb24gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibG9jYXRpb25cIiBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIj5Mb2NhdGlvbjwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImxvY2F0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJsb2NhdGlvblwiIG5hbWU9XCJsb2NhdGlvblwiPlxuXG4gICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJmYWxzZVwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RXJyb3IgbWVzc2FnZTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENvbXBldGl0aW9uIFN0YXJ0IERhdGUgLS0+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwieydmb3JtLWdyb3VwJzogdHJ1ZSwgJ2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKX1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGFydF9kYXRlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+U3RhcnQgRGF0ZTwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxwIDpjbGFzcz1cInsnY29udHJvbCc6IHRydWV9XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHYtdmFsaWRhdGU6c3RhcnRfZGF0ZS5pbml0aWFsPVwiJ2RhdGVfZm9ybWF0OllZWVktTU0tREQnXCIgaWQ9XCJzdGFydF9kYXRlXCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJzdGFydF9kYXRlXCIgbmFtZT1cInN0YXJ0X2RhdGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCdzdGFydF9kYXRlJylcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QoJ3N0YXJ0X2RhdGUnKSB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBDb21wZXRpdGlvbiBFbmQgRGF0ZSAtLT5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7J2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZW5kX2RhdGUnKX1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbmRfZGF0ZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPlN0YXJ0IERhdGU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8cCA6Y2xhc3M9XCJ7J2NvbnRyb2wnOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LXZhbGlkYXRlOmVuZF9kYXRlLmluaXRpYWw9XCInZGF0ZV9mb3JtYXQ6WVlZWS1NTS1ERCdcIiBpZD1cImVuZF9kYXRlXCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJlbmRfZGF0ZVwiIG5hbWU9XCJlbmRfZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImVycm9ycy5oYXMoJ2VuZF9kYXRlJylcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QoJ2VuZF9kYXRlJykgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gRXZlbnQgc2VsZWN0aW9uIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtc2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoND5FdmVudHM8L2g0PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0cmFtcG9saW5lXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInRyYW1wb2xpbmVcIiB2LW1vZGVsPVwidHJhbXBvbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICBUcmFtcG9saW5lXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwidHJhbXBvbGluZVwiIEBjbGljaz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsID0gIXRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1zaG93PVwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tb2tcIj48L2k+IFNlbWktRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInRyYW1wb2xpbmVcIiBAY2xpY2s9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsID0gIXRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LXNob3c9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwidHJhbXBvbGluZVwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHJhbXBDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIkNvbXB1bHNvcnlcIiByb3V0aW5lLWtleT1cInByZWxpbV9jb21wdWxzb3J5XCI+PC90cmFtcG9saW5lLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0cmFtcENvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFtcG9saW5lLXNjb3JlIHRpdGxlPVwiUHJlbGltIE9wdGlvbmFsXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fb3B0aW9uYWxcIj48L3RyYW1wb2xpbmUtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHRyYW1wQ29sU2l6ZVwiIHYtc2hvdz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIlNlbWktRmluYWxcIiByb3V0aW5lLWtleT1cInNlbWlfZmluYWxfb3B0aW9uYWxcIj48L3RyYW1wb2xpbmUtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHRyYW1wQ29sU2l6ZVwiIHYtc2hvdz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFtcG9saW5lLXNjb3JlIHRpdGxlPVwiRmluYWwgT3B0aW9uYWxcIiByb3V0aW5lLWtleT1cImZpbmFsX29wdGlvbmFsXCI+PC90cmFtcG9saW5lLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZG10XCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRtdFwiIHYtbW9kZWw9XCJkbXRcIj5cbiAgICAgICAgICAgICAgICAgICAgRG91YmxlIE1pbmlcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCJkbXRcIiBAY2xpY2s9XCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCA9ICFkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwiZG10XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyBkbXRDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyAxXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fcGFzc18xXCI+PC9kbXQtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIGRtdENvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbXQtc2NvcmUgdGl0bGU9XCJQYXNzIDJcIiByb3V0aW5lLWtleT1cInByZWxpbV9wYXNzXzJcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyAzXCIgcm91dGluZS1rZXk9XCJmaW5hbF9wYXNzXzNcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyA0XCIgcm91dGluZS1rZXk9XCJmaW5hbF9wYXNzXzRcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInR1bWJsaW5nXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInR1bWJsaW5nXCIgdi1tb2RlbD1cInR1bWJsaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIFR1bWJsaW5nXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwidHVtYmxpbmdcIiBAY2xpY2s9XCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwgPSAhdHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1zaG93PVwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwidHVtYmxpbmdcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHR1bWJsaW5nQ29sU2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHR1bWJsaW5nLXNjb3JlIHRpdGxlPVwiUGFzcyAxXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fcGFzc18xXCI+PC90dW1ibGluZy1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHVtYmxpbmdDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHVtYmxpbmctc2NvcmUgdGl0bGU9XCJQYXNzIDJcIiByb3V0aW5lLWtleT1cInByZWxpbV9wYXNzXzJcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIiB2LXNob3c9XCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgM1wiIHJvdXRpbmUta2V5PVwiZmluYWxfcGFzc18zXCI+PC90dW1ibGluZy1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHVtYmxpbmdDb2xTaXplXCIgdi1zaG93PVwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHVtYmxpbmctc2NvcmUgdGl0bGU9XCJQYXNzIDRcIiByb3V0aW5lLWtleT1cImZpbmFsX3Bhc3NfNFwiPjwvdHVtYmxpbmctc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgOmRpc2FibGVkPVwiZXJyb3JzLmFueSgpIHx8ICFldmVudHNWYWxpZFwiPlN1Ym1pdCBDb21wZXRpdGlvbjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuICAgIGltcG9ydCBUcmFtcG9saW5lU2NvcmUgZnJvbSAnLi4vVHJhbXBvbGluZVNjb3JlJztcbiAgICBpbXBvcnQgRG91YmxlTWluaVNjb3JlIGZyb20gJy4uL0RvdWJsZU1pbmlTY29yZSc7XG4gICAgaW1wb3J0IFR1bWJsaW5nU2NvcmUgZnJvbSAnLi4vVHVtYmxpbmdTY29yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW1wb2xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRtdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHVtYmxpbmc6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgZXZlbnRWYWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0cmFtcG9saW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZG10OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdHVtYmxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB0cmFtcG9saW5lUm91dGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NlbWlGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNob3dGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3VibGVNaW5pUGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0dW1ibGluZ1Bhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93RmluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb21wZXRpdGlvbklkOiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBldGl0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnTE9BRF9DT01QRVRJVElPTicsIHRoaXMuY29tcGV0aXRpb25JZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFtcG9saW5lID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5ldmVudENoZWNrZWQoJ3RyYW1wb2xpbmVSb3V0aW5lcycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRtdCA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZXZlbnRDaGVja2VkKCdkb3VibGVNaW5pUGFzc2VzJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHVtYmxpbmcgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmV2ZW50Q2hlY2tlZCgndHVtYmxpbmdQYXNzZXMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdHJhbXBvbGluZVJvdXRpbmVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50cmFtcG9saW5lUm91dGluZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3VibGVNaW5pUGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5kb3VibGVNaW5pUGFzc2VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHVtYmxpbmdQYXNzZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnR1bWJsaW5nUGFzc2VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50aXRsZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfVElUTEUnLCB2YWx1ZSkgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUubG9jYXRpb247IH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0xPQ0FUSU9OJywgdmFsdWUpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydF9kYXRlOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuc3RhcnRfZGF0ZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfU1RBUlRfREFURScsIHZhbHVlKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kX2RhdGU6IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lbmRfZGF0ZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfRU5EX0RBVEUnLCB2YWx1ZSkgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZXZlbnRzVmFsaWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZ2V0dGVycy5ldmVudENoZWNrZWQoJ3RyYW1wb2xpbmVSb3V0aW5lcycpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMuZXZlbnRDaGVja2VkKCdkb3VibGVNaW5pUGFzc2VzJykgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZ2V0dGVycy5ldmVudENoZWNrZWQoJ3R1bWJsaW5nUGFzc2VzJylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdHJhbXBDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWwgJiYgdGhpcy50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzMnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsIHx8IHRoaXMudHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc0JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkbXRDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCkgPyAnMycgOiAnNic7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHVtYmxpbmdDb2xTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpID8gJzMnIDogJzYnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXRDb21wZXRpdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5hbGxEYXRhO1xuXG4gICAgICAgICAgICAgICAgbGV0IHhociA9ICh0aGlzLiRzdG9yZS5zdGF0ZS5jb21wZXRpdGlvbl9pZClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiRodHRwLnB1dCgnL2NvbXBldGl0aW9ucy8nICsgdGhpcy4kc3RvcmUuc3RhdGUuY29tcGV0aXRpb25faWQsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy4kaHR0cC5wb3N0KCcvY29tcGV0aXRpb25zJywgZGF0YSk7XG5cbiAgICAgICAgICAgICAgICB4aHIudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jb21wZXRpdGlvbnMvJyArIHJlc3BvbnNlLmNvbXBldGl0aW9uLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsaWRhdGVCZWZvcmVTdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Q29tcGV0aXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBjb3JyZWN0IHRoZSBlcnJvcnMuJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cblxuICAgIGltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJ3ZlZS12YWxpZGF0ZSc7XG4gICAgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAgICAgZW46IHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbXBldGl0aW9uIFRpdGxlJyxcbiAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgICAgICAgICAgICAgZW5kX2RhdGU6ICdFbmQgRGF0ZScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIFZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5KGRpY3Rpb25hcnkpO1xuICAgIFZhbGlkYXRvci5pbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzKG1vbWVudCk7XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ29tcGV0aXRpb25Gb3JtLnZ1ZT80NzJmMjFiOSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlVwbG9hZCBZb3VyIFZpZGVvczwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV2ZW50XCI+RXZlbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV2ZW50XCIgdi1tb2RlbD1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cmFtcG9saW5lXCI+VHJhbXBvbGluZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZG91YmxlIG1pbmlcIj5Eb3VibGUtbWluaTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHVtYmxpbmdcIj5UdW1ibGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInZpc2liaWxpdHlcIj5WaXNpYmlsaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ2aXNpYmlsaXR5XCIgdi1tb2RlbD1cInZpc2liaWxpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaXZhdGVcIj5Qcml2YXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1bmxpc3RlZFwiPlVubGlzdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwdWJsaWNcIj5QdWJsaWM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cIiFxdWV1ZWRcIiBAY2xpY2s9XCIkdXBsb2FkLnNlbGVjdCgndmlkZW8tdXBsb2FkJylcIiA6ZGlzYWJsZWQ9XCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgVmlkZW9zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCJxdWV1ZWRcIiBAY2xpY2s9XCIkdXBsb2FkLnN0YXJ0KCd2aWRlby11cGxvYWQnKVwiIDpkaXNhYmxlZD1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIoKSA9PiB7JHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkJyk7cXVldWVkID0gZmFsc2V9XCIgOmRpc2FibGVkPVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1wcm9ncmVzcyBwcm9ncmVzc1wiIHYtc2hvdz1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5wZXJjZW50Q29tcGxldGUgKyAnJTsnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykucGVyY2VudENvbXBsZXRlIH19JSBDb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiR1cGxvYWQuZXJyb3JzKCd2aWRlby11cGxvYWQnKS5sZW5ndGhcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHVwbG9hZC5lcnJvcnMoJ3ZpZGVvLXVwbG9hZCcpWzBdLm1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLXJlc3VsdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHYtc2hvdz1cIiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbCBsYWJlbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoIH19IHt7ICR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggfCBwbHVyYWxpemUoJ2ZpbGUnKSB9fSByZWFkeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidG9nZ2xlU2hvd1F1ZXVlZFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1pZj1cInNob3dRdWV1ZWRGaWxlc1wiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LXVwXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1pZj1cIiFzaG93UXVldWVkRmlsZXNcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWVudS1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHYtc2hvdz1cInNob3dRdWV1ZWRGaWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJmaWxlIGluICR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlsZS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJmaWxlIGluICR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLmNvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImZpbGUuZXJyb3JzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1kYW5nZXJcIj57eyBmaWxlLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWxlLmVycm9yc1swXS5tZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFmaWxlLmVycm9ycy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZGVkIHN1Y2Nlc3NmdWxseS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiR1cGxvYWQubmV3KCd2aWRlby11cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgbWF4RmlsZXM6IDIwLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1heFNpemVQZXJGaWxlOiAyMDQ4MDAsIC8vIDIwMCBNQlxuICAgICAgICAgICAgICAgIHN0YXJ0T25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IFsnbXA0JywgJ3dlYm0nLCAnYXZpJywgJ2FzZicsICd3bXYnLCAnbXBlZ3RzJywgJ21vdicsICdmbHYnLCAnbWt2JywgJzNncCddLFxuICAgICAgICAgICAgICAgIGh0dHA6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYm9keS5hcHBlbmQoJ3Zpc2liaWxpdHknLCB0aGlzLnZpc2liaWxpdHkpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmJvZHkuYXBwZW5kKCdldmVudCcsIHRoaXMuZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KGRhdGEudXJsLCBkYXRhLmJvZHksIHtwcm9ncmVzczogZGF0YS5wcm9ncmVzc30pLnRoZW4oZGF0YS5zdWNjZXNzLCBkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uUXVldWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1F1ZXVlZEZpbGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdGFydCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UXVldWVkRmlsZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy92aWRlb3MnO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25FbmQoKSB7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHF1ZXVlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1F1ZXVlZEZpbGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZScsXG5cbiAgICAgICAgICAgICAgICBldmVudDogJ3RyYW1wb2xpbmUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRvZ2dsZVNob3dRdWV1ZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UXVldWVkRmlsZXMgPSAhdGhpcy5zaG93UXVldWVkRmlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkJywge1xuICAgICAgICAgICAgICAgIHVybDogJy91cGxvYWQvbXVsdGlwbGUnLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlczogMCxcbiAgICAgICAgICAgICAgICBkcm9wem9uZUlkOiAndmlkZW8tdXBsb2FkLWRyb3B6b25lJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLiR1cGxvYWQucmVzZXQoJ3ZpZGVvLXVwbG9hZCcsIHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUlkOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTXVsdGlwbGVWaWRlb1VwbG9hZC52dWU/NjgyZjBmYWEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCIhdXBsb2FkZWQgJiYgIWhhc0F0dGFjaG1lbnRcIiBAY2xpY2s9XCIkdXBsb2FkLnNlbGVjdCgndmlkZW8tdXBsb2FkJyArIHJvdXRpbmVzICsgJy0nICsgcm91dGluZUtleSlcIiA6ZGlzYWJsZWQ9XCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyByb3V0aW5lcyArICctJyArIHJvdXRpbmVLZXkpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXhzXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBhcGVyY2xpcFwiPjwvaT4gQXR0YWNoIFZpZGVvXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxzcGFuIHYtc2hvdz1cInVwbG9hZGVkIHx8IGhhc0F0dGFjaG1lbnRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGVja1wiPjwvaT4ge3sgZmlsZW5hbWUgfX1cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJyZW1vdmVBdHRhY2htZW50XCIgY2xhc3M9XCJyZW1vdmUtYXR0YWNobWVudFwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUtc2lnblwiPjwvaT48L2E+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCIgdi1zaG93PVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnICsgcm91dGluZXMgKyAnLScgKyByb3V0aW5lS2V5KS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIDpzdHlsZT1cIid3aWR0aDogJyArICR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJyArIHJvdXRpbmVzICsgJy0nICsgcm91dGluZUtleSkucGVyY2VudENvbXBsZXRlICsgJyU7J1wiPlxuICAgICAgICAgICAgICAgIHt7ICR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJyArIHJvdXRpbmVzICsgJy0nICsgcm91dGluZUtleSkucGVyY2VudENvbXBsZXRlIH19JSBDb21wbGV0ZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHJvdXRpbmVLZXk6IG51bGwsXG4gICAgICAgICAgICByb3V0aW5lczogbnVsbCxcbiAgICAgICAgICAgIGRpc2NpcGxpbmU6IG51bGwsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBoYXNBdHRhY2htZW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21wZXRpdGlvbl9pZCAmJiB0aGlzLiRzdG9yZS5zdGF0ZVt0aGlzLnJvdXRpbmVzXVt0aGlzLnJvdXRpbmVLZXldLmhhc1ZpZGVvKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsZW5hbWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0udmlkZW9GaWxlbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICByZW1vdmVBdHRhY2htZW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnUkVNT1ZFX0FUVEFDSE1FTlQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRpbmVzOiB0aGlzLnJvdXRpbmVzLFxuICAgICAgICAgICAgICAgICAgICByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1bmlxdWVJZCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3ZpZGVvLXVwbG9hZCcgKyB0aGlzLnJvdXRpbmVzICsgJy0nICsgdGhpcy5yb3V0aW5lS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLiR1cGxvYWQubmV3KCd2aWRlby11cGxvYWQnICsgdGhpcy5yb3V0aW5lcyArICctJyArIHRoaXMucm91dGluZUtleSwge1xuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1heEZpbGVzOiAxLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtYXhTaXplUGVyRmlsZTogMjA0ODAwLCAvLyAyMDAgTUJcbiAgICAgICAgICAgICAgICBzdGFydE9uU2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IFsnbXA0JywgJ3dlYm0nLCAnYXZpJywgJ2FzZicsICd3bXYnLCAnbXBlZ3RzJywgJ21vdicsICdmbHYnLCAnbWt2JywgJzNncCddLFxuICAgICAgICAgICAgICAgIGh0dHA6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYm9keS5hcHBlbmQoJ2V2ZW50JywgX3NlbGYuZGlzY2lwbGluZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QoZGF0YS51cmwsIGRhdGEuYm9keSwge3Byb2dyZXNzOiBkYXRhLnByb2dyZXNzfSkudGhlbihkYXRhLnN1Y2Nlc3MsIGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnQVRUQUNIX1ZJREVPJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW86IHJlc3BvbnNlLmRhdGEuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmVLZXk6IHRoaXMucm91dGluZUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmVzOiB0aGlzLnJvdXRpbmVzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkJyArIHRoaXMucm91dGluZXMgKyAnLScgKyB0aGlzLnJvdXRpbmVLZXksIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdXBsb2FkL211bHRpcGxlJyxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZXM6IDAsXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVJZDogJ3ZpZGVvLXVwbG9hZC1kcm9wem9uZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnICsgdGhpcy5yb3V0aW5lcyArICctJyArIHRoaXMucm91dGluZUtleSwge1xuICAgICAgICAgICAgICAgIGRyb3B6b25lSWQ6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUm91dGluZVZpZGVvLnZ1ZT8zMjNlOTAzZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpibG9jayAhaW1wb3J0YW50XCI+XG4gICAgICAgIDxhIHYtc2hvdz1cIiFzaG93VmlkZW9cIiBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwicGxheVZpZGVvXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGxheVwiPjwvaT5cbiAgICAgICAgICAgIFBsYXkgVmlkZW9cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSB2LXNob3c9XCJzaG93VmlkZW9cIiBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwiaGlkZVZpZGVvXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWVudS11cFwiPjwvaT5cbiAgICAgICAgICAgIEhpZGUgVmlkZW9cbiAgICAgICAgPC9hPlxuICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgIDppZD1cIid2aWRlby0nICsgdmlkZW9JZFwiXG4gICAgICAgICAgICBjbGFzcz1cInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW4gdmpzLWJpZy1wbGF5LWNlbnRlcmVkIHZqcy0xNi05IHZqcy1oaWRkZW5cIlxuICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgIGRhdGEtc2V0dXA9J3tcImZsdWlkXCI6IHRydWV9J1xuICAgICAgICAgICAgOnBvc3Rlcj1cImltZ1wiXG4gICAgICAgICAgICA6d2lkdGg9XCJ3aWR0aFwiXG4gICAgICAgICAgICA6aGVpZ2h0PVwiaGVpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHNvdXJjZSB0eXBlPVwidmlkZW8vbXA0XCIgOnNyYz1cInNyY1wiIC8+XG4gICAgICAgIDwvdmlkZW8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB2aWRlb2pzIGZyb20gXCJ2aWRlby5qc1wiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgc2hvd1ZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvSWQ6IG51bGwsXG4gICAgICAgICAgICBzcmM6IG51bGwsXG4gICAgICAgICAgICBpbWc6IG51bGwsXG4gICAgICAgICAgICB3aWR0aDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDQ4MCxcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAyNzAsXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKCd2aWRlby0nICsgdGhpcy52aWRlb0lkKTtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLnJvdW5kKHRoaXMucGxheWVyLmR1cmF0aW9uKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNIaXRRdW90YVZpZXcoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcGxheVZpZGVvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZGVvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZGVWaWRlbygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWRlbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc0hpdFF1b3RhVmlldygpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMucGxheWVyLmN1cnJlbnRUaW1lKCkpID09PSBNYXRoLnJvdW5kKCgxMCAqIHRoaXMuZHVyYXRpb24pIC8gMTAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVWaWV3KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb0lkICsgJy92aWV3cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNtYWxsVmlkZW8udnVlPzRlZmUxMmM0IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwPnt7IGNvbW1lbnRzLmxlbmd0aCB9fSB7eyBjb21tZW50cy5sZW5ndGggfCBwbHVyYWxpemUoJ2NvbW1lbnQnKSB9fTwvcD5cblxuICAgICAgICA8IS0tIFZpZGVvIGNvbW1lbnQgYm94IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tY29tbWVudCBjbGVhcmZpeFwiIGlmPVwiJHJvb3QudXNlci5hdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJTYXkgc29tZXRoaW5nLi4uXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdmlkZW8tY29tbWVudF9faW5wdXRcIiB2LW1vZGVsPVwiYm9keVwiPjwvdGV4dGFyZWE+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwiY3JlYXRlQ29tbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiIHYtaWY9XCJwb3N0aW5nXCI+PC9pPiBQb3N0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBMaXN0IG9mIGNvbW1lbnRzIC0tPlxuICAgICAgICA8dWwgY2xhc3M9XCJtZWRpYS1saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZWRpYVwiIHYtZm9yPVwiY29tbWVudCBpbiBjb21tZW50c1wiPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBVc2VyIGltYWdlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXNlclVybChjb21tZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWJpbmQ6c3JjPVwiY29tbWVudC51c2VyLmRhdGEuaW1hZ2VcIiA6YWx0PVwiY29tbWVudC51c2VyLmRhdGEubmFtZVwiIGNsYXNzPVwibWVkaWEtb2JqZWN0IGltZy1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBDb21tZW50IC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXNlclVybChjb21tZW50KVwiPnt7IGNvbW1lbnQudXNlci5kYXRhLm5hbWUgfX08L2E+IHt7IGNvbW1lbnQuY3JlYXRlZF9hdF9odW1hbiB9fVxuXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGhcIj4oe3sgY29tbWVudC5yZXBsaWVzLmRhdGEubGVuZ3RoIH19ICB7eyBjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGggfCBwbHVyYWxpemUoJ3JlcGx5JywgJ3JlcGxpZXMnKSB9fSk8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgY29tbWVudC5ib2R5IH19PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQ29tbWVudCByZXBseS9kZWxldGUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lXCIgdi1pZj1cIiRyb290LnVzZXIuYXV0aGVudGljYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVSZXBseUZvcm0oY29tbWVudC5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcmVwbHlGb3JtVmlzaWJsZSA9PT0gY29tbWVudC5pZCA/ICdDYW5jZWwgcmVwbHknIDogJ1JlcGx5JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cImNvbW1lbnQudXNlcl9pZCA9PT0gJHJvb3QudXNlci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJkZWxldGVDb21tZW50KGNvbW1lbnQuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCIgdi1pZj1cImRlbGV0aW5nID09PSBjb21tZW50LmlkXCI+PC9pPiBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUmVwbHkgYm94IC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tY29tbWVudCBjbGVhclwiIHYtaWY9XCJyZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50LmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdmlkZW8tY29tbWVudF9faW5wdXRcIiB2LW1vZGVsPVwicmVwbHlCb2R5XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwiY3JlYXRlUmVwbHkoY29tbWVudC5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIiB2LWlmPVwicmVwbHlpbmdcIj48L2k+IFJlcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXBsaWVzIHRvIGNvbW1lbnQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYVwiIHYtZm9yPVwicmVwbHkgaW4gY29tbWVudC5yZXBsaWVzLmRhdGFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBVc2VyIGltYWdlIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInVzZXJVcmwocmVwbHkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1iaW5kOnNyYz1cInJlcGx5LnVzZXIuZGF0YS5pbWFnZVwiIDphbHQ9XCJyZXBseS51c2VyLmRhdGEubmFtZVwiIGNsYXNzPVwibWVkaWEtb2JqZWN0IGltZy1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXBseSBib2R5IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInVzZXJVcmwocmVwbHkpXCI+e3sgcmVwbHkudXNlci5kYXRhLm5hbWUgfX08L2E+IHt7IHJlcGx5LmNyZWF0ZWRfYXRfaHVtYW4gfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IHJlcGx5LmJvZHkgfX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZVwiIHYtaWY9XCIkcm9vdC51c2VyLmF1dGhlbnRpY2F0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cImRlbGV0ZUNvbW1lbnQocmVwbHkuaWQpXCIgdi1pZj1cInJlcGx5LnVzZXJfaWQgPT09ICRyb290LnVzZXIuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiIHYtaWY9XCJkZWxldGluZyA9PT0gcmVwbHkuaWRcIj48L2k+IERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICBwb3N0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAgICAgICAgIHJlcGx5Qm9keTogbnVsbCxcbiAgICAgICAgICAgICAgICByZXBseUZvcm1WaXNpYmxlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlcGx5aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWxldGluZzogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmlkZW9VbmlxdWVJZDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBkZWxldGVDb21tZW50KGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbW1lbnQ/JykpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRpbmcgPSBjb21tZW50SWQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmRlbGV0ZSgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy9jb21tZW50cy8nICsgY29tbWVudElkKS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJ5SWQoY29tbWVudElkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGluZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlQnlJZChjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnQuaWQgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC5yZXBsaWVzLmRhdGEubWFwKChyZXBseSwgcmVwbHlJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGx5LmlkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzW2luZGV4XS5yZXBsaWVzLmRhdGEuc3BsaWNlKHJlcGx5SW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlUmVwbHlGb3JtKGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwbHlCb2R5ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcGx5Rm9ybVZpc2libGUgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGx5Rm9ybVZpc2libGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBseUZvcm1WaXNpYmxlID0gY29tbWVudElkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZVJlcGx5KGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwbHlpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL2NvbW1lbnRzJywge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiB0aGlzLnJlcGx5Qm9keSxcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlfaWQ6IGNvbW1lbnRJZFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnQuaWQgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNbaW5kZXhdLnJlcGxpZXMuZGF0YS5wdXNoKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBseUJvZHkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGx5Rm9ybVZpc2libGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGx5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgKGVyclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gcG9zdGluZyB0aGUgcmVwbHkuJywgZXJyUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGx5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVDb21tZW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvY29tbWVudHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuYm9keVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMudW5zaGlmdChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgKGVyclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gcG9zdGluZyB0aGUgY29tbWVudC4nLCBlcnJSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldENvbW1lbnRzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL2NvbW1lbnRzJykudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VyVXJsKGNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy91c2VyLycgKyBjb21tZW50LnVzZXIuZGF0YS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWaWRlb0NvbW1lbnRzLnZ1ZT8yYWY2Nzg4NSIsIjx0ZW1wbGF0ZT5cbiAgICA8dmlkZW9cbiAgICAgICAgICAgIGlkPVwidmlkZW9cIlxuICAgICAgICAgICAgY2xhc3M9XCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luIHZqcy1iaWctcGxheS1jZW50ZXJlZCB2anMtMTYtOVwiXG4gICAgICAgICAgICBjb250cm9scyBwcmVsb2FkPVwiYXV0b1wiXG4gICAgICAgICAgICBkYXRhLXNldHVwPSd7XCJmbHVpZFwiOiB0cnVlLCBcInByZWxvYWRcIjogXCJhdXRvXCJ9J1xuICAgICAgICAgICAgdi1iaW5kOnBvc3Rlcj1cInRodW1ibmFpbFVybFwiXG4gICAgPlxuICAgICAgICA8c291cmNlIHR5cGU9XCJ2aWRlby9tcDRcIiB2LWJpbmQ6c3JjPVwidmlkZW9VcmxcIiAvPlxuICAgIDwvdmlkZW8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB2aWRlb2pzIGZyb20gXCJ2aWRlby5qc1wiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvVW5pcXVlSWQ6IG51bGwsXG4gICAgICAgICAgICB2aWRlb1VybDogbnVsbCxcbiAgICAgICAgICAgIHRodW1ibmFpbFVybDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKCd2aWRlbycpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGgucm91bmQodGhpcy5wbGF5ZXIuZHVyYXRpb24oKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0hpdFF1b3RhVmlldygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBoYXNIaXRRdW90YVZpZXcoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnBsYXllci5jdXJyZW50VGltZSgpKSA9PT0gTWF0aC5yb3VuZCgoMTAgKiB0aGlzLmR1cmF0aW9uKSAvIDEwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlVmlldygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvdmlld3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWaWRlb1BsYXllci52dWU/Nzc4MTVlYzciLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5VcGxvYWQgWW91ciBWaWRlbzwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJuYW1lXCIgOmRpc2FibGVkPVwiYXV0aGVudGljYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV2ZW50XCI+RXZlbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRyYW1wb2xpbmVcIj5UcmFtcG9saW5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkb3VibGUgbWluaVwiPkRvdWJsZS1taW5pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0dW1ibGluZ1wiPlR1bWJsaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInZpZGVvXCIgaWQ9XCJ2aWRlb1wiIEBjaGFuZ2U9XCJmaWxlSW5wdXRDaGFuZ2VcIiB2LWlmPVwiIXVwbG9hZGluZ1wiIDpkaXNhYmxlZD1cIiFuYW1lIHx8ICFldmVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgdi1pZj1cImZhaWxlZFwiPlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidmlkZW8tZm9ybVwiIHYtaWY9XCJ1cGxvYWRpbmcgJiYgIWZhaWxlZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiB2LWlmPVwiIXVwbG9hZGluZ0NvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaCBmYS1zcGluXCI+PC9pPiBZb3VyIHZpZGVvIGlzIHVwbG9hZGluZy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgdi1pZj1cInVwbG9hZGluZ0NvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBjb21wbGV0ZS4gVmlkZW8gaXMgbm93IHByb2Nlc3NpbmcuIDxhIGhyZWY9XCIvdmlkZW9zXCI+R28gdG8geW91ciB2aWRlb3MuPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgdi1pZj1cIiF1cGxvYWRpbmdDb21wbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgdi1iaW5kOnN0eWxlPVwieyB3aWR0aDogZmlsZVByb2dyZXNzICsgJyUnIH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ2aXNpYmlsaXR5XCI+VmlzaWJpbGl0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidmlzaWJpbGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaXZhdGVcIj5Qcml2YXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidW5saXN0ZWRcIj5Vbmxpc3RlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB1YmxpY1wiPlB1YmxpYzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9jayBwdWxsLXJpZ2h0XCI+e3sgc2F2ZVN0YXR1cyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIEBjbGljay5wcmV2ZW50PVwidXBkYXRlXCI+U2F2ZSBDaGFuZ2VzPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVwbG9hZGluZ0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmYWlsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNhdmVTdGF0dXM6IG51bGwsXG4gICAgICAgICAgICAgICAgZmlsZVByb2dyZXNzOiAwLFxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHdpbmRvdy5MYXJhdmVsLnVzZXIuYXV0aGVudGljYXRlZCxcblxuICAgICAgICAgICAgICAgIC8vIFZpZGVvIG1vZGVsXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkOiBudWxsLFxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHdpbmRvdy5MYXJhdmVsLnVzZXIuaWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdVbnRpdGxlZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogd2luZG93LkxhcmF2ZWwudXNlci5uYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAndHJhbXBvbGluZScsXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZmlsZUlucHV0Q2hhbmdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZhaWxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJykuZmlsZXNbMF07XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3ZpZGVvJywgdGhpcy5maWxlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3VuaXF1ZV9pZCcsIHRoaXMudW5pcXVlX2lkKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy91cGxvYWQnLCBmb3JtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkaW5nQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9LCAoZmFpbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAoZmFpbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdG9yZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4dGVuc2lvbiA9IHRoaXMuZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KCcvdmlkZW9zJywge1xuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGlzLnVzZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiB0aGlzLmV4dGVuc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdGhpcy52aXNpYmlsaXR5LFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pcXVlX2lkID0gcmVzcG9uc2UuZGF0YS51bmlxdWVfaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXR1cyA9ICdTYXZpbmcgY2hhbmdlcy4nO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAucHV0KCcvdmlkZW9zLycgKyB0aGlzLnVuaXF1ZV9pZCwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogdGhpcy5leHRlbnNpb24sXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHRoaXMudmlzaWJpbGl0eSxcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0dXMgPSAnQ2hhbmdlcyBzYXZlZC4nO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdHVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XG5cbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXR1cyA9ICdGYWlsZWQgdG8gc2F2ZSBjaGFuZ2VzLic7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3MoZSkge1xuICAgICAgICAgICAgICAgIGUucGVyY2VudCA9IChlLmxvYWRlZCAvIGUudG90YWwpICogMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZVByb2dyZXNzID0gZS5wZXJjZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdmlkZW9Vcmw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyb290LnVybCArICcvdmlkZW9zLycgKyB0aGlzLnVuaXF1ZV9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGxvYWRpbmcgJiYgIXRoaXMudXBsb2FkaW5nQ29tcGxldGUgJiYgIXRoaXMuZmFpbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG5hdmlnYXRlIGF3YXk/JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWaWRlb1VwbG9hZC52dWU/MTk2MGUxMzEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInZpZGVvX192b3RpbmdcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInZpZGVvX192b3RpbmctYnV0dG9uXCIgdi1iaW5kOmNsYXNzPVwieyd2aWRlb19fdm90aW5nLWJ1dHRvbi0tdm90ZWQnOiB1c2VyVm90ZSA9PSAndXAnfVwiIEBjbGljay5wcmV2ZW50PVwidm90ZSgndXAnKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cFwiPjwvaT5cbiAgICAgICAgPC9hPiB7eyB1cCB9fSAmbmJzcDtcblxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidmlkZW9fX3ZvdGluZy1idXR0b25cIiB2LWJpbmQ6Y2xhc3M9XCJ7J3ZpZGVvX192b3RpbmctYnV0dG9uLS12b3RlZCc6IHVzZXJWb3RlID09ICdkb3duJ31cIiBAY2xpY2sucHJldmVudD1cInZvdGUoJ2Rvd24nKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duXCI+PC9pPlxuICAgICAgICA8L2E+IHt7IGRvd24gfX1cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cDogbnVsbCxcbiAgICAgICAgICAgICAgICBkb3duOiBudWxsLFxuICAgICAgICAgICAgICAgIHVzZXJWb3RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGNhblZvdGU6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmlkZW9VbmlxdWVJZDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRWb3RlcygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRWb3RlcygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy92b3RlcycpLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXAgPSByZXNwb25zZS5kYXRhLnVwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd24gPSByZXNwb25zZS5kYXRhLmRvd247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclZvdGUgPSByZXNwb25zZS5kYXRhLnVzZXJfdm90ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Wb3RlID0gcmVzcG9uc2UuZGF0YS5jYW5fdm90ZTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm90ZSh0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlclZvdGUgPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3R5cGVdLS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclZvdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVZvdGUodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyVm90ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3R5cGUgPT0gJ3VwJyA/ICdkb3duJyA6ICd1cCddLS07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpc1t0eXBlXSsrO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclZvdGUgPSB0eXBlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVWb3RlKHR5cGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVZvdGUodHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZGVsZXRlKCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL3ZvdGVzJywge3R5cGV9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVWb3RlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvdm90ZXMnLCB7dHlwZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZpZGVvVm90aW5nLnZ1ZT8yYWQ1Y2RmMiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY29yZS10aWxlXCI+XG4gICAgICAgIDxoNT57eyB0aXRsZSB9fTwvaDU+XG5cbiAgICAgICAgPHJvdXRpbmUtdmlkZW8gOnJvdXRpbmVzPVwicm91dGluZXNcIiA6ZGlzY2lwbGluZT1cImRpc2NpcGxpbmVcIiA6cm91dGluZS1rZXk9XCJyb3V0aW5lS2V5XCI+PC9yb3V0aW5lLXZpZGVvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnZXhlY3V0aW9uJylcIiB0aXRsZT1cIkV4ZWN1dGlvblwiPkV4ZWN1dGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJleGVjdXRpb25cIiA6bmFtZT1cImZvcm1JZCgnZXhlY3V0aW9uJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnZGlmZmljdWx0eScpXCIgdGl0bGU9XCJEaWZmaWN1bHR5XCI+RGlmZmljdWx0eTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJkaWZmaWN1bHR5XCIgOm5hbWU9XCJmb3JtSWQoJ2RpZmZpY3VsdHknKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpXCIgdGl0bGU9XCJOZXV0cmFsIERlZHVjdGlvblwiPk5EPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cIm5ldXRyYWxfZGVkdWN0aW9uXCIgOm5hbWU9XCJmb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIHRpdGxlPVwiVG90YWwgU2NvcmVcIj5Ub3RhbCBTY29yZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJ0b3RhbF9zY29yZVwiIDpuYW1lPVwiZm9ybUlkKCd0b3RhbF9zY29yZScpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFNjb3JlTWl4aW4gZnJvbSAnLi4vLi4vbWl4aW5zL3Njb3JlLm1peGluJztcbiAgICBpbXBvcnQgVHVtYmxpbmdTY29yZSBmcm9tICcuLi8uLi9UdW1ibGluZ1Njb3JlJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkaXNjaXBsaW5lOiAnZG91YmxlIG1pbmknLFxuICAgICAgICAgICAgICAgIHJvdXRpbmVzOiAnZG91YmxlTWluaVBhc3NlcycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWl4aW5zOiBbU2NvcmVNaXhpbl1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gRG91YmxlTWluaVNjb3JlLnZ1ZT83YmY3Y2RlYyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY29yZS10aWxlXCI+XG4gICAgICAgIDxoNT57eyB0aXRsZSB9fTwvaDU+XG5cbiAgICAgICAgPHJvdXRpbmUtdmlkZW8gOnJvdXRpbmVzPVwicm91dGluZXNcIiA6ZGlzY2lwbGluZT1cImRpc2NpcGxpbmVcIiA6cm91dGluZS1rZXk9XCJyb3V0aW5lS2V5XCI+PC9yb3V0aW5lLXZpZGVvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnZXhlY3V0aW9uJylcIiB0aXRsZT1cIkV4ZWN1dGlvblwiPkV4ZWN1dGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJleGVjdXRpb25cIiA6bmFtZT1cImZvcm1JZCgnZXhlY3V0aW9uJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnZGlmZmljdWx0eScpXCIgdGl0bGU9XCJEaWZmaWN1bHR5XCI+RGlmZmljdWx0eTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJkaWZmaWN1bHR5XCIgOm5hbWU9XCJmb3JtSWQoJ2RpZmZpY3VsdHknKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCd0aW1lX29mX2ZsaWdodCcpXCIgdGl0bGU9XCJUaW1lIG9mIEZsaWdodFwiPlRPRjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJ0aW1lX29mX2ZsaWdodFwiIDpuYW1lPVwiZm9ybUlkKCd0aW1lX29mX2ZsaWdodCcpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2hvcml6b250YWxfZGlzcGxhY2VtZW50JylcIiB0aXRsZT1cIkhvcml6b250YWwgRGlzcGxhY2VtZW50XCI+SEQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnRcIiA6bmFtZT1cImZvcm1JZCgnaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQnKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpXCIgdGl0bGU9XCJOZXV0cmFsIERlZHVjdGlvblwiPk5EPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsLm51bWJlcj1cIm5ldXRyYWxfZGVkdWN0aW9uXCIgOm5hbWU9XCJmb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIHRpdGxlPVwiVG90YWwgU2NvcmVcIj5Ub3RhbCBTY29yZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJ0b3RhbF9zY29yZVwiIDpuYW1lPVwiZm9ybUlkKCd0b3RhbF9zY29yZScpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFNjb3JlTWl4aW4gZnJvbSAnLi4vLi4vbWl4aW5zL3Njb3JlLm1peGluJztcbiAgICBpbXBvcnQgVHJhbXBvbGluZVNjb3JlIGZyb20gJy4uLy4uL1RyYW1wb2xpbmVTY29yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpc2NpcGxpbmU6ICd0cmFtcG9saW5lJyxcbiAgICAgICAgICAgICAgICByb3V0aW5lczogJ3RyYW1wb2xpbmVSb3V0aW5lcycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblxuXG4gICAgICAgIG1peGluczogW1Njb3JlTWl4aW5dXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFRyYW1wb2xpbmVTY29yZS52dWU/NzUzNWFiMjUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiPlxuICAgICAgICA8aDU+e3sgdGl0bGUgfX08L2g1PlxuXG4gICAgICAgIDxyb3V0aW5lLXZpZGVvIDpyb3V0aW5lcz1cInJvdXRpbmVzXCIgOmRpc2NpcGxpbmU9XCJkaXNjaXBsaW5lXCIgOnJvdXRpbmUta2V5PVwicm91dGluZUtleVwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdGl0bGU9XCJFeGVjdXRpb25cIj5FeGVjdXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZXhlY3V0aW9uXCIgOm5hbWU9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2RpZmZpY3VsdHknKVwiIHRpdGxlPVwiRGlmZmljdWx0eVwiPkRpZmZpY3VsdHk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwiZGlmZmljdWx0eVwiIDpuYW1lPVwiZm9ybUlkKCdkaWZmaWN1bHR5JylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKVwiIHRpdGxlPVwiTmV1dHJhbCBEZWR1Y3Rpb25cIj5ORDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbC5udW1iZXI9XCJuZXV0cmFsX2RlZHVjdGlvblwiIDpuYW1lPVwiZm9ybUlkKCduZXV0cmFsX2RlZHVjdGlvbicpXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCJhbnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0aXRsZT1cIlRvdGFsIFNjb3JlXCI+VG90YWwgU2NvcmU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWwubnVtYmVyPVwidG90YWxfc2NvcmVcIiA6bmFtZT1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IFR1bWJsaW5nU2NvcmUgZnJvbSAnLi4vLi4vVHVtYmxpbmdTY29yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzY2lwbGluZTogJ3R1bWJsaW5nJyxcbiAgICAgICAgICAgICAgICByb3V0aW5lczogJ3R1bWJsaW5nUGFzc2VzJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtaXhpbnM6IFtTY29yZU1peGluXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUdW1ibGluZ1Njb3JlLnZ1ZT84ZWIyYTIzOCIsIlxud2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbndpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5yZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xuXG4vKipcbiAqIFZ1ZSBpcyBhIG1vZGVybiBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIGludGVyYWN0aXZlIHdlYiBpbnRlcmZhY2VzXG4gKiB1c2luZyByZWFjdGl2ZSBkYXRhIGJpbmRpbmcgYW5kIHJldXNhYmxlIGNvbXBvbmVudHMuIFZ1ZSdzIEFQSSBpcyBjbGVhblxuICogYW5kIHNpbXBsZSwgbGVhdmluZyB5b3UgdG8gZm9jdXMgb24gYnVpbGRpbmcgeW91ciBuZXh0IGdyZWF0IHByb2plY3QuXG4gKi9cblxud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7XG4gICAgJ1gtQ1NSRi1UT0tFTic6IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbixcbiAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbn07XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tIFwibGFyYXZlbC1lY2hvXCJcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogJ3lvdXItcHVzaGVyLWtleSdcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgVHJhbXBvbGluZVNjb3JlIGZyb20gJy4vVHJhbXBvbGluZVNjb3JlJztcbmltcG9ydCBEb3VibGVNaW5pU2NvcmUgZnJvbSAnLi9Eb3VibGVNaW5pU2NvcmUnO1xuaW1wb3J0IFR1bWJsaW5nU2NvcmUgZnJvbSAnLi9UdW1ibGluZ1Njb3JlJztcblxuVnVlLnVzZShWdWV4KTtcblxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XG5cbiAgICBzdHJpY3Q6IHRydWUsXG5cbiAgICAvKlxuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfCBTdGF0ZVxuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfFxuICAgICB8IFNpbmdsZSBTdGF0ZSBUcmVlXG4gICAgIHxcbiAgICAgfCBWdWV4IHVzZXMgYSBzaW5nbGUgc3RhdGUgdHJlZSAtIHRoYXQgaXMsIHRoaXMgc2luZ2xlIG9iamVjdCBjb250YWlucyBhbGxcbiAgICAgfCB5b3VyIGFwcGxpY2F0aW9uIGxldmVsIHN0YXRlIGFuZCBzZXJ2ZXMgYXMgdGhlIFwic2luZ2xlIHNvdXJjZSBvZiB0cnV0aFwiLlxuICAgICB8IFRoaXMgYWxzbyBtZWFucyB1c3VhbGx5IHlvdSB3aWxsIGhhdmUgb25seSBvbmUgc3RvcmUgZm9yIGVhY2ggYXBwbGljYXRpb24uXG4gICAgIHwgQSBzaW5nbGUgc3RhdGUgdHJlZSBtYWtlcyBpdCBzdHJhaWdodGZvcndhcmQgdG8gbG9jYXRlIGEgc3BlY2lmaWMgcGllY2Ugb2ZcbiAgICAgfCBzdGF0ZSwgYW5kIGFsbG93cyB1cyB0byBlYXNpbHkgdGFrZSBzbmFwc2hvdHMgb2YgdGhlIGN1cnJlbnQgYXBwIHN0YXRlIGZvclxuICAgICB8IGRlYnVnZ2luZyBwdXJwb3Nlcy5cbiAgICAgfFxuICAgICAqL1xuICAgIHN0YXRlOiB7XG4gICAgICAgIGNvbXBldGl0aW9uX2lkOiBudWxsLFxuXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICBsb2NhdGlvbjogbnVsbCxcbiAgICAgICAgc3RhcnRfZGF0ZTogbnVsbCxcbiAgICAgICAgZW5kX2RhdGU6IG51bGwsXG5cbiAgICAgICAgdHJhbXBvbGluZVJvdXRpbmVzOiB7XG4gICAgICAgICAgICBwcmVsaW1fY29tcHVsc29yeTogbmV3IFRyYW1wb2xpbmVTY29yZSgpLFxuICAgICAgICAgICAgcHJlbGltX29wdGlvbmFsOiBuZXcgVHJhbXBvbGluZVNjb3JlKCksXG4gICAgICAgICAgICBzZW1pX2ZpbmFsX29wdGlvbmFsOiBuZXcgVHJhbXBvbGluZVNjb3JlKCksXG4gICAgICAgICAgICBmaW5hbF9vcHRpb25hbDogbmV3IFRyYW1wb2xpbmVTY29yZSgpLFxuICAgICAgICB9LFxuICAgICAgICBkb3VibGVNaW5pUGFzc2VzOiB7XG4gICAgICAgICAgICBwcmVsaW1fcGFzc18xOiBuZXcgRG91YmxlTWluaVNjb3JlKCksXG4gICAgICAgICAgICBwcmVsaW1fcGFzc18yOiBuZXcgRG91YmxlTWluaVNjb3JlKCksXG4gICAgICAgICAgICBmaW5hbF9wYXNzXzM6IG5ldyBEb3VibGVNaW5pU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX3Bhc3NfNDogbmV3IERvdWJsZU1pbmlTY29yZSgpLFxuICAgICAgICB9LFxuICAgICAgICB0dW1ibGluZ1Bhc3Nlczoge1xuICAgICAgICAgICAgcHJlbGltX3Bhc3NfMTogbmV3IFR1bWJsaW5nU2NvcmUoKSxcbiAgICAgICAgICAgIHByZWxpbV9wYXNzXzI6IG5ldyBUdW1ibGluZ1Njb3JlKCksXG4gICAgICAgICAgICBmaW5hbF9wYXNzXzM6IG5ldyBUdW1ibGluZ1Njb3JlKCksXG4gICAgICAgICAgICBmaW5hbF9wYXNzXzQ6IG5ldyBUdW1ibGluZ1Njb3JlKCksXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHwgQWN0aW9uc1xuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfFxuICAgICB8IEFjdGlvbnMgYXJlIHNpbWlsYXIgdG8gbXV0YXRpb25zLCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0OlxuICAgICB8XG4gICAgIHwgKiBJbnN0ZWFkIG9mIG11dGF0aW5nIHRoZSBzdGF0ZSwgYWN0aW9ucyBjb21taXQgbXV0YXRpb25zLlxuICAgICB8ICogQWN0aW9ucyBjYW4gY29udGFpbiBhcmJpdHJhcnkgYXN5bmNocm9ub3VzIG9wZXJhdGlvbnMuXG4gICAgIHxcbiAgICAgKi9cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIExPQURfQ09NUEVUSVRJT046IChjb250ZXh0LCBjb21wZXRpdGlvbklkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvY29tcGV0aXRpb25zLycgKyBjb21wZXRpdGlvbklkKS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBjb21wZXRpdGlvbiA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBldGl0aW9uOiAnLCBjb21wZXRpdGlvbik7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9DT01QRVRJVElPTl9JRCcsIGNvbXBldGl0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9DT01QRVRJVElPTl9GSUVMRFMnLCB7IGZpZWxkczogY29tcGV0aXRpb24gfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcGV0aXRpb24udHJhbXBvbGluZVNjb3Jlcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9UUkFNUE9MSU5FX1NDT1JFUycsIHtzY29yZXM6IGNvbXBldGl0aW9uLnRyYW1wb2xpbmVTY29yZXMuZGF0YX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb21wZXRpdGlvbi5kb3VibGVNaW5pU2NvcmVzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX0RPVUJMRV9NSU5JX1NDT1JFUycsIHtzY29yZXM6IGNvbXBldGl0aW9uLmRvdWJsZU1pbmlTY29yZXMuZGF0YX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb21wZXRpdGlvbi50dW1ibGluZ1Njb3Jlcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9UVU1CTElOR19TQ09SRVMnLCB7c2NvcmVzOiBjb21wZXRpdGlvbi50dW1ibGluZ1Njb3Jlcy5kYXRhfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHwgTXV0YXRpb25zXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8XG4gICAgIHwgVGhlIG9ubHkgd2F5IHRvIGFjdHVhbGx5IGNoYW5nZSBzdGF0ZSBpbiBhIFZ1ZXggc3RvcmUgaXMgYnkgY29tbWl0dGluZ1xuICAgICB8IGEgbXV0YXRpb24uIFZ1ZXggbXV0YXRpb25zIGFyZSB2ZXJ5IHNpbWlsYXIgdG8gZXZlbnRzOiBlYWNoIG11dGF0aW9uIGhhc1xuICAgICB8IGEgc3RyaW5nIHR5cGUgYW5kIGEgaGFuZGxlci4gVGhlIGhhbmRsZXIgZnVuY3Rpb24gaXMgd2hlcmUgd2UgcGVyZm9ybVxuICAgICB8IGFjdHVhbCBzdGF0ZSBtb2RpZmljYXRpb25zLCBhbmQgaXQgd2lsbCByZWNlaXZlIHRoZSBzdGF0ZSBhcyB0aGUgZmlyc3RcbiAgICAgfCBhcmd1bWVudC5cbiAgICAgfFxuICAgICAqL1xuICAgIG11dGF0aW9uczoge1xuICAgICAgICBTRVRfQ09NUEVUSVRJT05fSUQ6IChzdGF0ZSwgaWQpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmNvbXBldGl0aW9uX2lkID0gaWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX0NPTVBFVElUSU9OX0ZJRUxEUzogKHN0YXRlLCB7IGZpZWxkcyB9KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS50aXRsZSA9IGZpZWxkcy50aXRsZTtcbiAgICAgICAgICAgIHN0YXRlLmxvY2F0aW9uID0gZmllbGRzLmxvY2F0aW9uO1xuICAgICAgICAgICAgc3RhdGUuc3RhcnRfZGF0ZSA9IG1vbWVudChmaWVsZHMuc3RhcnRfZGF0ZS5kYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgICAgIHN0YXRlLmVuZF9kYXRlID0gbW9tZW50KGZpZWxkcy5lbmRfZGF0ZS5kYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfVElUTEU6IChzdGF0ZSwgdGl0bGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX0xPQ0FUSU9OOiAoc3RhdGUsIGxvY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9TVEFSVF9EQVRFOiAoc3RhdGUsIHN0YXJ0X2RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXJ0X2RhdGUgPSBzdGFydF9kYXRlO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9FTkRfREFURTogKHN0YXRlLCBlbmRfZGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUuZW5kX2RhdGUgPSBlbmRfZGF0ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfU0NPUkVTOiAoc3RhdGUsIHsgc2NvcmVzLCBzY29yZUNsYXNzfSkgPT4ge1xuICAgICAgICAgICAgc2NvcmVzLmZvckVhY2goKHNjb3JlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlSW5zdGFuY2UgPSBuZXcgc2NvcmVDbGFzcygpO1xuICAgICAgICAgICAgICAgIGxldCBzY29yZU1hcCA9IHt9O1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcmVJbnN0YW5jZS5hdHRycykuZm9yRWFjaCgoc2NvcmVQYXJ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlTWFwW3Njb3JlUGFydF0gPSBzY29yZVtzY29yZVBhcnRdO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2NvcmVJbnN0YW5jZS51cGRhdGVBdHRyaWJ1dGVzKHNjb3JlTWFwKTtcbiAgICAgICAgICAgICAgICBzY29yZUluc3RhbmNlLnNldElkKHNjb3JlLmlkKTtcbiAgICAgICAgICAgICAgICBzY29yZUluc3RhbmNlLnNldFZpZGVvSWQoc2NvcmUudmlkZW9faWQpO1xuICAgICAgICAgICAgICAgIGlmIChzY29yZS52aWRlby5kYXRhLmhhc093blByb3BlcnR5KCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlSW5zdGFuY2Uuc2V0VmlkZW9GaWxlbmFtZShzY29yZS52aWRlby5kYXRhLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcmVJbnN0YW5jZS52aWRlb0ZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS50dW1ibGluZ1Bhc3Nlc1tzY29yZS5yb3V0aW5lXSA9IHNjb3JlSW5zdGFuY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfUk9VVElORV9QUk9QRVJUWTogKHN0YXRlLCB7IGRpc2NpcGxpbmUsIHJvdXRpbmVLZXksIGNvbXBvbmVudCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uYXR0cnNbY29tcG9uZW50XS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICE9PSAndG90YWxfc2NvcmUnKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uY29tcHV0ZVRvdGFsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlW2Rpc2NpcGxpbmVdW3JvdXRpbmVLZXldLnNldFRvdGFsKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfVFJBTVBPTElORV9TQ09SRVM6IChzdGF0ZSwgeyBzY29yZXMgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmNvbW1pdCgnU0VUX1NDT1JFUycsIHtcbiAgICAgICAgICAgICAgICBzY29yZXMsXG4gICAgICAgICAgICAgICAgc2NvcmVDbGFzczogVHJhbXBvbGluZVNjb3JlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfRE9VQkxFX01JTklfU0NPUkVTOiAoc3RhdGUsIHsgc2NvcmVzIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5jb21taXQoJ1NFVF9TQ09SRVMnLCB7XG4gICAgICAgICAgICAgICAgc2NvcmVzLFxuICAgICAgICAgICAgICAgIHNjb3JlQ2xhc3M6IERvdWJsZU1pbmlTY29yZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX1RVTUJMSU5HX1NDT1JFUzogKHN0YXRlLCB7IHNjb3JlcyB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuY29tbWl0KCdTRVRfU0NPUkVTJywge1xuICAgICAgICAgICAgICAgIHNjb3JlcyxcbiAgICAgICAgICAgICAgICBzY29yZUNsYXNzOiBUdW1ibGluZ1Njb3JlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBSRU1PVkVfQVRUQUNITUVOVDogKHN0YXRlLCB7IHJvdXRpbmVzLCByb3V0aW5lS2V5IH0pID0+IHtcbiAgICAgICAgICAgIHN0YXRlW3JvdXRpbmVzXVtyb3V0aW5lS2V5XS5zZXRWaWRlb0lkKG51bGwpO1xuICAgICAgICAgICAgc3RhdGVbcm91dGluZXNdW3JvdXRpbmVLZXldLnNldFZpZGVvRmlsZW5hbWUobnVsbCk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBBVFRBQ0hfVklERU86IChzdGF0ZSwgeyByb3V0aW5lcywgcm91dGluZUtleSwgdmlkZW8gfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVbcm91dGluZXNdW3JvdXRpbmVLZXldLnNldFZpZGVvSWQodmlkZW8uaWQpO1xuICAgICAgICAgICAgc3RhdGVbcm91dGluZXNdW3JvdXRpbmVLZXldLnNldFZpZGVvRmlsZW5hbWUodmlkZW8udGl0bGUpO1xuXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8qXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8IEdldHRlcnNcbiAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgIHxcbiAgICAgfCBTb21ldGltZXMgd2UgbWF5IG5lZWQgdG8gY29tcHV0ZSBkZXJpdmVkIHN0YXRlIGJhc2VkIG9uIHN0b3JlIHN0YXRlLCBmb3JcbiAgICAgfCBleGFtcGxlIGZpbHRlcmluZyB0aHJvdWdoIGEgbGlzdCBvZiBpdGVtcyBhbmQgY291bnRpbmcgdGhlbS5cbiAgICAgfFxuICAgICAqL1xuICAgIGdldHRlcnM6IHtcbiAgICAgICAgZXZlbnRDaGVja2VkOiAoc3RhdGUsIGdldHRlcnMpID0+IChkaXNjaXBsaW5lKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RhdGVbZGlzY2lwbGluZV0pLmZvckVhY2goKHJvdXRpbmVLZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrZWQgJiYgcGFyc2VJbnQoc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uYXR0cnMudG90YWxfc2NvcmUudmFsdWUpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsaWRSb3V0aW5lczogKHN0YXRlLCBnZXR0ZXJzKSA9PiAoZGlzY2lwbGluZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gbnVsbDtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RhdGVbZGlzY2lwbGluZV0pLmZvckVhY2goKHJvdXRpbmVLZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV0uYXR0cnMudG90YWxfc2NvcmUudmFsdWUpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkW3JvdXRpbmVLZXldID0gc3RhdGVbZGlzY2lwbGluZV1bcm91dGluZUtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgICAgfSxcblxuICAgICAgICBhbGxEYXRhOiAoc3RhdGUsIGdldHRlcnMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tcGV0aXRpb25faWQ6IHN0YXRlLmNvbXBldGl0aW9uX2lkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBzdGF0ZS50aXRsZSxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogc3RhdGUuc3RhcnRfZGF0ZSxcbiAgICAgICAgICAgICAgICBlbmRfZGF0ZTogc3RhdGUuZW5kX2RhdGUsXG5cbiAgICAgICAgICAgICAgICB0cmFtcG9saW5lOiBnZXR0ZXJzLmV2ZW50Q2hlY2tlZCgndHJhbXBvbGluZVJvdXRpbmVzJyksXG4gICAgICAgICAgICAgICAgZG10OiBnZXR0ZXJzLmV2ZW50Q2hlY2tlZCgnZG91YmxlTWluaVBhc3NlcycpLFxuICAgICAgICAgICAgICAgIHR1bWJsaW5nOiBnZXR0ZXJzLmV2ZW50Q2hlY2tlZCgndHVtYmxpbmdQYXNzZXMnKSxcblxuICAgICAgICAgICAgICAgIHRyYW1wb2xpbmVSb3V0aW5lczogZ2V0dGVycy52YWxpZFJvdXRpbmVzKCd0cmFtcG9saW5lUm91dGluZXMnKSxcbiAgICAgICAgICAgICAgICBkb3VibGVNaW5pUGFzc2VzOiBnZXR0ZXJzLnZhbGlkUm91dGluZXMoJ2RvdWJsZU1pbmlQYXNzZXMnKSxcbiAgICAgICAgICAgICAgICB0dW1ibGluZ1Bhc3NlczogZ2V0dGVycy52YWxpZFJvdXRpbmVzKCd0dW1ibGluZ1Bhc3NlcycpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgfCBNb2R1bGVzXG4gICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICB8XG4gICAgIHwgRHVlIHRvIHVzaW5nIGEgc2luZ2xlIHN0YXRlIHRyZWUsIGFsbCBzdGF0ZSBvZiBvdXIgYXBwbGljYXRpb24gaXNcbiAgICAgfCBjb250YWluZWQgaW5zaWRlIG9uZSBiaWcgb2JqZWN0LiBIb3dldmVyLCBhcyBvdXIgYXBwbGljYXRpb24gZ3Jvd3MgaW5cbiAgICAgfCBzY2FsZSwgdGhlIHN0b3JlIGNhbiBnZXQgcmVhbGx5IGJsb2F0ZWQuXG4gICAgIHxcbiAgICAgfCBUbyBoZWxwIHdpdGggdGhhdCwgVnVleCBhbGxvd3MgdXMgdG8gZGl2aWRlIG91ciBzdG9yZSBpbnRvIG1vZHVsZXMuXG4gICAgIHwgRWFjaCBtb2R1bGUgY2FuIGNvbnRhaW4gaXRzIG93biBzdGF0ZSwgbXV0YXRpb25zLCBhY3Rpb25zLCBnZXR0ZXJzLCBhbmRcbiAgICAgfCBldmVuIG5lc3RlZCBtb2R1bGVzIC0gaXQncyBmcmFjdGFsIGFsbCB0aGUgd2F5IGRvd24uXG4gICAgIHxcbiAgICAgKi9cbiAgICBtb2R1bGVzOiB7XG5cbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wZXRpdGlvbkZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTc1YmViMmVjIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db21wZXRpdGlvbkZvcm0udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbXBldGl0aW9uRm9ybS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDb21wZXRpdGlvbkZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc1YmViMmVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzViZWIyZWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbXBldGl0aW9uRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDc5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL011bHRpcGxlVmlkZW9VcGxvYWQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTI5NTQzZDkzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIE11bHRpcGxlVmlkZW9VcGxvYWQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTI5NTQzZDkzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjk1NDNkOTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Sb3V0aW5lVmlkZW8udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTViNmMwNTQwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Sb3V0aW5lVmlkZW8udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBSb3V0aW5lVmlkZW8udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTViNmMwNTQwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWI2YzA1NDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWVcbi8vIG1vZHVsZSBpZCA9IDc5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1NtYWxsVmlkZW8udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdiMzA4NmM2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TbWFsbFZpZGVvLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFNtYWxsVmlkZW8udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdiMzA4NmM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2IzMDg2YzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlXG4vLyBtb2R1bGUgaWQgPSA3OTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WaWRlb0NvbW1lbnRzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lZTdiMmU5NCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9Db21tZW50cy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBWaWRlb0NvbW1lbnRzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lZTdiMmU5NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWVlN2IyZTk0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVmlkZW9QbGF5ZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQ1MDE2OWEzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WaWRlb1BsYXllci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVmlkZW9QbGF5ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ1MDE2OWEzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDUwMTY5YTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVmlkZW9VcGxvYWQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LThjY2Y2NjdhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WaWRlb1VwbG9hZC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9VcGxvYWQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVmlkZW9VcGxvYWQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LThjY2Y2NjdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOGNjZjY2N2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVmlkZW9Wb3RpbmcudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTMxOWE5OGU5IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WaWRlb1ZvdGluZy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Wb3RpbmcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVmlkZW9Wb3RpbmcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTMxOWE5OGU5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzE5YTk4ZTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRG91YmxlTWluaVNjb3JlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi05MzM4YTYzNiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRG91YmxlTWluaVNjb3JlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIERvdWJsZU1pbmlTY29yZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOTMzOGE2MzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi05MzM4YTYzNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDc5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RyYW1wb2xpbmVTY29yZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZTRlM2EzYTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1RyYW1wb2xpbmVTY29yZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBUcmFtcG9saW5lU2NvcmUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWU0ZTNhM2EwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTRlM2EzYTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UcmFtcG9saW5lU2NvcmUudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UdW1ibGluZ1Njb3JlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yYTZhOGQyMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVHVtYmxpbmdTY29yZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1R1bWJsaW5nU2NvcmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVHVtYmxpbmdTY29yZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmE2YThkMjFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYTZhOGQyMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1R1bWJsaW5nU2NvcmUudnVlXG4vLyBtb2R1bGUgaWQgPSA4MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIlxuICB9LCBbX3ZtLl92KFwiVXBsb2FkIFlvdXIgVmlkZW9zXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImV2ZW50XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJFdmVudFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV2ZW50KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXZlbnRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZXZlbnRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLmV2ZW50ID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInRyYW1wb2xpbmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRyYW1wb2xpbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImRvdWJsZSBtaW5pXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEb3VibGUtbWluaVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidHVtYmxpbmdcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlR1bWJsaW5nXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInZpc2liaWxpdHlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlZpc2liaWxpdHlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS52aXNpYmlsaXR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwidmlzaWJpbGl0eVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ2aXNpYmlsaXR5XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS52aXNpYmlsaXR5ID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInByaXZhdGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlByaXZhdGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInVubGlzdGVkXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVbmxpc3RlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicHVibGljXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQdWJsaWNcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS5xdWV1ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhcXVldWVkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kdXBsb2FkLnNlbGVjdCgndmlkZW8tdXBsb2FkJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgVmlkZW9zXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ucXVldWVkKSxcbiAgICAgIGV4cHJlc3Npb246IFwicXVldWVkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kdXBsb2FkLnN0YXJ0KCd2aWRlby11cGxvYWQnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICBfdm0uJHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkJyk7XG4gICAgICAgIF92bS5xdWV1ZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZycpLFxuICAgICAgZXhwcmVzc2lvbjogXCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtcHJvZ3Jlc3MgcHJvZ3Jlc3NcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy1iYXJcIixcbiAgICBzdHlsZTogKCd3aWR0aDogJyArIF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnBlcmNlbnRDb21wbGV0ZSArICclOycpXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykucGVyY2VudENvbXBsZXRlKSArIFwiJSBDb21wbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uJHVwbG9hZC5lcnJvcnMoJ3ZpZGVvLXVwbG9hZCcpLmxlbmd0aCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdXBsb2FkLmVycm9ycygndmlkZW8tdXBsb2FkJylbMF0ubWVzc2FnZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtcmVzdWx0XCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCA+IDApLFxuICAgICAgZXhwcmVzc2lvbjogXCIkdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoID4gMFwiXG4gICAgfV1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtZGVmYXVsdFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoKSArIFwiIFwiICsgX3ZtLl9zKF92bS5fZihcInBsdXJhbGl6ZVwiKShfdm0uJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkLmxlbmd0aCwgJ2ZpbGUnKSkgKyBcIiByZWFkeVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIMKgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvZ2dsZVNob3dRdWV1ZWRcbiAgICB9XG4gIH0sIFsoX3ZtLnNob3dRdWV1ZWRGaWxlcykgPyBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtdXBcIlxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5zaG93UXVldWVkRmlsZXMpID8gX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LWRvd25cIlxuICB9KSA6IF92bS5fZSgpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5zaG93UXVldWVkRmlsZXMpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzaG93UXVldWVkRmlsZXNcIlxuICAgIH1dXG4gIH0sIF92bS5fbCgoX3ZtLiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZCksIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoZmlsZS5uYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykuY29tcGxldGUpLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCBbKGZpbGUuZXJyb3JzLmxlbmd0aCkgPyBfYygnZGl2JywgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtZGFuZ2VyXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhmaWxlLm5hbWUpKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGZpbGUuZXJyb3JzWzBdLm1lc3NhZ2UpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFmaWxlLmVycm9ycy5sZW5ndGgpID8gX2MoJ2RpdicsIFtfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpXSlcbiAgfSldLCAyKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjk1NDNkOTNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTI5NTQzZDkzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDgwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRpbmUtdmlkZW8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm91dGluZXNcIjogX3ZtLnJvdXRpbmVzLFxuICAgICAgXCJkaXNjaXBsaW5lXCI6IF92bS5kaXNjaXBsaW5lLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBfdm0ucm91dGluZUtleVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdleGVjdXRpb24nKSxcbiAgICAgIFwidGl0bGVcIjogXCJFeGVjdXRpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV4ZWN1dGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV4ZWN1dGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcImV4ZWN1dGlvblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ2V4ZWN1dGlvbicpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5leGVjdXRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXhlY3V0aW9uID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdkaWZmaWN1bHR5JyksXG4gICAgICBcInRpdGxlXCI6IFwiRGlmZmljdWx0eVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGlmZmljdWx0eVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRpZmZpY3VsdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkaWZmaWN1bHR5XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnZGlmZmljdWx0eScpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5kaWZmaWN1bHR5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmRpZmZpY3VsdHkgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJyksXG4gICAgICBcInRpdGxlXCI6IFwiTmV1dHJhbCBEZWR1Y3Rpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk5EXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0ubmV1dHJhbF9kZWR1Y3Rpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJuZXV0cmFsX2RlZHVjdGlvblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ25ldXRyYWxfZGVkdWN0aW9uJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm5ldXRyYWxfZGVkdWN0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm5ldXRyYWxfZGVkdWN0aW9uID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgXCJ0aXRsZVwiOiBcIlRvdGFsIFNjb3JlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUb3RhbCBTY29yZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdGFsX3Njb3JlKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG90YWxfc2NvcmVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCd0b3RhbF9zY29yZScpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50b3RhbF9zY29yZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3RhbF9zY29yZSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmE2YThkMjFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJhNmE4ZDIxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1R1bWJsaW5nU2NvcmUudnVlXG4vLyBtb2R1bGUgaWQgPSA4MDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW9fX3ZvdGluZ1wiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlb19fdm90aW5nLWJ1dHRvblwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAndmlkZW9fX3ZvdGluZy1idXR0b24tLXZvdGVkJzogX3ZtLnVzZXJWb3RlID09ICd1cCdcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnZvdGUoJ3VwJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cFwiXG4gIH0pXSksIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0udXApICsgXCIgwqBcXG5cXG4gICAgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlb19fdm90aW5nLWJ1dHRvblwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAndmlkZW9fX3ZvdGluZy1idXR0b24tLXZvdGVkJzogX3ZtLnVzZXJWb3RlID09ICdkb3duJ1xuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udm90ZSgnZG93bicpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtZG93blwiXG4gIH0pXSksIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uZG93bikgKyBcIlxcblwiKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTMxOWE5OGU5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zMTlhOThlOSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndmlkZW8nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpbiB2anMtYmlnLXBsYXktY2VudGVyZWQgdmpzLTE2LTlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInZpZGVvXCIsXG4gICAgICBcImNvbnRyb2xzXCI6IFwiXCIsXG4gICAgICBcInByZWxvYWRcIjogXCJhdXRvXCIsXG4gICAgICBcImRhdGEtc2V0dXBcIjogXCJ7XFxcImZsdWlkXFxcIjogdHJ1ZSwgXFxcInByZWxvYWRcXFwiOiBcXFwiYXV0b1xcXCJ9XCIsXG4gICAgICBcInBvc3RlclwiOiBfdm0udGh1bWJuYWlsVXJsXG4gICAgfVxuICB9LCBbX2MoJ3NvdXJjZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidmlkZW8vbXA0XCIsXG4gICAgICBcInNyY1wiOiBfdm0udmlkZW9VcmxcbiAgICB9XG4gIH0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDUwMTY5YTNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQ1MDE2OWEzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA4MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnVwbG9hZGVkICYmICFfdm0uaGFzQXR0YWNobWVudCksXG4gICAgICBleHByZXNzaW9uOiBcIiF1cGxvYWRlZCAmJiAhaGFzQXR0YWNobWVudFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi14c1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyBfdm0ucm91dGluZXMgKyAnLScgKyBfdm0ucm91dGluZUtleSkuc3RhdHVzID09PSAnc2VuZGluZycsXG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kdXBsb2FkLnNlbGVjdCgndmlkZW8tdXBsb2FkJyArIF92bS5yb3V0aW5lcyArICctJyArIF92bS5yb3V0aW5lS2V5KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tcGFwZXJjbGlwXCJcbiAgfSksIF92bS5fdihcIiBBdHRhY2ggVmlkZW9cXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS51cGxvYWRlZCB8fCBfdm0uaGFzQXR0YWNobWVudCksXG4gICAgICBleHByZXNzaW9uOiBcInVwbG9hZGVkIHx8IGhhc0F0dGFjaG1lbnRcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZWNrXCJcbiAgfSksIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uZmlsZW5hbWUpICsgXCJcXG4gICAgICAgIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmVtb3ZlLWF0dGFjaG1lbnRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5yZW1vdmVBdHRhY2htZW50KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZS1zaWduXCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyBfdm0ucm91dGluZXMgKyAnLScgKyBfdm0ucm91dGluZUtleSkuc3RhdHVzID09PSAnc2VuZGluZycpLFxuICAgICAgZXhwcmVzc2lvbjogXCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyByb3V0aW5lcyArICctJyArIHJvdXRpbmVLZXkpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtcHJvZ3Jlc3MgcHJvZ3Jlc3NcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy1iYXJcIixcbiAgICBzdHlsZTogKCd3aWR0aDogJyArIF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyBfdm0ucm91dGluZXMgKyAnLScgKyBfdm0ucm91dGluZUtleSkucGVyY2VudENvbXBsZXRlICsgJyU7JylcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcgKyBfdm0ucm91dGluZXMgKyAnLScgKyBfdm0ucm91dGluZUtleSkucGVyY2VudENvbXBsZXRlKSArIFwiJSBDb21wbGV0ZVxcbiAgICAgICAgXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTViNmMwNTQwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01YjZjMDU0MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWVcbi8vIG1vZHVsZSBpZCA9IDgwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnZhbGlkYXRlQmVmb3JlU3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndGl0bGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbXBldGl0aW9uIFRpdGxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnY29udHJvbCc6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZTp0aXRsZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdyZXF1aXJlZCcpLFxuICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICBhcmc6IFwidGl0bGVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udGl0bGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0aXRsZVwiLFxuICAgICAgYXJnOiBcInRpdGxlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInRpdGxlXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0aXRsZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpdGxlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRpdGxlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0aXRsZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndGl0bGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndGl0bGUnKSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImxvY2F0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2NhdGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9jYXRpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2NhdGlvblwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJsb2NhdGlvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibG9jYXRpb25cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sb2NhdGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5sb2NhdGlvbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChmYWxzZSksXG4gICAgICBleHByZXNzaW9uOiBcImZhbHNlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiRXJyb3IgbWVzc2FnZVwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3RhcnRfZGF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3RhcnQgRGF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2NvbnRyb2wnOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGU6c3RhcnRfZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJyksXG4gICAgICBleHByZXNzaW9uOiBcIidkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJ1wiLFxuICAgICAgYXJnOiBcInN0YXJ0X2RhdGVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc3RhcnRfZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcInN0YXJ0X2RhdGVcIixcbiAgICAgIGFyZzogXCJzdGFydF9kYXRlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInN0YXJ0X2RhdGVcIixcbiAgICAgIFwidHlwZVwiOiBcImRhdGVcIixcbiAgICAgIFwibmFtZVwiOiBcInN0YXJ0X2RhdGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5zdGFydF9kYXRlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnN0YXJ0X2RhdGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnc3RhcnRfZGF0ZScpKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2VuZF9kYXRlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImVuZF9kYXRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTdGFydCBEYXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnY29udHJvbCc6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZTplbmRfZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJyksXG4gICAgICBleHByZXNzaW9uOiBcIidkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJ1wiLFxuICAgICAgYXJnOiBcImVuZF9kYXRlXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVuZF9kYXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZW5kX2RhdGVcIixcbiAgICAgIGFyZzogXCJlbmRfZGF0ZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJlbmRfZGF0ZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZW5kX2RhdGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5lbmRfZGF0ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5lbmRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZW5kX2RhdGUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2VuZF9kYXRlJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2VuZF9kYXRlJykpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImV2ZW50LXNlbGVjdGlvblwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2g0JywgW192bS5fdihcIkV2ZW50c1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInRyYW1wb2xpbmVcIixcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0cmFtcG9saW5lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0udHJhbXBvbGluZSkgPyBfdm0uX2koX3ZtLnRyYW1wb2xpbmUsIG51bGwpID4gLTEgOiAoX3ZtLnRyYW1wb2xpbmUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0udHJhbXBvbGluZSxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS50cmFtcG9saW5lID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLnRyYW1wb2xpbmUgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLnRyYW1wb2xpbmUgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBUcmFtcG9saW5lXFxuICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZSksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwgPSAhX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIlxuICB9KSwgX3ZtLl92KFwiIFNlbWktRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsID0gIV92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCJcbiAgfSksIF92bS5fdihcIiBGaW5hbHNcXG4gICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZSksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHJhbXBDb2xTaXplXG4gIH0sIFtfYygndHJhbXBvbGluZS1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkNvbXB1bHNvcnlcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fY29tcHVsc29yeVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHJhbXBDb2xTaXplXG4gIH0sIFtfYygndHJhbXBvbGluZS1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlByZWxpbSBPcHRpb25hbFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9vcHRpb25hbFwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd1NlbWlGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnRyYW1wQ29sU2l6ZVxuICB9LCBbX2MoJ3RyYW1wb2xpbmUtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJTZW1pLUZpbmFsXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwic2VtaV9maW5hbF9vcHRpb25hbFwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50cmFtcENvbFNpemVcbiAgfSwgW19jKCd0cmFtcG9saW5lLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiRmluYWwgT3B0aW9uYWxcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJmaW5hbF9vcHRpb25hbFwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZG10KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZG10XCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImRtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwibmFtZVwiOiBcImRtdFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLmRtdCkgPyBfdm0uX2koX3ZtLmRtdCwgbnVsbCkgPiAtMSA6IChfdm0uZG10KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLmRtdCxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5kbXQgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0uZG10ID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS5kbXQgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBEb3VibGUgTWluaVxcbiAgICAgICAgICAgICAgICBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRtdCksXG4gICAgICBleHByZXNzaW9uOiBcImRtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbCA9ICFfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiXG4gIH0pLCBfdm0uX3YoXCIgRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRtdCksXG4gICAgICBleHByZXNzaW9uOiBcImRtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS5kbXRDb2xTaXplXG4gIH0sIFtfYygnZG10LXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAxXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfMVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0uZG10Q29sU2l6ZVxuICB9LCBbX2MoJ2RtdC1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgMlwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9wYXNzXzJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS5kbXRDb2xTaXplXG4gIH0sIFtfYygnZG10LXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAzXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwiZmluYWxfcGFzc18zXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0uZG10Q29sU2l6ZVxuICB9LCBbX2MoJ2RtdC1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgNFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcImZpbmFsX3Bhc3NfNFwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udHVtYmxpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1wiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0dW1ibGluZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwibmFtZVwiOiBcInR1bWJsaW5nXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0udHVtYmxpbmcpID8gX3ZtLl9pKF92bS50dW1ibGluZywgbnVsbCkgPiAtMSA6IChfdm0udHVtYmxpbmcpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0udHVtYmxpbmcsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0udHVtYmxpbmcgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0udHVtYmxpbmcgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLnR1bWJsaW5nID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgVHVtYmxpbmdcXG4gICAgICAgICAgICAgICAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZyksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbCA9ICFfdm0udHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiXG4gIH0pLCBfdm0uX3YoXCIgRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHVtYmxpbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHVtYmxpbmdDb2xTaXplXG4gIH0sIFtfYygndHVtYmxpbmctc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXNzIDFcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fcGFzc18xXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50dW1ibGluZ0NvbFNpemVcbiAgfSwgW19jKCd0dW1ibGluZy1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgMlwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9wYXNzXzJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnR1bWJsaW5nQ29sU2l6ZVxuICB9LCBbX2MoJ3R1bWJsaW5nLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAzXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwiZmluYWxfcGFzc18zXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbCksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50dW1ibGluZ0NvbFNpemVcbiAgfSwgW19jKCd0dW1ibGluZy1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgNFwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcImZpbmFsX3Bhc3NfNFwiXG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmVycm9ycy5hbnkoKSB8fCAhX3ZtLmV2ZW50c1ZhbGlkXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3VibWl0IENvbXBldGl0aW9uXCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03NWJlYjJlY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzViZWIyZWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21wZXRpdGlvbkZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA4MDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrICFpbXBvcnRhbnRcIlxuICAgIH1cbiAgfSwgW19jKCdhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0uc2hvd1ZpZGVvKSxcbiAgICAgIGV4cHJlc3Npb246IFwiIXNob3dWaWRlb1wiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0ucGxheVZpZGVvKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsYXlcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICBQbGF5IFZpZGVvXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvd1ZpZGVvKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd1ZpZGVvXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5oaWRlVmlkZW8oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tbWVudS11cFwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgIEhpZGUgVmlkZW9cXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd2aWRlbycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luIHZqcy1iaWctcGxheS1jZW50ZXJlZCB2anMtMTYtOSB2anMtaGlkZGVuXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogJ3ZpZGVvLScgKyBfdm0udmlkZW9JZCxcbiAgICAgIFwiY29udHJvbHNcIjogXCJcIixcbiAgICAgIFwiZGF0YS1zZXR1cFwiOiBcIntcXFwiZmx1aWRcXFwiOiB0cnVlfVwiLFxuICAgICAgXCJwb3N0ZXJcIjogX3ZtLmltZyxcbiAgICAgIFwid2lkdGhcIjogX3ZtLndpZHRoLFxuICAgICAgXCJoZWlnaHRcIjogX3ZtLmhlaWdodFxuICAgIH1cbiAgfSwgW19jKCdzb3VyY2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInZpZGVvL21wNFwiLFxuICAgICAgXCJzcmNcIjogX3ZtLnNyY1xuICAgIH1cbiAgfSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdiMzA4NmM2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03YjMwODZjNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlXG4vLyBtb2R1bGUgaWQgPSA4MDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIlxuICB9LCBbX3ZtLl92KFwiVXBsb2FkIFlvdXIgVmlkZW9cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmFtZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcIm5hbWVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5hdXRoZW50aWNhdGVkXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZXZlbnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV2ZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLmV2ZW50ID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInRyYW1wb2xpbmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRyYW1wb2xpbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImRvdWJsZSBtaW5pXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEb3VibGUtbWluaVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidHVtYmxpbmdcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlR1bWJsaW5nXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoIV92bS51cGxvYWRpbmcpID8gX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJmaWxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJ2aWRlb1wiLFxuICAgICAgXCJpZFwiOiBcInZpZGVvXCIsXG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0ubmFtZSB8fCAhX3ZtLmV2ZW50XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLmZpbGVJbnB1dENoYW5nZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mYWlsZWQpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51cGxvYWRpbmcgJiYgIV92bS5mYWlsZWQpID8gX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInZpZGVvLWZvcm1cIlxuICAgIH1cbiAgfSwgWyghX3ZtLnVwbG9hZGluZ0NvbXBsZXRlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtaW5mb1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIlxuICB9KSwgX3ZtLl92KFwiIFlvdXIgdmlkZW8gaXMgdXBsb2FkaW5nLi4uXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51cGxvYWRpbmdDb21wbGV0ZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBjb21wbGV0ZS4gVmlkZW8gaXMgbm93IHByb2Nlc3NpbmcuIFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIi92aWRlb3NcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkdvIHRvIHlvdXIgdmlkZW9zLlwiKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0udXBsb2FkaW5nQ29tcGxldGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLWJhclwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgd2lkdGg6IF92bS5maWxlUHJvZ3Jlc3MgKyAnJSdcbiAgICB9KVxuICB9KV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRpdGxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50aXRsZSksXG4gICAgICBleHByZXNzaW9uOiBcInRpdGxlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpdGxlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRpdGxlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJkZXNjcmlwdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGVzY3JpcHRpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRlc2NyaXB0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGVzY3JpcHRpb25cIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZGVzY3JpcHRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGVzY3JpcHRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInZpc2liaWxpdHlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlZpc2liaWxpdHlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS52aXNpYmlsaXR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwidmlzaWJpbGl0eVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLnZpc2liaWxpdHkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicHJpdmF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHJpdmF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidW5saXN0ZWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlVubGlzdGVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwdWJsaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlB1YmxpY1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBwdWxsLXJpZ2h0XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnNhdmVTdGF0dXMpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udXBkYXRlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTYXZlIENoYW5nZXNcIildKV0pIDogX3ZtLl9lKCldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LThjY2Y2NjdhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi04Y2NmNjY3YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGluZS12aWRlbycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyb3V0aW5lc1wiOiBfdm0ucm91dGluZXMsXG4gICAgICBcImRpc2NpcGxpbmVcIjogX3ZtLmRpc2NpcGxpbmUsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IF92bS5yb3V0aW5lS2V5XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2V4ZWN1dGlvbicpLFxuICAgICAgXCJ0aXRsZVwiOiBcIkV4ZWN1dGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRXhlY3V0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uZXhlY3V0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXhlY3V0aW9uXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnZXhlY3V0aW9uJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmV4ZWN1dGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5leGVjdXRpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2RpZmZpY3VsdHknKSxcbiAgICAgIFwidGl0bGVcIjogXCJEaWZmaWN1bHR5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEaWZmaWN1bHR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uZGlmZmljdWx0eSksXG4gICAgICBleHByZXNzaW9uOiBcImRpZmZpY3VsdHlcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCdkaWZmaWN1bHR5JyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmRpZmZpY3VsdHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGlmZmljdWx0eSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKSxcbiAgICAgIFwidGl0bGVcIjogXCJOZXV0cmFsIERlZHVjdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTkRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5uZXV0cmFsX2RlZHVjdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcIm5ldXRyYWxfZGVkdWN0aW9uXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubmV1dHJhbF9kZWR1Y3Rpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubmV1dHJhbF9kZWR1Y3Rpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInRpdGxlXCI6IFwiVG90YWwgU2NvcmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRvdGFsIFNjb3JlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0udG90YWxfc2NvcmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3RhbF9zY29yZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRvdGFsX3Njb3JlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdGFsX3Njb3JlID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi05MzM4YTYzNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOTMzOGE2MzYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGluZS12aWRlbycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyb3V0aW5lc1wiOiBfdm0ucm91dGluZXMsXG4gICAgICBcImRpc2NpcGxpbmVcIjogX3ZtLmRpc2NpcGxpbmUsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IF92bS5yb3V0aW5lS2V5XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2V4ZWN1dGlvbicpLFxuICAgICAgXCJ0aXRsZVwiOiBcIkV4ZWN1dGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRXhlY3V0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uZXhlY3V0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXhlY3V0aW9uXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnZXhlY3V0aW9uJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmV4ZWN1dGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5leGVjdXRpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ2RpZmZpY3VsdHknKSxcbiAgICAgIFwidGl0bGVcIjogXCJEaWZmaWN1bHR5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEaWZmaWN1bHR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0uZGlmZmljdWx0eSksXG4gICAgICBleHByZXNzaW9uOiBcImRpZmZpY3VsdHlcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCdkaWZmaWN1bHR5JyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmRpZmZpY3VsdHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGlmZmljdWx0eSA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgndGltZV9vZl9mbGlnaHQnKSxcbiAgICAgIFwidGl0bGVcIjogXCJUaW1lIG9mIEZsaWdodFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVE9GXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0udGltZV9vZl9mbGlnaHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0aW1lX29mX2ZsaWdodFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ3RpbWVfb2ZfZmxpZ2h0JyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpbWVfb2ZfZmxpZ2h0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRpbWVfb2ZfZmxpZ2h0ID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uZm9ybUlkKCdob3Jpem9udGFsX2Rpc3BsYWNlbWVudCcpLFxuICAgICAgXCJ0aXRsZVwiOiBcIkhvcml6b250YWwgRGlzcGxhY2VtZW50XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJIRFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXJcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmhvcml6b250YWxfZGlzcGxhY2VtZW50KSxcbiAgICAgIGV4cHJlc3Npb246IFwiaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnRcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCdob3Jpem9udGFsX2Rpc3BsYWNlbWVudCcpLFxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5ob3Jpem9udGFsX2Rpc3BsYWNlbWVudClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5ob3Jpem9udGFsX2Rpc3BsYWNlbWVudCA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKSxcbiAgICAgIFwidGl0bGVcIjogXCJOZXV0cmFsIERlZHVjdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTkRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5uZXV0cmFsX2RlZHVjdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcIm5ldXRyYWxfZGVkdWN0aW9uXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgnbmV1dHJhbF9kZWR1Y3Rpb24nKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubmV1dHJhbF9kZWR1Y3Rpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubmV1dHJhbF9kZWR1Y3Rpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInRpdGxlXCI6IFwiVG90YWwgU2NvcmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRvdGFsIFNjb3JlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0udG90YWxfc2NvcmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3RhbF9zY29yZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRvdGFsX3Njb3JlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdGFsX3Njb3JlID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lNGUzYTNhMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZTRlM2EzYTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihfdm0uX3MoX3ZtLmNvbW1lbnRzLmxlbmd0aCkgKyBcIiBcIiArIF92bS5fcyhfdm0uX2YoXCJwbHVyYWxpemVcIikoX3ZtLmNvbW1lbnRzLmxlbmd0aCwgJ2NvbW1lbnQnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW8tY29tbWVudCBjbGVhcmZpeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlmXCI6IFwiJHJvb3QudXNlci5hdXRoZW50aWNhdGVkXCJcbiAgICB9XG4gIH0sIFtfYygndGV4dGFyZWEnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uYm9keSksXG4gICAgICBleHByZXNzaW9uOiBcImJvZHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU2F5IHNvbWV0aGluZy4uLlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmJvZHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uYm9keSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHRcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMTBweFwiXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmNyZWF0ZUNvbW1lbnQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyhfdm0ucG9zdGluZykgPyBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgUG9zdFxcbiAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLWxpc3RcIlxuICB9LCBfdm0uX2woKF92bS5jb21tZW50cyksIGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWFcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGVmdFwiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKGNvbW1lbnQpXG4gICAgICB9XG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1vYmplY3QgaW1nLWF2YXRhclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogY29tbWVudC51c2VyLmRhdGEuaW1hZ2UsXG4gICAgICAgIFwiYWx0XCI6IGNvbW1lbnQudXNlci5kYXRhLm5hbWVcbiAgICAgIH1cbiAgICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1ib2R5XCJcbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogX3ZtLnVzZXJVcmwoY29tbWVudClcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhjb21tZW50LnVzZXIuZGF0YS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGNvbW1lbnQuY3JlYXRlZF9hdF9odW1hbikgKyBcIlxcblxcbiAgICAgICAgICAgICAgICBcIiksIChjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGgpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCkgKyBcIiAgXCIgKyBfdm0uX3MoX3ZtLl9mKFwicGx1cmFsaXplXCIpKGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCwgJ3JlcGx5JywgJ3JlcGxpZXMnKSkgKyBcIilcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoX3ZtLl9zKGNvbW1lbnQuYm9keSkpXSksIF92bS5fdihcIiBcIiksIChfdm0uJHJvb3QudXNlci5hdXRoZW50aWNhdGVkKSA/IF9jKCd1bCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtaW5saW5lXCJcbiAgICB9LCBbX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0udG9nZ2xlUmVwbHlGb3JtKGNvbW1lbnQuaWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5yZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50LmlkID8gJ0NhbmNlbCByZXBseScgOiAnUmVwbHknKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKGNvbW1lbnQudXNlcl9pZCA9PT0gX3ZtLiRyb290LnVzZXIuaWQpID8gX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uZGVsZXRlQ29tbWVudChjb21tZW50LmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgWyhfdm0uZGVsZXRpbmcgPT09IGNvbW1lbnQuaWQpID8gX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICAgIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBEZWxldGVcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnJlcGx5Rm9ybVZpc2libGUgPT09IGNvbW1lbnQuaWQpID8gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvLWNvbW1lbnQgY2xlYXJcIlxuICAgIH0sIFtfYygndGV4dGFyZWEnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICB2YWx1ZTogKF92bS5yZXBseUJvZHkpLFxuICAgICAgICBleHByZXNzaW9uOiBcInJlcGx5Qm9keVwiXG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiLFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlcGx5Qm9keSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0ucmVwbHlCb2R5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIxMHB4XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5jcmVhdGVSZXBseShjb21tZW50LmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgWyhfdm0ucmVwbHlpbmcpID8gX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICAgIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBSZXBseVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKGNvbW1lbnQucmVwbGllcy5kYXRhKSwgZnVuY3Rpb24ocmVwbHkpIHtcbiAgICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZWRpYVwiXG4gICAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGVmdFwiXG4gICAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKHJlcGx5KVxuICAgICAgICB9XG4gICAgICB9LCBbX2MoJ2ltZycsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtb2JqZWN0IGltZy1hdmF0YXJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcInNyY1wiOiByZXBseS51c2VyLmRhdGEuaW1hZ2UsXG4gICAgICAgICAgXCJhbHRcIjogcmVwbHkudXNlci5kYXRhLm5hbWVcbiAgICAgICAgfVxuICAgICAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1ib2R5XCJcbiAgICAgIH0sIFtfYygnYScsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImhyZWZcIjogX3ZtLnVzZXJVcmwocmVwbHkpXG4gICAgICAgIH1cbiAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHJlcGx5LnVzZXIuZGF0YS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHJlcGx5LmNyZWF0ZWRfYXRfaHVtYW4pICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCdwJywgW192bS5fdihfdm0uX3MocmVwbHkuYm9keSkpXSksIF92bS5fdihcIiBcIiksIChfdm0uJHJvb3QudXNlci5hdXRoZW50aWNhdGVkKSA/IF9jKCd1bCcsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1pbmxpbmVcIlxuICAgICAgfSwgW19jKCdsaScsIFsocmVwbHkudXNlcl9pZCA9PT0gX3ZtLiRyb290LnVzZXIuaWQpID8gX2MoJ2EnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbW1lbnQocmVwbHkuaWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBbKF92bS5kZWxldGluZyA9PT0gcmVwbHkuaWQpID8gX2MoJ2knLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiXG4gICAgICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpXSldKSA6IF92bS5fZSgpXSldKVxuICAgIH0pXSwgMildKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lZTdiMmU5NFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZWU3YjJlOTQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IG1hdGggZnJvbSAnbWF0aGpzJztcblxuY2xhc3MgU2NvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmF0dHJzID0ge1xuICAgICAgICAgICAgZXhlY3V0aW9uOiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWZmaWN1bHR5OiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXV0cmFsX2RlZHVjdGlvbjoge1xuICAgICAgICAgICAgICAgIG9yZGVyOiAyMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdGFsX3Njb3JlOiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpZGVvX2lkID0gbnVsbDtcbiAgICAgICAgdGhpcy52aWRlb0ZpbGVuYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0SWQoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIHNldFZpZGVvSWQodmlkZW9JZCkge1xuICAgICAgICB0aGlzLnZpZGVvX2lkID0gdmlkZW9JZDtcbiAgICB9XG5cbiAgICBzZXRWaWRlb0ZpbGVuYW1lKHZpZGVvRmlsZW5hbWUpIHtcbiAgICAgICAgdGhpcy52aWRlb0ZpbGVuYW1lID0gdmlkZW9GaWxlbmFtZTtcbiAgICB9XG5cbiAgICBoYXNWaWRlbygpIHtcbiAgICAgICAgcmV0dXJuICEhIHRoaXMudmlkZW9faWQ7XG4gICAgfVxuXG4gICAgdXBkYXRlQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdHRyc1trZXldLnZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzY29yZUtleXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmF0dHJzKS5zb3J0KChhLCBiKSA9PiB7IHJldHVybiB0aGlzLmF0dHJzW2FdLm9yZGVyIC0gdGhpcy5hdHRyc1tiXS5vcmRlcjsgfSk7XG4gICAgfVxuXG4gICAgaGFzU2NvcmUoKSB7XG4gICAgICAgICh0aGlzLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlICE9PSBudWxsICYmIHRoaXMuYXR0cnMudG90YWxfc2NvcmUudmFsdWUgPiAwKTtcbiAgICB9XG5cbiAgICBhdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHRoaXMuYXR0cnNba2V5XS52YWx1ZTtcbiAgICB9XG5cbiAgICBjb21wdXRlVG90YWwoKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIHRoaXMuc2NvcmVLZXlzKCkuZm9yRWFjaCgoY29tcG9uZW50X2tleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudF9rZXkgPT09ICduZXV0cmFsX2RlZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzdW0gPSAodGhpcy5hdHRycy5uZXV0cmFsX2RlZHVjdGlvbi52YWx1ZSkgPyBtYXRoLnN1YnRyYWN0KHN1bSwgdGhpcy5hdHRycy5uZXV0cmFsX2RlZHVjdGlvbi52YWx1ZSkgOiBzdW07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudF9rZXkgIT09ICd0b3RhbF9zY29yZScpIHtcbiAgICAgICAgICAgICAgICBzdW0gPSAodGhpcy5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSkgPyBtYXRoLmFkZChzdW0sIHRoaXMuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUpIDogc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlID0gbWF0aC5yb3VuZChzdW0sIDMpO1xuICAgIH1cblxuICAgIHNldFRvdGFsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2NvcmVLZXlzKCkuZm9yRWFjaCgoY29tcG9uZW50X2tleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudF9rZXkgIT09ICd0b3RhbF9zY29yZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hdHRycy50b3RhbF9zY29yZS52YWx1ZSA9ICh2YWx1ZSAhPT0gJycpID8gbWF0aC5yb3VuZCh2YWx1ZSwgMykgOiAnJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvU2NvcmUuanMiLCJ2YXIgbWF0aCA9IHJlcXVpcmUoJ21hdGhqcycpO1xudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuY29uc3QgU2NvcmVNaXhpbiA9IHtcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICByb3V0aW5lS2V5OiBudWxsLFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBleGVjdXRpb246IHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uYXR0cnMuZXhlY3V0aW9uLnZhbHVlIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfUk9VVElORV9QUk9QRVJUWScsIHsgZGlzY2lwbGluZTogdGhpcy5yb3V0aW5lcywgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LCBjb21wb25lbnQ6ICdleGVjdXRpb24nLCB2YWx1ZSB9KSB9XG4gICAgICAgIH0sXG4gICAgICAgIGRpZmZpY3VsdHk6IHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uYXR0cnMuZGlmZmljdWx0eS52YWx1ZSB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1JPVVRJTkVfUFJPUEVSVFknLCB7IGRpc2NpcGxpbmU6IHRoaXMucm91dGluZXMsIHJvdXRpbmVLZXk6IHRoaXMucm91dGluZUtleSwgY29tcG9uZW50OiAnZGlmZmljdWx0eScsIHZhbHVlIH0pIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGltZV9vZl9mbGlnaHQ6IHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uYXR0cnMudGltZV9vZl9mbGlnaHQudmFsdWUgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkgeyB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9ST1VUSU5FX1BST1BFUlRZJywgeyBkaXNjaXBsaW5lOiB0aGlzLnJvdXRpbmVzLCByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksIGNvbXBvbmVudDogJ3RpbWVfb2ZfZmxpZ2h0JywgdmFsdWUgfSkgfVxuICAgICAgICB9LFxuICAgICAgICBob3Jpem9udGFsX2Rpc3BsYWNlbWVudDoge1xuICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbdGhpcy5yb3V0aW5lc11bdGhpcy5yb3V0aW5lS2V5XS5hdHRycy5ob3Jpem9udGFsX2Rpc3BsYWNlbWVudC52YWx1ZSB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1JPVVRJTkVfUFJPUEVSVFknLCB7IGRpc2NpcGxpbmU6IHRoaXMucm91dGluZXMsIHJvdXRpbmVLZXk6IHRoaXMucm91dGluZUtleSwgY29tcG9uZW50OiAnaG9yaXpvbnRhbF9kaXNwbGFjZW1lbnQnLCB2YWx1ZSB9KSB9XG4gICAgICAgIH0sXG4gICAgICAgIG5ldXRyYWxfZGVkdWN0aW9uOiB7XG4gICAgICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVt0aGlzLnJvdXRpbmVzXVt0aGlzLnJvdXRpbmVLZXldLmF0dHJzLm5ldXRyYWxfZGVkdWN0aW9uLnZhbHVlIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHsgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfUk9VVElORV9QUk9QRVJUWScsIHsgZGlzY2lwbGluZTogdGhpcy5yb3V0aW5lcywgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LCBjb21wb25lbnQ6ICduZXV0cmFsX2RlZHVjdGlvbicsIHZhbHVlIH0pIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG90YWxfc2NvcmU6IHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlW3RoaXMucm91dGluZXNdW3RoaXMucm91dGluZUtleV0uYXR0cnMudG90YWxfc2NvcmUudmFsdWUgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkgeyB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9ST1VUSU5FX1BST1BFUlRZJywgeyBkaXNjaXBsaW5lOiB0aGlzLnJvdXRpbmVzLCByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksIGNvbXBvbmVudDogJ3RvdGFsX3Njb3JlJywgdmFsdWUgfSkgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZm9ybUlkKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLmRpc2NpcGxpbmUsIHRoaXMucm91dGluZUtleSwgY29tcG9uZW50XS5qb2luKCdfJyk7XG4gICAgICAgIH0sXG5cbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVNaXhpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9zY29yZS5taXhpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=