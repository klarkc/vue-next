function e(e, t) {
  const n = Object.create(null),
    o = e.split(',')
  for (let r = 0; r < o.length; r++) n[o[r]] = !0
  return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
}
function t(e, t = 0, n = e.length) {
  const o = e.split(/\r?\n/)
  let r = 0
  const s = []
  for (let c = 0; c < o.length; c++)
    if (((r += o[c].length + 1), r >= t)) {
      for (let e = c - 2; e <= c + 2 || n > r; e++) {
        if (e < 0 || e >= o.length) continue
        const i = e + 1
        s.push(`${i}${' '.repeat(Math.max(3 - String(i).length, 0))}|  ${o[e]}`)
        const l = o[e].length
        if (e === c) {
          const e = t - (r - l) + 1,
            o = Math.max(1, n > r ? l - e : n - t)
          s.push('   |  ' + ' '.repeat(e) + '^'.repeat(o))
        } else if (e > c) {
          if (n > r) {
            const e = Math.max(Math.min(n - r, l), 1)
            s.push('   |  ' + '^'.repeat(e))
          }
          r += l + 1
        }
      }
      break
    }
  return s.join('\n')
}
const n = /;(?![^(]*\))/g,
  o = /:(.+)/
const r = e(
    'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot'
  ),
  s = e(
    'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view'
  ),
  c = e('area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr'),
  i = {},
  l = () => {},
  p = () => !1,
  u = /^on[^a-z]/,
  a = Object.assign,
  f = Array.isArray,
  d = e => 'string' == typeof e,
  h = e => 'symbol' == typeof e,
  m = e => null !== e && 'object' == typeof e,
  g = e(
    ',key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  y = e => {
    const t = Object.create(null)
    return n => t[n] || (t[n] = e(n))
  },
  v = /-(\w)/g,
  b = y(e => e.replace(v, (e, t) => (t ? t.toUpperCase() : ''))),
  x = /\B([A-Z])/g,
  S = y(e => e.replace(x, '-$1').toLowerCase()),
  k = y(e => e.charAt(0).toUpperCase() + e.slice(1)),
  N = y(e => (e ? `on${k(e)}` : ''))
function T(e) {
  throw e
}
function $(e, t, n, o) {
  const r = new SyntaxError(String(e))
  return (r.code = e), (r.loc = t), r
}
const w = Symbol(''),
  _ = Symbol(''),
  C = Symbol(''),
  M = Symbol(''),
  O = Symbol(''),
  P = Symbol(''),
  I = Symbol(''),
  V = Symbol(''),
  B = Symbol(''),
  E = Symbol(''),
  L = Symbol(''),
  j = Symbol(''),
  R = Symbol(''),
  A = Symbol(''),
  F = Symbol(''),
  D = Symbol(''),
  H = Symbol(''),
  U = Symbol(''),
  z = Symbol(''),
  J = Symbol(''),
  G = Symbol(''),
  q = Symbol(''),
  K = Symbol(''),
  W = Symbol(''),
  Z = Symbol(''),
  Q = Symbol(''),
  Y = Symbol(''),
  X = Symbol(''),
  ee = Symbol(''),
  te = {
    [w]: 'Fragment',
    [_]: 'Teleport',
    [C]: 'Suspense',
    [M]: 'KeepAlive',
    [O]: 'BaseTransition',
    [P]: 'openBlock',
    [I]: 'createBlock',
    [V]: 'createVNode',
    [B]: 'createCommentVNode',
    [E]: 'createTextVNode',
    [L]: 'createStaticVNode',
    [j]: 'resolveComponent',
    [R]: 'resolveDynamicComponent',
    [A]: 'resolveDirective',
    [F]: 'withDirectives',
    [D]: 'renderList',
    [H]: 'renderSlot',
    [U]: 'createSlots',
    [z]: 'toDisplayString',
    [J]: 'mergeProps',
    [G]: 'toHandlers',
    [q]: 'camelize',
    [K]: 'capitalize',
    [W]: 'toHandlerKey',
    [Z]: 'setBlockTracking',
    [Q]: 'setScopeId',
    [Y]: 'withCtx',
    [X]: 'unref',
    [ee]: 'isRef'
  }
function ne(e) {
  Object.getOwnPropertySymbols(e).forEach(t => {
    te[t] = e[t]
  })
}
const oe = {
  source: '',
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 }
}
function re(e, t = oe) {
  return {
    type: 0,
    children: e,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: void 0,
    loc: t
  }
}
function se(e, t, n, o, r, s, c, i = !1, l = !1, p = oe) {
  return (
    e && (i ? (e.helper(P), e.helper(I)) : e.helper(V), c && e.helper(F)),
    {
      type: 13,
      tag: t,
      props: n,
      children: o,
      patchFlag: r,
      dynamicProps: s,
      directives: c,
      isBlock: i,
      disableTracking: l,
      loc: p
    }
  )
}
function ce(e, t = oe) {
  return { type: 17, loc: t, elements: e }
}
function ie(e, t = oe) {
  return { type: 15, loc: t, properties: e }
}
function le(e, t) {
  return { type: 16, loc: oe, key: d(e) ? pe(e, !0) : e, value: t }
}
function pe(e, t, n = oe, o = 0) {
  return { type: 4, loc: n, content: e, isStatic: t, constType: t ? 3 : o }
}
function ue(e, t) {
  return { type: 5, loc: t, content: d(e) ? pe(e, !1, t) : e }
}
function ae(e, t = oe) {
  return { type: 8, loc: t, children: e }
}
function fe(e, t = [], n = oe) {
  return { type: 14, loc: n, callee: e, arguments: t }
}
function de(e, t, n = !1, o = !1, r = oe) {
  return { type: 18, params: e, returns: t, newline: n, isSlot: o, loc: r }
}
function he(e, t, n, o = !0) {
  return { type: 19, test: e, consequent: t, alternate: n, newline: o, loc: oe }
}
function me(e, t, n = !1) {
  return { type: 20, index: e, value: t, isVNode: n, loc: oe }
}
function ge(e) {
  return { type: 21, body: e, loc: oe }
}
function ye(e) {
  return { type: 22, elements: e, loc: oe }
}
function ve(e, t, n) {
  return { type: 23, test: e, consequent: t, alternate: n, loc: oe }
}
function be(e, t) {
  return { type: 24, left: e, right: t, loc: oe }
}
function xe(e) {
  return { type: 25, expressions: e, loc: oe }
}
function Se(e) {
  return { type: 26, returns: e, loc: oe }
}
const ke = e => 4 === e.type && e.isStatic,
  Ne = (e, t) => e === t || e === S(t)
function Te(e) {
  return Ne(e, 'Teleport')
    ? _
    : Ne(e, 'Suspense')
      ? C
      : Ne(e, 'KeepAlive')
        ? M
        : Ne(e, 'BaseTransition')
          ? O
          : void 0
}
const $e = /^\d|[^\$\w]/,
  we = e => !$e.test(e),
  _e = /^[A-Za-z_$][\w$]*(?:\s*\.\s*[A-Za-z_$][\w$]*|\[[^\]]+\])*$/,
  Ce = e => !!e && _e.test(e.trim())
