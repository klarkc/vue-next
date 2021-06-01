function t(t, e) {
  const n = Object.create(null),
    r = t.split(',')
  for (let s = 0; s < r.length; s++) n[r[s]] = !0
  return e ? t => !!n[t.toLowerCase()] : t => !!n[t]
}
const e = {},
  n = () => {},
  r = Object.assign,
  s = Object.prototype.hasOwnProperty,
  i = (t, e) => s.call(t, e),
  o = Array.isArray,
  c = t => '[object Map]' === _(t),
  u = t => 'function' == typeof t,
  a = t => 'symbol' == typeof t,
  l = t => null !== t && 'object' == typeof t,
  f = Object.prototype.toString,
  _ = t => f.call(t),
  h = t =>
    'string' == typeof t &&
    'NaN' !== t &&
    '-' !== t[0] &&
    '' + parseInt(t, 10) === t,
  v = (t, e) => t !== e && (t == t || e == e),
  d = new WeakMap(),
  p = []
let g
const y = Symbol(''),
  w = Symbol('')
function R(t, n = e) {
  ;(function(t) {
    return t && !0 === t._isEffect
  })(t) && (t = t.raw)
  const r = (function(t, e) {
    const n = function() {
      if (!n.active) return e.scheduler ? void 0 : t()
      if (!p.includes(n)) {
        k(n)
        try {
          return O(), p.push(n), (g = n), t()
        } finally {
          p.pop(), P(), (g = p[p.length - 1])
        }
      }
    }
    return (
      (n.id = S++),
      (n.allowRecurse = !!e.allowRecurse),
      (n._isEffect = !0),
      (n.active = !0),
      (n.raw = t),
      (n.deps = []),
      (n.options = e),
      n
    )
  })(t, n)
  return n.lazy || r(), r
}
function b(t) {
  t.active && (k(t), t.options.onStop && t.options.onStop(), (t.active = !1))
}
let S = 0
function k(t) {
  const { deps: e } = t
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t)
    e.length = 0
  }
}
let E = !0
const j = []
function m() {
  j.push(E), (E = !1)
}
function O() {
  j.push(E), (E = !0)
}
function P() {
  const t = j.pop()
  E = void 0 === t || t
}
function x(t, e, n) {
  if (!E || void 0 === g) return
  let r = d.get(t)
  r || d.set(t, (r = new Map()))
  let s = r.get(n)
  s || r.set(n, (s = new Set())), s.has(g) || (s.add(g), g.deps.push(s))
}
function z(t, e, n, r, s, i) {
  const u = d.get(t)
  if (!u) return
  const a = new Set(),
    l = t => {
      t &&
        t.forEach(t => {
          ;(t !== g || t.allowRecurse) && a.add(t)
        })
    }
  if ('clear' === e) u.forEach(l)
  else if ('length' === n && o(t))
    u.forEach((t, e) => {
      ;('length' === e || e >= r) && l(t)
    })
  else
    switch ((void 0 !== n && l(u.get(n)), e)) {
      case 'add':
        o(t) ? h(n) && l(u.get('length')) : (l(u.get(y)), c(t) && l(u.get(w)))
        break
      case 'delete':
        o(t) || (l(u.get(y)), c(t) && l(u.get(w)))
        break
      case 'set':
        c(t) && l(u.get(y))
    }
  a.forEach(t => {
    t.options.scheduler ? t.options.scheduler(t) : t()
  })
}
const M = t('__proto__,__v_isRef,__isVue'),
  A = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map(t => Symbol[t])
      .filter(a)
  ),
  W = B(),
  N = B(!1, !0),
  V = B(!0),
  I = B(!0, !0),
  K = {}
function B(t = !1, e = !1) {
  return function(n, r, s) {
    if ('__v_isReactive' === r) return !t
    if ('__v_isReadonly' === r) return t
    if ('__v_raw' === r && s === (t ? _t : ft).get(n)) return n
    const c = o(n)
    if (!t && c && i(K, r)) return Reflect.get(K, r, s)
    const u = Reflect.get(n, r, s)
    if (a(r) ? A.has(r) : M(r)) return u
    if ((t || x(n, 0, r), e)) return u
    if (jt(u)) {
      return !c || !h(r) ? u.value : u
    }
    return l(u) ? (t ? pt(u) : vt(u)) : u
  }
}
;['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
  const e = Array.prototype[t]
  K[t] = function(...t) {
    const n = St(this)
    for (let e = 0, s = this.length; e < s; e++) x(n, 0, e + '')
    const r = e.apply(n, t)
    return -1 === r || !1 === r ? e.apply(n, t.map(St)) : r
  }
}),
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
    const e = Array.prototype[t]
    K[t] = function(...t) {
      m()
      const n = e.apply(this, t)
      return P(), n
    }
  })
