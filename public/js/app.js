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






var disciplineMap = {
    trampoline: 'trampolineRoutines',
    dmt: 'doubleMiniPasses',
    tumbling: 'tumblingPasses'
};

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
        if (this.competitionId) {
            this.$store.dispatch('LOAD_COMPETITION', this.competitionId);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DoubleMiniScore__ = __webpack_require__(130);
//
//
//
//
//
//
//
//
//
//
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




/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            discipline: 'tumbling'
        };
    },


    computed: {
        execution: {
            get: function get() {
                return this.$store.state.tumblingPasses[this.routineKey].execution.value;
            },
            set: function set(value) {}
        }
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

    state: {
        title: null,
        location: null,
        start_date: null,
        end_date: null,

        trampolineRoutines: {},
        doubleMiniPasses: {},
        tumblingPasses: {
            prelim_pass_1: new __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */](),
            prelim_pass_2: new __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */](),
            final_pass_3: new __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */](),
            final_pass_4: new __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */]()
        }
    },
    actions: {
        LOAD_COMPETITION: function LOAD_COMPETITION(context, competitionId) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.get('/competitions/' + competitionId).then(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.getJson).then(function (response) {
                var competition = response.data;
                console.log('Competition: ', competition);

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
    mutations: {
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
                scoreObj = _ref2.scoreObj;

            scores.forEach(function (score) {

                var scoreMap = {};

                Object.keys(scoreObj.attrs).forEach(function (scorePart) {
                    scoreMap[scorePart] = score[scorePart];
                });

                scoreObj.updateAttributes(scoreMap);
                scoreObj.setVideoId(score.video_id);
                state.tumblingPasses[score.routine] = scoreObj;
            });
        },

        SET_TRAMPOLINE_SCORES: function SET_TRAMPOLINE_SCORES(state, _ref3) {
            var scores = _ref3.scores;

            return store.commit('SET_SCORES', {
                scores: scores,
                scoreObj: new __WEBPACK_IMPORTED_MODULE_3__TrampolineScore__["a" /* default */]()
            });
        },

        SET_DOUBLE_MINI_SCORES: function SET_DOUBLE_MINI_SCORES(state, _ref4) {
            var scores = _ref4.scores;

            return store.commit('SET_SCORES', {
                scores: scores,
                scoreObj: new __WEBPACK_IMPORTED_MODULE_4__DoubleMiniScore__["a" /* default */]()
            });
        },

        SET_TUMBLING_SCORES: function SET_TUMBLING_SCORES(state, _ref5) {
            var scores = _ref5.scores;

            return store.commit('SET_SCORES', {
                scores: scores,
                scoreObj: new __WEBPACK_IMPORTED_MODULE_5__TumblingScore__["a" /* default */]()
            });
        }
    },
    getters: {},
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
      "discipline": _vm.discipline,
      "routine-key": _vm.routineKey
    },
    on: {
      "video-uploaded": _vm.videoUploaded
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
      "change": _vm.computeScore,
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
      "change": _vm.computeTotalScore,
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

/***/ 810:
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

    methods: {
        formId: function formId(component) {
            return [this.discipline, this.routineKey, component].join('_');
        },
        toggleShowQueued: function toggleShowQueued() {
            this.showQueuedFiles = !this.showQueuedFiles;
        },
        videoUploaded: function videoUploaded(data) {
            // this.score.setVideoId(data.video.id);
            //
            // this.$emit('scorechanged', {
            //     routineKey: this.routineKey,
            //     score: this.score,
            // });
        },
        computeScore: function computeScore() {
            // let sum = 0;
            //
            // this.score.scoreKeys().forEach((component_key) => {
            //     if (component_key === 'neutral_deduction') {
            //         sum = (this.score.attrs.neutral_deduction.value) ? math.subtract(sum, this.score.attrs.neutral_deduction.value) : sum;
            //     } else if (component_key !== 'total_score') {
            //         sum = (this.score.attrs[component_key].value) ? math.add(sum, this.score.attrs[component_key].value) : sum;
            //     }
            // });
            //
            // this.score.attrs.total_score.value = math.round(sum, 3);
            //
            // this.$emit('scorechanged', {
            //     routineKey: this.routineKey,
            //     score: this.score
            // });
        },
        computeTotalScore: function computeTotalScore() {
            // this.score.scoreKeys().forEach((component_key) => {
            //     if (component_key !== 'total_score') {
            //         this.score.attrs[component_key].value = null;
            //     }
            // });
            //
            // this.$emit('scorechanged', {
            //     routineKey: this.routineKey,
            //     score: this.score
            // });
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

},[815]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZXgvZGlzdC92dWV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0RvdWJsZU1pbmlTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1RyYW1wb2xpbmVTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1R1bWJsaW5nU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzPzI2OTEiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vQ29tcGV0aXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vTXVsdGlwbGVWaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vL1JvdXRpbmVWaWRlby52dWUiLCJ3ZWJwYWNrOi8vL1NtYWxsVmlkZW8udnVlIiwid2VicGFjazovLy9WaWRlb0NvbW1lbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy9WaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vL1ZpZGVvVm90aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vRG91YmxlTWluaVNjb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vVHJhbXBvbGluZVNjb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vVHVtYmxpbmdTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvVm90aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UcmFtcG9saW5lU2NvcmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlPzRiZTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9UdW1ibGluZ1Njb3JlLnZ1ZT8wZmQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWU/YWM5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlPzRjODgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWU/MGQ1NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZT84ZDI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZT8wZWNlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWU/NDA2NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWU/ZjZmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWU/MTk5YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWU/N2U3MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1Njb3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Njb3JlLm1peGluLmpzIl0sIm5hbWVzIjpbIkRvdWJsZU1pbmlTY29yZSIsImRpc2NpcGxpbmUiLCJsYWJlbCIsInJvdXRpbmVLZXlzIiwiVHJhbXBvbGluZVNjb3JlIiwiYXR0cnMiLCJ0aW1lX29mX2ZsaWdodCIsIm9yZGVyIiwidGl0bGUiLCJ2YWx1ZSIsImhvcml6b250YWxfZGlzcGxhY2VtZW50IiwiVHVtYmxpbmdTY29yZSIsInJlcXVpcmUiLCJWdWUiLCJjb21wb25lbnQiLCJ1c2UiLCJ3aW5kb3ciLCJFdmVudCIsImluc3RhbGwiLCJvcHRpb25zIiwiZ2V0SnNvbiIsInJlc3BvbnNlIiwianNvbiIsImh0dHAiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsImFwcCIsImVsIiwiZGF0YSIsInN0b3JlIiwiXyIsIiQiLCJqUXVlcnkiLCJheGlvcyIsImRlZmF1bHRzIiwiVnVleCIsIlN0b3JlIiwic3RyaWN0Iiwic3RhdGUiLCJsb2NhdGlvbiIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInRyYW1wb2xpbmVSb3V0aW5lcyIsImRvdWJsZU1pbmlQYXNzZXMiLCJ0dW1ibGluZ1Bhc3NlcyIsInByZWxpbV9wYXNzXzEiLCJwcmVsaW1fcGFzc18yIiwiZmluYWxfcGFzc18zIiwiZmluYWxfcGFzc180IiwiYWN0aW9ucyIsIkxPQURfQ09NUEVUSVRJT04iLCJjb250ZXh0IiwiY29tcGV0aXRpb25JZCIsImdldCIsInRoZW4iLCJjb21wZXRpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjb21taXQiLCJmaWVsZHMiLCJ0cmFtcG9saW5lU2NvcmVzIiwibGVuZ3RoIiwic2NvcmVzIiwiZG91YmxlTWluaVNjb3JlcyIsInR1bWJsaW5nU2NvcmVzIiwibXV0YXRpb25zIiwiU0VUX0NPTVBFVElUSU9OX0ZJRUxEUyIsIm1vbWVudCIsImRhdGUiLCJmb3JtYXQiLCJTRVRfVElUTEUiLCJTRVRfTE9DQVRJT04iLCJTRVRfU1RBUlRfREFURSIsIlNFVF9FTkRfREFURSIsIlNFVF9TQ09SRVMiLCJzY29yZU9iaiIsImZvckVhY2giLCJzY29yZSIsInNjb3JlTWFwIiwiT2JqZWN0Iiwia2V5cyIsInNjb3JlUGFydCIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJzZXRWaWRlb0lkIiwidmlkZW9faWQiLCJyb3V0aW5lIiwiU0VUX1RSQU1QT0xJTkVfU0NPUkVTIiwiU0VUX0RPVUJMRV9NSU5JX1NDT1JFUyIsIlNFVF9UVU1CTElOR19TQ09SRVMiLCJnZXR0ZXJzIiwibW9kdWxlcyIsIlNjb3JlIiwiZXhlY3V0aW9uIiwiZGlmZmljdWx0eSIsIm5ldXRyYWxfZGVkdWN0aW9uIiwidG90YWxfc2NvcmUiLCJpZCIsImF0dHJpYnV0ZXMiLCJrZXkiLCJzb3J0IiwiYSIsImIiLCJtYXRoIiwiU2NvcmVNaXhpbiIsInByb3BzIiwicm91dGluZUtleSIsIm1ldGhvZHMiLCJmb3JtSWQiLCJqb2luIiwidG9nZ2xlU2hvd1F1ZXVlZCIsInNob3dRdWV1ZWRGaWxlcyIsInZpZGVvVXBsb2FkZWQiLCJjb21wdXRlU2NvcmUiLCJjb21wdXRlVG90YWxTY29yZSIsIm1vdW50ZWQiLCIkdXBsb2FkIiwicmVzZXQiLCJ1cmwiLCJjdXJyZW50RmlsZXMiLCJkcm9wem9uZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQixJQUFJLHlCQUF5QjtBQUN4RSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFlBQVk7QUFDWjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMEJBQTBCLEVBQUU7QUFDdkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixVQUFVLGVBQWU7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFROztBQUVSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QixnQ0FBZ0M7QUFDaEMsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCx1QkFBdUIsRUFBRTtBQUNwRjs7QUFFQSwwQkFBMEIsVUFBVTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZ0dBQWdHO0FBQ2hHLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2hEQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JsQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDaEVBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFL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QUFDQTtBQUNILFNBbkNJO0FBcUNMQyx5QkFyQ0ssK0JBcUNlO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsU0FoREk7QUFrRExDLGVBbERLLHFCQWtESztBQUNOLGlCQUFLQyxPQUFMLENBQWFDLEtBQWIsQ0FBbUIsY0FBbkIsRUFBbUM7QUFDL0JDLHFCQUFLLGtCQUQwQjtBQUUvQkMsOEJBQWMsQ0FGaUI7QUFHL0JDLDRCQUFZO0FBSG1CLGFBQW5DO0FBS0g7QUF4REk7QUFQTSxDQUFuQjs7QUFtRUEsd0RBQWVoQixVQUFmLEMiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogdnVleCB2Mi4yLjFcbiAqIChjKSAyMDE3IEV2YW4gWW91XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xudmFyIGFwcGx5TWl4aW4gPSBmdW5jdGlvbiAoVnVlKSB7XG4gIHZhciB2ZXJzaW9uID0gTnVtYmVyKFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJylbMF0pO1xuXG4gIGlmICh2ZXJzaW9uID49IDIpIHtcbiAgICB2YXIgdXNlc0luaXQgPSBWdWUuY29uZmlnLl9saWZlY3ljbGVIb29rcy5pbmRleE9mKCdpbml0JykgPiAtMTtcbiAgICBWdWUubWl4aW4odXNlc0luaXQgPyB7IGluaXQ6IHZ1ZXhJbml0IH0gOiB7IGJlZm9yZUNyZWF0ZTogdnVleEluaXQgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3ZlcnJpZGUgaW5pdCBhbmQgaW5qZWN0IHZ1ZXggaW5pdCBwcm9jZWR1cmVcbiAgICAvLyBmb3IgMS54IGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgIHZhciBfaW5pdCA9IFZ1ZS5wcm90b3R5cGUuX2luaXQ7XG4gICAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICAgICAgb3B0aW9ucy5pbml0ID0gb3B0aW9ucy5pbml0XG4gICAgICAgID8gW3Z1ZXhJbml0XS5jb25jYXQob3B0aW9ucy5pbml0KVxuICAgICAgICA6IHZ1ZXhJbml0O1xuICAgICAgX2luaXQuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZ1ZXggaW5pdCBob29rLCBpbmplY3RlZCBpbnRvIGVhY2ggaW5zdGFuY2VzIGluaXQgaG9va3MgbGlzdC5cbiAgICovXG5cbiAgZnVuY3Rpb24gdnVleEluaXQgKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9ucztcbiAgICAvLyBzdG9yZSBpbmplY3Rpb25cbiAgICBpZiAob3B0aW9ucy5zdG9yZSkge1xuICAgICAgdGhpcy4kc3RvcmUgPSBvcHRpb25zLnN0b3JlO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5wYXJlbnQgJiYgb3B0aW9ucy5wYXJlbnQuJHN0b3JlKSB7XG4gICAgICB0aGlzLiRzdG9yZSA9IG9wdGlvbnMucGFyZW50LiRzdG9yZTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBkZXZ0b29sSG9vayA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG5mdW5jdGlvbiBkZXZ0b29sUGx1Z2luIChzdG9yZSkge1xuICBpZiAoIWRldnRvb2xIb29rKSB7IHJldHVybiB9XG5cbiAgc3RvcmUuX2RldnRvb2xIb29rID0gZGV2dG9vbEhvb2s7XG5cbiAgZGV2dG9vbEhvb2suZW1pdCgndnVleDppbml0Jywgc3RvcmUpO1xuXG4gIGRldnRvb2xIb29rLm9uKCd2dWV4OnRyYXZlbC10by1zdGF0ZScsIGZ1bmN0aW9uICh0YXJnZXRTdGF0ZSkge1xuICAgIHN0b3JlLnJlcGxhY2VTdGF0ZSh0YXJnZXRTdGF0ZSk7XG4gIH0pO1xuXG4gIHN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAobXV0YXRpb24sIHN0YXRlKSB7XG4gICAgZGV2dG9vbEhvb2suZW1pdCgndnVleDptdXRhdGlvbicsIG11dGF0aW9uLCBzdGF0ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgaXRlbSB0aGF0IHBhc3MgdGhlIHRlc3RcbiAqIGJ5IHNlY29uZCBhcmd1bWVudCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEByZXR1cm4geyp9XG4gKi9cbi8qKlxuICogRGVlcCBjb3B5IHRoZSBnaXZlbiBvYmplY3QgY29uc2lkZXJpbmcgY2lyY3VsYXIgc3RydWN0dXJlLlxuICogVGhpcyBmdW5jdGlvbiBjYWNoZXMgYWxsIG5lc3RlZCBvYmplY3RzIGFuZCBpdHMgY29waWVzLlxuICogSWYgaXQgZGV0ZWN0cyBjaXJjdWxhciBzdHJ1Y3R1cmUsIHVzZSBjYWNoZWQgY29weSB0byBhdm9pZCBpbmZpbml0ZSBsb29wLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGNhY2hlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5cblxuLyoqXG4gKiBmb3JFYWNoIGZvciBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZm9yRWFjaFZhbHVlIChvYmosIGZuKSB7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmbihvYmpba2V5XSwga2V5KTsgfSk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UgKHZhbCkge1xuICByZXR1cm4gdmFsICYmIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG5mdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbXNnKSB7XG4gIGlmICghY29uZGl0aW9uKSB7IHRocm93IG5ldyBFcnJvcigoXCJbdnVleF0gXCIgKyBtc2cpKSB9XG59XG5cbnZhciBNb2R1bGUgPSBmdW5jdGlvbiBNb2R1bGUgKHJhd01vZHVsZSwgcnVudGltZSkge1xuICB0aGlzLnJ1bnRpbWUgPSBydW50aW1lO1xuICB0aGlzLl9jaGlsZHJlbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3Jhd01vZHVsZSA9IHJhd01vZHVsZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMSA9IHsgc3RhdGU6IHt9LG5hbWVzcGFjZWQ6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLnN0YXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3Jhd01vZHVsZS5zdGF0ZSB8fCB7fVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEubmFtZXNwYWNlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIXRoaXMuX3Jhd01vZHVsZS5uYW1lc3BhY2VkXG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gYWRkQ2hpbGQgKGtleSwgbW9kdWxlKSB7XG4gIHRoaXMuX2NoaWxkcmVuW2tleV0gPSBtb2R1bGU7XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gcmVtb3ZlQ2hpbGQgKGtleSkge1xuICBkZWxldGUgdGhpcy5fY2hpbGRyZW5ba2V5XTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiBnZXRDaGlsZCAoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9jaGlsZHJlbltrZXldXG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAocmF3TW9kdWxlKSB7XG4gIHRoaXMuX3Jhd01vZHVsZS5uYW1lc3BhY2VkID0gcmF3TW9kdWxlLm5hbWVzcGFjZWQ7XG4gIGlmIChyYXdNb2R1bGUuYWN0aW9ucykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zID0gcmF3TW9kdWxlLmFjdGlvbnM7XG4gIH1cbiAgaWYgKHJhd01vZHVsZS5tdXRhdGlvbnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zID0gcmF3TW9kdWxlLm11dGF0aW9ucztcbiAgfVxuICBpZiAocmF3TW9kdWxlLmdldHRlcnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycyA9IHJhd01vZHVsZS5nZXR0ZXJzO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIGZvckVhY2hDaGlsZCAoZm4pIHtcbiAgZm9yRWFjaFZhbHVlKHRoaXMuX2NoaWxkcmVuLCBmbik7XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hHZXR0ZXIgPSBmdW5jdGlvbiBmb3JFYWNoR2V0dGVyIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLmdldHRlcnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLmdldHRlcnMsIGZuKTtcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoQWN0aW9uID0gZnVuY3Rpb24gZm9yRWFjaEFjdGlvbiAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zLCBmbik7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaE11dGF0aW9uID0gZnVuY3Rpb24gZm9yRWFjaE11dGF0aW9uIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zLCBmbik7XG4gIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBNb2R1bGUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMSApO1xuXG52YXIgTW9kdWxlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIE1vZHVsZUNvbGxlY3Rpb24gKHJhd1Jvb3RNb2R1bGUpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gcmVnaXN0ZXIgcm9vdCBtb2R1bGUgKFZ1ZXguU3RvcmUgb3B0aW9ucylcbiAgdGhpcy5yb290ID0gbmV3IE1vZHVsZShyYXdSb290TW9kdWxlLCBmYWxzZSk7XG5cbiAgLy8gcmVnaXN0ZXIgYWxsIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChyYXdSb290TW9kdWxlLm1vZHVsZXMpIHtcbiAgICBmb3JFYWNoVmFsdWUocmF3Um9vdE1vZHVsZS5tb2R1bGVzLCBmdW5jdGlvbiAocmF3TW9kdWxlLCBrZXkpIHtcbiAgICAgIHRoaXMkMS5yZWdpc3Rlcihba2V5XSwgcmF3TW9kdWxlLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG1vZHVsZSwga2V5KSB7XG4gICAgcmV0dXJuIG1vZHVsZS5nZXRDaGlsZChrZXkpXG4gIH0sIHRoaXMucm9vdClcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldE5hbWVzcGFjZSA9IGZ1bmN0aW9uIGdldE5hbWVzcGFjZSAocGF0aCkge1xuICB2YXIgbW9kdWxlID0gdGhpcy5yb290O1xuICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwga2V5KSB7XG4gICAgbW9kdWxlID0gbW9kdWxlLmdldENoaWxkKGtleSk7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSArIChtb2R1bGUubmFtZXNwYWNlZCA/IGtleSArICcvJyA6ICcnKVxuICB9LCAnJylcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSQxIChyYXdSb290TW9kdWxlKSB7XG4gIHVwZGF0ZSh0aGlzLnJvb3QsIHJhd1Jvb3RNb2R1bGUpO1xufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3RlciAocGF0aCwgcmF3TW9kdWxlLCBydW50aW1lKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBydW50aW1lID09PSB2b2lkIDAgKSBydW50aW1lID0gdHJ1ZTtcblxuICB2YXIgcGFyZW50ID0gdGhpcy5nZXQocGF0aC5zbGljZSgwLCAtMSkpO1xuICB2YXIgbmV3TW9kdWxlID0gbmV3IE1vZHVsZShyYXdNb2R1bGUsIHJ1bnRpbWUpO1xuICBwYXJlbnQuYWRkQ2hpbGQocGF0aFtwYXRoLmxlbmd0aCAtIDFdLCBuZXdNb2R1bGUpO1xuXG4gIC8vIHJlZ2lzdGVyIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChyYXdNb2R1bGUubW9kdWxlcykge1xuICAgIGZvckVhY2hWYWx1ZShyYXdNb2R1bGUubW9kdWxlcywgZnVuY3Rpb24gKHJhd0NoaWxkTW9kdWxlLCBrZXkpIHtcbiAgICAgIHRoaXMkMS5yZWdpc3RlcihwYXRoLmNvbmNhdChrZXkpLCByYXdDaGlsZE1vZHVsZSwgcnVudGltZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyIChwYXRoKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzLmdldChwYXRoLnNsaWNlKDAsIC0xKSk7XG4gIHZhciBrZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gIGlmICghcGFyZW50LmdldENoaWxkKGtleSkucnVudGltZSkgeyByZXR1cm4gfVxuXG4gIHBhcmVudC5yZW1vdmVDaGlsZChrZXkpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlICh0YXJnZXRNb2R1bGUsIG5ld01vZHVsZSkge1xuICAvLyB1cGRhdGUgdGFyZ2V0IG1vZHVsZVxuICB0YXJnZXRNb2R1bGUudXBkYXRlKG5ld01vZHVsZSk7XG5cbiAgLy8gdXBkYXRlIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChuZXdNb2R1bGUubW9kdWxlcykge1xuICAgIGZvciAodmFyIGtleSBpbiBuZXdNb2R1bGUubW9kdWxlcykge1xuICAgICAgaWYgKCF0YXJnZXRNb2R1bGUuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJbdnVleF0gdHJ5aW5nIHRvIGFkZCBhIG5ldyBtb2R1bGUgJ1wiICsga2V5ICsgXCInIG9uIGhvdCByZWxvYWRpbmcsIFwiICtcbiAgICAgICAgICAnbWFudWFsIHJlbG9hZCBpcyBuZWVkZWQnXG4gICAgICAgICk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKHRhcmdldE1vZHVsZS5nZXRDaGlsZChrZXkpLCBuZXdNb2R1bGUubW9kdWxlc1trZXldKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFZ1ZTsgLy8gYmluZCBvbiBpbnN0YWxsXG5cbnZhciBTdG9yZSA9IGZ1bmN0aW9uIFN0b3JlIChvcHRpb25zKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICBhc3NlcnQoVnVlLCBcIm11c3QgY2FsbCBWdWUudXNlKFZ1ZXgpIGJlZm9yZSBjcmVhdGluZyBhIHN0b3JlIGluc3RhbmNlLlwiKTtcbiAgYXNzZXJ0KHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJywgXCJ2dWV4IHJlcXVpcmVzIGEgUHJvbWlzZSBwb2x5ZmlsbCBpbiB0aGlzIGJyb3dzZXIuXCIpO1xuXG4gIHZhciBzdGF0ZSA9IG9wdGlvbnMuc3RhdGU7IGlmICggc3RhdGUgPT09IHZvaWQgMCApIHN0YXRlID0ge307XG4gIHZhciBwbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zOyBpZiAoIHBsdWdpbnMgPT09IHZvaWQgMCApIHBsdWdpbnMgPSBbXTtcbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0OyBpZiAoIHN0cmljdCA9PT0gdm9pZCAwICkgc3RyaWN0ID0gZmFsc2U7XG5cbiAgLy8gc3RvcmUgaW50ZXJuYWwgc3RhdGVcbiAgdGhpcy5fY29tbWl0dGluZyA9IGZhbHNlO1xuICB0aGlzLl9hY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fbXV0YXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fd3JhcHBlZEdldHRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9tb2R1bGVzID0gbmV3IE1vZHVsZUNvbGxlY3Rpb24ob3B0aW9ucyk7XG4gIHRoaXMuX21vZHVsZXNOYW1lc3BhY2VNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuICB0aGlzLl93YXRjaGVyVk0gPSBuZXcgVnVlKCk7XG5cbiAgLy8gYmluZCBjb21taXQgYW5kIGRpc3BhdGNoIHRvIHNlbGZcbiAgdmFyIHN0b3JlID0gdGhpcztcbiAgdmFyIHJlZiA9IHRoaXM7XG4gIHZhciBkaXNwYXRjaCA9IHJlZi5kaXNwYXRjaDtcbiAgdmFyIGNvbW1pdCA9IHJlZi5jb21taXQ7XG4gIHRoaXMuZGlzcGF0Y2ggPSBmdW5jdGlvbiBib3VuZERpc3BhdGNoICh0eXBlLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoLmNhbGwoc3RvcmUsIHR5cGUsIHBheWxvYWQpXG4gIH07XG4gIHRoaXMuY29tbWl0ID0gZnVuY3Rpb24gYm91bmRDb21taXQgKHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29tbWl0LmNhbGwoc3RvcmUsIHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpXG4gIH07XG5cbiAgLy8gc3RyaWN0IG1vZGVcbiAgdGhpcy5zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgLy8gaW5pdCByb290IG1vZHVsZS5cbiAgLy8gdGhpcyBhbHNvIHJlY3Vyc2l2ZWx5IHJlZ2lzdGVycyBhbGwgc3ViLW1vZHVsZXNcbiAgLy8gYW5kIGNvbGxlY3RzIGFsbCBtb2R1bGUgZ2V0dGVycyBpbnNpZGUgdGhpcy5fd3JhcHBlZEdldHRlcnNcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCBzdGF0ZSwgW10sIHRoaXMuX21vZHVsZXMucm9vdCk7XG5cbiAgLy8gaW5pdGlhbGl6ZSB0aGUgc3RvcmUgdm0sIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgcmVhY3Rpdml0eVxuICAvLyAoYWxzbyByZWdpc3RlcnMgX3dyYXBwZWRHZXR0ZXJzIGFzIGNvbXB1dGVkIHByb3BlcnRpZXMpXG4gIHJlc2V0U3RvcmVWTSh0aGlzLCBzdGF0ZSk7XG5cbiAgLy8gYXBwbHkgcGx1Z2luc1xuICBwbHVnaW5zLmNvbmNhdChkZXZ0b29sUGx1Z2luKS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHsgcmV0dXJuIHBsdWdpbih0aGlzJDEpOyB9KTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IHN0YXRlOiB7fSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fdm0uX2RhdGEuJCRzdGF0ZVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLnN0YXRlLnNldCA9IGZ1bmN0aW9uICh2KSB7XG4gIGFzc2VydChmYWxzZSwgXCJVc2Ugc3RvcmUucmVwbGFjZVN0YXRlKCkgdG8gZXhwbGljaXQgcmVwbGFjZSBzdG9yZSBzdGF0ZS5cIik7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24gY29tbWl0IChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gY2hlY2sgb2JqZWN0LXN0eWxlIGNvbW1pdFxuICB2YXIgcmVmID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciBwYXlsb2FkID0gcmVmLnBheWxvYWQ7XG4gICAgdmFyIG9wdGlvbnMgPSByZWYub3B0aW9ucztcblxuICB2YXIgbXV0YXRpb24gPSB7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHBheWxvYWQgfTtcbiAgdmFyIGVudHJ5ID0gdGhpcy5fbXV0YXRpb25zW3R5cGVdO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBtdXRhdGlvbiB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIGNvbW1pdEl0ZXJhdG9yIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKHBheWxvYWQpO1xuICAgIH0pO1xuICB9KTtcbiAgdGhpcy5fc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIobXV0YXRpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2lsZW50KSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCJbdnVleF0gbXV0YXRpb24gdHlwZTogXCIgKyB0eXBlICsgXCIuIFNpbGVudCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gXCIgK1xuICAgICAgJ1VzZSB0aGUgZmlsdGVyIGZ1bmN0aW9uYWxpdHkgaW4gdGhlIHZ1ZS1kZXZ0b29scydcbiAgICApO1xuICB9XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCAoX3R5cGUsIF9wYXlsb2FkKSB7XG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBkaXNwYXRjaFxuICB2YXIgcmVmID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQpO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIHBheWxvYWQgPSByZWYucGF5bG9hZDtcblxuICB2YXIgZW50cnkgPSB0aGlzLl9hY3Rpb25zW3R5cGVdO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBhY3Rpb24gdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgcmV0dXJuIGVudHJ5Lmxlbmd0aCA+IDFcbiAgICA/IFByb21pc2UuYWxsKGVudHJ5Lm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlcihwYXlsb2FkKTsgfSkpXG4gICAgOiBlbnRyeVswXShwYXlsb2FkKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZSAoZm4pIHtcbiAgdmFyIHN1YnMgPSB0aGlzLl9zdWJzY3JpYmVycztcbiAgaWYgKHN1YnMuaW5kZXhPZihmbikgPCAwKSB7XG4gICAgc3Vicy5wdXNoKGZuKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpID0gc3Vicy5pbmRleE9mKGZuKTtcbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBzdWJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIHdhdGNoIChnZXR0ZXIsIGNiLCBvcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgYXNzZXJ0KHR5cGVvZiBnZXR0ZXIgPT09ICdmdW5jdGlvbicsIFwic3RvcmUud2F0Y2ggb25seSBhY2NlcHRzIGEgZnVuY3Rpb24uXCIpO1xuICByZXR1cm4gdGhpcy5fd2F0Y2hlclZNLiR3YXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiBnZXR0ZXIodGhpcyQxLnN0YXRlLCB0aGlzJDEuZ2V0dGVycyk7IH0sIGNiLCBvcHRpb25zKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnJlcGxhY2VTdGF0ZSA9IGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZSAoc3RhdGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuX3ZtLl9kYXRhLiQkc3RhdGUgPSBzdGF0ZTtcbiAgfSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZSAocGF0aCwgcmF3TW9kdWxlKSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXTsgfVxuICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKTtcbiAgdGhpcy5fbW9kdWxlcy5yZWdpc3RlcihwYXRoLCByYXdNb2R1bGUpO1xuICBpbnN0YWxsTW9kdWxlKHRoaXMsIHRoaXMuc3RhdGUsIHBhdGgsIHRoaXMuX21vZHVsZXMuZ2V0KHBhdGgpKTtcbiAgLy8gcmVzZXQgc3RvcmUgdG8gdXBkYXRlIGdldHRlcnMuLi5cbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHRoaXMuc3RhdGUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnVucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyTW9kdWxlIChwYXRoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG4gIGFzc2VydChBcnJheS5pc0FycmF5KHBhdGgpLCBcIm1vZHVsZSBwYXRoIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpO1xuICB0aGlzLl9tb2R1bGVzLnVucmVnaXN0ZXIocGF0aCk7XG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHRoaXMkMS5zdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIFZ1ZS5kZWxldGUocGFyZW50U3RhdGUsIHBhdGhbcGF0aC5sZW5ndGggLSAxXSk7XG4gIH0pO1xuICByZXNldFN0b3JlKHRoaXMpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLmhvdFVwZGF0ZSA9IGZ1bmN0aW9uIGhvdFVwZGF0ZSAobmV3T3B0aW9ucykge1xuICB0aGlzLl9tb2R1bGVzLnVwZGF0ZShuZXdPcHRpb25zKTtcbiAgcmVzZXRTdG9yZSh0aGlzLCB0cnVlKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5fd2l0aENvbW1pdCA9IGZ1bmN0aW9uIF93aXRoQ29tbWl0IChmbikge1xuICB2YXIgY29tbWl0dGluZyA9IHRoaXMuX2NvbW1pdHRpbmc7XG4gIHRoaXMuX2NvbW1pdHRpbmcgPSB0cnVlO1xuICBmbigpO1xuICB0aGlzLl9jb21taXR0aW5nID0gY29tbWl0dGluZztcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBTdG9yZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG5mdW5jdGlvbiByZXNldFN0b3JlIChzdG9yZSwgaG90KSB7XG4gIHN0b3JlLl9hY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX211dGF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHN0YXRlID0gc3RvcmUuc3RhdGU7XG4gIC8vIGluaXQgYWxsIG1vZHVsZXNcbiAgaW5zdGFsbE1vZHVsZShzdG9yZSwgc3RhdGUsIFtdLCBzdG9yZS5fbW9kdWxlcy5yb290LCB0cnVlKTtcbiAgLy8gcmVzZXQgdm1cbiAgcmVzZXRTdG9yZVZNKHN0b3JlLCBzdGF0ZSwgaG90KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRTdG9yZVZNIChzdG9yZSwgc3RhdGUsIGhvdCkge1xuICB2YXIgb2xkVm0gPSBzdG9yZS5fdm07XG5cbiAgLy8gYmluZCBzdG9yZSBwdWJsaWMgZ2V0dGVyc1xuICBzdG9yZS5nZXR0ZXJzID0ge307XG4gIHZhciB3cmFwcGVkR2V0dGVycyA9IHN0b3JlLl93cmFwcGVkR2V0dGVycztcbiAgdmFyIGNvbXB1dGVkID0ge307XG4gIGZvckVhY2hWYWx1ZSh3cmFwcGVkR2V0dGVycywgZnVuY3Rpb24gKGZuLCBrZXkpIHtcbiAgICAvLyB1c2UgY29tcHV0ZWQgdG8gbGV2ZXJhZ2UgaXRzIGxhenktY2FjaGluZyBtZWNoYW5pc21cbiAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZm4oc3RvcmUpOyB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdG9yZS5nZXR0ZXJzLCBrZXksIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuX3ZtW2tleV07IH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlIC8vIGZvciBsb2NhbCBnZXR0ZXJzXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHVzZSBhIFZ1ZSBpbnN0YW5jZSB0byBzdG9yZSB0aGUgc3RhdGUgdHJlZVxuICAvLyBzdXBwcmVzcyB3YXJuaW5ncyBqdXN0IGluIGNhc2UgdGhlIHVzZXIgaGFzIGFkZGVkXG4gIC8vIHNvbWUgZnVua3kgZ2xvYmFsIG1peGluc1xuICB2YXIgc2lsZW50ID0gVnVlLmNvbmZpZy5zaWxlbnQ7XG4gIFZ1ZS5jb25maWcuc2lsZW50ID0gdHJ1ZTtcbiAgc3RvcmUuX3ZtID0gbmV3IFZ1ZSh7XG4gICAgZGF0YToge1xuICAgICAgJCRzdGF0ZTogc3RhdGVcbiAgICB9LFxuICAgIGNvbXB1dGVkOiBjb21wdXRlZFxuICB9KTtcbiAgVnVlLmNvbmZpZy5zaWxlbnQgPSBzaWxlbnQ7XG5cbiAgLy8gZW5hYmxlIHN0cmljdCBtb2RlIGZvciBuZXcgdm1cbiAgaWYgKHN0b3JlLnN0cmljdCkge1xuICAgIGVuYWJsZVN0cmljdE1vZGUoc3RvcmUpO1xuICB9XG5cbiAgaWYgKG9sZFZtKSB7XG4gICAgaWYgKGhvdCkge1xuICAgICAgLy8gZGlzcGF0Y2ggY2hhbmdlcyBpbiBhbGwgc3Vic2NyaWJlZCB3YXRjaGVyc1xuICAgICAgLy8gdG8gZm9yY2UgZ2V0dGVyIHJlLWV2YWx1YXRpb24gZm9yIGhvdCByZWxvYWRpbmcuXG4gICAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9sZFZtLl9kYXRhLiQkc3RhdGUgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJldHVybiBvbGRWbS4kZGVzdHJveSgpOyB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsTW9kdWxlIChzdG9yZSwgcm9vdFN0YXRlLCBwYXRoLCBtb2R1bGUsIGhvdCkge1xuICB2YXIgaXNSb290ID0gIXBhdGgubGVuZ3RoO1xuICB2YXIgbmFtZXNwYWNlID0gc3RvcmUuX21vZHVsZXMuZ2V0TmFtZXNwYWNlKHBhdGgpO1xuXG4gIC8vIHJlZ2lzdGVyIGluIG5hbWVzcGFjZSBtYXBcbiAgaWYgKG5hbWVzcGFjZSkge1xuICAgIHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwW25hbWVzcGFjZV0gPSBtb2R1bGU7XG4gIH1cblxuICAvLyBzZXQgc3RhdGVcbiAgaWYgKCFpc1Jvb3QgJiYgIWhvdCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHJvb3RTdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIHZhciBtb2R1bGVOYW1lID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgIHN0b3JlLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgIFZ1ZS5zZXQocGFyZW50U3RhdGUsIG1vZHVsZU5hbWUsIG1vZHVsZS5zdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbG9jYWwgPSBtb2R1bGUuY29udGV4dCA9IG1ha2VMb2NhbENvbnRleHQoc3RvcmUsIG5hbWVzcGFjZSwgcGF0aCk7XG5cbiAgbW9kdWxlLmZvckVhY2hNdXRhdGlvbihmdW5jdGlvbiAobXV0YXRpb24sIGtleSkge1xuICAgIHZhciBuYW1lc3BhY2VkVHlwZSA9IG5hbWVzcGFjZSArIGtleTtcbiAgICByZWdpc3Rlck11dGF0aW9uKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgbXV0YXRpb24sIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hBY3Rpb24oZnVuY3Rpb24gKGFjdGlvbiwga2V5KSB7XG4gICAgdmFyIG5hbWVzcGFjZWRUeXBlID0gbmFtZXNwYWNlICsga2V5O1xuICAgIHJlZ2lzdGVyQWN0aW9uKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgYWN0aW9uLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoR2V0dGVyKGZ1bmN0aW9uIChnZXR0ZXIsIGtleSkge1xuICAgIHZhciBuYW1lc3BhY2VkVHlwZSA9IG5hbWVzcGFjZSArIGtleTtcbiAgICByZWdpc3RlckdldHRlcihzdG9yZSwgbmFtZXNwYWNlZFR5cGUsIGdldHRlciwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjaGlsZCwga2V5KSB7XG4gICAgaW5zdGFsbE1vZHVsZShzdG9yZSwgcm9vdFN0YXRlLCBwYXRoLmNvbmNhdChrZXkpLCBjaGlsZCwgaG90KTtcbiAgfSk7XG59XG5cbi8qKlxuICogbWFrZSBsb2NhbGl6ZWQgZGlzcGF0Y2gsIGNvbW1pdCwgZ2V0dGVycyBhbmQgc3RhdGVcbiAqIGlmIHRoZXJlIGlzIG5vIG5hbWVzcGFjZSwganVzdCB1c2Ugcm9vdCBvbmVzXG4gKi9cbmZ1bmN0aW9uIG1ha2VMb2NhbENvbnRleHQgKHN0b3JlLCBuYW1lc3BhY2UsIHBhdGgpIHtcbiAgdmFyIG5vTmFtZXNwYWNlID0gbmFtZXNwYWNlID09PSAnJztcblxuICB2YXIgbG9jYWwgPSB7XG4gICAgZGlzcGF0Y2g6IG5vTmFtZXNwYWNlID8gc3RvcmUuZGlzcGF0Y2ggOiBmdW5jdGlvbiAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgICAgdmFyIGFyZ3MgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgICAgdmFyIHBheWxvYWQgPSBhcmdzLnBheWxvYWQ7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3Mub3B0aW9ucztcbiAgICAgIHZhciB0eXBlID0gYXJncy50eXBlO1xuXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMucm9vdCkge1xuICAgICAgICB0eXBlID0gbmFtZXNwYWNlICsgdHlwZTtcbiAgICAgICAgaWYgKCFzdG9yZS5fYWN0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgYWN0aW9uIHR5cGU6IFwiICsgKGFyZ3MudHlwZSkgKyBcIiwgZ2xvYmFsIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaCh0eXBlLCBwYXlsb2FkKVxuICAgIH0sXG5cbiAgICBjb21taXQ6IG5vTmFtZXNwYWNlID8gc3RvcmUuY29tbWl0IDogZnVuY3Rpb24gKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICAgIHZhciBhcmdzID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICAgIHZhciBwYXlsb2FkID0gYXJncy5wYXlsb2FkO1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzLm9wdGlvbnM7XG4gICAgICB2YXIgdHlwZSA9IGFyZ3MudHlwZTtcblxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnJvb3QpIHtcbiAgICAgICAgdHlwZSA9IG5hbWVzcGFjZSArIHR5cGU7XG4gICAgICAgIGlmICghc3RvcmUuX211dGF0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgbXV0YXRpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RvcmUuY29tbWl0KHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXR0ZXJzIGFuZCBzdGF0ZSBvYmplY3QgbXVzdCBiZSBnb3R0ZW4gbGF6aWx5XG4gIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIGNoYW5nZWQgYnkgdm0gdXBkYXRlXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxvY2FsLCB7XG4gICAgZ2V0dGVyczoge1xuICAgICAgZ2V0OiBub05hbWVzcGFjZVxuICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLmdldHRlcnM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYWtlTG9jYWxHZXR0ZXJzKHN0b3JlLCBuYW1lc3BhY2UpOyB9XG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXROZXN0ZWRTdGF0ZShzdG9yZS5zdGF0ZSwgcGF0aCk7IH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2NhbFxufVxuXG5mdW5jdGlvbiBtYWtlTG9jYWxHZXR0ZXJzIChzdG9yZSwgbmFtZXNwYWNlKSB7XG4gIHZhciBnZXR0ZXJzUHJveHkgPSB7fTtcblxuICB2YXIgc3BsaXRQb3MgPSBuYW1lc3BhY2UubGVuZ3RoO1xuICBPYmplY3Qua2V5cyhzdG9yZS5nZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgLy8gc2tpcCBpZiB0aGUgdGFyZ2V0IGdldHRlciBpcyBub3QgbWF0Y2ggdGhpcyBuYW1lc3BhY2VcbiAgICBpZiAodHlwZS5zbGljZSgwLCBzcGxpdFBvcykgIT09IG5hbWVzcGFjZSkgeyByZXR1cm4gfVxuXG4gICAgLy8gZXh0cmFjdCBsb2NhbCBnZXR0ZXIgdHlwZVxuICAgIHZhciBsb2NhbFR5cGUgPSB0eXBlLnNsaWNlKHNwbGl0UG9zKTtcblxuICAgIC8vIEFkZCBhIHBvcnQgdG8gdGhlIGdldHRlcnMgcHJveHkuXG4gICAgLy8gRGVmaW5lIGFzIGdldHRlciBwcm9wZXJ0eSBiZWNhdXNlXG4gICAgLy8gd2UgZG8gbm90IHdhbnQgdG8gZXZhbHVhdGUgdGhlIGdldHRlcnMgaW4gdGhpcyB0aW1lLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnZXR0ZXJzUHJveHksIGxvY2FsVHlwZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5nZXR0ZXJzW3R5cGVdOyB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZ2V0dGVyc1Byb3h5XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTXV0YXRpb24gKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCkge1xuICB2YXIgZW50cnkgPSBzdG9yZS5fbXV0YXRpb25zW3R5cGVdIHx8IChzdG9yZS5fbXV0YXRpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRNdXRhdGlvbkhhbmRsZXIgKHBheWxvYWQpIHtcbiAgICBoYW5kbGVyKGxvY2FsLnN0YXRlLCBwYXlsb2FkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQWN0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpIHtcbiAgdmFyIGVudHJ5ID0gc3RvcmUuX2FjdGlvbnNbdHlwZV0gfHwgKHN0b3JlLl9hY3Rpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRBY3Rpb25IYW5kbGVyIChwYXlsb2FkLCBjYikge1xuICAgIHZhciByZXMgPSBoYW5kbGVyKHtcbiAgICAgIGRpc3BhdGNoOiBsb2NhbC5kaXNwYXRjaCxcbiAgICAgIGNvbW1pdDogbG9jYWwuY29tbWl0LFxuICAgICAgZ2V0dGVyczogbG9jYWwuZ2V0dGVycyxcbiAgICAgIHN0YXRlOiBsb2NhbC5zdGF0ZSxcbiAgICAgIHJvb3RHZXR0ZXJzOiBzdG9yZS5nZXR0ZXJzLFxuICAgICAgcm9vdFN0YXRlOiBzdG9yZS5zdGF0ZVxuICAgIH0sIHBheWxvYWQsIGNiKTtcbiAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XG4gICAgICByZXMgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICB9XG4gICAgaWYgKHN0b3JlLl9kZXZ0b29sSG9vaykge1xuICAgICAgcmV0dXJuIHJlcy5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHN0b3JlLl9kZXZ0b29sSG9vay5lbWl0KCd2dWV4OmVycm9yJywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJHZXR0ZXIgKHN0b3JlLCB0eXBlLCByYXdHZXR0ZXIsIGxvY2FsKSB7XG4gIGlmIChzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0pIHtcbiAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSBkdXBsaWNhdGUgZ2V0dGVyIGtleTogXCIgKyB0eXBlKSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgc3RvcmUuX3dyYXBwZWRHZXR0ZXJzW3R5cGVdID0gZnVuY3Rpb24gd3JhcHBlZEdldHRlciAoc3RvcmUpIHtcbiAgICByZXR1cm4gcmF3R2V0dGVyKFxuICAgICAgbG9jYWwuc3RhdGUsIC8vIGxvY2FsIHN0YXRlXG4gICAgICBsb2NhbC5nZXR0ZXJzLCAvLyBsb2NhbCBnZXR0ZXJzXG4gICAgICBzdG9yZS5zdGF0ZSwgLy8gcm9vdCBzdGF0ZVxuICAgICAgc3RvcmUuZ2V0dGVycyAvLyByb290IGdldHRlcnNcbiAgICApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVN0cmljdE1vZGUgKHN0b3JlKSB7XG4gIHN0b3JlLl92bS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YS4kJHN0YXRlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBhc3NlcnQoc3RvcmUuX2NvbW1pdHRpbmcsIFwiRG8gbm90IG11dGF0ZSB2dWV4IHN0b3JlIHN0YXRlIG91dHNpZGUgbXV0YXRpb24gaGFuZGxlcnMuXCIpO1xuICB9LCB7IGRlZXA6IHRydWUsIHN5bmM6IHRydWUgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE5lc3RlZFN0YXRlIChzdGF0ZSwgcGF0aCkge1xuICByZXR1cm4gcGF0aC5sZW5ndGhcbiAgICA/IHBhdGgucmVkdWNlKGZ1bmN0aW9uIChzdGF0ZSwga2V5KSB7IHJldHVybiBzdGF0ZVtrZXldOyB9LCBzdGF0ZSlcbiAgICA6IHN0YXRlXG59XG5cbmZ1bmN0aW9uIHVuaWZ5T2JqZWN0U3R5bGUgKHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpIHtcbiAgaWYgKGlzT2JqZWN0KHR5cGUpICYmIHR5cGUudHlwZSkge1xuICAgIG9wdGlvbnMgPSBwYXlsb2FkO1xuICAgIHBheWxvYWQgPSB0eXBlO1xuICAgIHR5cGUgPSB0eXBlLnR5cGU7XG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnLCAoXCJFeHBlY3RzIHN0cmluZyBhcyB0aGUgdHlwZSwgYnV0IGZvdW5kIFwiICsgKHR5cGVvZiB0eXBlKSArIFwiLlwiKSk7XG5cbiAgcmV0dXJuIHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCwgb3B0aW9uczogb3B0aW9ucyB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGwgKF9WdWUpIHtcbiAgaWYgKFZ1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnW3Z1ZXhdIGFscmVhZHkgaW5zdGFsbGVkLiBWdWUudXNlKFZ1ZXgpIHNob3VsZCBiZSBjYWxsZWQgb25seSBvbmNlLidcbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIFZ1ZSA9IF9WdWU7XG4gIGFwcGx5TWl4aW4oVnVlKTtcbn1cblxuLy8gYXV0byBpbnN0YWxsIGluIGRpc3QgbW9kZVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgaW5zdGFsbCh3aW5kb3cuVnVlKTtcbn1cblxudmFyIG1hcFN0YXRlID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIHN0YXRlcykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChzdGF0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRTdGF0ZSAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLiRzdG9yZS5zdGF0ZTtcbiAgICAgIHZhciBnZXR0ZXJzID0gdGhpcy4kc3RvcmUuZ2V0dGVycztcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwU3RhdGUnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gbW9kdWxlLmNvbnRleHQuc3RhdGU7XG4gICAgICAgIGdldHRlcnMgPSBtb2R1bGUuY29udGV4dC5nZXR0ZXJzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuY2FsbCh0aGlzLCBzdGF0ZSwgZ2V0dGVycylcbiAgICAgICAgOiBzdGF0ZVt2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBNdXRhdGlvbnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgbXV0YXRpb25zKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKG11dGF0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICB2YWwgPSBuYW1lc3BhY2UgKyB2YWw7XG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRNdXRhdGlvbiAoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBNdXRhdGlvbnMnLCBuYW1lc3BhY2UpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmNvbW1pdC5hcHBseSh0aGlzLiRzdG9yZSwgW3ZhbF0uY29uY2F0KGFyZ3MpKVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcEdldHRlcnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgZ2V0dGVycykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChnZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHZhbCA9IG5hbWVzcGFjZSArIHZhbDtcbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZEdldHRlciAoKSB7XG4gICAgICBpZiAobmFtZXNwYWNlICYmICFnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcEdldHRlcnMnLCBuYW1lc3BhY2UpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCEodmFsIGluIHRoaXMuJHN0b3JlLmdldHRlcnMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gZ2V0dGVyOiBcIiArIHZhbCkpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW3ZhbF1cbiAgICB9O1xuICAgIC8vIG1hcmsgdnVleCBnZXR0ZXIgZm9yIGRldnRvb2xzXG4gICAgcmVzW2tleV0udnVleCA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcEFjdGlvbnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgYWN0aW9ucykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHZhbCA9IG5hbWVzcGFjZSArIHZhbDtcbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZEFjdGlvbiAoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBBY3Rpb25zJywgbmFtZXNwYWNlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5kaXNwYXRjaC5hcHBseSh0aGlzLiRzdG9yZSwgW3ZhbF0uY29uY2F0KGFyZ3MpKVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuZnVuY3Rpb24gbm9ybWFsaXplTWFwIChtYXApIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobWFwKVxuICAgID8gbWFwLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBrZXkgfSk7IH0pXG4gICAgOiBPYmplY3Qua2V5cyhtYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBtYXBba2V5XSB9KTsgfSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZXNwYWNlIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWFwKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICBtYXAgPSBuYW1lc3BhY2U7XG4gICAgICBuYW1lc3BhY2UgPSAnJztcbiAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZS5jaGFyQXQobmFtZXNwYWNlLmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICAgIG5hbWVzcGFjZSArPSAnLyc7XG4gICAgfVxuICAgIHJldHVybiBmbihuYW1lc3BhY2UsIG1hcClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2R1bGVCeU5hbWVzcGFjZSAoc3RvcmUsIGhlbHBlciwgbmFtZXNwYWNlKSB7XG4gIHZhciBtb2R1bGUgPSBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcFtuYW1lc3BhY2VdO1xuICBpZiAoIW1vZHVsZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIG1vZHVsZSBuYW1lc3BhY2Ugbm90IGZvdW5kIGluIFwiICsgaGVscGVyICsgXCIoKTogXCIgKyBuYW1lc3BhY2UpKTtcbiAgfVxuICByZXR1cm4gbW9kdWxlXG59XG5cbnZhciBpbmRleF9lc20gPSB7XG4gIFN0b3JlOiBTdG9yZSxcbiAgaW5zdGFsbDogaW5zdGFsbCxcbiAgdmVyc2lvbjogJzIuMi4xJyxcbiAgbWFwU3RhdGU6IG1hcFN0YXRlLFxuICBtYXBNdXRhdGlvbnM6IG1hcE11dGF0aW9ucyxcbiAgbWFwR2V0dGVyczogbWFwR2V0dGVycyxcbiAgbWFwQWN0aW9uczogbWFwQWN0aW9uc1xufTtcblxuZXhwb3J0IHsgU3RvcmUsIG1hcFN0YXRlLCBtYXBNdXRhdGlvbnMsIG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfTtleHBvcnQgZGVmYXVsdCBpbmRleF9lc207XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVleC9kaXN0L3Z1ZXguZXNtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XG5cbmNsYXNzIERvdWJsZU1pbmlTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ2RtdCc7XG4gICAgICAgIHRoaXMubGFiZWwgPSAnRG91YmxlIE1pbmknO1xuICAgICAgICB0aGlzLnJvdXRpbmVLZXlzID0gWydwcmVsaW1fcGFzc18xJywgJ3ByZWxpbV9wYXNzXzInLCAnZmluYWxfcGFzc18zJywgJ2ZpbmFsX3Bhc3NfNCddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG91YmxlTWluaVNjb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvRG91YmxlTWluaVNjb3JlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XG5cbmNsYXNzIFRyYW1wb2xpbmVTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ3RyYW1wb2xpbmUnO1xuICAgICAgICB0aGlzLmxhYmVsID0gJ1RyYW1wb2xpbmUnO1xuICAgICAgICB0aGlzLnJvdXRpbmVLZXlzID0gWydwcmVsaW1fY29tcHVsc29yeScsICdwcmVsaW1fb3B0aW9uYWwnLCAnc2VtaV9maW5hbF9vcHRpb25hbCcsICdmaW5hbF9vcHRpb25hbCddO1xuXG4gICAgICAgIHRoaXMuYXR0cnMudGltZV9vZl9mbGlnaHQgPSB7XG4gICAgICAgICAgICBvcmRlcjogMTAsXG4gICAgICAgICAgICBsYWJlbDogJ1RPRicsXG4gICAgICAgICAgICB0aXRsZTogJ1RpbWUgb2YgRmxpZ2h0JyxcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdHRycy5ob3Jpem9udGFsX2Rpc3BsYWNlbWVudCA9IHtcbiAgICAgICAgICAgIG9yZGVyOiAxMSxcbiAgICAgICAgICAgIGxhYmVsOiAnSEQnLFxuICAgICAgICAgICAgdGl0bGU6ICdIb3Jpem9udGFsIERpc3BsYWNlbWVudCcsXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFtcG9saW5lU2NvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9UcmFtcG9saW5lU2NvcmUuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcblxuY2xhc3MgVHVtYmxpbmdTY29yZSBleHRlbmRzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNjaXBsaW5lID0gJ3R1bWJsaW5nJztcbiAgICAgICAgdGhpcy5sYWJlbCA9ICdUdW1ibGluZyc7XG4gICAgICAgIHRoaXMucm91dGluZUtleXMgPSBbJ3ByZWxpbV9wYXNzXzEnLCAncHJlbGltX3Bhc3NfMicsICdmaW5hbF9wYXNzXzMnLCAnZmluYWxfcGFzc180J107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUdW1ibGluZ1Njb3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvVHVtYmxpbmdTY29yZS5qcyIsIlxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlcyBWdWUgYW5kIG90aGVyIGxpYnJhcmllcy4gSXQgaXMgYSBncmVhdCBzdGFydGluZyBwb2ludCB3aGVuXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5pbXBvcnQgVnVlMkZpbHRlcnMgZnJvbSAndnVlMi1maWx0ZXJzJztcbmltcG9ydCBWZWVWYWxpZGF0ZSBmcm9tICd2ZWUtdmFsaWRhdGUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCd2aWRlby11cGxvYWQnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvVmlkZW9VcGxvYWQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnbXVsdGlwbGUtdmlkZW8tdXBsb2FkJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndmlkZW8tcGxheWVyJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3ZpZGVvLXZvdGluZycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd2aWRlby1jb21tZW50cycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2NvbXBldGl0aW9uLWZvcm0nLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3JvdXRpbmUtdmlkZW8nLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3RyYW1wb2xpbmUtc2NvcmUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdkbXQtc2NvcmUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd0dW1ibGluZy1zY29yZScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdzbWFsbC12aWRlbycsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZScpKTtcblxuVnVlLnVzZShyZXF1aXJlKCd2dWUtcmVzb3VyY2UnKSk7XG5WdWUudXNlKFZ1ZTJGaWx0ZXJzKTtcblZ1ZS51c2UocmVxdWlyZSgnQHdlYnNhbm92YS92dWUtdXBsb2FkJykpO1xuVnVlLnVzZShWZWVWYWxpZGF0ZSk7XG5cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxud2luZG93LkV2ZW50ID0gbmV3IFZ1ZSgpO1xuXG5WdWUudXNlKHtcbiAgICBpbnN0YWxsOiAoVnVlLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIFZ1ZS5nZXRKc29uID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuVnVlLmh0dHAuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIGRhdGE6IHdpbmRvdy5MYXJhdmVsLFxuICAgIHN0b3JlXG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwidmFsaWRhdGVCZWZvcmVTdWJtaXRcIj5cblxuICAgICAgICA8IS0tIENvbXBldGl0aW9uIHRpdGxlIC0tPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0aXRsZScpfVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+Q29tcGV0aXRpb24gVGl0bGU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8cCA6Y2xhc3M9XCJ7J2NvbnRyb2wnOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LXZhbGlkYXRlOnRpdGxlLmluaXRpYWw9XCIncmVxdWlyZWQnXCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCd0aXRsZScpXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3JzLmZpcnN0KCd0aXRsZScpIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQ29tcGV0aXRpb24gTG9jYXRpb24gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibG9jYXRpb25cIiBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIj5Mb2NhdGlvbjwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImxvY2F0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJsb2NhdGlvblwiIG5hbWU9XCJsb2NhdGlvblwiPlxuXG4gICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJmYWxzZVwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RXJyb3IgbWVzc2FnZTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENvbXBldGl0aW9uIFN0YXJ0IERhdGUgLS0+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwieydmb3JtLWdyb3VwJzogdHJ1ZSwgJ2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKX1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGFydF9kYXRlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+U3RhcnQgRGF0ZTwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxwIDpjbGFzcz1cInsnY29udHJvbCc6IHRydWV9XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHYtdmFsaWRhdGU6c3RhcnRfZGF0ZS5pbml0aWFsPVwiJ2RhdGVfZm9ybWF0OllZWVktTU0tREQnXCIgaWQ9XCJzdGFydF9kYXRlXCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJzdGFydF9kYXRlXCIgbmFtZT1cInN0YXJ0X2RhdGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCdzdGFydF9kYXRlJylcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QoJ3N0YXJ0X2RhdGUnKSB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBDb21wZXRpdGlvbiBFbmQgRGF0ZSAtLT5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7J2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZW5kX2RhdGUnKX1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbmRfZGF0ZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPlN0YXJ0IERhdGU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8cCA6Y2xhc3M9XCJ7J2NvbnRyb2wnOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LXZhbGlkYXRlOmVuZF9kYXRlLmluaXRpYWw9XCInZGF0ZV9mb3JtYXQ6WVlZWS1NTS1ERCdcIiBpZD1cImVuZF9kYXRlXCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJlbmRfZGF0ZVwiIG5hbWU9XCJlbmRfZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImVycm9ycy5oYXMoJ2VuZF9kYXRlJylcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QoJ2VuZF9kYXRlJykgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gRXZlbnQgc2VsZWN0aW9uIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtc2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoND5FdmVudHM8L2g0PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0cmFtcG9saW5lXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInRyYW1wb2xpbmVcIiB2LW1vZGVsPVwidHJhbXBvbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICBUcmFtcG9saW5lXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwidHJhbXBvbGluZVwiIEBjbGljaz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsID0gIXRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1zaG93PVwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tb2tcIj48L2k+IFNlbWktRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInRyYW1wb2xpbmVcIiBAY2xpY2s9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsID0gIXRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LXNob3c9XCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9pPiBGaW5hbHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwidHJhbXBvbGluZVwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHJhbXBDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIkNvbXB1bHNvcnlcIiByb3V0aW5lLWtleT1cInByZWxpbV9jb21wdWxzb3J5XCIgQHNjb3JlY2hhbmdlZD1cInVwZGF0ZUFsbFNjb3Jlc1wiPjwvdHJhbXBvbGluZS1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHJhbXBDb2xTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbXBvbGluZS1zY29yZSB0aXRsZT1cIlByZWxpbSBPcHRpb25hbFwiIHJvdXRpbmUta2V5PVwicHJlbGltX29wdGlvbmFsXCIgQHNjb3JlY2hhbmdlZD1cInVwZGF0ZUFsbFNjb3Jlc1wiPjwvdHJhbXBvbGluZS1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgdHJhbXBDb2xTaXplXCIgdi1zaG93PVwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFtcG9saW5lLXNjb3JlIHRpdGxlPVwiU2VtaS1GaW5hbFwiIHJvdXRpbmUta2V5PVwic2VtaV9maW5hbF9vcHRpb25hbFwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L3RyYW1wb2xpbmUtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidjb2wtbWQtJyArIHRyYW1wQ29sU2l6ZVwiIHYtc2hvdz1cInRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFtcG9saW5lLXNjb3JlIHRpdGxlPVwiRmluYWwgT3B0aW9uYWxcIiByb3V0aW5lLWtleT1cImZpbmFsX29wdGlvbmFsXCIgQHNjb3JlY2hhbmdlZD1cInVwZGF0ZUFsbFNjb3Jlc1wiPjwvdHJhbXBvbGluZS1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRtdFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkbXRcIiB2LW1vZGVsPVwiZG10XCI+XG4gICAgICAgICAgICAgICAgICAgIERvdWJsZSBNaW5pXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1zaG93PVwiZG10XCIgQGNsaWNrPVwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwgPSAhZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LXNob3c9XCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvaT4gRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImRtdFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRtdC1zY29yZSB0aXRsZT1cIlBhc3MgMVwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfMVwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRtdC1zY29yZSB0aXRsZT1cIlBhc3MgMlwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfMlwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L2RtdC1zY29yZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2NvbC1tZC0nICsgZG10Q29sU2l6ZVwiIHYtc2hvdz1cImRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZG10LXNjb3JlIHRpdGxlPVwiUGFzcyAzXCIgcm91dGluZS1rZXk9XCJwcmVsaW1fcGFzc18zXCIgQHNjb3JlY2hhbmdlZD1cInVwZGF0ZUFsbFNjb3Jlc1wiPjwvZG10LXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyBkbXRDb2xTaXplXCIgdi1zaG93PVwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbXQtc2NvcmUgdGl0bGU9XCJQYXNzIDRcIiByb3V0aW5lLWtleT1cInByZWxpbV9wYXNzXzRcIiBAc2NvcmVjaGFuZ2VkPVwidXBkYXRlQWxsU2NvcmVzXCI+PC9kbXQtc2NvcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0dW1ibGluZ1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ0dW1ibGluZ1wiIHYtbW9kZWw9XCJ0dW1ibGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICBUdW1ibGluZ1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cInR1bWJsaW5nXCIgQGNsaWNrPVwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsID0gIXR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtc2hvdz1cInR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvaT4gRmluYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtc2hvdz1cInR1bWJsaW5nXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgMVwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfMVwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgMlwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfMlwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIiB2LXNob3c9XCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgM1wiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfM1wiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCInY29sLW1kLScgKyB0dW1ibGluZ0NvbFNpemVcIiB2LXNob3c9XCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0dW1ibGluZy1zY29yZSB0aXRsZT1cIlBhc3MgNFwiIHJvdXRpbmUta2V5PVwicHJlbGltX3Bhc3NfNFwiIEBzY29yZWNoYW5nZWQ9XCJ1cGRhdGVBbGxTY29yZXNcIj48L3R1bWJsaW5nLXNjb3JlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIDpkaXNhYmxlZD1cImVycm9ycy5hbnkoKSB8fCBldmVudHNJbnZhbGlkKClcIj5TdWJtaXQgQ29tcGV0aXRpb248L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbiAgICBpbXBvcnQgVHJhbXBvbGluZVNjb3JlIGZyb20gJy4uL1RyYW1wb2xpbmVTY29yZSc7XG4gICAgaW1wb3J0IERvdWJsZU1pbmlTY29yZSBmcm9tICcuLi9Eb3VibGVNaW5pU2NvcmUnO1xuICAgIGltcG9ydCBUdW1ibGluZ1Njb3JlIGZyb20gJy4uL1R1bWJsaW5nU2NvcmUnO1xuXG4gICAgY29uc3QgZGlzY2lwbGluZU1hcCA9IHtcbiAgICAgICAgdHJhbXBvbGluZTogJ3RyYW1wb2xpbmVSb3V0aW5lcycsXG4gICAgICAgIGRtdDogJ2RvdWJsZU1pbmlQYXNzZXMnLFxuICAgICAgICB0dW1ibGluZzogJ3R1bWJsaW5nUGFzc2VzJyxcbiAgICB9XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW1wb2xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRtdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHVtYmxpbmc6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgZXZlbnRWYWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0cmFtcG9saW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZG10OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdHVtYmxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB0cmFtcG9saW5lUm91dGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NlbWlGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNob3dGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3VibGVNaW5pUGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0dW1ibGluZ1Bhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93RmluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb21wZXRpdGlvbklkOiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBldGl0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnTE9BRF9DT01QRVRJVElPTicsIHRoaXMuY29tcGV0aXRpb25JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRyYW1wb2xpbmVSb3V0aW5lcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudHJhbXBvbGluZVJvdXRpbmVzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG91YmxlTWluaVBhc3NlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZG91YmxlTWluaVBhc3Nlc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR1bWJsaW5nUGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50dW1ibGluZ1Bhc3Nlc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudGl0bGU7IH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1RJVExFJywgdmFsdWUpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmxvY2F0aW9uOyB9LFxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkgeyB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9MT0NBVElPTicsIHZhbHVlKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnRfZGF0ZToge1xuICAgICAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnN0YXJ0X2RhdGU7IH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1NUQVJUX0RBVEUnLCB2YWx1ZSkgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZF9kYXRlOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZW5kX2RhdGU7IH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7IHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0VORF9EQVRFJywgdmFsdWUpIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRyYW1wQ29sU2l6ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsICYmIHRoaXMudHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICczJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbCB8fCB0aGlzLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnNCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc2JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG10Q29sU2l6ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwpID8gJzMnIDogJzYnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR1bWJsaW5nQ29sU2l6ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMudHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsKSA/ICczJyA6ICc2JztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZXZlbnRzSW52YWxpZCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCF0aGlzLmV2ZW50VmFsaWRhdGlvbnMudHJhbXBvbGluZSAmJiAhdGhpcy5ldmVudFZhbGlkYXRpb25zLmRtdCAmJiAhdGhpcy5ldmVudFZhbGlkYXRpb25zLnR1bWJsaW5nKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGVBbGxTY29yZXMoJGV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSAkZXZlbnQuc2NvcmU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc2NpcGxpbmUgPSBkaXNjaXBsaW5lTWFwW3Njb3JlLmRpc2NpcGxpbmVdO1xuXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50cmFtcG9saW5lUm91dGluZXNbJ3ByZWxpbV9jb21wdWxzb3J5J10gPSB7ZXhlY3V0aW9uOiAuLi4sIGRpZmZpY3VsdHk6IC4uLiwgZXRjLn1cbiAgICAgICAgICAgICAgICB0aGlzW2Rpc2NpcGxpbmVdWyRldmVudC5yb3V0aW5lS2V5XSA9IHNjb3JlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0V2ZW50cyhzY29yZS5kaXNjaXBsaW5lLCB0aGlzW2Rpc2NpcGxpbmVdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXRDb21wZXRpdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cktleXMgPSBbJ3RpdGxlJywgJ2xvY2F0aW9uJywgJ3N0YXJ0X2RhdGUnLCAnZW5kX2RhdGUnLCAndHJhbXBvbGluZScsICdkbXQnLCAndHVtYmxpbmcnLCAndHJhbXBvbGluZVJvdXRpbmVzJywgJ2RvdWJsZU1pbmlQYXNzZXMnLCAndHVtYmxpbmdQYXNzZXMnXTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cnMgPSB7fTtcblxuICAgICAgICAgICAgICAgIGF0dHJLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhdHRyc1trZXldID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvY29tcGV0aXRpb25zJywgYXR0cnMpLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvY29tcGV0aXRpb25zJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNoZWNrRXZlbnRzKGV2ZW50LCBzY29yZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXNbZXZlbnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgPT09ICd0cmFtcG9saW5lJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGluZXMgPSBbJ3ByZWxpbV9jb21wdWxzb3J5JywgJ3ByZWxpbV9vcHRpb25hbCcsICdzZW1pX2ZpbmFsX29wdGlvbmFsJywgJ2ZpbmFsX29wdGlvbmFsJ107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRpbmVzID0gWydwcmVsaW1fcGFzc18xJywgJ3ByZWxpbV9wYXNzXzInLCAnZmluYWxfcGFzc18zJywgJ2ZpbmFsX3Bhc3NfNCddO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdXRpbmUgb2Ygcm91dGluZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3Jlcy5oYXNPd25Qcm9wZXJ0eShyb3V0aW5lKSAmJiBzY29yZXNbcm91dGluZV0uaGFzU2NvcmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFZhbGlkYXRpb25zW2V2ZW50XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50VmFsaWRhdGlvbnNbZXZlbnRdID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWxpZGF0ZUJlZm9yZVN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRDb21wZXRpdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBjb3JyZWN0IHRoZSBlcnJvcnMuJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cblxuICAgIGltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJ3ZlZS12YWxpZGF0ZSc7XG4gICAgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAgICAgZW46IHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbXBldGl0aW9uIFRpdGxlJyxcbiAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgICAgICAgICAgICAgZW5kX2RhdGU6ICdFbmQgRGF0ZScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIFZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5KGRpY3Rpb25hcnkpO1xuICAgIFZhbGlkYXRvci5pbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzKG1vbWVudCk7XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ29tcGV0aXRpb25Gb3JtLnZ1ZT8zM2YwOGIzMiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlVwbG9hZCBZb3VyIFZpZGVvczwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV2ZW50XCI+RXZlbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV2ZW50XCIgdi1tb2RlbD1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cmFtcG9saW5lXCI+VHJhbXBvbGluZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZG91YmxlIG1pbmlcIj5Eb3VibGUtbWluaTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHVtYmxpbmdcIj5UdW1ibGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInZpc2liaWxpdHlcIj5WaXNpYmlsaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ2aXNpYmlsaXR5XCIgdi1tb2RlbD1cInZpc2liaWxpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaXZhdGVcIj5Qcml2YXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1bmxpc3RlZFwiPlVubGlzdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwdWJsaWNcIj5QdWJsaWM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtc2hvdz1cIiFxdWV1ZWRcIiBAY2xpY2s9XCIkdXBsb2FkLnNlbGVjdCgndmlkZW8tdXBsb2FkJylcIiA6ZGlzYWJsZWQ9XCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgVmlkZW9zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCJxdWV1ZWRcIiBAY2xpY2s9XCIkdXBsb2FkLnN0YXJ0KCd2aWRlby11cGxvYWQnKVwiIDpkaXNhYmxlZD1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIoKSA9PiB7JHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkJyk7cXVldWVkID0gZmFsc2V9XCIgOmRpc2FibGVkPVwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1wcm9ncmVzcyBwcm9ncmVzc1wiIHYtc2hvdz1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5wZXJjZW50Q29tcGxldGUgKyAnJTsnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykucGVyY2VudENvbXBsZXRlIH19JSBDb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiR1cGxvYWQuZXJyb3JzKCd2aWRlby11cGxvYWQnKS5sZW5ndGhcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHVwbG9hZC5lcnJvcnMoJ3ZpZGVvLXVwbG9hZCcpWzBdLm1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLXJlc3VsdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHYtc2hvdz1cIiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbCBsYWJlbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoIH19IHt7ICR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggfCBwbHVyYWxpemUoJ2ZpbGUnKSB9fSByZWFkeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidG9nZ2xlU2hvd1F1ZXVlZFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1pZj1cInNob3dRdWV1ZWRGaWxlc1wiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LXVwXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1pZj1cIiFzaG93UXVldWVkRmlsZXNcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWVudS1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHYtc2hvdz1cInNob3dRdWV1ZWRGaWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJmaWxlIGluICR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlsZS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJmaWxlIGluICR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLmNvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImZpbGUuZXJyb3JzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1kYW5nZXJcIj57eyBmaWxlLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWxlLmVycm9yc1swXS5tZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFmaWxlLmVycm9ycy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZGVkIHN1Y2Nlc3NmdWxseS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiR1cGxvYWQubmV3KCd2aWRlby11cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgbWF4RmlsZXM6IDIwLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1heFNpemVQZXJGaWxlOiAyMDQ4MDAsIC8vIDIwMCBNQlxuICAgICAgICAgICAgICAgIHN0YXJ0T25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IFsnbXA0JywgJ3dlYm0nLCAnYXZpJywgJ2FzZicsICd3bXYnLCAnbXBlZ3RzJywgJ21vdicsICdmbHYnLCAnbWt2JywgJzNncCddLFxuICAgICAgICAgICAgICAgIGh0dHA6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYm9keS5hcHBlbmQoJ3Zpc2liaWxpdHknLCB0aGlzLnZpc2liaWxpdHkpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmJvZHkuYXBwZW5kKCdldmVudCcsIHRoaXMuZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0KGRhdGEudXJsLCBkYXRhLmJvZHksIHtwcm9ncmVzczogZGF0YS5wcm9ncmVzc30pLnRoZW4oZGF0YS5zdWNjZXNzLCBkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uUXVldWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1F1ZXVlZEZpbGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdGFydCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UXVldWVkRmlsZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy92aWRlb3MnO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25FbmQoKSB7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHF1ZXVlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1F1ZXVlZEZpbGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZScsXG5cbiAgICAgICAgICAgICAgICBldmVudDogJ3RyYW1wb2xpbmUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRvZ2dsZVNob3dRdWV1ZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UXVldWVkRmlsZXMgPSAhdGhpcy5zaG93UXVldWVkRmlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkJywge1xuICAgICAgICAgICAgICAgIHVybDogJy91cGxvYWQvbXVsdGlwbGUnLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlczogMCxcbiAgICAgICAgICAgICAgICBkcm9wem9uZUlkOiAndmlkZW8tdXBsb2FkLWRyb3B6b25lJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLiR1cGxvYWQucmVzZXQoJ3ZpZGVvLXVwbG9hZCcsIHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUlkOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTXVsdGlwbGVWaWRlb1VwbG9hZC52dWU/NjgyZjBmYWEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCIhdXBsb2FkZWRcIiBAY2xpY2s9XCIkdXBsb2FkLnNlbGVjdCgndmlkZW8tdXBsb2FkLScrcm91dGluZUtleSlcIiA6ZGlzYWJsZWQ9XCIkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZC0nK3JvdXRpbmVLZXkpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXhzXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBhcGVyY2xpcFwiPjwvaT4gQXR0YWNoIFZpZGVvXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxzcGFuIHYtc2hvdz1cInVwbG9hZGVkXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZWNrXCI+PC9pPiB7eyBmaWxlbmFtZSB9fSBhdHRhY2hlZC48L3NwYW4+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1wcm9ncmVzcyBwcm9ncmVzc1wiIHYtc2hvdz1cIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkLScrcm91dGluZUtleSkuc3RhdHVzID09PSAnc2VuZGluZydcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyAkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZC0nK3JvdXRpbmVLZXkpLnBlcmNlbnRDb21wbGV0ZSArICclOydcIj5cbiAgICAgICAgICAgICAgICB7eyAkdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZC0nK3JvdXRpbmVLZXkpLnBlcmNlbnRDb21wbGV0ZSB9fSUgQ29tcGxldGVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICByb3V0aW5lS2V5OiBudWxsLFxuICAgICAgICAgICAgZGlzY2lwbGluZTogbnVsbCxcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5uZXcoJ3ZpZGVvLXVwbG9hZC0nK3RoaXMucm91dGluZUtleSwge1xuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1heEZpbGVzOiAxLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtYXhTaXplUGVyRmlsZTogMjA0ODAwLCAvLyAyMDAgTUJcbiAgICAgICAgICAgICAgICBzdGFydE9uU2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IFsnbXA0JywgJ3dlYm0nLCAnYXZpJywgJ2FzZicsICd3bXYnLCAnbXBlZ3RzJywgJ21vdicsICdmbHYnLCAnbWt2JywgJzNncCddLFxuICAgICAgICAgICAgICAgIGh0dHA6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYm9keS5hcHBlbmQoJ2V2ZW50JywgdGhpcy5kaXNjaXBsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdChkYXRhLnVybCwgZGF0YS5ib2R5LCB7cHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3N9KS50aGVuKGRhdGEuc3VjY2VzcywgZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndmlkZW8tdXBsb2FkZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogcmVzcG9uc2UuZGF0YS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY2lwbGluZTogdGhpcy5kaXNjaXBsaW5lLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlbmFtZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS50aXRsZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkLScrdGhpcy5yb3V0aW5lS2V5LCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3VwbG9hZC9tdWx0aXBsZScsXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGVzOiAwLFxuICAgICAgICAgICAgICAgIGRyb3B6b25lSWQ6ICd2aWRlby11cGxvYWQtZHJvcHpvbmUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwbG9hZC5yZXNldCgndmlkZW8tdXBsb2FkLScrdGhpcy5yb3V0aW5lS2V5LCB7XG4gICAgICAgICAgICAgICAgZHJvcHpvbmVJZDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSb3V0aW5lVmlkZW8udnVlPzNhYWJkYTE0IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnRcIj5cbiAgICAgICAgPGEgdi1zaG93PVwiIXNob3dWaWRlb1wiIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJwbGF5VmlkZW9cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5XCI+PC9pPlxuICAgICAgICAgICAgUGxheSBWaWRlb1xuICAgICAgICA8L2E+XG4gICAgICAgIDxhIHYtc2hvdz1cInNob3dWaWRlb1wiIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJoaWRlVmlkZW9cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LXVwXCI+PC9pPlxuICAgICAgICAgICAgSGlkZSBWaWRlb1xuICAgICAgICA8L2E+XG4gICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgOmlkPVwiJ3ZpZGVvLScgKyB2aWRlb0lkXCJcbiAgICAgICAgICAgIGNsYXNzPVwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpbiB2anMtYmlnLXBsYXktY2VudGVyZWQgdmpzLTE2LTkgdmpzLWhpZGRlblwiXG4gICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgZGF0YS1zZXR1cD0ne1wiZmx1aWRcIjogdHJ1ZX0nXG4gICAgICAgICAgICA6cG9zdGVyPVwiaW1nXCJcbiAgICAgICAgICAgIDp3aWR0aD1cIndpZHRoXCJcbiAgICAgICAgICAgIDpoZWlnaHQ9XCJoZWlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8c291cmNlIHR5cGU9XCJ2aWRlby9tcDRcIiA6c3JjPVwic3JjXCIgLz5cbiAgICAgICAgPC92aWRlbz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHZpZGVvanMgZnJvbSBcInZpZGVvLmpzXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBsYXllcjogbnVsbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBzaG93VmlkZW86IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmlkZW9JZDogbnVsbCxcbiAgICAgICAgICAgIHNyYzogbnVsbCxcbiAgICAgICAgICAgIGltZzogbnVsbCxcbiAgICAgICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogNDgwLFxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDI3MCxcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IHZpZGVvanMoJ3ZpZGVvLScgKyB0aGlzLnZpZGVvSWQpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGgucm91bmQodGhpcy5wbGF5ZXIuZHVyYXRpb24oKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0hpdFF1b3RhVmlldygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlldygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBwbGF5VmlkZW8oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VmlkZW8gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlkZVZpZGVvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZGVvID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzSGl0UXVvdGFWaWV3KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5wbGF5ZXIuY3VycmVudFRpbWUoKSkgPT09IE1hdGgucm91bmQoKDEwICogdGhpcy5kdXJhdGlvbikgLyAxMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZVZpZXcoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvSWQgKyAnL3ZpZXdzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gU21hbGxWaWRlby52dWU/NGVmZTEyYzQiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHA+e3sgY29tbWVudHMubGVuZ3RoIH19IHt7IGNvbW1lbnRzLmxlbmd0aCB8IHBsdXJhbGl6ZSgnY29tbWVudCcpIH19PC9wPlxuXG4gICAgICAgIDwhLS0gVmlkZW8gY29tbWVudCBib3ggLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1jb21tZW50IGNsZWFyZml4XCIgaWY9XCIkcm9vdC51c2VyLmF1dGhlbnRpY2F0ZWRcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlNheSBzb21ldGhpbmcuLi5cIiBjbGFzcz1cImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiIHYtbW9kZWw9XCJib2R5XCI+PC90ZXh0YXJlYT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIiBzdHlsZT1cIm1hcmdpbi10b3A6MTBweFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJjcmVhdGVDb21tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCIgdi1pZj1cInBvc3RpbmdcIj48L2k+IFBvc3RcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIExpc3Qgb2YgY29tbWVudHMgLS0+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1lZGlhLWxpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lZGlhXCIgdi1mb3I9XCJjb21tZW50IGluIGNvbW1lbnRzXCI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIFVzZXIgaW1hZ2UgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJ1c2VyVXJsKGNvbW1lbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtYmluZDpzcmM9XCJjb21tZW50LnVzZXIuZGF0YS5pbWFnZVwiIDphbHQ9XCJjb21tZW50LnVzZXIuZGF0YS5uYW1lXCIgY2xhc3M9XCJtZWRpYS1vYmplY3QgaW1nLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIENvbW1lbnQgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJ1c2VyVXJsKGNvbW1lbnQpXCI+e3sgY29tbWVudC51c2VyLmRhdGEubmFtZSB9fTwvYT4ge3sgY29tbWVudC5jcmVhdGVkX2F0X2h1bWFuIH19XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aFwiPih7eyBjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGggfX0gIHt7IGNvbW1lbnQucmVwbGllcy5kYXRhLmxlbmd0aCB8IHBsdXJhbGl6ZSgncmVwbHknLCAncmVwbGllcycpIH19KTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8cD57eyBjb21tZW50LmJvZHkgfX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBDb21tZW50IHJlcGx5L2RlbGV0ZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmVcIiB2LWlmPVwiJHJvb3QudXNlci5hdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInRvZ2dsZVJlcGx5Rm9ybShjb21tZW50LmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyByZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50LmlkID8gJ0NhbmNlbCByZXBseScgOiAnUmVwbHknIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwiY29tbWVudC51c2VyX2lkID09PSAkcm9vdC51c2VyLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cImRlbGV0ZUNvbW1lbnQoY29tbWVudC5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIiB2LWlmPVwiZGVsZXRpbmcgPT09IGNvbW1lbnQuaWRcIj48L2k+IERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXBseSBib3ggLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1jb21tZW50IGNsZWFyXCIgdi1pZj1cInJlcGx5Rm9ybVZpc2libGUgPT09IGNvbW1lbnQuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbCB2aWRlby1jb21tZW50X19pbnB1dFwiIHYtbW9kZWw9XCJyZXBseUJvZHlcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIiBzdHlsZT1cIm1hcmdpbi10b3A6MTBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJjcmVhdGVSZXBseShjb21tZW50LmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCBzcGlubmluZ1wiIHYtaWY9XCJyZXBseWluZ1wiPjwvaT4gUmVwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFJlcGxpZXMgdG8gY29tbWVudCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCIgdi1mb3I9XCJyZXBseSBpbiBjb21tZW50LnJlcGxpZXMuZGF0YVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFVzZXIgaW1hZ2UgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXNlclVybChyZXBseSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWJpbmQ6c3JjPVwicmVwbHkudXNlci5kYXRhLmltYWdlXCIgOmFsdD1cInJlcGx5LnVzZXIuZGF0YS5uYW1lXCIgY2xhc3M9XCJtZWRpYS1vYmplY3QgaW1nLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFJlcGx5IGJvZHkgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXNlclVybChyZXBseSlcIj57eyByZXBseS51c2VyLmRhdGEubmFtZSB9fTwvYT4ge3sgcmVwbHkuY3JlYXRlZF9hdF9odW1hbiB9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgcmVwbHkuYm9keSB9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lXCIgdi1pZj1cIiRyb290LnVzZXIuYXV0aGVudGljYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwiZGVsZXRlQ29tbWVudChyZXBseS5pZClcIiB2LWlmPVwicmVwbHkudXNlcl9pZCA9PT0gJHJvb3QudXNlci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCIgdi1pZj1cImRlbGV0aW5nID09PSByZXBseS5pZFwiPjwvaT4gRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tbWVudHM6IFtdLFxuICAgICAgICAgICAgICAgIHBvc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJvZHk6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVwbHlCb2R5OiBudWxsLFxuICAgICAgICAgICAgICAgIHJlcGx5Rm9ybVZpc2libGU6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVwbHlpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlbGV0aW5nOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2aWRlb1VuaXF1ZUlkOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRlbGV0ZUNvbW1lbnQoY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tbWVudD8nKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGluZyA9IGNvbW1lbnRJZDtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZGVsZXRlKCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL2NvbW1lbnRzLycgKyBjb21tZW50SWQpLnRoZW4oVnVlLmdldEpzb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQnlJZChjb21tZW50SWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0aW5nID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVCeUlkKGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudC5pZCA9PT0gY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LnJlcGxpZXMuZGF0YS5tYXAoKHJlcGx5LCByZXBseUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwbHkuaWQgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNbaW5kZXhdLnJlcGxpZXMuZGF0YS5zcGxpY2UocmVwbHlJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVSZXBseUZvcm0oY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBseUJvZHkgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVwbHlGb3JtVmlzaWJsZSA9PT0gY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbHlGb3JtVmlzaWJsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlcGx5Rm9ybVZpc2libGUgPSBjb21tZW50SWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlUmVwbHkoY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBseWluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvY29tbWVudHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMucmVwbHlCb2R5LFxuICAgICAgICAgICAgICAgICAgICByZXBseV9pZDogY29tbWVudElkXG4gICAgICAgICAgICAgICAgfSkudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudC5pZCA9PT0gY29tbWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50c1tpbmRleF0ucmVwbGllcy5kYXRhLnB1c2gocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGx5Qm9keSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbHlGb3JtVmlzaWJsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbHlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBwb3N0aW5nIHRoZSByZXBseS4nLCBlcnJSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbHlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy9jb21tZW50cycsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogdGhpcy5ib2R5XG4gICAgICAgICAgICAgICAgfSkudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBwb3N0aW5nIHRoZSBjb21tZW50LicsIGVyclJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Q29tbWVudHMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvY29tbWVudHMnKS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXJVcmwoY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnL3VzZXIvJyArIGNvbW1lbnQudXNlci5kYXRhLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21tZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZpZGVvQ29tbWVudHMudnVlPzJhZjY3ODg1IiwiPHRlbXBsYXRlPlxuICAgIDx2aWRlb1xuICAgICAgICAgICAgaWQ9XCJ2aWRlb1wiXG4gICAgICAgICAgICBjbGFzcz1cInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW4gdmpzLWJpZy1wbGF5LWNlbnRlcmVkIHZqcy0xNi05XCJcbiAgICAgICAgICAgIGNvbnRyb2xzIHByZWxvYWQ9XCJhdXRvXCJcbiAgICAgICAgICAgIGRhdGEtc2V0dXA9J3tcImZsdWlkXCI6IHRydWUsIFwicHJlbG9hZFwiOiBcImF1dG9cIn0nXG4gICAgICAgICAgICB2LWJpbmQ6cG9zdGVyPVwidGh1bWJuYWlsVXJsXCJcbiAgICA+XG4gICAgICAgIDxzb3VyY2UgdHlwZT1cInZpZGVvL21wNFwiIHYtYmluZDpzcmM9XCJ2aWRlb1VybFwiIC8+XG4gICAgPC92aWRlbz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHZpZGVvanMgZnJvbSBcInZpZGVvLmpzXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBsYXllcjogbnVsbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmlkZW9VbmlxdWVJZDogbnVsbCxcbiAgICAgICAgICAgIHZpZGVvVXJsOiBudWxsLFxuICAgICAgICAgICAgdGh1bWJuYWlsVXJsOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IHZpZGVvanMoJ3ZpZGVvJyk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9uKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5yb3VuZCh0aGlzLnBsYXllci5kdXJhdGlvbigpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzSGl0UXVvdGFWaWV3KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGhhc0hpdFF1b3RhVmlldygpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMucGxheWVyLmN1cnJlbnRUaW1lKCkpID09PSBNYXRoLnJvdW5kKCgxMCAqIHRoaXMuZHVyYXRpb24pIC8gMTAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVWaWV3KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy92aWV3cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZpZGVvUGxheWVyLnZ1ZT83NzgxNWVjNyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlVwbG9hZCBZb3VyIFZpZGVvPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cIm5hbWVcIiA6ZGlzYWJsZWQ9XCJhdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXZlbnRcIj5FdmVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHJhbXBvbGluZVwiPlRyYW1wb2xpbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRvdWJsZSBtaW5pXCI+RG91YmxlLW1pbmk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInR1bWJsaW5nXCI+VHVtYmxpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwidmlkZW9cIiBpZD1cInZpZGVvXCIgQGNoYW5nZT1cImZpbGVJbnB1dENoYW5nZVwiIHYtaWY9XCIhdXBsb2FkaW5nXCIgOmRpc2FibGVkPVwiIW5hbWUgfHwgIWV2ZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiB2LWlmPVwiZmFpbGVkXCI+U29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWRlby1mb3JtXCIgdi1pZj1cInVwbG9hZGluZyAmJiAhZmFpbGVkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHYtaWY9XCIhdXBsb2FkaW5nQ29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIj48L2k+IFlvdXIgdmlkZW8gaXMgdXBsb2FkaW5nLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiB2LWlmPVwidXBsb2FkaW5nQ29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGNvbXBsZXRlLiBWaWRlbyBpcyBub3cgcHJvY2Vzc2luZy4gPGEgaHJlZj1cIi92aWRlb3NcIj5HbyB0byB5b3VyIHZpZGVvcy48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiB2LWlmPVwiIXVwbG9hZGluZ0NvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiB2LWJpbmQ6c3R5bGU9XCJ7IHdpZHRoOiBmaWxlUHJvZ3Jlc3MgKyAnJScgfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInZpc2liaWxpdHlcIj5WaXNpYmlsaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJ2aXNpYmlsaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpdmF0ZVwiPlByaXZhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1bmxpc3RlZFwiPlVubGlzdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHVibGljXCI+UHVibGljPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrIHB1bGwtcmlnaHRcIj57eyBzYXZlU3RhdHVzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrLnByZXZlbnQ9XCJ1cGRhdGVcIj5TYXZlIENoYW5nZXM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVwbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXBsb2FkaW5nQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhaWxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2F2ZVN0YXR1czogbnVsbCxcbiAgICAgICAgICAgICAgICBmaWxlUHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogd2luZG93LkxhcmF2ZWwudXNlci5hdXRoZW50aWNhdGVkLFxuXG4gICAgICAgICAgICAgICAgLy8gVmlkZW8gbW9kZWxcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogd2luZG93LkxhcmF2ZWwudXNlci5pZCxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1VudGl0bGVkJyxcbiAgICAgICAgICAgICAgICBuYW1lOiB3aW5kb3cuTGFyYXZlbC51c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICd0cmFtcG9saW5lJyxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBmaWxlSW5wdXRDaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFpbGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKS5maWxlc1swXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgndmlkZW8nLCB0aGlzLmZpbGUpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgndW5pcXVlX2lkJywgdGhpcy51bmlxdWVfaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3VwbG9hZCcsIGZvcm0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRpbmdDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sIChmYWlsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIChmYWlsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHN0b3JlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gdGhpcy5maWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QoJy92aWRlb3MnLCB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMudXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb246IHRoaXMuZXh0ZW5zaW9uLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB0aGlzLnZpc2liaWxpdHksXG4gICAgICAgICAgICAgICAgfSkudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmlxdWVfaWQgPSByZXNwb25zZS5kYXRhLnVuaXF1ZV9pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdHVzID0gJ1NhdmluZyBjaGFuZ2VzLic7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5wdXQoJy92aWRlb3MvJyArIHRoaXMudW5pcXVlX2lkLCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiB0aGlzLmV4dGVuc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdGhpcy52aXNpYmlsaXR5LFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXR1cyA9ICdDaGFuZ2VzIHNhdmVkLic7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0dXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdHVzID0gJ0ZhaWxlZCB0byBzYXZlIGNoYW5nZXMuJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGVQcm9ncmVzcyhlKSB7XG4gICAgICAgICAgICAgICAgZS5wZXJjZW50ID0gKGUubG9hZGVkIC8gZS50b3RhbCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlUHJvZ3Jlc3MgPSBlLnBlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB2aWRlb1VybDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJvb3QudXJsICsgJy92aWRlb3MvJyArIHRoaXMudW5pcXVlX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwbG9hZGluZyAmJiAhdGhpcy51cGxvYWRpbmdDb21wbGV0ZSAmJiAhdGhpcy5mYWlsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbmF2aWdhdGUgYXdheT8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZpZGVvVXBsb2FkLnZ1ZT8xOTYwZTEzMSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwidmlkZW9fX3ZvdGluZ1wiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidmlkZW9fX3ZvdGluZy1idXR0b25cIiB2LWJpbmQ6Y2xhc3M9XCJ7J3ZpZGVvX192b3RpbmctYnV0dG9uLS12b3RlZCc6IHVzZXJWb3RlID09ICd1cCd9XCIgQGNsaWNrLnByZXZlbnQ9XCJ2b3RlKCd1cCcpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwXCI+PC9pPlxuICAgICAgICA8L2E+IHt7IHVwIH19ICZuYnNwO1xuXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ2aWRlb19fdm90aW5nLWJ1dHRvblwiIHYtYmluZDpjbGFzcz1cInsndmlkZW9fX3ZvdGluZy1idXR0b24tLXZvdGVkJzogdXNlclZvdGUgPT0gJ2Rvd24nfVwiIEBjbGljay5wcmV2ZW50PVwidm90ZSgnZG93bicpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIj48L2k+XG4gICAgICAgIDwvYT4ge3sgZG93biB9fVxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVwOiBudWxsLFxuICAgICAgICAgICAgICAgIGRvd246IG51bGwsXG4gICAgICAgICAgICAgICAgdXNlclZvdGU6IG51bGwsXG4gICAgICAgICAgICAgICAgY2FuVm90ZTogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2aWRlb1VuaXF1ZUlkOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFZvdGVzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFZvdGVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KCcvdmlkZW9zLycgKyB0aGlzLnZpZGVvVW5pcXVlSWQgKyAnL3ZvdGVzJykudGhlbihWdWUuZ2V0SnNvbikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cCA9IHJlc3BvbnNlLmRhdGEudXA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG93biA9IHJlc3BvbnNlLmRhdGEuZG93bjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyVm90ZSA9IHJlc3BvbnNlLmRhdGEudXNlcl92b3RlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblZvdGUgPSByZXNwb25zZS5kYXRhLmNhbl92b3RlO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2b3RlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyVm90ZSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbdHlwZV0tLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyVm90ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVm90ZSh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJWb3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbdHlwZSA9PSAndXAnID8gJ2Rvd24nIDogJ3VwJ10tLTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzW3R5cGVdKys7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyVm90ZSA9IHR5cGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVZvdGUodHlwZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlVm90ZSh0eXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5kZWxldGUoJy92aWRlb3MvJyArIHRoaXMudmlkZW9VbmlxdWVJZCArICcvdm90ZXMnLCB7dHlwZX0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZVZvdGUodHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3ZpZGVvcy8nICsgdGhpcy52aWRlb1VuaXF1ZUlkICsgJy92b3RlcycsIHt0eXBlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVmlkZW9Wb3RpbmcudnVlPzJhZDVjZGYyIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIj5cbiAgICAgICAgPGg1Pnt7IHRpdGxlIH19PC9oNT5cblxuICAgICAgICA8cm91dGluZS12aWRlbyA6ZGlzY2lwbGluZT1cInNjb3JlLmRpc2NpcGxpbmVcIiA6cm91dGluZS1rZXk9XCJyb3V0aW5lS2V5XCIgQHZpZGVvLXVwbG9hZGVkPVwidmlkZW9VcGxvYWRlZFwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2IHYtZm9yPVwiY29tcG9uZW50X2tleSBpbiBzY29yZS5zY29yZUtleXMoKVwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiY29tcG9uZW50X2tleSAhPT0gJ3RvdGFsX3Njb3JlJ1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKGNvbXBvbmVudF9rZXkpXCIgOnRpdGxlPVwic2NvcmUuZ2V0VGl0bGUoY29tcG9uZW50X2tleSlcIj57eyBzY29yZS5nZXRMYWJlbChjb21wb25lbnRfa2V5KSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IEBjaGFuZ2U9XCJjb21wdXRlU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlXCIgOm5hbWU9XCJmb3JtSWQoY29tcG9uZW50X2tleSlcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImNvbXBvbmVudF9rZXkgPT09ICd0b3RhbF9zY29yZSdcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIDp0aXRsZT1cInNjb3JlLmdldFRpdGxlKCd0b3RhbF9zY29yZScpXCI+e3sgc2NvcmUuZ2V0TGFiZWwoJ3RvdGFsX3Njb3JlJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBAY2hhbmdlPVwiY29tcHV0ZVRvdGFsU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlXCIgOm5hbWU9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IERvdWJsZU1pbmlTY29yZSBmcm9tICcuLi8uLi9Eb3VibGVNaW5pU2NvcmUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY29yZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBEb3VibGVNaW5pU2NvcmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtaXhpbnM6IFtTY29yZU1peGluXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBEb3VibGVNaW5pU2NvcmUudnVlP2ZkN2Y2NjhjIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIj5cbiAgICAgICAgPGg1Pnt7IHRpdGxlIH19PC9oNT5cblxuICAgICAgICA8cm91dGluZS12aWRlbyA6ZGlzY2lwbGluZT1cInNjb3JlLmRpc2NpcGxpbmVcIiA6cm91dGluZS1rZXk9XCJyb3V0aW5lS2V5XCIgQHZpZGVvLXVwbG9hZGVkPVwidmlkZW9VcGxvYWRlZFwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2IHYtZm9yPVwiY29tcG9uZW50X2tleSBpbiBzY29yZS5zY29yZUtleXMoKVwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiY29tcG9uZW50X2tleSAhPT0gJ3RvdGFsX3Njb3JlJ1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKGNvbXBvbmVudF9rZXkpXCIgOnRpdGxlPVwic2NvcmUuZ2V0VGl0bGUoY29tcG9uZW50X2tleSlcIj57eyBzY29yZS5nZXRMYWJlbChjb21wb25lbnRfa2V5KSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IEBjaGFuZ2U9XCJjb21wdXRlU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlXCIgOm5hbWU9XCJmb3JtSWQoY29tcG9uZW50X2tleSlcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImNvbXBvbmVudF9rZXkgPT09ICd0b3RhbF9zY29yZSdcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZvcm1JZCgndG90YWxfc2NvcmUnKVwiIDp0aXRsZT1cInNjb3JlLmdldFRpdGxlKCd0b3RhbF9zY29yZScpXCI+e3sgc2NvcmUuZ2V0TGFiZWwoJ3RvdGFsX3Njb3JlJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBAY2hhbmdlPVwiY29tcHV0ZVRvdGFsU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlXCIgOm5hbWU9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTY29yZU1peGluIGZyb20gJy4uLy4uL21peGlucy9zY29yZS5taXhpbic7XG4gICAgaW1wb3J0IFRyYW1wb2xpbmVTY29yZSBmcm9tICcuLi8uLi9UcmFtcG9saW5lU2NvcmUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY29yZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBUcmFtcG9saW5lU2NvcmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtaXhpbnM6IFtTY29yZU1peGluXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUcmFtcG9saW5lU2NvcmUudnVlPzkwYzlkNWEwIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIj5cbiAgICAgICAgPGg1Pnt7IHRpdGxlIH19PC9oNT5cblxuICAgICAgICA8cm91dGluZS12aWRlbyA6ZGlzY2lwbGluZT1cImRpc2NpcGxpbmVcIiA6cm91dGluZS1rZXk9XCJyb3V0aW5lS2V5XCIgQHZpZGVvLXVwbG9hZGVkPVwidmlkZW9VcGxvYWRlZFwiPjwvcm91dGluZS12aWRlbz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmb3JtSWQoJ2V4ZWN1dGlvbicpXCIgdGl0bGU9XCJFeGVjdXRpb25cIj5FeGVjdXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IEBjaGFuZ2U9XCJjb21wdXRlU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cImV4ZWN1dGlvblwiIDpuYW1lPVwiZm9ybUlkKCdleGVjdXRpb24nKVwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiYW55XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZm9ybUlkKCd0b3RhbF9zY29yZScpXCIgdGl0bGU9XCJUb3RhbCBTY29yZVwiPlRvdGFsIFNjb3JlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBAY2hhbmdlPVwiY29tcHV0ZVRvdGFsU2NvcmVcIiB2LW1vZGVsLm51bWJlcj1cInRvdGFsX3Njb3JlXCIgOm5hbWU9XCJmb3JtSWQoJ3RvdGFsX3Njb3JlJylcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cImFueVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU2NvcmVNaXhpbiBmcm9tICcuLi8uLi9taXhpbnMvc2NvcmUubWl4aW4nO1xuICAgIGltcG9ydCBUdW1ibGluZ1Njb3JlIGZyb20gJy4uLy4uL1R1bWJsaW5nU2NvcmUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpc2NpcGxpbmU6ICd0dW1ibGluZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZXhlY3V0aW9uOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudHVtYmxpbmdQYXNzZXNbdGhpcy5yb3V0aW5lS2V5XS5leGVjdXRpb24udmFsdWUgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHsgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtaXhpbnM6IFtTY29yZU1peGluXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUdW1ibGluZ1Njb3JlLnZ1ZT8xZWExOTg4MCIsIlxud2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbndpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5yZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xuXG4vKipcbiAqIFZ1ZSBpcyBhIG1vZGVybiBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIGludGVyYWN0aXZlIHdlYiBpbnRlcmZhY2VzXG4gKiB1c2luZyByZWFjdGl2ZSBkYXRhIGJpbmRpbmcgYW5kIHJldXNhYmxlIGNvbXBvbmVudHMuIFZ1ZSdzIEFQSSBpcyBjbGVhblxuICogYW5kIHNpbXBsZSwgbGVhdmluZyB5b3UgdG8gZm9jdXMgb24gYnVpbGRpbmcgeW91ciBuZXh0IGdyZWF0IHByb2plY3QuXG4gKi9cblxud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7XG4gICAgJ1gtQ1NSRi1UT0tFTic6IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbixcbiAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbn07XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tIFwibGFyYXZlbC1lY2hvXCJcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogJ3lvdXItcHVzaGVyLWtleSdcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuVnVlLnVzZShWdWV4KTtcblxuaW1wb3J0IFRyYW1wb2xpbmVTY29yZSBmcm9tICcuL1RyYW1wb2xpbmVTY29yZSc7XG5pbXBvcnQgRG91YmxlTWluaVNjb3JlIGZyb20gJy4vRG91YmxlTWluaVNjb3JlJztcbmltcG9ydCBUdW1ibGluZ1Njb3JlIGZyb20gJy4vVHVtYmxpbmdTY29yZSc7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuICAgIHN0cmljdDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICBsb2NhdGlvbjogbnVsbCxcbiAgICAgICAgc3RhcnRfZGF0ZTogbnVsbCxcbiAgICAgICAgZW5kX2RhdGU6IG51bGwsXG5cbiAgICAgICAgdHJhbXBvbGluZVJvdXRpbmVzOiB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZG91YmxlTWluaVBhc3Nlczoge1xuXG4gICAgICAgIH0sXG4gICAgICAgIHR1bWJsaW5nUGFzc2VzOiB7XG4gICAgICAgICAgICBwcmVsaW1fcGFzc18xOiBuZXcgVHVtYmxpbmdTY29yZSgpLFxuICAgICAgICAgICAgcHJlbGltX3Bhc3NfMjogbmV3IFR1bWJsaW5nU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX3Bhc3NfMzogbmV3IFR1bWJsaW5nU2NvcmUoKSxcbiAgICAgICAgICAgIGZpbmFsX3Bhc3NfNDogbmV3IFR1bWJsaW5nU2NvcmUoKSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgICBMT0FEX0NPTVBFVElUSU9OOiAoY29udGV4dCwgY29tcGV0aXRpb25JZCkgPT4ge1xuICAgICAgICAgICAgVnVlLmh0dHAuZ2V0KCcvY29tcGV0aXRpb25zLycgKyBjb21wZXRpdGlvbklkKS50aGVuKFZ1ZS5nZXRKc29uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBjb21wZXRpdGlvbiA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBldGl0aW9uOiAnLCBjb21wZXRpdGlvbik7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9DT01QRVRJVElPTl9GSUVMRFMnLCB7IGZpZWxkczogY29tcGV0aXRpb24gfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcGV0aXRpb24udHJhbXBvbGluZVNjb3Jlcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9UUkFNUE9MSU5FX1NDT1JFUycsIHtzY29yZXM6IGNvbXBldGl0aW9uLnRyYW1wb2xpbmVTY29yZXMuZGF0YX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb21wZXRpdGlvbi5kb3VibGVNaW5pU2NvcmVzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnU0VUX0RPVUJMRV9NSU5JX1NDT1JFUycsIHtzY29yZXM6IGNvbXBldGl0aW9uLmRvdWJsZU1pbmlTY29yZXMuZGF0YX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb21wZXRpdGlvbi50dW1ibGluZ1Njb3Jlcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ1NFVF9UVU1CTElOR19TQ09SRVMnLCB7c2NvcmVzOiBjb21wZXRpdGlvbi50dW1ibGluZ1Njb3Jlcy5kYXRhfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBTRVRfQ09NUEVUSVRJT05fRklFTERTOiAoc3RhdGUsIHsgZmllbGRzIH0pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmllbGRzLnRpdGxlO1xuICAgICAgICAgICAgc3RhdGUubG9jYXRpb24gPSBmaWVsZHMubG9jYXRpb247XG4gICAgICAgICAgICBzdGF0ZS5zdGFydF9kYXRlID0gbW9tZW50KGZpZWxkcy5zdGFydF9kYXRlLmRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAgICAgc3RhdGUuZW5kX2RhdGUgPSBtb21lbnQoZmllbGRzLmVuZF9kYXRlLmRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9USVRMRTogKHN0YXRlLCB0aXRsZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfSxcblxuICAgICAgICBTRVRfTE9DQVRJT046IChzdGF0ZSwgbG9jYXRpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX1NUQVJUX0RBVEU6IChzdGF0ZSwgc3RhcnRfZGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhcnRfZGF0ZSA9IHN0YXJ0X2RhdGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX0VORF9EQVRFOiAoc3RhdGUsIGVuZF9kYXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5lbmRfZGF0ZSA9IGVuZF9kYXRlO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9TQ09SRVM6IChzdGF0ZSwgeyBzY29yZXMsIHNjb3JlT2JqfSkgPT4ge1xuICAgICAgICAgICAgc2NvcmVzLmZvckVhY2goKHNjb3JlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2NvcmVNYXAgPSB7fTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3JlT2JqLmF0dHJzKS5mb3JFYWNoKChzY29yZVBhcnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVNYXBbc2NvcmVQYXJ0XSA9IHNjb3JlW3Njb3JlUGFydF07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzY29yZU9iai51cGRhdGVBdHRyaWJ1dGVzKHNjb3JlTWFwKTtcbiAgICAgICAgICAgICAgICBzY29yZU9iai5zZXRWaWRlb0lkKHNjb3JlLnZpZGVvX2lkKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS50dW1ibGluZ1Bhc3Nlc1tzY29yZS5yb3V0aW5lXSA9IHNjb3JlT2JqO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX1RSQU1QT0xJTkVfU0NPUkVTOiAoc3RhdGUsIHsgc2NvcmVzIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5jb21taXQoJ1NFVF9TQ09SRVMnLCB7XG4gICAgICAgICAgICAgICAgc2NvcmVzLFxuICAgICAgICAgICAgICAgIHNjb3JlT2JqOiBuZXcgVHJhbXBvbGluZVNjb3JlKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIFNFVF9ET1VCTEVfTUlOSV9TQ09SRVM6IChzdGF0ZSwgeyBzY29yZXMgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmNvbW1pdCgnU0VUX1NDT1JFUycsIHtcbiAgICAgICAgICAgICAgICBzY29yZXMsXG4gICAgICAgICAgICAgICAgc2NvcmVPYmo6IG5ldyBEb3VibGVNaW5pU2NvcmUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgU0VUX1RVTUJMSU5HX1NDT1JFUzogKHN0YXRlLCB7IHNjb3JlcyB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuY29tbWl0KCdTRVRfU0NPUkVTJywge1xuICAgICAgICAgICAgICAgIHNjb3JlcyxcbiAgICAgICAgICAgICAgICBzY29yZU9iajogbmV3IFR1bWJsaW5nU2NvcmUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBnZXR0ZXJzOiB7XG5cbiAgICB9LFxuICAgIG1vZHVsZXM6IHtcblxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBldGl0aW9uRm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzViZWIyZWMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbXBldGl0aW9uRm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENvbXBldGl0aW9uRm9ybS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzViZWIyZWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NWJlYjJlY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjk1NDNkOTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL011bHRpcGxlVmlkZW9VcGxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL011bHRpcGxlVmlkZW9VcGxvYWQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTXVsdGlwbGVWaWRlb1VwbG9hZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjk1NDNkOTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yOTU0M2Q5M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTXVsdGlwbGVWaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDc5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JvdXRpbmVWaWRlby52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWI2YzA1NDAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JvdXRpbmVWaWRlby52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hdXN0aW53aGl0ZS9TaXRlcy91c2FnLXZpZGVvcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJvdXRpbmVWaWRlby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWI2YzA1NDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01YjZjMDU0MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm91dGluZVZpZGVvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU21hbGxWaWRlby52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2IzMDg2YzYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1NtYWxsVmlkZW8udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NtYWxsVmlkZW8udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gU21hbGxWaWRlby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2IzMDg2YzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03YjMwODZjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU21hbGxWaWRlby52dWVcbi8vIG1vZHVsZSBpZCA9IDc5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvQ29tbWVudHMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWVlN2IyZTk0IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WaWRlb0NvbW1lbnRzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb0NvbW1lbnRzLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFZpZGVvQ29tbWVudHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWVlN2IyZTk0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZWU3YjJlOTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvQ29tbWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WaWRlb1BsYXllci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDUwMTY5YTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZpZGVvUGxheWVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1BsYXllci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBWaWRlb1BsYXllci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDUwMTY5YTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NTAxNjlhM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WaWRlb1VwbG9hZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOGNjZjY2N2EhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZpZGVvVXBsb2FkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBWaWRlb1VwbG9hZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOGNjZjY2N2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04Y2NmNjY3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9VcGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WaWRlb1ZvdGluZy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzE5YTk4ZTkhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZpZGVvVm90aW5nLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1ZvdGluZy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBWaWRlb1ZvdGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzE5YTk4ZTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMTlhOThlOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Wb3RpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Eb3VibGVNaW5pU2NvcmUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTkzMzhhNjM2IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Eb3VibGVNaW5pU2NvcmUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYXVzdGlud2hpdGUvU2l0ZXMvdXNhZy12aWRlb3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Njb3Jlcy9Eb3VibGVNaW5pU2NvcmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gRG91YmxlTWluaVNjb3JlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05MzM4YTYzNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTkzMzhhNjM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvRG91YmxlTWluaVNjb3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVHJhbXBvbGluZVNjb3JlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lNGUzYTNhMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVHJhbXBvbGluZVNjb3JlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHJhbXBvbGluZVNjb3JlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFRyYW1wb2xpbmVTY29yZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTRlM2EzYTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lNGUzYTNhMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDc5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1R1bWJsaW5nU2NvcmUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJhNmE4ZDIxIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UdW1ibGluZ1Njb3JlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2F1c3RpbndoaXRlL1NpdGVzL3VzYWctdmlkZW9zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBUdW1ibGluZ1Njb3JlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYTZhOGQyMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJhNmE4ZDIxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgWW91ciBWaWRlb3NcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZXZlbnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkV2ZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJldmVudFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0uZXZlbnQgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidHJhbXBvbGluZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVHJhbXBvbGluZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZG91YmxlIG1pbmlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRvdWJsZS1taW5pXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJ0dW1ibGluZ1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVHVtYmxpbmdcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidmlzaWJpbGl0eVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVmlzaWJpbGl0eVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnZpc2liaWxpdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ2aXNpYmlsaXR5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInZpc2liaWxpdHlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLnZpc2liaWxpdHkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicHJpdmF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHJpdmF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwidW5saXN0ZWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlVubGlzdGVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwdWJsaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlB1YmxpY1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnF1ZXVlZCksXG4gICAgICBleHByZXNzaW9uOiBcIiFxdWV1ZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiR1cGxvYWQuc2VsZWN0KCd2aWRlby11cGxvYWQnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBWaWRlb3NcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5xdWV1ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJxdWV1ZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiR1cGxvYWQuc3RhcnQoJ3ZpZGVvLXVwbG9hZCcpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZCcpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF92bS4kdXBsb2FkLnJlc2V0KCd2aWRlby11cGxvYWQnKTtcbiAgICAgICAgX3ZtLnF1ZXVlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5zdGF0dXMgPT09ICdzZW5kaW5nJyksXG4gICAgICBleHByZXNzaW9uOiBcIiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykuc3RhdHVzID09PSAnc2VuZGluZydcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1wcm9ncmVzcyBwcm9ncmVzc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLWJhclwiLFxuICAgIHN0eWxlOiAoJ3dpZHRoOiAnICsgX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkJykucGVyY2VudENvbXBsZXRlICsgJyU7JylcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQnKS5wZXJjZW50Q29tcGxldGUpICsgXCIlIENvbXBsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS4kdXBsb2FkLmVycm9ycygndmlkZW8tdXBsb2FkJykubGVuZ3RoKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR1cGxvYWQuZXJyb3JzKCd2aWRlby11cGxvYWQnKVswXS5tZXNzYWdlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1yZXN1bHRcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoID4gMCksXG4gICAgICBleHByZXNzaW9uOiBcIiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGggPiAwXCJcbiAgICB9XVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kZWZhdWx0XCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR1cGxvYWQuZmlsZXMoJ3ZpZGVvLXVwbG9hZCcpLnF1ZXVlZC5sZW5ndGgpICsgXCIgXCIgKyBfdm0uX3MoX3ZtLl9mKFwicGx1cmFsaXplXCIpKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5xdWV1ZWQubGVuZ3RoLCAnZmlsZScpKSArIFwiIHJlYWR5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgwqBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9nZ2xlU2hvd1F1ZXVlZFxuICAgIH1cbiAgfSwgWyhfdm0uc2hvd1F1ZXVlZEZpbGVzKSA/IF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tbWVudS11cFwiXG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICghX3ZtLnNob3dRdWV1ZWRGaWxlcykgPyBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtZG93blwiXG4gIH0pIDogX3ZtLl9lKCldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dRdWV1ZWRGaWxlcyksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dRdWV1ZWRGaWxlc1wiXG4gICAgfV1cbiAgfSwgX3ZtLl9sKChfdm0uJHVwbG9hZC5maWxlcygndmlkZW8tdXBsb2FkJykucXVldWVkKSwgZnVuY3Rpb24oZmlsZSkge1xuICAgIHJldHVybiBfYygnbGknLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhmaWxlLm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS4kdXBsb2FkLmZpbGVzKCd2aWRlby11cGxvYWQnKS5jb21wbGV0ZSksIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIFsoZmlsZS5lcnJvcnMubGVuZ3RoKSA/IF9jKCdkaXYnLCBbX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kYW5nZXJcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoZmlsZS5lcnJvcnNbMF0ubWVzc2FnZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIWZpbGUuZXJyb3JzLmxlbmd0aCkgPyBfYygnZGl2JywgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gICAgfSwgW192bS5fdihfdm0uX3MoZmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWRlZCBzdWNjZXNzZnVsbHkuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCldKVxuICB9KV0sIDIpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yOTU0M2Q5M1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjk1NDNkOTMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NdWx0aXBsZVZpZGVvVXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgc2NvcmUtdGlsZVwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGluZS12aWRlbycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNjaXBsaW5lXCI6IF92bS5kaXNjaXBsaW5lLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBfdm0ucm91dGluZUtleVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwidmlkZW8tdXBsb2FkZWRcIjogX3ZtLnZpZGVvVXBsb2FkZWRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmZvcm1JZCgnZXhlY3V0aW9uJyksXG4gICAgICBcInRpdGxlXCI6IFwiRXhlY3V0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJFeGVjdXRpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICB2YWx1ZTogKF92bS5leGVjdXRpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJleGVjdXRpb25cIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0uZm9ybUlkKCdleGVjdXRpb24nKSxcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJzdGVwXCI6IFwiYW55XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZXhlY3V0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5jb21wdXRlU2NvcmUsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5leGVjdXRpb24gPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInRpdGxlXCI6IFwiVG90YWwgU2NvcmVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRvdGFsIFNjb3JlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgdmFsdWU6IChfdm0udG90YWxfc2NvcmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3RhbF9zY29yZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwibnVtYmVyXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRvdGFsX3Njb3JlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5jb21wdXRlVG90YWxTY29yZSxcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdGFsX3Njb3JlID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yYTZhOGQyMVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmE2YThkMjEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zY29yZXMvVHVtYmxpbmdTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlb19fdm90aW5nXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvX192b3RpbmctYnV0dG9uXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICd2aWRlb19fdm90aW5nLWJ1dHRvbi0tdm90ZWQnOiBfdm0udXNlclZvdGUgPT0gJ3VwJ1xuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udm90ZSgndXAnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS51cCkgKyBcIiDCoFxcblxcbiAgICBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvX192b3RpbmctYnV0dG9uXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICd2aWRlb19fdm90aW5nLWJ1dHRvbi0tdm90ZWQnOiBfdm0udXNlclZvdGUgPT0gJ2Rvd24nXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS52b3RlKCdkb3duJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5kb3duKSArIFwiXFxuXCIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzE5YTk4ZTlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTMxOWE5OGU5IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Wb3RpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSA4MDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd2aWRlbycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luIHZqcy1iaWctcGxheS1jZW50ZXJlZCB2anMtMTYtOVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidmlkZW9cIixcbiAgICAgIFwiY29udHJvbHNcIjogXCJcIixcbiAgICAgIFwicHJlbG9hZFwiOiBcImF1dG9cIixcbiAgICAgIFwiZGF0YS1zZXR1cFwiOiBcIntcXFwiZmx1aWRcXFwiOiB0cnVlLCBcXFwicHJlbG9hZFxcXCI6IFxcXCJhdXRvXFxcIn1cIixcbiAgICAgIFwicG9zdGVyXCI6IF92bS50aHVtYm5haWxVcmxcbiAgICB9XG4gIH0sIFtfYygnc291cmNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ2aWRlby9tcDRcIixcbiAgICAgIFwic3JjXCI6IF92bS52aWRlb1VybFxuICAgIH1cbiAgfSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00NTAxNjlhM1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDUwMTY5YTMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1BsYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IDgwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0udXBsb2FkZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhdXBsb2FkZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4teHNcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQtJyArIF92bS5yb3V0aW5lS2V5KS5zdGF0dXMgPT09ICdzZW5kaW5nJyxcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiR1cGxvYWQuc2VsZWN0KCd2aWRlby11cGxvYWQtJyArIF92bS5yb3V0aW5lS2V5KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tcGFwZXJjbGlwXCJcbiAgfSksIF92bS5fdihcIiBBdHRhY2ggVmlkZW9cXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS51cGxvYWRlZCksXG4gICAgICBleHByZXNzaW9uOiBcInVwbG9hZGVkXCJcbiAgICB9XVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGVja1wiXG4gIH0pLCBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmZpbGVuYW1lKSArIFwiIGF0dGFjaGVkLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS4kdXBsb2FkLm1ldGEoJ3ZpZGVvLXVwbG9hZC0nICsgX3ZtLnJvdXRpbmVLZXkpLnN0YXR1cyA9PT0gJ3NlbmRpbmcnKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQtJytyb3V0aW5lS2V5KS5zdGF0dXMgPT09ICdzZW5kaW5nJ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXByb2dyZXNzIHByb2dyZXNzXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgc3R5bGU6ICgnd2lkdGg6ICcgKyBfdm0uJHVwbG9hZC5tZXRhKCd2aWRlby11cGxvYWQtJyArIF92bS5yb3V0aW5lS2V5KS5wZXJjZW50Q29tcGxldGUgKyAnJTsnKVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR1cGxvYWQubWV0YSgndmlkZW8tdXBsb2FkLScgKyBfdm0ucm91dGluZUtleSkucGVyY2VudENvbXBsZXRlKSArIFwiJSBDb21wbGV0ZVxcbiAgICAgICAgXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTViNmMwNTQwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01YjZjMDU0MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JvdXRpbmVWaWRlby52dWVcbi8vIG1vZHVsZSBpZCA9IDgwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnZhbGlkYXRlQmVmb3JlU3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnZm9ybS1ncm91cCc6IHRydWUsICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndGl0bGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbXBldGl0aW9uIFRpdGxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnY29udHJvbCc6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZTp0aXRsZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdyZXF1aXJlZCcpLFxuICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCIsXG4gICAgICBhcmc6IFwidGl0bGVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udGl0bGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0aXRsZVwiLFxuICAgICAgYXJnOiBcInRpdGxlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInRpdGxlXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0aXRsZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpdGxlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRpdGxlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0aXRsZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndGl0bGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndGl0bGUnKSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImxvY2F0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2NhdGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9jYXRpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2NhdGlvblwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJsb2NhdGlvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibG9jYXRpb25cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sb2NhdGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5sb2NhdGlvbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChmYWxzZSksXG4gICAgICBleHByZXNzaW9uOiBcImZhbHNlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiRXJyb3IgbWVzc2FnZVwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3RhcnRfZGF0ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3RhcnQgRGF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2NvbnRyb2wnOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGU6c3RhcnRfZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJyksXG4gICAgICBleHByZXNzaW9uOiBcIidkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJ1wiLFxuICAgICAgYXJnOiBcInN0YXJ0X2RhdGVcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc3RhcnRfZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcInN0YXJ0X2RhdGVcIixcbiAgICAgIGFyZzogXCJzdGFydF9kYXRlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInN0YXJ0X2RhdGVcIixcbiAgICAgIFwidHlwZVwiOiBcImRhdGVcIixcbiAgICAgIFwibmFtZVwiOiBcInN0YXJ0X2RhdGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5zdGFydF9kYXRlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnN0YXJ0X2RhdGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3N0YXJ0X2RhdGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnc3RhcnRfZGF0ZScpKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2Zvcm0tZ3JvdXAnOiB0cnVlLCAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2VuZF9kYXRlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImVuZF9kYXRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTdGFydCBEYXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnY29udHJvbCc6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZTplbmRfZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKCdkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJyksXG4gICAgICBleHByZXNzaW9uOiBcIidkYXRlX2Zvcm1hdDpZWVlZLU1NLUREJ1wiLFxuICAgICAgYXJnOiBcImVuZF9kYXRlXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVuZF9kYXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZW5kX2RhdGVcIixcbiAgICAgIGFyZzogXCJlbmRfZGF0ZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJlbmRfZGF0ZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZW5kX2RhdGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5lbmRfZGF0ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5lbmRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZW5kX2RhdGUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2VuZF9kYXRlJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2VuZF9kYXRlJykpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImV2ZW50LXNlbGVjdGlvblwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2g0JywgW192bS5fdihcIkV2ZW50c1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInRyYW1wb2xpbmVcIixcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0cmFtcG9saW5lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0udHJhbXBvbGluZSkgPyBfdm0uX2koX3ZtLnRyYW1wb2xpbmUsIG51bGwpID4gLTEgOiAoX3ZtLnRyYW1wb2xpbmUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0udHJhbXBvbGluZSxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS50cmFtcG9saW5lID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLnRyYW1wb2xpbmUgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLnRyYW1wb2xpbmUgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBUcmFtcG9saW5lXFxuICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZSksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWwgPSAhX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIlxuICB9KSwgX3ZtLl92KFwiIFNlbWktRmluYWxzXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsID0gIV92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCJcbiAgfSksIF92bS5fdihcIiBGaW5hbHNcXG4gICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHJhbXBvbGluZSksXG4gICAgICBleHByZXNzaW9uOiBcInRyYW1wb2xpbmVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHJhbXBDb2xTaXplXG4gIH0sIFtfYygndHJhbXBvbGluZS1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkNvbXB1bHNvcnlcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fY29tcHVsc29yeVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnRyYW1wQ29sU2l6ZVxuICB9LCBbX2MoJ3RyYW1wb2xpbmUtc2NvcmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQcmVsaW0gT3B0aW9uYWxcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJwcmVsaW1fb3B0aW9uYWxcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwic2NvcmVjaGFuZ2VkXCI6IF92bS51cGRhdGVBbGxTY29yZXNcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRyYW1wb2xpbmVSb3V0aW5lcy5zaG93U2VtaUZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dTZW1pRmluYWxcIlxuICAgIH1dLFxuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0udHJhbXBDb2xTaXplXG4gIH0sIFtfYygndHJhbXBvbGluZS1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlNlbWktRmluYWxcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJzZW1pX2ZpbmFsX29wdGlvbmFsXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNjb3JlY2hhbmdlZFwiOiBfdm0udXBkYXRlQWxsU2NvcmVzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50cmFtcG9saW5lUm91dGluZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHJhbXBvbGluZVJvdXRpbmVzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS50cmFtcENvbFNpemVcbiAgfSwgW19jKCd0cmFtcG9saW5lLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiRmluYWwgT3B0aW9uYWxcIixcbiAgICAgIFwicm91dGluZS1rZXlcIjogXCJmaW5hbF9vcHRpb25hbFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRtdCksXG4gICAgICBleHByZXNzaW9uOiBcImRtdFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJkbXRcIixcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcIm5hbWVcIjogXCJkbXRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiY2hlY2tlZFwiOiBBcnJheS5pc0FycmF5KF92bS5kbXQpID8gX3ZtLl9pKF92bS5kbXQsIG51bGwpID4gLTEgOiAoX3ZtLmRtdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIl9fY1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IF92bS5kbXQsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uZG10ID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLmRtdCA9ICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdm0uZG10ID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgRG91YmxlIE1pbmlcXG4gICAgICAgICAgICAgICAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5kbXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4teHMgYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwgPSAhX3ZtLmRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRvdWJsZU1pbmlQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIlxuICB9KSwgX3ZtLl92KFwiIEZpbmFsc1xcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5kbXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnY29sLW1kLScgKyBfdm0uZG10Q29sU2l6ZVxuICB9LCBbX2MoJ2RtdC1zY29yZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlBhc3MgMVwiLFxuICAgICAgXCJyb3V0aW5lLWtleVwiOiBcInByZWxpbV9wYXNzXzFcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwic2NvcmVjaGFuZ2VkXCI6IF92bS51cGRhdGVBbGxTY29yZXNcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS5kbXRDb2xTaXplXG4gIH0sIFtfYygnZG10LXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAyXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfMlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS5kbXRDb2xTaXplXG4gIH0sIFtfYygnZG10LXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAzXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfM1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZG91YmxlTWluaVBhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkb3VibGVNaW5pUGFzc2VzLnNob3dGaW5hbFwiXG4gICAgfV0sXG4gICAgY2xhc3M6ICdjb2wtbWQtJyArIF92bS5kbXRDb2xTaXplXG4gIH0sIFtfYygnZG10LXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyA0XCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfNFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnR1bWJsaW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHVtYmxpbmdcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidHVtYmxpbmdcIixcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0dW1ibGluZ1wiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLnR1bWJsaW5nKSA/IF92bS5faShfdm0udHVtYmxpbmcsIG51bGwpID4gLTEgOiAoX3ZtLnR1bWJsaW5nKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLnR1bWJsaW5nLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdik7XG4gICAgICAgICAgaWYgKCQkYykge1xuICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnR1bWJsaW5nID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLnR1bWJsaW5nID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS50dW1ibGluZyA9ICQkY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFR1bWJsaW5nXFxuICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHVtYmxpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwgPSAhX3ZtLnR1bWJsaW5nUGFzc2VzLnNob3dGaW5hbFxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dW1ibGluZ1Bhc3Nlcy5zaG93RmluYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIlxuICB9KSwgX3ZtLl92KFwiIEZpbmFsc1xcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dW1ibGluZyksXG4gICAgICBleHByZXNzaW9uOiBcInR1bWJsaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnR1bWJsaW5nQ29sU2l6ZVxuICB9LCBbX2MoJ3R1bWJsaW5nLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAxXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfMVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnR1bWJsaW5nQ29sU2l6ZVxuICB9LCBbX2MoJ3R1bWJsaW5nLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAyXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfMlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnR1bWJsaW5nQ29sU2l6ZVxuICB9LCBbX2MoJ3R1bWJsaW5nLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyAzXCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfM1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidHVtYmxpbmdQYXNzZXMuc2hvd0ZpbmFsXCJcbiAgICB9XSxcbiAgICBjbGFzczogJ2NvbC1tZC0nICsgX3ZtLnR1bWJsaW5nQ29sU2l6ZVxuICB9LCBbX2MoJ3R1bWJsaW5nLXNjb3JlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUGFzcyA0XCIsXG4gICAgICBcInJvdXRpbmUta2V5XCI6IFwicHJlbGltX3Bhc3NfNFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzY29yZWNoYW5nZWRcIjogX3ZtLnVwZGF0ZUFsbFNjb3Jlc1xuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5lcnJvcnMuYW55KCkgfHwgX3ZtLmV2ZW50c0ludmFsaWQoKVxuICAgIH1cbiAgfSwgW192bS5fdihcIlN1Ym1pdCBDb21wZXRpdGlvblwiKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzViZWIyZWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc1YmViMmVjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tcGV0aXRpb25Gb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJibG9jayAhaW1wb3J0YW50XCJcbiAgICB9XG4gIH0sIFtfYygnYScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnNob3dWaWRlbyksXG4gICAgICBleHByZXNzaW9uOiBcIiFzaG93VmlkZW9cIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnBsYXlWaWRlbygkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5XCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgUGxheSBWaWRlb1xcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dWaWRlbyksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dWaWRlb1wiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uaGlkZVZpZGVvKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtdXBcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICBIaWRlIFZpZGVvXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndmlkZW8nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpbiB2anMtYmlnLXBsYXktY2VudGVyZWQgdmpzLTE2LTkgdmpzLWhpZGRlblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6ICd2aWRlby0nICsgX3ZtLnZpZGVvSWQsXG4gICAgICBcImNvbnRyb2xzXCI6IFwiXCIsXG4gICAgICBcImRhdGEtc2V0dXBcIjogXCJ7XFxcImZsdWlkXFxcIjogdHJ1ZX1cIixcbiAgICAgIFwicG9zdGVyXCI6IF92bS5pbWcsXG4gICAgICBcIndpZHRoXCI6IF92bS53aWR0aCxcbiAgICAgIFwiaGVpZ2h0XCI6IF92bS5oZWlnaHRcbiAgICB9XG4gIH0sIFtfYygnc291cmNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ2aWRlby9tcDRcIixcbiAgICAgIFwic3JjXCI6IF92bS5zcmNcbiAgICB9XG4gIH0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03YjMwODZjNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2IzMDg2YzYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TbWFsbFZpZGVvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW192bS5fdihcIlVwbG9hZCBZb3VyIFZpZGVvXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5hbWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJuYW1lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uYXV0aGVudGljYXRlZFxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5uYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImV2ZW50XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJFdmVudFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV2ZW50KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXZlbnRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS5ldmVudCA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJ0cmFtcG9saW5lXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUcmFtcG9saW5lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJkb3VibGUgbWluaVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRG91YmxlLW1pbmlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInR1bWJsaW5nXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUdW1ibGluZ1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0udXBsb2FkaW5nKSA/IF9jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZmlsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwidmlkZW9cIixcbiAgICAgIFwiaWRcIjogXCJ2aWRlb1wiLFxuICAgICAgXCJkaXNhYmxlZFwiOiAhX3ZtLm5hbWUgfHwgIV92bS5ldmVudFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5maWxlSW5wdXRDaGFuZ2VcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uZmFpbGVkKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0udXBsb2FkaW5nICYmICFfdm0uZmFpbGVkKSA/IF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ2aWRlby1mb3JtXCJcbiAgICB9XG4gIH0sIFsoIV92bS51cGxvYWRpbmdDb21wbGV0ZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWluZm9cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcmVmcmVzaCBmYS1zcGluXCJcbiAgfSksIF92bS5fdihcIiBZb3VyIHZpZGVvIGlzIHVwbG9hZGluZy4uLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0udXBsb2FkaW5nQ29tcGxldGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1zdWNjZXNzXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgY29tcGxldGUuIFZpZGVvIGlzIG5vdyBwcm9jZXNzaW5nLiBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIvdmlkZW9zXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJHbyB0byB5b3VyIHZpZGVvcy5cIildKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICghX3ZtLnVwbG9hZGluZ0NvbXBsZXRlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy1iYXJcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIHdpZHRoOiBfdm0uZmlsZVByb2dyZXNzICsgJyUnXG4gICAgfSlcbiAgfSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUaXRsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udGl0bGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0aXRsZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50aXRsZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50aXRsZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZGVzY3JpcHRpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRlc2NyaXB0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kZXNjcmlwdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcImRlc2NyaXB0aW9uXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmRlc2NyaXB0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmRlc2NyaXB0aW9uID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJ2aXNpYmlsaXR5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJWaXNpYmlsaXR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udmlzaWJpbGl0eSksXG4gICAgICBleHByZXNzaW9uOiBcInZpc2liaWxpdHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS52aXNpYmlsaXR5ID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInByaXZhdGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlByaXZhdGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInVubGlzdGVkXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVbmxpc3RlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicHVibGljXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQdWJsaWNcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgcHVsbC1yaWdodFwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zYXZlU3RhdHVzKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU2F2ZSBDaGFuZ2VzXCIpXSldKSA6IF92bS5fZSgpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi04Y2NmNjY3YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOGNjZjY2N2EhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb1VwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDgwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRpbmUtdmlkZW8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzY2lwbGluZVwiOiBfdm0uc2NvcmUuZGlzY2lwbGluZSxcbiAgICAgIFwicm91dGluZS1rZXlcIjogX3ZtLnJvdXRpbmVLZXlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInZpZGVvLXVwbG9hZGVkXCI6IF92bS52aWRlb1VwbG9hZGVkXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uc2NvcmUuc2NvcmVLZXlzKCkpLCBmdW5jdGlvbihjb21wb25lbnRfa2V5KSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCBbKGNvbXBvbmVudF9rZXkgIT09ICd0b3RhbF9zY29yZScpID8gX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImZvclwiOiBfdm0uZm9ybUlkKGNvbXBvbmVudF9rZXkpLFxuICAgICAgICBcInRpdGxlXCI6IF92bS5zY29yZS5nZXRUaXRsZShjb21wb25lbnRfa2V5KVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zY29yZS5nZXRMYWJlbChjb21wb25lbnRfa2V5KSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgICB2YWx1ZTogKF92bS5zY29yZS5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSksXG4gICAgICAgIGV4cHJlc3Npb246IFwic2NvcmUuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWVcIixcbiAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoY29tcG9uZW50X2tleSksXG4gICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogKF92bS5zY29yZS5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNoYW5nZVwiOiBfdm0uY29tcHV0ZVNjb3JlLFxuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0uc2NvcmUuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoY29tcG9uZW50X2tleSA9PT0gJ3RvdGFsX3Njb3JlJykgPyBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICAgIFwidGl0bGVcIjogX3ZtLnNjb3JlLmdldFRpdGxlKCd0b3RhbF9zY29yZScpXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnNjb3JlLmdldExhYmVsKCd0b3RhbF9zY29yZScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICAgIHZhbHVlOiAoX3ZtLnNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJzY29yZS5hdHRycy50b3RhbF9zY29yZS52YWx1ZVwiLFxuICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgndG90YWxfc2NvcmUnKSxcbiAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlKVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2hhbmdlXCI6IF92bS5jb21wdXRlVG90YWxTY29yZSxcbiAgICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgX3ZtLnNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXSkgOiBfdm0uX2UoKV0pXG4gIH0pXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOTMzOGE2MzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTkzMzhhNjM2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL0RvdWJsZU1pbmlTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHNjb3JlLXRpbGVcIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRpbmUtdmlkZW8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzY2lwbGluZVwiOiBfdm0uc2NvcmUuZGlzY2lwbGluZSxcbiAgICAgIFwicm91dGluZS1rZXlcIjogX3ZtLnJvdXRpbmVLZXlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInZpZGVvLXVwbG9hZGVkXCI6IF92bS52aWRlb1VwbG9hZGVkXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uc2NvcmUuc2NvcmVLZXlzKCkpLCBmdW5jdGlvbihjb21wb25lbnRfa2V5KSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCBbKGNvbXBvbmVudF9rZXkgIT09ICd0b3RhbF9zY29yZScpID8gX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImZvclwiOiBfdm0uZm9ybUlkKGNvbXBvbmVudF9rZXkpLFxuICAgICAgICBcInRpdGxlXCI6IF92bS5zY29yZS5nZXRUaXRsZShjb21wb25lbnRfa2V5KVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zY29yZS5nZXRMYWJlbChjb21wb25lbnRfa2V5KSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgICB2YWx1ZTogKF92bS5zY29yZS5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSksXG4gICAgICAgIGV4cHJlc3Npb246IFwic2NvcmUuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWVcIixcbiAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgXCJudW1iZXJcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJuYW1lXCI6IF92bS5mb3JtSWQoY29tcG9uZW50X2tleSksXG4gICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgICBcInN0ZXBcIjogXCJhbnlcIlxuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogKF92bS5zY29yZS5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNoYW5nZVwiOiBfdm0uY29tcHV0ZVNjb3JlLFxuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0uc2NvcmUuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUgPSBfdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoY29tcG9uZW50X2tleSA9PT0gJ3RvdGFsX3Njb3JlJykgPyBfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiZm9yXCI6IF92bS5mb3JtSWQoJ3RvdGFsX3Njb3JlJyksXG4gICAgICAgIFwidGl0bGVcIjogX3ZtLnNjb3JlLmdldFRpdGxlKCd0b3RhbF9zY29yZScpXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnNjb3JlLmdldExhYmVsKCd0b3RhbF9zY29yZScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICAgIHZhbHVlOiAoX3ZtLnNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJzY29yZS5hdHRycy50b3RhbF9zY29yZS52YWx1ZVwiLFxuICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICBcIm51bWJlclwiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm5hbWVcIjogX3ZtLmZvcm1JZCgndG90YWxfc2NvcmUnKSxcbiAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgIFwic3RlcFwiOiBcImFueVwiXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlKVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2hhbmdlXCI6IF92bS5jb21wdXRlVG90YWxTY29yZSxcbiAgICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgX3ZtLnNjb3JlLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXSkgOiBfdm0uX2UoKV0pXG4gIH0pXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZTRlM2EzYTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWU0ZTNhM2EwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NvcmVzL1RyYW1wb2xpbmVTY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncCcsIFtfdm0uX3YoX3ZtLl9zKF92bS5jb21tZW50cy5sZW5ndGgpICsgXCIgXCIgKyBfdm0uX3MoX3ZtLl9mKFwicGx1cmFsaXplXCIpKF92bS5jb21tZW50cy5sZW5ndGgsICdjb21tZW50JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvLWNvbW1lbnQgY2xlYXJmaXhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZlwiOiBcIiRyb290LnVzZXIuYXV0aGVudGljYXRlZFwiXG4gICAgfVxuICB9LCBbX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmJvZHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJib2R5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgdmlkZW8tY29tbWVudF9faW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlNheSBzb21ldGhpbmcuLi5cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5ib2R5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmJvZHkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjEwcHhcIlxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5jcmVhdGVDb21tZW50KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFsoX3ZtLnBvc3RpbmcpID8gX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCJcbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFBvc3RcXG4gICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZWRpYS1saXN0XCJcbiAgfSwgX3ZtLl9sKChfdm0uY29tbWVudHMpLCBmdW5jdGlvbihjb21tZW50KSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLWxlZnRcIlxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBfdm0udXNlclVybChjb21tZW50KVxuICAgICAgfVxuICAgIH0sIFtfYygnaW1nJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtb2JqZWN0IGltZy1hdmF0YXJcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IGNvbW1lbnQudXNlci5kYXRhLmltYWdlLFxuICAgICAgICBcImFsdFwiOiBjb21tZW50LnVzZXIuZGF0YS5uYW1lXG4gICAgICB9XG4gICAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtYm9keVwiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKGNvbW1lbnQpXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoY29tbWVudC51c2VyLmRhdGEubmFtZSkpXSksIF92bS5fdihcIiBcIiArIF92bS5fcyhjb21tZW50LmNyZWF0ZWRfYXRfaHVtYW4pICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgXCIpLCAoY29tbWVudC5yZXBsaWVzLmRhdGEubGVuZ3RoKSA/IF9jKCdzcGFuJywgW192bS5fdihcIihcIiArIF92bS5fcyhjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGgpICsgXCIgIFwiICsgX3ZtLl9zKF92bS5fZihcInBsdXJhbGl6ZVwiKShjb21tZW50LnJlcGxpZXMuZGF0YS5sZW5ndGgsICdyZXBseScsICdyZXBsaWVzJykpICsgXCIpXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KF92bS5fcyhjb21tZW50LmJvZHkpKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiRyb290LnVzZXIuYXV0aGVudGljYXRlZCkgPyBfYygndWwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWlubGluZVwiXG4gICAgfSwgW19jKCdsaScsIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLnRvZ2dsZVJlcGx5Rm9ybShjb21tZW50LmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucmVwbHlGb3JtVmlzaWJsZSA9PT0gY29tbWVudC5pZCA/ICdDYW5jZWwgcmVwbHknIDogJ1JlcGx5JykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIChjb21tZW50LnVzZXJfaWQgPT09IF92bS4kcm9vdC51c2VyLmlkKSA/IF9jKCdsaScsIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLmRlbGV0ZUNvbW1lbnQoY29tbWVudC5pZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFsoX3ZtLmRlbGV0aW5nID09PSBjb21tZW50LmlkKSA/IF9jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCJcbiAgICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5yZXBseUZvcm1WaXNpYmxlID09PSBjb21tZW50LmlkKSA/IF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1jb21tZW50IGNsZWFyXCJcbiAgICB9LCBbX2MoJ3RleHRhcmVhJywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgdmFsdWU6IChfdm0ucmVwbHlCb2R5KSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJyZXBseUJvZHlcIlxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgdmlkZW8tY29tbWVudF9faW5wdXRcIixcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogKF92bS5yZXBseUJvZHkpXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgX3ZtLnJlcGx5Qm9keSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodFwiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMTBweFwiXG4gICAgICB9XG4gICAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uY3JlYXRlUmVwbHkoY29tbWVudC5pZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFsoX3ZtLnJlcGx5aW5nKSA/IF9jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHNwaW5uaW5nXCJcbiAgICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgUmVwbHlcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChjb21tZW50LnJlcGxpZXMuZGF0YSksIGZ1bmN0aW9uKHJlcGx5KSB7XG4gICAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWFcIlxuICAgICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLWxlZnRcIlxuICAgICAgfSwgW19jKCdhJywge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiaHJlZlwiOiBfdm0udXNlclVybChyZXBseSlcbiAgICAgICAgfVxuICAgICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLW9iamVjdCBpbWctYXZhdGFyXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJzcmNcIjogcmVwbHkudXNlci5kYXRhLmltYWdlLFxuICAgICAgICAgIFwiYWx0XCI6IHJlcGx5LnVzZXIuZGF0YS5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtYm9keVwiXG4gICAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJocmVmXCI6IF92bS51c2VyVXJsKHJlcGx5KVxuICAgICAgICB9XG4gICAgICB9LCBbX3ZtLl92KF92bS5fcyhyZXBseS51c2VyLmRhdGEubmFtZSkpXSksIF92bS5fdihcIiBcIiArIF92bS5fcyhyZXBseS5jcmVhdGVkX2F0X2h1bWFuKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygncCcsIFtfdm0uX3YoX3ZtLl9zKHJlcGx5LmJvZHkpKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiRyb290LnVzZXIuYXV0aGVudGljYXRlZCkgPyBfYygndWwnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtaW5saW5lXCJcbiAgICAgIH0sIFtfYygnbGknLCBbKHJlcGx5LnVzZXJfaWQgPT09IF92bS4kcm9vdC51c2VyLmlkKSA/IF9jKCdhJywge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIF92bS5kZWxldGVDb21tZW50KHJlcGx5LmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgWyhfdm0uZGVsZXRpbmcgPT09IHJlcGx5LmlkKSA/IF9jKCdpJywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggc3Bpbm5pbmdcIlxuICAgICAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKV0pXSkgOiBfdm0uX2UoKV0pXSlcbiAgICB9KV0sIDIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZWU3YjJlOTRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWVlN2IyZTk0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9Db21tZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDgxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hdHRycyA9IHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xuICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRXhlY3V0aW9uJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0V4ZWN1dGlvbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWZmaWN1bHR5OiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDIsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEaWZmaWN1bHR5JyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RpZmZpY3VsdHknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV1dHJhbF9kZWR1Y3Rpb246IHtcbiAgICAgICAgICAgICAgICBvcmRlcjogMjAsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdORCcsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOZXV0cmFsIERlZHVjdGlvbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3RhbF9zY29yZToge1xuICAgICAgICAgICAgICAgIG9yZGVyOiAxMDAsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUb3RhbCBTY29yZScsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUb3RhbCBTY29yZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aWRlb19pZCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0VmlkZW9JZChpZCkge1xuICAgICAgICB0aGlzLnZpZGVvX2lkID0gaWQ7XG4gICAgfVxuXG4gICAgdXBkYXRlQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdHRyc1trZXldLnZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzY29yZUtleXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmF0dHJzKS5zb3J0KChhLCBiKSA9PiB7IHJldHVybiB0aGlzLmF0dHJzW2FdLm9yZGVyIC0gdGhpcy5hdHRyc1tiXS5vcmRlcjsgfSk7XG4gICAgfVxuXG4gICAgZ2V0TGFiZWwoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJzW2tleV0ubGFiZWw7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJzW2tleV0udGl0bGU7XG4gICAgfVxuXG4gICAgaGFzU2NvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJzLnRvdGFsX3Njb3JlLnZhbHVlICE9PSBudWxsICYmIHRoaXMuYXR0cnMudG90YWxfc2NvcmUudmFsdWUgPiAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9TY29yZS5qcyIsInZhciBtYXRoID0gcmVxdWlyZSgnbWF0aGpzJyk7XG52YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5jb25zdCBTY29yZU1peGluID0ge1xuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHJvdXRpbmVLZXk6IG51bGwsXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZm9ybUlkKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLmRpc2NpcGxpbmUsIHRoaXMucm91dGluZUtleSwgY29tcG9uZW50XS5qb2luKCdfJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9nZ2xlU2hvd1F1ZXVlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1F1ZXVlZEZpbGVzID0gIXRoaXMuc2hvd1F1ZXVlZEZpbGVzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHZpZGVvVXBsb2FkZWQoZGF0YSkge1xuICAgICAgICAgICAgLy8gdGhpcy5zY29yZS5zZXRWaWRlb0lkKGRhdGEudmlkZW8uaWQpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMuJGVtaXQoJ3Njb3JlY2hhbmdlZCcsIHtcbiAgICAgICAgICAgIC8vICAgICByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksXG4gICAgICAgICAgICAvLyAgICAgc2NvcmU6IHRoaXMuc2NvcmUsXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlU2NvcmUoKSB7XG4gICAgICAgICAgICAvLyBsZXQgc3VtID0gMDtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzLnNjb3JlLnNjb3JlS2V5cygpLmZvckVhY2goKGNvbXBvbmVudF9rZXkpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBpZiAoY29tcG9uZW50X2tleSA9PT0gJ25ldXRyYWxfZGVkdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gICAgICAgICBzdW0gPSAodGhpcy5zY29yZS5hdHRycy5uZXV0cmFsX2RlZHVjdGlvbi52YWx1ZSkgPyBtYXRoLnN1YnRyYWN0KHN1bSwgdGhpcy5zY29yZS5hdHRycy5uZXV0cmFsX2RlZHVjdGlvbi52YWx1ZSkgOiBzdW07XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChjb21wb25lbnRfa2V5ICE9PSAndG90YWxfc2NvcmUnKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHN1bSA9ICh0aGlzLnNjb3JlLmF0dHJzW2NvbXBvbmVudF9rZXldLnZhbHVlKSA/IG1hdGguYWRkKHN1bSwgdGhpcy5zY29yZS5hdHRyc1tjb21wb25lbnRfa2V5XS52YWx1ZSkgOiBzdW07XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhpcy5zY29yZS5hdHRycy50b3RhbF9zY29yZS52YWx1ZSA9IG1hdGgucm91bmQoc3VtLCAzKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzLiRlbWl0KCdzY29yZWNoYW5nZWQnLCB7XG4gICAgICAgICAgICAvLyAgICAgcm91dGluZUtleTogdGhpcy5yb3V0aW5lS2V5LFxuICAgICAgICAgICAgLy8gICAgIHNjb3JlOiB0aGlzLnNjb3JlXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlVG90YWxTY29yZSgpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2NvcmUuc2NvcmVLZXlzKCkuZm9yRWFjaCgoY29tcG9uZW50X2tleSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGlmIChjb21wb25lbnRfa2V5ICE9PSAndG90YWxfc2NvcmUnKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2NvcmUuYXR0cnNbY29tcG9uZW50X2tleV0udmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMuJGVtaXQoJ3Njb3JlY2hhbmdlZCcsIHtcbiAgICAgICAgICAgIC8vICAgICByb3V0aW5lS2V5OiB0aGlzLnJvdXRpbmVLZXksXG4gICAgICAgICAgICAvLyAgICAgc2NvcmU6IHRoaXMuc2NvcmVcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiR1cGxvYWQucmVzZXQoJ3ZpZGVvLXVwbG9hZCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdXBsb2FkL211bHRpcGxlJyxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZXM6IDAsXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVJZDogJ3ZpZGVvLXVwbG9hZC1kcm9wem9uZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVNaXhpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9zY29yZS5taXhpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=