function Me(e, t, n) {
  const o = {
    source: e.source.substr(t, n),
    start: Oe(e.start, e.source, t),
    end: e.end
  }
  return null != n && (o.end = Oe(e.start, e.source, t + n)), o
}
function Oe(e, t, n = t.length) {
  return Pe(a({}, e), t, n)
}
function Pe(e, t, n = t.length) {
  let o = 0,
    r = -1
  for (let s = 0; s < n; s++) 10 === t.charCodeAt(s) && (o++, (r = s))
  return (
    (e.offset += n),
    (e.line += o),
    (e.column = -1 === r ? e.column + n : n - r),
    e
  )
}
function Ie(e, t) {
  if (!e) throw new Error(t || 'unexpected compiler condition')
}
function Ve(e, t, n = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const r = e.props[o]
    if (7 === r.type && (n || r.exp) && (d(t) ? r.name === t : t.test(r.name)))
      return r
  }
}
function Be(e, t, n = !1, o = !1) {
  for (let r = 0; r < e.props.length; r++) {
    const s = e.props[r]
    if (6 === s.type) {
      if (n) continue
      if (s.name === t && (s.value || o)) return s
    } else if ('bind' === s.name && (s.exp || o) && Ee(s.arg, t)) return s
  }
}
function Ee(e, t) {
  return !(!e || !ke(e) || e.content !== t)
}
function Le(e) {
  return e.props.some(
    e =>
      !(
        7 !== e.type ||
        'bind' !== e.name ||
        (e.arg && 4 === e.arg.type && e.arg.isStatic)
      )
  )
}
function je(e) {
  return 5 === e.type || 2 === e.type
}
function Re(e) {
  return 7 === e.type && 'slot' === e.name
}
function Ae(e) {
  return 1 === e.type && 3 === e.tagType
}
function Fe(e) {
  return 1 === e.type && 2 === e.tagType
}
function De(e, t, n) {
  let o
  const r = 13 === e.type ? e.props : e.arguments[2]
  if (null == r || d(r)) o = ie([t])
  else if (14 === r.type) {
    const e = r.arguments[0]
    d(e) || 15 !== e.type
      ? r.callee === G
        ? (o = fe(n.helper(J), [ie([t]), r]))
        : r.arguments.unshift(ie([t]))
      : e.properties.unshift(t),
      !o && (o = r)
  } else if (15 === r.type) {
    let e = !1
    if (4 === t.key.type) {
      const n = t.key.content
      e = r.properties.some(e => 4 === e.key.type && e.key.content === n)
    }
    e || r.properties.unshift(t), (o = r)
  } else o = fe(n.helper(J), [ie([t]), r])
  13 === e.type ? (e.props = o) : (e.arguments[2] = o)
}
function He(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, '_')}`
}
function Ue(e, t) {
  if (!e || 0 === Object.keys(t).length) return !1
  switch (e.type) {
    case 1:
      for (let n = 0; n < e.props.length; n++) {
        const o = e.props[n]
        if (7 === o.type && (Ue(o.arg, t) || Ue(o.exp, t))) return !0
      }
      return e.children.some(e => Ue(e, t))
    case 11:
      return !!Ue(e.source, t) || e.children.some(e => Ue(e, t))
    case 9:
      return e.branches.some(e => Ue(e, t))
    case 10:
      return !!Ue(e.condition, t) || e.children.some(e => Ue(e, t))
    case 4:
      return !e.isStatic && we(e.content) && !!t[e.content]
    case 8:
      return e.children.some(e => m(e) && Ue(e, t))
    case 5:
    case 12:
      return Ue(e.content, t)
    case 2:
    case 3:
    default:
      return !1
  }
}
const ze = /&(gt|lt|amp|apos|quot);/g,
  Je = { gt: '>', lt: '<', amp: '&', apos: "'", quot: '"' },
  Ge = {
    delimiters: ['{{', '}}'],
    getNamespace: () => 0,
    getTextMode: () => 0,
    isVoidTag: p,
    isPreTag: p,
    isCustomElement: p,
    decodeEntities: e => e.replace(ze, (e, t) => Je[t]),
    onError: T,
    comments: !1
  }
function qe(e, t = {}) {
  const n = (function(e, t) {
      const n = a({}, Ge)
      for (const o in t) n[o] = t[o] || Ge[o]
      return {
        options: n,
        column: 1,
        line: 1,
        offset: 0,
        originalSource: e,
        source: e,
        inPre: !1,
        inVPre: !1
      }
    })(e, t),
    o = it(n)
  return re(Ke(n, 0, []), lt(n, o))
}
function Ke(e, t, n) {
  const o = pt(n),
    r = o ? o.ns : 0,
    s = []
  for (; !ht(e, t, n); ) {
    const c = e.source
    let i
    if (0 === t || 1 === t)
      if (!e.inVPre && ut(c, e.options.delimiters[0])) i = rt(e, t)
      else if (0 === t && '<' === c[0])
        if (1 === c.length);
        else if ('!' === c[1])
          i = ut(c, '\x3c!--')
            ? Qe(e)
            : ut(c, '<!DOCTYPE')
              ? Ye(e)
              : ut(c, '<![CDATA[') && 0 !== r
                ? Ze(e, n)
                : Ye(e)
        else if ('/' === c[1])
          if (2 === c.length);
          else {
            if ('>' === c[2]) {
              at(e, 3)
              continue
            }
            if (/[a-z]/i.test(c[2])) {
              tt(e, 1, o)
              continue
            }
            i = Ye(e)
          }
        else /[a-z]/i.test(c[1]) ? (i = Xe(e, n)) : '?' === c[1] && (i = Ye(e))
    if ((i || (i = st(e, t)), f(i)))
      for (let e = 0; e < i.length; e++) We(s, i[e])
    else We(s, i)
  }
  let c = !1
  if (2 !== t) {
    for (let t = 0; t < s.length; t++) {
      const n = s[t]
      if (!e.inPre && 2 === n.type)
        if (/[^\t\r\n\f ]/.test(n.content))
          n.content = n.content.replace(/[\t\r\n\f ]+/g, ' ')
        else {
          const e = s[t - 1],
            o = s[t + 1]
          !e ||
          !o ||
          3 === e.type ||
          3 === o.type ||
          (1 === e.type && 1 === o.type && /[\r\n]/.test(n.content))
            ? ((c = !0), (s[t] = null))
            : (n.content = ' ')
        }
      3 !== n.type || e.options.comments || ((c = !0), (s[t] = null))
    }
    if (e.inPre && o && e.options.isPreTag(o.tag)) {
      const e = s[0]
      e && 2 === e.type && (e.content = e.content.replace(/^\r?\n/, ''))
    }
  }
  return c ? s.filter(Boolean) : s
}
function We(e, t) {
  if (2 === t.type) {
    const n = pt(e)
    if (n && 2 === n.type && n.loc.end.offset === t.loc.start.offset)
      return (
        (n.content += t.content),
        (n.loc.end = t.loc.end),
        void (n.loc.source += t.loc.source)
      )
  }
  e.push(t)
}
function Ze(e, t) {
  at(e, 9)
  const n = Ke(e, 3, t)
  return 0 === e.source.length || at(e, 3), n
}
function Qe(e) {
  const t = it(e)
  let n
  const o = /--(\!)?>/.exec(e.source)
  if (o) {
    n = e.source.slice(4, o.index)
    const t = e.source.slice(0, o.index)
    let r = 1,
      s = 0
    for (; -1 !== (s = t.indexOf('\x3c!--', r)); ) at(e, s - r + 1), (r = s + 1)
    at(e, o.index + o[0].length - r + 1)
  } else (n = e.source.slice(4)), at(e, e.source.length)
  return { type: 3, content: n, loc: lt(e, t) }
}
function Ye(e) {
  const t = it(e),
    n = '?' === e.source[1] ? 1 : 2
  let o
  const r = e.source.indexOf('>')
  return (
    -1 === r
      ? ((o = e.source.slice(n)), at(e, e.source.length))
      : ((o = e.source.slice(n, r)), at(e, r + 1)),
    { type: 3, content: o, loc: lt(e, t) }
  )
}
function Xe(e, t) {
  const n = e.inPre,
    o = e.inVPre,
    r = pt(t),
    s = tt(e, 0, r),
    c = e.inPre && !n,
    i = e.inVPre && !o
  if (s.isSelfClosing || e.options.isVoidTag(s.tag)) return s
  t.push(s)
  const l = e.options.getTextMode(s, r),
    p = Ke(e, l, t)
  if ((t.pop(), (s.children = p), mt(e.source, s.tag))) tt(e, 1, r)
  else if (0 === e.source.length && 'script' === s.tag.toLowerCase()) {
    const e = p[0]
    e && ut(e.loc.source, '\x3c!--')
  }
  return (
    (s.loc = lt(e, s.loc.start)), c && (e.inPre = !1), i && (e.inVPre = !1), s
  )
}
const et = e('if,else,else-if,for,slot')
function tt(e, t, n) {
  const o = it(e),
    r = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),
    s = r[1],
    c = e.options.getNamespace(s, n)
  at(e, r[0].length), ft(e)
  const i = it(e),
    l = e.source
  let p = nt(e, t)
  e.options.isPreTag(s) && (e.inPre = !0),
    !e.inVPre &&
      p.some(e => 7 === e.type && 'pre' === e.name) &&
      ((e.inVPre = !0),
      a(e, i),
      (e.source = l),
      (p = nt(e, t).filter(e => 'v-pre' !== e.name)))
  let u = !1
  0 === e.source.length || ((u = ut(e.source, '/>')), at(e, u ? 2 : 1))
  let f = 0
  const d = e.options
  if (!e.inVPre && !d.isCustomElement(s)) {
    const e = p.some(e => 7 === e.type && 'is' === e.name)
    d.isNativeTag && !e
      ? d.isNativeTag(s) || (f = 1)
      : (e ||
          Te(s) ||
          (d.isBuiltInComponent && d.isBuiltInComponent(s)) ||
          /^[A-Z]/.test(s) ||
          'component' === s) &&
        (f = 1),
      'slot' === s
        ? (f = 2)
        : 'template' === s && p.some(e => 7 === e.type && et(e.name)) && (f = 3)
  }
  return {
    type: 1,
    ns: c,
    tag: s,
    tagType: f,
    props: p,
    isSelfClosing: u,
    children: [],
    loc: lt(e, o),
    codegenNode: void 0
  }
}
function nt(e, t) {
  const n = [],
    o = new Set()
  for (; e.source.length > 0 && !ut(e.source, '>') && !ut(e.source, '/>'); ) {
    if (ut(e.source, '/')) {
      at(e, 1), ft(e)
      continue
    }
    const r = ot(e, o)
    0 === t && n.push(r), /^[^\t\r\n\f />]/.test(e.source), ft(e)
  }
  return n
}
function ot(e, t) {
  const n = it(e),
    o = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0]
  t.has(o), t.add(o)
  {
    const e = /["'<]/g
    let t
    for (; (t = e.exec(o)); );
  }
  let r
  at(e, o.length),
    /^[\t\r\n\f ]*=/.test(e.source) &&
      (ft(e),
      at(e, 1),
      ft(e),
      (r = (function(e) {
        const t = it(e)
        let n
        const o = e.source[0],
          r = '"' === o || "'" === o
        if (r) {
          at(e, 1)
          const t = e.source.indexOf(o)
          ;-1 === t
            ? (n = ct(e, e.source.length, 4))
            : ((n = ct(e, t, 4)), at(e, 1))
        } else {
          const t = /^[^\t\r\n\f >]+/.exec(e.source)
          if (!t) return
          const o = /["'<=`]/g
          let r
          for (; (r = o.exec(t[0])); );
          n = ct(e, t[0].length, 4)
        }
        return { content: n, isQuoted: r, loc: lt(e, t) }
      })(e)))
  const s = lt(e, n)
  if (!e.inVPre && /^(v-|:|@|#)/.test(o)) {
    const t = /(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(
        o
      ),
      c = t[1] || (ut(o, ':') ? 'bind' : ut(o, '@') ? 'on' : 'slot')
    let i
    if (t[2]) {
      const r = 'slot' === c,
        s = o.indexOf(t[2]),
        l = lt(
          e,
          dt(e, n, s),
          dt(e, n, s + t[2].length + ((r && t[3]) || '').length)
        )
      let p = t[2],
        u = !0
      p.startsWith('[')
        ? ((u = !1), p.endsWith(']'), (p = p.substr(1, p.length - 2)))
        : r && (p += t[3] || ''),
        (i = { type: 4, content: p, isStatic: u, constType: u ? 3 : 0, loc: l })
    }
    if (r && r.isQuoted) {
      const e = r.loc
      e.start.offset++,
        e.start.column++,
        (e.end = Oe(e.start, r.content)),
        (e.source = e.source.slice(1, -1))
    }
    return {
      type: 7,
      name: c,
      exp: r && {
        type: 4,
        content: r.content,
        isStatic: !1,
        constType: 0,
        loc: r.loc
      },
      arg: i,
      modifiers: t[3] ? t[3].substr(1).split('.') : [],
      loc: s
    }
  }
  return {
    type: 6,
    name: o,
    value: r && { type: 2, content: r.content, loc: r.loc },
    loc: s
  }
}
function rt(e, t) {
  const [n, o] = e.options.delimiters,
    r = e.source.indexOf(o, n.length)
  if (-1 === r) return
  const s = it(e)
  at(e, n.length)
  const c = it(e),
    i = it(e),
    l = r - n.length,
    p = e.source.slice(0, l),
    u = ct(e, l, t),
    a = u.trim(),
    f = u.indexOf(a)
  f > 0 && Pe(c, p, f)
  return (
    Pe(i, p, l - (u.length - a.length - f)),
    at(e, o.length),
    {
      type: 5,
      content: {
        type: 4,
        isStatic: !1,
        constType: 0,
        content: a,
        loc: lt(e, c, i)
      },
      loc: lt(e, s)
    }
  )
}
function st(e, t) {
  const n = ['<', e.options.delimiters[0]]
  3 === t && n.push(']]>')
  let o = e.source.length
  for (let s = 0; s < n.length; s++) {
    const t = e.source.indexOf(n[s], 1)
    ;-1 !== t && o > t && (o = t)
  }
  const r = it(e)
  return { type: 2, content: ct(e, o, t), loc: lt(e, r) }
}
function ct(e, t, n) {
  const o = e.source.slice(0, t)
  return (
    at(e, t),
    2 === n || 3 === n || -1 === o.indexOf('&')
      ? o
      : e.options.decodeEntities(o, 4 === n)
  )
}
function it(e) {
  const { column: t, line: n, offset: o } = e
  return { column: t, line: n, offset: o }
}
function lt(e, t, n) {
  return {
    start: t,
    end: (n = n || it(e)),
    source: e.originalSource.slice(t.offset, n.offset)
  }
}
function pt(e) {
  return e[e.length - 1]
}
function ut(e, t) {
  return e.startsWith(t)
}
function at(e, t) {
  const { source: n } = e
  Pe(e, n, t), (e.source = n.slice(t))
}
function ft(e) {
  const t = /^[\t\r\n\f ]+/.exec(e.source)
  t && at(e, t[0].length)
}
function dt(e, t, n) {
  return Oe(t, e.originalSource.slice(t.offset, n), n)
}
function ht(e, t, n) {
  const o = e.source
  switch (t) {
    case 0:
      if (ut(o, '</'))
        for (let e = n.length - 1; e >= 0; --e) if (mt(o, n[e].tag)) return !0
      break
    case 1:
    case 2: {
      const e = pt(n)
      if (e && mt(o, e.tag)) return !0
      break
    }
    case 3:
      if (ut(o, ']]>')) return !0
  }
  return !o
}
function mt(e, t) {
  return (
    ut(e, '</') &&
    e.substr(2, t.length).toLowerCase() === t.toLowerCase() &&
    /[\t\r\n\f />]/.test(e[2 + t.length] || '>')
  )
}
function gt(e, t) {
  vt(e, t, yt(e, e.children[0]))
}
function yt(e, t) {
  const { children: n } = e
  return 1 === n.length && 1 === t.type && !Fe(t)
}
function vt(e, t, n = !1) {
  let o = !1,
    r = !0
  const { children: s } = e
  for (let c = 0; c < s.length; c++) {
    const e = s[c]
    if (1 === e.type && 0 === e.tagType) {
      const s = n ? 0 : bt(e, t)
      if (s > 0) {
        if ((s < 3 && (r = !1), s >= 2)) {
          ;(e.codegenNode.patchFlag = '-1'),
            (e.codegenNode = t.hoist(e.codegenNode)),
            (o = !0)
          continue
        }
      } else {
        const n = e.codegenNode
        if (13 === n.type) {
          const o = kt(n)
          if ((!o || 512 === o || 1 === o) && xt(e, t) >= 2) {
            const o = St(e)
            o && (n.props = t.hoist(o))
          }
        }
      }
    } else if (12 === e.type) {
      const n = bt(e.content, t)
      n > 0 &&
        (n < 3 && (r = !1),
        n >= 2 && ((e.codegenNode = t.hoist(e.codegenNode)), (o = !0)))
    }
    if (1 === e.type) {
      const n = 1 === e.tagType
      n && t.scopes.vSlot++, vt(e, t), n && t.scopes.vSlot--
    } else if (11 === e.type) vt(e, t, 1 === e.children.length)
    else if (9 === e.type)
      for (let n = 0; n < e.branches.length; n++)
        vt(e.branches[n], t, 1 === e.branches[n].children.length)
  }
  r && o && t.transformHoist && t.transformHoist(s, t, e)
}
function bt(e, t) {
  const { constantCache: n } = t
  switch (e.type) {
    case 1:
      if (0 !== e.tagType) return 0
      const o = n.get(e)
      if (void 0 !== o) return o
      const r = e.codegenNode
      if (13 !== r.type) return 0
      if (kt(r)) return n.set(e, 0), 0
      {
        let o = 3
        const s = xt(e, t)
        if (0 === s) return n.set(e, 0), 0
        s < o && (o = s)
        for (let r = 0; r < e.children.length; r++) {
          const s = bt(e.children[r], t)
          if (0 === s) return n.set(e, 0), 0
          s < o && (o = s)
        }
        if (o > 1)
          for (let r = 0; r < e.props.length; r++) {
            const s = e.props[r]
            if (7 === s.type && 'bind' === s.name && s.exp) {
              const r = bt(s.exp, t)
              if (0 === r) return n.set(e, 0), 0
              r < o && (o = r)
            }
          }
        return r.isBlock && ((r.isBlock = !1), t.helper(V)), n.set(e, o), o
      }
    case 2:
    case 3:
      return 3
    case 9:
    case 11:
    case 10:
      return 0
    case 5:
    case 12:
      return bt(e.content, t)
    case 4:
      return e.constType
    case 8:
      let s = 3
      for (let n = 0; n < e.children.length; n++) {
        const o = e.children[n]
        if (d(o) || h(o)) continue
        const r = bt(o, t)
        if (0 === r) return 0
        r < s && (s = r)
      }
      return s
    default:
      return 0
  }
}
function xt(e, t) {
  let n = 3
  const o = St(e)
  if (o && 15 === o.type) {
    const { properties: e } = o
    for (let o = 0; o < e.length; o++) {
      const { key: r, value: s } = e[o],
        c = bt(r, t)
      if (0 === c) return c
      if ((c < n && (n = c), 4 !== s.type)) return 0
      const i = bt(s, t)
      if (0 === i) return i
      i < n && (n = i)
    }
  }
  return n
}
function St(e) {
  const t = e.codegenNode
  if (13 === t.type) return t.props
}
function kt(e) {
  const t = e.patchFlag
  return t ? parseInt(t, 10) : void 0
}
function Nt(
  e,
  {
    filename: t = '',
    prefixIdentifiers: n = !1,
    hoistStatic: o = !1,
    cacheHandlers: r = !1,
    nodeTransforms: s = [],
    directiveTransforms: c = {},
    transformHoist: p = null,
    isBuiltInComponent: u = l,
    isCustomElement: a = l,
    expressionPlugins: f = [],
    scopeId: d = null,
    slotted: h = !0,
    ssr: m = !1,
    ssrCssVars: g = '',
    bindingMetadata: y = i,
    inline: v = !1,
    isTS: x = !1,
    onError: S = T
  }
) {
  const N = t.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/),
    $ = {
      selfName: N && k(b(N[1])),
      prefixIdentifiers: n,
      hoistStatic: o,
      cacheHandlers: r,
      nodeTransforms: s,
      directiveTransforms: c,
      transformHoist: p,
      isBuiltInComponent: u,
      isCustomElement: a,
      expressionPlugins: f,
      scopeId: d,
      slotted: h,
      ssr: m,
      ssrCssVars: g,
      bindingMetadata: y,
      inline: v,
      isTS: x,
      onError: S,
      root: e,
      helpers: new Set(),
      components: new Set(),
      directives: new Set(),
      hoists: [],
      imports: [],
      constantCache: new Map(),
      temps: 0,
      cached: 0,
      identifiers: Object.create(null),
      scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 },
      parent: null,
      currentNode: e,
      childIndex: 0,
      helper: e => ($.helpers.add(e), e),
      helperString: e => `_${te[$.helper(e)]}`,
      replaceNode(e) {
        $.parent.children[$.childIndex] = $.currentNode = e
      },
      removeNode(e) {
        const t = e
          ? $.parent.children.indexOf(e)
          : $.currentNode
            ? $.childIndex
            : -1
        e && e !== $.currentNode
          ? $.childIndex > t && ($.childIndex--, $.onNodeRemoved())
          : (($.currentNode = null), $.onNodeRemoved()),
          $.parent.children.splice(t, 1)
      },
      onNodeRemoved: () => {},
      addIdentifiers(e) {},
      removeIdentifiers(e) {},
      hoist(e) {
        $.hoists.push(e)
        const t = pe(`_hoisted_${$.hoists.length}`, !1, e.loc, 2)
        return (t.hoisted = e), t
      },
      cache: (e, t = !1) => me(++$.cached, e, t)
    }
  return $
}
function Tt(e, t) {
  const n = Nt(e, t)
  $t(e, n),
    t.hoistStatic && gt(e, n),
    t.ssr ||
      (function(e, t) {
        const { helper: n } = t,
          { children: o } = e
        if (1 === o.length) {
          const t = o[0]
          if (yt(e, t) && t.codegenNode) {
            const o = t.codegenNode
            13 === o.type && ((o.isBlock = !0), n(P), n(I)), (e.codegenNode = o)
          } else e.codegenNode = t
        } else if (o.length > 1) {
          let o = 64
          e.codegenNode = se(
            t,
            n(w),
            void 0,
            e.children,
            o + '',
            void 0,
            void 0,
            !0
          )
        }
      })(e, n),
    (e.helpers = [...n.helpers]),
    (e.components = [...n.components]),
    (e.directives = [...n.directives]),
    (e.imports = n.imports),
    (e.hoists = n.hoists),
    (e.temps = n.temps),
    (e.cached = n.cached)
}
function $t(e, t) {
  t.currentNode = e
  const { nodeTransforms: n } = t,
    o = []
  for (let s = 0; s < n.length; s++) {
    const r = n[s](e, t)
    if ((r && (f(r) ? o.push(...r) : o.push(r)), !t.currentNode)) return
    e = t.currentNode
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(B)
      break
    case 5:
      t.ssr || t.helper(z)
      break
    case 9:
      for (let n = 0; n < e.branches.length; n++) $t(e.branches[n], t)
      break
    case 10:
    case 11:
    case 1:
    case 0:
      !(function(e, t) {
        let n = 0
        const o = () => {
          n--
        }
        for (; n < e.children.length; n++) {
          const r = e.children[n]
          d(r) ||
            ((t.parent = e),
            (t.childIndex = n),
            (t.onNodeRemoved = o),
            $t(r, t))
        }
      })(e, t)
  }
  t.currentNode = e
  let r = o.length
  for (; r--; ) o[r]()
}
function wt(e, t) {
  const n = d(e) ? t => t === e : t => e.test(t)
  return (e, o) => {
    if (1 === e.type) {
      const { props: r } = e
      if (3 === e.tagType && r.some(Re)) return
      const s = []
      for (let c = 0; c < r.length; c++) {
        const i = r[c]
        if (7 === i.type && n(i.name)) {
          r.splice(c, 1), c--
          const n = t(e, i, o)
          n && s.push(n)
        }
      }
      return s
    }
  }
}
function _t(e, t = {}) {
  const n = (function(
    e,
    {
      mode: t = 'function',
      prefixIdentifiers: n = 'module' === t,
      sourceMap: o = !1,
      filename: r = 'template.vue.html',
      scopeId: s = null,
      optimizeImports: c = !1,
      runtimeGlobalName: i = 'Vue',
      runtimeModuleName: l = 'vue',
      ssr: p = !1
    }
  ) {
    const u = {
      mode: t,
      prefixIdentifiers: n,
      sourceMap: o,
      filename: r,
      scopeId: s,
      optimizeImports: c,
      runtimeGlobalName: i,
      runtimeModuleName: l,
      ssr: p,
      source: e.loc.source,
      code: '',
      column: 1,
      line: 1,
      offset: 0,
      indentLevel: 0,
      pure: !1,
      map: void 0,
      helper: e => `_${te[e]}`,
      push(e, t) {
        u.code += e
      },
      indent() {
        a(++u.indentLevel)
      },
      deindent(e = !1) {
        e ? --u.indentLevel : a(--u.indentLevel)
      },
      newline() {
        a(u.indentLevel)
      }
    }
    function a(e) {
      u.push('\n' + '  '.repeat(e))
    }
    return u
  })(e, t)
  t.onContextCreated && t.onContextCreated(n)
  const {
      mode: o,
      push: r,
      prefixIdentifiers: s,
      indent: c,
      deindent: i,
      newline: l,
      ssr: p
    } = n,
    u = e.helpers.length > 0,
    a = !s && 'module' !== o
  !(function(e, t) {
    const { push: n, newline: o, runtimeGlobalName: r } = t,
      s = r,
      c = e => `${te[e]}: _${te[e]}`
    if (e.helpers.length > 0 && (n(`const _Vue = ${s}\n`), e.hoists.length)) {
      n(
        `const { ${[V, B, E, L]
          .filter(t => e.helpers.includes(t))
          .map(c)
          .join(', ')} } = _Vue\n`
      )
    }
    ;(function(e, t) {
      if (!e.length) return
      t.pure = !0
      const { push: n, newline: o } = t
      o(),
        e.forEach((e, r) => {
          e && (n(`const _hoisted_${r + 1} = `), Pt(e, t), o())
        }),
        (t.pure = !1)
    })(e.hoists, t),
      o(),
      n('return ')
  })(e, n)
  if (
    (r(
      `function ${p ? 'ssrRender' : 'render'}(${(p
        ? ['_ctx', '_push', '_parent', '_attrs']
        : ['_ctx', '_cache']
      ).join(', ')}) {`
    ),
    c(),
    a &&
      (r('with (_ctx) {'),
      c(),
      u &&
        (r(
          `const { ${e.helpers
            .map(e => `${te[e]}: _${te[e]}`)
            .join(', ')} } = _Vue`
        ),
        r('\n'),
        l())),
    e.components.length &&
      (Ct(e.components, 'component', n),
      (e.directives.length || e.temps > 0) && l()),
    e.directives.length &&
      (Ct(e.directives, 'directive', n), e.temps > 0 && l()),
    e.temps > 0)
  ) {
    r('let ')
    for (let t = 0; t < e.temps; t++) r(`${t > 0 ? ', ' : ''}_temp${t}`)
  }
  return (
    (e.components.length || e.directives.length || e.temps) && (r('\n'), l()),
    p || r('return '),
    e.codegenNode ? Pt(e.codegenNode, n) : r('null'),
    a && (i(), r('}')),
    i(),
    r('}'),
    { ast: e, code: n.code, preamble: '', map: n.map ? n.map.toJSON() : void 0 }
  )
}
function Ct(e, t, { helper: n, push: o, newline: r }) {
  const s = n('component' === t ? j : A)
  for (let c = 0; c < e.length; c++) {
    const n = e[c]
    o(`const ${He(n, t)} = ${s}(${JSON.stringify(n)})`), c < e.length - 1 && r()
  }
}
function Mt(e, t) {
  const n = e.length > 3 || !1
  t.push('['), n && t.indent(), Ot(e, t, n), n && t.deindent(), t.push(']')
}
function Ot(e, t, n = !1, o = !0) {
  const { push: r, newline: s } = t
  for (let c = 0; c < e.length; c++) {
    const i = e[c]
    d(i) ? r(i) : f(i) ? Mt(i, t) : Pt(i, t),
      c < e.length - 1 && (n ? (o && r(','), s()) : o && r(', '))
  }
}
function Pt(e, t) {
  if (d(e)) t.push(e)
  else if (h(e)) t.push(t.helper(e))
  else
    switch (e.type) {
      case 1:
      case 9:
      case 11:
        Pt(e.codegenNode, t)
        break
      case 2:
        !(function(e, t) {
          t.push(JSON.stringify(e.content), e)
        })(e, t)
        break
      case 4:
        It(e, t)
        break
      case 5:
        !(function(e, t) {
          const { push: n, helper: o, pure: r } = t
          r && n('/*#__PURE__*/')
          n(`${o(z)}(`), Pt(e.content, t), n(')')
        })(e, t)
        break
      case 12:
        Pt(e.codegenNode, t)
        break
      case 8:
        Vt(e, t)
        break
      case 3:
        break
      case 13:
        !(function(e, t) {
          const { push: n, helper: o, pure: r } = t,
            {
              tag: s,
              props: c,
              children: i,
              patchFlag: l,
              dynamicProps: p,
              directives: u,
              isBlock: a,
              disableTracking: f
            } = e
          u && n(o(F) + '(')
          a && n(`(${o(P)}(${f ? 'true' : ''}), `)
          r && n('/*#__PURE__*/')
          n(o(a ? I : V) + '(', e),
            Ot(
              (function(e) {
                let t = e.length
                for (; t-- && null == e[t]; );
                return e.slice(0, t + 1).map(e => e || 'null')
              })([s, c, i, l, p]),
              t
            ),
            n(')'),
            a && n(')')
          u && (n(', '), Pt(u, t), n(')'))
        })(e, t)
        break
      case 14:
        !(function(e, t) {
          const { push: n, helper: o, pure: r } = t,
            s = d(e.callee) ? e.callee : o(e.callee)
          r && n('/*#__PURE__*/')
          n(s + '(', e), Ot(e.arguments, t), n(')')
        })(e, t)
        break
      case 15:
        !(function(e, t) {
          const { push: n, indent: o, deindent: r, newline: s } = t,
            { properties: c } = e
          if (!c.length) return void n('{}', e)
          const i = c.length > 1 || !1
          n(i ? '{' : '{ '), i && o()
          for (let l = 0; l < c.length; l++) {
            const { key: e, value: o } = c[l]
            Bt(e, t), n(': '), Pt(o, t), l < c.length - 1 && (n(','), s())
          }
          i && r(), n(i ? '}' : ' }')
        })(e, t)
        break
      case 17:
        !(function(e, t) {
          Mt(e.elements, t)
        })(e, t)
        break
      case 18:
        !(function(e, t) {
          const { push: n, indent: o, deindent: r } = t,
            { params: s, returns: c, body: i, newline: l, isSlot: p } = e
          p && n(`_${te[Y]}(`)
          n('(', e), f(s) ? Ot(s, t) : s && Pt(s, t)
          n(') => '), (l || i) && (n('{'), o())
          c ? (l && n('return '), f(c) ? Mt(c, t) : Pt(c, t)) : i && Pt(i, t)
          ;(l || i) && (r(), n('}'))
          p && n(')')
        })(e, t)
        break
      case 19:
        !(function(e, t) {
          const { test: n, consequent: o, alternate: r, newline: s } = e,
            { push: c, indent: i, deindent: l, newline: p } = t
          if (4 === n.type) {
            const e = !we(n.content)
            e && c('('), It(n, t), e && c(')')
          } else c('('), Pt(n, t), c(')')
          s && i(),
            t.indentLevel++,
            s || c(' '),
            c('? '),
            Pt(o, t),
            t.indentLevel--,
            s && p(),
            s || c(' '),
            c(': ')
          const u = 19 === r.type
          u || t.indentLevel++
          Pt(r, t), u || t.indentLevel--
          s && l(!0)
        })(e, t)
        break
      case 20:
        !(function(e, t) {
          const { push: n, helper: o, indent: r, deindent: s, newline: c } = t
          n(`_cache[${e.index}] || (`),
            e.isVNode && (r(), n(`${o(Z)}(-1),`), c())
          n(`_cache[${e.index}] = `),
            Pt(e.value, t),
            e.isVNode &&
              (n(','), c(), n(`${o(Z)}(1),`), c(), n(`_cache[${e.index}]`), s())
          n(')')
        })(e, t)
    }
}
function It(e, t) {
  const { content: n, isStatic: o } = e
  t.push(o ? JSON.stringify(n) : n, e)
}
function Vt(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const o = e.children[n]
    d(o) ? t.push(o) : Pt(o, t)
  }
}
function Bt(e, t) {
  const { push: n } = t
  if (8 === e.type) n('['), Vt(e, t), n(']')
  else if (e.isStatic) {
    n(we(e.content) ? e.content : JSON.stringify(e.content), e)
  } else n(`[${e.content}]`, e)
}
const Et = (e, t) => {
  if (5 === e.type) e.content = Lt(e.content)
  else if (1 === e.type)
    for (let n = 0; n < e.props.length; n++) {
      const o = e.props[n]
      if (7 === o.type && 'for' !== o.name) {
        const e = o.exp,
          n = o.arg
        !e ||
          4 !== e.type ||
          ('on' === o.name && n) ||
          (o.exp = Lt(e, t, 'slot' === o.name)),
          n && 4 === n.type && !n.isStatic && (o.arg = Lt(n))
      }
    }
}
function Lt(e, t, n = !1, o = !1) {
  return e
}
const jt = wt(/^(if|else|else-if)$/, (e, t, n) =>
  Rt(e, t, n, (e, t, o) => {
    const r = n.parent.children
    let s = r.indexOf(e),
      c = 0
    for (; s-- >= 0; ) {
      const e = r[s]
      e && 9 === e.type && (c += e.branches.length)
    }
    return () => {
      if (o) e.codegenNode = Ft(t, c, n)
      else {
        ;(function(e) {
          for (;;)
            if (19 === e.type) {
              if (19 !== e.alternate.type) return e
              e = e.alternate
            } else 20 === e.type && (e = e.value)
        })(e.codegenNode).alternate = Ft(t, c + e.branches.length - 1, n)
      }
    }
  })
)
function Rt(e, t, n, o) {
  if (!('else' === t.name || (t.exp && t.exp.content.trim()))) {
    t.exp = pe('true', !1, t.exp ? t.exp.loc : e.loc)
  }
  if ('if' === t.name) {
    const r = At(e, t),
      s = { type: 9, loc: e.loc, branches: [r] }
    if ((n.replaceNode(s), o)) return o(s, r, !0)
  } else {
    const r = n.parent.children
    let s = r.indexOf(e)
    for (; s-- >= -1; ) {
      const c = r[s]
      if (!c || 2 !== c.type || c.content.trim().length) {
        if (c && 9 === c.type) {
          n.removeNode()
          const r = At(e, t)
          c.branches.push(r)
          const s = o && o(c, r, !1)
          $t(r, n), s && s(), (n.currentNode = null)
        }
        break
      }
      n.removeNode(c)
    }
  }
}
function At(e, t) {
  return {
    type: 10,
    loc: e.loc,
    condition: 'else' === t.name ? void 0 : t.exp,
    children: 3 !== e.tagType || Ve(e, 'for') ? [e] : e.children,
    userKey: Be(e, 'key')
  }
}
function Ft(e, t, n) {
  return e.condition
    ? he(e.condition, Dt(e, t, n), fe(n.helper(B), ['""', 'true']))
    : Dt(e, t, n)
}
function Dt(e, t, n) {
  const { helper: o } = n,
    r = le('key', pe(`${t}`, !1, oe, 2)),
    { children: s } = e,
    c = s[0]
  if (1 !== s.length || 1 !== c.type) {
    if (1 === s.length && 11 === c.type) {
      const e = c.codegenNode
      return De(e, r, n), e
    }
    return se(n, o(w), ie([r]), s, '64', void 0, void 0, !0, !1, e.loc)
  }
  {
    const e = c.codegenNode
    return 13 === e.type && ((e.isBlock = !0), o(P), o(I)), De(e, r, n), e
  }
}
const Ht = wt('for', (e, t, n) => {
  const { helper: o } = n
  return Ut(e, t, n, t => {
    const r = fe(o(D), [t.source]),
      s = Be(e, 'key'),
      c = s ? le('key', 6 === s.type ? pe(s.value.content, !0) : s.exp) : null,
      i = 4 === t.source.type && t.source.constType > 0,
      l = i ? 64 : s ? 128 : 256
    return (
      (t.codegenNode = se(
        n,
        o(w),
        void 0,
        r,
        l + '',
        void 0,
        void 0,
        !0,
        !i,
        e.loc
      )),
      () => {
        let s
        const l = Ae(e),
          { children: p } = t,
          u = 1 !== p.length || 1 !== p[0].type,
          a = Fe(e)
            ? e
            : l && 1 === e.children.length && Fe(e.children[0])
              ? e.children[0]
              : null
        a
          ? ((s = a.codegenNode), l && c && De(s, c, n))
          : u
            ? (s = se(
                n,
                o(w),
                c ? ie([c]) : void 0,
                e.children,
                '64',
                void 0,
                void 0,
                !0
              ))
            : ((s = p[0].codegenNode),
              l && c && De(s, c, n),
              (s.isBlock = !i),
              s.isBlock ? (o(P), o(I)) : o(V)),
          r.arguments.push(de(Wt(t.parseResult), s, !0))
      }
    )
  })
})
function Ut(e, t, n, o) {
  if (!t.exp) return
  const r = qt(t.exp)
  if (!r) return
  const { scopes: s } = n,
    { source: c, value: i, key: l, index: p } = r,
    u = {
      type: 11,
      loc: t.loc,
      source: c,
      valueAlias: i,
      keyAlias: l,
      objectIndexAlias: p,
      parseResult: r,
      children: Ae(e) ? e.children : [e]
    }
  n.replaceNode(u), s.vFor++
  const a = o && o(u)
  return () => {
    s.vFor--, a && a()
  }
}
const zt = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
  Jt = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
  Gt = /^\(|\)$/g