function C(t = !1) {
  return function(e, n, r, s) {
    const c = e[n]
    if (!t && ((r = St(r)), !o(e) && jt(c) && !jt(r))) return (c.value = r), !0
    const u = o(e) && h(n) ? Number(n) < e.length : i(e, n),
      a = Reflect.set(e, n, r, s)
    return (
      e === St(s) && (u ? v(r, c) && z(e, 'set', n, r) : z(e, 'add', n, r)), a
    )
  }
}
const L = {
    get: W,
    set: C(),
    deleteProperty: function(t, e) {
      const n = i(t, e),
        r = Reflect.deleteProperty(t, e)
      return r && n && z(t, 'delete', e, void 0), r
    },
    has: function(t, e) {
      const n = Reflect.has(t, e)
      return (a(e) && A.has(e)) || x(t, 0, e), n
    },
    ownKeys: function(t) {
      return x(t, 0, o(t) ? 'length' : y), Reflect.ownKeys(t)
    }
  },
  q = { get: V, set: (t, e) => !0, deleteProperty: (t, e) => !0 },
  D = r({}, L, { get: N, set: C(!0) }),
  F = r({}, q, { get: I }),
  G = t => (l(t) ? vt(t) : t),
  H = t => (l(t) ? pt(t) : t),
  J = t => t,
  Q = t => Reflect.getPrototypeOf(t)
