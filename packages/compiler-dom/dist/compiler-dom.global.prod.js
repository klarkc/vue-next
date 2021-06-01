var VueCompilerDOM = (function(e) {
  'use strict'
  function t(e, t) {
    const n = Object.create(null),
      o = e.split(',')
    for (let r = 0; r < o.length; r++) n[o[r]] = !0
    return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
  }
  const n = /;(?![^(]*\))/g,
    o = /:(.+)/
  const r = t(
      'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot'
    ),
    s = t(
      'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view'
    ),
    c = t(
      'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr'
    ),
    i = {},
    l = () => {},
    p = () => !1,
    a = /^on[^a-z]/,
    u = Object.assign,
    f = Array.isArray,
    d = e => 'string' == typeof e,
    h = e => 'symbol' == typeof e,
    m = e => null !== e && 'object' == typeof e,
    g = t(
      ',key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
    ),
    y = e => {
      const t = Object.create(null)
      return n => t[n] || (t[n] = e(n))
    },
    v = /-(\w)/g,
    S = y(e => e.replace(v, (e, t) => (t ? t.toUpperCase() : ''))),
    b = /\B([A-Z])/g,
    x = y(e => e.replace(b, '-$1').toLowerCase()),
    T = y(e => e.charAt(0).toUpperCase() + e.slice(1)),
    N = y(e => (e ? `on${T(e)}` : ''))
  function E(e) {
    throw e
  }
  function k(e, t, n, o) {
    const r = new SyntaxError(String(e))
    return (r.code = e), (r.loc = t), r
  }
  const O = Symbol(''),
    _ = Symbol(''),
    C = Symbol(''),
    $ = Symbol(''),
    I = Symbol(''),
    M = Symbol(''),
    w = Symbol(''),
    P = Symbol(''),
    V = Symbol(''),
    R = Symbol(''),
    L = Symbol(''),
    A = Symbol(''),
    D = Symbol(''),
    B = Symbol(''),
    F = Symbol(''),
    j = Symbol(''),
    H = Symbol(''),
    K = Symbol(''),
    G = Symbol(''),
    U = Symbol(''),
    W = Symbol(''),
    z = Symbol(''),
    J = Symbol(''),
    q = Symbol(''),
    Y = Symbol(''),
    Z = Symbol(''),
    X = Symbol(''),
    Q = Symbol(''),
    ee = Symbol(''),
    te = {
      [O]: 'Fragment',
      [_]: 'Teleport',
      [C]: 'Suspense',
      [$]: 'KeepAlive',
      [I]: 'BaseTransition',
      [M]: 'openBlock',
      [w]: 'createBlock',
      [P]: 'createVNode',
      [V]: 'createCommentVNode',
      [R]: 'createTextVNode',
      [L]: 'createStaticVNode',
      [A]: 'resolveComponent',
      [D]: 'resolveDynamicComponent',
      [B]: 'resolveDirective',
      [F]: 'withDirectives',
      [j]: 'renderList',
      [H]: 'renderSlot',
      [K]: 'createSlots',
      [G]: 'toDisplayString',
      [U]: 'mergeProps',
      [W]: 'toHandlers',
      [z]: 'camelize',
      [J]: 'capitalize',
      [q]: 'toHandlerKey',
      [Y]: 'setBlockTracking',
      [Z]: 'setScopeId',
      [X]: 'withCtx',
      [Q]: 'unref',
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
      e && (i ? (e.helper(M), e.helper(w)) : e.helper(P), c && e.helper(F)),
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
  function ae(e, t = oe) {
    return { type: 8, loc: t, children: e }
  }
  function ue(e, t = [], n = oe) {
    return { type: 14, loc: n, callee: e, arguments: t }
  }
  function fe(e, t, n = !1, o = !1, r = oe) {
    return { type: 18, params: e, returns: t, newline: n, isSlot: o, loc: r }
  }
  function de(e, t, n, o = !0) {
    return {
      type: 19,
      test: e,
      consequent: t,
      alternate: n,
      newline: o,
      loc: oe
    }
  }
  function he(e, t, n = !1) {
    return { type: 20, index: e, value: t, isVNode: n, loc: oe }
  }
  const me = e => 4 === e.type && e.isStatic,
    ge = (e, t) => e === t || e === x(t)
  function ye(e) {
    return ge(e, 'Teleport')
      ? _
      : ge(e, 'Suspense')
        ? C
        : ge(e, 'KeepAlive')
          ? $
          : ge(e, 'BaseTransition')
            ? I
            : void 0
  }
  const ve = /^\d|[^\$\w]/,
    Se = e => !ve.test(e),
    be = /^[A-Za-z_$][\w$]*(?:\s*\.\s*[A-Za-z_$][\w$]*|\[[^\]]+\])*$/,
    xe = e => !!e && be.test(e.trim())
  function Te(e, t, n) {
    const o = {
      source: e.source.substr(t, n),
      start: Ne(e.start, e.source, t),
      end: e.end
    }
    return null != n && (o.end = Ne(e.start, e.source, t + n)), o
  }
  function Ne(e, t, n = t.length) {
    return Ee(u({}, e), t, n)
  }
  function Ee(e, t, n = t.length) {
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
  function ke(e, t, n = !1) {
    for (let o = 0; o < e.props.length; o++) {
      const r = e.props[o]
      if (
        7 === r.type &&
        (n || r.exp) &&
        (d(t) ? r.name === t : t.test(r.name))
      )
        return r
    }
  }
  function Oe(e, t, n = !1, o = !1) {
    for (let r = 0; r < e.props.length; r++) {
      const s = e.props[r]
      if (6 === s.type) {
        if (n) continue
        if (s.name === t && (s.value || o)) return s
      } else if ('bind' === s.name && (s.exp || o) && _e(s.arg, t)) return s
    }
  }
  function _e(e, t) {
    return !(!e || !me(e) || e.content !== t)
  }
  function Ce(e) {
    return e.props.some(
      e =>
        !(
          7 !== e.type ||
          'bind' !== e.name ||
          (e.arg && 4 === e.arg.type && e.arg.isStatic)
        )
    )
  }
  function $e(e) {
    return 5 === e.type || 2 === e.type
  }
  function Ie(e) {
    return 7 === e.type && 'slot' === e.name
  }
  function Me(e) {
    return 1 === e.type && 3 === e.tagType
  }
  function we(e) {
    return 1 === e.type && 2 === e.tagType
  }
  function Pe(e, t, n) {
    let o
    const r = 13 === e.type ? e.props : e.arguments[2]
    if (null == r || d(r)) o = ie([t])
    else if (14 === r.type) {
      const e = r.arguments[0]
      d(e) || 15 !== e.type
        ? r.callee === W
          ? (o = ue(n.helper(U), [ie([t]), r]))
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
    } else o = ue(n.helper(U), [ie([t]), r])
    13 === e.type ? (e.props = o) : (e.arguments[2] = o)
  }
  function Ve(e, t) {
    return `_${t}_${e.replace(/[^\w]/g, '_')}`
  }
  const Re = /&(gt|lt|amp|apos|quot);/g,
    Le = { gt: '>', lt: '<', amp: '&', apos: "'", quot: '"' },
    Ae = {
      delimiters: ['{{', '}}'],
      getNamespace: () => 0,
      getTextMode: () => 0,
      isVoidTag: p,
      isPreTag: p,
      isCustomElement: p,
      decodeEntities: e => e.replace(Re, (e, t) => Le[t]),
      onError: E,
      comments: !1
    }
  function De(e, t = {}) {
    const n = (function(e, t) {
        const n = u({}, Ae)
        for (const o in t) n[o] = t[o] || Ae[o]
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
      o = Xe(n)
    return re(Be(n, 0, []), Qe(n, o))
  }
  function Be(e, t, n) {
    const o = et(n),
      r = o ? o.ns : 0,
      s = []
    for (; !st(e, t, n); ) {
      const c = e.source
      let i
      if (0 === t || 1 === t)
        if (!e.inVPre && tt(c, e.options.delimiters[0])) i = qe(e, t)
        else if (0 === t && '<' === c[0])
          if (1 === c.length);
          else if ('!' === c[1])
            i = tt(c, '\x3c!--')
              ? He(e)
              : tt(c, '<!DOCTYPE')
                ? Ke(e)
                : tt(c, '<![CDATA[') && 0 !== r
                  ? je(e, n)
                  : Ke(e)
          else if ('/' === c[1])
            if (2 === c.length);
            else {
              if ('>' === c[2]) {
                nt(e, 3)
                continue
              }
              if (/[a-z]/i.test(c[2])) {
                We(e, 1, o)
                continue
              }
              i = Ke(e)
            }
          else
            /[a-z]/i.test(c[1]) ? (i = Ge(e, n)) : '?' === c[1] && (i = Ke(e))
      if ((i || (i = Ye(e, t)), f(i)))
        for (let e = 0; e < i.length; e++) Fe(s, i[e])
      else Fe(s, i)
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
  function Fe(e, t) {
    if (2 === t.type) {
      const n = et(e)
      if (n && 2 === n.type && n.loc.end.offset === t.loc.start.offset)
        return (
          (n.content += t.content),
          (n.loc.end = t.loc.end),
          void (n.loc.source += t.loc.source)
        )
    }
    e.push(t)
  }
  function je(e, t) {
    nt(e, 9)
    const n = Be(e, 3, t)
    return 0 === e.source.length || nt(e, 3), n
  }
  function He(e) {
    const t = Xe(e)
    let n
    const o = /--(\!)?>/.exec(e.source)
    if (o) {
      n = e.source.slice(4, o.index)
      const t = e.source.slice(0, o.index)
      let r = 1,
        s = 0
      for (; -1 !== (s = t.indexOf('\x3c!--', r)); )
        nt(e, s - r + 1), (r = s + 1)
      nt(e, o.index + o[0].length - r + 1)
    } else (n = e.source.slice(4)), nt(e, e.source.length)
    return { type: 3, content: n, loc: Qe(e, t) }
  }
  function Ke(e) {
    const t = Xe(e),
      n = '?' === e.source[1] ? 1 : 2
    let o
    const r = e.source.indexOf('>')
    return (
      -1 === r
        ? ((o = e.source.slice(n)), nt(e, e.source.length))
        : ((o = e.source.slice(n, r)), nt(e, r + 1)),
      { type: 3, content: o, loc: Qe(e, t) }
    )
  }
  function Ge(e, t) {
    const n = e.inPre,
      o = e.inVPre,
      r = et(t),
      s = We(e, 0, r),
      c = e.inPre && !n,
      i = e.inVPre && !o
    if (s.isSelfClosing || e.options.isVoidTag(s.tag)) return s
    t.push(s)
    const l = e.options.getTextMode(s, r),
      p = Be(e, l, t)
    if ((t.pop(), (s.children = p), ct(e.source, s.tag))) We(e, 1, r)
    else if (0 === e.source.length && 'script' === s.tag.toLowerCase()) {
      const e = p[0]
      e && tt(e.loc.source, '\x3c!--')
    }
    return (
      (s.loc = Qe(e, s.loc.start)), c && (e.inPre = !1), i && (e.inVPre = !1), s
    )
  }
  const Ue = t('if,else,else-if,for,slot')
  function We(e, t, n) {
    const o = Xe(e),
      r = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),
      s = r[1],
      c = e.options.getNamespace(s, n)
    nt(e, r[0].length), ot(e)
    const i = Xe(e),
      l = e.source
    let p = ze(e, t)
    e.options.isPreTag(s) && (e.inPre = !0),
      !e.inVPre &&
        p.some(e => 7 === e.type && 'pre' === e.name) &&
        ((e.inVPre = !0),
        u(e, i),
        (e.source = l),
        (p = ze(e, t).filter(e => 'v-pre' !== e.name)))
    let a = !1
    0 === e.source.length || ((a = tt(e.source, '/>')), nt(e, a ? 2 : 1))
    let f = 0
    const d = e.options
    if (!e.inVPre && !d.isCustomElement(s)) {
      const e = p.some(e => 7 === e.type && 'is' === e.name)
      d.isNativeTag && !e
        ? d.isNativeTag(s) || (f = 1)
        : (e ||
            ye(s) ||
            (d.isBuiltInComponent && d.isBuiltInComponent(s)) ||
            /^[A-Z]/.test(s) ||
            'component' === s) &&
          (f = 1),
        'slot' === s
          ? (f = 2)
          : 'template' === s &&
            p.some(e => 7 === e.type && Ue(e.name)) &&
            (f = 3)
    }
    return {
      type: 1,
      ns: c,
      tag: s,
      tagType: f,
      props: p,
      isSelfClosing: a,
      children: [],
      loc: Qe(e, o),
      codegenNode: void 0
    }
  }
  function ze(e, t) {
    const n = [],
      o = new Set()
    for (; e.source.length > 0 && !tt(e.source, '>') && !tt(e.source, '/>'); ) {
      if (tt(e.source, '/')) {
        nt(e, 1), ot(e)
        continue
      }
      const r = Je(e, o)
      0 === t && n.push(r), /^[^\t\r\n\f />]/.test(e.source), ot(e)
    }
    return n
  }
  function Je(e, t) {
    const n = Xe(e),
      o = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0]
    t.has(o), t.add(o)
    {
      const e = /["'<]/g
      let t
      for (; (t = e.exec(o)); );
    }
    let r
    nt(e, o.length),
      /^[\t\r\n\f ]*=/.test(e.source) &&
        (ot(e),
        nt(e, 1),
        ot(e),
        (r = (function(e) {
          const t = Xe(e)
          let n
          const o = e.source[0],
            r = '"' === o || "'" === o
          if (r) {
            nt(e, 1)
            const t = e.source.indexOf(o)
            ;-1 === t
              ? (n = Ze(e, e.source.length, 4))
              : ((n = Ze(e, t, 4)), nt(e, 1))
          } else {
            const t = /^[^\t\r\n\f >]+/.exec(e.source)
            if (!t) return
            const o = /["'<=`]/g
            let r
            for (; (r = o.exec(t[0])); );
            n = Ze(e, t[0].length, 4)
          }
          return { content: n, isQuoted: r, loc: Qe(e, t) }
        })(e)))
    const s = Qe(e, n)
    if (!e.inVPre && /^(v-|:|@|#)/.test(o)) {
      const t = /(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(
          o
        ),
        c = t[1] || (tt(o, ':') ? 'bind' : tt(o, '@') ? 'on' : 'slot')
      let i
      if (t[2]) {
        const r = 'slot' === c,
          s = o.indexOf(t[2]),
          l = Qe(
            e,
            rt(e, n, s),
            rt(e, n, s + t[2].length + ((r && t[3]) || '').length)
          )
        let p = t[2],
          a = !0
        p.startsWith('[')
          ? ((a = !1), p.endsWith(']'), (p = p.substr(1, p.length - 2)))
          : r && (p += t[3] || ''),
          (i = {
            type: 4,
            content: p,
            isStatic: a,
            constType: a ? 3 : 0,
            loc: l
          })
      }
      if (r && r.isQuoted) {
        const e = r.loc
        e.start.offset++,
          e.start.column++,
          (e.end = Ne(e.start, r.content)),
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
  function qe(e, t) {
    const [n, o] = e.options.delimiters,
      r = e.source.indexOf(o, n.length)
    if (-1 === r) return
    const s = Xe(e)
    nt(e, n.length)
    const c = Xe(e),
      i = Xe(e),
      l = r - n.length,
      p = e.source.slice(0, l),
      a = Ze(e, l, t),
      u = a.trim(),
      f = a.indexOf(u)
    f > 0 && Ee(c, p, f)
    return (
      Ee(i, p, l - (a.length - u.length - f)),
      nt(e, o.length),
      {
        type: 5,
        content: {
          type: 4,
          isStatic: !1,
          constType: 0,
          content: u,
          loc: Qe(e, c, i)
        },
        loc: Qe(e, s)
      }
    )
  }
  function Ye(e, t) {
    const n = ['<', e.options.delimiters[0]]
    3 === t && n.push(']]>')
    let o = e.source.length
    for (let s = 0; s < n.length; s++) {
      const t = e.source.indexOf(n[s], 1)
      ;-1 !== t && o > t && (o = t)
    }
    const r = Xe(e)
    return { type: 2, content: Ze(e, o, t), loc: Qe(e, r) }
  }
  function Ze(e, t, n) {
    const o = e.source.slice(0, t)
    return (
      nt(e, t),
      2 === n || 3 === n || -1 === o.indexOf('&')
        ? o
        : e.options.decodeEntities(o, 4 === n)
    )
  }
  function Xe(e) {
    const { column: t, line: n, offset: o } = e
    return { column: t, line: n, offset: o }
  }
  function Qe(e, t, n) {
    return {
      start: t,
      end: (n = n || Xe(e)),
      source: e.originalSource.slice(t.offset, n.offset)
    }
  }
  function et(e) {
    return e[e.length - 1]
  }
  function tt(e, t) {
    return e.startsWith(t)
  }
  function nt(e, t) {
    const { source: n } = e
    Ee(e, n, t), (e.source = n.slice(t))
  }
  function ot(e) {
    const t = /^[\t\r\n\f ]+/.exec(e.source)
    t && nt(e, t[0].length)
  }
  function rt(e, t, n) {
    return Ne(t, e.originalSource.slice(t.offset, n), n)
  }
  function st(e, t, n) {
    const o = e.source
    switch (t) {
      case 0:
        if (tt(o, '</'))
          for (let e = n.length - 1; e >= 0; --e) if (ct(o, n[e].tag)) return !0
        break
      case 1:
      case 2: {
        const e = et(n)
        if (e && ct(o, e.tag)) return !0
        break
      }
      case 3:
        if (tt(o, ']]>')) return !0
    }
    return !o
  }
  function ct(e, t) {
    return (
      tt(e, '</') &&
      e.substr(2, t.length).toLowerCase() === t.toLowerCase() &&
      /[\t\r\n\f />]/.test(e[2 + t.length] || '>')
    )
  }
  function it(e, t) {
    pt(e, t, lt(e, e.children[0]))
  }
  function lt(e, t) {
    const { children: n } = e
    return 1 === n.length && 1 === t.type && !we(t)
  }
  function pt(e, t, n = !1) {
    let o = !1,
      r = !0
    const { children: s } = e
    for (let c = 0; c < s.length; c++) {
      const e = s[c]
      if (1 === e.type && 0 === e.tagType) {
        const s = n ? 0 : at(e, t)
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
            const o = dt(n)
            if ((!o || 512 === o || 1 === o) && ut(e, t) >= 2) {
              const o = ft(e)
              o && (n.props = t.hoist(o))
            }
          }
        }
      } else if (12 === e.type) {
        const n = at(e.content, t)
        n > 0 &&
          (n < 3 && (r = !1),
          n >= 2 && ((e.codegenNode = t.hoist(e.codegenNode)), (o = !0)))
      }
      if (1 === e.type) {
        const n = 1 === e.tagType
        n && t.scopes.vSlot++, pt(e, t), n && t.scopes.vSlot--
      } else if (11 === e.type) pt(e, t, 1 === e.children.length)
      else if (9 === e.type)
        for (let n = 0; n < e.branches.length; n++)
          pt(e.branches[n], t, 1 === e.branches[n].children.length)
    }
    r && o && t.transformHoist && t.transformHoist(s, t, e)
  }
  function at(e, t) {
    const { constantCache: n } = t
    switch (e.type) {
      case 1:
        if (0 !== e.tagType) return 0
        const o = n.get(e)
        if (void 0 !== o) return o
        const r = e.codegenNode
        if (13 !== r.type) return 0
        if (dt(r)) return n.set(e, 0), 0
        {
          let o = 3
          const s = ut(e, t)
          if (0 === s) return n.set(e, 0), 0
          s < o && (o = s)
          for (let r = 0; r < e.children.length; r++) {
            const s = at(e.children[r], t)
            if (0 === s) return n.set(e, 0), 0
            s < o && (o = s)
          }
          if (o > 1)
            for (let r = 0; r < e.props.length; r++) {
              const s = e.props[r]
              if (7 === s.type && 'bind' === s.name && s.exp) {
                const r = at(s.exp, t)
                if (0 === r) return n.set(e, 0), 0
                r < o && (o = r)
              }
            }
          return r.isBlock && ((r.isBlock = !1), t.helper(P)), n.set(e, o), o
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
        return at(e.content, t)
      case 4:
        return e.constType
      case 8:
        let s = 3
        for (let n = 0; n < e.children.length; n++) {
          const o = e.children[n]
          if (d(o) || h(o)) continue
          const r = at(o, t)
          if (0 === r) return 0
          r < s && (s = r)
        }
        return s
      default:
        return 0
    }
  }
  function ut(e, t) {
    let n = 3
    const o = ft(e)
    if (o && 15 === o.type) {
      const { properties: e } = o
      for (let o = 0; o < e.length; o++) {
        const { key: r, value: s } = e[o],
          c = at(r, t)
        if (0 === c) return c
        if ((c < n && (n = c), 4 !== s.type)) return 0
        const i = at(s, t)
        if (0 === i) return i
        i < n && (n = i)
      }
    }
    return n
  }
  function ft(e) {
    const t = e.codegenNode
    if (13 === t.type) return t.props
  }
  function dt(e) {
    const t = e.patchFlag
    return t ? parseInt(t, 10) : void 0
  }
  function ht(
    e,
    {
      filename: t = '',
      prefixIdentifiers: n = !1,
      hoistStatic: o = !1,
      cacheHandlers: r = !1,
      nodeTransforms: s = [],
      directiveTransforms: c = {},
      transformHoist: p = null,
      isBuiltInComponent: a = l,
      isCustomElement: u = l,
      expressionPlugins: f = [],
      scopeId: d = null,
      slotted: h = !0,
      ssr: m = !1,
      ssrCssVars: g = '',
      bindingMetadata: y = i,
      inline: v = !1,
      isTS: b = !1,
      onError: x = E
    }
  ) {
    const N = t.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/),
      k = {
        selfName: N && T(S(N[1])),
        prefixIdentifiers: n,
        hoistStatic: o,
        cacheHandlers: r,
        nodeTransforms: s,
        directiveTransforms: c,
        transformHoist: p,
        isBuiltInComponent: a,
        isCustomElement: u,
        expressionPlugins: f,
        scopeId: d,
        slotted: h,
        ssr: m,
        ssrCssVars: g,
        bindingMetadata: y,
        inline: v,
        isTS: b,
        onError: x,
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
        helper: e => (k.helpers.add(e), e),
        helperString: e => `_${te[k.helper(e)]}`,
        replaceNode(e) {
          k.parent.children[k.childIndex] = k.currentNode = e
        },
        removeNode(e) {
          const t = e
            ? k.parent.children.indexOf(e)
            : k.currentNode
              ? k.childIndex
              : -1
          e && e !== k.currentNode
            ? k.childIndex > t && (k.childIndex--, k.onNodeRemoved())
            : ((k.currentNode = null), k.onNodeRemoved()),
            k.parent.children.splice(t, 1)
        },
        onNodeRemoved: () => {},
        addIdentifiers(e) {},
        removeIdentifiers(e) {},
        hoist(e) {
          k.hoists.push(e)
          const t = pe(`_hoisted_${k.hoists.length}`, !1, e.loc, 2)
          return (t.hoisted = e), t
        },
        cache: (e, t = !1) => he(++k.cached, e, t)
      }
    return k
  }
  function mt(e, t) {
    const n = ht(e, t)
    gt(e, n),
      t.hoistStatic && it(e, n),
      t.ssr ||
        (function(e, t) {
          const { helper: n } = t,
            { children: o } = e
          if (1 === o.length) {
            const t = o[0]
            if (lt(e, t) && t.codegenNode) {
              const o = t.codegenNode
              13 === o.type && ((o.isBlock = !0), n(M), n(w)),
                (e.codegenNode = o)
            } else e.codegenNode = t
          } else if (o.length > 1) {
            let o = 64
            e.codegenNode = se(
              t,
              n(O),
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
  function gt(e, t) {
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
        t.ssr || t.helper(V)
        break
      case 5:
        t.ssr || t.helper(G)
        break
      case 9:
        for (let n = 0; n < e.branches.length; n++) gt(e.branches[n], t)
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
              gt(r, t))
          }
        })(e, t)
    }
    t.currentNode = e
    let r = o.length
    for (; r--; ) o[r]()
  }
  function yt(e, t) {
    const n = d(e) ? t => t === e : t => e.test(t)
    return (e, o) => {
      if (1 === e.type) {
        const { props: r } = e
        if (3 === e.tagType && r.some(Ie)) return
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
  const vt = '/*#__PURE__*/'
  function St(e, t = {}) {
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
      const a = {
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
          a.code += e
        },
        indent() {
          u(++a.indentLevel)
        },
        deindent(e = !1) {
          e ? --a.indentLevel : u(--a.indentLevel)
        },
        newline() {
          u(a.indentLevel)
        }
      }
      function u(e) {
        a.push('\n' + '  '.repeat(e))
      }
      return a
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
      a = e.helpers.length > 0,
      u = !s && 'module' !== o
    !(function(e, t) {
      const { push: n, newline: o, runtimeGlobalName: r } = t,
        s = r,
        c = e => `${te[e]}: _${te[e]}`
      if (e.helpers.length > 0 && (n(`const _Vue = ${s}\n`), e.hoists.length)) {
        n(
          `const { ${[P, V, R, L]
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
            e && (n(`const _hoisted_${r + 1} = `), Nt(e, t), o())
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
      u &&
        (r('with (_ctx) {'),
        c(),
        a &&
          (r(
            `const { ${e.helpers
              .map(e => `${te[e]}: _${te[e]}`)
              .join(', ')} } = _Vue`
          ),
          r('\n'),
          l())),
      e.components.length &&
        (bt(e.components, 'component', n),
        (e.directives.length || e.temps > 0) && l()),
      e.directives.length &&
        (bt(e.directives, 'directive', n), e.temps > 0 && l()),
      e.temps > 0)
    ) {
      r('let ')
      for (let t = 0; t < e.temps; t++) r(`${t > 0 ? ', ' : ''}_temp${t}`)
    }
    return (
      (e.components.length || e.directives.length || e.temps) && (r('\n'), l()),
      p || r('return '),
      e.codegenNode ? Nt(e.codegenNode, n) : r('null'),
      u && (i(), r('}')),
      i(),
      r('}'),
      {
        ast: e,
        code: n.code,
        preamble: '',
        map: n.map ? n.map.toJSON() : void 0
      }
    )
  }
  function bt(e, t, { helper: n, push: o, newline: r }) {
    const s = n('component' === t ? A : B)
    for (let c = 0; c < e.length; c++) {
      const n = e[c]
      o(`const ${Ve(n, t)} = ${s}(${JSON.stringify(n)})`),
        c < e.length - 1 && r()
    }
  }
  function xt(e, t) {
    const n = e.length > 3 || !1
    t.push('['), n && t.indent(), Tt(e, t, n), n && t.deindent(), t.push(']')
  }
  function Tt(e, t, n = !1, o = !0) {
    const { push: r, newline: s } = t
    for (let c = 0; c < e.length; c++) {
      const i = e[c]
      d(i) ? r(i) : f(i) ? xt(i, t) : Nt(i, t),
        c < e.length - 1 && (n ? (o && r(','), s()) : o && r(', '))
    }
  }
  function Nt(e, t) {
    if (d(e)) t.push(e)
    else if (h(e)) t.push(t.helper(e))
    else
      switch (e.type) {
        case 1:
        case 9:
        case 11:
          Nt(e.codegenNode, t)
          break
        case 2:
          !(function(e, t) {
            t.push(JSON.stringify(e.content), e)
          })(e, t)
          break
        case 4:
          Et(e, t)
          break
        case 5:
          !(function(e, t) {
            const { push: n, helper: o, pure: r } = t
            r && n(vt)
            n(`${o(G)}(`), Nt(e.content, t), n(')')
          })(e, t)
          break
        case 12:
          Nt(e.codegenNode, t)
          break
        case 8:
          kt(e, t)
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
                directives: a,
                isBlock: u,
                disableTracking: f
              } = e
            a && n(o(F) + '(')
            u && n(`(${o(M)}(${f ? 'true' : ''}), `)
            r && n(vt)
            n(o(u ? w : P) + '(', e),
              Tt(
                (function(e) {
                  let t = e.length
                  for (; t-- && null == e[t]; );
                  return e.slice(0, t + 1).map(e => e || 'null')
                })([s, c, i, l, p]),
                t
              ),
              n(')'),
              u && n(')')
            a && (n(', '), Nt(a, t), n(')'))
          })(e, t)
          break
        case 14:
          !(function(e, t) {
            const { push: n, helper: o, pure: r } = t,
              s = d(e.callee) ? e.callee : o(e.callee)
            r && n(vt)
            n(s + '(', e), Tt(e.arguments, t), n(')')
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
              Ot(e, t), n(': '), Nt(o, t), l < c.length - 1 && (n(','), s())
            }
            i && r(), n(i ? '}' : ' }')
          })(e, t)
          break
        case 17:
          !(function(e, t) {
            xt(e.elements, t)
          })(e, t)
          break
        case 18:
          !(function(e, t) {
            const { push: n, indent: o, deindent: r } = t,
              { params: s, returns: c, body: i, newline: l, isSlot: p } = e
            p && n(`_${te[X]}(`)
            n('(', e), f(s) ? Tt(s, t) : s && Nt(s, t)
            n(') => '), (l || i) && (n('{'), o())
            c ? (l && n('return '), f(c) ? xt(c, t) : Nt(c, t)) : i && Nt(i, t)
            ;(l || i) && (r(), n('}'))
            p && n(')')
          })(e, t)
          break
        case 19:
          !(function(e, t) {
            const { test: n, consequent: o, alternate: r, newline: s } = e,
              { push: c, indent: i, deindent: l, newline: p } = t
            if (4 === n.type) {
              const e = !Se(n.content)
              e && c('('), Et(n, t), e && c(')')
            } else c('('), Nt(n, t), c(')')
            s && i(),
              t.indentLevel++,
              s || c(' '),
              c('? '),
              Nt(o, t),
              t.indentLevel--,
              s && p(),
              s || c(' '),
              c(': ')
            const a = 19 === r.type
            a || t.indentLevel++
            Nt(r, t), a || t.indentLevel--
            s && l(!0)
          })(e, t)
          break
        case 20:
          !(function(e, t) {
            const { push: n, helper: o, indent: r, deindent: s, newline: c } = t
            n(`_cache[${e.index}] || (`),
              e.isVNode && (r(), n(`${o(Y)}(-1),`), c())
            n(`_cache[${e.index}] = `),
              Nt(e.value, t),
              e.isVNode &&
                (n(','),
                c(),
                n(`${o(Y)}(1),`),
                c(),
                n(`_cache[${e.index}]`),
                s())
            n(')')
          })(e, t)
      }
  }
  function Et(e, t) {
    const { content: n, isStatic: o } = e
    t.push(o ? JSON.stringify(n) : n, e)
  }
  function kt(e, t) {
    for (let n = 0; n < e.children.length; n++) {
      const o = e.children[n]
      d(o) ? t.push(o) : Nt(o, t)
    }
  }
  function Ot(e, t) {
    const { push: n } = t
    if (8 === e.type) n('['), kt(e, t), n(']')
    else if (e.isStatic) {
      n(Se(e.content) ? e.content : JSON.stringify(e.content), e)
    } else n(`[${e.content}]`, e)
  }
  function _t(e, t, n = !1, o = !1) {
    return e
  }
  const Ct = yt(/^(if|else|else-if)$/, (e, t, n) =>
    $t(e, t, n, (e, t, o) => {
      const r = n.parent.children
      let s = r.indexOf(e),
        c = 0
      for (; s-- >= 0; ) {
        const e = r[s]
        e && 9 === e.type && (c += e.branches.length)
      }
      return () => {
        if (o) e.codegenNode = Mt(t, c, n)
        else {
          ;(function(e) {
            for (;;)
              if (19 === e.type) {
                if (19 !== e.alternate.type) return e
                e = e.alternate
              } else 20 === e.type && (e = e.value)
          })(e.codegenNode).alternate = Mt(t, c + e.branches.length - 1, n)
        }
      }
    })
  )
  function $t(e, t, n, o) {
    if (!('else' === t.name || (t.exp && t.exp.content.trim()))) {
      t.exp = pe('true', !1, t.exp ? t.exp.loc : e.loc)
    }
    if ('if' === t.name) {
      const r = It(e, t),
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
            const r = It(e, t)
            c.branches.push(r)
            const s = o && o(c, r, !1)
            gt(r, n), s && s(), (n.currentNode = null)
          }
          break
        }
        n.removeNode(c)
      }
    }
  }
  function It(e, t) {
    return {
      type: 10,
      loc: e.loc,
      condition: 'else' === t.name ? void 0 : t.exp,
      children: 3 !== e.tagType || ke(e, 'for') ? [e] : e.children,
      userKey: Oe(e, 'key')
    }
  }
  function Mt(e, t, n) {
    return e.condition
      ? de(e.condition, wt(e, t, n), ue(n.helper(V), ['""', 'true']))
      : wt(e, t, n)
  }
  function wt(e, t, n) {
    const { helper: o } = n,
      r = le('key', pe(`${t}`, !1, oe, 2)),
      { children: s } = e,
      c = s[0]
    if (1 !== s.length || 1 !== c.type) {
      if (1 === s.length && 11 === c.type) {
        const e = c.codegenNode
        return Pe(e, r, n), e
      }
      return se(n, o(O), ie([r]), s, '64', void 0, void 0, !0, !1, e.loc)
    }
    {
      const e = c.codegenNode
      return 13 === e.type && ((e.isBlock = !0), o(M), o(w)), Pe(e, r, n), e
    }
  }
  const Pt = yt('for', (e, t, n) => {
    const { helper: o } = n
    return Vt(e, t, n, t => {
      const r = ue(o(j), [t.source]),
        s = Oe(e, 'key'),
        c = s
          ? le('key', 6 === s.type ? pe(s.value.content, !0) : s.exp)
          : null,
        i = 4 === t.source.type && t.source.constType > 0,
        l = i ? 64 : s ? 128 : 256
      return (
        (t.codegenNode = se(
          n,
          o(O),
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
          const l = Me(e),
            { children: p } = t,
            a = 1 !== p.length || 1 !== p[0].type,
            u = we(e)
              ? e
              : l && 1 === e.children.length && we(e.children[0])
                ? e.children[0]
                : null
          u
            ? ((s = u.codegenNode), l && c && Pe(s, c, n))
            : a
              ? (s = se(
                  n,
                  o(O),
                  c ? ie([c]) : void 0,
                  e.children,
                  '64',
                  void 0,
                  void 0,
                  !0
                ))
              : ((s = p[0].codegenNode),
                l && c && Pe(s, c, n),
                (s.isBlock = !i),
                s.isBlock ? (o(M), o(w)) : o(P)),
            r.arguments.push(fe(Ft(t.parseResult), s, !0))
        }
      )
    })
  })
  function Vt(e, t, n, o) {
    if (!t.exp) return
    const r = Dt(t.exp)
    if (!r) return
    const { scopes: s } = n,
      { source: c, value: i, key: l, index: p } = r,
      a = {
        type: 11,
        loc: t.loc,
        source: c,
        valueAlias: i,
        keyAlias: l,
        objectIndexAlias: p,
        parseResult: r,
        children: Me(e) ? e.children : [e]
      }
    n.replaceNode(a), s.vFor++
    const u = o && o(a)
    return () => {
      s.vFor--, u && u()
    }
  }
  const Rt = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
    Lt = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    At = /^\(|\)$/g
  function Dt(e, t) {
    const n = e.loc,
      o = e.content,
      r = o.match(Rt)
    if (!r) return
    const [, s, c] = r,
      i = {
        source: Bt(n, c.trim(), o.indexOf(c, s.length)),
        value: void 0,
        key: void 0,
        index: void 0
      }
    let l = s
      .trim()
      .replace(At, '')
      .trim()
    const p = s.indexOf(l),
      a = l.match(Lt)
    if (a) {
      l = l.replace(Lt, '').trim()
      const e = a[1].trim()
      let t
      if (
        (e && ((t = o.indexOf(e, p + l.length)), (i.key = Bt(n, e, t))), a[2])
      ) {
        const r = a[2].trim()
        r &&
          (i.index = Bt(
            n,
            r,
            o.indexOf(r, i.key ? t + e.length : p + l.length)
          ))
      }
    }
    return l && (i.value = Bt(n, l, p)), i
  }
  function Bt(e, t, n) {
    return pe(t, !1, Te(e, n, t.length))
  }
  function Ft({ value: e, key: t, index: n }) {
    const o = []
    return (
      e && o.push(e),
      t && (e || o.push(pe('_', !1)), o.push(t)),
      n && (t || (e || o.push(pe('_', !1)), o.push(pe('__', !1))), o.push(n)),
      o
    )
  }
  const jt = pe('undefined', !1),
    Ht = (e, t) => {
      if (1 === e.type && (1 === e.tagType || 3 === e.tagType)) {
        const n = ke(e, 'slot')
        if (n)
          return (
            t.scopes.vSlot++,
            () => {
              t.scopes.vSlot--
            }
          )
      }
    },
    Kt = (e, t, n) => fe(e, t, !1, !0, t.length ? t[0].loc : n)
  function Gt(e, t, n = Kt) {
    t.helper(X)
    const { children: o, loc: r } = e,
      s = [],
      c = [],
      i = (e, t) => le('default', n(e, t, r))
    let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0
    const p = ke(e, 'slot', !0)
    if (p) {
      const { arg: e, exp: t } = p
      e && !me(e) && (l = !0), s.push(le(e || pe('default', !0), n(t, o, r)))
    }
    let a = !1,
      u = !1
    const f = [],
      d = new Set()
    for (let g = 0; g < o.length; g++) {
      const e = o[g]
      let r
      if (!Me(e) || !(r = ke(e, 'slot', !0))) {
        3 !== e.type && f.push(e)
        continue
      }
      if (p) break
      a = !0
      const { children: i, loc: h } = e,
        { arg: m = pe('default', !0), exp: y } = r
      let v
      me(m) ? (v = m ? m.content : 'default') : (l = !0)
      const S = n(y, i, h)
      let b, x, T
      if ((b = ke(e, 'if'))) (l = !0), c.push(de(b.exp, Ut(m, S), jt))
      else if ((x = ke(e, /^else(-if)?$/, !0))) {
        let e,
          t = g
        for (; t-- && ((e = o[t]), 3 === e.type); );
        if (e && Me(e) && ke(e, 'if')) {
          o.splice(g, 1), g--
          let e = c[c.length - 1]
          for (; 19 === e.alternate.type; ) e = e.alternate
          e.alternate = x.exp ? de(x.exp, Ut(m, S), jt) : Ut(m, S)
        }
      } else if ((T = ke(e, 'for'))) {
        l = !0
        const e = T.parseResult || Dt(T.exp)
        e && c.push(ue(t.helper(j), [e.source, fe(Ft(e), Ut(m, S), !0)]))
      } else {
        if (v) {
          if (d.has(v)) continue
          d.add(v), 'default' === v && (u = !0)
        }
        s.push(le(m, S))
      }
    }
    p || (a ? f.length && (u || s.push(i(void 0, f))) : s.push(i(void 0, o)))
    const h = l ? 2 : Wt(e.children) ? 3 : 1
    let m = ie(s.concat(le('_', pe(h + '', !1))), r)
    return (
      c.length && (m = ue(t.helper(K), [m, ce(c)])),
      { slots: m, hasDynamicSlots: l }
    )
  }
  function Ut(e, t) {
    return ie([le('name', e), le('fn', t)])
  }
  function Wt(e) {
    for (let t = 0; t < e.length; t++) {
      const n = e[t]
      switch (n.type) {
        case 1:
          if (2 === n.tagType || (0 === n.tagType && Wt(n.children))) return !0
          break
        case 9:
          if (Wt(n.branches)) return !0
          break
        case 10:
        case 11:
          if (Wt(n.children)) return !0
      }
    }
    return !1
  }
  const zt = new WeakMap(),
    Jt = (e, t) => {
      if (1 === e.type && (0 === e.tagType || 1 === e.tagType))
        return function() {
          const { tag: n, props: o } = e,
            r = 1 === e.tagType,
            s = r ? qt(e, t) : `"${n}"`
          let c,
            i,
            l,
            p,
            a,
            u,
            f = 0,
            d =
              (m(s) && s.callee === D) ||
              s === _ ||
              s === C ||
              (!r && ('svg' === n || 'foreignObject' === n || Oe(e, 'key', !0)))
          if (o.length > 0) {
            const n = Yt(e, t)
            ;(c = n.props), (f = n.patchFlag), (a = n.dynamicPropNames)
            const o = n.directives
            u =
              o && o.length
                ? ce(
                    o.map(e =>
                      (function(e, t) {
                        const n = [],
                          o = zt.get(e)
                        o
                          ? n.push(t.helperString(o))
                          : (t.helper(B),
                            t.directives.add(e.name),
                            n.push(Ve(e.name, 'directive')))
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
            s === $ && ((d = !0), (f |= 1024))
            if (r && s !== _ && s !== $) {
              const { slots: n, hasDynamicSlots: o } = Gt(e, t)
              ;(i = n), o && (f |= 1024)
            } else if (1 === e.children.length && s !== _) {
              const n = e.children[0],
                o = n.type,
                r = 5 === o || 8 === o
              r && 0 === at(n, t) && (f |= 1),
                (i = r || 2 === o ? n : e.children)
            } else i = e.children
          }
          0 !== f &&
            ((l = String(f)),
            a &&
              a.length &&
              (p = (function(e) {
                let t = '['
                for (let n = 0, o = e.length; n < o; n++)
                  (t += JSON.stringify(e[n])), n < o - 1 && (t += ', ')
                return t + ']'
              })(a))),
            (e.codegenNode = se(t, s, c, i, l, p, u, !!d, !1, e.loc))
        }
    }
  function qt(e, t, n = !1) {
    const { tag: o } = e,
      r = 'component' === e.tag ? Oe(e, 'is') : ke(e, 'is')
    if (r) {
      const e = 6 === r.type ? r.value && pe(r.value.content, !0) : r.exp
      if (e) return ue(t.helper(D), [e])
    }
    const s = ye(o) || t.isBuiltInComponent(o)
    return s
      ? (n || t.helper(s), s)
      : (t.helper(A), t.components.add(o), Ve(o, 'component'))
  }
  function Yt(e, t, n = e.props, o = !1) {
    const { tag: r, loc: s } = e,
      c = 1 === e.tagType
    let i = []
    const l = [],
      p = []
    let u = 0,
      f = !1,
      d = !1,
      m = !1,
      y = !1,
      v = !1,
      S = !1
    const b = [],
      x = ({ key: e, value: n }) => {
        if (me(e)) {
          const o = e.content,
            r = (e => a.test(e))(o)
          if (
            (c ||
              !r ||
              'onclick' === o.toLowerCase() ||
              'onUpdate:modelValue' === o ||
              g(o) ||
              (y = !0),
            r && g(o) && (S = !0),
            20 === n.type || ((4 === n.type || 8 === n.type) && at(n, t) > 0))
          )
            return
          'ref' === o
            ? (f = !0)
            : 'class' !== o || c
              ? 'style' !== o || c
                ? 'key' === o || b.includes(o) || b.push(o)
                : (m = !0)
              : (d = !0)
        } else v = !0
      }
    for (let a = 0; a < n.length; a++) {
      const c = n[a]
      if (6 === c.type) {
        const { loc: e, name: t, value: n } = c
        let o = !0
        if (('ref' === t && (f = !0), 'is' === t && 'component' === r)) continue
        i.push(
          le(
            pe(t, !0, Te(e, 0, t.length)),
            pe(n ? n.content : '', o, n ? n.loc : e)
          )
        )
      } else {
        const { name: n, arg: a, exp: u, loc: f } = c,
          d = 'bind' === n,
          m = 'on' === n
        if ('slot' === n) continue
        if ('once' === n) continue
        if ('is' === n || (d && 'component' === r && _e(a, 'is'))) continue
        if (m && o) continue
        if (!a && (d || m)) {
          ;(v = !0),
            u &&
              (i.length && (l.push(ie(Zt(i), s)), (i = [])),
              l.push(
                d
                  ? u
                  : { type: 14, loc: f, callee: t.helper(W), arguments: [u] }
              ))
          continue
        }
        const g = t.directiveTransforms[n]
        if (g) {
          const { props: n, needRuntime: r } = g(c, e, t)
          !o && n.forEach(x),
            i.push(...n),
            r && (p.push(c), h(r) && zt.set(c, r))
        } else p.push(c)
      }
    }
    let T
    return (
      l.length
        ? (i.length && l.push(ie(Zt(i), s)),
          (T = l.length > 1 ? ue(t.helper(U), l, s) : l[0]))
        : i.length && (T = ie(Zt(i), s)),
      v
        ? (u |= 16)
        : (d && (u |= 2), m && (u |= 4), b.length && (u |= 8), y && (u |= 32)),
      (0 !== u && 32 !== u) || !(f || S || p.length > 0) || (u |= 512),
      { props: T, directives: p, patchFlag: u, dynamicPropNames: b }
    )
  }
  function Zt(e) {
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
        ? ('style' === s || 'class' === s || s.startsWith('on')) && Xt(c, r)
        : (t.set(s, r), n.push(r))
    }
    return n
  }
  function Xt(e, t) {
    17 === e.value.type
      ? e.value.elements.push(t.value)
      : (e.value = ce([e.value, t.value], e.loc))
  }
  const Qt = (e, t) => {
    if (we(e)) {
      const { children: n, loc: o } = e,
        { slotName: r, slotProps: s } = en(e, t),
        c = [t.prefixIdentifiers ? '_ctx.$slots' : '$slots', r]
      s && c.push(s),
        n.length && (s || c.push('{}'), c.push(fe([], n, !1, !1, o))),
        t.slotted &&
          (s || c.push('{}'), n.length || c.push('undefined'), c.push('true')),
        (e.codegenNode = ue(t.helper(H), c, o))
    }
  }
  function en(e, t) {
    let n,
      o = '"default"'
    const r = []
    for (let s = 0; s < e.props.length; s++) {
      const t = e.props[s]
      6 === t.type
        ? t.value &&
          ('name' === t.name
            ? (o = JSON.stringify(t.value.content))
            : ((t.name = S(t.name)), r.push(t)))
        : 'bind' === t.name && _e(t.arg, 'name')
          ? t.exp && (o = t.exp)
          : ('bind' === t.name &&
              t.arg &&
              me(t.arg) &&
              (t.arg.content = S(t.arg.content)),
            r.push(t))
    }
    if (r.length > 0) {
      const { props: o, directives: s } = Yt(e, t, r)
      n = o
    }
    return { slotName: o, slotProps: n }
  }
  const tn = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/,
    nn = (e, t, n, o) => {
      const { loc: r, modifiers: s, arg: c } = e
      let i
      if (4 === c.type)
        if (c.isStatic) {
          i = pe(N(S(c.content)), !0, c.loc)
        } else i = ae([`${n.helperString(q)}(`, c, ')'])
      else
        (i = c),
          i.children.unshift(`${n.helperString(q)}(`),
          i.children.push(')')
      let l = e.exp
      l && !l.content.trim() && (l = void 0)
      let p = n.cacheHandlers && !l
      if (l) {
        const e = xe(l.content),
          t = !(e || tn.test(l.content)),
          n = l.content.includes(';')
        ;(t || (p && e)) &&
          (l = ae([
            `${t ? '$event' : '(...args)'} => ${n ? '{' : '('}`,
            l,
            n ? '}' : ')'
          ]))
      }
      let a = { props: [le(i, l || pe('() => {}', !1, r))] }
      return (
        o && (a = o(a)), p && (a.props[0].value = n.cache(a.props[0].value)), a
      )
    },
    on = (e, t, n) => {
      const { exp: o, modifiers: r, loc: s } = e,
        c = e.arg
      return (
        4 !== c.type
          ? (c.children.unshift('('), c.children.push(') || ""'))
          : c.isStatic || (c.content = `${c.content} || ""`),
        r.includes('camel') &&
          (4 === c.type
            ? (c.content = c.isStatic
                ? S(c.content)
                : `${n.helperString(z)}(${c.content})`)
            : (c.children.unshift(`${n.helperString(z)}(`),
              c.children.push(')'))),
        !o || (4 === o.type && !o.content.trim())
          ? { props: [le(c, pe('', !0, s))] }
          : { props: [le(c, o)] }
      )
    },
    rn = (e, t) => {
      if (0 === e.type || 1 === e.type || 11 === e.type || 10 === e.type)
        return () => {
          const n = e.children
          let o,
            r = !1
          for (let e = 0; e < n.length; e++) {
            const t = n[e]
            if ($e(t)) {
              r = !0
              for (let r = e + 1; r < n.length; r++) {
                const s = n[r]
                if (!$e(s)) {
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
              if ($e(o) || 8 === o.type) {
                const r = []
                ;(2 === o.type && ' ' === o.content) || r.push(o),
                  t.ssr || 0 !== at(o, t) || r.push('1'),
                  (n[e] = {
                    type: 12,
                    content: o,
                    loc: o.loc,
                    codegenNode: ue(t.helper(R), r)
                  })
              }
            }
        }
    },
    sn = new WeakSet(),
    cn = (e, t) => {
      if (1 === e.type && ke(e, 'once', !0)) {
        if (sn.has(e)) return
        return (
          sn.add(e),
          t.helper(Y),
          () => {
            const e = t.currentNode
            e.codegenNode && (e.codegenNode = t.cache(e.codegenNode, !0))
          }
        )
      }
    },
    ln = (e, t, n) => {
      const { exp: o, arg: r } = e
      if (!o) return pn()
      const s = o.loc.source
      if (!xe(4 === o.type ? o.content : s)) return pn()
      const c = r || pe('modelValue', !0),
        i = r
          ? me(r)
            ? `onUpdate:${r.content}`
            : ae(['"onUpdate:" + ', r])
          : 'onUpdate:modelValue'
      let l
      l = ae([`${n.isTS ? '($event: any)' : '$event'} => (`, o, ' = $event)'])
      const p = [le(c, e.exp), le(i, l)]
      if (e.modifiers.length && 1 === t.tagType) {
        const t = e.modifiers
            .map(e => (Se(e) ? e : JSON.stringify(e)) + ': true')
            .join(', '),
          n = r
            ? me(r)
              ? `${r.content}Modifiers`
              : ae([r, ' + "Modifiers"'])
            : 'modelModifiers'
        p.push(le(n, pe(`{ ${t} }`, !1, e.loc, 2)))
      }
      return pn(p)
    }
  function pn(e = []) {
    return { props: e }
  }
  function an(e) {
    return [[cn, Ct, Pt, Qt, Jt, Ht, rn], { on: nn, bind: on, model: ln }]
  }
  function un(e, t = {}) {
    const n = t.onError || E,
      o = 'module' === t.mode
    !0 === t.prefixIdentifiers ? n(k(45)) : o && n(k(46))
    t.cacheHandlers && n(k(47)), t.scopeId && !o && n(k(48))
    const r = d(e) ? De(e, t) : e,
      [s, c] = an()
    return (
      mt(
        r,
        u({}, t, {
          prefixIdentifiers: false,
          nodeTransforms: [...s, ...(t.nodeTransforms || [])],
          directiveTransforms: u({}, c, t.directiveTransforms || {})
        })
      ),
      St(r, u({}, t, { prefixIdentifiers: false }))
    )
  }
  const fn = () => ({ props: [] }),
    dn = Symbol(''),
    hn = Symbol(''),
    mn = Symbol(''),
    gn = Symbol(''),
    yn = Symbol(''),
    vn = Symbol(''),
    Sn = Symbol(''),
    bn = Symbol(''),
    xn = Symbol(''),
    Tn = Symbol('')
  let Nn
  ne({
    [dn]: 'vModelRadio',
    [hn]: 'vModelCheckbox',
    [mn]: 'vModelText',
    [gn]: 'vModelSelect',
    [yn]: 'vModelDynamic',
    [vn]: 'withModifiers',
    [Sn]: 'withKeys',
    [bn]: 'vShow',
    [xn]: 'Transition',
    [Tn]: 'TransitionGroup'
  })
  const En = t('style,iframe,script,noscript', !0),
    kn = {
      isVoidTag: c,
      isNativeTag: e => r(e) || s(e),
      isPreTag: e => 'pre' === e,
      decodeEntities: function(e) {
        return (
          ((Nn || (Nn = document.createElement('div'))).innerHTML = e),
          Nn.textContent
        )
      },
      isBuiltInComponent: e =>
        ge(e, 'Transition') ? xn : ge(e, 'TransitionGroup') ? Tn : void 0,
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
          if (En(e)) return 2
        }
        return 0
      }
    },
    On = e => {
      1 === e.type &&
        e.props.forEach((t, n) => {
          6 === t.type &&
            'style' === t.name &&
            t.value &&
            (e.props[n] = {
              type: 7,
              name: 'bind',
              arg: pe('style', !0, t.loc),
              exp: _n(t.value.content, t.loc),
              modifiers: [],
              loc: t.loc
            })
        })
    },
    _n = (e, t) => {
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
  function Cn(e, t) {
    return k(e, t)
  }
  const $n = t('passive,once,capture'),
    In = t('stop,prevent,self,ctrl,shift,alt,meta,exact,middle'),
    Mn = t('left,right'),
    wn = t('onkeyup,onkeydown,onkeypress', !0),
    Pn = (e, t) =>
      me(e) && 'onclick' === e.content.toLowerCase()
        ? pe(t, !0)
        : 4 !== e.type
          ? ae(['(', e, `) === "onClick" ? "${t}" : (`, e, ')'])
          : e,
    Vn = (e, t) => {
      1 !== e.type ||
        0 !== e.tagType ||
        ('script' !== e.tag && 'style' !== e.tag) ||
        t.removeNode()
    },
    Rn = [On],
    Ln = {
      cloak: fn,
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
                o ? ue(n.helperString(G), [o], r) : pe('', !0)
              )
            ]
          }
        )
      },
      model: (e, t, n) => {
        const o = ln(e, t, n)
        if (!o.props.length || 1 === t.tagType) return o
        const { tag: r } = t,
          s = n.isCustomElement(r)
        if ('input' === r || 'textarea' === r || 'select' === r || s) {
          let e = mn,
            c = !1
          if ('input' === r || s) {
            const n = Oe(t, 'type')
            if (n) {
              if (7 === n.type) e = yn
              else if (n.value)
                switch (n.value.content) {
                  case 'radio':
                    e = dn
                    break
                  case 'checkbox':
                    e = hn
                    break
                  case 'file':
                    c = !0
                }
            } else Ce(t) && (e = yn)
          } else 'select' === r && (e = gn)
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
        nn(e, 0, n, t => {
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
              $n(c)
                ? r.push(c)
                : Mn(c)
                  ? me(e)
                    ? wn(e.content)
                      ? n.push(c)
                      : o.push(c)
                    : (n.push(c), o.push(c))
                  : In(c)
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
            (i.includes('right') && (r = Pn(r, 'onContextmenu')),
            i.includes('middle') && (r = Pn(r, 'onMouseup')),
            i.length && (s = ue(n.helper(vn), [s, JSON.stringify(i)])),
            !c.length ||
              (me(r) && !wn(r.content)) ||
              (s = ue(n.helper(Sn), [s, JSON.stringify(c)])),
            l.length)
          ) {
            const e = l.map(T).join('')
            r = me(r) ? pe(`${r.content}${e}`, !0) : ae(['(', r, `) + "${e}"`])
          }
          return { props: [le(r, s)] }
        }),
      show: (e, t, n) => ({ props: [], needRuntime: n.helper(bn) })
    }
  return (
    (e.BASE_TRANSITION = I),
    (e.CAMELIZE = z),
    (e.CAPITALIZE = J),
    (e.CREATE_BLOCK = w),
    (e.CREATE_COMMENT = V),
    (e.CREATE_SLOTS = K),
    (e.CREATE_STATIC = L),
    (e.CREATE_TEXT = R),
    (e.CREATE_VNODE = P),
    (e.DOMDirectiveTransforms = Ln),
    (e.DOMNodeTransforms = Rn),
    (e.FRAGMENT = O),
    (e.IS_REF = ee),
    (e.KEEP_ALIVE = $),
    (e.MERGE_PROPS = U),
    (e.OPEN_BLOCK = M),
    (e.RENDER_LIST = j),
    (e.RENDER_SLOT = H),
    (e.RESOLVE_COMPONENT = A),
    (e.RESOLVE_DIRECTIVE = B),
    (e.RESOLVE_DYNAMIC_COMPONENT = D),
    (e.SET_BLOCK_TRACKING = Y),
    (e.SET_SCOPE_ID = Z),
    (e.SUSPENSE = C),
    (e.TELEPORT = _),
    (e.TO_DISPLAY_STRING = G),
    (e.TO_HANDLERS = W),
    (e.TO_HANDLER_KEY = q),
    (e.TRANSITION = xn),
    (e.TRANSITION_GROUP = Tn),
    (e.UNREF = Q),
    (e.V_MODEL_CHECKBOX = hn),
    (e.V_MODEL_DYNAMIC = yn),
    (e.V_MODEL_RADIO = dn),
    (e.V_MODEL_SELECT = gn),
    (e.V_MODEL_TEXT = mn),
    (e.V_ON_WITH_KEYS = Sn),
    (e.V_ON_WITH_MODIFIERS = vn),
    (e.V_SHOW = bn),
    (e.WITH_CTX = X),
    (e.WITH_DIRECTIVES = F),
    (e.advancePositionWithClone = Ne),
    (e.advancePositionWithMutation = Ee),
    (e.assert = function(e, t) {
      if (!e) throw new Error(t || 'unexpected compiler condition')
    }),
    (e.baseCompile = un),
    (e.baseParse = De),
    (e.buildProps = Yt),
    (e.buildSlots = Gt),
    (e.compile = function(e, t = {}) {
      return un(
        e,
        u({}, kn, t, {
          nodeTransforms: [Vn, ...Rn, ...(t.nodeTransforms || [])],
          directiveTransforms: u({}, Ln, t.directiveTransforms || {}),
          transformHoist: null
        })
      )
    }),
    (e.createArrayExpression = ce),
    (e.createAssignmentExpression = function(e, t) {
      return { type: 24, left: e, right: t, loc: oe }
    }),
    (e.createBlockStatement = function(e) {
      return { type: 21, body: e, loc: oe }
    }),
    (e.createCacheExpression = he),
    (e.createCallExpression = ue),
    (e.createCompilerError = k),
    (e.createCompoundExpression = ae),
    (e.createConditionalExpression = de),
    (e.createDOMCompilerError = Cn),
    (e.createForLoopParams = Ft),
    (e.createFunctionExpression = fe),
    (e.createIfStatement = function(e, t, n) {
      return { type: 23, test: e, consequent: t, alternate: n, loc: oe }
    }),
    (e.createInterpolation = function(e, t) {
      return { type: 5, loc: t, content: d(e) ? pe(e, !1, t) : e }
    }),
    (e.createObjectExpression = ie),
    (e.createObjectProperty = le),
    (e.createReturnStatement = function(e) {
      return { type: 26, returns: e, loc: oe }
    }),
    (e.createRoot = re),
    (e.createSequenceExpression = function(e) {
      return { type: 25, expressions: e, loc: oe }
    }),
    (e.createSimpleExpression = pe),
    (e.createStructuralDirectiveTransform = yt),
    (e.createTemplateLiteral = function(e) {
      return { type: 22, elements: e, loc: oe }
    }),
    (e.createTransformContext = ht),
    (e.createVNodeCall = se),
    (e.findDir = ke),
    (e.findProp = Oe),
    (e.generate = St),
    (e.generateCodeFrame = function(e, t = 0, n = e.length) {
      const o = e.split(/\r?\n/)
      let r = 0
      const s = []
      for (let c = 0; c < o.length; c++)
        if (((r += o[c].length + 1), r >= t)) {
          for (let e = c - 2; e <= c + 2 || n > r; e++) {
            if (e < 0 || e >= o.length) continue
            const i = e + 1
            s.push(
              `${i}${' '.repeat(Math.max(3 - String(i).length, 0))}|  ${o[e]}`
            )
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
    }),
    (e.getBaseTransformPreset = an),
    (e.getInnerRange = Te),
    (e.hasDynamicKeyVBind = Ce),
    (e.hasScopeRef = function e(t, n) {
      if (!t || 0 === Object.keys(n).length) return !1
      switch (t.type) {
        case 1:
          for (let o = 0; o < t.props.length; o++) {
            const r = t.props[o]
            if (7 === r.type && (e(r.arg, n) || e(r.exp, n))) return !0
          }
          return t.children.some(t => e(t, n))
        case 11:
          return !!e(t.source, n) || t.children.some(t => e(t, n))
        case 9:
          return t.branches.some(t => e(t, n))
        case 10:
          return !!e(t.condition, n) || t.children.some(t => e(t, n))
        case 4:
          return !t.isStatic && Se(t.content) && !!n[t.content]
        case 8:
          return t.children.some(t => m(t) && e(t, n))
        case 5:
        case 12:
          return e(t.content, n)
        case 2:
        case 3:
        default:
          return !1
      }
    }),
    (e.helperNameMap = te),
    (e.injectProp = Pe),
    (e.isBindKey = _e),
    (e.isBuiltInType = ge),
    (e.isCoreComponent = ye),
    (e.isMemberExpression = xe),
    (e.isSimpleIdentifier = Se),
    (e.isSlotOutlet = we),
    (e.isStaticExp = me),
    (e.isTemplateNode = Me),
    (e.isText = $e),
    (e.isVSlot = Ie),
    (e.locStub = oe),
    (e.noopDirectiveTransform = fn),
    (e.parse = function(e, t = {}) {
      return De(e, u({}, kn, t))
    }),
    (e.parserOptions = kn),
    (e.processExpression = _t),
    (e.processFor = Vt),
    (e.processIf = $t),
    (e.processSlotOutlet = en),
    (e.registerRuntimeHelpers = ne),
    (e.resolveComponentType = qt),
    (e.toValidAssetId = Ve),
    (e.trackSlotScopes = Ht),
    (e.trackVForSlotScopes = (e, t) => {
      let n
      if (Me(e) && e.props.some(Ie) && (n = ke(e, 'for'))) {
        const e = (n.parseResult = Dt(n.exp))
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
    }),
    (e.transform = mt),
    (e.transformBind = on),
    (e.transformElement = Jt),
    (e.transformExpression = (e, t) => {
      if (5 === e.type) e.content = _t(e.content)
      else if (1 === e.type)
        for (let n = 0; n < e.props.length; n++) {
          const o = e.props[n]
          if (7 === o.type && 'for' !== o.name) {
            const e = o.exp,
              n = o.arg
            !e ||
              4 !== e.type ||
              ('on' === o.name && n) ||
              (o.exp = _t(e, t, 'slot' === o.name)),
              n && 4 === n.type && !n.isStatic && (o.arg = _t(n))
          }
        }
    }),
    (e.transformModel = ln),
    (e.transformOn = nn),
    (e.transformStyle = On),
    (e.traverseNode = gt),
    Object.defineProperty(e, '__esModule', { value: !0 }),
    e
  )
})({})