function qt(e, t) {
  const n = e.loc,
    o = e.content,
    r = o.match(zt)
  if (!r) return
  const [, s, c] = r,
    i = {
      source: Kt(n, c.trim(), o.indexOf(c, s.length)),
      value: void 0,
      key: void 0,
      index: void 0
    }
  let l = s
    .trim()
    .replace(Gt, '')
    .trim()
  const p = s.indexOf(l),
    u = l.match(Jt)
  if (u) {
    l = l.replace(Jt, '').trim()
    const e = u[1].trim()
    let t
    if (
      (e && ((t = o.indexOf(e, p + l.length)), (i.key = Kt(n, e, t))), u[2])
    ) {
      const r = u[2].trim()
      r &&
        (i.index = Kt(n, r, o.indexOf(r, i.key ? t + e.length : p + l.length)))
    }
  }
  return l && (i.value = Kt(n, l, p)), i
}
function Kt(e, t, n) {
  return pe(t, !1, Me(e, n, t.length))
}
function Wt({ value: e, key: t, index: n }) {
  const o = []
  return (
    e && o.push(e),
    t && (e || o.push(pe('_', !1)), o.push(t)),
    n && (t || (e || o.push(pe('_', !1)), o.push(pe('__', !1))), o.push(n)),
    o
  )
}
const Zt = pe('undefined', !1),
  Qt = (e, t) => {
    if (1 === e.type && (1 === e.tagType || 3 === e.tagType)) {
      const n = Ve(e, 'slot')
      if (n)
        return (
          t.scopes.vSlot++,
          () => {
            t.scopes.vSlot--
          }
        )
    }
  },
  Yt = (e, t) => {
    let n
    if (Ae(e) && e.props.some(Re) && (n = Ve(e, 'for'))) {
      const e = (n.parseResult = qt(n.exp))
      if (e) {
        const { value: n, key: o, index: r } = e,
          { addIdentifiers: s, removeIdentifiers: c } = t
        return (
          n && s(n),
          o && s(o),
          r && s(r),
          () => {
            n && c(n), o && c(o), r && c(r)
          }
        )
      }
    }
  },
  Xt = (e, t, n) => de(e, t, !1, !0, t.length ? t[0].loc : n)
