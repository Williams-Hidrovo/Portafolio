(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var Ku = { exports: {} },
  ll = {},
  Xu = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates .
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zn = Symbol.for("react.element"),
  uc = Symbol.for("react.portal"),
  sc = Symbol.for("react.fragment"),
  ac = Symbol.for("react.strict_mode"),
  cc = Symbol.for("react.profiler"),
  fc = Symbol.for("react.provider"),
  dc = Symbol.for("react.context"),
  pc = Symbol.for("react.forward_ref"),
  mc = Symbol.for("react.suspense"),
  hc = Symbol.for("react.memo"),
  vc = Symbol.for("react.lazy"),
  Ui = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ui && e[Ui]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zu = Object.assign,
  Ju = {};
function ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ju),
    (this.updater = n || Gu);
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qu() {}
qu.prototype = ln.prototype;
function Bo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ju),
    (this.updater = n || Gu);
}
var Wo = (Bo.prototype = new qu());
Wo.constructor = Bo;
Zu(Wo, ln.prototype);
Wo.isPureReactComponent = !0;
var Ai = Array.isArray,
  bu = Object.prototype.hasOwnProperty,
  Qo = { current: null },
  es = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      bu.call(t, r) && !es.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Zn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Qo.current,
  };
}
function gc(e, t) {
  return {
    $$typeof: Zn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zn;
}
function wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var $i = /\/+/g;
function El(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? wc("" + e.key)
    : t.toString(36);
}
function kr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zn:
          case uc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + El(i, 0) : r),
      Ai(l)
        ? ((n = ""),
          e != null && (n = e.replace($i, "$&/") + "/"),
          kr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Yo(l) &&
            (l = gc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace($i, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ai(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + El(o, u);
      i += kr(o, t, n, s, l);
    }
  else if (((s = yc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + El(o, u++)), (i += kr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function xc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Er = { transition: null },
  Sc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: Qo,
  };
L.Children = {
  map: rr,
  forEach: function (e, t, n) {
    rr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = ln;
L.Fragment = sc;
L.Profiler = cc;
L.PureComponent = Bo;
L.StrictMode = ac;
L.Suspense = mc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Zu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Qo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      bu.call(t, s) &&
        !es.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Zn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: dc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = ts;
L.createFactory = function (e) {
  var t = ts.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: pc, render: e };
};
L.isValidElement = Yo;
L.lazy = function (e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: xc };
};
L.memo = function (e, t) {
  return { $$typeof: hc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
L.useContext = function (e) {
  return se.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
L.useId = function () {
  return se.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return se.current.useRef(e);
};
L.useState = function (e) {
  return se.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return se.current.useTransition();
};
L.version = "18.2.0";
Xu.exports = L;
var b = Xu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc = b,
  Ec = Symbol.for("react.element"),
  _c = Symbol.for("react.fragment"),
  Nc = Object.prototype.hasOwnProperty,
  Cc = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Nc.call(t, r) && !Pc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ec,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Cc.current,
  };
}
ll.Fragment = _c;
ll.jsx = ns;
ll.jsxs = ns;
Ku.exports = ll;
var h = Ku.exports,
  Gl = {},
  rs = { exports: {} },
  we = {},
  ls = { exports: {} },
  os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, j) {
    var z = _.length;
    _.push(j);
    e: for (; 0 < z; ) {
      var W = (z - 1) >>> 1,
        G = _[W];
      if (0 < l(G, j)) (_[W] = j), (_[z] = G), (z = W);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var j = _[0],
      z = _.pop();
    if (z !== j) {
      _[0] = z;
      e: for (var W = 0, G = _.length, tr = G >>> 1; W < tr; ) {
        var vt = 2 * (W + 1) - 1,
          kl = _[vt],
          yt = vt + 1,
          nr = _[yt];
        if (0 > l(kl, z))
          yt < G && 0 > l(nr, kl)
            ? ((_[W] = nr), (_[yt] = z), (W = yt))
            : ((_[W] = kl), (_[vt] = z), (W = vt));
        else if (yt < G && 0 > l(nr, z)) (_[W] = nr), (_[yt] = z), (W = yt);
        else break e;
      }
    }
    return j;
  }
  function l(_, j) {
    var z = _.sortIndex - j.sortIndex;
    return z !== 0 ? z : _.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    v = 1,
    m = null,
    p = 3,
    w = !1,
    x = !1,
    S = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= _)
        r(c), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = n(c);
    }
  }
  function y(_) {
    if (((S = !1), d(_), !x))
      if (n(s) !== null) (x = !0), xl(E);
      else {
        var j = n(c);
        j !== null && Sl(y, j.startTime - _);
      }
  }
  function E(_, j) {
    (x = !1), S && ((S = !1), f(P), (P = -1)), (w = !0);
    var z = p;
    try {
      for (
        d(j), m = n(s);
        m !== null && (!(m.expirationTime > j) || (_ && !Pe()));

      ) {
        var W = m.callback;
        if (typeof W == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var G = W(m.expirationTime <= j);
          (j = e.unstable_now()),
            typeof G == "function" ? (m.callback = G) : m === n(s) && r(s),
            d(j);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var tr = !0;
      else {
        var vt = n(c);
        vt !== null && Sl(y, vt.startTime - j), (tr = !1);
      }
      return tr;
    } finally {
      (m = null), (p = z), (w = !1);
    }
  }
  var N = !1,
    C = null,
    P = -1,
    B = 5,
    T = -1;
  function Pe() {
    return !(e.unstable_now() - T < B);
  }
  function an() {
    if (C !== null) {
      var _ = e.unstable_now();
      T = _;
      var j = !0;
      try {
        j = C(!0, _);
      } finally {
        j ? cn() : ((N = !1), (C = null));
      }
    } else N = !1;
  }
  var cn;
  if (typeof a == "function")
    cn = function () {
      a(an);
    };
  else if (typeof MessageChannel < "u") {
    var Fi = new MessageChannel(),
      ic = Fi.port2;
    (Fi.port1.onmessage = an),
      (cn = function () {
        ic.postMessage(null);
      });
  } else
    cn = function () {
      F(an, 0);
    };
  function xl(_) {
    (C = _), N || ((N = !0), cn());
  }
  function Sl(_, j) {
    P = F(function () {
      _(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), xl(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = p;
      }
      var z = p;
      p = j;
      try {
        return _();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, j) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var z = p;
      p = _;
      try {
        return j();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (_, j, z) {
      var W = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? W + z : W))
          : (z = W),
        _)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (_ = {
          id: v++,
          callback: j,
          priorityLevel: _,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > W
          ? ((_.sortIndex = z),
            t(c, _),
            n(s) === null &&
              _ === n(c) &&
              (S ? (f(P), (P = -1)) : (S = !0), Sl(y, z - W)))
          : ((_.sortIndex = G), t(s, _), x || w || ((x = !0), xl(E))),
        _
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (_) {
      var j = p;
      return function () {
        var z = p;
        p = j;
        try {
          return _.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(os);
ls.exports = os;
var jc = ls.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var is = b,
  ge = jc;
function g(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var us = new Set(),
  In = {};
function Lt(e, t) {
  Jt(e, t), Jt(e + "Capture", t);
}
function Jt(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++) us.add(t[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zl = Object.prototype.hasOwnProperty,
  zc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vi = {},
  Hi = {};
function Lc(e) {
  return Zl.call(Hi, e)
    ? !0
    : Zl.call(Vi, e)
    ? !1
    : zc.test(e)
    ? (Hi[e] = !0)
    : ((Vi[e] = !0), !1);
}
function Tc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rc(e, t, n, r) {
  if (t === null || typeof t > "u" || Tc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ko = /[\-:]([a-z])/g;
function Xo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ko, Xo);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ko, Xo);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ko, Xo);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Go(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rc(t, n, l, r) && (n = null),
    r || l === null
      ? Lc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = is.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = Symbol.for("react.element"),
  It = Symbol.for("react.portal"),
  Ot = Symbol.for("react.fragment"),
  Zo = Symbol.for("react.strict_mode"),
  Jl = Symbol.for("react.profiler"),
  ss = Symbol.for("react.provider"),
  as = Symbol.for("react.context"),
  Jo = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  qo = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  cs = Symbol.for("react.offscreen"),
  Bi = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bi && e[Bi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  _l;
function xn(e) {
  if (_l === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _l = (t && t[1]) || "";
    }
  return (
    `
` +
    _l +
    e
  );
}
var Nl = !1;
function Cl(e, t) {
  if (!e || Nl) return "";
  Nl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Nl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? xn(e) : "";
}
function Ic(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn("Lazy");
    case 13:
      return xn("Suspense");
    case 19:
      return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Cl(e.type, !1)), e;
    case 11:
      return (e = Cl(e.type.render, !1)), e;
    case 1:
      return (e = Cl(e.type, !0)), e;
    default:
      return "";
  }
}
function eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case It:
      return "Portal";
    case Jl:
      return "Profiler";
    case Zo:
      return "StrictMode";
    case ql:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case as:
        return (e.displayName || "Context") + ".Consumer";
      case ss:
        return (e._context.displayName || "Context") + ".Provider";
      case Jo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qo:
        return (
          (t = e.displayName || null), t !== null ? t : eo(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return eo(e(t));
        } catch {}
    }
  return null;
}
function Oc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return eo(t);
    case 8:
      return t === Zo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Mc(e) {
  var t = fs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = Mc(e));
}
function ds(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = fs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Or(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function to(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Wi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ps(e, t) {
  (t = t.checked), t != null && Go(e, "checked", t, !1);
}
function no(e, t) {
  ps(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ro(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ro(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Qi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ro(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sn = Array.isArray;
function Qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function lo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Yi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function ms(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ki(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function oo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? hs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ir,
  vs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ir = ir || document.createElement("div"),
          ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function On(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _n = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dc = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function (e) {
  Dc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_n[t] = _n[e]);
  });
});
function ys(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_n.hasOwnProperty(e) && _n[e])
    ? ("" + t).trim()
    : t + "px";
}
function gs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ys(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Fc = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function io(e, t) {
  if (t) {
    if (Fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function uo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var so = null;
function bo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ao = null,
  Yt = null,
  Kt = null;
function Xi(e) {
  if ((e = bn(e))) {
    if (typeof ao != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = al(t)), ao(e.stateNode, e.type, t));
  }
}
function ws(e) {
  Yt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Yt = e);
}
function xs() {
  if (Yt) {
    var e = Yt,
      t = Kt;
    if (((Kt = Yt = null), Xi(e), t)) for (e = 0; e < t.length; e++) Xi(t[e]);
  }
}
function Ss(e, t) {
  return e(t);
}
function ks() {}
var Pl = !1;
function Es(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return Ss(e, t, n);
  } finally {
    (Pl = !1), (Yt !== null || Kt !== null) && (ks(), xs());
  }
}
function Mn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var co = !1;
if (Qe)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        co = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    co = !1;
  }
function Uc(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var Nn = !1,
  Mr = null,
  Dr = !1,
  fo = null,
  Ac = {
    onError: function (e) {
      (Nn = !0), (Mr = e);
    },
  };
function $c(e, t, n, r, l, o, i, u, s) {
  (Nn = !1), (Mr = null), Uc.apply(Ac, arguments);
}
function Vc(e, t, n, r, l, o, i, u, s) {
  if (($c.apply(this, arguments), Nn)) {
    if (Nn) {
      var c = Mr;
      (Nn = !1), (Mr = null);
    } else throw Error(g(198));
    Dr || ((Dr = !0), (fo = c));
  }
}
function Tt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _s(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gi(e) {
  if (Tt(e) !== e) throw Error(g(188));
}
function Hc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tt(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Gi(l), e;
        if (o === r) return Gi(l), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Ns(e) {
  return (e = Hc(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ps = ge.unstable_scheduleCallback,
  Zi = ge.unstable_cancelCallback,
  Bc = ge.unstable_shouldYield,
  Wc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  Qc = ge.unstable_getCurrentPriorityLevel,
  ei = ge.unstable_ImmediatePriority,
  js = ge.unstable_UserBlockingPriority,
  Fr = ge.unstable_NormalPriority,
  Yc = ge.unstable_LowPriority,
  zs = ge.unstable_IdlePriority,
  ol = null,
  Ue = null;
function Kc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Zc,
  Xc = Math.log,
  Gc = Math.LN2;
function Zc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xc(e) / Gc) | 0)) | 0;
}
var ur = 64,
  sr = 4194304;
function kn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ur(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = kn(u)) : ((o &= i), o !== 0 && (r = kn(o)));
  } else (i = n & ~l), i !== 0 ? (r = kn(i)) : o !== 0 && (r = kn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Jc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Re(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Jc(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function po(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ls() {
  var e = ur;
  return (ur <<= 1), !(ur & 4194240) && (ur = 64), e;
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function bc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ti(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function Ts(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rs,
  ni,
  Is,
  Os,
  Ms,
  mo = !1,
  ar = [],
  rt = null,
  lt = null,
  ot = null,
  Dn = new Map(),
  Fn = new Map(),
  be = [],
  ef =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ji(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fn.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = bn(t)), t !== null && ni(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function tf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rt = pn(rt, e, t, n, r, l)), !0;
    case "dragenter":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = pn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dn.set(o, pn(Dn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Fn.set(o, pn(Fn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ds(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Tt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _s(n)), t !== null)) {
          (e.blockedOn = t),
            Ms(e.priority, function () {
              Is(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _r(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (so = r), n.target.dispatchEvent(r), (so = null);
    } else return (t = bn(n)), t !== null && ni(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qi(e, t, n) {
  _r(e) && n.delete(t);
}
function nf() {
  (mo = !1),
    rt !== null && _r(rt) && (rt = null),
    lt !== null && _r(lt) && (lt = null),
    ot !== null && _r(ot) && (ot = null),
    Dn.forEach(qi),
    Fn.forEach(qi);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    mo ||
      ((mo = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, nf)));
}
function Un(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < ar.length) {
    mn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && mn(rt, e),
      lt !== null && mn(lt, e),
      ot !== null && mn(ot, e),
      Dn.forEach(t),
      Fn.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Ds(n), n.blockedOn === null && be.shift();
}
var Xt = Ge.ReactCurrentBatchConfig,
  Ar = !0;
function rf(e, t, n, r) {
  var l = I,
    o = Xt.transition;
  Xt.transition = null;
  try {
    (I = 1), ri(e, t, n, r);
  } finally {
    (I = l), (Xt.transition = o);
  }
}
function lf(e, t, n, r) {
  var l = I,
    o = Xt.transition;
  Xt.transition = null;
  try {
    (I = 4), ri(e, t, n, r);
  } finally {
    (I = l), (Xt.transition = o);
  }
}
function ri(e, t, n, r) {
  if (Ar) {
    var l = ho(e, t, n, r);
    if (l === null) Ul(e, t, r, $r, n), Ji(e, r);
    else if (tf(l, e, t, n, r)) r.stopPropagation();
    else if ((Ji(e, r), t & 4 && -1 < ef.indexOf(e))) {
      for (; l !== null; ) {
        var o = bn(l);
        if (
          (o !== null && Rs(o),
          (o = ho(e, t, n, r)),
          o === null && Ul(e, t, r, $r, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var $r = null;
function ho(e, t, n, r) {
  if ((($r = null), (e = bo(r)), (e = xt(e)), e !== null))
    if (((t = Tt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _s(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($r = e), null;
}
function Fs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Qc()) {
        case ei:
          return 1;
        case js:
          return 4;
        case Fr:
        case Yc:
          return 16;
        case zs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  li = null,
  Nr = null;
function Us() {
  if (Nr) return Nr;
  var e,
    t = li,
    n = t.length,
    r,
    l = "value" in tt ? tt.value : tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Nr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Cr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cr() {
  return !0;
}
function bi() {
  return !1;
}
function xe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? cr
        : bi),
      (this.isPropagationStopped = bi),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = cr));
      },
      persist: function () {},
      isPersistent: cr,
    }),
    t
  );
}
var on = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  oi = xe(on),
  qn = V({}, on, { view: 0, detail: 0 }),
  of = xe(qn),
  zl,
  Ll,
  hn,
  il = V({}, qn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ii,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === "mousemove"
              ? ((zl = e.screenX - hn.screenX), (Ll = e.screenY - hn.screenY))
              : (Ll = zl = 0),
            (hn = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ll;
    },
  }),
  eu = xe(il),
  uf = V({}, il, { dataTransfer: 0 }),
  sf = xe(uf),
  af = V({}, qn, { relatedTarget: 0 }),
  Tl = xe(af),
  cf = V({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ff = xe(cf),
  df = V({}, on, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pf = xe(df),
  mf = V({}, on, { data: 0 }),
  tu = xe(mf),
  hf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  yf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yf[e]) ? !!t[e] : !1;
}
function ii() {
  return gf;
}
var wf = V({}, qn, {
    key: function (e) {
      if (e.key) {
        var t = hf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ii,
    charCode: function (e) {
      return e.type === "keypress" ? Cr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xf = xe(wf),
  Sf = V({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  nu = xe(Sf),
  kf = V({}, qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ii,
  }),
  Ef = xe(kf),
  _f = V({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nf = xe(_f),
  Cf = V({}, il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Pf = xe(Cf),
  jf = [9, 13, 27, 32],
  ui = Qe && "CompositionEvent" in window,
  Cn = null;
Qe && "documentMode" in document && (Cn = document.documentMode);
var zf = Qe && "TextEvent" in window && !Cn,
  As = Qe && (!ui || (Cn && 8 < Cn && 11 >= Cn)),
  ru = String.fromCharCode(32),
  lu = !1;
function $s(e, t) {
  switch (e) {
    case "keyup":
      return jf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mt = !1;
function Lf(e, t) {
  switch (e) {
    case "compositionend":
      return Vs(t);
    case "keypress":
      return t.which !== 32 ? null : ((lu = !0), ru);
    case "textInput":
      return (e = t.data), e === ru && lu ? null : e;
    default:
      return null;
  }
}
function Tf(e, t) {
  if (Mt)
    return e === "compositionend" || (!ui && $s(e, t))
      ? ((e = Us()), (Nr = li = tt = null), (Mt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return As && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rf[e.type] : t === "textarea";
}
function Hs(e, t, n, r) {
  ws(r),
    (t = Vr(t, "onChange")),
    0 < t.length &&
      ((n = new oi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pn = null,
  An = null;
function If(e) {
  bs(e, 0);
}
function ul(e) {
  var t = Ut(e);
  if (ds(t)) return e;
}
function Of(e, t) {
  if (e === "change") return t;
}
var Bs = !1;
if (Qe) {
  var Rl;
  if (Qe) {
    var Il = "oninput" in document;
    if (!Il) {
      var iu = document.createElement("div");
      iu.setAttribute("oninput", "return;"),
        (Il = typeof iu.oninput == "function");
    }
    Rl = Il;
  } else Rl = !1;
  Bs = Rl && (!document.documentMode || 9 < document.documentMode);
}
function uu() {
  Pn && (Pn.detachEvent("onpropertychange", Ws), (An = Pn = null));
}
function Ws(e) {
  if (e.propertyName === "value" && ul(An)) {
    var t = [];
    Hs(t, An, e, bo(e)), Es(If, t);
  }
}
function Mf(e, t, n) {
  e === "focusin"
    ? (uu(), (Pn = t), (An = n), Pn.attachEvent("onpropertychange", Ws))
    : e === "focusout" && uu();
}
function Df(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ul(An);
}
function Ff(e, t) {
  if (e === "click") return ul(t);
}
function Uf(e, t) {
  if (e === "input" || e === "change") return ul(t);
}
function Af(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Oe = typeof Object.is == "function" ? Object.is : Af;
function $n(e, t) {
  if (Oe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zl.call(t, l) || !Oe(e[l], t[l])) return !1;
  }
  return !0;
}
function su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function au(e, t) {
  var n = su(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = su(n);
  }
}
function Qs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ys() {
  for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Or(e.document);
  }
  return t;
}
function si(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $f(e) {
  var t = Ys(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && si(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = au(n, o));
        var i = au(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Vf = Qe && "documentMode" in document && 11 >= document.documentMode,
  Dt = null,
  vo = null,
  jn = null,
  yo = !1;
function cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yo ||
    Dt == null ||
    Dt !== Or(r) ||
    ((r = Dt),
    "selectionStart" in r && si(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jn && $n(jn, r)) ||
      ((jn = r),
      (r = Vr(vo, "onSelect")),
      0 < r.length &&
        ((t = new oi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Dt))));
}
function fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ft = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd"),
  },
  Ol = {},
  Ks = {};
Qe &&
  ((Ks = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ft.animationend.animation,
    delete Ft.animationiteration.animation,
    delete Ft.animationstart.animation),
  "TransitionEvent" in window || delete Ft.transitionend.transition);
function sl(e) {
  if (Ol[e]) return Ol[e];
  if (!Ft[e]) return e;
  var t = Ft[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ks) return (Ol[e] = t[n]);
  return e;
}
var Xs = sl("animationend"),
  Gs = sl("animationiteration"),
  Zs = sl("animationstart"),
  Js = sl("transitionend"),
  qs = new Map(),
  fu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  qs.set(e, t), Lt(t, [e]);
}
for (var Ml = 0; Ml < fu.length; Ml++) {
  var Dl = fu[Ml],
    Hf = Dl.toLowerCase(),
    Bf = Dl[0].toUpperCase() + Dl.slice(1);
  pt(Hf, "on" + Bf);
}
pt(Xs, "onAnimationEnd");
pt(Gs, "onAnimationIteration");
pt(Zs, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Js, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Lt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Lt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var En =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function du(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Vc(r, t, void 0, e), (e.currentTarget = null);
}
function bs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          du(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          du(l, u, c), (o = s);
        }
    }
  }
  if (Dr) throw ((e = fo), (Dr = !1), (fo = null), e);
}
function M(e, t) {
  var n = t[ko];
  n === void 0 && (n = t[ko] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ea(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), ea(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Vn(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      us.forEach(function (n) {
        n !== "selectionchange" && (Wf.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || ((t[dr] = !0), Fl("selectionchange", !1, t));
  }
}
function ea(e, t, n, r) {
  switch (Fs(t)) {
    case 1:
      var l = rf;
      break;
    case 4:
      l = lf;
      break;
    default:
      l = ri;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !co ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ul(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = xt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Es(function () {
    var c = o,
      v = bo(n),
      m = [];
    e: {
      var p = qs.get(e);
      if (p !== void 0) {
        var w = oi,
          x = e;
        switch (e) {
          case "keypress":
            if (Cr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = xf;
            break;
          case "focusin":
            (x = "focus"), (w = Tl);
            break;
          case "focusout":
            (x = "blur"), (w = Tl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ef;
            break;
          case Xs:
          case Gs:
          case Zs:
            w = ff;
            break;
          case Js:
            w = Nf;
            break;
          case "scroll":
            w = of;
            break;
          case "wheel":
            w = Pf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = nu;
        }
        var S = (t & 4) !== 0,
          F = !S && e === "scroll",
          f = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = Mn(a, f)), y != null && S.push(Hn(a, y, d)))),
            F)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new w(p, x, null, n, v)), m.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== so &&
            (x = n.relatedTarget || n.fromElement) &&
            (xt(x) || x[Ye]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            v.window === v
              ? v
              : (p = v.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? xt(x) : null),
              x !== null &&
                ((F = Tt(x)), x !== F || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((S = eu),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = nu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (F = w == null ? p : Ut(w)),
            (d = x == null ? p : Ut(x)),
            (p = new S(y, a + "leave", w, n, v)),
            (p.target = F),
            (p.relatedTarget = d),
            (y = null),
            xt(v) === c &&
              ((S = new S(f, a + "enter", x, n, v)),
              (S.target = d),
              (S.relatedTarget = F),
              (y = S)),
            (F = y),
            w && x)
          )
            t: {
              for (S = w, f = x, a = 0, d = S; d; d = Rt(d)) a++;
              for (d = 0, y = f; y; y = Rt(y)) d++;
              for (; 0 < a - d; ) (S = Rt(S)), a--;
              for (; 0 < d - a; ) (f = Rt(f)), d--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Rt(S)), (f = Rt(f));
              }
              S = null;
            }
          else S = null;
          w !== null && pu(m, p, w, S, !1),
            x !== null && F !== null && pu(m, F, x, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? Ut(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var E = Of;
        else if (ou(p))
          if (Bs) E = Uf;
          else {
            E = Df;
            var N = Mf;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Ff);
        if (E && (E = E(e, c))) {
          Hs(m, E, n, v);
          break e;
        }
        N && N(e, p, c),
          e === "focusout" &&
            (N = p._wrapperState) &&
            N.controlled &&
            p.type === "number" &&
            ro(p, "number", p.value);
      }
      switch (((N = c ? Ut(c) : window), e)) {
        case "focusin":
          (ou(N) || N.contentEditable === "true") &&
            ((Dt = N), (vo = c), (jn = null));
          break;
        case "focusout":
          jn = vo = Dt = null;
          break;
        case "mousedown":
          yo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yo = !1), cu(m, n, v);
          break;
        case "selectionchange":
          if (Vf) break;
        case "keydown":
        case "keyup":
          cu(m, n, v);
      }
      var C;
      if (ui)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Mt
          ? $s(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (As &&
          n.locale !== "ko" &&
          (Mt || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Mt && (C = Us())
            : ((tt = v),
              (li = "value" in tt ? tt.value : tt.textContent),
              (Mt = !0))),
        (N = Vr(c, P)),
        0 < N.length &&
          ((P = new tu(P, e, null, n, v)),
          m.push({ event: P, listeners: N }),
          C ? (P.data = C) : ((C = Vs(n)), C !== null && (P.data = C)))),
        (C = zf ? Lf(e, n) : Tf(e, n)) &&
          ((c = Vr(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new tu("onBeforeInput", "beforeinput", null, n, v)),
            m.push({ event: v, listeners: c }),
            (v.data = C)));
    }
    bs(m, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Mn(e, n)),
      o != null && r.unshift(Hn(e, o, l)),
      (o = Mn(e, t)),
      o != null && r.push(Hn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Mn(n, o)), s != null && i.unshift(Hn(n, s, u)))
        : l || ((s = Mn(n, o)), s != null && i.push(Hn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Qf = /\r\n?/g,
  Yf = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qf,
      `
`
    )
    .replace(Yf, "");
}
function pr(e, t, n) {
  if (((t = mu(t)), mu(e) !== t && n)) throw Error(g(425));
}
function Hr() {}
var go = null,
  wo = null;
function xo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var So = typeof setTimeout == "function" ? setTimeout : void 0,
  Kf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hu = typeof Promise == "function" ? Promise : void 0,
  Xf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hu < "u"
      ? function (e) {
          return hu.resolve(null).then(e).catch(Gf);
        }
      : So;
function Gf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Un(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Un(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var un = Math.random().toString(36).slice(2),
  Fe = "__reactFiber$" + un,
  Bn = "__reactProps$" + un,
  Ye = "__reactContainer$" + un,
  ko = "__reactEvents$" + un,
  Zf = "__reactListeners$" + un,
  Jf = "__reactHandles$" + un;
function xt(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Fe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = vu(e); e !== null; ) {
          if ((n = e[Fe])) return n;
          e = vu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bn(e) {
  return (
    (e = e[Fe] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function al(e) {
  return e[Bn] || null;
}
var Eo = [],
  At = -1;
function mt(e) {
  return { current: e };
}
function D(e) {
  0 > At || ((e.current = Eo[At]), (Eo[At] = null), At--);
}
function O(e, t) {
  At++, (Eo[At] = e.current), (e.current = t);
}
var dt = {},
  oe = mt(dt),
  de = mt(!1),
  Nt = dt;
function qt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Br() {
  D(de), D(oe);
}
function yu(e, t, n) {
  if (oe.current !== dt) throw Error(g(168));
  O(oe, t), O(de, n);
}
function ta(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Oc(e) || "Unknown", l));
  return V({}, n, r);
}
function Wr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Nt = oe.current),
    O(oe, e),
    O(de, de.current),
    !0
  );
}
function gu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = ta(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(de),
      D(oe),
      O(oe, e))
    : D(de),
    O(de, n);
}
var Ve = null,
  cl = !1,
  $l = !1;
function na(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function qf(e) {
  (cl = !0), na(e);
}
function ht() {
  if (!$l && Ve !== null) {
    $l = !0;
    var e = 0,
      t = I;
    try {
      var n = Ve;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (cl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ps(ei, ht), l);
    } finally {
      (I = t), ($l = !1);
    }
  }
  return null;
}
var $t = [],
  Vt = 0,
  Qr = null,
  Yr = 0,
  Se = [],
  ke = 0,
  Ct = null,
  He = 1,
  Be = "";
function gt(e, t) {
  ($t[Vt++] = Yr), ($t[Vt++] = Qr), (Qr = e), (Yr = t);
}
function ra(e, t, n) {
  (Se[ke++] = He), (Se[ke++] = Be), (Se[ke++] = Ct), (Ct = e);
  var r = He;
  e = Be;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (He = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (Be = o + e);
  } else (He = (1 << o) | (n << l) | r), (Be = e);
}
function ai(e) {
  e.return !== null && (gt(e, 1), ra(e, 1, 0));
}
function ci(e) {
  for (; e === Qr; )
    (Qr = $t[--Vt]), ($t[Vt] = null), (Yr = $t[--Vt]), ($t[Vt] = null);
  for (; e === Ct; )
    (Ct = Se[--ke]),
      (Se[ke] = null),
      (Be = Se[--ke]),
      (Se[ke] = null),
      (He = Se[--ke]),
      (Se[ke] = null);
}
var ye = null,
  ve = null,
  U = !1,
  Te = null;
function la(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ct !== null ? { id: He, overflow: Be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _o(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function No(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!wu(e, t)) {
        if (_o(e)) throw Error(g(418));
        t = it(n.nextSibling);
        var r = ye;
        t && wu(e, t)
          ? la(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
      }
    } else {
      if (_o(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
    }
  }
}
function xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function mr(e) {
  if (e !== ye) return !1;
  if (!U) return xu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xo(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (_o(e)) throw (oa(), Error(g(418)));
    for (; t; ) la(e, t), (t = it(t.nextSibling));
  }
  if ((xu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function oa() {
  for (var e = ve; e; ) e = it(e.nextSibling);
}
function bt() {
  (ve = ye = null), (U = !1);
}
function fi(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var bf = Ge.ReactCurrentBatchConfig;
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Kr = mt(null),
  Xr = null,
  Ht = null,
  di = null;
function pi() {
  di = Ht = Xr = null;
}
function mi(e) {
  var t = Kr.current;
  D(Kr), (e._currentValue = t);
}
function Co(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Gt(e, t) {
  (Xr = e),
    (di = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (di !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Xr === null) throw Error(g(308));
      (Ht = e), (Xr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var St = null;
function hi(e) {
  St === null ? (St = [e]) : St.push(e);
}
function ia(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), hi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ke(e, r)
  );
}
function Ke(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function vi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ua(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ke(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), hi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ke(e, n)
  );
}
function Pr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ti(e, n);
  }
}
function Su(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== i &&
        (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (v = c = s = null), (u = o);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            S = u;
          switch (((p = t), (w = n), S.tag)) {
            case 1:
              if (((x = S.payload), typeof x == "function")) {
                m = x.call(w, m, p);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = S.payload),
                (p = typeof x == "function" ? x.call(w, m, p) : x),
                p == null)
              )
                break e;
              m = V({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((c = v = w), (s = m)) : (v = v.next = w),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (v === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (jt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function ku(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var sa = new is.Component().refs;
function Po(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      o = We(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Ie(t, e, l, r), Pr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      o = We(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Ie(t, e, l, r), Pr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = at(e),
      l = We(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Ie(t, e, r, n), Pr(t, e, r));
  },
};
function Eu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$n(n, r) || !$n(l, o)
      : !0
  );
}
function aa(e, t, n) {
  var r = !1,
    l = dt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ne(o))
      : ((l = pe(t) ? Nt : oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? qt(e, l) : dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function _u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fl.enqueueReplaceState(t, t.state, null);
}
function jo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = sa), vi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ne(o))
    : ((o = pe(t) ? Nt : oe.current), (l.context = qt(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Po(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && fl.enqueueReplaceState(l, l.state, null),
      Gr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === sa && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function hr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function ca(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = Kl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, y) {
    var E = d.type;
    return E === Ot
      ? v(f, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Je &&
            Nu(E) === a.type))
      ? ((y = l(a, d.props)), (y.ref = vn(f, a, d)), (y.return = f), y)
      : ((y = Ir(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = vn(f, a, d)),
        (y.return = f),
        y);
  }
  function c(f, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Xl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function v(f, a, d, y, E) {
    return a === null || a.tag !== 7
      ? ((a = _t(d, f.mode, y, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Kl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return (
            (d = Ir(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = vn(f, null, a)),
            (d.return = f),
            d
          );
        case It:
          return (a = Xl(a, f.mode, d)), (a.return = f), a;
        case Je:
          var y = a._init;
          return m(f, y(a._payload), d);
      }
      if (Sn(a) || fn(a))
        return (a = _t(a, f.mode, d, null)), (a.return = f), a;
      hr(f, a);
    }
    return null;
  }
  function p(f, a, d, y) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === E ? s(f, a, d, y) : null;
        case It:
          return d.key === E ? c(f, a, d, y) : null;
        case Je:
          return (E = d._init), p(f, a, E(d._payload), y);
      }
      if (Sn(d) || fn(d)) return E !== null ? null : v(f, a, d, y, null);
      hr(f, d);
    }
    return null;
  }
  function w(f, a, d, y, E) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), u(a, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case lr:
          return (f = f.get(y.key === null ? d : y.key) || null), s(a, f, y, E);
        case It:
          return (f = f.get(y.key === null ? d : y.key) || null), c(a, f, y, E);
        case Je:
          var N = y._init;
          return w(f, a, d, N(y._payload), E);
      }
      if (Sn(y) || fn(y)) return (f = f.get(d) || null), v(a, f, y, E, null);
      hr(a, y);
    }
    return null;
  }
  function x(f, a, d, y) {
    for (
      var E = null, N = null, C = a, P = (a = 0), B = null;
      C !== null && P < d.length;
      P++
    ) {
      C.index > P ? ((B = C), (C = null)) : (B = C.sibling);
      var T = p(f, C, d[P], y);
      if (T === null) {
        C === null && (C = B);
        break;
      }
      e && C && T.alternate === null && t(f, C),
        (a = o(T, a, P)),
        N === null ? (E = T) : (N.sibling = T),
        (N = T),
        (C = B);
    }
    if (P === d.length) return n(f, C), U && gt(f, P), E;
    if (C === null) {
      for (; P < d.length; P++)
        (C = m(f, d[P], y)),
          C !== null &&
            ((a = o(C, a, P)), N === null ? (E = C) : (N.sibling = C), (N = C));
      return U && gt(f, P), E;
    }
    for (C = r(f, C); P < d.length; P++)
      (B = w(C, f, P, d[P], y)),
        B !== null &&
          (e && B.alternate !== null && C.delete(B.key === null ? P : B.key),
          (a = o(B, a, P)),
          N === null ? (E = B) : (N.sibling = B),
          (N = B));
    return (
      e &&
        C.forEach(function (Pe) {
          return t(f, Pe);
        }),
      U && gt(f, P),
      E
    );
  }
  function S(f, a, d, y) {
    var E = fn(d);
    if (typeof E != "function") throw Error(g(150));
    if (((d = E.call(d)), d == null)) throw Error(g(151));
    for (
      var N = (E = null), C = a, P = (a = 0), B = null, T = d.next();
      C !== null && !T.done;
      P++, T = d.next()
    ) {
      C.index > P ? ((B = C), (C = null)) : (B = C.sibling);
      var Pe = p(f, C, T.value, y);
      if (Pe === null) {
        C === null && (C = B);
        break;
      }
      e && C && Pe.alternate === null && t(f, C),
        (a = o(Pe, a, P)),
        N === null ? (E = Pe) : (N.sibling = Pe),
        (N = Pe),
        (C = B);
    }
    if (T.done) return n(f, C), U && gt(f, P), E;
    if (C === null) {
      for (; !T.done; P++, T = d.next())
        (T = m(f, T.value, y)),
          T !== null &&
            ((a = o(T, a, P)), N === null ? (E = T) : (N.sibling = T), (N = T));
      return U && gt(f, P), E;
    }
    for (C = r(f, C); !T.done; P++, T = d.next())
      (T = w(C, f, P, T.value, y)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? P : T.key),
          (a = o(T, a, P)),
          N === null ? (E = T) : (N.sibling = T),
          (N = T));
    return (
      e &&
        C.forEach(function (an) {
          return t(f, an);
        }),
      U && gt(f, P),
      E
    );
  }
  function F(f, a, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ot &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var E = d.key, N = a; N !== null; ) {
              if (N.key === E) {
                if (((E = d.type), E === Ot)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (a = l(N, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Je &&
                    Nu(E) === N.type)
                ) {
                  n(f, N.sibling),
                    (a = l(N, d.props)),
                    (a.ref = vn(f, N, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === Ot
              ? ((a = _t(d.props.children, f.mode, y, d.key)),
                (a.return = f),
                (f = a))
              : ((y = Ir(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = vn(f, a, d)),
                (y.return = f),
                (f = y));
          }
          return i(f);
        case It:
          e: {
            for (N = d.key; a !== null; ) {
              if (a.key === N)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Xl(d, f.mode, y)), (a.return = f), (f = a);
          }
          return i(f);
        case Je:
          return (N = d._init), F(f, a, N(d._payload), y);
      }
      if (Sn(d)) return x(f, a, d, y);
      if (fn(d)) return S(f, a, d, y);
      hr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Kl(d, f.mode, y)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return F;
}
var en = ca(!0),
  fa = ca(!1),
  er = {},
  Ae = mt(er),
  Wn = mt(er),
  Qn = mt(er);
function kt(e) {
  if (e === er) throw Error(g(174));
  return e;
}
function yi(e, t) {
  switch ((O(Qn, t), O(Wn, e), O(Ae, er), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = oo(t, e));
  }
  D(Ae), O(Ae, t);
}
function tn() {
  D(Ae), D(Wn), D(Qn);
}
function da(e) {
  kt(Qn.current);
  var t = kt(Ae.current),
    n = oo(t, e.type);
  t !== n && (O(Wn, e), O(Ae, n));
}
function gi(e) {
  Wn.current === e && (D(Ae), D(Wn));
}
var A = mt(0);
function Zr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vl = [];
function wi() {
  for (var e = 0; e < Vl.length; e++)
    Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var jr = Ge.ReactCurrentDispatcher,
  Hl = Ge.ReactCurrentBatchConfig,
  Pt = 0,
  $ = null,
  K = null,
  Z = null,
  Jr = !1,
  zn = !1,
  Yn = 0,
  ed = 0;
function ne() {
  throw Error(g(321));
}
function xi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function Si(e, t, n, r, l, o) {
  if (
    ((Pt = o),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (jr.current = e === null || e.memoizedState === null ? ld : od),
    (e = n(r, l)),
    zn)
  ) {
    o = 0;
    do {
      if (((zn = !1), (Yn = 0), 25 <= o)) throw Error(g(301));
      (o += 1),
        (Z = K = null),
        (t.updateQueue = null),
        (jr.current = id),
        (e = n(r, l));
    } while (zn);
  }
  if (
    ((jr.current = qr),
    (t = K !== null && K.next !== null),
    (Pt = 0),
    (Z = K = $ = null),
    (Jr = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function ki() {
  var e = Yn !== 0;
  return (Yn = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? ($.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ce() {
  if (K === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = Z === null ? $.memoizedState : Z.next;
  if (t !== null) (Z = t), (K = e);
  else {
    if (e === null) throw Error(g(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      Z === null ? ($.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var v = c.lane;
      if ((Pt & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          ($.lanes |= v),
          (jt |= v);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      Oe(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), ($.lanes |= o), (jt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wl(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Oe(o, t.memoizedState) || (fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function pa() {}
function ma(e, t) {
  var n = $,
    r = Ce(),
    l = t(),
    o = !Oe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    Ei(ya.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xn(9, va.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(g(349));
    Pt & 30 || ha(n, t, l);
  }
  return l;
}
function ha(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function va(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ga(t) && wa(e);
}
function ya(e, t, n) {
  return n(function () {
    ga(t) && wa(e);
  });
}
function ga(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Oe(e, n);
  } catch {
    return !0;
  }
}
function wa(e) {
  var t = Ke(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Cu(e) {
  var t = De();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rd.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function Xn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xa() {
  return Ce().memoizedState;
}
function zr(e, t, n, r) {
  var l = De();
  ($.flags |= e),
    (l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r));
}
function dl(e, t, n, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var i = K.memoizedState;
    if (((o = i.destroy), r !== null && xi(r, i.deps))) {
      l.memoizedState = Xn(t, n, o, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Xn(1 | t, n, o, r));
}
function Pu(e, t) {
  return zr(8390656, 8, e, t);
}
function Ei(e, t) {
  return dl(2048, 8, e, t);
}
function Sa(e, t) {
  return dl(4, 2, e, t);
}
function ka(e, t) {
  return dl(4, 4, e, t);
}
function Ea(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function _a(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), dl(4, 4, Ea.bind(null, t, e), n)
  );
}
function _i() {}
function Na(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ca(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pa(e, t, n) {
  return Pt & 21
    ? (Oe(n, t) || ((n = Ls()), ($.lanes |= n), (jt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function td(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (Hl.transition = r);
  }
}
function ja() {
  return Ce().memoizedState;
}
function nd(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    za(e))
  )
    La(t, n);
  else if (((n = ia(e, t, n, r)), n !== null)) {
    var l = ue();
    Ie(n, e, r, l), Ta(n, t, r);
  }
}
function rd(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) La(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Oe(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), hi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ia(e, t, l, r)),
      n !== null && ((l = ue()), Ie(n, e, r, l), Ta(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function La(e, t) {
  zn = Jr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ta(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ti(e, n);
  }
}
var qr = {
    readContext: Ne,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  ld = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Pu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zr(4194308, 4, Ea.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = nd.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Cu,
    useDebugValue: _i,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = Cu(!1),
        t = e[0];
      return (e = td.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = De();
      if (U) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(g(349));
        Pt & 30 || ha(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Pu(ya.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Xn(9, va.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = J.identifierPrefix;
      if (U) {
        var n = Be,
          r = He;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ed++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: Ne,
    useCallback: Na,
    useContext: Ne,
    useEffect: Ei,
    useImperativeHandle: _a,
    useInsertionEffect: Sa,
    useLayoutEffect: ka,
    useMemo: Ca,
    useReducer: Bl,
    useRef: xa,
    useState: function () {
      return Bl(Kn);
    },
    useDebugValue: _i,
    useDeferredValue: function (e) {
      var t = Ce();
      return Pa(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Kn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: pa,
    useSyncExternalStore: ma,
    useId: ja,
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: Ne,
    useCallback: Na,
    useContext: Ne,
    useEffect: Ei,
    useImperativeHandle: _a,
    useInsertionEffect: Sa,
    useLayoutEffect: ka,
    useMemo: Ca,
    useReducer: Wl,
    useRef: xa,
    useState: function () {
      return Wl(Kn);
    },
    useDebugValue: _i,
    useDeferredValue: function (e) {
      var t = Ce();
      return K === null ? (t.memoizedState = e) : Pa(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Kn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: pa,
    useSyncExternalStore: ma,
    useId: ja,
    unstable_isNewReconciler: !1,
  };
function nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ic(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ud = typeof WeakMap == "function" ? WeakMap : Map;
function Ra(e, t, n) {
  (n = We(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      el || ((el = !0), (Ao = r)), zo(e, t);
    }),
    n
  );
}
function Ia(e, t, n) {
  (n = We(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        zo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        zo(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ud();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Sd.bind(null, e, t, n)), t.then(e, e));
}
function zu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = We(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sd = Ge.ReactCurrentOwner,
  fe = !1;
function ie(e, t, n, r) {
  t.child = e === null ? fa(t, null, n, r) : en(t, e.child, n, r);
}
function Tu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Gt(t, l),
    (r = Si(e, t, n, r, o, l)),
    (n = ki()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && n && ai(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Ru(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ri(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Oa(e, t, o, r, l))
      : ((e = Ir(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $n), n(i, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Oa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($n(o, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Lo(e, t, n, r, l);
}
function Ma(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(Wt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(Wt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        O(Wt, he),
        (he |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(Wt, he),
      (he |= r);
  return ie(e, t, l, n), t.child;
}
function Da(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Lo(e, t, n, r, l) {
  var o = pe(n) ? Nt : oe.current;
  return (
    (o = qt(t, o)),
    Gt(t, l),
    (n = Si(e, t, n, r, o, l)),
    (r = ki()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && r && ai(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Iu(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    Wr(t);
  } else o = !1;
  if ((Gt(t, l), t.stateNode === null))
    Lr(e, t), aa(t, n, r), jo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ne(c))
      : ((c = pe(n) ? Nt : oe.current), (c = qt(t, c)));
    var v = n.getDerivedStateFromProps,
      m =
        typeof v == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && _u(t, i, r, c)),
      (qe = !1);
    var p = t.memoizedState;
    (i.state = p),
      Gr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || de.current || qe
        ? (typeof v == "function" && (Po(t, n, v, r), (s = t.memoizedState)),
          (u = qe || Eu(t, n, u, r, p, s, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ua(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : ze(t.type, u)),
      (i.props = c),
      (m = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ne(s))
        : ((s = pe(n) ? Nt : oe.current), (s = qt(t, s)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && _u(t, i, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (i.state = p),
      Gr(t, r, i, l);
    var x = t.memoizedState;
    u !== m || p !== x || de.current || qe
      ? (typeof w == "function" && (Po(t, n, w, r), (x = t.memoizedState)),
        (c = qe || Eu(t, n, c, r, p, x, s) || !1)
          ? (v ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return To(e, t, n, r, o, l);
}
function To(e, t, n, r, l, o) {
  Da(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && gu(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (sd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = en(t, e.child, null, o)), (t.child = en(t, null, u, o)))
      : ie(e, t, u, o),
    (t.memoizedState = r.state),
    l && gu(t, n, !0),
    t.child
  );
}
function Fa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? yu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yu(e, t.context, !1),
    yi(e, t.containerInfo);
}
function Ou(e, t, n, r, l) {
  return bt(), fi(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
function Io(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ua(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O(A, l & 1),
    e === null)
  )
    return (
      No(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = hl(i, r, 0, null)),
              (e = _t(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Io(n)),
              (t.memoizedState = Ro),
              e)
            : Ni(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ad(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ct(u, o)) : ((o = _t(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Io(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ro),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ni(e, t) {
  return (
    (t = hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vr(e, t, n, r) {
  return (
    r !== null && fi(r),
    en(t, e.child, null, n),
    (e = Ni(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ad(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(g(422)))), vr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = hl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = _t(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && en(t, e.child, null, i),
        (t.child.memoizedState = Io(i)),
        (t.memoizedState = Ro),
        o);
  if (!(t.mode & 1)) return vr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(g(419))), (r = Ql(o, r, void 0)), vr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), fe || u)) {
    if (((r = J), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ke(e, l), Ie(r, e, l, -1));
    }
    return Ti(), (r = Ql(Error(g(421)))), vr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = kd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = it(l.nextSibling)),
      (ye = t),
      (U = !0),
      (Te = null),
      e !== null &&
        ((Se[ke++] = He),
        (Se[ke++] = Be),
        (Se[ke++] = Ct),
        (He = e.id),
        (Be = e.overflow),
        (Ct = t)),
      (t = Ni(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Mu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Co(e.return, t, n);
}
function Yl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Aa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ie(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mu(e, n, t);
        else if (e.tag === 19) Mu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((O(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Zr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Yl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Zr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Yl(t, !0, n, null, o);
        break;
      case "together":
        Yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Lr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cd(e, t, n) {
  switch (t.tag) {
    case 3:
      Fa(t), bt();
      break;
    case 5:
      da(t);
      break;
    case 1:
      pe(t.type) && Wr(t);
      break;
    case 4:
      yi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      O(Kr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ua(e, t, n)
          : (O(A, A.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      O(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Aa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ma(e, t, n);
  }
  return Xe(e, t, n);
}
var $a, Oo, Va, Ha;
$a = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Oo = function () {};
Va = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), kt(Ae.current);
    var o = null;
    switch (n) {
      case "input":
        (l = to(e, l)), (r = to(e, r)), (o = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = lo(e, l)), (r = lo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hr);
    }
    io(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (In.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (In.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && M("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ha = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function fd(e, t, n) {
  var r = t.pendingProps;
  switch ((ci(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return pe(t.type) && Br(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tn(),
        D(de),
        D(oe),
        wi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (Ho(Te), (Te = null)))),
        Oo(e, t),
        re(t),
        null
      );
    case 5:
      gi(t);
      var l = kt(Qn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Va(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return re(t), null;
        }
        if (((e = kt(Ae.current)), mr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Fe] = t), (r[Bn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < En.length; l++) M(En[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              Wi(r, o), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              Yi(r, o), M("invalid", r);
          }
          io(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : In.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  M("scroll", r);
            }
          switch (n) {
            case "input":
              or(r), Qi(r, o, !0);
              break;
            case "textarea":
              or(r), Ki(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Hr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = hs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Fe] = t),
            (e[Bn] = r),
            $a(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = uo(n, r)), n)) {
              case "dialog":
                M("cancel", e), M("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < En.length; l++) M(En[l], e);
                l = r;
                break;
              case "source":
                M("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (l = r);
                break;
              case "details":
                M("toggle", e), (l = r);
                break;
              case "input":
                Wi(e, r), (l = to(e, r)), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                Yi(e, r), (l = lo(e, r)), M("invalid", e);
                break;
              default:
                l = r;
            }
            io(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? gs(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && vs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && On(e, s)
                    : typeof s == "number" && On(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (In.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && M("scroll", e)
                      : s != null && Go(e, o, s, i));
              }
            switch (n) {
              case "input":
                or(e), Qi(e, r, !1);
                break;
              case "textarea":
                or(e), Ki(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Qt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Ha(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = kt(Qn.current)), kt(Ae.current), mr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fe] = t),
            (o = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fe] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (D(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
          oa(), bt(), (t.flags |= 98560), (o = !1);
        else if (((o = mr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(g(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(g(317));
            o[Fe] = t;
          } else
            bt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (o = !1);
        } else Te !== null && (Ho(Te), (Te = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? X === 0 && (X = 3) : Ti())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        tn(), Oo(e, t), e === null && Vn(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return mi(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Br(), re(t), null;
    case 19:
      if ((D(A), (o = t.memoizedState), o === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) yn(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Zr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    yn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return O(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > rn &&
            ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
            )
              return re(t), null;
          } else
            2 * Q() - o.renderingStartTime > rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = A.current),
          O(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Li(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function dd(e, t) {
  switch ((ci(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Br(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tn(),
        D(de),
        D(oe),
        wi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return gi(t), null;
    case 13:
      if ((D(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        bt();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return D(A), null;
    case 4:
      return tn(), null;
    case 10:
      return mi(t.type._context), null;
    case 22:
    case 23:
      return Li(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1,
  le = !1,
  pd = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Bt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function Mo(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Du = !1;
function md(e, t) {
  if (((go = Ar), (e = Ys()), si(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            v = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (p = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++v === r && (s = i),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wo = { focusedElem: e, selectionRange: n }, Ar = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var S = x.memoizedProps,
                    F = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : ze(t.type, S),
                      F
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (y) {
          H(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (x = Du), (Du = !1), x;
}
function Ln(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Mo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Do(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ba(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ba(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fe], delete t[Bn], delete t[ko], delete t[Zf], delete t[Jf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wa(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fo(e, t, n), e = e.sibling; e !== null; ) Fo(e, t, n), (e = e.sibling);
}
function Uo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uo(e, t, n), e = e.sibling; e !== null; ) Uo(e, t, n), (e = e.sibling);
}
var q = null,
  Le = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Qa(e, t, n), (n = n.sibling);
}
function Qa(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(ol, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Bt(n, t);
    case 6:
      var r = q,
        l = Le;
      (q = null),
        Ze(e, t, n),
        (q = r),
        (Le = l),
        q !== null &&
          (Le
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Le
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            Un(e))
          : Al(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Le),
        (q = n.stateNode.containerInfo),
        (Le = !0),
        Ze(e, t, n),
        (q = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Mo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Bt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          H(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Ze(e, t, n), (le = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Uu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pd()),
      t.forEach(function (r) {
        var l = Ed.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Le = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(g(160));
        Qa(o, i, l), (q = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        H(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ya(t, e), (t = t.sibling);
}
function Ya(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), Me(e), r & 4)) {
        try {
          Ln(3, e, e.return), pl(3, e);
        } catch (S) {
          H(e, e.return, S);
        }
        try {
          Ln(5, e, e.return);
        } catch (S) {
          H(e, e.return, S);
        }
      }
      break;
    case 1:
      je(t, e), Me(e), r & 512 && n !== null && Bt(n, n.return);
      break;
    case 5:
      if (
        (je(t, e),
        Me(e),
        r & 512 && n !== null && Bt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          On(l, "");
        } catch (S) {
          H(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ps(l, o),
              uo(u, i);
            var c = uo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var v = s[i],
                m = s[i + 1];
              v === "style"
                ? gs(l, m)
                : v === "dangerouslySetInnerHTML"
                ? vs(l, m)
                : v === "children"
                ? On(l, m)
                : Go(l, v, m, c);
            }
            switch (u) {
              case "input":
                no(l, o);
                break;
              case "textarea":
                ms(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Qt(l, !!o.multiple, w, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Qt(l, !!o.multiple, o.defaultValue, !0)
                      : Qt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Bn] = o;
          } catch (S) {
            H(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((je(t, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          H(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (je(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Un(t.containerInfo);
        } catch (S) {
          H(e, e.return, S);
        }
      break;
    case 4:
      je(t, e), Me(e);
      break;
    case 13:
      je(t, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ji = Q())),
        r & 4 && Uu(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || v), je(t, e), (le = c)) : je(t, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (k = e, v = e.child; v !== null; ) {
            for (m = k = v; k !== null; ) {
              switch (((p = k), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ln(4, p, p.return);
                  break;
                case 1:
                  Bt(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (S) {
                      H(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Bt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    $u(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (k = w)) : $u(m);
            }
            v = v.sibling;
          }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ys("display", i)));
              } catch (S) {
                H(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (v === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (S) {
                H(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), (m = m.return);
          }
          v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      je(t, e), Me(e), r & 4 && Uu(e);
      break;
    case 21:
      break;
    default:
      je(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (On(l, ""), (r.flags &= -33));
          var o = Fu(e);
          Uo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Fu(e);
          Fo(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hd(e, t, n) {
  (k = e), Ka(e);
}
function Ka(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || yr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = yr;
        var c = le;
        if (((yr = i), (le = s) && !c))
          for (k = l; k !== null; )
            (i = k),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Vu(l)
                : s !== null
                ? ((s.return = i), (k = s))
                : Vu(l);
        for (; o !== null; ) (k = o), Ka(o), (o = o.sibling);
        (k = l), (yr = u), (le = c);
      }
      Au(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (k = o)) : Au(e);
  }
}
function Au(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ku(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ku(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && Un(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        le || (t.flags & 512 && Do(t));
      } catch (p) {
        H(t, t.return, p);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function $u(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Vu(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (s) {
            H(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(t, l, s);
            }
          }
          var o = t.return;
          try {
            Do(t);
          } catch (s) {
            H(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Do(t);
          } catch (s) {
            H(t, i, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (k = u);
      break;
    }
    k = t.return;
  }
}
var vd = Math.ceil,
  br = Ge.ReactCurrentDispatcher,
  Ci = Ge.ReactCurrentOwner,
  _e = Ge.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  Y = null,
  ee = 0,
  he = 0,
  Wt = mt(0),
  X = 0,
  Gn = null,
  jt = 0,
  ml = 0,
  Pi = 0,
  Tn = null,
  ce = null,
  ji = 0,
  rn = 1 / 0,
  $e = null,
  el = !1,
  Ao = null,
  st = null,
  gr = !1,
  nt = null,
  tl = 0,
  Rn = 0,
  $o = null,
  Tr = -1,
  Rr = 0;
function ue() {
  return R & 6 ? Q() : Tr !== -1 ? Tr : (Tr = Q());
}
function at(e) {
  return e.mode & 1
    ? R & 2 && ee !== 0
      ? ee & -ee
      : bf.transition !== null
      ? (Rr === 0 && (Rr = Ls()), Rr)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fs(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Rn) throw ((Rn = 0), ($o = null), Error(g(185)));
  Jn(e, n, r),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (ml |= n), X === 4 && et(e, ee)),
      me(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((rn = Q() + 500), cl && ht()));
}
function me(e, t) {
  var n = e.callbackNode;
  qc(e, t);
  var r = Ur(e, e === J ? ee : 0);
  if (r === 0)
    n !== null && Zi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Zi(n), t === 1))
      e.tag === 0 ? qf(Hu.bind(null, e)) : na(Hu.bind(null, e)),
        Xf(function () {
          !(R & 6) && ht();
        }),
        (n = null);
    else {
      switch (Ts(r)) {
        case 1:
          n = ei;
          break;
        case 4:
          n = js;
          break;
        case 16:
          n = Fr;
          break;
        case 536870912:
          n = zs;
          break;
        default:
          n = Fr;
      }
      n = tc(n, Xa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xa(e, t) {
  if (((Tr = -1), (Rr = 0), R & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Ur(e, e === J ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = nl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = Za();
    (J !== e || ee !== t) && (($e = null), (rn = Q() + 500), Et(e, t));
    do
      try {
        wd();
        break;
      } catch (u) {
        Ga(e, u);
      }
    while (1);
    pi(),
      (br.current = o),
      (R = l),
      Y !== null ? (t = 0) : ((J = null), (ee = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = po(e)), l !== 0 && ((r = l), (t = Vo(e, l)))), t === 1)
    )
      throw ((n = Gn), Et(e, 0), et(e, r), me(e, Q()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !yd(l) &&
          ((t = nl(e, r)),
          t === 2 && ((o = po(e)), o !== 0 && ((r = o), (t = Vo(e, o)))),
          t === 1))
      )
        throw ((n = Gn), Et(e, 0), et(e, r), me(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          wt(e, ce, $e);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = ji + 500 - Q()), 10 < t))
          ) {
            if (Ur(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = So(wt.bind(null, e, ce, $e), t);
            break;
          }
          wt(e, ce, $e);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = So(wt.bind(null, e, ce, $e), r);
            break;
          }
          wt(e, ce, $e);
          break;
        case 5:
          wt(e, ce, $e);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? Xa.bind(null, e) : null;
}
function Vo(e, t) {
  var n = Tn;
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    (e = nl(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Ho(t)),
    e
  );
}
function Ho(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function yd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~Pi,
      t &= ~ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Hu(e) {
  if (R & 6) throw Error(g(327));
  Zt();
  var t = Ur(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = po(e);
    r !== 0 && ((t = r), (n = Vo(e, r)));
  }
  if (n === 1) throw ((n = Gn), Et(e, 0), et(e, t), me(e, Q()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ce, $e),
    me(e, Q()),
    null
  );
}
function zi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((rn = Q() + 500), cl && ht());
  }
}
function zt(e) {
  nt !== null && nt.tag === 0 && !(R & 6) && Zt();
  var t = R;
  R |= 1;
  var n = _e.transition,
    r = I;
  try {
    if (((_e.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (_e.transition = n), (R = t), !(R & 6) && ht();
  }
}
function Li() {
  (he = Wt.current), D(Wt);
}
function Et(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Kf(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((ci(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Br();
          break;
        case 3:
          tn(), D(de), D(oe), wi();
          break;
        case 5:
          gi(r);
          break;
        case 4:
          tn();
          break;
        case 13:
          D(A);
          break;
        case 19:
          D(A);
          break;
        case 10:
          mi(r.type._context);
          break;
        case 22:
        case 23:
          Li();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (Y = e = ct(e.current, null)),
    (ee = he = t),
    (X = 0),
    (Gn = null),
    (Pi = ml = jt = 0),
    (ce = Tn = null),
    St !== null)
  ) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function Ga(e, t) {
  do {
    var n = Y;
    try {
      if ((pi(), (jr.current = qr), Jr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Jr = !1;
      }
      if (
        ((Pt = 0),
        (Z = K = $ = null),
        (zn = !1),
        (Yn = 0),
        (Ci.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Gn = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            v = u,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = v.alternate;
            p
              ? ((v.updateQueue = p.updateQueue),
                (v.memoizedState = p.memoizedState),
                (v.lanes = p.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = zu(i);
          if (w !== null) {
            (w.flags &= -257),
              Lu(w, i, u, o, t),
              w.mode & 1 && ju(o, c, t),
              (t = w),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ju(o, c, t), Ti();
              break e;
            }
            s = Error(g(426));
          }
        } else if (U && u.mode & 1) {
          var F = zu(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Lu(F, i, u, o, t),
              fi(nn(s, u));
            break e;
          }
        }
        (o = s = nn(s, u)),
          X !== 4 && (X = 2),
          Tn === null ? (Tn = [o]) : Tn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ra(o, s, t);
              Su(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (st === null || !st.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = Ia(o, u, t);
                Su(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qa(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Za() {
  var e = br.current;
  return (br.current = qr), e === null ? qr : e;
}
function Ti() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(jt & 268435455) && !(ml & 268435455)) || et(J, ee);
}
function nl(e, t) {
  var n = R;
  R |= 2;
  var r = Za();
  (J !== e || ee !== t) && (($e = null), Et(e, t));
  do
    try {
      gd();
      break;
    } catch (l) {
      Ga(e, l);
    }
  while (1);
  if ((pi(), (R = n), (br.current = r), Y !== null)) throw Error(g(261));
  return (J = null), (ee = 0), X;
}
function gd() {
  for (; Y !== null; ) Ja(Y);
}
function wd() {
  for (; Y !== null && !Bc(); ) Ja(Y);
}
function Ja(e) {
  var t = ec(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? qa(e) : (Y = t),
    (Ci.current = null);
}
function qa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Y = null);
        return;
      }
    } else if (((n = fd(n, t, he)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function wt(e, t, n) {
  var r = I,
    l = _e.transition;
  try {
    (_e.transition = null), (I = 1), xd(e, t, n, r);
  } finally {
    (_e.transition = l), (I = r);
  }
  return null;
}
function xd(e, t, n, r) {
  do Zt();
  while (nt !== null);
  if (R & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (bc(e, o),
    e === J && ((Y = J = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      tc(Fr, function () {
        return Zt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = _e.transition), (_e.transition = null);
    var i = I;
    I = 1;
    var u = R;
    (R |= 4),
      (Ci.current = null),
      md(e, n),
      Ya(n, e),
      $f(wo),
      (Ar = !!go),
      (wo = go = null),
      (e.current = n),
      hd(n),
      Wc(),
      (R = u),
      (I = i),
      (_e.transition = o);
  } else e.current = n;
  if (
    (gr && ((gr = !1), (nt = e), (tl = l)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    Kc(n.stateNode),
    me(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (el) throw ((el = !1), (e = Ao), (Ao = null), e);
  return (
    tl & 1 && e.tag !== 0 && Zt(),
    (o = e.pendingLanes),
    o & 1 ? (e === $o ? Rn++ : ((Rn = 0), ($o = e))) : (Rn = 0),
    ht(),
    null
  );
}
function Zt() {
  if (nt !== null) {
    var e = Ts(tl),
      t = _e.transition,
      n = I;
    try {
      if (((_e.transition = null), (I = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (tl = 0), R & 6)) throw Error(g(331));
        var l = R;
        for (R |= 4, k = e.current; k !== null; ) {
          var o = k,
            i = o.child;
          if (k.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var v = k;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ln(8, v, o);
                  }
                  var m = v.child;
                  if (m !== null) (m.return = v), (k = m);
                  else
                    for (; k !== null; ) {
                      v = k;
                      var p = v.sibling,
                        w = v.return;
                      if ((Ba(v), v === c)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (k = p);
                        break;
                      }
                      k = w;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var S = x.child;
                if (S !== null) {
                  x.child = null;
                  do {
                    var F = S.sibling;
                    (S.sibling = null), (S = F);
                  } while (S !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (k = i);
          else
            e: for (; k !== null; ) {
              if (((o = k), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ln(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (k = f);
                break e;
              }
              k = o.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          i = k;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (k = d);
          else
            e: for (i = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, u);
                  }
                } catch (E) {
                  H(u, u.return, E);
                }
              if (u === i) {
                k = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (k = y);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((R = l), ht(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(ol, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (_e.transition = t);
    }
  }
  return !1;
}
function Bu(e, t, n) {
  (t = nn(n, t)),
    (t = Ra(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = ue()),
    e !== null && (Jn(e, 1, t), me(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) Bu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          (e = nn(n, e)),
            (e = Ia(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = ue()),
            t !== null && (Jn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (ee & n) === n &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > Q() - ji)
        ? Et(e, 0)
        : (Pi |= n)),
    me(e, t);
}
function ba(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sr), (sr <<= 1), !(sr & 130023424) && (sr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ke(e, t)), e !== null && (Jn(e, t, n), me(e, n));
}
function kd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ba(e, n);
}
function Ed(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), ba(e, n);
}
var ec;
ec = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), cd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), U && t.flags & 1048576 && ra(t, Yr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Lr(e, t), (e = t.pendingProps);
      var l = qt(t, oe.current);
      Gt(t, n), (l = Si(null, t, r, e, l, n));
      var o = ki();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((o = !0), Wr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            vi(t),
            (l.updater = fl),
            (t.stateNode = l),
            (l._reactInternals = t),
            jo(t, r, e, n),
            (t = To(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && ai(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Lr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Nd(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Lo(null, t, r, e, n);
            break e;
          case 1:
            t = Iu(null, t, r, e, n);
            break e;
          case 11:
            t = Tu(null, t, r, e, n);
            break e;
          case 14:
            t = Ru(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Lo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Iu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Fa(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ua(e, t),
          Gr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = nn(Error(g(423)), t)), (t = Ou(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = nn(Error(g(424)), t)), (t = Ou(e, t, r, n, l));
            break e;
          } else
            for (
              ve = it(t.stateNode.containerInfo.firstChild),
                ye = t,
                U = !0,
                Te = null,
                n = fa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((bt(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        da(t),
        e === null && No(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        xo(r, l) ? (i = null) : o !== null && xo(r, o) && (t.flags |= 32),
        Da(e, t),
        ie(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && No(t), null;
    case 13:
      return Ua(e, t, n);
    case 4:
      return (
        yi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = en(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Tu(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          O(Kr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Oe(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = We(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Co(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(g(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Co(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Gt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        Ru(e, t, r, l, n)
      );
    case 15:
      return Oa(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Lr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Wr(t)) : (e = !1),
        Gt(t, n),
        aa(t, r, l),
        jo(t, r, l, n),
        To(null, t, r, !0, e, n)
      );
    case 19:
      return Aa(e, t, n);
    case 22:
      return Ma(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function tc(e, t) {
  return Ps(e, t);
}
function _d(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new _d(e, t, n, r);
}
function Ri(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nd(e) {
  if (typeof e == "function") return Ri(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Jo)) return 11;
    if (e === qo) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ir(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ri(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ot:
        return _t(n.children, l, o, t);
      case Zo:
        (i = 8), (l |= 8);
        break;
      case Jl:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = Jl), (e.lanes = o), e
        );
      case ql:
        return (e = Ee(13, n, t, l)), (e.elementType = ql), (e.lanes = o), e;
      case bl:
        return (e = Ee(19, n, t, l)), (e.elementType = bl), (e.lanes = o), e;
      case cs:
        return hl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ss:
              i = 10;
              break e;
            case as:
              i = 9;
              break e;
            case Jo:
              i = 11;
              break e;
            case qo:
              i = 14;
              break e;
            case Je:
              (i = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function _t(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function hl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = cs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ii(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Cd(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ee(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vi(o),
    e
  );
}
function Pd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: It,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nc(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (Tt(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return ta(e, n, t);
  }
  return t;
}
function rc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Ii(n, r, !0, e, l, o, i, u, s)),
    (e.context = nc(null)),
    (n = e.current),
    (r = ue()),
    (l = at(n)),
    (o = We(r, l)),
    (o.callback = t ?? null),
    ut(n, o, l),
    (e.current.lanes = l),
    Jn(e, l, r),
    me(e, r),
    e
  );
}
function vl(e, t, n, r) {
  var l = t.current,
    o = ue(),
    i = at(l);
  return (
    (n = nc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, i)),
    e !== null && (Ie(e, l, i, o), Pr(e, l, i)),
    i
  );
}
function rl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Oi(e, t) {
  Wu(e, t), (e = e.alternate) && Wu(e, t);
}
function jd() {
  return null;
}
var lc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Mi(e) {
  this._internalRoot = e;
}
yl.prototype.render = Mi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  vl(e, t, null, null);
};
yl.prototype.unmount = Mi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zt(function () {
      vl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Os();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Ds(e);
  }
};
function Di(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qu() {}
function zd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = rl(i);
        o.call(c);
      };
    }
    var i = rc(t, r, e, 0, null, !1, !1, "", Qu);
    return (
      (e._reactRootContainer = i),
      (e[Ye] = i.current),
      Vn(e.nodeType === 8 ? e.parentNode : e),
      zt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = rl(s);
      u.call(c);
    };
  }
  var s = Ii(e, 0, !1, null, null, !1, !1, "", Qu);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    zt(function () {
      vl(t, s, n, r);
    }),
    s
  );
}
function wl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = rl(i);
        u.call(s);
      };
    }
    vl(t, i, e, l);
  } else i = zd(n, t, e, l, r);
  return rl(i);
}
Rs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kn(t.pendingLanes);
        n !== 0 &&
          (ti(t, n | 1), me(t, Q()), !(R & 6) && ((rn = Q() + 500), ht()));
      }
      break;
    case 13:
      zt(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = ue();
          Ie(r, e, 1, l);
        }
      }),
        Oi(e, 1);
  }
};
ni = function (e) {
  if (e.tag === 13) {
    var t = Ke(e, 134217728);
    if (t !== null) {
      var n = ue();
      Ie(t, e, 134217728, n);
    }
    Oi(e, 134217728);
  }
};
Is = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ke(e, t);
    if (n !== null) {
      var r = ue();
      Ie(n, e, t, r);
    }
    Oi(e, t);
  }
};
Os = function () {
  return I;
};
Ms = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
ao = function (e, t, n) {
  switch (t) {
    case "input":
      if ((no(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = al(r);
            if (!l) throw Error(g(90));
            ds(r), no(r, l);
          }
        }
      }
      break;
    case "textarea":
      ms(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qt(e, !!n.multiple, t, !1);
  }
};
Ss = zi;
ks = zt;
var Ld = { usingClientEntryPoint: !1, Events: [bn, Ut, al, ws, xs, zi] },
  gn = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Td = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ns(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || jd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      (ol = wr.inject(Td)), (Ue = wr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Di(t)) throw Error(g(200));
  return Pd(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Di(e)) throw Error(g(299));
  var n = !1,
    r = "",
    l = lc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ii(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    new Mi(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = Ns(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return zt(e);
};
we.hydrate = function (e, t, n) {
  if (!gl(t)) throw Error(g(200));
  return wl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Di(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = lc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = rc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ye] = t.current),
    Vn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new yl(t);
};
we.render = function (e, t, n) {
  if (!gl(t)) throw Error(g(200));
  return wl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (zt(function () {
        wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = zi;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return wl(e, t, n, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
function oc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc);
    } catch (e) {
      console.error(e);
    }
}
oc(), (rs.exports = we);
var Rd = rs.exports,
  Yu = Rd;
(Gl.createRoot = Yu.createRoot), (Gl.hydrateRoot = Yu.hydrateRoot);
const sn = {
    Intro: {
      saludo: "Hola, me llamo",
      nombre: "Williams Hidrovo Bernal",
      titulo: "Desarrollador Web",
      descripcion:
        "Ingeniero en tecnologías de la información dedicado al desarrollo de aplicaciones web enfocado en Front-End",
    },
    Sobre: {
      parrafo1:
        "Ingeniero en Tecnologías de la Información y desarrollador Front-End con +1 año de experiencia. He trabajado en el desarrollo de sitios estáticos y dinámicos con diferentes tecnologías. Mi enfoque se centra en el diseño, implementación y gestión de soluciones tecnológicas acorde a los requisitos de la aplicación. ",
      parrafo2:
        "Actualmente estoy trabajando con el Stack Mern creciendo como desarrollador y como profesional.",
      tegnologias: [
        "JavaScript",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Python",
        "c#",
        ".NET",
        "Sql",
        "Tailwind",
        "Sass",
      ],
    },
    Proyectos1: [
      {
        nombre: "Gifiteca",
        imagen: "https://i.imgur.com/9g6mDSt.png",
        descripcion:
          "Consumo a la Giphy api utilizando peticiones Async Await Fetch",
        tegnologias: ["React", "Css", "JavaScript"],
      },
      {
        nombre: "Oivsa",
        imagen: "https://i.imgur.com/HTLX6jh.png",
        descripcion: "Sitio web Informativo",
        tegnologias: ["Html", "Css", "JavaScript"],
      },
      {
        nombre: "Biblioteca",
        imagen: "https://i.imgur.com/NM2Odro.jpg",
        descripcion: "Aplicativo para Plataforma Windows",
        tegnologias: ["C#", "Mysql", ".Net"],
      },
    ],
    Experiencia1: [
      {
        cargo: "Desarrollador Full Stack",
        Empresa: "FreeLance",
        descripcion: [
          "Desarrollar sitios web estáticos  y dinámicos.",
          "Maquetación  de sitios web",
          "Optimizar y organizar frontend.",
          "Consumo de Apis",
        ],
        periodo: "2022/02/08 - Presente",
      },
      {
        cargo: "Administrador-Tics",
        Empresa: "Garlo",
        descripcion: [
          "Desarrollar y mantener un sistema de inventarios que cuente con un CRUD completo y fácil de manejar para los usuarios, ya que no contaban con este sistema.",
          "Añadir al sistema de ventas funcionalidades de automatización.",
          " Administrar y configurar la página de Shopify.",
        ],
        periodo: "2020/03/11 - 2021/10/14",
      },
      {
        cargo: "Instructor",
        Empresa: "CAPACITACIONES-INFORMATICA",
        descripcion: [
          "Impartir capacitaciones de reparación e instalación de software y hardware a comunidades rurales.",
          "Enseñar el manejo de software ofimático y de diseño básico.",
        ],
        periodo: "2017/08/03 - 2019/10/03",
      },
      {
        cargo: "Tecnico ",
        Empresa: "Easynet",
        descripcion: [
          "Instalación y reparación de telefonía e internet.",
          "Mantenimiento de equipos de cómputo.",
          "Configuración de proxys y dns para redes.",
        ],
        periodo: "2014/02/02 - 2016/01/13",
      },
    ],
    Cursos1: [
      {
        titulo: "Master en JavaScript",
        descripcion:
          "Desarrollo web con JavaScript, jQuery, JSON, TypeScript, Angular, Node, MEAN, +30 horas",
        imagen: "https://i.imgur.com/HJnTrxK.jpg",
      },
      {
        titulo: "Master en php",
        descripcion:
          "PHP desde cero, bases de datos, SQL, MySQL, POO, MVC, Laravel 10, Symfony 6, WordPress y más +56h",
        imagen: "https://i.imgur.com/DLCYaAA.jpg",
      },
      {
        titulo: "Master en APIs RESTful",
        descripcion:
          "APIs REST con Node, MongoDB y Express para una app como Spotify, una red social como Twitter y un blog.",
        imagen: "https://i.imgur.com/bh4I4N9.jpg",
      },
    ],
    Contacto1: {
      nombre: "Williams Hidrovo Bernal",
      Genero: "Masculino",
      Edad: "29",
      Correo: "antonioxxw@gmail.com",
      Telefono: "593 95 915 1828",
      Direccion: "Ecuador",
    },
  },
  Id = () => {
    const { Intro: e } = sn,
      t = () => {
        document
          .getElementById("miFooter")
          .scrollIntoView({ behavior: "smooth" });
      };
    return h.jsxs("section", {
      className:
        "w-9/12 mx-auto h-[90vh] flex flex-col justify-center gap-10 animate__animated animate__fadeIn sm:w-11/12 sm:my-5 sx:gap-5",
      children: [
        h.jsx("p", { className: "text-white text-lg", children: e.saludo }),
        h.jsx("h1", {
          className:
            "text-secondary text-7xl font-bold sm:text-5xl sx:text-4xl",
          children: e.nombre,
        }),
        h.jsx("h2", {
          className: "text-white text-5xl font-semibold sm:text-3xl",
          children: e.titulo,
        }),
        h.jsx("p", {
          className: "text-white text-lg sx:text-sm",
          children: e.descripcion,
        }),
        h.jsx("button", {
          className:
            "w-48 h-12 text-tertiary/80 hover:text-tertiary border-tertiary/80 hover:border-tertiary border-2 sm:mt-5",
          onClick: t,
          children: "Contactame",
        }),
      ],
    });
  },
  Od = () => {
    const [e, t] = b.useState(!1),
      { Sobre: n } = sn;
    return (
      b.useEffect(() => {
        const r = () => {
          let l = 130;
          const o = window.innerWidth,
            i = window.scrollY;
          o < 500 && (l = -1), i > l ? t(!0) : t(!1);
        };
        return (
          window.addEventListener("scroll", r),
          () => {
            window.removeEventListener("scroll", r);
          }
        );
      }, []),
      h.jsxs("section", {
        className: e
          ? "w-9/12 mx-auto flex flex-col justify-center gap-10 mb-[50px] animate__animated animate__fadeIn sm:w-11/12"
          : "w-9/12 mx-auto flex flex-col justify-center gap-10 mb-[50px] opacity-0 sm:opacity-100 sm:w-11/12",
        children: [
          h.jsxs("div", {
            className: "flex gap-5 items-center",
            children: [
              h.jsx("h1", {
                className: "text-secondary text-4xl",
                children: "Sobre mi",
              }),
              h.jsx("span", { className: "w-52 h-0.5 bg-tertiary" }),
            ],
          }),
          h.jsxs("div", {
            className: "flex sm:flex-col",
            children: [
              h.jsx("div", {
                className: "w-2/4 sm:w-full",
                children: h.jsx("dotlottie-player", {
                  src: "https://lottie.host/ee5b2f42-5aed-4269-8fdb-106994ef7580/xub8R4Iq0a.json",
                  background: "transparent",
                  speed: "1",
                  loop: !0,
                  autoplay: !0,
                }),
              }),
              h.jsxs("div", {
                className:
                  "flex flex-col w-2/4 justify-center gap-5 text-white sm:w-full",
                children: [
                  h.jsx("p", { children: n.parrafo1 }),
                  h.jsx("p", { children: n.parrafo2 }),
                ],
              }),
            ],
          }),
          h.jsxs("div", {
            className: "flex flex-col gap-3",
            children: [
              h.jsx("h2", {
                className: "text-tertiary text-2xl",
                children:
                  "Estas son las tegnologias con las que trabajo actualmente",
              }),
              h.jsx("div", {
                className: "flex flex-wrap mb-10 sx:justify-center",
                children: n.tegnologias.map((r) =>
                  h.jsx(
                    "div",
                    {
                      className:
                        "w-[150px] border-2 border-tertiary text-tertiary text-center px-5 py-2 m-3 sx:text-sm sx:w-[100px]",
                      children: r,
                    },
                    r
                  )
                ),
              }),
            ],
          }),
        ],
      })
    );
  },
  Md = () =>
    h.jsxs("header", {
      className:
        " h-12 w-full p-5 flex bg-primary justify-between items-center",
      children: [
        h.jsx("span", {
          className: "text-4xl text-secondary font-bold ",
          children: "W",
        }),
        h.jsx("span", {
          className: "text-4xl text-white font-bold ",
          children: "H",
        }),
        h.jsx("span", {
          className: "text-4xl text-tertiary font-bold ",
          children: "B",
        }),
      ],
    }),
  { Proyectos1: wn } = sn,
  Dd = () => {
    const [e, t] = b.useState(!1),
      [n, r] = b.useState(0);
    return (
      b.useEffect(() => {
        const l = () => {
          window.scrollY > 1400 ? t(!0) : t(!1);
        };
        return (
          window.addEventListener("scroll", l),
          () => {
            window.removeEventListener("scroll", l);
          }
        );
      }, []),
      h.jsxs("section", {
        className: e
          ? "w-9/12 mx-auto flex flex-col gap-10 my-[60px] animate__animated animate__fadeIn sm:w-11/12 sm:h-[570px]"
          : "w-9/12 mx-auto flex flex-col gap-10 my-[50px] animate__animated animate__fadeOut opacity-0 sm:w-11/12",
        children: [
          h.jsxs("div", {
            className: "flex gap-5 items-center",
            children: [
              h.jsx("h1", {
                className: "text-secondary text-4xl",
                children: "Proyectos",
              }),
              h.jsx("span", { className: "w-52 h-0.5 bg-tertiary" }),
            ],
          }),
          h.jsxs("div", {
            className: "flex sm:flex-col",
            children: [
              h.jsx("div", {
                className:
                  "flex flex-col border-l-2 border-tertiary w-1/4 sm:flex-row sm:overflow-scroll sm:overflow-y-hidden sm:w-full",
                children: wn.map((l, o) =>
                  h.jsx(
                    "div",
                    {
                      onClick: () => r(o),
                      className:
                        n == o
                          ? "bg-tertiary/30 cursor-pointer border-l-4 border-tertiary px-5 py-3 my-3 w-[200px]"
                          : "cursor-pointer px-5 py-3 my-3 w-[200px]",
                      children: h.jsx("h1", {
                        className: "text-xl text-white ml-2 sx:text-lg",
                        children: l.nombre,
                      }),
                    },
                    l.nombre
                  )
                ),
              }),
              h.jsxs("div", {
                className:
                  "w-3/4 flex ml-2 sm:flex-col sm:w-full sm:gap-5 sm:m-0 sx:mt-3",
                children: [
                  h.jsx("div", {
                    className:
                      "w-[450px] h-[250px] bg-red-400 sm:w-full sm:h-[200px]",
                    children: h.jsx("img", {
                      className: "w-full h-full object-cover object-left",
                      src: wn[n].imagen,
                      alt: "",
                    }),
                  }),
                  h.jsxs("div", {
                    className: "w-2/6 flex flex-col ml-5 gap-3 sm:w-full",
                    children: [
                      h.jsx("h2", {
                        className: "text-secondary text-xl",
                        children: wn[n].nombre,
                      }),
                      h.jsx("p", {
                        className: "text-white",
                        children: wn[n].descripcion,
                      }),
                      h.jsx("h2", {
                        className: "text-tertiary text-xl",
                        children: "Tecnologías",
                      }),
                      h.jsx("p", {
                        className: "text-white",
                        children: wn[n].tegnologias.toString(),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  { Experiencia1: xr } = sn,
  Fd = () => {
    const [e, t] = b.useState(!1),
      [n, r] = b.useState(0);
    return (
      b.useEffect(() => {
        const l = () => {
          window.scrollY > 1e3 ? t(!0) : t(!1);
        };
        return (
          window.addEventListener("scroll", l),
          () => {
            window.removeEventListener("scroll", l);
          }
        );
      }, []),
      h.jsxs("section", {
        className: e
          ? " w-9/12 mx-auto flex flex-col gap-10 my-[50px] animate__animated animate__fadeIn sm:w-11/12 sm:h-[550px] sx:h-[550px] sx:my-5"
          : "w-9/12 mx-auto flex flex-col gap-10 my-[50px] animate__animated animate__fadeOut opacity-0 sm:w-11/12",
        children: [
          h.jsxs("div", {
            className: "flex gap-5 items-center",
            children: [
              h.jsx("h1", {
                className: "text-secondary text-4xl",
                children: "Experiencia",
              }),
              h.jsx("span", { className: "w-52 h-0.5 bg-tertiary" }),
            ],
          }),
          h.jsxs("div", {
            className: "flex sm:flex-col",
            children: [
              h.jsx("div", {
                className:
                  "flex flex-col border-l-2 border-tertiary w-1/4 sm:flex-row sm:overflow-scroll sm:overflow-y-hidden sm:w-full",
                children: xr.map((l, o) =>
                  h.jsx(
                    "div",
                    {
                      onClick: () => r(o),
                      className:
                        n == o
                          ? "bg-tertiary/30 cursor-pointer border-l-4 border-tertiary px-3 py-3 my-3 sm:my-0"
                          : "cursor-pointer border-l-4 border-transparent px-3 py-3 my-3 sm:my-0",
                      children: h.jsx("h1", {
                        className: "text-2xl text-white ml-2 sx:text-lg",
                        children: l.periodo,
                      }),
                    },
                    l.cargo
                  )
                ),
              }),
              h.jsx("div", {
                className: "w-3/4 flex ml-5 sm:w-full sx:w-full",
                children: h.jsxs("div", {
                  className: "w-full flex flex-col ml-5 gap-5 sm:mx-0 sm:mt-5",
                  children: [
                    h.jsx("h2", {
                      className: "text-secondary text-2xl",
                      children: xr[n].Empresa,
                    }),
                    h.jsx("p", {
                      className: "text-white text-xl",
                      children: xr[n].cargo,
                    }),
                    h.jsx("ul", {
                      className: "sx:w-ful",
                      children: xr[n].descripcion.map((l) =>
                        h.jsxs(
                          "li",
                          { className: "text-white my-2", children: ["* ", l] },
                          l
                        )
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  { Cursos1: Sr } = sn,
  Ud = () => {
    const [e, t] = b.useState(!1),
      [n, r] = b.useState(0);
    return (
      b.useEffect(() => {
        const l = () => {
          window.scrollY > 1900 ? t(!0) : t(!1);
        };
        return (
          window.addEventListener("scroll", l),
          () => {
            window.removeEventListener("scroll", l);
          }
        );
      }, []),
      h.jsxs("section", {
        className: e
          ? "w-9/12 mx-auto flex flex-col gap-10 my-[60px] animate__animated animate__fadeIn sm:w-11/12"
          : "w-9/12 mx-auto flex flex-col gap-10 my-[50px] animate__animated animate__fadeOut opacity-0 sm:w-11/12",
        children: [
          h.jsxs("div", {
            className: "flex gap-5 items-center",
            children: [
              h.jsx("h1", {
                className: "text-secondary text-4xl",
                children: "Cursos",
              }),
              h.jsx("span", { className: "w-52 h-0.5 bg-tertiary" }),
            ],
          }),
          h.jsxs("div", {
            className: "flex sm:flex-col",
            children: [
              h.jsx("div", {
                className:
                  "flex flex-col border-l-2 sm:overflow-y-hidden border-tertiary w-1/4 px-5 sm:flex-row sm:w-full sm:overflow-scroll",
                children: Sr.map((l, o) =>
                  h.jsx(
                    "div",
                    {
                      onClick: () => r(o),
                      className:
                        n == o
                          ? "bg-tertiary/30 cursor-pointer border-l-4 border-tertiary px-5 py-3 my-3 w-[200px]"
                          : "cursor-pointer px-5 py-3 my-3 w-[200px]",
                      children: h.jsx("h1", {
                        className:
                          "text-xl text-white ml-2 sx:text-[15px] sx:w-[100px]",
                        children: l.titulo,
                      }),
                    },
                    l.titulo
                  )
                ),
              }),
              h.jsxs("div", {
                className: "w-3/4 flex ml-2 gap-2 sm:flex-col sm:w-full sm:m-0",
                children: [
                  h.jsxs("div", {
                    className:
                      "w-2/6 flex flex-col ml-5 gap-3 sm:w-full sm:mt-10",
                    children: [
                      h.jsx("h2", {
                        className: "text-secondary text-xl",
                        children: Sr[n].titulo,
                      }),
                      h.jsx("p", {
                        className: "text-white",
                        children: Sr[n].descripcion,
                      }),
                    ],
                  }),
                  h.jsx("div", {
                    className: "w-4/6 h-[250px] bg-red-400 sm:w-full",
                    children: h.jsx("img", {
                      className: "w-full h-full object-cover object-top",
                      src: Sr[n].imagen,
                      alt: "",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  { Contacto1: Ad } = sn,
  $d = () => {
    const [e, t] = b.useState(!1);
    return (
      b.useState(0),
      b.useEffect(() => {
        const n = () => {
          window.scrollY > 2400 ? t(!0) : t(!1);
        };
        return (
          window.addEventListener("scroll", n),
          () => {
            window.removeEventListener("scroll", n);
          }
        );
      }, []),
      h.jsxs("section", {
        id: "miFooter",
        className: e
          ? "w-9/12 mx-auto flex flex-col gap-10 my-[60px] animate__animated animate__fadeIn sm:w-11/12"
          : "w-9/12 mx-auto flex flex-col gap-10 my-[50px] animate__animated animate__fadeOut opacity-0 sm:w-11/12",
        children: [
          h.jsxs("div", {
            className: "flex gap-5 items-center",
            children: [
              h.jsx("h1", {
                className: "text-secondary text-4xl",
                children: "Contacto",
              }),
              h.jsx("span", { className: "w-52 h-0.5 bg-tertiary" }),
            ],
          }),
          h.jsxs("div", {
            className: "flex items-center sm:flex-col",
            children: [
              h.jsx("div", {
                className: "h-1/2 sm:w-full",
                children: h.jsx("pre", {
                  className: "text-xl text-tertiary sx:text-[15px]",
                  children: JSON.stringify(Ad, null, 3),
                }),
              }),
              h.jsx("div", {
                className: "h-1/2 sm:w-full",
                children: h.jsx("dotlottie-player", {
                  src: "https://lottie.host/5be26911-248b-4e77-bf46-08d12d2ffd67/mmjHmv0trt.json",
                  background: "transparent",
                  speed: "1",
                  loop: !0,
                  autoplay: !0,
                }),
              }),
            ],
          }),
          h.jsxs("footer", {
            className: "mt-5",
            children: [
              h.jsx("hr", {}),
              h.jsxs("div", {
                className:
                  "text-white text-center text-xl mt-5 sx:text-sm sx:m-2",
                children: [
                  h.jsx("h3", { children: "Diseñado y Desarrollado por:" }),
                  h.jsx("h3", { children: "Williams Hidrovo Bernal" }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  Vd = () =>
    h.jsx("section", {
      className:
        "fixed bottom-0 left-2 animate__animated animate__fadeIn sm:static",
      children: h.jsxs("div", {
        className:
          "flex flex-col items-center gap-3 sm:flex-row sm:justify-center",
        children: [
          h.jsxs("a", {
            href: "https://www.linkedin.com/in/williams-hidrovo/",
            target: "_blank",
            children: [
              " ",
              h.jsx("i", {
                className:
                  "ri-linkedin-box-line text-3xl text-gray-300 hover:text-gray-50",
              }),
            ],
          }),
          h.jsx("a", {
            href: "https://github.com/Williams-Hidrovo",
            target: "_blank",
            children: h.jsx("i", {
              className:
                "ri-github-line text-3xl text-gray-300 hover:text-gray-50",
            }),
          }),
          h.jsx("a", {
            href: "mailto:antonioxxw@gmail.com?subject=Portafolio Williams Hidrovo",
            target: "_blank",
            children: h.jsx("i", {
              className:
                "ri-mail-line text-3xl text-gray-300 hover:text-gray-50",
            }),
          }),
          h.jsx("a", {
            href: "https://www.facebook.com/WilliamsAntonioXX",
            target: "_blank",
            children: h.jsx("i", {
              className:
                "ri-facebook-box-line text-3xl text-gray-300 hover:text-gray-50",
            }),
          }),
          h.jsx("span", { className: "h-[300px] w-[2px] bg-white sm:hidden" }),
        ],
      }),
    });
function Hd() {
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx(Md, {}),
      h.jsx(Id, {}),
      h.jsx(Od, {}),
      h.jsx(Fd, {}),
      h.jsx(Dd, {}),
      h.jsx(Ud, {}),
      h.jsx($d, {}),
      h.jsx(Vd, {}),
    ],
  });
}
Gl.createRoot(document.getElementById("root")).render(
  h.jsx(b.Fragment, { children: h.jsx(Hd, {}) })
);
