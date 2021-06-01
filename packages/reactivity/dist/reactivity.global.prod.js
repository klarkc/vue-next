var VueReactivity = (function(t) {
  'use strict'
  function e(t, e) {
    const n = Object.create(null),
      r = t.split(',')
    for (let s = 0; s < r.length; s++) n[r[s]] = !0
    return e ? t => !!n[t.toLowerCase()] : t => !!n[t]
  }
  const n = {},
    r = () => {},
    s = Object.assign,
    i = Object.prototype.hasOwnProperty,
    o = (t, e) => i.call(t, e),
    c = Array.isArray,
    u = t => '[object Map]' === h(t),
    a = t => 'function' == typeof t,
    l = t => 'symbol' == typeof t,
    f = t => null !== t && 'object' == typeof t,
    _ = Object.prototype.toString,
    h = t => _.call(t),
    v = t =>
      'string' == typeof t &&
      'NaN' !== t &&
      '-' !== t[0] &&
      '' + parseInt(t, 10) === t,
    d = (t, e) => t !== e && (t == t || e == e),
    g = new WeakMap(),
    p = []
  let y
  const w = Symbol(''),
    R = Symbol('')
  function b(t, e = n) {
    ;(function(t) {
      return t && !0 === t._isEffect
    })(t) && (t = t.raw)
    const r = (function(t, e) {
      const n = function() {
        if (!n.active) return e.scheduler ? void 0 : t()
        if (!p.includes(n)) {
          E(n)
          try {
            return O(), p.push(n), (y = n), t()
          } finally {
            p.pop(), P(), (y = p[p.length - 1])
          }
        }
      }
      return (
        (n.id = k++),
        (n.allowRecurse = !!e.allowRecurse),
        (n._isEffect = !0),
        (n.active = !0),
        (n.raw = t),
        (n.deps = []),
        (n.options = e),
        n
      )
    })(t, e)
    return e.lazy || r(), r
  }
  let k = 0
  function E(t) {
    const { deps: e } = t
    if (e.length) {
      for (let n = 0; n < e.length; n++) e[n].delete(t)
      e.length = 0
    }
  }
  let m = !0
  const S = []
  function j() {
    S.push(m), (m = !1)
  }
  function O() {
    S.push(m), (m = !0)
  }
  function P() {
    const t = S.pop()
    m = void 0 === t || t
  }
  function x(t, e, n) {
    if (!m || void 0 === y) return
    let r = g.get(t)
    r || g.set(t, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = new Set())), s.has(y) || (s.add(y), y.deps.push(s))
  }
  function M(t, e, n, r, s, i) {
    const o = g.get(t)
    if (!o) return
    const a = new Set(),
      l = t => {
        t &&
          t.forEach(t => {
            ;(t !== y || t.allowRecurse) && a.add(t)
          })
      }
    if ('clear' === e) o.forEach(l)
    else if ('length' === n && c(t))
      o.forEach((t, e) => {
        ;('length' === e || e >= r) && l(t)
      })
    else
      switch ((void 0 !== n && l(o.get(n)), e)) {
        case 'add':
          c(t) ? v(n) && l(o.get('length')) : (l(o.get(w)), u(t) && l(o.get(R)))
          break
        case 'delete':
          c(t) || (l(o.get(w)), u(t) && l(o.get(R)))
          break
        case 'set':
          u(t) && l(o.get(w))
      }
    a.forEach(t => {
      t.options.scheduler ? t.options.scheduler(t) : t()
    })
  }
  const z = e('__proto__,__v_isRef,__isVue'),
    A = new Set(
      Object.getOwnPropertyNames(Symbol)
        .map(t => Symbol[t])
        .filter(l)
    ),
    T = K(),
    V = K(!1, !0),
    W = K(!0),
    N = K(!0, !0),
    I = {}
  function K(t = !1, e = !1) {
    return function(n, r, s) {
      if ('__v_isReactive' === r) return !t
      if ('__v_isReadonly' === r) return t
      if ('__v_raw' === r && s === (t ? _t : ft).get(n)) return n
      const i = c(n)
      if (!t && i && o(I, r)) return Reflect.get(I, r, s)
      const u = Reflect.get(n, r, s)
      if (l(r) ? A.has(r) : z(r)) return u
      if ((t || x(n, 0, r), e)) return u
      if (bt(u)) {
        return !i || !v(r) ? u.value : u
      }
      return f(u) ? (t ? dt(u) : vt(u)) : u
    }
  }
  ;['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
    const e = Array.prototype[t]
    I[t] = function(...t) {
      const n = wt(this)
      for (let e = 0, s = this.length; e < s; e++) x(n, 0, e + '')
      const r = e.apply(n, t)
      return -1 === r || !1 === r ? e.apply(n, t.map(wt)) : r
    }
  }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
      const e = Array.prototype[t]
      I[t] = function(...t) {
        j()
        const n = e.apply(this, t)
        return P(), n
      }
    })
  function B(t = !1) {
    return function(e, n, r, s) {
      const i = e[n]
      if (!t && ((r = wt(r)), !c(e) && bt(i) && !bt(r)))
        return (i.value = r), !0
      const u = c(e) && v(n) ? Number(n) < e.length : o(e, n),
        a = Reflect.set(e, n, r, s)
      return (
        e === wt(s) && (u ? d(r, i) && M(e, 'set', n, r) : M(e, 'add', n, r)), a
      )
    }
  }
  const C = {
      get: T,
      set: B(),
      deleteProperty: function(t, e) {
        const n = o(t, e),
          r = Reflect.deleteProperty(t, e)
        return r && n && M(t, 'delete', e, void 0), r
      },
      has: function(t, e) {
        const n = Reflect.has(t, e)
        return (l(e) && A.has(e)) || x(t, 0, e), n
      },
      ownKeys: function(t) {
        return x(t, 0, c(t) ? 'length' : w), Reflect.ownKeys(t)
      }
    },
    L = { get: W, set: (t, e) => !0, deleteProperty: (t, e) => !0 },
    Y = s({}, C, { get: V, set: B(!0) }),
    q = s({}, L, { get: N }),
    D = t => (f(t) ? vt(t) : t),
    F = t => (f(t) ? dt(t) : t),
    G = t => t,
    H = t => Reflect.getPrototypeOf(t)
  function J(t, e, n = !1, r = !1) {
    const s = wt((t = t.__v_raw)),
      i = wt(e)
    e !== i && !n && x(s, 0, e), !n && x(s, 0, i)
    const { has: o } = H(s),
      c = n ? F : r ? G : D
    return o.call(s, e) ? c(t.get(e)) : o.call(s, i) ? c(t.get(i)) : void 0
  }
  function Q(t, e = !1) {
    const n = this.__v_raw,
      r = wt(n),
      s = wt(t)
    return (
      t !== s && !e && x(r, 0, t),
      !e && x(r, 0, s),
      t === s ? n.has(t) : n.has(t) || n.has(s)
    )
  }
  function U(t, e = !1) {
    return (t = t.__v_raw), !e && x(wt(t), 0, w), Reflect.get(t, 'size', t)
  }
  function X(t) {
    t = wt(t)
    const e = wt(this)
    return H(e).has.call(e, t) || (e.add(t), M(e, 'add', t, t)), this
  }
  function Z(t, e) {
    e = wt(e)
    const n = wt(this),
      { has: r, get: s } = H(n)
    let i = r.call(n, t)
    i || ((t = wt(t)), (i = r.call(n, t)))
    const o = s.call(n, t)
    return (
      n.set(t, e), i ? d(e, o) && M(n, 'set', t, e) : M(n, 'add', t, e), this
    )
  }
  function $(t) {
    const e = wt(this),
      { has: n, get: r } = H(e)
    let s = n.call(e, t)
    s || ((t = wt(t)), (s = n.call(e, t))), r && r.call(e, t)
    const i = e.delete(t)
    return s && M(e, 'delete', t, void 0), i
  }
  function tt() {
    const t = wt(this),
      e = 0 !== t.size,
      n = t.clear()
    return e && M(t, 'clear', void 0, void 0), n
  }
  function et(t, e) {
    return function(n, r) {
      const s = this,
        i = s.__v_raw,
        o = wt(i),
        c = t ? F : e ? G : D
      return !t && x(o, 0, w), i.forEach((t, e) => n.call(r, c(t), c(e), s))
    }
  }
  function nt(t, e, n) {
    return function(...r) {
      const s = this.__v_raw,
        i = wt(s),
        o = u(i),
        c = 'entries' === t || (t === Symbol.iterator && o),
        a = 'keys' === t && o,
        l = s[t](...r),
        f = e ? F : n ? G : D
      return (
        !e && x(i, 0, a ? R : w),
        {
          next() {
            const { value: t, done: e } = l.next()
            return e
              ? { value: t, done: e }
              : { value: c ? [f(t[0]), f(t[1])] : f(t), done: e }
          },
          [Symbol.iterator]() {
            return this
          }
        }
      )
    }
  }
  function rt(t) {
    return function(...e) {
      return 'delete' !== t && this
    }
  }
  const st = {
      get(t) {
        return J(this, t)
      },
      get size() {
        return U(this)
      },
      has: Q,
      add: X,
      set: Z,
      delete: $,
      clear: tt,
      forEach: et(!1, !1)
    },
    it = {
      get(t) {
        return J(this, t, !1, !0)
      },
      get size() {
        return U(this)
      },
      has: Q,
      add: X,
      set: Z,
      delete: $,
      clear: tt,
      forEach: et(!1, !0)
    },
    ot = {
      get(t) {
        return J(this, t, !0)
      },
      get size() {
        return U(this, !0)
      },
      has(t) {
        return Q.call(this, t, !0)
      },
      add: rt('add'),
      set: rt('set'),
      delete: rt('delete'),
      clear: rt('clear'),
      forEach: et(!0, !1)
    }
  function ct(t, e) {
    const n = e ? it : t ? ot : st
    return (e, r, s) =>
      '__v_isReactive' === r
        ? !t
        : '__v_isReadonly' === r
          ? t
          : '__v_raw' === r
            ? e
            : Reflect.get(o(n, r) && r in e ? n : e, r, s)
  }
  ;['keys', 'values', 'entries', Symbol.iterator].forEach(t => {
    ;(st[t] = nt(t, !1, !1)), (ot[t] = nt(t, !0, !1)), (it[t] = nt(t, !1, !0))
  })
  const ut = { get: ct(!1, !1) },
    at = { get: ct(!1, !0) },
    lt = { get: ct(!0, !1) },
    ft = new WeakMap(),
    _t = new WeakMap()
  function ht(t) {
    return t.__v_skip || !Object.isExtensible(t)
      ? 0
      : (function(t) {
          switch (t) {
            case 'Object':
            case 'Array':
              return 1
            case 'Map':
            case 'Set':
            case 'WeakMap':
            case 'WeakSet':
              return 2
            default:
              return 0
          }
        })((t => h(t).slice(8, -1))(t))
  }
  function vt(t) {
    return t && t.__v_isReadonly ? t : gt(t, !1, C, ut)
  }
  function dt(t) {
    return gt(t, !0, L, lt)
  }
  function gt(t, e, n, r) {
    if (!f(t)) return t
    if (t.__v_raw && (!e || !t.__v_isReactive)) return t
    const s = e ? _t : ft,
      i = s.get(t)
    if (i) return i
    const o = ht(t)
    if (0 === o) return t
    const c = new Proxy(t, 2 === o ? r : n)
    return s.set(t, c), c
  }
  function pt(t) {
    return yt(t) ? pt(t.__v_raw) : !(!t || !t.__v_isReactive)
  }
  function yt(t) {
    return !(!t || !t.__v_isReadonly)
  }
  function wt(t) {
    return (t && wt(t.__v_raw)) || t
  }
  const Rt = t => (f(t) ? vt(t) : t)
  function bt(t) {
    return Boolean(t && !0 === t.__v_isRef)
  }
  class kt {
    constructor(t, e = !1) {
      ;(this._rawValue = t),
        (this._shallow = e),
        (this.__v_isRef = !0),
        (this._value = e ? t : Rt(t))
    }
    get value() {
      return x(wt(this), 0, 'value'), this._value
    }
    set value(t) {
      d(wt(t), this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this._shallow ? t : Rt(t)),
        M(wt(this), 'set', 'value', t))
    }
  }
  function Et(t, e = !1) {
    return bt(t) ? t : new kt(t, e)
  }
  function mt(t) {
    return bt(t) ? t.value : t
  }
  const St = {
    get: (t, e, n) => mt(Reflect.get(t, e, n)),
    set: (t, e, n, r) => {
      const s = t[e]
      return bt(s) && !bt(n) ? ((s.value = n), !0) : Reflect.set(t, e, n, r)
    }
  }
  class jt {
    constructor(t) {
      this.__v_isRef = !0
      const { get: e, set: n } = t(
        () => x(this, 0, 'value'),
        () => M(this, 'set', 'value')
      )
      ;(this._get = e), (this._set = n)
    }
    get value() {
      return this._get()
    }
    set value(t) {
      this._set(t)
    }
  }
  class Ot {
    constructor(t, e) {
      ;(this._object = t), (this._key = e), (this.__v_isRef = !0)
    }
    get value() {
      return this._object[this._key]
    }
    set value(t) {
      this._object[this._key] = t
    }
  }
  function Pt(t, e) {
    return bt(t[e]) ? t[e] : new Ot(t, e)
  }
  class xt {
    constructor(t, e, n) {
      ;(this._setter = e),
        (this._dirty = !0),
        (this.__v_isRef = !0),
        (this.effect = b(t, {
          lazy: !0,
          scheduler: () => {
            this._dirty || ((this._dirty = !0), M(wt(this), 'set', 'value'))
          }
        })),
        (this.__v_isReadonly = n)
    }
    get value() {
      return (
        this._dirty && ((this._value = this.effect()), (this._dirty = !1)),
        x(wt(this), 0, 'value'),
        this._value
      )
    }
    set value(t) {
      this._setter(t)
    }
  }
  return (
    (t.ITERATE_KEY = w),
    (t.computed = function(t) {
      let e, n
      return (
        a(t) ? ((e = t), (n = r)) : ((e = t.get), (n = t.set)),
        new xt(e, n, a(t) || !t.set)
      )
    }),
    (t.customRef = function(t) {
      return new jt(t)
    }),
    (t.effect = b),
    (t.enableTracking = O),
    (t.isProxy = function(t) {
      return pt(t) || yt(t)
    }),
    (t.isReactive = pt),
    (t.isReadonly = yt),
    (t.isRef = bt),
    (t.markRaw = function(t) {
      return (
        ((t, e, n) => {
          Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !1,
            value: n
          })
        })(t, '__v_skip', !0),
        t
      )
    }),
    (t.pauseTracking = j),
    (t.proxyRefs = function(t) {
      return pt(t) ? t : new Proxy(t, St)
    }),
    (t.reactive = vt),
    (t.readonly = dt),
    (t.ref = function(t) {
      return Et(t)
    }),
    (t.resetTracking = P),
    (t.shallowReactive = function(t) {
      return gt(t, !1, Y, at)
    }),
    (t.shallowReadonly = function(t) {
      return gt(t, !0, q, lt)
    }),
    (t.shallowRef = function(t) {
      return Et(t, !0)
    }),
    (t.stop = function(t) {
      t.active &&
        (E(t), t.options.onStop && t.options.onStop(), (t.active = !1))
    }),
    (t.toRaw = wt),
    (t.toRef = Pt),
    (t.toRefs = function(t) {
      const e = c(t) ? new Array(t.length) : {}
      for (const n in t) e[n] = Pt(t, n)
      return e
    }),
    (t.track = x),
    (t.trigger = M),
    (t.triggerRef = function(t) {
      M(wt(t), 'set', 'value', void 0)
    }),
    (t.unref = mt),
    Object.defineProperty(t, '__esModule', { value: !0 }),
    t
  )
})({})