function en(e, t, n = Xt) {
  t.helper(Y)
  const { children: o, loc: r } = e,
    s = [],
    c = [],
    i = (e, t) => le('default', n(e, t, r))
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0
  const p = Ve(e, 'slot', !0)
  if (p) {
    const { arg: e, exp: t } = p
    e && !ke(e) && (l = !0), s.push(le(e || pe('default', !0), n(t, o, r)))
  }
  let u = !1,
    a = !1
  const f = [],
    d = new Set()
  for (let g = 0; g < o.length; g++) {
    const e = o[g]
    let r
    if (!Ae(e) || !(r = Ve(e, 'slot', !0))) {
      3 !== e.type && f.push(e)
      continue
    }
    if (p) break
    u = !0
    const { children: i, loc: h } = e,
      { arg: m = pe('default', !0), exp: y } = r
    let v
    ke(m) ? (v = m ? m.content : 'default') : (l = !0)
    const b = n(y, i, h)
    let x, S, k
    if ((x = Ve(e, 'if'))) (l = !0), c.push(he(x.exp, tn(m, b), Zt))
    else if ((S = Ve(e, /^else(-if)?$/, !0))) {
      let e,
        t = g
      for (; t-- && ((e = o[t]), 3 === e.type); );
      if (e && Ae(e) && Ve(e, 'if')) {
        o.splice(g, 1), g--
        let e = c[c.length - 1]
        for (; 19 === e.alternate.type; ) e = e.alternate
        e.alternate = S.exp ? he(S.exp, tn(m, b), Zt) : tn(m, b)
      }
    } else if ((k = Ve(e, 'for'))) {
      l = !0
      const e = k.parseResult || qt(k.exp)
      e && c.push(fe(t.helper(D), [e.source, de(Wt(e), tn(m, b), !0)]))
    } else {
      if (v) {
        if (d.has(v)) continue
        d.add(v), 'default' === v && (a = !0)
      }
      s.push(le(m, b))
    }
  }
  p || (u ? f.length && (a || s.push(i(void 0, f))) : s.push(i(void 0, o)))
  const h = l ? 2 : nn(e.children) ? 3 : 1
  let m = ie(s.concat(le('_', pe(h + '', !1))), r)
  return (
    c.length && (m = fe(t.helper(U), [m, ce(c)])),
    { slots: m, hasDynamicSlots: l }
  )
}
function tn(e, t) {
  return ie([le('name', e), le('fn', t)])
}
function nn(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t]
    switch (n.type) {
      case 1:
        if (2 === n.tagType || (0 === n.tagType && nn(n.children))) return !0
        break
      case 9:
        if (nn(n.branches)) return !0
        break
      case 10:
      case 11:
        if (nn(n.children)) return !0
    }
  }
  return !1
}
const on = new WeakMap(),
  rn = (e, t) => {
    if (1 === e.type && (0 === e.tagType || 1 === e.tagType))
      return function() {
        const { tag: n, props: o } = e,
          r = 1 === e.tagType,
          s = r ? sn(e, t) : `"${n}"`
        let c,
          i,
          l,
          p,
          u,
          a,
          f = 0,
          d =
            (m(s) && s.callee === R) ||
            s === _ ||
            s === C ||
            (!r && ('svg' === n || 'foreignObject' === n || Be(e, 'key', !0)))
        if (o.length > 0) {
          const n = cn(e, t)
          ;(c = n.props), (f = n.patchFlag), (u = n.dynamicPropNames)
          const o = n.directives
          a =
            o && o.length
              ? ce(
                  o.map(e =>
                    (function(e, t) {
                      const n = [],
                        o = on.get(e)
                      o
                        ? n.push(t.helperString(o))
                        : (t.helper(A),
                          t.directives.add(e.name),
                          n.push(He(e.name, 'directive')))
                      const { loc: r } = e
                      e.exp && n.push(e.exp)
                      e.arg && (e.exp || n.push('void 0'), n.push(e.arg))
                      if (Object.keys(e.modifiers).length) {
                        e.arg || (e.exp || n.push('void 0'), n.push('void 0'))
                        const t = pe('true', !1, r)
                        n.push(ie(e.modifiers.map(e => le(e, t)), r))
                      }
                      return ce(n, e.loc)
                    })(e, t)
                  )
                )
              : void 0
        }
        if (e.children.length > 0) {
          s === M && ((d = !0), (f |= 1024))
          if (r && s !== _ && s !== M) {
            const { slots: n, hasDynamicSlots: o } = en(e, t)
            ;(i = n), o && (f |= 1024)
          } else if (1 === e.children.length && s !== _) {
            const n = e.children[0],
              o = n.type,
              r = 5 === o || 8 === o
            r && 0 === bt(n, t) && (f |= 1), (i = r || 2 === o ? n : e.children)
          } else i = e.children
        }
        0 !== f &&
          ((l = String(f)),
          u &&
            u.length &&
            (p = (function(e) {
              let t = '['
              for (let n = 0, o = e.length; n < o; n++)
                (t += JSON.stringify(e[n])), n < o - 1 && (t += ', ')
              return t + ']'
            })(u))),
          (e.codegenNode = se(t, s, c, i, l, p, a, !!d, !1, e.loc))
      }
  }