function T(t, e, n = !1, r = !1) {
  const s = St((t = t.__v_raw)),
    i = St(e)
  e !== i && !n && x(s, 0, e), !n && x(s, 0, i)
  const { has: o } = Q(s),
    c = n ? H : r ? J : G
  return o.call(s, e) ? c(t.get(e)) : o.call(s, i) ? c(t.get(i)) : void 0
}
function U(t, e = !1) {
  const n = this.__v_raw,
    r = St(n),
    s = St(t)
  return (
    t !== s && !e && x(r, 0, t),
    !e && x(r, 0, s),
    t === s ? n.has(t) : n.has(t) || n.has(s)
  )
}
function X(t, e = !1) {
  return (t = t.__v_raw), !e && x(St(t), 0, y), Reflect.get(t, 'size', t)
}
function Y(t) {
  t = St(t)
  const e = St(this)
  return Q(e).has.call(e, t) || (e.add(t), z(e, 'add', t, t)), this
}
function Z(t, e) {
  e = St(e)
  const n = St(this),
    { has: r, get: s } = Q(n)
  let i = r.call(n, t)
  i || ((t = St(t)), (i = r.call(n, t)))
  const o = s.call(n, t)
  return n.set(t, e), i ? v(e, o) && z(n, 'set', t, e) : z(n, 'add', t, e), this
}
function $(t) {
  const e = St(this),
    { has: n, get: r } = Q(e)
  let s = n.call(e, t)
  s || ((t = St(t)), (s = n.call(e, t))), r && r.call(e, t)
  const i = e.delete(t)
  return s && z(e, 'delete', t, void 0), i
}
function tt() {
  const t = St(this),
    e = 0 !== t.size,
    n = t.clear()
  return e && z(t, 'clear', void 0, void 0), n
}
function et(t, e) {
  return function(n, r) {
    const s = this,
      i = s.__v_raw,
      o = St(i),
      c = t ? H : e ? J : G
    return !t && x(o, 0, y), i.forEach((t, e) => n.call(r, c(t), c(e), s))
  }
}
function nt(t, e, n) {
  return function(...r) {
    const s = this.__v_raw,
      i = St(s),
      o = c(i),
      u = 'entries' === t || (t === Symbol.iterator && o),
      a = 'keys' === t && o,
      l = s[t](...r),
      f = e ? H : n ? J : G
    return (
      !e && x(i, 0, a ? w : y),
      {
        next() {
          const { value: t, done: e } = l.next()
          return e
            ? { value: t, done: e }
            : { value: u ? [f(t[0]), f(t[1])] : f(t), done: e }
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
      return T(this, t)
    },
    get size() {
      return X(this)
    },
    has: U,
    add: Y,
    set: Z,
    delete: $,
    clear: tt,
    forEach: et(!1, !1)
  },
  it = {
    get(t) {
      return T(this, t, !1, !0)
    },
    get size() {
      return X(this)
    },
    has: U,
    add: Y,
    set: Z,
    delete: $,
    clear: tt,
    forEach: et(!1, !0)
  },
  ot = {
    get(t) {
      return T(this, t, !0)
    },
    get size() {
      return X(this, !0)
    },
    has(t) {
      return U.call(this, t, !0)
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
          : Reflect.get(i(n, r) && r in e ? n : e, r, s)
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
      })((t => _(t).slice(8, -1))(t))
}
function vt(t) {
  return t && t.__v_isReadonly ? t : yt(t, !1, L, ut)
}
function dt(t) {
  return yt(t, !1, D, at)
}
function pt(t) {
  return yt(t, !0, q, lt)
}
function gt(t) {
  return yt(t, !0, F, lt)
}
function yt(t, e, n, r) {
  if (!l(t)) return t
  if (t.__v_raw && (!e || !t.__v_isReactive)) return t
  const s = e ? _t : ft,
    i = s.get(t)
  if (i) return i
  const o = ht(t)
  if (0 === o) return t
  const c = new Proxy(t, 2 === o ? r : n)
  return s.set(t, c), c
}
function wt(t) {
  return Rt(t) ? wt(t.__v_raw) : !(!t || !t.__v_isReactive)
}
function Rt(t) {
  return !(!t || !t.__v_isReadonly)
}
function bt(t) {
  return wt(t) || Rt(t)
}
function St(t) {
  return (t && St(t.__v_raw)) || t
}
function kt(t) {
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
}
const Et = t => (l(t) ? vt(t) : t)
function jt(t) {
  return Boolean(t && !0 === t.__v_isRef)
}
function mt(t) {
  return xt(t)
}
function Ot(t) {
  return xt(t, !0)
}
class Pt {
  constructor(t, e = !1) {
    ;(this._rawValue = t),
      (this._shallow = e),
      (this.__v_isRef = !0),
      (this._value = e ? t : Et(t))
  }
  get value() {
    return x(St(this), 0, 'value'), this._value
  }
  set value(t) {
    v(St(t), this._rawValue) &&
      ((this._rawValue = t),
      (this._value = this._shallow ? t : Et(t)),
      z(St(this), 'set', 'value', t))
  }
}
function xt(t, e = !1) {
  return jt(t) ? t : new Pt(t, e)
}
function zt(t) {
  z(St(t), 'set', 'value', void 0)
}
function Mt(t) {
  return jt(t) ? t.value : t
}
const At = {
  get: (t, e, n) => Mt(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const s = t[e]
    return jt(s) && !jt(n) ? ((s.value = n), !0) : Reflect.set(t, e, n, r)
  }
}
function Wt(t) {
  return wt(t) ? t : new Proxy(t, At)
}
class Nt {
  constructor(t) {
    this.__v_isRef = !0
    const { get: e, set: n } = t(
      () => x(this, 0, 'value'),
      () => z(this, 'set', 'value')
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
function Vt(t) {
  return new Nt(t)
}
function It(t) {
  const e = o(t) ? new Array(t.length) : {}
  for (const n in t) e[n] = Bt(t, n)
  return e
}
class Kt {
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
function Bt(t, e) {
  return jt(t[e]) ? t[e] : new Kt(t, e)
}
class Ct {
  constructor(t, e, n) {
    ;(this._setter = e),
      (this._dirty = !0),
      (this.__v_isRef = !0),
      (this.effect = R(t, {
        lazy: !0,
        scheduler: () => {
          this._dirty || ((this._dirty = !0), z(St(this), 'set', 'value'))
        }
      })),
      (this.__v_isReadonly = n)
  }
  get value() {
    return (
      this._dirty && ((this._value = this.effect()), (this._dirty = !1)),
      x(St(this), 0, 'value'),
      this._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
function Lt(t) {
  let e, r
  return (
    u(t) ? ((e = t), (r = n)) : ((e = t.get), (r = t.set)),
    new Ct(e, r, u(t) || !t.set)
  )
}
export {
  y as ITERATE_KEY,
  Lt as computed,
  Vt as customRef,
  R as effect,
  O as enableTracking,
  bt as isProxy,
  wt as isReactive,
  Rt as isReadonly,
  jt as isRef,
  kt as markRaw,
  m as pauseTracking,
  Wt as proxyRefs,
  vt as reactive,
  pt as readonly,
  mt as ref,
  P as resetTracking,
  dt as shallowReactive,
  gt as shallowReadonly,
  Ot as shallowRef,
  b as stop,
  St as toRaw,
  Bt as toRef,
  It as toRefs,
  x as track,
  z as trigger,
  zt as triggerRef,
  Mt as unref
}
