var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  c = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  ),
  l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.for(`react.view_transition`),
      m = Symbol.iterator;
    function h(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (m && e[m]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      _ = Object.assign,
      v = {};
    function y(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    ((y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function b() {}
    b.prototype = y.prototype;
    function x(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    var S = (x.prototype = new b());
    ((S.constructor = x), _(S, y.prototype), (S.isPureReactComponent = !0));
    var ee = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      te = Object.prototype.hasOwnProperty;
    function ne(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function re(e, t) {
      return ne(e.type, t, e.props);
    }
    function ie(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function T(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var E = /\/+/g;
    function D(e, t) {
      return typeof e == `object` && e && e.key != null
        ? T(`` + e.key)
        : t.toString(36);
    }
    function ae(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function O(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), O(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + D(e, 0) : a),
          ee(o)
            ? ((i = ``),
              c != null && (i = c.replace(E, `$&/`) + `/`),
              O(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (ie(o) &&
                (o = re(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(E, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (ee(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + D(a, u)), (c += O(a, r, i, s, o)));
      else if (((u = h(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + D(a, u++)), (c += O(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return O(ae(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function oe(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        O(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function k(e) {
      if (e._status === -1) {
        var t = e._result,
          n = t();
        (n.then(
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1),
              (e._result = t),
              n.status === void 0 && ((n.status = `fulfilled`), (n.value = t)));
          },
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2),
              (e._result = t),
              n.status === void 0 && ((n.status = `rejected`), (n.reason = t)));
          },
        ),
          e._status === -1 && ((e._status = 0), (e._result = n)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var A =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            if (
              typeof window == `object` &&
              typeof window.ErrorEvent == `function`
            ) {
              var t = new window.ErrorEvent(`error`, {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == `object` && e && typeof e.message == `string`
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == `object` &&
              typeof process.emit == `function`
            ) {
              process.emit(`uncaughtException`, e);
              return;
            }
            console.error(e);
          };
    function j(e) {
      var t = w.T,
        n = {};
      ((n.types = t === null ? null : t.types), (w.T = n));
      try {
        var r = e(),
          i = w.S;
        (i !== null && i(n, r),
          typeof r == `object` &&
            r &&
            typeof r.then == `function` &&
            r.then(C, A));
      } catch (e) {
        A(e);
      } finally {
        (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
      }
    }
    function se(e) {
      var t = w.T;
      if (t !== null) {
        var n = t.types;
        n === null ? (t.types = [e]) : n.indexOf(e) === -1 && n.push(e);
      } else j(se.bind(null, e));
    }
    var ce = {
      map: oe,
      forEach: function (e, t, n) {
        oe(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          oe(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          oe(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!ie(e))
          throw Error(
            `React.Children.only expected to receive a single React element child.`,
          );
        return e;
      },
    };
    ((e.Activity = f),
      (e.Children = ce),
      (e.Component = y),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = x),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.ViewTransition = p),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.addTransitionType = se),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = _({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !te.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return ne(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            te.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return ne(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = ie),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: k };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = j),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.3.0`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = `/assets/service-facial-aL2nPBwM.jpg`,
  m = `/assets/service-hair-spa-D-C9mLtu.jpg`,
  h = `/assets/service-styling-C0btXW04.jpg`,
  g = `/assets/service-waxing-JKXSueIh.jpg`,
  _ = (e) => `https://images.unsplash.com/${e}?auto=format&fit=crop&w=800&q=70`,
  v = [
    {
      id: `m-haircut`,
      name: `Haircut`,
      description: `A sharp, tailored cut shaped to your face and hair type.`,
      category: `men`,
      price: 35,
      durationMinutes: 45,
      imageUrl: _(`photo-1503951914875-452162b0f3f1`),
      featured: !0,
    },
    {
      id: `m-beard`,
      name: `Beard Trim & Shave`,
      description: `Hot towel, straight razor finish and a clean, precise line.`,
      category: `men`,
      price: 28,
      durationMinutes: 30,
      imageUrl: _(`photo-1621607512214-68297480165e`),
      featured: !0,
    },
    {
      id: `m-color`,
      name: `Hair Color`,
      description: `Natural-looking tone, grey blending and soft dimension.`,
      category: `men`,
      price: 70,
      durationMinutes: 90,
      imageUrl: _(`photo-1596728325488-58c87691e9af`),
    },
    {
      id: `m-head-massage`,
      name: `Head Massage`,
      description: `Warm oil pressure-point massage to unwind the scalp.`,
      category: `men`,
      price: 30,
      durationMinutes: 30,
      imageUrl: m,
    },
    {
      id: `m-facial`,
      name: `Facial`,
      description: `Deep cleanse, exfoliation and hydration for all skin types.`,
      category: `men`,
      price: 55,
      durationMinutes: 60,
      imageUrl: p,
    },
    {
      id: `m-hair-spa`,
      name: `Hair Spa`,
      description: `Restorative scalp and strand treatment with a steam finish.`,
      category: `men`,
      price: 50,
      durationMinutes: 50,
      imageUrl: m,
    },
    {
      id: `w-haircut`,
      name: `Haircut & Styling`,
      description: `Consultation, wash, cut and a blow-dry you can recreate.`,
      category: `women`,
      price: 55,
      durationMinutes: 60,
      imageUrl: h,
      featured: !0,
    },
    {
      id: `w-color`,
      name: `Hair Color & Highlights`,
      description: `Hand-painted dimension, gloss and soft grown-out blends.`,
      category: `women`,
      price: 120,
      durationMinutes: 120,
      imageUrl: _(`photo-1560869713-7d0a29430803`),
      featured: !0,
    },
    {
      id: `w-facial`,
      name: `Facial`,
      description: `Brightening deep-cleanse tailored to your skin that week.`,
      category: `women`,
      price: 60,
      durationMinutes: 60,
      imageUrl: p,
    },
    {
      id: `w-waxing`,
      name: `Waxing`,
      description: `Gentle warm wax with soothing aftercare, head to toe.`,
      category: `women`,
      price: 40,
      durationMinutes: 45,
      imageUrl: g,
    },
    {
      id: `w-mani-pedi`,
      name: `Manicure & Pedicure`,
      description: `Shaping, cuticle care and a long-wearing polish finish.`,
      category: `women`,
      price: 65,
      durationMinutes: 75,
      imageUrl: _(`photo-1604654894610-df63bc536371`),
    },
    {
      id: `w-bridal`,
      name: `Bridal Makeup`,
      description: `Trial plus day-of makeup built to last from dawn to dance.`,
      category: `women`,
      price: 220,
      durationMinutes: 150,
      imageUrl: _(`photo-1519741497674-611481863552`),
    },
    {
      id: `w-hair-spa`,
      name: `Hair Spa`,
      description: `Deep-conditioning ritual for softness, shine and slip.`,
      category: `women`,
      price: 55,
      durationMinutes: 50,
      imageUrl: m,
    },
  ],
  y = [
    {
      id: `r1`,
      name: `Mira Alston`,
      rating: 5,
      text: `The softest, most thoughtful salon experience I've ever had. My color has never looked this dimensional.`,
      service: `Color & Highlights`,
      featured: !0,
    },
    {
      id: `r2`,
      name: `Devin Kapoor`,
      rating: 5,
      text: `First place that actually listened before picking up the scissors. The hot towel shave alone is worth the trip.`,
      service: `Beard & Shave`,
      featured: !0,
    },
    {
      id: `r3`,
      name: `Priya Sethi`,
      rating: 5,
      text: `Booked a bridal trial and left teary. They matched my skin perfectly and nothing budged for fourteen hours.`,
      service: `Bridal Makeup`,
      featured: !0,
    },
    {
      id: `r4`,
      name: `Tomas Herrera`,
      rating: 4,
      text: `Calm, plant-filled and never rushed. My cut has grown out beautifully over six weeks.`,
      service: `Haircut`,
    },
    {
      id: `r5`,
      name: `Ayesha Rahman`,
      rating: 5,
      text: `The hair spa left my scalp genuinely happy. I've stopped shedding the way I was.`,
      service: `Hair Spa`,
    },
    {
      id: `r6`,
      name: `Jonah Feldman`,
      rating: 5,
      text: `Head massage after a brutal work week — I nearly fell asleep in the chair. Rebooked on the spot.`,
      service: `Head Massage`,
    },
    {
      id: `r7`,
      name: `Lena Novak`,
      rating: 4,
      text: `Lovely manicure, and they were honest that my nails needed a rest week. Appreciated the candour.`,
      service: `Manicure & Pedicure`,
    },
    {
      id: `r8`,
      name: `Samir Odili`,
      rating: 5,
      text: `Genuinely unisex — my partner and I book back to back and both leave thrilled.`,
      service: `Haircut & Styling`,
    },
  ],
  b = (e, t = 900) =>
    `https://images.unsplash.com/${e}?auto=format&fit=crop&w=${t}&q=70`,
  x = [
    {
      id: `g1`,
      src: b(`photo-1560066984-138dadb4c035`),
      alt: `Stylist finishing a fresh haircut`,
      tall: !0,
    },
    {
      id: `g2`,
      src: b(`photo-1521590832167-7bcbfaa6381f`),
      alt: `Bright modern salon interior`,
    },
    {
      id: `g3`,
      src: b(`photo-1562322140-8baeececf3df`),
      alt: `Client having hair washed at the basin`,
    },
    {
      id: `g4`,
      src: b(`photo-1595476108010-b4d1f102b1b1`),
      alt: `Soft balayage colour result`,
      tall: !0,
    },
    {
      id: `g5`,
      src: b(`photo-1470259078422-826894b933aa`),
      alt: `Salon styling station with mirrors`,
    },
    {
      id: `g6`,
      src: b(`photo-1585747860715-2ba37e788b70`),
      alt: `Barber shaping a beard`,
    },
    {
      id: `g7`,
      src: b(`photo-1516975080664-ed2fc6a32937`),
      alt: `Blow-dry styling in progress`,
      tall: !0,
    },
    {
      id: `g8`,
      src: b(`photo-1487412947147-5cebf100ffc2`),
      alt: `Finished waves and styling work`,
    },
    {
      id: `g9`,
      src: b(`photo-1540555700478-4be289fbecef`),
      alt: `Calm spa treatment room`,
    },
    {
      id: `g10`,
      src: b(`photo-1559599101-f09722fb4948`),
      alt: `Product shelf and warm salon lighting`,
    },
    {
      id: `g11`,
      src: b(`photo-1552693673-1bf958298935`),
      alt: `Detail of a precision cut`,
      tall: !0,
    },
    {
      id: `g12`,
      src: b(`photo-1522337660859-02fbefca4702`),
      alt: `Relaxed client after styling`,
    },
  ],
  S = {
    name: `Glow & Grace`,
    tagline: `Where style is sculpted with softness.`,
    address: `142 Willow Lane, Bandra West, Mumbai 400050`,
    phone: `+91 9876543210`,
    email: `hello@verveandbalm.com`,
    mapEmbedUrl: `https://www.google.com/maps?q=Bandra%20West%2C%20Mumbai&output=embed`,
    hours: [
      { day: `Monday - Sunday`, time: `10:00 am - 8:00 pm` },
    ],
  };
function ee(e) {
  return e ? v.filter((t) => t.category === e) : v;
}
function C(e = 4) {
  return v.filter((e) => e.featured).slice(0, e);
}
function w() {
  return y;
}
function te(e = 3) {
  return y.filter((e) => e.featured).slice(0, e);
}
function ne() {
  return x;
}
function re() {
  return S;
}
var ie = f(),
  T = c(u(), 1),
  E = (0, T.createContext)({});
function D(e) {
  let t = (0, T.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var ae = typeof window < `u` ? T.useLayoutEffect : T.useEffect,
  O = (0, T.createContext)(null);
function oe(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function k(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var A = (e, t, n) => (n > t ? t : n < e ? e : n),
  j = {},
  se = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  ce = (e) => typeof e == `object` && !!e,
  M = (e) => /^0[^.\s]+$/u.test(e);
function N(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var P = (e) => e,
  le = (...e) => e.reduce((e, t) => (n) => t(e(n))),
  F = (e, t, n) => {
    let r = t - e;
    return r ? (n - e) / r : 1;
  },
  ue = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return (oe(this.subscriptions, e), () => this.remove(e));
    }
    remove(e) {
      k(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let r = this.subscriptions[i];
            r && r(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  I = (e) => e * 1e3,
  L = (e) => e / 1e3,
  de = (e, t) => (t ? (1e3 / t) * e : 0),
  fe = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  pe = 1e-7,
  me = 12;
function he(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = fe(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > pe && ++s < me);
  return o;
}
function ge(e, t, n, r) {
  if (e === t && n === r) return P;
  let i = (t) => he(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : fe(i(e), t, r));
}
var _e = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  ve = (e) => (t) => 1 - e(1 - t),
  ye = ge(0.33, 1.53, 0.69, 0.99),
  be = ve(ye),
  xe = _e(be),
  Se = (e) =>
    e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * be(e) : 0.5 * (2 - 2 ** (-10 * (e - 1))),
  Ce = (e) => 1 - Math.sin(Math.acos(e)),
  we = ve(Ce),
  Te = _e(Ce),
  Ee = ge(0.42, 0, 1, 1),
  De = ge(0, 0, 0.58, 1),
  Oe = ge(0.42, 0, 0.58, 1),
  ke = (e) => Array.isArray(e) && typeof e[0] != `number`,
  Ae = (e) => Array.isArray(e) && typeof e[0] == `number`,
  je = {
    linear: P,
    easeIn: Ee,
    easeInOut: Oe,
    easeOut: De,
    circIn: Ce,
    circInOut: Te,
    circOut: we,
    backIn: be,
    backInOut: xe,
    backOut: ye,
    anticipate: Se,
  },
  Me = (e) => typeof e == `string`,
  Ne = (e) => {
    if (Ae(e)) {
      e.length;
      let [t, n, r, i] = e;
      return ge(t, n, r, i);
    }
    return Me(e) ? (je[e], `${e}`, je[e]) : e;
  },
  Pe = [
    `setup`,
    `read`,
    `resolveKeyframes`,
    `preUpdate`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ];
function Fe(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new Set(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (n.add(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      r = !0;
      let a = t;
      ((t = n),
        (n = a),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var Ie = 40;
function Le(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = Pe.reduce((e, t) => ((e[t] = Fe(a)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    h = () => {
      let a = j.useManualTiming,
        o = a ? i.timestamp : performance.now();
      ((n = !1),
        a ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, Ie), 1)),
        (i.timestamp = o),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h)));
    },
    g = () => {
      ((n = !0), (r = !0), i.isProcessing || e(h));
    };
  return {
    schedule: Pe.reduce((e, t) => {
      let r = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < Pe.length; t++) o[Pe[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: R,
    cancel: Re,
    state: z,
    steps: ze,
  } = Le(typeof requestAnimationFrame < `u` ? requestAnimationFrame : P, !0),
  Be;
function Ve() {
  Be = void 0;
}
var B = {
    now: () => (
      Be === void 0 &&
        B.set(
          z.isProcessing || j.useManualTiming ? z.timestamp : performance.now(),
        ),
      Be
    ),
    set: (e) => {
      ((Be = e), queueMicrotask(Ve));
    },
  },
  He = (e) => Math.round(e * 1e5) / 1e5,
  Ue = (e) => (t) => typeof t == `string` && t.startsWith(e),
  We = Ue(`--`),
  Ge = Ue(`var(--`),
  Ke = (e) => (Ge(e) ? qe.test(e.split(`/*`)[0].trim()) : !1),
  qe =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Je(e) {
  return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`);
}
var Ye = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  Xe = { ...Ye, transform: (e) => A(0, 1, e) },
  Ze = { ...Ye, default: 1 },
  Qe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function $e(e) {
  return e == null;
}
var et =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  tt = (e, t) => (n) =>
    !!(
      (typeof n == `string` && et.test(n) && n.startsWith(e)) ||
      (t && !$e(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  nt = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Qe);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  rt = (e) => A(0, 255, e),
  it = { ...Ye, transform: (e) => Math.round(rt(e)) },
  at = {
    test: tt(`rgb`, `red`),
    parse: nt(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      it.transform(e) +
      `, ` +
      it.transform(t) +
      `, ` +
      it.transform(n) +
      `, ` +
      He(Xe.transform(r)) +
      `)`,
  };
function ot(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var st = { test: tt(`#`), parse: ot, transform: at.transform },
  ct = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  lt = ct(`deg`),
  ut = ct(`%`),
  V = ct(`px`),
  dt = ct(`vh`),
  ft = ct(`vw`),
  pt = {
    ...ut,
    parse: (e) => ut.parse(e) / 100,
    transform: (e) => ut.transform(e * 100),
  },
  mt = {
    test: tt(`hsl`, `hue`),
    parse: nt(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      ut.transform(He(t)) +
      `, ` +
      ut.transform(He(n)) +
      `, ` +
      He(Xe.transform(r)) +
      `)`,
  },
  H = {
    test: (e) => at.test(e) || st.test(e) || mt.test(e),
    parse: (e) =>
      at.test(e) ? at.parse(e) : mt.test(e) ? mt.parse(e) : st.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
          ? at.transform(e)
          : mt.transform(e),
    getAnimatableNone: (e) => {
      let t = H.parse(e);
      return ((t.alpha = 0), H.transform(t));
    },
  },
  ht =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  gt = new RegExp(Qe.source),
  _t = new RegExp(ht.source, `i`);
function vt(e) {
  return isNaN(e) && typeof e == `string` && (gt.test(e) || _t.test(e));
}
var yt = `number`,
  bt = `color`,
  xt = `var`,
  St = `var(`,
  Ct = "${}",
  wt =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Tt(e) {
  let t = e.toString();
  return gt.test(t) || _t.test(t);
}
function Et(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        wt,
        (e) => (
          H.test(e)
            ? (r.color.push(a), i.push(bt), n.push(H.parse(e)))
            : e.startsWith(St)
              ? (r.var.push(a), i.push(xt), n.push(e))
              : (r.number.push(a), i.push(yt), n.push(parseFloat(e))),
          ++a,
          Ct
        ),
      )
      .split(Ct),
    indexes: r,
    types: i,
  };
}
function Dt(e) {
  return Et(e).values;
}
function Ot({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        i += e === yt ? He(r[a]) : e === bt ? H.transform(r[a]) : r[a];
      }
    return i;
  };
}
function kt(e) {
  return Ot(Et(e));
}
var At = (e) =>
    typeof e == `number` ? 0 : H.test(e) ? H.getAnimatableNone(e) : e,
  jt = (e, t) =>
    typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : At(e);
function Mt(e) {
  let t = Et(e);
  return Ot(t)(t.values.map((e, n) => jt(e, t.split[n])));
}
var U = { test: vt, parse: Dt, createTransformer: kt, getAnimatableNone: Mt };
function Nt(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Pt({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = Nt(s, r, e + 1 / 3)), (a = Nt(s, r, e)), (o = Nt(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ft(e, t) {
  return (n) => (n > 0 ? t : e);
}
var W = (e, t, n) => e + (t - e) * n,
  It = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Lt = [st, at, mt],
  Rt = (e) => Lt.find((t) => t.test(e));
function zt(e) {
  let t = Rt(e);
  if (!t) return (`${e}`, !1);
  let n = t.parse(e);
  return (t === mt && (n = Pt(n)), n);
}
var Bt = (e, t) => {
    let n = zt(e),
      r = zt(t);
    if (!n || !r) return Ft(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = It(n.red, r.red, e)),
      (i.green = It(n.green, r.green, e)),
      (i.blue = It(n.blue, r.blue, e)),
      (i.alpha = W(n.alpha, r.alpha, e)),
      at.transform(i)
    );
  },
  Vt = new Set([`none`, `hidden`]);
function Ht(e, t) {
  return Vt.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Ut(e, t) {
  return (n) => W(e, t, n);
}
function Wt(e) {
  return typeof e == `number`
    ? Ut
    : typeof e == `string`
      ? Ke(e)
        ? Ft
        : H.test(e)
          ? Bt
          : Jt
      : Array.isArray(e)
        ? Gt
        : typeof e == `object`
          ? H.test(e)
            ? Bt
            : Kt
          : Ft;
}
function Gt(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => Wt(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function Kt(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Wt(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function qt(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    ((n[i] = s), r[a]++);
  }
  return n;
}
var Jt = (e, t) => {
    let n = U.createTransformer(t),
      r = Et(e),
      i = Et(t);
    return r.indexes.var.length === i.indexes.var.length &&
      r.indexes.color.length === i.indexes.color.length &&
      r.indexes.number.length >= i.indexes.number.length
      ? (Vt.has(e) && !i.values.length) || (Vt.has(t) && !r.values.length)
        ? Ht(e, t)
        : le(Gt(qt(r, i), i.values), n)
      : (`${e}${t}`, Ft(e, t));
  },
  Yt = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function Xt(e, t) {
  let n = Yt.exec(e);
  if (!n) return;
  let r = Yt.exec(t);
  if (!r || n[2] !== r[2]) return;
  let i = n[2],
    a = parseFloat(n[1]),
    o = parseFloat(r[1]);
  return (e) => He(W(a, o, e)) + i;
}
function Zt(e, t, n) {
  if (typeof e == `number` && typeof t == `number` && typeof n == `number`)
    return W(e, t, n);
  if (typeof e == `string` && typeof t == `string`) {
    let n = Xt(e, t);
    if (n) return n;
  }
  return Wt(e)(e, t);
}
var Qt = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: (e = !0) => R.update(t, e),
      stop: () => Re(t),
      now: () => (z.isProcessing ? z.timestamp : B.now()),
    };
  },
  $t = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++)
      r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  en = 2e4;
function tn(e, t = 50, n = en, r) {
  let i = 0,
    a = e.next(i);
  for (r?.push(a.value); !a.done && i < n;)
    ((i += t), (a = e.next(i)), r?.push(a.value));
  return i >= n ? 1 / 0 : i;
}
function nn(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(tn(r), en);
  return {
    type: `keyframes`,
    ease: (e) => r.next(i * e).value / t,
    duration: L(i),
  };
}
var G = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function rn(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var an = 12;
function on(e, t, n) {
  let r = n;
  for (let n = 1; n < an; n++) r -= e(r) / t(r);
  return r;
}
var sn = 0.001;
function cn({
  duration: e = G.duration,
  bounce: t = G.bounce,
  velocity: n = G.velocity,
  mass: r = G.mass,
}) {
  let i, a;
  G.maxDuration;
  let o = 1 - t;
  ((o = A(G.minDamping, G.maxDamping, o)),
    (e = A(G.minDuration, G.maxDuration, L(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = rn(t, o),
            c = Math.exp(-i);
          return sn - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o * o * t * t * e,
            c = Math.exp(-r),
            l = rn(t * t, o);
          return ((-i(t) + sn > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = on(i, a, s);
  if (((e = I(e)), isNaN(c)))
    return { stiffness: G.stiffness, damping: G.damping, duration: e };
  {
    let t = c * c * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var ln = [`duration`, `bounce`],
  un = [`stiffness`, `damping`, `mass`];
function dn(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function fn(e) {
  let t = {
    velocity: G.velocity,
    stiffness: G.stiffness,
    damping: G.damping,
    mass: G.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!dn(e, un) && dn(e, ln))
    if (((t.velocity = 0), e.visualDuration)) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * A(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: G.mass, stiffness: i, damping: a };
    } else {
      let n = cn({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: G.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function pn(e = G.visualDuration, t = G.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    r = n.keyframes[0],
    i = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: r },
    {
      stiffness: o,
      damping: s,
      mass: c,
      duration: l,
      velocity: u,
      isResolvedFromDuration: d,
    } = fn({ ...n, velocity: -L(n.velocity || 0) }),
    f = s / (2 * Math.sqrt(o * c)),
    p = L(Math.sqrt(o / c)),
    m = f * p,
    h = {
      target: i,
      delta: i - r,
      velocity: u || 0,
      restSpeed: 0,
      restDelta: 0,
    },
    g = () => {
      let e = Math.abs(h.delta) < 5;
      ((h.restSpeed =
        n.restSpeed || (e ? G.restSpeed.granular : G.restSpeed.default)),
        (h.restDelta =
          n.restDelta || (e ? G.restDelta.granular : G.restDelta.default)));
    };
  g();
  let _, v, y;
  if (f < 1) {
    let e = rn(p, f),
      t = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    y = () => {
      ((t.A = (h.velocity + m * h.delta) / e),
        (t.sinC = m * t.A + h.delta * e),
        (t.cosC = m * h.delta - t.A * e));
    };
    let n = (n) => {
      n !== t.t &&
        ((t.t = n),
        (t.env = Math.exp(-m * n)),
        (t.sin = Math.sin(e * n)),
        (t.cos = Math.cos(e * n)));
    };
    ((_ = (e) => (n(e), h.target - t.env * (t.A * t.sin + h.delta * t.cos))),
      (v = (e) => (n(e), t.env * (t.sinC * t.sin + t.cosC * t.cos))));
  } else if (f === 1) {
    _ = (e) =>
      h.target - Math.exp(-p * e) * (h.delta + (h.velocity + p * h.delta) * e);
    let e = { C: 0 };
    ((y = () => {
      e.C = h.velocity + p * h.delta;
    }),
      (v = (t) => Math.exp(-p * t) * (p * e.C * t - h.velocity)));
  } else {
    let e = p * Math.sqrt(f * f - 1);
    _ = (t) => {
      let n = Math.exp(-m * t),
        r = Math.min(e * t, 300);
      return (
        h.target -
        (n *
          ((h.velocity + m * h.delta) * Math.sinh(r) +
            e * h.delta * Math.cosh(r))) /
          e
      );
    };
    let t = { P: 0, sinh: 0, cosh: 0 };
    ((y = () => {
      ((t.P = (h.velocity + m * h.delta) / e),
        (t.sinh = m * t.P - h.delta * e),
        (t.cosh = m * h.delta - t.P * e));
    }),
      (v = (n) => {
        let r = Math.exp(-m * n),
          i = Math.min(e * n, 300);
        return r * (t.sinh * Math.sinh(i) + t.cosh * Math.cosh(i));
      }));
  }
  y();
  let b = !dn(n, un) && dn(n, ln),
    x = (d && l) || null,
    S = {
      calculatedDuration: x,
      retarget: (e, t) => {
        ((h.target = e[e.length - 1]),
          (h.delta = h.target - e[0]),
          (h.velocity = b ? 0 : -L(t)),
          (n.restSpeed && n.restDelta) || g(),
          (S.calculatedDuration = x),
          (a.done = !1),
          y());
      },
      velocity: (e) => I(v(e)),
      next: (e) => {
        let t = _(e);
        if (d) a.done = e >= l;
        else {
          let n = I(v(e));
          a.done =
            Math.abs(n) <= h.restSpeed && Math.abs(h.target - t) <= h.restDelta;
        }
        return ((a.value = a.done ? h.target : t), a);
      },
      toString: () => {
        let e = Math.min(tn(S), en),
          t = $t((t) => S.next(e * t).value, e, 30);
        return e + `ms ` + t;
      },
      toTransition: () => {},
    };
  return S;
}
pn.applyToOptions = (e) => {
  let t = nn(e, 100, pn);
  return (
    (e.ease = t.ease),
    (e.duration = I(t.duration)),
    (e.type = `keyframes`),
    e
  );
};
function mn({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => e < s || e > c,
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => {
      let t = v(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : _ + t));
    },
    b,
    x,
    S = (e) => {
      p(f.value) &&
        ((b = e),
        (x = pn({
          keyframes: [f.value, m(f.value)],
          velocity: (-v(e) / r) * 1e3,
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    S(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !x && b === void 0 && ((t = !0), y(e), S(e)),
          b !== void 0 && e >= b ? x.next(e - b) : (!t && y(e), f)
        );
      },
    }
  );
}
function hn(e, t, n) {
  let r = [],
    i = n || j.mix || Zt,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = le(Array.isArray(t) ? t[n] || P : t, a)), r.push(a));
  }
  return r;
}
function gn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = hn(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = F(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(A(e[0], e[a - 1], t)) : l;
}
function _n(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = F(0, t, r);
    e.push(W(n, 1, i));
  }
}
function vn(e) {
  let t = [0];
  return (_n(t, e.length - 1), t);
}
function yn(e, t) {
  return e.map((e) => e * t);
}
function bn(e, t) {
  return e.map(() => t || Oe).splice(0, e.length - 1);
}
function xn({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = ke(r) ? r.map(Ne) : Ne(r),
    a = { done: !1, value: t[0] };
  if (
    t.length === 2 &&
    !Array.isArray(i) &&
    (!n || n.length !== 2 || (n[0] === 0 && n[1] === 1))
  ) {
    let [n, r] = t,
      o = n === r ? void 0 : (j.mix || Zt)(n, r);
    return {
      calculatedDuration: e,
      next: (t) => (
        (a.value = o ? o(i(e > 0 ? A(0, 1, t / e) : 1)) : r),
        (a.done = t >= e),
        a
      ),
    };
  }
  let o = gn(yn(n && n.length === t.length ? n : vn(t), e), t, {
    ease: Array.isArray(i) ? i : bn(t, i),
  });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var Sn = 5;
function Cn(e, t, n) {
  let r = Math.max(t - Sn, 0);
  return de(n - e(r), t - r);
}
function wn(e, t, n = 0) {
  return t <= 0
    ? n
    : e.velocity
      ? e.velocity(t)
      : Cn((t) => e.next(t).value, t, e.next(t).value);
}
var Tn = (e) => e !== null;
function En(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(Tn),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
var Dn = { decay: mn, inertia: mn, tween: xn, keyframes: xn, spring: pn };
function On(e) {
  typeof e.type == `string` && (e.type = Dn[e.type]);
}
function kn(e, t) {
  return {
    kind: e,
    animation: t,
    timestamp: B.now(),
    frameTimestamp: z.timestamp,
    frameIsProcessing: z.isProcessing,
  };
}
function An(e, t, n) {
  let r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({ ...kn(`animation-start`, e), options: n ? { ...t, ...n } : t });
    } catch {}
}
function jn(e, t) {
  let n = globalThis.__MOTION_INSPECT__;
  if (n)
    try {
      n({ ...kn(`layout-animation-start`, e), node: t });
    } catch {}
}
var Mn = class {
    constructor() {
      this.isResolved = !1;
    }
    get finished() {
      return (
        (this._finished ||= this.isResolved
          ? Promise.resolve()
          : new Promise((e) => {
              this._resolve = e;
            })),
        this._finished
      );
    }
    updateFinished() {
      ((this._finished = this._resolve = void 0), (this.isResolved = !1));
    }
    notifyFinished() {
      ((this.isResolved = !0), this._resolve?.());
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
  },
  Nn = (e) => e / 100,
  Pn = class extends Mn {
    constructor(e) {
      (super(),
        (this.state = `idle`),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          let { motionValue: e } = this.options;
          (e && e.updatedAt !== B.now() && this.tick(B.now()),
            (this.isStopped = !0),
            this.state !== `idle` &&
              (this.teardown(), this.options.onStop?.()));
        }),
        (this.options = e),
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause(),
        An(this, this.options));
    }
    initAnimation() {
      let { options: e } = this;
      On(e);
      let {
          type: t = xn,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = e,
        { keyframes: o } = e,
        s = t || xn;
      s !== xn &&
        typeof o[0] != `number` &&
        ((this.mixKeyframes = le(Nn, Zt(o[0], o[1]))), (o = [0, 100]));
      let c = s(o === e.keyframes ? e : { ...e, keyframes: o });
      (i === `mirror` &&
        (this.mirroredGenerator = s({
          ...e,
          keyframes: [...o].reverse(),
          velocity: -a,
        })),
        c.calculatedDuration === null && (c.calculatedDuration = tn(c)));
      let { calculatedDuration: l } = c;
      ((this.calculatedDuration = l),
        (this.resolvedDuration = l + r),
        (this.totalDuration = this.resolvedDuration * (n + 1) - r),
        (this.generator = c));
    }
    updateTime(e) {
      let t = Math.round(e - this.startTime) * this.playbackSpeed;
      this.currentTime = this.holdTime === null ? t : this.holdTime;
    }
    tick(e, t = !1) {
      let {
        generator: n,
        totalDuration: r,
        mixKeyframes: i,
        mirroredGenerator: a,
        resolvedDuration: o,
        calculatedDuration: s,
      } = this;
      if (this.startTime === null) return n.next(0);
      let {
        delay: c = 0,
        keyframes: l,
        repeat: u,
        repeatType: d,
        repeatDelay: f,
        type: p,
        onUpdate: m,
        finalKeyframe: h,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - r / this.speed, this.startTime)),
        t ? (this.currentTime = e) : this.updateTime(e));
      let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
        _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
      ((this.currentTime = Math.max(g, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = r));
      let v = this.currentTime,
        y = n;
      if (u) {
        let e = Math.min(this.currentTime, r) / o,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, u + 1)),
          t % 2 &&
            (d === `reverse`
              ? ((n = 1 - n), f && (n -= f / o))
              : d === `mirror` && (y = a)),
          (v = A(0, 1, n) * o));
      }
      let b;
      (_
        ? ((this.delayState.value = l[0]), (b = this.delayState))
        : (b = y.next(v)),
        i && !_ && (b.value = i(b.value)));
      let { done: x } = b;
      !_ &&
        s !== null &&
        (x =
          this.playbackSpeed >= 0
            ? this.currentTime >= r
            : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && x));
      return (
        S && p !== mn && (b.value = En(l, this.options, h, this.speed)),
        m && m(b.value),
        S && this.finish(),
        b
      );
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
    get duration() {
      return L(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + L(e);
    }
    get time() {
      return L(this.currentTime);
    }
    set time(e) {
      ((e = I(e)),
        (this.currentTime = e),
        this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0),
            (this.state = `paused`),
            (this.holdTime = e),
            this.tick(e)));
    }
    getGeneratorVelocity() {
      return wn(this.generator, this.currentTime, this.options.velocity);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (t && this.driver && this.updateTime(B.now()),
        (this.playbackSpeed = e),
        t && this.driver && (this.time = L(this.currentTime)));
    }
    play() {
      if (this.isStopped) return;
      let { driver: e = Qt, startTime: t } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
      let n = this.driver.now();
      (this.state === `finished`
        ? (this.updateFinished(), (this.startTime = n))
        : this.holdTime === null
          ? (this.startTime ||= t ?? n)
          : (this.startTime = n - this.holdTime),
        this.state === `finished` &&
          this.speed < 0 &&
          (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      ((this.state = `paused`),
        this.updateTime(B.now()),
        (this.holdTime = this.currentTime));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      (this.notifyFinished(),
        this.teardown(),
        (this.state = `finished`),
        this.options.onComplete?.());
    }
    cancel() {
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.());
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        (this.startTime = this.holdTime = null));
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
    attachTimeline(e) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = `keyframes`),
          (this.options.ease = `linear`),
          this.initAnimation()),
        this.driver?.stop(),
        e.observe(this)
      );
    }
  },
  Fn = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function In(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Qe) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!Fn.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var Ln = /\b([a-z-]*)\(.*?\)/gu,
  Rn = {
    ...U,
    getAnimatableNone: (e) => {
      let t = e.match(Ln);
      return t ? t.map(In).join(` `) : e;
    },
  },
  zn = {
    ...U,
    getAnimatableNone: (e) => {
      let t = U.parse(e);
      return U.createTransformer(e)(
        t.map((e) =>
          typeof e == `number`
            ? 0
            : typeof e == `object`
              ? { ...e, alpha: 1 }
              : e,
        ),
      );
    },
  },
  Bn = { ...Ye, transform: Math.round },
  Vn = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    inset: V,
    insetBlock: V,
    insetBlockStart: V,
    insetBlockEnd: V,
    insetInline: V,
    insetInlineStart: V,
    insetInlineEnd: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    paddingBlock: V,
    paddingBlockStart: V,
    paddingBlockEnd: V,
    paddingInline: V,
    paddingInlineStart: V,
    paddingInlineEnd: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    marginBlock: V,
    marginBlockStart: V,
    marginBlockEnd: V,
    marginInline: V,
    marginInlineStart: V,
    marginInlineEnd: V,
    fontSize: V,
    backgroundPositionX: V,
    backgroundPositionY: V,
    rotate: lt,
    pathRotation: lt,
    rotateX: lt,
    rotateY: lt,
    rotateZ: lt,
    scale: Ze,
    scaleX: Ze,
    scaleY: Ze,
    scaleZ: Ze,
    skew: lt,
    skewX: lt,
    skewY: lt,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Xe,
    originX: pt,
    originY: pt,
    originZ: V,
    zIndex: Bn,
    fillOpacity: Xe,
    strokeOpacity: Xe,
    numOctaves: Bn,
  },
  Hn = {
    ...Vn,
    color: H,
    backgroundColor: H,
    outlineColor: H,
    fill: H,
    stroke: H,
    borderColor: H,
    borderTopColor: H,
    borderRightColor: H,
    borderBottomColor: H,
    borderLeftColor: H,
    filter: Rn,
    WebkitFilter: Rn,
    mask: zn,
    WebkitMask: zn,
  },
  Un = (e) => Hn[e],
  Wn = new Set([Rn, zn]);
function Gn(e, t) {
  let n = Un(e);
  return (
    Wn.has(n) || (n = U),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function Kn(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
var qn = (e) => (e * 180) / Math.PI,
  Jn = (e) => Xn(qn(Math.atan2(e[1], e[0]))),
  Yn = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Jn,
    rotateZ: Jn,
    skewX: (e) => qn(Math.atan(e[1])),
    skewY: (e) => qn(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Xn = (e) => ((e %= 360), e < 0 && (e += 360), e),
  Zn = Jn,
  Qn = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  $n = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  er = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Qn,
    scaleY: $n,
    scale: (e) => (Qn(e) + $n(e)) / 2,
    rotateX: (e) => Xn(qn(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Xn(qn(Math.atan2(-e[2], e[0]))),
    rotateZ: Zn,
    rotate: Zn,
    skewX: (e) => qn(Math.atan(e[4])),
    skewY: (e) => qn(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function tr(e) {
  return +!!e.includes(`scale`);
}
function nr(e, t) {
  if (!e || e === `none`) return tr(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = er), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Yn), (i = t));
  }
  if (!i) return tr(t);
  let a = r[t],
    o = i[1].split(`,`).map(ir);
  return typeof a == `function` ? a(o) : o[a];
}
var rr = (e, t) => {
  let { transform: n = `none` } = getComputedStyle(e);
  return nr(n, t);
};
function ir(e) {
  return parseFloat(e.trim());
}
var ar = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  or = new Set([...ar, `pathRotation`]),
  sr = (e) => e === Ye || e === V,
  cr = new Set([`x`, `y`, `z`]),
  lr = ar.filter((e) => !cr.has(e));
function ur(e) {
  let t = [];
  return (
    lr.forEach((n) => {
      let r = e.getValue(n);
      if (r !== void 0) {
        let e = r.get(),
          i = +!!n.startsWith(`scale`);
        if (e === i) return;
        (t.push([n, e]), r.set(i));
      }
    }),
    t
  );
}
var dr = new Set([`bottom`, `right`]);
function fr(e, t, n, r, i, a) {
  let o = parseFloat(e);
  if (!isNaN(o)) return o;
  let { min: s, max: c } = t()[n],
    l = c - s;
  return a === `border-box` ? l : l - parseFloat(r) - parseFloat(i);
}
var pr = {
  width: (
    { width: e, paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r },
    i,
  ) => fr(e, i, `x`, t, n, r),
  height: (
    { height: e, paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r },
    i,
  ) => fr(e, i, `y`, t, n, r),
  top: ({ top: e }) => parseFloat(e),
  left: ({ left: e }) => parseFloat(e),
  bottom: ({ top: e }, t) => {
    let { y: n } = t();
    return parseFloat(e) + (n.max - n.min);
  },
  right: ({ left: e }, t) => {
    let { x: n } = t();
    return parseFloat(e) + (n.max - n.min);
  },
  x: ({ transform: e }) => nr(e, `x`),
  y: ({ transform: e }) => nr(e, `y`),
};
((pr.translateX = pr.x), (pr.translateY = pr.y));
var mr = new Set(),
  hr = !1,
  gr = !1,
  _r = !1;
function vr() {
  if (gr) {
    let e = [],
      t = new Set(),
      n = new Set();
    mr.forEach((r) => {
      r.needsMeasurement &&
        (e.push(r), t.add(r.element), dr.has(r.name) && n.add(r.element));
    });
    let r = new Map();
    (n.forEach((e) => {
      let t = ur(e);
      t.length && (r.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = r.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((gr = !1), (hr = !1), mr.forEach((e) => e.complete(_r)), mr.clear());
}
function yr() {
  mr.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (gr = !0));
  });
}
function br() {
  ((_r = !0), yr(), vr(), (_r = !1));
}
function xr(e, t, n) {
  if (typeof e == `string`) {
    if (se(e) || M(e)) return parseFloat(e);
    if (!U.test(e) && U.test(n)) return Gn(t, n);
  }
  return e ?? void 0;
}
var Sr = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.state = `pending`),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.state = `scheduled`),
        this.isAsync
          ? (mr.add(this),
            hr || ((hr = !0), R.read(yr), R.resolveKeyframes(vr)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      if (e[0] === null) {
        let i = r?.get(),
          a = e[e.length - 1];
        if (i !== void 0) e[0] = i;
        else if (n && t) {
          let r = xr(n.readValue(t, a), t, a);
          r !== void 0 && (e[0] = r);
        }
        (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
      }
      Kn(e);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e = !1) {
      ((this.state = `complete`),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
        mr.delete(this));
    }
    cancel() {
      this.state === `scheduled` && (mr.delete(this), (this.state = `pending`));
    }
    resume() {
      this.state === `pending` && this.scheduleResolve();
    }
  },
  Cr = (e) => e.startsWith(`--`);
function wr(e, t, n) {
  Cr(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
var Tr = {};
function Er(e, t) {
  let n = N(e);
  return () => Tr[t] ?? n();
}
var Dr = Er(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
  Or = Er(() => {
    try {
      document
        .createElement(`div`)
        .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  kr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ar = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: kr([0, 0.65, 0.55, 1]),
    circOut: kr([0.55, 0, 1, 0.45]),
    backIn: kr([0.31, 0.01, 0.66, -0.59]),
    backOut: kr([0.33, 1.53, 0.69, 0.99]),
  };
function jr(e, t) {
  if (e)
    return typeof e == `function`
      ? Or()
        ? $t(e, t)
        : `ease-out`
      : Ae(e)
        ? kr(e)
        : Array.isArray(e)
          ? e.map((e) => jr(e, t) || Ar.easeOut)
          : Ar[e];
}
function Mr(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0,
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = jr(s, i);
  Array.isArray(d) && (u.easing = d);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  return (l && (f.pseudoElement = l), e.animate(u, f));
}
function Nr(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function Pr({ type: e, ...t }) {
  return Nr(e) && Or()
    ? e.applyToOptions(t)
    : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
var Fr = class extends Mn {
    constructor(e) {
      if (
        (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !e)
      )
        return;
      let {
        element: t,
        name: n,
        keyframes: r,
        pseudoElement: i,
        allowFlatten: a = !1,
        finalKeyframe: o,
        onComplete: s,
      } = e;
      ((this.isPseudoElement = !!i),
        (this.allowFlatten = a),
        (this.options = e),
        e.type);
      let c = Pr(e);
      ((this.animation = Mr(t, n, r, c, i)),
        c.autoplay === !1 && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !i)) {
            let e = En(r, this.options, o, this.speed);
            (this.updateMotionValue && this.updateMotionValue(e),
              wr(t, n, e),
              this.animation.cancel());
          }
          (s?.(), this.notifyFinished());
        }),
        An(this, e, c));
    }
    play() {
      this.isStopped ||
        ((this.manualStartTime = null),
        this.animation.play(),
        this.state === `finished` && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      let { state: e } = this;
      e !== `idle` &&
        e !== `finished` &&
        (this.updateMotionValue
          ? this.updateMotionValue()
          : this.commitStyles(),
        this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let e = this.options?.element;
      !this.isPseudoElement &&
        e?.isConnected &&
        this.animation.commitStyles?.();
    }
    get duration() {
      let e = this.animation.effect?.getComputedTiming?.().duration || 0;
      return L(Number(e));
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + L(e);
    }
    get time() {
      return L(Number(this.animation.currentTime) || 0);
    }
    set time(e) {
      let t = this.finishedTime !== null;
      ((this.manualStartTime = null),
        (this.finishedTime = null),
        (this.animation.currentTime = I(e)),
        t && this.animation.pause());
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e) {
      (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : `finished`;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(e) {
      this.manualStartTime = this.animation.startTime = e;
    }
    attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
      return (
        this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: `linear` }),
        (this.animation.onfinish = null),
        e && Dr()
          ? ((this.animation.timeline = e),
            t && (this.animation.rangeStart = t),
            n && (this.animation.rangeEnd = n),
            P)
          : r(this)
      );
    }
  },
  Ir = { anticipate: Se, backInOut: xe, circInOut: Te };
function Lr(e) {
  return e in Ir;
}
function Rr(e) {
  typeof e.ease == `string` && Lr(e.ease) && (e.ease = Ir[e.ease]);
}
var zr = 10,
  Br = class extends Fr {
    constructor(e) {
      (Rr(e),
        On(e),
        super(e),
        e.startTime !== void 0 &&
          e.autoplay !== !1 &&
          (this.startTime = e.startTime),
        (this.options = e));
    }
    updateMotionValue(e) {
      let {
        motionValue: t,
        onUpdate: n,
        onComplete: r,
        element: i,
        ...a
      } = this.options;
      if (!t) return;
      if (e !== void 0) {
        t.set(e);
        return;
      }
      let o = new Pn({ ...a, autoplay: !1 }),
        s = Math.max(zr, B.now() - this.startTime),
        c = A(0, zr, s - zr),
        l = o.sample(s).value,
        { name: u } = this.options;
      (i && u && wr(i, u, l),
        t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
        o.stop());
    }
  },
  Vr = (e, t) =>
    t !== `zIndex` &&
    !!(
      typeof e == `number` ||
      Array.isArray(e) ||
      (typeof e == `string` &&
        (U.test(e) || e === `0`) &&
        !e.startsWith(`url(`))
    );
function Hr(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Ur(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Vr(i, t),
    s = Vr(a, t);
  return !o || !s
    ? (o !== s && `${t}${i}${a}${o ? a : i}`, !1)
    : Hr(e) || ((n === `spring` || Nr(n)) && r);
}
function Wr(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
var Gr = new Set([
    `opacity`,
    `clipPath`,
    `filter`,
    `transform`,
    `backgroundColor`,
  ]),
  Kr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function qr(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == `string` && Kr.test(e[t])) return !0;
  return !1;
}
var Jr = new Set([
    `color`,
    `backgroundColor`,
    `outlineColor`,
    `fill`,
    `stroke`,
    `borderColor`,
    `borderTopColor`,
    `borderRightColor`,
    `borderBottomColor`,
    `borderLeftColor`,
  ]),
  Yr = N(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function Xr(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
    keyframes: s,
  } = e;
  if (!n || !(Gr.has(n) || Jr.has(n))) return !1;
  let c = t?.owner?.current;
  if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
  let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    Yr() &&
    (Gr.has(n) || (Jr.has(n) && qr(s))) &&
    (n !== `transform` || !u) &&
    !l &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
var Zr = 40,
  Qr = class extends Mn {
    constructor(e) {
      (super(),
        (this.stop = () => {
          (this._animation && (this._animation.stop(), this.stopTimeline?.()),
            this.keyframeResolver?.cancel());
        }),
        (this.createdAt = B.now()));
      let { keyframes: t, name: n, motionValue: r, element: i } = e,
        a = e;
      ((a.autoplay ??= !0),
        (a.delay ??= 0),
        (a.type ??= `keyframes`),
        (a.repeat ??= 0),
        (a.repeatDelay ??= 0),
        (a.repeatType ??= `loop`));
      let o = i?.KeyframeResolver || Sr;
      ((this.keyframeResolver = new o(
        t,
        (e, t, n) => this.onKeyframesResolved(e, t, a, !n),
        n,
        r,
        i,
      )),
        this.keyframeResolver?.scheduleResolve());
    }
    onKeyframesResolved(e, t, n, r) {
      this.keyframeResolver = void 0;
      let {
        name: i,
        type: a,
        velocity: o,
        delay: s,
        isHandoff: c,
        onUpdate: l,
      } = n;
      this.resolvedAt = B.now();
      let u = !0;
      Ur(e, i, a, o) ||
        ((u = !1),
        (j.instantAnimations || !s) && l?.(En(e, n, t)),
        (e[0] = e[e.length - 1]),
        Wr(n),
        (n.repeat = 0));
      let d = r
          ? this.resolvedAt && this.resolvedAt - this.createdAt > Zr
            ? this.resolvedAt
            : this.createdAt
          : void 0,
        { onComplete: f } = n;
      ((n.startTime ??= d),
        (n.finalKeyframe = t),
        (n.keyframes = e),
        (n.onComplete = () => {
          (f?.(), this.notifyFinished());
        }));
      let p = u && !c && Xr(n),
        m;
      if (p) {
        n.element = n.motionValue?.owner?.current;
        try {
          m = new Br(n);
        } catch {
          m = new Pn(n);
        }
      } else m = new Pn(n);
      ((this.pendingTimeline &&=
        ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)), void 0)),
        (this._animation = m));
    }
    get finished() {
      return this._animation ? this._animation.finished : super.finished;
    }
    then(e, t) {
      return this.finished.finally(e).then(() => {});
    }
    get animation() {
      return (
        this._animation || (this.keyframeResolver?.resume(), br()),
        this._animation
      );
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e) {
      this.animation.time = e;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e) {
      this.animation.speed = e;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(e))
          : (this.pendingTimeline = e),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      (this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel());
    }
  };
function $r(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
var ei = 30,
  ti = (e) => !isNaN(parseFloat(e)),
  ni = { current: void 0 },
  ri = class {
    constructor(e, t = {}) {
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e) => {
          let t = B.now();
          if (
            (this.updatedAt !== t && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              (this.notifyChange(), this.dependents))
          )
            for (let e of this.dependents) e.dirty();
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = B.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = ti(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      var n;
      return e === `change`
        ? this.onChangeSubscribe(t)
        : ((n = this.events)[e] || (n[e] = new ue())).add(t);
    }
    onChangeSubscribe(e) {
      let { events: t } = this;
      return (
        !t.change && !this.changeSubscriber
          ? (this.changeSubscriber = e)
          : (t.change ||
              ((t.change = new ue()),
              t.change.add(this.changeSubscriber),
              (this.changeSubscriber = void 0)),
            t.change.add(e)),
        () => {
          (this.changeSubscriber === e
            ? (this.changeSubscriber = void 0)
            : t.change?.remove(e),
            this.stopIfUnobserved());
        }
      );
    }
    stopIfUnobserved() {
      R.read(() => {
        !this.changeSubscriber && !this.events.change?.getSize() && this.stop();
      });
    }
    clearListeners() {
      this.changeSubscriber = void 0;
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e) {
      this.passiveEffect
        ? this.passiveEffect(e, this.updateAndNotify)
        : this.updateAndNotify(e);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      this.notifyChange();
    }
    notifyChange() {
      let { current: e, changeSubscriber: t } = this;
      t ? t(e) : this.events.change?.notify(e);
    }
    addDependent(e) {
      ((this.dependents ||= new Set()), this.dependents.add(e));
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      return (ni.current && ni.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = B.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > ei
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, ei);
      return de(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          this.hasAnimated = !0;
          let n = !1,
            r;
          ((r = e(() => {
            ((n = !0),
              this.events.animationComplete?.notify(),
              this.animation === r && this.clearAnimation(),
              t());
          })),
            n || (this.animation = r),
            this.events.animationStart?.notify());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      this.animation = void 0;
    }
    destroy() {
      (this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function ii(e, t) {
  return new ri(e, t);
}
function ai(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function oi(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : ai(n, e);
}
var si = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  ci = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  li = { type: `keyframes`, duration: 0.8 },
  ui = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  di = (e, { keyframes: t }) =>
    t.length > 2
      ? li
      : or.has(e)
        ? e.startsWith(`scale`)
          ? ci(t[1])
          : si
        : ui,
  fi = new Set([
    `when`,
    `delay`,
    `delayChildren`,
    `staggerChildren`,
    `staggerDirection`,
    `repeat`,
    `repeatType`,
    `repeatDelay`,
    `from`,
    `elapsed`,
  ]);
function pi(e) {
  for (let t in e) if (!fi.has(t)) return !0;
  return !1;
}
var mi =
    (e, t, n, r = {}, i, a) =>
    (o) => {
      let s = oi(r, e) || {},
        c = s.delay || r.delay || 0,
        { elapsed: l = 0 } = r;
      l -= I(c);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: `easeOut`,
        velocity: t.getVelocity(),
        ...s,
        delay: -l,
        onUpdate: (e) => {
          (t.set(e), s.onUpdate && s.onUpdate(e));
        },
        onComplete: () => {
          (o(), s.onComplete && s.onComplete());
        },
        name: e,
        motionValue: t,
        element: a ? void 0 : i,
      };
      (pi(s) || Object.assign(u, di(e, u)),
        (u.duration &&= I(u.duration)),
        (u.repeatDelay &&= I(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from));
      let d = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          (Wr(u), u.delay === 0 && (d = !0)),
        (j.instantAnimations ||
          j.skipAnimations ||
          i?.shouldSkipAnimations ||
          s.skipAnimations) &&
          ((d = !0), Wr(u), (u.delay = 0)),
        (u.allowFlatten = !s.type && !s.ease),
        d && !a && t.get() !== void 0)
      ) {
        let e = En(u.keyframes, s);
        if (e !== void 0) {
          R.update(() => {
            (u.onUpdate(e), u.onComplete());
          });
          return;
        }
      }
      return s.isSync ? new Pn(u) : new Qr(u);
    },
  hi = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function gi(e) {
  let t = hi.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function _i(e, t, n = 1) {
  `${e}`;
  let [r, i] = gi(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return se(e) ? parseFloat(e) : e;
  }
  return Ke(i) ? _i(i, t, n + 1) : i;
}
function vi(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function yi(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = vi(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = vi(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
function bi(e, t, n) {
  let r = e.getProps();
  return yi(r, t, n === void 0 ? r.custom : n, e);
}
var xi = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...ar]),
  Si = (e) => Array.isArray(e);
function Ci(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ii(n));
}
function wi(e) {
  return Si(e) ? e[e.length - 1] || 0 : e;
}
function Ti(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = bi(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) Ci(e, t, wi(i[t]));
}
var K = (e) => !!(e && e.getVelocity);
function Ei(e) {
  return !!(K(e) && e.add);
}
function Di(e, t) {
  let n = e.getValue(`willChange`);
  if (Ei(n)) return n.add(t);
  if (!n && j.WillChange) {
    let n = new j.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function Oi(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var ki = `data-` + Oi(`framerAppearId`);
function Ai(e) {
  return e.props[ki];
}
var ji = typeof window < `u`;
function Mi({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Ni(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...s } = t,
    c = e.getDefaultTransition();
  a = a ? ai(a, c) : c;
  let l = a?.reduceMotion,
    u = a?.skipAnimations;
  r && (a = r);
  let d = [],
    f = i && e.animationState && e.animationState.getState()[i],
    p = a?.path;
  p && p.animateVisualElement(e, s, a, n, d);
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (f && Mi(f, t))) continue;
    let o = { delay: n, ...oi(a || {}, t) };
    u && (o.skipAnimations = !0);
    let c = r.get();
    if (
      c !== void 0 &&
      !r.isAnimating() &&
      !Array.isArray(i) &&
      i === c &&
      !o.velocity
    ) {
      R.update(() => r.set(i));
      continue;
    }
    let p = !1;
    if (ji && window.MotionHandoffAnimation) {
      let n = Ai(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, R);
        e !== null && ((o.startTime = e), (p = !0));
      }
    }
    Di(e, t);
    let m = l ?? e.shouldReduceMotion;
    r.start(mi(t, r, i, m && xi.has(t) ? { type: !1 } : o, e, p));
    let h = r.animation;
    h && d.push(h);
  }
  if (o) {
    let t = () =>
      R.update(() => {
        o && Ti(e, o);
      });
    d.length ? Promise.all(d).then(t) : t();
  }
  return d;
}
function Pi(e, t, n = {}) {
  let r = bi(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(Ni(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = i;
            return Fi(e, t, r, a, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  }
  return Promise.all([a(), o(n.delay)]);
}
function Fi(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  let s = [];
  for (let c of e.variantChildren)
    (c.notify(`AnimationStart`, t),
      s.push(
        Pi(c, t, {
          ...o,
          delay:
            n +
            (typeof r == `function` ? 0 : r) +
            $r(e.variantChildren, c, r, i, a),
        }).then(() => c.notify(`AnimationComplete`, t)),
      ));
  return Promise.all(s);
}
function Ii(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => Pi(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = Pi(e, t, n);
  else {
    let i = typeof t == `function` ? bi(e, t, n.custom) : t;
    r = Promise.all(Ni(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var Li = { test: (e) => e === `auto`, parse: (e) => e },
  Ri = (e) => (t) => t.test(e),
  zi = [Ye, V, ut, lt, ft, dt, Li],
  Bi = (e) => zi.find(Ri(e));
function Vi(e) {
  return typeof e == `number`
    ? e === 0
    : e === null || e === `none` || e === `0` || M(e);
}
var Hi = new Set([`auto`, `none`, `0`]);
function Ui(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !Hi.has(t) && Tt(t) && (i = e[r]), r++);
  }
  if (i && n) for (let r of t) e[r] !== i && (e[r] = Gn(n, i));
}
var Wi = class extends Sr {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), Ke(r))) {
          let i = _i(r, t.current);
          (i !== void 0 && (e[n] = i),
            n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !xi.has(n) || e.length !== 2)) return;
      let [r, i] = e;
      if (typeof r == `number` && typeof i == `number`) return;
      let a = Bi(r),
        o = Bi(i);
      if (Je(r) !== Je(i) && pr[n]) {
        this.needsMeasurement = !0;
        return;
      }
      if (a !== o)
        if (sr(a) && sr(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else pr[n] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++)
        (e[t] === null || Vi(e[t])) && n.push(t);
      n.length && Ui(e, n, t);
    }
    measure() {
      let { element: e, name: t } = this;
      return pr[t](window.getComputedStyle(e.current), () =>
        e.measureViewportBox(),
      );
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = this.measure()),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && this.motionValue?.jump(r, !1);
    }
    measureEndState() {
      let { element: e, unresolvedKeyframes: t } = this;
      if (!e || !e.current) return;
      this.motionValue?.jump(this.measuredOrigin, !1);
      let n = t.length - 1,
        r = t[n];
      ((t[n] = this.measure()),
        r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  Gi = [
    `borderTopLeftRadius`,
    `borderTopRightRadius`,
    `borderBottomRightRadius`,
    `borderBottomLeftRadius`,
  ];
function Ki(e) {
  return ce(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
function qi(e) {
  return ce(e) && `ownerSVGElement` in e;
}
var Ji = (e, t) => (t && typeof e == `number` ? t.transform(e) : e);
function Yi(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
var Xi = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  Zi = ar.length;
function Qi(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < Zi; a++) {
    let o = ar[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = Ji(s, Vn[o]);
      if (!c) {
        i = !1;
        let t = Xi[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return (
    a && ((i = !1), (r += `rotate(${Ji(a, Vn.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? `` : r)) : i && (r = `none`),
    r
  );
}
function $i(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (or.has(e)) {
      o = !0;
      continue;
    }
    if (We(e)) {
      i[e] = n;
      continue;
    }
    {
      let t = Ji(n, Vn[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Qi(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
var ea = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  ta = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function na(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? ea : ta;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
var ra = [
  `transform`,
  `opacity`,
  `offsetDistance`,
  `offsetPath`,
  `offsetRotate`,
  `offsetAnchor`,
];
function ia(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: o = 0,
    ...s
  },
  c,
  l,
  u,
) {
  if (($i(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  for (let e of ra) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  ((f.transform || d.transformOrigin) &&
    ((f.transformOrigin = d.transformOrigin ?? `50% 50%`),
    delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = u?.transformBox ?? `fill-box`), delete d.transformBox),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && na(d, i, a, o, !1));
}
function aa({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function oa({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function sa(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ca(e) {
  return e === void 0 || e === 1;
}
function la({ scale: e, scaleX: t, scaleY: n }) {
  return !ca(e) || !ca(t) || !ca(n);
}
function ua(e) {
  return (
    la(e) ||
    da(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function da(e) {
  return fa(e.x) || fa(e.y);
}
function fa(e) {
  return e && e !== `0%`;
}
function pa(e, t, n) {
  return n + t * (e - n);
}
function ma(e, t, n, r, i) {
  return (i !== void 0 && (e = pa(e, i, r)), pa(e, n, r) + t);
}
function ha(e, t = 0, n = 1, r, i) {
  ((e.min = ma(e.min, t, n, r, i)), (e.max = ma(e.max, t, n, r, i)));
}
function ga(e, { x: t, y: n }) {
  (ha(e.x, t.translate, t.scale, t.originPoint),
    ha(e.y, n.translate, n.scale, n.originPoint));
}
var _a = 0.999999999999,
  va = 1.0000000000001;
function ya(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        (ba(e.x, -a.scroll.offset.x), ba(e.y, -a.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), ga(e, o)),
      r && ua(a.latestValues) && Ca(e, a.latestValues, a.layout?.layoutBox));
  }
  (t.x < va && t.x > _a && (t.x = 1), t.y < va && t.y > _a && (t.y = 1));
}
function ba(e, t) {
  ((e.min += t), (e.max += t));
}
function xa(e, t, n, r, i = 0.5) {
  ha(e, t, n, W(e.min, e.max, i), r);
}
function Sa(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Ca(e, t, n) {
  let r = n ?? e;
  (xa(e.x, Sa(t.x, r.x), t.scaleX, t.scale, t.originX),
    xa(e.y, Sa(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function wa(e, t) {
  return aa(sa(e.getBoundingClientRect(), t));
}
function Ta(e, t, n) {
  let r = wa(e, n),
    { scroll: i } = t;
  return (i && (ba(r.x, i.offset.x), ba(r.y, i.offset.y)), r);
}
var { schedule: Ea, cancel: Da } = Le(queueMicrotask, !1),
  q = { x: !1, y: !1 };
function Oa() {
  return q.x || q.y;
}
function ka(e) {
  return e === `x` || e === `y`
    ? q[e]
      ? null
      : ((q[e] = !0),
        () => {
          q[e] = !1;
        })
    : q.x || q.y
      ? null
      : ((q.x = q.y = !0),
        () => {
          q.x = q.y = !1;
        });
}
function Aa(e, t) {
  let n = Yi(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function ja(e) {
  return !(e.pointerType === `touch` || Oa());
}
function Ma(e, t, n = {}) {
  let [r, i, a] = Aa(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, u);
        },
        s = (e) => {
          ((a &&= (a(e), void 0)), o());
        },
        c = (e) => {
          ((n = !1),
            window.removeEventListener(`pointerup`, c),
            window.removeEventListener(`pointercancel`, c),
            r && ((r = !1), s(e)));
        },
        l = () => {
          ((n = !0),
            window.addEventListener(`pointerup`, c, i),
            window.addEventListener(`pointercancel`, c, i));
        },
        u = (e) => {
          if (e.pointerType !== `touch`) {
            if (n) {
              r = !0;
              return;
            }
            s(e);
          }
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!ja(n)) return;
          r = !1;
          let o = t(e, n);
          typeof o == `function` &&
            ((a = o), e.addEventListener(`pointerleave`, u, i));
        },
        i,
      ),
        e.addEventListener(`pointerdown`, l, i));
    }),
    a
  );
}
var Na = (e, t) => (t ? e === t || Na(e, t.parentElement) : !1),
  Pa = (e) =>
    e.pointerType === `mouse`
      ? typeof e.button != `number` || e.button <= 0
      : e.isPrimary !== !1,
  Fa = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function Ia(e) {
  return Fa.has(e.tagName) || e.isContentEditable === !0;
}
var La = new Set([`INPUT`, `SELECT`, `TEXTAREA`]);
function Ra(e) {
  return La.has(e.tagName) || e.isContentEditable === !0;
}
var za = new WeakSet();
function Ba(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function Va(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }),
  );
}
var Ha = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = Ba(() => {
    if (za.has(n)) return;
    Va(n, `down`);
    let e = Ba(() => {
      Va(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t),
      n.addEventListener(`blur`, () => Va(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function Ua(e) {
  return Pa(e) && !Oa();
}
var Wa = new WeakSet();
function Ga(e, t, n = {}) {
  let [r, i, a] = Aa(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!Ua(e) || Wa.has(e)) return;
      (za.add(r), n.stopPropagation && Wa.add(e));
      let a = t(r, e),
        o = { ...i, capture: !0 },
        s = (e, t) => {
          (window.removeEventListener(`pointerup`, c, o),
            window.removeEventListener(`pointercancel`, l, o),
            za.has(r) && za.delete(r),
            Ua(e) && typeof a == `function` && a(e, { success: t }));
        },
        c = (e) => {
          s(
            e,
            r === window ||
              r === document ||
              n.useGlobalTarget ||
              Na(r, e.target),
          );
        },
        l = (e) => {
          s(e, !1);
        };
      (window.addEventListener(`pointerup`, c, o),
        window.addEventListener(`pointercancel`, l, o));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        Ki(e) &&
          (e.addEventListener(`focus`, (e) => Ha(e, i)),
          !Ia(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
var Ka = new WeakMap(),
  qa,
  Ja = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + `Size`]
      : qi(r) && `getBBox` in r
        ? r.getBBox()[t]
        : r[n],
  Ya = Ja(`inline`, `width`, `offsetWidth`),
  Xa = Ja(`block`, `height`, `offsetHeight`);
function Za({ target: e, borderBoxSize: t }) {
  Ka.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return Ya(e, t);
      },
      get height() {
        return Xa(e, t);
      },
    });
  });
}
function Qa(e) {
  e.forEach(Za);
}
function $a() {
  typeof ResizeObserver > `u` || (qa = new ResizeObserver(Qa));
}
function eo(e, t) {
  qa || $a();
  let n = Yi(e);
  return (
    n.forEach((e) => {
      let n = Ka.get(e);
      (n || ((n = new Set()), Ka.set(e, n)), n.add(t), qa?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Ka.get(e);
        (n?.delete(t), n?.size || qa?.unobserve(e));
      });
    }
  );
}
var to = new Set(),
  no;
function ro() {
  ((no = () => {
    let e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    to.forEach((t) => t(e));
  }),
    window.addEventListener(`resize`, no));
}
function io(e) {
  return (
    to.add(e),
    no || ro(),
    () => {
      (to.delete(e),
        !to.size &&
          typeof no == `function` &&
          (window.removeEventListener(`resize`, no), (no = void 0)));
    }
  );
}
function ao(e, t) {
  return typeof e == `function` ? io(e) : eo(e, t);
}
var oo = { value: null, addProjectionMetrics: null };
function so(e) {
  return qi(e) && e.tagName === `svg`;
}
var co = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  lo = () => ({ x: co(), y: co() }),
  uo = () => ({ min: 0, max: 0 }),
  J = () => ({ x: uo(), y: uo() }),
  fo = new WeakMap();
function po(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function mo(e) {
  return typeof e == `string` || Array.isArray(e);
}
var ho = [
    `animate`,
    `whileInView`,
    `whileFocus`,
    `whileHover`,
    `whileTap`,
    `whileDrag`,
    `exit`,
  ],
  go = [`initial`, ...ho];
function _o(e) {
  if (po(e.animate)) return !0;
  for (let t = 0; t < go.length; t++) if (mo(e[go[t]])) return !0;
  return !1;
}
function vo(e) {
  return !!(_o(e) || e.variants);
}
function yo(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (K(i)) e.addValue(r, i);
    else if (K(a)) e.addValue(r, ii(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, ii(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var bo = { current: null },
  xo = { current: !1 },
  So = typeof window < `u`;
function Co() {
  if (((xo.current = !0), So))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (bo.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else bo.current = !1;
}
var wo = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  To = {};
function Eo(e) {
  To = e;
}
function Do() {
  return To;
}
var Oo = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        skipAnimations: i,
        blockInitialAnimation: a,
        visualState: o,
      },
      s = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.shouldSkipAnimations = !1),
        (this.values = new Map()),
        (this.KeyframeResolver = Sr),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.hasBeenMounted = !1),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = B.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), R.render(this.render, !1, !0));
        }));
      let { latestValues: c, renderState: l } = o;
      ((this.latestValues = c),
        (this.baseTarget = { ...c }),
        (this.initialValues = t.initial ? { ...c } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.skipAnimationsConfig = i),
        (this.options = s),
        (this.blockInitialAnimation = !!a),
        (this.isControllingVariants = _o(t)),
        (this.isVariantNode = vo(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this,
      );
      for (let e in d) {
        let t = d[e];
        c[e] !== void 0 && K(t) && t.set(c[e]);
      }
    }
    mount(e) {
      if (this.hasBeenMounted)
        for (let e in this.initialValues)
          (this.values.get(e)?.jump(this.initialValues[e]),
            (this.latestValues[e] = this.initialValues[e]));
      ((this.current = e),
        fo.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        this.reducedMotionConfig === `never`
          ? (this.shouldReduceMotion = !1)
          : this.reducedMotionConfig === `always`
            ? (this.shouldReduceMotion = !0)
            : (xo.current || Co(), (this.shouldReduceMotion = bo.current)),
        (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext),
        (this.hasBeenMounted = !0));
    }
    unmount() {
      (this.projection && this.projection.unmount(),
        Re(this.notifyUpdate),
        Re(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    addChild(e) {
      (this.children.add(e),
        (this.enteringChildren ??= new Set()),
        this.enteringChildren.add(e));
    }
    removeChild(e) {
      (this.children.delete(e),
        this.enteringChildren && this.enteringChildren.delete(e));
    }
    bindToMotionValue(e, t) {
      if (
        (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
        t.accelerate && Gr.has(e) && this.current instanceof HTMLElement)
      ) {
        let {
            factory: n,
            keyframes: r,
            times: i,
            ease: a,
            duration: o,
          } = t.accelerate,
          s = new Fr({
            element: this.current,
            name: e,
            keyframes: r,
            times: i,
            ease: a,
            duration: I(o),
          }),
          c = n(s);
        this.valueSubscriptions.set(e, () => {
          (c(), s.cancel());
        });
        return;
      }
      let n = or.has(e);
      n && this.onBindTransform && this.onBindTransform();
      let r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && R.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        }),
        i;
      (typeof window < `u` &&
        window.MotionCheckAppearSync &&
        (i = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i && i());
        }));
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in To) {
        let t = To[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : J();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < wo.length; t++) {
        let n = wo[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = yo(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = ii(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && (se(n) || M(n))
            ? (n = parseFloat(n))
            : typeof n != `number` && !U.test(n) && U.test(t) && (n = Gn(e, t)),
          this.setBaseTarget(e, K(n) ? n.get() : n)),
        K(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = yi(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !K(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new ue()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
    scheduleRenderMicrotask() {
      Ea.render(this.render);
    }
  },
  ko = class extends Oo {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = Wi));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      let n = e.style;
      return n ? n[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      K(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  },
  Ao = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  };
function jo(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
function Mo(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var No = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if (V.test(e)) e = parseFloat(e);
        else return e;
      return `${Mo(e, t.target.x)}% ${Mo(e, t.target.y)}%`;
    },
  },
  Po = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = U.parse(e);
      if (i.length > 5) return r;
      let a = U.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = W(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  Fo = {
    borderRadius: { ...No, applyTo: [...Gi] },
    borderTopLeftRadius: No,
    borderTopRightRadius: No,
    borderBottomLeftRadius: No,
    borderBottomRightRadius: No,
    boxShadow: Po,
  };
function Io(e, { layout: t, layoutId: n }) {
  return (
    or.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!Fo[e] || e === `opacity`))
  );
}
function Lo(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (K(r[t]) ||
      (i && K(i[t])) ||
      Io(t, e) ||
      n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function Ro(e) {
  return window.getComputedStyle(e);
}
var zo = class extends ko {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = jo));
    }
    mount(e) {
      (e.style, super.mount(e));
    }
    readValueFromInstance(e, t) {
      if (or.has(t)) return this.projection?.isProjecting ? tr(t) : rr(e, t);
      {
        let n = Ro(e),
          r = (We(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return wa(e, t);
    }
    build(e, t, n) {
      $i(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Lo(e, t, n);
    }
  },
  Bo = new Set([
    `baseFrequency`,
    `diffuseConstant`,
    `kernelMatrix`,
    `kernelUnitLength`,
    `keySplines`,
    `keyTimes`,
    `limitingConeAngle`,
    `markerHeight`,
    `markerWidth`,
    `numOctaves`,
    `targetX`,
    `targetY`,
    `surfaceScale`,
    `specularConstant`,
    `specularExponent`,
    `stdDeviation`,
    `tableValues`,
    `viewBox`,
    `gradientTransform`,
    `pathLength`,
    `startOffset`,
    `textLength`,
    `lengthAdjust`,
  ]),
  Vo = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function Ho(e, t, n, r) {
  jo(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(Bo.has(n) ? n : Oi(n), t.attrs[n]);
}
function Uo(e, t, n) {
  let r = Lo(e, t, n);
  for (let n in e)
    if (K(e[n]) || K(t[n])) {
      let t =
        ar.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
var Wo = class extends ko {
    constructor() {
      (super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = J));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (or.has(t)) {
        let e = Un(t);
        return (e && e.default) || 0;
      }
      if (ra.includes(t)) {
        let n = getComputedStyle(e)[t];
        if (typeof n == `string` && n) return n.trim();
      }
      return ((t = Bo.has(t) ? t : Oi(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Uo(e, t, n);
    }
    build(e, t, n) {
      ia(e, t, this.isSVGTag, n.transformTemplate, n.style);
    }
    renderInstance(e, t, n, r) {
      Ho(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = Vo(e.tagName)), super.mount(e));
    }
  },
  Go = go.length;
function Ko(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && Ko(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < Go; n++) {
    let r = go[n],
      i = e.props[r];
    (mo(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function qo(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var Jo = [...ho].reverse(),
  Yo = ho.length;
function Xo(e) {
  return (t) =>
    Promise.all(t.map(({ animation: t, options: n }) => Ii(e, t, n)));
}
function Zo(e) {
  let t = Xo(e),
    n = es(),
    r = !0,
    i = !1,
    a = (t) => (n, r) => {
      let i = bi(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function o(n) {
    t = n(e);
  }
  function s(o) {
    let { props: s } = e,
      c = Ko(e.parent) || {},
      l = [],
      u = new Set(),
      d = {},
      f = 1 / 0;
    for (let t = 0; t < Yo; t++) {
      let p = Jo[t],
        m = n[p],
        h = s[p] === void 0 ? c[p] : s[p],
        g = mo(h),
        _ = p === o ? m.isActive : null;
      _ === !1 && (f = t);
      let v = h === c[p] && h !== s[p] && g;
      if (
        (v && (r || i) && e.manuallyAnimateOnMount && (v = !1),
        (m.protectedKeys = { ...d }),
        (!m.isActive && _ === null) ||
          (!h && !m.prevProp) ||
          po(h) ||
          typeof h == `boolean`)
      )
        continue;
      if (p === `exit` && m.isActive && _ !== !0) {
        m.prevResolvedValues && (d = { ...d, ...m.prevResolvedValues });
        continue;
      }
      let y = Qo(m.prevProp, h),
        b = y || (p === o && m.isActive && !v && g) || (t > f && g),
        x = !1,
        S = Array.isArray(h) ? h : [h],
        ee = S.reduce(a(p), {});
      _ === !1 && (ee = {});
      let { prevResolvedValues: C = {} } = m,
        w = { ...C, ...ee },
        te = (t) => {
          ((b = !0),
            u.has(t) && ((x = !0), u.delete(t)),
            (m.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in w) {
        let t = ee[e],
          n = C[e];
        if (d.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = Si(t) && Si(n) ? !qo(t, n) || y : t !== n),
          r
            ? t == null
              ? u.add(e)
              : te(e)
            : t !== void 0 && u.has(e)
              ? te(e)
              : (m.protectedKeys[e] = !0));
      }
      ((m.prevProp = h),
        (m.prevResolvedValues = ee),
        m.isActive && (d = { ...d, ...ee }),
        (r || i) && e.blockInitialAnimation && (b = !1));
      let ne = v && y;
      b &&
        (!ne || x) &&
        l.push(
          ...S.map((t) => {
            let n = { type: p };
            if (
              typeof t == `string` &&
              (r || i) &&
              !ne &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              let { parent: r } = e,
                i = bi(r, t);
              if (r.enteringChildren && i) {
                let { delayChildren: t } = i.transition || {};
                n.delay = $r(r.enteringChildren, e, t);
              }
            }
            return { animation: t, options: n };
          }),
        );
    }
    if (u.size) {
      let t = {};
      if (typeof s.initial != `boolean`) {
        let n = bi(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
        n && n.transition && (t.transition = n.transition);
      }
      (u.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        l.push({ animation: t }));
    }
    let p = !!l.length;
    return (
      r &&
        (s.initial === !1 || s.initial === s.animate) &&
        !e.manuallyAnimateOnMount &&
        (p = !1),
      (r = !1),
      (i = !1),
      p ? t(l) : Promise.resolve()
    );
  }
  function c(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r));
    let i = s(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: s,
    setActive: c,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = es()), (i = !0));
    },
  };
}
function Qo(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !qo(t, e) : !1;
}
function $o(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function es() {
  return {
    animate: $o(!0),
    whileInView: $o(),
    whileHover: $o(),
    whileTap: $o(),
    whileDrag: $o(),
    whileFocus: $o(),
    exit: $o(),
  };
}
function ts(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function ns(e, t) {
  (ts(e.x, t.x), ts(e.y, t.y));
}
function rs(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
var is = 0.9999,
  as = 1.0001,
  os = -0.01,
  ss = 0.01;
function Y(e) {
  return e.max - e.min;
}
function cs(e, t, n) {
  return Math.abs(e - t) <= n;
}
function ls(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = W(t.min, t.max, e.origin)),
    (e.scale = Y(n) / Y(t)),
    (e.translate = W(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= is && e.scale <= as) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= os && e.translate <= ss) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function us(e, t, n, r) {
  (ls(e.x, t.x, n.x, r ? r.originX : void 0),
    ls(e.y, t.y, n.y, r ? r.originY : void 0));
}
function ds(e, t, n, r = 0) {
  ((e.min = (r ? W(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + Y(t)));
}
function fs(e, t, n, r) {
  (ds(e.x, t.x, n.x, r?.x), ds(e.y, t.y, n.y, r?.y));
}
function ps(e, t, n, r = 0) {
  let i = r ? W(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + Y(t)));
}
function ms(e, t, n, r) {
  (ps(e.x, t.x, n.x, r?.x), ps(e.y, t.y, n.y, r?.y));
}
function hs(e, t, n, r, i) {
  return (
    (e -= t),
    (e = pa(e, 1 / n, r)),
    i !== void 0 && (e = pa(e, 1 / i, r)),
    e
  );
}
function gs(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (ut.test(t) &&
      ((t = parseFloat(t)), (t = W(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = W(a.min, a.max, r);
  (e === a && (s -= t),
    (e.min = hs(e.min, t, n, s, i)),
    (e.max = hs(e.max, t, n, s, i)));
}
function _s(e, t, [n, r, i], a, o) {
  gs(e, t[n], t[r], t[i], t.scale, a, o);
}
var vs = [`x`, `scaleX`, `originX`],
  ys = [`y`, `scaleY`, `originY`];
function bs(e, t, n, r) {
  (_s(e.x, t, vs, n ? n.x : void 0, r ? r.x : void 0),
    _s(e.y, t, ys, n ? n.y : void 0, r ? r.y : void 0));
}
function xs(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ss(e) {
  return xs(e.x) && xs(e.y);
}
function Cs(e, t) {
  return e.min === t.min && e.max === t.max;
}
function ws(e, t) {
  return Cs(e.x, t.x) && Cs(e.y, t.y);
}
function Ts(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Es(e, t) {
  return Ts(e.x, t.x) && Ts(e.y, t.y);
}
function Ds(e) {
  return Y(e.x) / Y(e.y);
}
function Os(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function ks(e) {
  return [e(`x`), e(`y`)];
}
function As(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      pathRotation: i,
      rotateX: a,
      rotateY: o,
      skewX: s,
      skewY: c,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotate(${i}deg) `),
      a && (r += `rotateX(${a}deg) `),
      o && (r += `rotateY(${o}deg) `),
      s && (r += `skewX(${s}deg) `),
      c && (r += `skewY(${c}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var js = Gi.length,
  Ms = (e) => (typeof e == `string` ? parseFloat(e) : e),
  Ns = (e) => typeof e == `number` || V.test(e);
function Ps(e, t, n, r, i, a) {
  i
    ? ((e.opacity = W(0, n.opacity ?? 1, Is(r))),
      (e.opacityExit = W(t.opacity ?? 1, 0, Ls(r))))
    : a && (e.opacity = W(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < js; i++) {
    let a = Gi[i],
      o = Fs(t, a),
      s = Fs(n, a);
    (o !== void 0 || s !== void 0) &&
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || Ns(o) === Ns(s)
        ? ((e[a] = Math.max(W(Ms(o), Ms(s), r), 0)),
          (ut.test(s) || ut.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r));
}
function Fs(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var Is = Rs(0, 0.5, we),
  Ls = Rs(0.5, 0.95, P);
function Rs(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(F(e, t, r)));
}
function zs(e, t, n) {
  let r = K(e) ? e : ii(e);
  return (r.start(mi(``, r, t, n)), r.animation);
}
function Bs(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
var Vs = (e, t) => e.depth - t.depth,
  Hs = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (oe(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (k(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(Vs),
        (this.isDirty = !1),
        this.children.forEach(e));
    }
  };
function Us(e, t) {
  let n = B.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (Re(r), e(a - t));
    };
  return (R.setup(r, !0), () => Re(r));
}
function Ws(e) {
  return K(e) ? e.get() : e;
}
var Gs = class {
    constructor() {
      this.members = [];
    }
    add(e) {
      oe(this.members, e);
      for (let t = this.members.length - 1; t >= 0; t--) {
        let n = this.members[t];
        if (n === e || n === this.lead || n === this.prevLead) continue;
        let r = n.instance;
        (!r || r.isConnected === !1) &&
          !n.snapshot &&
          (k(this.members, n), n.unmount());
      }
      e.scheduleRender();
    }
    remove(e) {
      if (
        (k(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead)
      ) {
        let e = this.members[this.members.length - 1];
        e && this.promote(e);
      }
    }
    relegate(e) {
      for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
        let e = this.members[t];
        if (e.isPresent !== !1 && e.instance?.isConnected !== !1)
          return (this.promote(e), !0);
      }
      return !1;
    }
    promote(e, t) {
      let n = this.lead;
      if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
        (n.updateSnapshot(), e.scheduleRender());
        let { layoutDependency: r } = n.options,
          { layoutDependency: i } = e.options;
        ((r === void 0 || r !== i) &&
          ((e.resumeFrom = n),
          t && (n.preserveOpacity = !0),
          n.snapshot &&
            ((e.snapshot = n.snapshot),
            (e.snapshot.latestValues = n.animationValues || n.latestValues)),
          e.root?.isUpdating && (e.isLayoutDirty = !0)),
          e.options.crossfade === !1 && n.hide());
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        (e.options.onExitComplete?.(),
          e.resumingFrom?.options.onExitComplete?.());
      });
    }
    scheduleRender() {
      this.members.forEach((e) => e.instance && e.scheduleRender(!1));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  },
  Ks = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  qs = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
  Js = [``, `X`, `Y`, `Z`],
  Ys = 1e3,
  Xs = 0;
function Zs(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Qs(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = Ai(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, R, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Qs(r);
}
function $s({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = Xs++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            oo.value &&
              (qs.nodes =
                qs.calculatedTargetDeltas =
                qs.calculatedProjections =
                  0),
            this.nodes.forEach(nc),
            this.nodes.forEach(dc),
            this.nodes.forEach(fc),
            this.nodes.forEach(rc),
            oo.addProjectionMetrics && oo.addProjectionMetrics(qs));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Hs());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new ue()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      ((this.isSVG = qi(t) && !so(t)), (this.instance = t));
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        (R.read(() => {
          r = window.innerWidth;
        }),
          e(t, () => {
            let e = window.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = Us(i, 250)),
              Ks.hasAnimatedSinceResize &&
                ((Ks.hasAnimatedSinceResize = !1), this.nodes.forEach(uc)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeLayoutChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || yc,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  i.getProps(),
                c = !this.targetLayout || !Es(this.targetLayout, r),
                l = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = { ...oi(a, `layout`), onPlay: o, onComplete: s };
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l, t.path));
              } else
                (t || uc(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Re(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(pc),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Qs(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          (typeof t.latestValues.x == `string` ||
            typeof t.latestValues.y == `string`) &&
            (t.isLayoutDirty = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r
        ? r(this.latestValues, ``)
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(oc),
          this.nodes.forEach(ac));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(sc);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(cc),
            this.nodes.forEach(lc),
            this.nodes.forEach(ec),
            this.nodes.forEach(tc))
          : this.nodes.forEach(sc),
        this.clearAllSnapshots());
      let e = B.now();
      ((z.delta = A(0, 1e3 / 60, e - z.timestamp)),
        (z.timestamp = e),
        (z.isProcessing = !0),
        ze.update.process(z),
        ze.preRender.process(z),
        ze.render.process(z),
        (z.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ea.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(ic), this.sharedNodes.forEach(mc));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        R.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      R.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Y(this.snapshot.measuredBox.x) &&
          !Y(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected ||= J()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0,
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !Ss(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || ua(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        Cc(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return J();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Tc))) {
        let { scroll: e } = this.root;
        e && (ba(t.x, e.offset.x), ba(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = J();
      if ((ns(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && ns(t, e), ba(t.x, i.offset.x), ba(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1, n) {
      let r = n || J();
      ns(r, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        (!t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (ba(r.x, -n.scroll.offset.x), ba(r.y, -n.scroll.offset.y)),
          ua(n.latestValues) && Ca(r, n.latestValues, n.layout?.layoutBox));
      }
      return (
        ua(this.latestValues) &&
          Ca(r, this.latestValues, this.layout?.layoutBox),
        r
      );
    }
    removeTransform(e) {
      let t = J();
      ns(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!ua(n.latestValues)) continue;
        let r;
        (n.instance &&
          (la(n.latestValues) && n.updateSnapshot(),
          (r = J()),
          ns(r, n.measurePageBox())),
          bs(t, n.latestValues, n.snapshot?.layoutBox, r));
      }
      return (ua(this.latestValues) && bs(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 || e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== z.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (!(
        e ||
        (n && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = z.timestamp;
      let a = this.getClosestProjectingParent();
      (a &&
        this.linkedParentVersion !== a.layoutVersion &&
        !a.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && a && a.layout
            ? this.createRelativeTarget(
                a,
                this.layout.layoutBox,
                a.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = J()), (this.targetWithTransforms = J())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              fs(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : ns(this.target, this.layout.layoutBox),
                ga(this.target, this.targetDelta))
              : ns(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            a &&
            !!a.resumingFrom == !!this.resumingFrom &&
            !a.options.layoutScroll &&
            a.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(a, this.target, a.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          oo.value && qs.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        la(this.parent.latestValues) ||
        da(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      ((this.relativeParent = e),
        (this.linkedParentVersion = e.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = J()),
        (this.relativeTargetOrigin = J()),
        ms(
          this.relativeTargetOrigin,
          t,
          n,
          this.options.layoutAnchor || void 0,
        ),
        ns(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === z.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      ns(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (ya(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = J())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (rs(this.prevProjectionDelta.x, this.projectionDelta.x),
          rs(this.prevProjectionDelta.y, this.projectionDelta.y)),
        us(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !Os(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Os(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        oo.value && qs.calculatedProjections++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = lo()),
        (this.projectionDelta = lo()),
        (this.projectionDeltaWithTransform = lo()));
    }
    setAnimationOrigin(e, t = !1, n) {
      let r = this.snapshot,
        i = r ? r.latestValues : {},
        a = { ...this.latestValues },
        o = lo();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let s = J(),
        c =
          (r ? r.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        l = this.getStack(),
        u = !l || l.members.length <= 1,
        d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(vc));
      this.animationProgress = 0;
      let f,
        p = n?.interpolateProjection(e);
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3,
          r = p?.(n);
        (r
          ? ((o.x.translate = r.x),
            (o.x.scale = W(e.x.scale, 1, n)),
            (o.x.origin = e.x.origin),
            (o.x.originPoint = e.x.originPoint),
            (o.y.translate = r.y),
            (o.y.scale = W(e.y.scale, 1, n)),
            (o.y.origin = e.y.origin),
            (o.y.originPoint = e.y.originPoint))
          : (hc(o.x, e.x, n), hc(o.y, e.y, n)),
          this.setTargetDelta(o),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ms(
              s,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            _c(this.relativeTarget, this.relativeTargetOrigin, s, n),
            f && ws(this.relativeTarget, f) && (this.isProjectionDirty = !1),
            (f ||= J()),
            ns(f, this.relativeTarget)),
          c &&
            ((this.animationValues = a), Ps(a, i, this.latestValues, n, d, u)),
          r &&
            r.rotate !== void 0 &&
            ((this.animationValues ||= a),
            (this.animationValues.pathRotation = r.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        (this.pendingAnimation &&= (Re(this.pendingAnimation), void 0)),
        (this.pendingAnimation = R.update(() => {
          ((Ks.hasAnimatedSinceResize = !0),
            (this.motionValue ||= ii(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = zs(this.motionValue, [0, 1e3], {
              ...e,
              velocity: 0,
              isSync: !0,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            jn(this.currentAnimation, this),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Ys),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, layout: n, latestValues: r } = e,
        { target: i } = e;
      if (!(!t || !i || !n)) {
        if (
          this !== e &&
          this.layout &&
          n &&
          wc(this.options.animationType, this.layout.layoutBox, n.layoutBox)
        ) {
          i = this.target || J();
          let t = Y(this.layout.layoutBox.x);
          ((i.x.min = e.target.x.min), (i.x.max = i.x.min + t));
          let n = Y(this.layout.layoutBox.y);
          ((i.y.min = e.target.y.min), (i.y.max = i.y.min + n));
        }
        (ns(t, i),
          Ca(t, r),
          us(this.projectionDeltaWithTransform, this.layoutCorrected, t, r));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new Gs()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && Zs(`z`, e, r, this.animationValues);
      for (let t = 0; t < Js.length; t++)
        (Zs(`rotate${Js[t]}`, e, r, this.animationValues),
          Zs(`skew${Js[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = Ws(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity =
            this.latestValues.opacity === void 0
              ? 1
              : this.latestValues.opacity),
          (e.pointerEvents = Ws(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !ua(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = As(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        (e.opacity = r.animationValues
          ? r === this
            ? (i.opacity ?? this.latestValues.opacity ?? 1)
            : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit
          : r === this
            ? i.opacity === void 0
              ? ``
              : i.opacity
            : i.opacityExit === void 0
              ? 0
              : i.opacityExit));
      for (let t in Fo) {
        if (i[t] === void 0) continue;
        let { correct: n, applyTo: o, isCSSVariable: s } = Fo[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else
          s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c);
      }
      this.options.layoutId &&
        (e.pointerEvents = r === this ? Ws(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(ac),
        this.root.sharedNodes.clear());
    }
  };
}
function ec(e) {
  e.updateLayout();
}
function tc(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    if (i === `size`)
      ks((e) => {
        let r = a ? t.measuredBox[e] : t.layoutBox[e],
          i = Y(r);
        ((r.min = n[e].min), (r.max = r.min + i));
      });
    else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`;
      ts(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else
      wc(i, t.layoutBox, n) &&
        ks((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = Y(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = lo();
    us(o, n, t.layoutBox);
    let s = lo();
    a ? us(s, e.applyTransform(r, !0), t.measuredBox) : us(s, n, t.layoutBox);
    let c = !Ss(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = J();
          ms(s, t.layoutBox, i.layoutBox, o);
          let c = J();
          (ms(c, n, a.layoutBox, o),
            Es(s, c) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = c),
              (e.relativeTargetOrigin = s),
              (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function nc(e) {
  (oo.value && qs.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function rc(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function ic(e) {
  e.clearSnapshot();
}
function ac(e) {
  e.clearMeasurements();
}
function oc(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function sc(e) {
  e.isLayoutDirty = !1;
}
function cc(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function lc(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform());
}
function uc(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function dc(e) {
  e.resolveTargetDelta();
}
function fc(e) {
  e.calcProjection();
}
function pc(e) {
  e.resetSkewAndRotation();
}
function mc(e) {
  e.removeLeadSnapshot();
}
function hc(e, t, n) {
  ((e.translate = W(t.translate, 0, n)),
    (e.scale = W(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function gc(e, t, n, r) {
  ((e.min = W(t.min, n.min, r)), (e.max = W(t.max, n.max, r)));
}
function _c(e, t, n, r) {
  (gc(e.x, t.x, n.x, r), gc(e.y, t.y, n.y, r));
}
function vc(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var yc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  bc = (e) =>
    typeof navigator < `u` &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  xc = bc(`applewebkit/`) && !bc(`chrome/`) ? Math.round : P;
function Sc(e) {
  ((e.min = xc(e.min)), (e.max = xc(e.max)));
}
function Cc(e) {
  (Sc(e.x), Sc(e.y));
}
function wc(e, t, n) {
  return (
    e === `position` || (e === `preserve-aspect` && !cs(Ds(t), Ds(n), 0.2))
  );
}
function Tc(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var Ec = $s({
    attachResizeListener: (e, t) => Bs(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Dc = { current: void 0 },
  Oc = $s({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Dc.current) {
        let e = new Ec({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Dc.current = e));
      }
      return Dc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  kc = (0, T.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: `never`,
  });
function Ac(e = !0) {
  let t = (0, T.useContext)(O);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, T.useId)();
  (0, T.useEffect)(() => {
    if (e) return i(a);
  }, [e]);
  let o = (0, T.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var jc = (0, T.createContext)({ strict: !1 }),
  Mc = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  Nc = !1;
function Pc() {
  if (Nc) return;
  let e = {};
  for (let t in Mc) e[t] = { isEnabled: (e) => Mc[t].some((t) => !!e[t]) };
  (Eo(e), (Nc = !0));
}
function Fc() {
  return (Pc(), Do());
}
function Ic(e) {
  let t = Fc();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  Eo(t);
}
var Lc = (0, T.createContext)({});
function Rc(e, t) {
  if (_o(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || mo(t) ? t : void 0,
      animate: mo(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function zc(e) {
  let { initial: t, animate: n } = Rc(e, (0, T.useContext)(Lc));
  return (0, T.useMemo)(() => ({ initial: t, animate: n }), [Bc(t), Bc(n)]);
}
function Bc(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var Vc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Hc(e, t, n) {
  for (let r in t) !K(t[r]) && !Io(r, n) && (e[r] = t[r]);
}
function Uc({ transformTemplate: e }, t) {
  return (0, T.useMemo)(() => {
    let n = Vc();
    return ($i(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function Wc(e, t) {
  let n = e.style || {},
    r = {};
  return (Hc(r, n, e), Object.assign(r, Uc(e, t)), r);
}
function Gc(e, t) {
  let n = {},
    r = Wc(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
var Kc = () => ({ ...Vc(), attrs: {} });
function qc(e, t, n, r) {
  let i = (0, T.useMemo)(() => {
    let n = Kc();
    return (
      ia(n, t, Vo(r), e.transformTemplate, e.style),
      { ...n.attrs, style: { ...n.style } }
    );
  }, [t]);
  if (e.style) {
    let t = {};
    (Hc(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
var Jc = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function Yc(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    Jc.has(e)
  );
}
function Xc(e, t) {
  return e.startsWith(`on`) ? !Yc(e) : (t?.(e) ?? !Yc(e));
}
function Zc(e, t, n, r) {
  let i = {};
  for (let a in e)
    (a !== `values` || typeof e.values != `object`) &&
      (K(e[a]) ||
        ((Xc(a, r) ||
          (n === !0 && Yc(a)) ||
          (!t && !Yc(a)) ||
          (e.draggable && a.startsWith(`onDrag`))) &&
          (i[a] = e[a])));
  return i;
}
var Qc = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function $c(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!(Qc.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function el(e, t, n, { latestValues: r }, i, a = !1, o, s) {
  let c = ((o ?? $c(e)) ? qc : Gc)(t, r, i, e),
    l = Zc(t, typeof e == `string`, a, s),
    u = e === T.Fragment ? {} : { ...l, ...c, ref: n },
    { children: d } = t,
    f = (0, T.useMemo)(() => (K(d) ? d.get() : d), [d]);
  return (0, T.createElement)(e, { ...u, children: f });
}
function tl({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: nl(n, r, i, e), renderState: t() };
}
function nl(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = Ws(a[e]);
  let { initial: o, animate: s } = e,
    c = _o(e),
    l = vo(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !po(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = yi(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var rl = (e) => (t, n) => {
    let r = (0, T.useContext)(Lc),
      i = (0, T.useContext)(O),
      a = () => tl(e, t, r, i);
    return n ? a() : D(a);
  },
  il = rl({ scrapeMotionValuesFromProps: Lo, createRenderState: Vc }),
  al = rl({ scrapeMotionValuesFromProps: Uo, createRenderState: Kc }),
  ol = Symbol.for(`motionComponentSymbol`);
function sl(e, t, n) {
  let r = (0, T.useRef)(n);
  (0, T.useInsertionEffect)(() => {
    r.current = n;
  });
  let i = (0, T.useRef)(null);
  return (0, T.useCallback)(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let a = r.current;
      if (typeof a == `function`)
        if (n) {
          let e = a(n);
          typeof e == `function` && (i.current = e);
        } else i.current ? (i.current(), (i.current = null)) : a(n);
      else a && (a.current = n);
    },
    [t],
  );
}
var cl = (0, T.createContext)({});
function ll(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function ul(e, t, n, r, i, a) {
  let { visualElement: o } = (0, T.useContext)(Lc),
    s = (0, T.useContext)(jc),
    c = (0, T.useContext)(O),
    l = (0, T.useContext)(kc),
    u = l.reducedMotion,
    d = l.skipAnimations,
    f = (0, T.useRef)(null),
    p = (0, T.useRef)(!1);
  ((r ||= s.renderer),
    !f.current &&
      r &&
      ((f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
        skipAnimations: d,
        isSVG: a,
      })),
      p.current && f.current && (f.current.manuallyAnimateOnMount = !0)));
  let m = f.current,
    h = (0, T.useContext)(cl);
  m &&
    !m.projection &&
    i &&
    (m.type === `html` || m.type === `svg`) &&
    dl(f.current, n, i, h);
  let g = (0, T.useRef)(!1);
  (0, T.useInsertionEffect)(() => {
    m && g.current && m.update(n, c);
  });
  let _ = n[ki],
    v = (0, T.useRef)(
      !!_ &&
        typeof window < `u` &&
        !window.MotionHandoffIsComplete?.(_) &&
        window.MotionHasOptimisedAnimation?.(_),
    );
  return (
    ae(() => {
      ((p.current = !0),
        m &&
          ((g.current = !0),
          (window.MotionIsMounted = !0),
          m.updateFeatures(),
          m.scheduleRenderMicrotask(),
          v.current && m.animationState && m.animationState.animateChanges()));
    }),
    (0, T.useEffect)(() => {
      m &&
        (!v.current && m.animationState && m.animationState.animateChanges(),
        (v.current &&=
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(_);
          }),
          !1)),
        (m.enteringChildren = void 0));
    }),
    m
  );
}
function dl(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : fl(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && ll(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function fl(e) {
  if (e) return e.options.allowProjection === !1 ? fl(e.parent) : e.projection;
}
function pl(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && Ic(r);
  let a = n ? n === `svg` : $c(e),
    o = a ? al : il;
  function s(n, s) {
    let c,
      l = { ...(0, T.useContext)(kc), ...n, layoutId: ml(n) },
      { isStatic: u, isValidProp: d } = l,
      f = zc(n),
      p = o(n, u);
    if (!u && typeof window < `u`) {
      hl(l, r);
      let t = gl(l);
      ((c = t.MeasureLayout),
        (f.visualElement = ul(e, p, l, i, t.ProjectionNode, a)));
    }
    return (0, ie.jsxs)(Lc.Provider, {
      value: f,
      children: [
        c && f.visualElement
          ? (0, ie.jsx)(c, { visualElement: f.visualElement, ...l })
          : null,
        el(e, n, sl(p, f.visualElement, s), p, u, t, a, d),
      ],
    });
  }
  s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let c = (0, T.forwardRef)(s);
  return ((c[ol] = e), c);
}
function ml({ layoutId: e }) {
  let t = (0, T.useContext)(E).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function hl(e, t) {
  (0, T.useContext)(jc).strict;
}
function gl(e) {
  let { drag: t, layout: n } = Fc();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function _l(e, t) {
  if (typeof Proxy > `u`) return pl;
  let n = new Map(),
    r = (n, r) => pl(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) =>
      a === `create`
        ? r
        : (n.has(a) || n.set(a, pl(a, void 0, e, t)), n.get(a)),
  });
}
var vl = (e, t) =>
    (t.isSVG ?? $c(e))
      ? new Wo(t)
      : new zo(t, { allowProjection: e !== T.Fragment }),
  yl = class extends Ao {
    constructor(e) {
      (super(e), (e.animationState ||= Zo(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      po(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      (this.node.animationState.reset(), this.unmountControls?.());
    }
  },
  bl = 0,
  xl = {
    animation: { Feature: yl },
    exit: {
      Feature: class extends Ao {
        constructor() {
          (super(...arguments), (this.id = bl++), (this.isExitComplete = !1));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          if (e && n === !1) {
            if (this.isExitComplete) {
              let { initial: e, custom: t } = this.node.getProps();
              if (
                typeof e == `string` ||
                (typeof e == `object` && e && !Array.isArray(e))
              ) {
                let n = bi(this.node, e, t);
                if (n) {
                  let { transition: e, transitionEnd: t, ...r } = n;
                  for (let e in r) this.node.getValue(e)?.jump(r[e]);
                }
              }
              (this.node.animationState.reset(),
                this.node.animationState.animateChanges());
            } else this.node.animationState.setActive(`exit`, !1);
            this.isExitComplete = !1;
            return;
          }
          let r = this.node.animationState.setActive(`exit`, !e);
          t &&
            !e &&
            r.then(() => {
              ((this.isExitComplete = !0), t(this.id));
            });
        }
        mount() {
          let { register: e, onExitComplete: t } =
            this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      },
    },
  };
function Sl(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var Cl = (e) => (t) => Pa(t) && e(t, Sl(t));
function wl(e, t, n, r) {
  return Bs(e, t, Cl(n), r);
}
var Tl = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  El = (e, t) => Math.abs(e - t);
function Dl(e, t) {
  let n = El(e.x, t.x),
    r = El(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var Ol = new Set([`auto`, `scroll`]),
  kl = class {
    constructor(
      e,
      t,
      {
        transformPagePoint: n,
        contextWindow: r = window,
        dragSnapToOrigin: i = !1,
        distanceThreshold: a = 3,
        element: o,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.lastRawMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (e) => {
          this.handleScroll(e.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          this.lastRawMoveEventInfo &&
            (this.lastMoveEventInfo = Al(
              this.lastRawMoveEventInfo,
              this.transformPagePoint,
            ));
          let e = Ml(this.lastMoveEventInfo, this.history),
            t = this.startEvent !== null,
            n = Dl(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!t && !n) return;
          let { point: r } = e,
            { timestamp: i } = z;
          this.history.push({ ...r, timestamp: i });
          let { onStart: a, onMove: o } = this.handlers;
          (t ||
            (a && a(this.lastMoveEvent, e),
            (this.startEvent = this.lastMoveEvent)),
            o && o(this.lastMoveEvent, e));
        }),
        (this.handlePointerMove = (e, t) => {
          ((this.lastMoveEvent = e),
            (this.lastRawMoveEventInfo = t),
            (this.lastMoveEventInfo = Al(t, this.transformPagePoint)),
            R.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (e, t) => {
          this.end();
          let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let a = Ml(
            e.type === `pointercancel`
              ? this.lastMoveEventInfo
              : Al(t, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && n && n(e, a), r && r(e, a));
        }),
        !Pa(e))
      )
        return;
      ((this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.distanceThreshold = a),
        (this.contextWindow = r || window));
      let s = Al(Sl(e), this.transformPagePoint),
        { point: c } = s,
        { timestamp: l } = z;
      this.history = [{ ...c, timestamp: l }];
      let { onSessionStart: u } = t;
      u && u(e, Ml(s, this.history));
      let d = { passive: !0, capture: !0 };
      ((this.removeListeners = le(
        wl(this.contextWindow, `pointermove`, this.handlePointerMove, d),
        wl(this.contextWindow, `pointerup`, this.handlePointerUp, d),
        wl(this.contextWindow, `pointercancel`, this.handlePointerUp, d),
      )),
        o && this.startScrollTracking(o));
    }
    startScrollTracking(e) {
      let t = e.parentElement;
      for (; t;) {
        let e = getComputedStyle(t);
        ((Ol.has(e.overflowX) || Ol.has(e.overflowY)) &&
          this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
          (t = t.parentElement));
      }
      (this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY,
      }),
        window.addEventListener(`scroll`, this.onElementScroll, {
          capture: !0,
        }),
        window.addEventListener(`scroll`, this.onWindowScroll),
        (this.removeScrollListeners = () => {
          (window.removeEventListener(`scroll`, this.onElementScroll, {
            capture: !0,
          }),
            window.removeEventListener(`scroll`, this.onWindowScroll));
        }));
    }
    handleScroll(e) {
      let t = this.scrollPositions.get(e);
      if (!t) return;
      let n = e === window,
        r = n
          ? { x: window.scrollX, y: window.scrollY }
          : { x: e.scrollLeft, y: e.scrollTop },
        i = { x: r.x - t.x, y: r.y - t.y };
      (i.x !== 0 || i.y !== 0) &&
        (n
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += i.x),
            (this.lastMoveEventInfo.point.y += i.y))
          : this.history.length > 0 &&
            ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
        this.scrollPositions.set(e, r),
        R.update(this.updatePoint, !0));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      (this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        Re(this.updatePoint));
    }
  };
function Al(e, t) {
  return t ? { point: t(e.point) } : e;
}
function jl(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ml({ point: e }, t) {
  return {
    point: e,
    delta: jl(e, Pl(t)),
    offset: jl(e, Nl(t)),
    velocity: Fl(t, 0.1),
  };
}
function Nl(e) {
  return e[0];
}
function Pl(e) {
  return e[e.length - 1];
}
function Fl(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Pl(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > I(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > I(t) * 2 &&
    (r = e[1]);
  let a = L(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function Il(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? W(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ll(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function Rl(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Ll(e.x, n, i), y: Ll(e.y, t, r) };
}
function zl(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function Bl(e, t) {
  return { x: zl(e.x, t.x), y: zl(e.y, t.y) };
}
function Vl(e, t) {
  let n = 0.5,
    r = Y(e),
    i = Y(t);
  return (
    i > r
      ? (n = F(t.min, t.max - r, e.min))
      : r > i && (n = F(e.min, e.max - i, t.min)),
    A(0, 1, n)
  );
}
function Hl(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var Ul = 0.35;
function Wl(e = Ul) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ul),
    { x: Gl(e, `left`, `right`), y: Gl(e, `top`, `bottom`) }
  );
}
function Gl(e, t, n) {
  return { min: Kl(e, t), max: Kl(e, n) };
}
function Kl(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var ql = new WeakMap(),
  Jl = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = J()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
      let { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1) return;
      let i = (e) => {
          (t && this.snapToCursor(Sl(e).point), this.stopAnimation());
        },
        a = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = ka(n)),
            !this.openDragLock)
          )
            return;
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            ks((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (ut.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = Y(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && R.update(() => i(e, t), !1, !0),
            Di(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        o = (e, t) => {
          ((this.latestPointerEvent = e), (this.latestPanInfo = t));
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            ((this.currentDirection = Ql(o)),
              this.currentDirection !== null && i && i(this.currentDirection));
            return;
          }
          (this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && R.update(() => a(e, t), !1, !0));
        },
        s = (e, t) => {
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            this.stop(e, t),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null));
        },
        c = () => {
          let { dragSnapToOrigin: e } = this.getProps();
          (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
        },
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new kl(
        e,
        {
          onSessionStart: i,
          onStart: a,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: c,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          distanceThreshold: n,
          contextWindow: Tl(this.visualElement),
          element: this.visualElement.current,
        },
      );
    }
    stop(e, t) {
      let n = e || this.latestPointerEvent,
        r = t || this.latestPanInfo,
        i = this.isDragging;
      if ((this.cancel(), !i || !r || !n)) return;
      let { velocity: a } = r;
      this.startAnimation(a);
      let { onDragEnd: o } = this.getProps();
      o && R.postRender(() => o(n, r));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1), this.endPanSession());
      let { dragPropagation: n } = this.getProps();
      (!n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    endPanSession() {
      (this.panSession && this.panSession.end(), (this.panSession = void 0));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Zl(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints &&
        this.constraints[e] &&
        (a = Il(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && ll(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : (this.constraints = e && n ? Rl(n.layoutBox, e) : !1),
        (this.elastic = Wl(t)),
        r !== this.constraints &&
          !ll(e) &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          ks((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = Hl(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !ll(e)) return !1;
      let n = e.current,
        { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      r.root && ((r.root.scroll = void 0), r.root.updateScroll());
      let i = Ta(n, r.root, this.visualElement.getTransformPagePoint()),
        a = Bl(r.layout.layoutBox, i);
      if (t) {
        let e = t(oa(a));
        ((this.hasMutatedConstraints = !!e), e && (a = aa(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = ks((o) => {
          if (!Zl(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          (a === !0 || a === o) && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        Di(this.visualElement, e),
        n.start(mi(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      ks((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`;
      return (
        this.visualElement.getProps()[t] ||
        this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0)
      );
    }
    snapToCursor(e) {
      ks((t) => {
        let { drag: n } = this.getProps();
        if (!Zl(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t],
            o = i.get() || 0;
          i.set(e[t] - W(n, a, 0.5) + o);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!ll(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      ks((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = Vl({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        ks((t) => {
          if (!Zl(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(W(i, a, r[t]));
        }),
        this.visualElement.render());
    }
    addListeners() {
      if (!this.visualElement.current) return;
      ql.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = wl(e, `pointerdown`, (t) => {
          let { drag: n, dragListener: r = !0 } = this.getProps(),
            i = t.target,
            a = i !== e && Ra(i);
          n && r && !a && this.start(t);
        }),
        n,
        r = () => {
          let { dragConstraints: t } = this.getProps();
          ll(t) &&
            t.current &&
            ((this.constraints = this.resolveRefConstraints()),
            (n ||= Xl(e, t.current, () =>
              this.scalePositionWithinConstraints(),
            )));
        },
        { projection: i } = this.visualElement,
        a = i.addEventListener(`measure`, r);
      (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
        R.read(r));
      let o = Bs(window, `resize`, () => this.scalePositionWithinConstraints()),
        s = i.addEventListener(
          `didUpdate`,
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (ks((t) => {
                let n = this.getAxisMotionValue(t);
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (o(), t(), a(), s && s(), n && n());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = Ul,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function Yl(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function Xl(e, t, n) {
  let r = ao(e, Yl(n)),
    i = ao(t, Yl(n));
  return () => {
    (r(), i());
  };
}
function Zl(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ql(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var $l = class extends Ao {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = P),
        (this.removeListeners = P),
        (this.controls = new Jl(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || P));
    }
    update() {
      let { dragControls: e } = this.node.getProps(),
        { dragControls: t } = this.node.prevProps || {};
      e !== t &&
        (this.removeGroupControls(),
        e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      (this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession());
    }
  },
  eu = (e) => (t, n) => {
    e && R.update(() => e(t, n), !1, !0);
  },
  tu = class extends Ao {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = P));
    }
    onPointerDown(e) {
      this.session = new kl(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Tl(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: eu(e),
        onStart: eu(t),
        onMove: eu(n),
        onEnd: (e, t) => {
          (delete this.session, r && R.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = wl(
        this.node.current,
        `pointerdown`,
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  },
  nu = !1,
  ru = class extends T.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      (i &&
        (t.group && t.group.add(i),
        n && n.register && r && n.register(i),
        nu && i.root.didUpdate(),
        i.addEventListener(`animationComplete`, () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove(),
        })),
        (Ks.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        { projection: a } = n;
      return a
        ? ((a.isPresent = i),
          e.layoutDependency !== t &&
            a.setOptions({ ...a.options, layoutDependency: t }),
          (nu = !0),
          r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                R.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { visualElement: e, layoutAnchor: t } = this.props,
        { projection: n } = e;
      n &&
        ((n.options.layoutAnchor = t),
        n.root.didUpdate(),
        Ea.postRender(() => {
          !n.currentAnimation && n.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      ((nu = !0),
        r &&
          (r.scheduleCheckAfterUnmount(),
          t && t.group && t.group.remove(r),
          n && n.deregister && n.deregister(r)));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function iu(e) {
  let [t, n] = Ac(),
    r = (0, T.useContext)(E);
  return (0, ie.jsx)(ru, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, T.useContext)(cl),
    isPresent: t,
    safeToRemove: n,
  });
}
var au = {
  pan: { Feature: tu },
  drag: { Feature: $l, ProjectionNode: Oc, MeasureLayout: iu },
};
function ou(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && R.postRender(() => i(t, Sl(t)));
}
var su = class extends Ao {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = Ma(
          e,
          (e, t) => (ou(this.node, t, `Start`), (e) => ou(this.node, e, `End`)),
        ));
    }
    unmount() {}
  },
  cu = class extends Ao {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = le(
        Bs(this.node.current, `focus`, () => this.onFocus()),
        Bs(this.node.current, `blur`, () => this.onBlur()),
      );
    }
    unmount() {}
  };
function lu(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && R.postRender(() => i(t, Sl(t)));
}
var uu = class extends Ao {
    mount() {
      let { current: e } = this.node;
      if (!e) return;
      let { globalTapTarget: t, propagate: n } = this.node.props;
      this.unmount = Ga(
        e,
        (e, t) => (
          lu(this.node, t, `Start`),
          (e, { success: t }) => lu(this.node, e, t ? `End` : `Cancel`)
        ),
        { useGlobalTarget: t, stopPropagation: n?.tap === !1 },
      );
    }
    unmount() {}
  },
  du = new WeakMap(),
  fu = new WeakMap(),
  pu = (e) => {
    let t = du.get(e.target);
    t && t(e);
  },
  mu = (e) => {
    e.forEach(pu);
  };
function hu({ root: e, ...t }) {
  let n = e || document;
  fu.has(n) || fu.set(n, {});
  let r = fu.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(mu, { root: e, ...t })),
    r[i]
  );
}
function gu(e, t, n) {
  let r = hu(t);
  return (
    du.set(e, n),
    r.observe(e),
    () => {
      (du.delete(e), r.unobserve(e));
    }
  );
}
var _u = { some: 0, all: 1 },
  vu = class extends Ao {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.stopObserver?.();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : _u[r],
        },
        o = (e) => {
          let { isIntersecting: t } = e;
          if (
            this.isInView === t ||
            ((this.isInView = t), i && !t && this.hasEnteredView)
          )
            return;
          (t && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive(`whileInView`, t));
          let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
            a = t ? n : r;
          a && a(e);
        };
      this.stopObserver = gu(this.node.current, a, o);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(yu(e, t)) && this.startObserver();
    }
    unmount() {
      (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
    }
  };
function yu({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var bu = {
    inView: { Feature: vu },
    tap: { Feature: uu },
    focus: { Feature: cu },
    hover: { Feature: su },
  },
  xu = { layout: { ProjectionNode: Oc, MeasureLayout: iu } },
  Su = _l({ ...xl, ...bu, ...au, ...xu }, vl);
function Cu(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Cu(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function wu() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Cu(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Tu = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Eu = (e, t) => ({ classGroupId: e, validator: t }),
  Du = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  Ou = `-`,
  ku = [],
  Au = `arbitrary..`,
  ju = (e) => {
    let t = Pu(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Nu(e);
        let n = e.split(Ou);
        return Mu(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? Tu(i, t) : t) : i || ku;
        }
        return n[e] || ku;
      },
    };
  },
  Mu = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = Mu(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(Ou) : e.slice(t).join(Ou),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Nu = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Au + r : void 0;
        })(),
  Pu = (e) => {
    let { theme: t, classGroups: n } = e;
    return Fu(n, t);
  },
  Fu = (e, t) => {
    let n = Du();
    for (let r in e) {
      let i = e[r];
      Iu(i, n, r, t);
    }
    return n;
  },
  Iu = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      Lu(i, t, n, r);
    }
  },
  Lu = (e, t, n, r) => {
    if (typeof e == `string`) {
      Ru(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      zu(e, t, n, r);
      return;
    }
    Bu(e, t, n, r);
  },
  Ru = (e, t, n) => {
    let r = e === `` ? t : Vu(t, e);
    r.classGroupId = n;
  },
  zu = (e, t, n, r) => {
    if (Hu(e)) {
      Iu(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(Eu(n, e)));
  },
  Bu = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Iu(o, Vu(t, a), n, r);
    }
  },
  Vu = (e, t) => {
    let n = e,
      r = t.split(Ou),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = Du()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  Hu = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Uu = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Wu = `!`,
  Gu = `:`,
  Ku = [],
  qu = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  Ju = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Gu) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Wu)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Wu) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return qu(t, l, c, u);
      };
    if (t) {
      let e = t + Gu,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : qu(Ku, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  Yu = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  Xu = (e) => ({
    cache: Uu(e.cacheSize),
    parseClassName: Ju(e),
    sortModifiers: Yu(e),
    postfixLookupClassGroupIds: Zu(e),
    ...ju(e),
  }),
  Zu = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  Qu = /\s+/,
  $u = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(Qu),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + Wu : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let b = i(g, h);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  ed = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length;)
      (n = e[t++]) && (r = td(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  td = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = td(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  nd = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = Xu(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = $u(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(ed(...e)));
  },
  rd = [],
  X = (e) => {
    let t = (t) => t[e] || rd;
    return ((t.isThemeGetter = !0), (t.themeKey = e), t);
  },
  id = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ad = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  od = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  sd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  cd =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  ld = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,
  ud = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  dd =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  fd = (e) => od.test(e),
  Z = (e) => !!e && !Number.isNaN(Number(e)),
  pd = (e) => !!e && Number.isInteger(Number(e)),
  md = (e) => e.endsWith(`%`) && Z(e.slice(0, -1)),
  hd = (e) => sd.test(e),
  gd = () => !0,
  _d = (e) => cd.test(e) && !ld.test(e),
  vd = () => !1,
  yd = (e) => ud.test(e),
  bd = (e) => dd.test(e),
  xd = (e) => !Q(e) && !$(e),
  Sd = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  Cd = (e) => Rd(e, Hd, vd),
  Q = (e) => id.test(e),
  wd = (e) => Rd(e, Ud, _d),
  Td = (e) => Rd(e, Wd, Z),
  Ed = (e) => Rd(e, Kd, gd),
  Dd = (e) => Rd(e, Gd, vd),
  Od = (e) => Rd(e, Bd, vd),
  kd = (e) => Rd(e, Vd, bd),
  Ad = (e) => Rd(e, qd, yd),
  $ = (e) => ad.test(e),
  jd = (e) => zd(e, Ud),
  Md = (e) => zd(e, Gd),
  Nd = (e) => zd(e, Bd),
  Pd = (e) => zd(e, Hd),
  Fd = (e) => zd(e, Vd),
  Id = (e) => zd(e, qd, !0),
  Ld = (e) => zd(e, Kd, !0),
  Rd = (e, t, n) => {
    let r = id.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  zd = (e, t, n = !1) => {
    let r = ad.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Bd = (e) => e === `position` || e === `percentage`,
  Vd = (e) => e === `image` || e === `url`,
  Hd = (e) => e === `length` || e === `size` || e === `bg-size`,
  Ud = (e) => e === `length`,
  Wd = (e) => e === `number`,
  Gd = (e) => e === `family-name`,
  Kd = (e) => e === `number` || e === `weight`,
  qd = (e) => e === `shadow`,
  Jd = nd(() => {
    let e = X(`color`),
      t = X(`font`),
      n = X(`text`),
      r = X(`font-weight`),
      i = X(`tracking`),
      a = X(`leading`),
      o = X(`breakpoint`),
      s = X(`container`),
      c = X(`spacing`),
      l = X(`radius`),
      u = X(`shadow`),
      d = X(`inset-shadow`),
      f = X(`text-shadow`),
      p = X(`drop-shadow`),
      m = X(`blur`),
      h = X(`perspective`),
      g = X(`aspect`),
      _ = X(`ease`),
      v = X(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), $, Q],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      ee = () => [`auto`, `contain`, `none`],
      C = () => [$, Q, c],
      w = () => [fd, `full`, `auto`, ...C()],
      te = () => [pd, `none`, `subgrid`, $, Q],
      ne = () => [`auto`, { span: [`full`, pd, $, Q] }, pd, $, Q],
      re = () => [pd, `auto`, $, Q],
      ie = () => [`auto`, `min`, `max`, `fr`, $, Q],
      T = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      E = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      D = () => [`auto`, ...C()],
      ae = () => [
        fd,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      O = () => [
        s,
        fd,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      oe = () => [
        fd,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      k = () => [e, $, Q],
      A = () => [...b(), Nd, Od, { position: [$, Q] }],
      j = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      se = () => [`auto`, `cover`, `contain`, Pd, Cd, { size: [$, Q] }],
      ce = () => [md, jd, wd],
      M = () => [``, `none`, `full`, l, $, Q],
      N = () => [``, Z, jd, wd],
      P = () => [`solid`, `dashed`, `dotted`, `double`],
      le = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      F = () => [Z, md, Nd, Od],
      ue = () => [``, `none`, m, $, Q],
      I = () => [`none`, Z, $, Q],
      L = () => [`none`, Z, $, Q],
      de = () => [Z, $, Q],
      fe = () => [fd, `full`, ...C()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [hd],
        breakpoint: [hd],
        color: [gd],
        container: [hd],
        "drop-shadow": [hd],
        ease: [`in`, `out`, `in-out`],
        font: [xd],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [hd],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [hd],
        shadow: [hd],
        spacing: [`px`, Z],
        text: [hd],
        "text-shadow": [hd],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, fd, Q, $, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, $, Q] }],
        "container-named": [Sd],
        columns: [{ columns: [Z, `auto`, Q, $, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: ee() }],
        "overscroll-x": [{ "overscroll-x": ee() }],
        "overscroll-y": [{ "overscroll-y": ee() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: w() }],
        "inset-x": [{ "inset-x": w() }],
        "inset-y": [{ "inset-y": w() }],
        start: [{ "inset-s": w(), start: w() }],
        end: [{ "inset-e": w(), end: w() }],
        "inset-bs": [{ "inset-bs": w() }],
        "inset-be": [{ "inset-be": w() }],
        top: [{ top: w() }],
        right: [{ right: w() }],
        bottom: [{ bottom: w() }],
        left: [{ left: w() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [pd, `auto`, $, Q] }],
        basis: [{ basis: [fd, `full`, `auto`, s, ...C()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [Z, fd, `auto`, `initial`, `none`, Q] }],
        grow: [{ grow: [``, Z, $, Q] }],
        shrink: [{ shrink: [``, Z, $, Q] }],
        order: [{ order: [pd, `first`, `last`, `none`, $, Q] }],
        "grid-cols": [{ "grid-cols": te() }],
        "col-start-end": [{ col: ne() }],
        "col-start": [{ "col-start": re() }],
        "col-end": [{ "col-end": re() }],
        "grid-rows": [{ "grid-rows": te() }],
        "row-start-end": [{ row: ne() }],
        "row-start": [{ "row-start": re() }],
        "row-end": [{ "row-end": re() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": ie() }],
        "auto-rows": [{ "auto-rows": ie() }],
        gap: [{ gap: C() }],
        "gap-x": [{ "gap-x": C() }],
        "gap-y": [{ "gap-y": C() }],
        "justify-content": [{ justify: [...T(), `normal`] }],
        "justify-items": [{ "justify-items": [...E(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...E()] }],
        "align-content": [{ content: [`normal`, ...T()] }],
        "align-items": [{ items: [...E(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...E(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": T() }],
        "place-items": [{ "place-items": [...E(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...E()] }],
        p: [{ p: C() }],
        px: [{ px: C() }],
        py: [{ py: C() }],
        ps: [{ ps: C() }],
        pe: [{ pe: C() }],
        pbs: [{ pbs: C() }],
        pbe: [{ pbe: C() }],
        pt: [{ pt: C() }],
        pr: [{ pr: C() }],
        pb: [{ pb: C() }],
        pl: [{ pl: C() }],
        m: [{ m: D() }],
        mx: [{ mx: D() }],
        my: [{ my: D() }],
        ms: [{ ms: D() }],
        me: [{ me: D() }],
        mbs: [{ mbs: D() }],
        mbe: [{ mbe: D() }],
        mt: [{ mt: D() }],
        mr: [{ mr: D() }],
        mb: [{ mb: D() }],
        ml: [{ ml: D() }],
        "space-x": [{ "space-x": C() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": C() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: ae() }],
        "inline-size": [{ inline: [`auto`, ...O()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...O()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...O()] }],
        "block-size": [{ block: [`auto`, ...oe()] }],
        "min-block-size": [{ "min-block": [`auto`, ...oe()] }],
        "max-block-size": [{ "max-block": [`none`, ...oe()] }],
        w: [{ w: [s, `screen`, ...ae()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...ae()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...ae()] },
        ],
        h: [{ h: [`screen`, `lh`, ...ae()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...ae()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, `none`, ...ae()] }],
        "font-size": [{ text: [`base`, n, jd, wd] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Ld, Ed] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              md,
              Q,
            ],
          },
        ],
        "font-family": [{ font: [Md, Dd, t] }],
        "font-features": [{ "font-features": [Q] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, $, Q] }],
        "line-clamp": [{ "line-clamp": [Z, `none`, $, Td] }],
        leading: [{ leading: [`none`, a, ...C()] }],
        "list-image": [{ "list-image": [`none`, $, Q] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, $, Q] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...P(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [Z, `from-font`, `auto`, $, wd] },
        ],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [Z, `auto`, $, Q] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: C() }],
        "tab-size": [{ tab: [pd, $, Q] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              $,
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, $, Q] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: A() }],
        "bg-repeat": [{ bg: j() }],
        "bg-size": [{ bg: se() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  pd,
                  $,
                  Q,
                ],
                radial: [``, $, Q],
                conic: [``, pd, $, Q],
              },
              Fd,
              kd,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: ce() }],
        "gradient-via-pos": [{ via: ce() }],
        "gradient-to-pos": [{ to: ce() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: M() }],
        "rounded-s": [{ "rounded-s": M() }],
        "rounded-e": [{ "rounded-e": M() }],
        "rounded-t": [{ "rounded-t": M() }],
        "rounded-r": [{ "rounded-r": M() }],
        "rounded-b": [{ "rounded-b": M() }],
        "rounded-l": [{ "rounded-l": M() }],
        "rounded-ss": [{ "rounded-ss": M() }],
        "rounded-se": [{ "rounded-se": M() }],
        "rounded-ee": [{ "rounded-ee": M() }],
        "rounded-es": [{ "rounded-es": M() }],
        "rounded-tl": [{ "rounded-tl": M() }],
        "rounded-tr": [{ "rounded-tr": M() }],
        "rounded-br": [{ "rounded-br": M() }],
        "rounded-bl": [{ "rounded-bl": M() }],
        "border-w": [{ border: N() }],
        "border-w-x": [{ "border-x": N() }],
        "border-w-y": [{ "border-y": N() }],
        "border-w-s": [{ "border-s": N() }],
        "border-w-e": [{ "border-e": N() }],
        "border-w-bs": [{ "border-bs": N() }],
        "border-w-be": [{ "border-be": N() }],
        "border-w-t": [{ "border-t": N() }],
        "border-w-r": [{ "border-r": N() }],
        "border-w-b": [{ "border-b": N() }],
        "border-w-l": [{ "border-l": N() }],
        "divide-x": [{ "divide-x": N() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": N() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...P(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...P(), `hidden`, `none`] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-bs": [{ "border-bs": k() }],
        "border-color-be": [{ "border-be": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...P(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [Z, $, Q] }],
        "outline-w": [{ outline: [``, Z, jd, wd] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: [``, `inner`, `none`, u, Id, Ad] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Id, Ad] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: N() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [Z, wd] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": N() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Id, Ad] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [Z, $, Q] }],
        "mix-blend": [
          { "mix-blend": [...le(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": le() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Z] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": F() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": F() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": F() }],
        "mask-image-t-to-pos": [{ "mask-t-to": F() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": F() }],
        "mask-image-r-to-pos": [{ "mask-r-to": F() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": F() }],
        "mask-image-b-to-pos": [{ "mask-b-to": F() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": F() }],
        "mask-image-l-to-pos": [{ "mask-l-to": F() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": F() }],
        "mask-image-x-to-pos": [{ "mask-x-to": F() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": F() }],
        "mask-image-y-to-pos": [{ "mask-y-to": F() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [$, Q] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": F() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": F() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [Z] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": F() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": F() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: A() }],
        "mask-repeat": [{ mask: j() }],
        "mask-size": [{ mask: se() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, $, Q] }],
        filter: [{ filter: [``, `none`, $, Q] }],
        blur: [{ blur: ue() }],
        brightness: [{ brightness: [Z, $, Q] }],
        contrast: [{ contrast: [Z, $, Q] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Id, Ad] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: [``, Z, $, Q] }],
        "hue-rotate": [{ "hue-rotate": [Z, $, Q] }],
        invert: [{ invert: [``, Z, $, Q] }],
        saturate: [{ saturate: [Z, $, Q] }],
        sepia: [{ sepia: [``, Z, $, Q] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, $, Q] }],
        "backdrop-blur": [{ "backdrop-blur": ue() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Z, $, Q] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Z, $, Q] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, Z, $, Q] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Z, $, Q] }],
        "backdrop-invert": [{ "backdrop-invert": [``, Z, $, Q] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Z, $, Q] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Z, $, Q] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, Z, $, Q] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": C() }],
        "border-spacing-x": [{ "border-spacing-x": C() }],
        "border-spacing-y": [{ "border-spacing-y": C() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              $,
              Q,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [Z, `initial`, $, Q] }],
        ease: [{ ease: [`linear`, `initial`, _, $, Q] }],
        delay: [{ delay: [Z, $, Q] }],
        animate: [{ animate: [`none`, v, $, Q] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, $, Q] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: I() }],
        "rotate-x": [{ "rotate-x": I() }],
        "rotate-y": [{ "rotate-y": I() }],
        "rotate-z": [{ "rotate-z": I() }],
        scale: [{ scale: L() }],
        "scale-x": [{ "scale-x": L() }],
        "scale-y": [{ "scale-y": L() }],
        "scale-z": [{ "scale-z": L() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: de() }],
        "skew-x": [{ "skew-x": de() }],
        "skew-y": [{ "skew-y": de() }],
        transform: [{ transform: [$, Q, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: fe() }],
        "translate-x": [{ "translate-x": fe() }],
        "translate-y": [{ "translate-y": fe() }],
        "translate-z": [{ "translate-z": fe() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [pd, $, Q] }],
        accent: [{ accent: k() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              $,
              Q,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": k() }],
        "scrollbar-track-color": [{ "scrollbar-track": k() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mbs": [{ "scroll-mbs": C() }],
        "scroll-mbe": [{ "scroll-mbe": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pbs": [{ "scroll-pbs": C() }],
        "scroll-pbe": [{ "scroll-pbe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, $, Q] },
        ],
        fill: [{ fill: [`none`, ...k()] }],
        "stroke-w": [{ stroke: [Z, jd, wd, Td] }],
        stroke: [{ stroke: [`none`, ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`start`, `end`, `right`, `left`],
        "inset-y": [`inset-bs`, `inset-be`, `top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`ps`, `pe`, `pr`, `pl`],
        py: [`pbs`, `pbe`, `pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`ms`, `me`, `mr`, `ml`],
        my: [`mbs`, `mbe`, `mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-s`, `border-w-e`, `border-w-r`, `border-w-l`],
        "border-w-y": [
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-b`,
        ],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [
          `border-color-s`,
          `border-color-e`,
          `border-color-r`,
          `border-color-l`,
        ],
        "border-color-y": [
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-b`,
        ],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-ms`, `scroll-me`, `scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-ps`, `scroll-pe`, `scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Yd(...e) {
  return Jd(wu(e));
}
export {
  f as _,
  kc as a,
  c as b,
  ae as c,
  te as d,
  C as f,
  ee as g,
  re as h,
  Ac as i,
  D as l,
  w as m,
  wu as n,
  Ki as o,
  ne as p,
  Su as r,
  O as s,
  Yd as t,
  E as u,
  u as v,
  o as y,
};