function sn(e, t, n = !1) {
  const { tag: o } = e,
    r = 'component' === e.tag ? Be(e, 'is') : Ve(e, 'is')
  if (r) {
    const e = 6 === r.type ? r.value && pe(r.value.content, !0) : r.exp
    if (e) return fe(t.helper(R), [e])
  }
  const s = Te(o) || t.isBuiltInComponent(o)
  return s
    ? (n || t.helper(s), s)
    : (t.helper(j), t.components.add(o), He(o, 'component'))
}
function cn(e, t, n = e.props, o = !1) {
  const { tag: r, loc: s } = e,
    c = 1 === e.tagType
  let i = []
  const l = [],
    p = []
  let a = 0,
    f = !1,
    d = !1,
    m = !1,
    y = !1,
    v = !1,
    b = !1
  const x = [],
    S = ({ key: e, value: n }) => {
      if (ke(e)) {
        const o = e.content,
          r = (e => u.test(e))(o)
        if (
          (c ||
            !r ||
            'onclick' === o.toLowerCase() ||
            'onUpdate:modelValue' === o ||
            g(o) ||
            (y = !0),
          r && g(o) && (b = !0),
          20 === n.type || ((4 === n.type || 8 === n.type) && bt(n, t) > 0))
        )
          return
        'ref' === o
          ? (f = !0)
          : 'class' !== o || c
            ? 'style' !== o || c
              ? 'key' === o || x.includes(o) || x.push(o)
              : (m = !0)
            : (d = !0)
      } else v = !0
    }
  for (let u = 0; u < n.length; u++) {
    const c = n[u]
    if (6 === c.type) {
      const { loc: e, name: t, value: n } = c
      let o = !0
      if (('ref' === t && (f = !0), 'is' === t && 'component' === r)) continue
      i.push(
        le(
          pe(t, !0, Me(e, 0, t.length)),
          pe(n ? n.content : '', o, n ? n.loc : e)
        )
      )
    } else {
      const { name: n, arg: u, exp: a, loc: f } = c,
        d = 'bind' === n,
        m = 'on' === n
      if ('slot' === n) continue
      if ('once' === n) continue
      if ('is' === n || (d && 'component' === r && Ee(u, 'is'))) continue
      if (m && o) continue
      if (!u && (d || m)) {
        ;(v = !0),
          a &&
            (i.length && (l.push(ie(ln(i), s)), (i = [])),
            l.push(
              d ? a : { type: 14, loc: f, callee: t.helper(G), arguments: [a] }
            ))
        continue
      }
      const g = t.directiveTransforms[n]
      if (g) {
        const { props: n, needRuntime: r } = g(c, e, t)
        !o && n.forEach(S), i.push(...n), r && (p.push(c), h(r) && on.set(c, r))
      } else p.push(c)
    }
  }
  let k
  return (
    l.length
      ? (i.length && l.push(ie(ln(i), s)),
        (k = l.length > 1 ? fe(t.helper(J), l, s) : l[0]))
      : i.length && (k = ie(ln(i), s)),
    v
      ? (a |= 16)
      : (d && (a |= 2), m && (a |= 4), x.length && (a |= 8), y && (a |= 32)),
    (0 !== a && 32 !== a) || !(f || b || p.length > 0) || (a |= 512),
    { props: k, directives: p, patchFlag: a, dynamicPropNames: x }
  )
}
function ln(e) {
  const t = new Map(),
    n = []
  for (let o = 0; o < e.length; o++) {
    const r = e[o]
    if (8 === r.key.type || !r.key.isStatic) {
      n.push(r)
      continue
    }
    const s = r.key.content,
      c = t.get(s)
    c
      ? ('style' === s || 'class' === s || s.startsWith('on')) && pn(c, r)
      : (t.set(s, r), n.push(r))
  }
  return n
}
function pn(e, t) {
  17 === e.value.type
    ? e.value.elements.push(t.value)
    : (e.value = ce([e.value, t.value], e.loc))
}
const un = (e, t) => {
  if (Fe(e)) {
    const { children: n, loc: o } = e,
      { slotName: r, slotProps: s } = an(e, t),
      c = [t.prefixIdentifiers ? '_ctx.$slots' : '$slots', r]
    s && c.push(s),
      n.length && (s || c.push('{}'), c.push(de([], n, !1, !1, o))),
      t.slotted &&
        (s || c.push('{}'), n.length || c.push('undefined'), c.push('true')),
      (e.codegenNode = fe(t.helper(H), c, o))
  }
}
function an(e, t) {
  let n,
    o = '"default"'
  const r = []
  for (let s = 0; s < e.props.length; s++) {
    const t = e.props[s]
    6 === t.type
      ? t.value &&
        ('name' === t.name
          ? (o = JSON.stringify(t.value.content))
          : ((t.name = b(t.name)), r.push(t)))
      : 'bind' === t.name && Ee(t.arg, 'name')
        ? t.exp && (o = t.exp)
        : ('bind' === t.name &&
            t.arg &&
            ke(t.arg) &&
            (t.arg.content = b(t.arg.content)),
          r.push(t))
  }
  if (r.length > 0) {
    const { props: o, directives: s } = cn(e, t, r)
    n = o
  }
  return { slotName: o, slotProps: n }
}
const fn = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/,
  dn = (e, t, n, o) => {
    const { loc: r, modifiers: s, arg: c } = e
    let i
    if (4 === c.type)
      if (c.isStatic) {
        i = pe(N(b(c.content)), !0, c.loc)
      } else i = ae([`${n.helperString(W)}(`, c, ')'])
    else
      (i = c), i.children.unshift(`${n.helperString(W)}(`), i.children.push(')')
    let l = e.exp
    l && !l.content.trim() && (l = void 0)
    let p = n.cacheHandlers && !l
    if (l) {
      const e = Ce(l.content),
        t = !(e || fn.test(l.content)),
        n = l.content.includes(';')
      ;(t || (p && e)) &&
        (l = ae([
          `${t ? '$event' : '(...args)'} => ${n ? '{' : '('}`,
          l,
          n ? '}' : ')'
        ]))
    }
    let u = { props: [le(i, l || pe('() => {}', !1, r))] }
    return (
      o && (u = o(u)), p && (u.props[0].value = n.cache(u.props[0].value)), u
    )
  },
  hn = (e, t, n) => {
    const { exp: o, modifiers: r, loc: s } = e,
      c = e.arg
    return (
      4 !== c.type
        ? (c.children.unshift('('), c.children.push(') || ""'))
        : c.isStatic || (c.content = `${c.content} || ""`),
      r.includes('camel') &&
        (4 === c.type
          ? (c.content = c.isStatic
              ? b(c.content)
              : `${n.helperString(q)}(${c.content})`)
          : (c.children.unshift(`${n.helperString(q)}(`),
            c.children.push(')'))),
      !o || (4 === o.type && !o.content.trim())
        ? { props: [le(c, pe('', !0, s))] }
        : { props: [le(c, o)] }
    )
  },
  mn = (e, t) => {
    if (0 === e.type || 1 === e.type || 11 === e.type || 10 === e.type)
      return () => {
        const n = e.children
        let o,
          r = !1
        for (let e = 0; e < n.length; e++) {
          const t = n[e]
          if (je(t)) {
            r = !0
            for (let r = e + 1; r < n.length; r++) {
              const s = n[r]
              if (!je(s)) {
                o = void 0
                break
              }
              o || (o = n[e] = { type: 8, loc: t.loc, children: [t] }),
                o.children.push(' + ', s),
                n.splice(r, 1),
                r--
            }
          }
        }
        if (
          r &&
          (1 !== n.length ||
            (0 !== e.type && (1 !== e.type || 0 !== e.tagType)))
        )
          for (let e = 0; e < n.length; e++) {
            const o = n[e]
            if (je(o) || 8 === o.type) {
              const r = []
              ;(2 === o.type && ' ' === o.content) || r.push(o),
                t.ssr || 0 !== bt(o, t) || r.push('1'),
                (n[e] = {
                  type: 12,
                  content: o,
                  loc: o.loc,
                  codegenNode: fe(t.helper(E), r)
                })
            }
          }
      }
  },
  gn = new WeakSet(),
  yn = (e, t) => {
    if (1 === e.type && Ve(e, 'once', !0)) {
      if (gn.has(e)) return
      return (
        gn.add(e),
        t.helper(Z),
        () => {
          const e = t.currentNode
          e.codegenNode && (e.codegenNode = t.cache(e.codegenNode, !0))
        }
      )
    }
  },
  vn = (e, t, n) => {
    const { exp: o, arg: r } = e
    if (!o) return bn()
    const s = o.loc.source
    if (!Ce(4 === o.type ? o.content : s)) return bn()
    const c = r || pe('modelValue', !0),
      i = r
        ? ke(r)
          ? `onUpdate:${r.content}`
          : ae(['"onUpdate:" + ', r])
        : 'onUpdate:modelValue'
    let l
    l = ae([`${n.isTS ? '($event: any)' : '$event'} => (`, o, ' = $event)'])
    const p = [le(c, e.exp), le(i, l)]
    if (e.modifiers.length && 1 === t.tagType) {
      const t = e.modifiers
          .map(e => (we(e) ? e : JSON.stringify(e)) + ': true')
          .join(', '),
        n = r
          ? ke(r)
            ? `${r.content}Modifiers`
            : ae([r, ' + "Modifiers"'])
          : 'modelModifiers'
      p.push(le(n, pe(`{ ${t} }`, !1, e.loc, 2)))
    }
    return bn(p)
  }
function bn(e = []) {
  return { props: e }
}
function xn(e) {
  return [[yn, jt, Ht, un, rn, Qt, mn], { on: dn, bind: hn, model: vn }]
}
function Sn(e, t = {}) {
  const n = t.onError || T,
    o = 'module' === t.mode
  !0 === t.prefixIdentifiers ? n($(45)) : o && n($(46))
  t.cacheHandlers && n($(47)), t.scopeId && !o && n($(48))
  const r = d(e) ? qe(e, t) : e,
    [s, c] = xn()
  return (
    Tt(
      r,
      a({}, t, {
        prefixIdentifiers: false,
        nodeTransforms: [...s, ...(t.nodeTransforms || [])],
        directiveTransforms: a({}, c, t.directiveTransforms || {})
      })
    ),
    _t(r, a({}, t, { prefixIdentifiers: false }))
  )
}
const kn = () => ({ props: [] }),
  Nn = Symbol(''),
  Tn = Symbol(''),
  $n = Symbol(''),
  wn = Symbol(''),
  _n = Symbol(''),
  Cn = Symbol(''),
  Mn = Symbol(''),
  On = Symbol(''),
  Pn = Symbol(''),
  In = Symbol('')
let Vn
ne({
  [Nn]: 'vModelRadio',
  [Tn]: 'vModelCheckbox',
  [$n]: 'vModelText',
  [wn]: 'vModelSelect',
  [_n]: 'vModelDynamic',
  [Cn]: 'withModifiers',
  [Mn]: 'withKeys',
  [On]: 'vShow',
  [Pn]: 'Transition',
  [In]: 'TransitionGroup'
})
const Bn = e('style,iframe,script,noscript', !0),
  En = {
    isVoidTag: c,
    isNativeTag: e => r(e) || s(e),
    isPreTag: e => 'pre' === e,
    decodeEntities: function(e) {
      return (
        ((Vn || (Vn = document.createElement('div'))).innerHTML = e),
        Vn.textContent
      )
    },
    isBuiltInComponent: e =>
      Ne(e, 'Transition') ? Pn : Ne(e, 'TransitionGroup') ? In : void 0,
    getNamespace(e, t) {
      let n = t ? t.ns : 0
      if (t && 2 === n)
        if ('annotation-xml' === t.tag) {
          if ('svg' === e) return 1
          t.props.some(
            e =>
              6 === e.type &&
              'encoding' === e.name &&
              null != e.value &&
              ('text/html' === e.value.content ||
                'application/xhtml+xml' === e.value.content)
          ) && (n = 0)
        } else
          /^m(?:[ions]|text)$/.test(t.tag) &&
            'mglyph' !== e &&
            'malignmark' !== e &&
            (n = 0)
      else
        t &&
          1 === n &&
          (('foreignObject' !== t.tag &&
            'desc' !== t.tag &&
            'title' !== t.tag) ||
            (n = 0))
      if (0 === n) {
        if ('svg' === e) return 1
        if ('math' === e) return 2
      }
      return n
    },
    getTextMode({ tag: e, ns: t }) {
      if (0 === t) {
        if ('textarea' === e || 'title' === e) return 1
        if (Bn(e)) return 2
      }
      return 0
    }
  },
  Ln = e => {
    1 === e.type &&
      e.props.forEach((t, n) => {
        6 === t.type &&
          'style' === t.name &&
          t.value &&
          (e.props[n] = {
            type: 7,
            name: 'bind',
            arg: pe('style', !0, t.loc),
            exp: jn(t.value.content, t.loc),
            modifiers: [],
            loc: t.loc
          })
      })
  },
  jn = (e, t) => {
    const r = (function(e) {
      const t = {}
      return (
        e.split(n).forEach(e => {
          if (e) {
            const n = e.split(o)
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
          }
        }),
        t
      )
    })(e)
    return pe(JSON.stringify(r), !1, t, 3)
  }
function Rn(e, t) {
  return $(e, t)
}
const An = e('passive,once,capture'),
  Fn = e('stop,prevent,self,ctrl,shift,alt,meta,exact,middle'),
  Dn = e('left,right'),
  Hn = e('onkeyup,onkeydown,onkeypress', !0),
  Un = (e, t) =>
    ke(e) && 'onclick' === e.content.toLowerCase()
      ? pe(t, !0)
      : 4 !== e.type
        ? ae(['(', e, `) === "onClick" ? "${t}" : (`, e, ')'])
        : e,
  zn = (e, t) => {
    1 !== e.type ||
      0 !== e.tagType ||
      ('script' !== e.tag && 'style' !== e.tag) ||
      t.removeNode()
  },
  Jn = [Ln],
  Gn = {
    cloak: kn,
    html: (e, t, n) => {
      const { exp: o, loc: r } = e
      return (
        t.children.length && (t.children.length = 0),
        { props: [le(pe('innerHTML', !0, r), o || pe('', !0))] }
      )
    },
    text: (e, t, n) => {
      const { exp: o, loc: r } = e
      return (
        t.children.length && (t.children.length = 0),
        {
          props: [
            le(
              pe('textContent', !0),
              o ? fe(n.helperString(z), [o], r) : pe('', !0)
            )
          ]
        }
      )
    },
    model: (e, t, n) => {
      const o = vn(e, t, n)
      if (!o.props.length || 1 === t.tagType) return o
      const { tag: r } = t,
        s = n.isCustomElement(r)
      if ('input' === r || 'textarea' === r || 'select' === r || s) {
        let e = $n,
          c = !1
        if ('input' === r || s) {
          const n = Be(t, 'type')
          if (n) {
            if (7 === n.type) e = _n
            else if (n.value)
              switch (n.value.content) {
                case 'radio':
                  e = Nn
                  break
                case 'checkbox':
                  e = Tn
                  break
                case 'file':
                  c = !0
              }
          } else Le(t) && (e = _n)
        } else 'select' === r && (e = wn)
        c || (o.needRuntime = n.helper(e))
      }
      return (
        (o.props = o.props.filter(
          e => !(4 === e.key.type && 'modelValue' === e.key.content)
        )),
        o
      )
    },
    on: (e, t, n) =>
      dn(e, 0, n, t => {
        const { modifiers: o } = e
        if (!o.length) return t
        let { key: r, value: s } = t.props[0]
        const {
          keyModifiers: c,
          nonKeyModifiers: i,
          eventOptionModifiers: l
        } = ((e, t) => {
          const n = [],
            o = [],
            r = []
          for (let s = 0; s < t.length; s++) {
            const c = t[s]
            An(c)
              ? r.push(c)
              : Dn(c)
                ? ke(e)
                  ? Hn(e.content)
                    ? n.push(c)
                    : o.push(c)
                  : (n.push(c), o.push(c))
                : Fn(c)
                  ? o.push(c)
                  : n.push(c)
          }
          return {
            keyModifiers: n,
            nonKeyModifiers: o,
            eventOptionModifiers: r
          }
        })(r, o)
        if (
          (i.includes('right') && (r = Un(r, 'onContextmenu')),
          i.includes('middle') && (r = Un(r, 'onMouseup')),
          i.length && (s = fe(n.helper(Cn), [s, JSON.stringify(i)])),
          !c.length ||
            (ke(r) && !Hn(r.content)) ||
            (s = fe(n.helper(Mn), [s, JSON.stringify(c)])),
          l.length)
        ) {
          const e = l.map(k).join('')
          r = ke(r) ? pe(`${r.content}${e}`, !0) : ae(['(', r, `) + "${e}"`])
        }
        return { props: [le(r, s)] }
      }),
    show: (e, t, n) => ({ props: [], needRuntime: n.helper(On) })
  }
function qn(e, t = {}) {
  return Sn(
    e,
    a({}, En, t, {
      nodeTransforms: [zn, ...Jn, ...(t.nodeTransforms || [])],
      directiveTransforms: a({}, Gn, t.directiveTransforms || {}),
      transformHoist: null
    })
  )
}
function Kn(e, t = {}) {
  return qe(e, a({}, En, t))
}
export {
  O as BASE_TRANSITION,
  q as CAMELIZE,
  K as CAPITALIZE,
  I as CREATE_BLOCK,
  B as CREATE_COMMENT,
  U as CREATE_SLOTS,
  L as CREATE_STATIC,
  E as CREATE_TEXT,
  V as CREATE_VNODE,
  Gn as DOMDirectiveTransforms,
  Jn as DOMNodeTransforms,
  w as FRAGMENT,
  ee as IS_REF,
  M as KEEP_ALIVE,
  J as MERGE_PROPS,
  P as OPEN_BLOCK,
  D as RENDER_LIST,
  H as RENDER_SLOT,
  j as RESOLVE_COMPONENT,
  A as RESOLVE_DIRECTIVE,
  R as RESOLVE_DYNAMIC_COMPONENT,
  Z as SET_BLOCK_TRACKING,
  Q as SET_SCOPE_ID,
  C as SUSPENSE,
  _ as TELEPORT,
  z as TO_DISPLAY_STRING,
  G as TO_HANDLERS,
  W as TO_HANDLER_KEY,
  Pn as TRANSITION,
  In as TRANSITION_GROUP,
  X as UNREF,
  Tn as V_MODEL_CHECKBOX,
  _n as V_MODEL_DYNAMIC,
  Nn as V_MODEL_RADIO,
  wn as V_MODEL_SELECT,
  $n as V_MODEL_TEXT,
  Mn as V_ON_WITH_KEYS,
  Cn as V_ON_WITH_MODIFIERS,
  On as V_SHOW,
  Y as WITH_CTX,
  F as WITH_DIRECTIVES,
  Oe as advancePositionWithClone,
  Pe as advancePositionWithMutation,
  Ie as assert,
  Sn as baseCompile,
  qe as baseParse,
  cn as buildProps,
  en as buildSlots,
  qn as compile,
  ce as createArrayExpression,
  be as createAssignmentExpression,
  ge as createBlockStatement,
  me as createCacheExpression,
  fe as createCallExpression,
  $ as createCompilerError,
  ae as createCompoundExpression,
  he as createConditionalExpression,
  Rn as createDOMCompilerError,
  Wt as createForLoopParams,
  de as createFunctionExpression,
  ve as createIfStatement,
  ue as createInterpolation,
  ie as createObjectExpression,
  le as createObjectProperty,
  Se as createReturnStatement,
  re as createRoot,
  xe as createSequenceExpression,
  pe as createSimpleExpression,
  wt as createStructuralDirectiveTransform,
  ye as createTemplateLiteral,
  Nt as createTransformContext,
  se as createVNodeCall,
  Ve as findDir,
  Be as findProp,
  _t as generate,
  t as generateCodeFrame,
  xn as getBaseTransformPreset,
  Me as getInnerRange,
  Le as hasDynamicKeyVBind,
  Ue as hasScopeRef,
  te as helperNameMap,
  De as injectProp,
  Ee as isBindKey,
  Ne as isBuiltInType,
  Te as isCoreComponent,
  Ce as isMemberExpression,
  we as isSimpleIdentifier,
  Fe as isSlotOutlet,
  ke as isStaticExp,
  Ae as isTemplateNode,
  je as isText,
  Re as isVSlot,
  oe as locStub,
  kn as noopDirectiveTransform,
  Kn as parse,
  En as parserOptions,
  Lt as processExpression,
  Ut as processFor,
  Rt as processIf,
  an as processSlotOutlet,
  ne as registerRuntimeHelpers,
  sn as resolveComponentType,
  He as toValidAssetId,
  Qt as trackSlotScopes,
  Yt as trackVForSlotScopes,
  Tt as transform,
  hn as transformBind,
  rn as transformElement,
  Et as transformExpression,
  vn as transformModel,
  dn as transformOn,
  Ln as transformStyle,
  $t as traverseNode
}
