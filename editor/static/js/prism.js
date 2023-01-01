/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+c+csharp+cpp+docker+git+go+java+javadoc+javadoclike+jsdoc+js-extras+json+json5+less+markdown+markup-templating+nginx+objectivec+plsql+powershell+pug+python+jsx+tsx+regex+ruby+rust+sass+scss+sql+stylus+swift+typescript+xml-doc+yaml&plugins=line-highlight+line-numbers+show-language+normalize-whitespace+toolbar+copy-to-clipboard+download-button+match-braces */
var _self =
        "undefined" != typeof window
            ? window
            : "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
    Prism = (function (e) {
        var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            r = {},
            a = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler:
                    e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof i
                            ? new i(n.type, e(n.content), n.alias)
                            : Array.isArray(n)
                            ? n.map(e)
                            : n
                                  .replace(/&/g, "&amp;")
                                  .replace(/</g, "&lt;")
                                  .replace(/\u00a0/g, " ");
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1);
                    },
                    objId: function (e) {
                        return (
                            e.__id ||
                                Object.defineProperty(e, "__id", {
                                    value: ++t
                                }),
                            e.__id
                        );
                    },
                    clone: function e(n, t) {
                        var r, i;
                        switch (((t = t || {}), a.util.type(n))) {
                            case "Object":
                                if (((i = a.util.objId(n)), t[i])) return t[i];
                                for (var l in ((r = {}), (t[i] = r), n))
                                    n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                                return r;
                            case "Array":
                                return (
                                    (i = a.util.objId(n)),
                                    t[i]
                                        ? t[i]
                                        : ((r = []),
                                          (t[i] = r),
                                          n.forEach(function (n, a) {
                                              r[a] = e(n, t);
                                          }),
                                          r)
                                );
                            default:
                                return n;
                        }
                    },
                    getLanguage: function (e) {
                        for (; e; ) {
                            var t = n.exec(e.className);
                            if (t) return t[1].toLowerCase();
                            e = e.parentElement;
                        }
                        return "none";
                    },
                    setLanguage: function (e, t) {
                        (e.className = e.className.replace(
                            RegExp(n, "gi"),
                            ""
                        )),
                            e.classList.add("language-" + t);
                    },
                    currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document)
                            return document.currentScript;
                        try {
                            throw new Error();
                        } catch (r) {
                            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                                r.stack
                            ) || [])[1];
                            if (e) {
                                var n = document.getElementsByTagName("script");
                                for (var t in n) if (n[t].src == e) return n[t];
                            }
                            return null;
                        }
                    },
                    isActive: function (e, n, t) {
                        for (var r = "no-" + n; e; ) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement;
                        }
                        return !!t;
                    }
                },
                languages: {
                    plain: r,
                    plaintext: r,
                    text: r,
                    txt: r,
                    extend: function (e, n) {
                        var t = a.util.clone(a.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t;
                    },
                    insertBefore: function (e, n, t, r) {
                        var i = (r = r || a.languages)[e],
                            l = {};
                        for (var o in i)
                            if (i.hasOwnProperty(o)) {
                                if (o == n)
                                    for (var s in t)
                                        t.hasOwnProperty(s) && (l[s] = t[s]);
                                t.hasOwnProperty(o) || (l[o] = i[o]);
                            }
                        var u = r[e];
                        return (
                            (r[e] = l),
                            a.languages.DFS(a.languages, function (n, t) {
                                t === u && n != e && (this[n] = l);
                            }),
                            l
                        );
                    },
                    DFS: function e(n, t, r, i) {
                        i = i || {};
                        var l = a.util.objId;
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                t.call(n, o, n[o], r || o);
                                var s = n[o],
                                    u = a.util.type(s);
                                "Object" !== u || i[l(s)]
                                    ? "Array" !== u ||
                                      i[l(s)] ||
                                      ((i[l(s)] = !0), e(s, t, o, i))
                                    : ((i[l(s)] = !0), e(s, t, null, i));
                            }
                    }
                },
                plugins: {},
                highlightAll: function (e, n) {
                    a.highlightAllUnder(document, e, n);
                },
                highlightAllUnder: function (e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector:
                            'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    a.hooks.run("before-highlightall", r),
                        (r.elements = Array.prototype.slice.apply(
                            r.container.querySelectorAll(r.selector)
                        )),
                        a.hooks.run("before-all-elements-highlight", r);
                    for (var i, l = 0; (i = r.elements[l++]); )
                        a.highlightElement(i, !0 === n, r.callback);
                },
                highlightElement: function (n, t, r) {
                    var i = a.util.getLanguage(n),
                        l = a.languages[i];
                    a.util.setLanguage(n, i);
                    var o = n.parentElement;
                    o &&
                        "pre" === o.nodeName.toLowerCase() &&
                        a.util.setLanguage(o, i);
                    var s = {
                        element: n,
                        language: i,
                        grammar: l,
                        code: n.textContent
                    };
                    function u(e) {
                        (s.highlightedCode = e),
                            a.hooks.run("before-insert", s),
                            (s.element.innerHTML = s.highlightedCode),
                            a.hooks.run("after-highlight", s),
                            a.hooks.run("complete", s),
                            r && r.call(s.element);
                    }
                    if (
                        (a.hooks.run("before-sanity-check", s),
                        (o = s.element.parentElement) &&
                            "pre" === o.nodeName.toLowerCase() &&
                            !o.hasAttribute("tabindex") &&
                            o.setAttribute("tabindex", "0"),
                        !s.code)
                    )
                        return (
                            a.hooks.run("complete", s),
                            void (r && r.call(s.element))
                        );
                    if ((a.hooks.run("before-highlight", s), s.grammar))
                        if (t && e.Worker) {
                            var c = new Worker(a.filename);
                            (c.onmessage = function (e) {
                                u(e.data);
                            }),
                                c.postMessage(
                                    JSON.stringify({
                                        language: s.language,
                                        code: s.code,
                                        immediateClose: !0
                                    })
                                );
                        } else u(a.highlight(s.code, s.grammar, s.language));
                    else u(a.util.encode(s.code));
                },
                highlight: function (e, n, t) {
                    var r = { code: e, grammar: n, language: t };
                    if ((a.hooks.run("before-tokenize", r), !r.grammar))
                        throw new Error(
                            'The language "' + r.language + '" has no grammar.'
                        );
                    return (
                        (r.tokens = a.tokenize(r.code, r.grammar)),
                        a.hooks.run("after-tokenize", r),
                        i.stringify(a.util.encode(r.tokens), r.language)
                    );
                },
                tokenize: function (e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest;
                    }
                    var a = new s();
                    return (
                        u(a, a.head, e),
                        o(e, a, n, a.head, 0),
                        (function (e) {
                            for (var n = [], t = e.head.next; t !== e.tail; )
                                n.push(t.value), (t = t.next);
                            return n;
                        })(a)
                    );
                },
                hooks: {
                    all: {},
                    add: function (e, n) {
                        var t = a.hooks.all;
                        (t[e] = t[e] || []), t[e].push(n);
                    },
                    run: function (e, n) {
                        var t = a.hooks.all[e];
                        if (t && t.length)
                            for (var r, i = 0; (r = t[i++]); ) r(n);
                    }
                },
                Token: i
            };
        function i(e, n, t, r) {
            (this.type = e),
                (this.content = n),
                (this.alias = t),
                (this.length = 0 | (r || "").length);
        }
        function l(e, n, t, r) {
            e.lastIndex = n;
            var a = e.exec(t);
            if (a && r && a[1]) {
                var i = a[1].length;
                (a.index += i), (a[0] = a[0].slice(i));
            }
            return a;
        }
        function o(e, n, t, r, s, g) {
            for (var f in t)
                if (t.hasOwnProperty(f) && t[f]) {
                    var h = t[f];
                    h = Array.isArray(h) ? h : [h];
                    for (var d = 0; d < h.length; ++d) {
                        if (g && g.cause == f + "," + d) return;
                        var v = h[d],
                            p = v.inside,
                            m = !!v.lookbehind,
                            y = !!v.greedy,
                            k = v.alias;
                        if (y && !v.pattern.global) {
                            var x = v.pattern.toString().match(/[imsuy]*$/)[0];
                            v.pattern = RegExp(v.pattern.source, x + "g");
                        }
                        for (
                            var b = v.pattern || v, w = r.next, A = s;
                            w !== n.tail && !(g && A >= g.reach);
                            A += w.value.length, w = w.next
                        ) {
                            var E = w.value;
                            if (n.length > e.length) return;
                            if (!(E instanceof i)) {
                                var P,
                                    L = 1;
                                if (y) {
                                    if (
                                        !(P = l(b, A, e, m)) ||
                                        P.index >= e.length
                                    )
                                        break;
                                    var S = P.index,
                                        O = P.index + P[0].length,
                                        j = A;
                                    for (j += w.value.length; S >= j; )
                                        j += (w = w.next).value.length;
                                    if (
                                        ((A = j -= w.value.length),
                                        w.value instanceof i)
                                    )
                                        continue;
                                    for (
                                        var C = w;
                                        C !== n.tail &&
                                        (j < O || "string" == typeof C.value);
                                        C = C.next
                                    )
                                        L++, (j += C.value.length);
                                    L--, (E = e.slice(A, j)), (P.index -= A);
                                } else if (!(P = l(b, 0, E, m))) continue;
                                S = P.index;
                                var N = P[0],
                                    _ = E.slice(0, S),
                                    M = E.slice(S + N.length),
                                    W = A + E.length;
                                g && W > g.reach && (g.reach = W);
                                var z = w.prev;
                                if (
                                    (_ && ((z = u(n, z, _)), (A += _.length)),
                                    c(n, z, L),
                                    (w = u(
                                        n,
                                        z,
                                        new i(f, p ? a.tokenize(N, p) : N, k, N)
                                    )),
                                    M && u(n, w, M),
                                    L > 1)
                                ) {
                                    var I = { cause: f + "," + d, reach: W };
                                    o(e, n, t, w.prev, A, I),
                                        g &&
                                            I.reach > g.reach &&
                                            (g.reach = I.reach);
                                }
                            }
                        }
                    }
                }
        }
        function s() {
            var e = { value: null, prev: null, next: null },
                n = { value: null, prev: e, next: null };
            (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
        }
        function u(e, n, t) {
            var r = n.next,
                a = { value: t, prev: n, next: r };
            return (n.next = a), (r.prev = a), e.length++, a;
        }
        function c(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            (n.next = r), (r.prev = n), (e.length -= a);
        }
        if (
            ((e.Prism = a),
            (i.stringify = function e(n, t) {
                if ("string" == typeof n) return n;
                if (Array.isArray(n)) {
                    var r = "";
                    return (
                        n.forEach(function (n) {
                            r += e(n, t);
                        }),
                        r
                    );
                }
                var i = {
                        type: n.type,
                        content: e(n.content, t),
                        tag: "span",
                        classes: ["token", n.type],
                        attributes: {},
                        language: t
                    },
                    l = n.alias;
                l &&
                    (Array.isArray(l)
                        ? Array.prototype.push.apply(i.classes, l)
                        : i.classes.push(l)),
                    a.hooks.run("wrap", i);
                var o = "";
                for (var s in i.attributes)
                    o +=
                        " " +
                        s +
                        '="' +
                        (i.attributes[s] || "").replace(/"/g, "&quot;") +
                        '"';
                return (
                    "<" +
                    i.tag +
                    ' class="' +
                    i.classes.join(" ") +
                    '"' +
                    o +
                    ">" +
                    i.content +
                    "</" +
                    i.tag +
                    ">"
                );
            }),
            !e.document)
        )
            return e.addEventListener
                ? (a.disableWorkerMessageHandler ||
                      e.addEventListener(
                          "message",
                          function (n) {
                              var t = JSON.parse(n.data),
                                  r = t.language,
                                  i = t.code,
                                  l = t.immediateClose;
                              e.postMessage(a.highlight(i, a.languages[r], r)),
                                  l && e.close();
                          },
                          !1
                      ),
                  a)
                : a;
        var g = a.util.currentScript();
        function f() {
            a.manual || a.highlightAll();
        }
        if (
            (g &&
                ((a.filename = g.src),
                g.hasAttribute("data-manual") && (a.manual = !0)),
            !a.manual)
        ) {
            var h = document.readyState;
            "loading" === h || ("interactive" === h && g && g.defer)
                ? document.addEventListener("DOMContentLoaded", f)
                : window.requestAnimationFrame
                ? window.requestAnimationFrame(f)
                : window.setTimeout(f, 16);
        }
        return a;
    })(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
    "undefined" != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
        pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
        }
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
        pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }
                    ]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ }
            }
        }
    },
    entity: [
        { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
        /&#x?[\da-f]{1,8};/i
    ]
}),
    (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
        Prism.languages.markup.entity),
    (Prism.languages.markup.doctype.inside["internal-subset"].inside =
        Prism.languages.markup),
    Prism.hooks.add("wrap", function (a) {
        "entity" === a.type &&
            (a.attributes.title = a.content.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        value: function (a, e) {
            var s = {};
            (s["language-" + e] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[e]
            }),
                (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var t = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: s
                }
            };
            t["language-" + e] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[e]
            };
            var n = {};
            (n[a] = {
                pattern: RegExp(
                    "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
                        /__/g,
                        function () {
                            return a;
                        }
                    ),
                    "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: t
            }),
                Prism.languages.insertBefore("markup", "cdata", n);
        }
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
        value: function (a, e) {
            Prism.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                    "(^|[\"'\\s])(?:" +
                        a +
                        ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))",
                    "i"
                ),
                lookbehind: !0,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern:
                                    /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [e, "language-" + e],
                                inside: Prism.languages[e]
                            },
                            punctuation: [
                                { pattern: /^=/, alias: "attr-equals" },
                                /"|'/
                            ]
                        }
                    }
                }
            });
        }
    }),
    (Prism.languages.html = Prism.languages.markup),
    (Prism.languages.mathml = Prism.languages.markup),
    (Prism.languages.svg = Prism.languages.markup),
    (Prism.languages.xml = Prism.languages.extend("markup", {})),
    (Prism.languages.ssml = Prism.languages.xml),
    (Prism.languages.atom = Prism.languages.xml),
    (Prism.languages.rss = Prism.languages.xml);
!(function (s) {
    var e =
        /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: RegExp(
                "@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" +
                    e.source +
                    ")*?(?:;|(?=\\s*\\{))"
            ),
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern:
                        /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0
                }
            }
        },
        url: {
            pattern: RegExp(
                "\\burl\\((?:" +
                    e.source +
                    "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
                "i"
            ),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + e.source + "$"), alias: "url" }
            }
        },
        selector: {
            pattern: RegExp(
                "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                    e.source +
                    ")*(?=\\s*\\{)"
            ),
            lookbehind: !0
        },
        string: { pattern: e, greedy: !0 },
        property: {
            pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0
        },
        important: /!important\b/i,
        function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0
        },
        punctuation: /[(){};:,]/
    }),
        (s.languages.css.atrule.inside.rest = s.languages.css);
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.clike = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0
        },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern:
            /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ }
    },
    keyword:
        /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
(Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [
        Prism.languages.clike["class-name"],
        {
            pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0
        }
    ],
    keyword: [
        { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
        {
            pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }
    ],
    function:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp(
            "(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"
        ),
        lookbehind: !0
    },
    operator:
        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
})),
    (Prism.languages.javascript["class-name"][0].pattern =
        /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: RegExp(
                "((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: Prism.languages.regex
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/
            }
        },
        "function-variable": {
            pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
        },
        parameter: [
            {
                pattern:
                    /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: Prism.languages.javascript
            },
            {
                pattern:
                    /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: Prism.languages.javascript
            },
            {
                pattern:
                    /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: Prism.languages.javascript
            },
            {
                pattern:
                    /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: Prism.languages.javascript
            }
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }),
    Prism.languages.insertBefore("javascript", "string", {
        hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
        "template-string": {
            pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                    pattern:
                        /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        },
        "string-property": {
            pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property"
        }
    }),
    Prism.languages.insertBefore("javascript", "operator", {
        "literal-property": {
            pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property"
        }
    }),
    Prism.languages.markup &&
        (Prism.languages.markup.tag.addInlined("script", "javascript"),
        Prism.languages.markup.tag.addAttribute(
            "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
            "javascript"
        )),
    (Prism.languages.js = Prism.languages.javascript);
(Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
        pattern:
            /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
    "class-name": {
        pattern:
            /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: !0
    },
    keyword:
        /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
})),
    Prism.languages.insertBefore("c", "string", {
        char: {
            pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
            greedy: !0
        }
    }),
    Prism.languages.insertBefore("c", "string", {
        macro: {
            pattern:
                /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
            inside: {
                string: [
                    { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                    Prism.languages.c.string
                ],
                char: Prism.languages.c.char,
                comment: Prism.languages.c.comment,
                "macro-name": [
                    { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                    {
                        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                        lookbehind: !0,
                        alias: "function"
                    }
                ],
                directive: {
                    pattern: /^(#\s*)[a-z]+/,
                    lookbehind: !0,
                    alias: "keyword"
                },
                "directive-hash": /^#/,
                punctuation: /##|\\(?=[\r\n])/,
                expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c }
            }
        }
    }),
    Prism.languages.insertBefore("c", "function", {
        constant:
            /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
    }),
    delete Prism.languages.c.boolean;
!(function (e) {
    function n(e, n) {
        return e.replace(/<<(\d+)>>/g, function (e, s) {
            return "(?:" + n[+s] + ")";
        });
    }
    function s(e, s, a) {
        return RegExp(n(e, s), a || "");
    }
    function a(e, n) {
        for (var s = 0; s < n; s++)
            e = e.replace(/<<self>>/g, function () {
                return "(?:" + e + ")";
            });
        return e.replace(/<<self>>/g, "[^\\s\\S]");
    }
    var t =
            "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
        r = "class enum interface record struct",
        i =
            "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
        o =
            "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
    function l(e) {
        return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
    }
    var d = l(r),
        p = RegExp(l(t + " " + r + " " + i + " " + o)),
        c = l(r + " " + i + " " + o),
        u = l(t + " " + r + " " + o),
        g = a("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2),
        b = a("\\((?:[^()]|<<self>>)*\\)", 2),
        h = "@?\\b[A-Za-z_]\\w*\\b",
        f = n("<<0>>(?:\\s*<<1>>)?", [h, g]),
        m = n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f]),
        k = "\\[\\s*(?:,\\s*)*\\]",
        y = n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m, k]),
        w = n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k]),
        v = n("\\(<<0>>+(?:,<<0>>+)+\\)", [w]),
        x = n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [
            v,
            m,
            k
        ]),
        $ = { keyword: p, punctuation: /[<>()?,.:[\]]/ },
        _ = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",
        B = '"(?:\\\\.|[^\\\\"\r\n])*"';
    (e.languages.csharp = e.languages.extend("clike", {
        string: [
            {
                pattern: s("(^|[^$\\\\])<<0>>", [
                    '@"(?:""|\\\\[^]|[^\\\\"])*"(?!")'
                ]),
                lookbehind: !0,
                greedy: !0
            },
            {
                pattern: s("(^|[^@$\\\\])<<0>>", [B]),
                lookbehind: !0,
                greedy: !0
            }
        ],
        "class-name": [
            {
                pattern: s("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]),
                lookbehind: !0,
                inside: $
            },
            {
                pattern: s("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [
                    h,
                    x
                ]),
                lookbehind: !0,
                inside: $
            },
            { pattern: s("(\\busing\\s+)<<0>>(?=\\s*=)", [h]), lookbehind: !0 },
            {
                pattern: s("(\\b<<0>>\\s+)<<1>>", [d, f]),
                lookbehind: !0,
                inside: $
            },
            {
                pattern: s("(\\bcatch\\s*\\(\\s*)<<0>>", [m]),
                lookbehind: !0,
                inside: $
            },
            { pattern: s("(\\bwhere\\s+)<<0>>", [h]), lookbehind: !0 },
            {
                pattern: s("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]),
                lookbehind: !0,
                inside: $
            },
            {
                pattern: s(
                    "\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",
                    [x, u, h]
                ),
                inside: $
            }
        ],
        keyword: p,
        number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
        operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
        punctuation: /\?\.?|::|[{}[\];(),.:]/
    })),
        e.languages.insertBefore("csharp", "number", {
            range: { pattern: /\.\./, alias: "operator" }
        }),
        e.languages.insertBefore("csharp", "punctuation", {
            "named-parameter": {
                pattern: s("([(,]\\s*)<<0>>(?=\\s*:)", [h]),
                lookbehind: !0,
                alias: "punctuation"
            }
        }),
        e.languages.insertBefore("csharp", "class-name", {
            namespace: {
                pattern: s(
                    "(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",
                    [h]
                ),
                lookbehind: !0,
                inside: { punctuation: /\./ }
            },
            "type-expression": {
                pattern: s(
                    "(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",
                    [b]
                ),
                lookbehind: !0,
                alias: "class-name",
                inside: $
            },
            "return-type": {
                pattern: s(
                    "<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",
                    [x, m]
                ),
                inside: $,
                alias: "class-name"
            },
            "constructor-invocation": {
                pattern: s("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [x]),
                lookbehind: !0,
                inside: $,
                alias: "class-name"
            },
            "generic-method": {
                pattern: s("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]),
                inside: {
                    function: s("^<<0>>", [h]),
                    generic: {
                        pattern: RegExp(g),
                        alias: "class-name",
                        inside: $
                    }
                }
            },
            "type-list": {
                pattern: s(
                    "\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",
                    [d, f, h, x, p.source, b, "\\bnew\\s*\\(\\s*\\)"]
                ),
                lookbehind: !0,
                inside: {
                    "record-arguments": {
                        pattern: s("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [f, b]),
                        lookbehind: !0,
                        greedy: !0,
                        inside: e.languages.csharp
                    },
                    keyword: p,
                    "class-name": { pattern: RegExp(x), greedy: !0, inside: $ },
                    punctuation: /[,()]/
                }
            },
            preprocessor: {
                pattern: /(^[\t ]*)#.*/m,
                lookbehind: !0,
                alias: "property",
                inside: {
                    directive: {
                        pattern:
                            /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                        lookbehind: !0,
                        alias: "keyword"
                    }
                }
            }
        });
    var E = B + "|" + _,
        R = n("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [
            E
        ]),
        z = a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [R]), 2),
        S =
            "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",
        j = n("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, z]);
    e.languages.insertBefore("csharp", "class-name", {
        attribute: {
            pattern: s(
                "((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",
                [S, j]
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
                target: {
                    pattern: s("^<<0>>(?=\\s*:)", [S]),
                    alias: "keyword"
                },
                "attribute-arguments": {
                    pattern: s("\\(<<0>>*\\)", [z]),
                    inside: e.languages.csharp
                },
                "class-name": {
                    pattern: RegExp(m),
                    inside: { punctuation: /\./ }
                },
                punctuation: /[:,]/
            }
        }
    });
    var A = ":[^}\r\n]+",
        F = a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [R]), 2),
        P = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [F, A]),
        U = a(
            n(
                "[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",
                [E]
            ),
            2
        ),
        Z = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [U, A]);
    function q(n, a) {
        return {
            interpolation: {
                pattern: s("((?:^|[^{])(?:\\{\\{)*)<<0>>", [n]),
                lookbehind: !0,
                inside: {
                    "format-string": {
                        pattern: s("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [
                            a,
                            A
                        ]),
                        lookbehind: !0,
                        inside: { punctuation: /^:/ }
                    },
                    punctuation: /^\{|\}$/,
                    expression: {
                        pattern: /[\s\S]+/,
                        alias: "language-csharp",
                        inside: e.languages.csharp
                    }
                }
            },
            string: /[\s\S]+/
        };
    }
    e.languages.insertBefore("csharp", "string", {
        "interpolation-string": [
            {
                pattern: s(
                    '(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',
                    [P]
                ),
                lookbehind: !0,
                greedy: !0,
                inside: q(P, F)
            },
            {
                pattern: s(
                    '(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',
                    [Z]
                ),
                lookbehind: !0,
                greedy: !0,
                inside: q(Z, U)
            }
        ],
        char: { pattern: RegExp(_), greedy: !0 }
    }),
        (e.languages.dotnet = e.languages.cs = e.languages.csharp);
})(Prism);
!(function (e) {
    var t =
            /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
        n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(
            /<keyword>/g,
            function () {
                return t.source;
            }
        );
    (e.languages.cpp = e.languages.extend("c", {
        "class-name": [
            {
                pattern: RegExp(
                    "(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(
                        /<keyword>/g,
                        function () {
                            return t.source;
                        }
                    )
                ),
                lookbehind: !0
            },
            /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
            /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
            /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
        ],
        keyword: t,
        number: {
            pattern:
                /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: !0
        },
        operator:
            />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true)\b/
    })),
        e.languages.insertBefore("cpp", "string", {
            module: {
                pattern: RegExp(
                    '(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' +
                        "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(
                            /<mod-name>/g,
                            function () {
                                return n;
                            }
                        ) +
                        ")"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    string: /^[<"][\s\S]+/,
                    operator: /:/,
                    punctuation: /\./
                }
            },
            "raw-string": {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: "string",
                greedy: !0
            }
        }),
        e.languages.insertBefore("cpp", "keyword", {
            "generic-function": {
                pattern:
                    /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                inside: {
                    function: /^\w+/,
                    generic: {
                        pattern: /<[\s\S]+/,
                        alias: "class-name",
                        inside: e.languages.cpp
                    }
                }
            }
        }),
        e.languages.insertBefore("cpp", "operator", {
            "double-colon": { pattern: /::/, alias: "punctuation" }
        }),
        e.languages.insertBefore("cpp", "class-name", {
            "base-clause": {
                pattern:
                    /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend("cpp", {})
            }
        }),
        e.languages.insertBefore(
            "inside",
            "double-colon",
            { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
            e.languages.cpp["base-clause"]
        );
})(Prism);
!(function (e) {
    var n = "(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(
            /<SP_BS>/g,
            function () {
                return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])";
            }
        ),
        r =
            "\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",
        t = "--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(
            /<STR>/g,
            function () {
                return r;
            }
        ),
        o = { pattern: RegExp(r), greedy: !0 },
        i = { pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0 };
    function a(e, r) {
        return (
            (e = e
                .replace(/<OPT>/g, function () {
                    return t;
                })
                .replace(/<SP>/g, function () {
                    return n;
                })),
            RegExp(e, r)
        );
    }
    (e.languages.docker = {
        instruction: {
            pattern:
                /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
            lookbehind: !0,
            greedy: !0,
            inside: {
                options: {
                    pattern: a(
                        "(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*",
                        "i"
                    ),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        property: { pattern: /(^|\s)--[\w-]+/, lookbehind: !0 },
                        string: [
                            o,
                            {
                                pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                                lookbehind: !0
                            }
                        ],
                        operator: /\\$/m,
                        punctuation: /=/
                    }
                },
                keyword: [
                    {
                        pattern: a(
                            "(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b",
                            "i"
                        ),
                        lookbehind: !0,
                        greedy: !0
                    },
                    {
                        pattern: a(
                            "(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS",
                            "i"
                        ),
                        lookbehind: !0,
                        greedy: !0
                    },
                    {
                        pattern: a("(^ONBUILD<SP>)\\w+", "i"),
                        lookbehind: !0,
                        greedy: !0
                    },
                    { pattern: /^\w+/, greedy: !0 }
                ],
                comment: i,
                string: o,
                variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                operator: /\\$/m
            }
        },
        comment: i
    }),
        (e.languages.dockerfile = e.languages.docker);
})(Prism);
Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } },
    coord: /^@@.*@@$/m,
    "commit-sha1": /^commit \w{40}$/m
};
(Prism.languages.go = Prism.languages.extend("clike", {
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
        lookbehind: !0,
        greedy: !0
    },
    keyword:
        /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    boolean: /\b(?:_|false|iota|nil|true)\b/,
    number: [
        /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
        /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
        /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
    ],
    operator:
        /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    builtin:
        /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
})),
    Prism.languages.insertBefore("go", "string", {
        char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 }
    }),
    delete Prism.languages.go["class-name"];
!(function (e) {
    var n =
            /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
        t = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
        s = {
            pattern: RegExp(
                "(^|[^\\w.])" + t + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"
            ),
            lookbehind: !0,
            inside: {
                namespace: {
                    pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                    inside: { punctuation: /\./ }
                },
                punctuation: /\./
            }
        };
    (e.languages.java = e.languages.extend("clike", {
        string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
            lookbehind: !0,
            greedy: !0
        },
        "class-name": [
            s,
            {
                pattern: RegExp(
                    "(^|[^\\w.])" +
                        t +
                        "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"
                ),
                lookbehind: !0,
                inside: s.inside
            },
            {
                pattern: RegExp(
                    "(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)" +
                        t +
                        "[A-Z]\\w*\\b"
                ),
                lookbehind: !0,
                inside: s.inside
            }
        ],
        keyword: n,
        function: [
            e.languages.clike.function,
            { pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 }
        ],
        number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {
            pattern:
                /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
            lookbehind: !0
        },
        constant: /\b[A-Z][A-Z_\d]+\b/
    })),
        e.languages.insertBefore("java", "string", {
            "triple-quoted-string": {
                pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
                greedy: !0,
                alias: "string"
            },
            char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: !0 }
        }),
        e.languages.insertBefore("java", "class-name", {
            annotation: {
                pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
                lookbehind: !0,
                alias: "punctuation"
            },
            generics: {
                pattern:
                    /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
                inside: {
                    "class-name": s,
                    keyword: n,
                    punctuation: /[<>(),.:]/,
                    operator: /[?&|]/
                }
            },
            import: [
                {
                    pattern: RegExp(
                        "(\\bimport\\s+)" + t + "(?:[A-Z]\\w*|\\*)(?=\\s*;)"
                    ),
                    lookbehind: !0,
                    inside: {
                        namespace: s.inside.namespace,
                        punctuation: /\./,
                        operator: /\*/,
                        "class-name": /\w+/
                    }
                },
                {
                    pattern: RegExp(
                        "(\\bimport\\s+static\\s+)" +
                            t +
                            "(?:\\w+|\\*)(?=\\s*;)"
                    ),
                    lookbehind: !0,
                    alias: "static",
                    inside: {
                        namespace: s.inside.namespace,
                        static: /\b\w+$/,
                        punctuation: /\./,
                        operator: /\*/,
                        "class-name": /\w+/
                    }
                }
            ],
            namespace: {
                pattern: RegExp(
                    "(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(
                        /<keyword>/g,
                        function () {
                            return n.source;
                        }
                    )
                ),
                lookbehind: !0,
                inside: { punctuation: /\./ }
            }
        });
})(Prism);
!(function (e) {
    function n(e, n) {
        return "___" + e.toUpperCase() + n + "___";
    }
    Object.defineProperties((e.languages["markup-templating"] = {}), {
        buildPlaceholders: {
            value: function (t, a, r, o) {
                if (t.language === a) {
                    var c = (t.tokenStack = []);
                    (t.code = t.code.replace(r, function (e) {
                        if ("function" == typeof o && !o(e)) return e;
                        for (
                            var r, i = c.length;
                            -1 !== t.code.indexOf((r = n(a, i)));

                        )
                            ++i;
                        return (c[i] = e), r;
                    })),
                        (t.grammar = e.languages.markup);
                }
            }
        },
        tokenizePlaceholders: {
            value: function (t, a) {
                if (t.language === a && t.tokenStack) {
                    t.grammar = e.languages[a];
                    var r = 0,
                        o = Object.keys(t.tokenStack);
                    !(function c(i) {
                        for (var u = 0; u < i.length && !(r >= o.length); u++) {
                            var g = i[u];
                            if (
                                "string" == typeof g ||
                                (g.content && "string" == typeof g.content)
                            ) {
                                var l = o[r],
                                    s = t.tokenStack[l],
                                    f = "string" == typeof g ? g : g.content,
                                    p = n(a, l),
                                    k = f.indexOf(p);
                                if (k > -1) {
                                    ++r;
                                    var m = f.substring(0, k),
                                        d = new e.Token(
                                            a,
                                            e.tokenize(s, t.grammar),
                                            "language-" + a,
                                            s
                                        ),
                                        h = f.substring(k + p.length),
                                        v = [];
                                    m && v.push.apply(v, c([m])),
                                        v.push(d),
                                        h && v.push.apply(v, c([h])),
                                        "string" == typeof g
                                            ? i.splice.apply(
                                                  i,
                                                  [u, 1].concat(v)
                                              )
                                            : (g.content = v);
                                }
                            } else g.content && c(g.content);
                        }
                        return i;
                    })(t.tokens);
                }
            }
        }
    });
})(Prism);
!(function (a) {
    var e = (a.languages.javadoclike = {
        parameter: {
            pattern:
                /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
            lookbehind: !0
        },
        punctuation: /[{}]/
    });
    Object.defineProperty(e, "addSupport", {
        value: function (e, n) {
            "string" == typeof e && (e = [e]),
                e.forEach(function (e) {
                    !(function (e, n) {
                        var t = "doc-comment",
                            r = a.languages[e];
                        if (r) {
                            var o = r[t];
                            if (
                                (o ||
                                    (o = (r = a.languages.insertBefore(
                                        e,
                                        "comment",
                                        {
                                            "doc-comment": {
                                                pattern:
                                                    /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                                lookbehind: !0,
                                                alias: "comment"
                                            }
                                        }
                                    ))[t]),
                                o instanceof RegExp &&
                                    (o = r[t] = { pattern: o }),
                                Array.isArray(o))
                            )
                                for (var i = 0, s = o.length; i < s; i++)
                                    o[i] instanceof RegExp &&
                                        (o[i] = { pattern: o[i] }),
                                        n(o[i]);
                            else n(o);
                        }
                    })(e, function (a) {
                        a.inside || (a.inside = {}), (a.inside.rest = n);
                    });
                });
        }
    }),
        e.addSupport(["java", "javascript", "php"], e);
})(Prism);
!(function (a) {
    var e = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,
        n =
            "(?:\\b[a-zA-Z]\\w+\\s*\\.\\s*)*\\b[A-Z]\\w*(?:\\s*<mem>)?|<mem>".replace(
                /<mem>/g,
                function () {
                    return "#\\s*\\w+(?:\\s*\\([^()]*\\))?";
                }
            );
    (a.languages.javadoc = a.languages.extend("javadoclike", {})),
        a.languages.insertBefore("javadoc", "keyword", {
            reference: {
                pattern: RegExp(
                    "(@(?:exception|link|linkplain|see|throws|value)\\s+(?:\\*\\s*)?)(?:" +
                        n +
                        ")"
                ),
                lookbehind: !0,
                inside: {
                    function: { pattern: /(#\s*)\w+(?=\s*\()/, lookbehind: !0 },
                    field: { pattern: /(#\s*)\w+/, lookbehind: !0 },
                    namespace: {
                        pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
                        inside: { punctuation: /\./ }
                    },
                    "class-name": /\b[A-Z]\w*/,
                    keyword: a.languages.java.keyword,
                    punctuation: /[#()[\],.]/
                }
            },
            "class-name": {
                pattern: /(@param\s+)<[A-Z]\w*>/,
                lookbehind: !0,
                inside: { punctuation: /[.<>]/ }
            },
            "code-section": [
                {
                    pattern:
                        /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
                    lookbehind: !0,
                    inside: {
                        code: {
                            pattern: e,
                            lookbehind: !0,
                            inside: a.languages.java,
                            alias: "language-java"
                        }
                    }
                },
                {
                    pattern:
                        /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
                    lookbehind: !0,
                    inside: {
                        line: {
                            pattern: e,
                            lookbehind: !0,
                            inside: {
                                tag: a.languages.markup.tag,
                                entity: a.languages.markup.entity,
                                code: {
                                    pattern: /.+/,
                                    inside: a.languages.java,
                                    alias: "language-java"
                                }
                            }
                        }
                    }
                }
            ],
            tag: a.languages.markup.tag,
            entity: a.languages.markup.entity
        }),
        a.languages.javadoclike.addSupport("java", a.languages.javadoc);
})(Prism);
!(function (e) {
    (e.languages.typescript = e.languages.extend("javascript", {
        "class-name": {
            pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null
        },
        builtin:
            /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    })),
        e.languages.typescript.keyword.push(
            /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
            /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
            /\btype\b(?=\s*(?:[\{*]|$))/
        ),
        delete e.languages.typescript.parameter,
        delete e.languages.typescript["literal-property"];
    var s = e.languages.extend("typescript", {});
    delete s["class-name"],
        (e.languages.typescript["class-name"].inside = s),
        e.languages.insertBefore("typescript", "function", {
            decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                    at: { pattern: /^@/, alias: "operator" },
                    function: /^[\s\S]+/
                }
            },
            "generic-function": {
                pattern:
                    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                    function:
                        /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                    generic: {
                        pattern: /<[\s\S]+/,
                        alias: "class-name",
                        inside: s
                    }
                }
            }
        }),
        (e.languages.ts = e.languages.typescript);
})(Prism);
!(function (e) {
    var a = e.languages.javascript,
        n = "\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})+\\}",
        t = "(@(?:arg|argument|param|property)\\s+(?:" + n + "\\s+)?)";
    (e.languages.jsdoc = e.languages.extend("javadoclike", {
        parameter: {
            pattern: RegExp(t + "(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)"),
            lookbehind: !0,
            inside: { punctuation: /\./ }
        }
    })),
        e.languages.insertBefore("jsdoc", "keyword", {
            "optional-parameter": {
                pattern: RegExp(
                    t +
                        "\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)"
                ),
                lookbehind: !0,
                inside: {
                    parameter: {
                        pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                        lookbehind: !0,
                        inside: { punctuation: /\./ }
                    },
                    code: {
                        pattern: /(=)[\s\S]*(?=\]$)/,
                        lookbehind: !0,
                        inside: a,
                        alias: "language-javascript"
                    },
                    punctuation: /[=[\]]/
                }
            },
            "class-name": [
                {
                    pattern: RegExp(
                        "(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*".replace(
                            /<TYPE>/g,
                            function () {
                                return n;
                            }
                        )
                    ),
                    lookbehind: !0,
                    inside: { punctuation: /\./ }
                },
                {
                    pattern: RegExp("(@[a-z]+\\s+)" + n),
                    lookbehind: !0,
                    inside: {
                        string: a.string,
                        number: a.number,
                        boolean: a.boolean,
                        keyword: e.languages.typescript.keyword,
                        operator: /=>|\.\.\.|[&|?:*]/,
                        punctuation: /[.,;=<>{}()[\]]/
                    }
                }
            ],
            example: {
                pattern:
                    /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                lookbehind: !0,
                inside: {
                    code: {
                        pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                        lookbehind: !0,
                        inside: a,
                        alias: "language-javascript"
                    }
                }
            }
        }),
        e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
})(Prism);
!(function (a) {
    function e(a, e) {
        return RegExp(
            a.replace(/<ID>/g, function () {
                return "(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*";
            }),
            e
        );
    }
    a.languages.insertBefore("javascript", "function-variable", {
        "method-variable": {
            pattern: RegExp(
                "(\\.\\s*)" +
                    a.languages.javascript["function-variable"].pattern.source
            ),
            lookbehind: !0,
            alias: [
                "function-variable",
                "method",
                "function",
                "property-access"
            ]
        }
    }),
        a.languages.insertBefore("javascript", "function", {
            method: {
                pattern: RegExp(
                    "(\\.\\s*)" + a.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"]
            }
        }),
        a.languages.insertBefore("javascript", "constant", {
            "known-class-name": [
                {
                    pattern:
                        /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                    alias: "class-name"
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }
            ]
        }),
        a.languages.insertBefore("javascript", "keyword", {
            imports: {
                pattern: e(
                    "(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)"
                ),
                lookbehind: !0,
                inside: a.languages.javascript
            },
            exports: {
                pattern: e(
                    "(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})"
                ),
                lookbehind: !0,
                inside: a.languages.javascript
            }
        }),
        a.languages.javascript.keyword.unshift(
            {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module"
            },
            {
                pattern:
                    /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow"
            },
            { pattern: /\bnull\b/, alias: ["null", "nil"] },
            { pattern: /\bundefined\b/, alias: "nil" }
        ),
        a.languages.insertBefore("javascript", "operator", {
            spread: { pattern: /\.{3}/, alias: "operator" },
            arrow: { pattern: /=>/, alias: "operator" }
        }),
        a.languages.insertBefore("javascript", "punctuation", {
            "property-access": {
                pattern: e("(\\.\\s*)#?<ID>"),
                lookbehind: !0
            },
            "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0
            },
            dom: {
                pattern:
                    /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable"
            },
            console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" }
        });
    for (
        var t = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access"
            ],
            r = 0;
        r < t.length;
        r++
    ) {
        var n = t[r],
            s = a.languages.javascript[n];
        "RegExp" === a.util.type(s) &&
            (s = a.languages.javascript[n] = { pattern: s });
        var o = s.inside || {};
        (s.inside = o), (o["maybe-class-name"] = /^[A-Z][\s\S]*/);
    }
})(Prism);
(Prism.languages.json = {
    property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: "keyword" }
}),
    (Prism.languages.webmanifest = Prism.languages.json);
!(function (n) {
    var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    n.languages.json5 = n.languages.extend("json", {
        property: [
            { pattern: RegExp(e.source + "(?=\\s*:)"), greedy: !0 },
            {
                pattern:
                    /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
                alias: "unquoted"
            }
        ],
        string: { pattern: e, greedy: !0 },
        number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
    });
})(Prism);
(Prism.languages.less = Prism.languages.extend("css", {
    comment: [
        /\/\*[\s\S]*?\*\//,
        { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }
    ],
    atrule: {
        pattern:
            /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
        inside: { punctuation: /[:()]/ }
    },
    selector: {
        pattern:
            /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
        inside: { variable: /@+[\w-]+/ }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
    operator: /[+\-*\/]/
})),
    Prism.languages.insertBefore("less", "property", {
        variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/
        ],
        "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: "function"
        }
    });
!(function (n) {
    function e(n) {
        return (
            (n = n.replace(/<inner>/g, function () {
                return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))";
            })),
            RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")")
        );
    }
    var t = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
        a = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(
            /__/g,
            function () {
                return t;
            }
        ),
        i =
            "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
    (n.languages.markdown = n.languages.extend("markup", {})),
        n.languages.insertBefore("markdown", "prolog", {
            "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                    punctuation: /^---|---$/,
                    "front-matter": {
                        pattern: /\S+(?:\s+\S+)*/,
                        alias: ["yaml", "language-yaml"],
                        inside: n.languages.yaml
                    }
                }
            },
            blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
            table: {
                pattern: RegExp("^" + a + i + "(?:" + a + ")*", "m"),
                inside: {
                    "table-data-rows": {
                        pattern: RegExp("^(" + a + i + ")(?:" + a + ")*$"),
                        lookbehind: !0,
                        inside: {
                            "table-data": {
                                pattern: RegExp(t),
                                inside: n.languages.markdown
                            },
                            punctuation: /\|/
                        }
                    },
                    "table-line": {
                        pattern: RegExp("^(" + a + ")" + i + "$"),
                        lookbehind: !0,
                        inside: { punctuation: /\||:?-{3,}:?/ }
                    },
                    "table-header-row": {
                        pattern: RegExp("^" + a + "$"),
                        inside: {
                            "table-header": {
                                pattern: RegExp(t),
                                alias: "important",
                                inside: n.languages.markdown
                            },
                            punctuation: /\|/
                        }
                    }
                }
            },
            code: [
                {
                    pattern:
                        /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                    lookbehind: !0,
                    alias: "keyword"
                },
                {
                    pattern: /^```[\s\S]*?^```$/m,
                    greedy: !0,
                    inside: {
                        "code-block": {
                            pattern:
                                /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                            lookbehind: !0
                        },
                        "code-language": {
                            pattern: /^(```).+/,
                            lookbehind: !0
                        },
                        punctuation: /```/
                    }
                }
            ],
            title: [
                {
                    pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                    alias: "important",
                    inside: { punctuation: /==+$|--+$/ }
                },
                {
                    pattern: /(^\s*)#.+/m,
                    lookbehind: !0,
                    alias: "important",
                    inside: { punctuation: /^#+|#+$/ }
                }
            ],
            hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation"
            },
            list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation"
            },
            "url-reference": {
                pattern:
                    /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                    variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                    string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                    punctuation: /^[\[\]!:]|[<>]/
                },
                alias: "url"
            },
            bold: {
                pattern: e(
                    "\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    content: {
                        pattern: /(^..)[\s\S]+(?=..$)/,
                        lookbehind: !0,
                        inside: {}
                    },
                    punctuation: /\*\*|__/
                }
            },
            italic: {
                pattern: e(
                    "\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    content: {
                        pattern: /(^.)[\s\S]+(?=.$)/,
                        lookbehind: !0,
                        inside: {}
                    },
                    punctuation: /[*_]/
                }
            },
            strike: {
                pattern: e("(~~?)(?:(?!~)<inner>)+\\2"),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    content: {
                        pattern: /(^~~?)[\s\S]+(?=\1$)/,
                        lookbehind: !0,
                        inside: {}
                    },
                    punctuation: /~~?/
                }
            },
            "code-snippet": {
                pattern:
                    /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"]
            },
            url: {
                pattern: e(
                    '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    operator: /^!/,
                    content: {
                        pattern: /(^\[)[^\]]+(?=\])/,
                        lookbehind: !0,
                        inside: {}
                    },
                    variable: {
                        pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                        lookbehind: !0
                    },
                    url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                    string: {
                        pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                        lookbehind: !0
                    }
                }
            }
        }),
        ["url", "bold", "italic", "strike"].forEach(function (e) {
            ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (t) {
                    e !== t &&
                        (n.languages.markdown[e].inside.content.inside[t] =
                            n.languages.markdown[t]);
                }
            );
        }),
        n.hooks.add("after-tokenize", function (n) {
            ("markdown" !== n.language && "md" !== n.language) ||
                (function n(e) {
                    if (e && "string" != typeof e)
                        for (var t = 0, a = e.length; t < a; t++) {
                            var i = e[t];
                            if ("code" === i.type) {
                                var r = i.content[1],
                                    o = i.content[3];
                                if (
                                    r &&
                                    o &&
                                    "code-language" === r.type &&
                                    "code-block" === o.type &&
                                    "string" == typeof r.content
                                ) {
                                    var l = r.content
                                            .replace(/\b#/g, "sharp")
                                            .replace(/\b\+\+/g, "pp"),
                                        s =
                                            "language-" +
                                            (l = (/[a-z][\w-]*/i.exec(l) || [
                                                ""
                                            ])[0].toLowerCase());
                                    o.alias
                                        ? "string" == typeof o.alias
                                            ? (o.alias = [o.alias, s])
                                            : o.alias.push(s)
                                        : (o.alias = [s]);
                                }
                            } else n(i.content);
                        }
                })(n.tokens);
        }),
        n.hooks.add("wrap", function (e) {
            if ("code-block" === e.type) {
                for (var t = "", a = 0, i = e.classes.length; a < i; a++) {
                    var s = e.classes[a],
                        d = /language-(.+)/.exec(s);
                    if (d) {
                        t = d[1];
                        break;
                    }
                }
                var p = n.languages[t];
                if (p)
                    e.content = n.highlight(
                        e.content
                            .replace(r, "")
                            .replace(
                                /&(\w{1,8}|#x?[\da-f]{1,8});/gi,
                                function (n, e) {
                                    var t;
                                    return "#" === (e = e.toLowerCase())[0]
                                        ? ((t =
                                              "x" === e[1]
                                                  ? parseInt(e.slice(2), 16)
                                                  : Number(e.slice(1))),
                                          l(t))
                                        : o[e] || n;
                                }
                            ),
                        p,
                        t
                    );
                else if (t && "none" !== t && n.plugins.autoloader) {
                    var u =
                        "md-" +
                        new Date().valueOf() +
                        "-" +
                        Math.floor(1e16 * Math.random());
                    (e.attributes.id = u),
                        n.plugins.autoloader.loadLanguages(t, function () {
                            var e = document.getElementById(u);
                            e &&
                                (e.innerHTML = n.highlight(
                                    e.textContent,
                                    n.languages[t],
                                    t
                                ));
                        });
                }
            }
        });
    var r = RegExp(n.languages.markup.tag.pattern.source, "gi"),
        o = { amp: "&", lt: "<", gt: ">", quot: '"' },
        l = String.fromCodePoint || String.fromCharCode;
    n.languages.md = n.languages.markdown;
})(Prism);
!(function (e) {
    var n = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
    e.languages.nginx = {
        comment: { pattern: /(^|[\s{};])#.*/, lookbehind: !0, greedy: !0 },
        directive: {
            pattern:
                /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                string: {
                    pattern:
                        /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        escape: { pattern: /\\["'\\nrt]/, alias: "entity" },
                        variable: n
                    }
                },
                comment: { pattern: /(\s)#.*/, lookbehind: !0, greedy: !0 },
                keyword: { pattern: /^\S+/, greedy: !0 },
                boolean: { pattern: /(\s)(?:off|on)(?!\S)/, lookbehind: !0 },
                number: { pattern: /(\s)\d+[a-z]*(?!\S)/i, lookbehind: !0 },
                variable: n
            }
        },
        punctuation: /[{};]/
    };
})(Prism);
(Prism.languages.objectivec = Prism.languages.extend("c", {
    string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
    keyword:
        /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
})),
    delete Prism.languages.objectivec["class-name"],
    (Prism.languages.objc = Prism.languages.objectivec);
Prism.languages.sql = {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
        lookbehind: !0
    },
    variable: [
        { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
        /@[\w.$]+/
    ],
    string: {
        pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
        greedy: !0,
        lookbehind: !0
    },
    identifier: {
        pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /^`|`$/ }
    },
    function:
        /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    keyword:
        /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
    operator:
        /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
};
(Prism.languages.plsql = Prism.languages.extend("sql", {
    comment: { pattern: /\/\*[\s\S]*?\*\/|--.*/, greedy: !0 },
    keyword:
        /\b(?:A|ACCESSIBLE|ADD|AGENT|AGGREGATE|ALL|ALTER|AND|ANY|ARRAY|AS|ASC|AT|ATTRIBUTE|AUTHID|AVG|BEGIN|BETWEEN|BFILE_BASE|BINARY|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BULK|BY|BYTE|C|CALL|CALLING|CASCADE|CASE|CHAR|CHARACTER|CHARSET|CHARSETFORM|CHARSETID|CHAR_BASE|CHECK|CLOB_BASE|CLONE|CLOSE|CLUSTER|CLUSTERS|COLAUTH|COLLECT|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPILED|COMPRESS|CONNECT|CONSTANT|CONSTRUCTOR|CONTEXT|CONTINUE|CONVERT|COUNT|CRASH|CREATE|CREDENTIAL|CURRENT|CURSOR|CUSTOMDATUM|DANGLING|DATA|DATE|DATE_BASE|DAY|DECLARE|DEFAULT|DEFINE|DELETE|DESC|DETERMINISTIC|DIRECTORY|DISTINCT|DOUBLE|DROP|DURATION|ELEMENT|ELSE|ELSIF|EMPTY|END|ESCAPE|EXCEPT|EXCEPTION|EXCEPTIONS|EXCLUSIVE|EXECUTE|EXISTS|EXIT|EXTERNAL|FETCH|FINAL|FIRST|FIXED|FLOAT|FOR|FORALL|FORCE|FROM|FUNCTION|GENERAL|GOTO|GRANT|GROUP|HASH|HAVING|HEAP|HIDDEN|HOUR|IDENTIFIED|IF|IMMEDIATE|IMMUTABLE|IN|INCLUDING|INDEX|INDEXES|INDICATOR|INDICES|INFINITE|INSERT|INSTANTIABLE|INT|INTERFACE|INTERSECT|INTERVAL|INTO|INVALIDATE|IS|ISOLATION|JAVA|LANGUAGE|LARGE|LEADING|LENGTH|LEVEL|LIBRARY|LIKE|LIKE2|LIKE4|LIKEC|LIMIT|LIMITED|LOCAL|LOCK|LONG|LOOP|MAP|MAX|MAXLEN|MEMBER|MERGE|MIN|MINUS|MINUTE|MOD|MODE|MODIFY|MONTH|MULTISET|MUTABLE|NAME|NAN|NATIONAL|NATIVE|NCHAR|NEW|NOCOMPRESS|NOCOPY|NOT|NOWAIT|NULL|NUMBER_BASE|OBJECT|OCICOLL|OCIDATE|OCIDATETIME|OCIDURATION|OCIINTERVAL|OCILOBLOCATOR|OCINUMBER|OCIRAW|OCIREF|OCIREFCURSOR|OCIROWID|OCISTRING|OCITYPE|OF|OLD|ON|ONLY|OPAQUE|OPEN|OPERATOR|OPTION|OR|ORACLE|ORADATA|ORDER|ORGANIZATION|ORLANY|ORLVARY|OTHERS|OUT|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETER|PARAMETERS|PARENT|PARTITION|PASCAL|PERSISTABLE|PIPE|PIPELINED|PLUGGABLE|POLYMORPHIC|PRAGMA|PRECISION|PRIOR|PRIVATE|PROCEDURE|PUBLIC|RAISE|RANGE|RAW|READ|RECORD|REF|REFERENCE|RELIES_ON|REM|REMAINDER|RENAME|RESOURCE|RESULT|RESULT_CACHE|RETURN|RETURNING|REVERSE|REVOKE|ROLLBACK|ROW|SAMPLE|SAVE|SAVEPOINT|SB1|SB2|SB4|SECOND|SEGMENT|SELECT|SELF|SEPARATE|SEQUENCE|SERIALIZABLE|SET|SHARE|SHORT|SIZE|SIZE_T|SOME|SPARSE|SQL|SQLCODE|SQLDATA|SQLNAME|SQLSTATE|STANDARD|START|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUM|SYNONYM|TABAUTH|TABLE|TDO|THE|THEN|TIME|TIMESTAMP|TIMEZONE_ABBR|TIMEZONE_HOUR|TIMEZONE_MINUTE|TIMEZONE_REGION|TO|TRAILING|TRANSACTION|TRANSACTIONAL|TRUSTED|TYPE|UB1|UB2|UB4|UNDER|UNION|UNIQUE|UNPLUG|UNSIGNED|UNTRUSTED|UPDATE|USE|USING|VALIST|VALUE|VALUES|VARIABLE|VARIANCE|VARRAY|VARYING|VIEW|VIEWS|VOID|WHEN|WHERE|WHILE|WITH|WORK|WRAPPED|WRITE|YEAR|ZONE)\b/i,
    operator: /:=?|=>|[<>^~!]=|\.\.|\|\||\*\*|[-+*/%<>=@]/
})),
    Prism.languages.insertBefore("plsql", "operator", {
        label: { pattern: /<<\s*\w+\s*>>/, alias: "symbol" }
    });
!(function (e) {
    var i = (e.languages.powershell = {
        comment: [
            { pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 },
            { pattern: /(^|[^`])#.*/, lookbehind: !0 }
        ],
        string: [
            { pattern: /"(?:`[\s\S]|[^`"])*"/, greedy: !0, inside: null },
            { pattern: /'(?:[^']|'')*'/, greedy: !0 }
        ],
        namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
        boolean: /\$(?:false|true)\b/i,
        variable: /\$\w+\b/,
        function: [
            /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
            /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
        ],
        keyword:
            /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
        operator: {
            pattern:
                /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
            lookbehind: !0
        },
        punctuation: /[|{}[\];(),.]/
    });
    i.string[0].inside = {
        function: {
            pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
            lookbehind: !0,
            inside: i
        },
        boolean: i.boolean,
        variable: i.variable
    };
})(Prism);
!(function (e) {
    e.languages.pug = {
        comment: {
            pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
            lookbehind: !0
        },
        "multiline-script": {
            pattern:
                /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: e.languages.javascript
        },
        filter: {
            pattern:
                /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: {
                "filter-name": { pattern: /^:[\w-]+/, alias: "variable" },
                text: /\S[\s\S]*/
            }
        },
        "multiline-plain-text": {
            pattern:
                /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0
        },
        markup: {
            pattern: /(^[\t ]*)<.+/m,
            lookbehind: !0,
            inside: e.languages.markup
        },
        doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0 },
        "flow-control": {
            pattern:
                /(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m,
            lookbehind: !0,
            inside: {
                each: {
                    pattern: /^each .+? in\b/,
                    inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ }
                },
                branch: {
                    pattern: /^(?:case|default|else|if|unless|when|while)\b/,
                    alias: "keyword"
                },
                rest: e.languages.javascript
            }
        },
        keyword: {
            pattern: /(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m,
            lookbehind: !0
        },
        mixin: [
            {
                pattern: /(^[\t ]*)mixin .+/m,
                lookbehind: !0,
                inside: {
                    keyword: /^mixin/,
                    function: /\w+(?=\s*\(|\s*$)/,
                    punctuation: /[(),.]/
                }
            },
            {
                pattern: /(^[\t ]*)\+.+/m,
                lookbehind: !0,
                inside: {
                    name: { pattern: /^\+\w+/, alias: "function" },
                    rest: e.languages.javascript
                }
            }
        ],
        script: {
            pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
            lookbehind: !0,
            inside: e.languages.javascript
        },
        "plain-text": {
            pattern:
                /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
            lookbehind: !0
        },
        tag: {
            pattern:
                /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
            lookbehind: !0,
            inside: {
                attributes: [
                    {
                        pattern: /&[^(]+\([^)]+\)/,
                        inside: e.languages.javascript
                    },
                    {
                        pattern: /\([^)]+\)/,
                        inside: {
                            "attr-value": {
                                pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
                                lookbehind: !0,
                                inside: e.languages.javascript
                            },
                            "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                            punctuation: /[!=(),]+/
                        }
                    }
                ],
                punctuation: /:/,
                "attr-id": /#[\w\-]+/,
                "attr-class": /\.[\w\-]+/
            }
        },
        code: [
            {
                pattern: /(^[\t ]*(?:-|!?=)).+/m,
                lookbehind: !0,
                inside: e.languages.javascript
            }
        ],
        punctuation: /[.\-!=|]+/
    };
    for (
        var t = [
                { filter: "atpl", language: "twig" },
                { filter: "coffee", language: "coffeescript" },
                "ejs",
                "handlebars",
                "less",
                "livescript",
                "markdown",
                { filter: "sass", language: "scss" },
                "stylus"
            ],
            n = {},
            a = 0,
            i = t.length;
        a < i;
        a++
    ) {
        var r = t[a];
        (r = "string" == typeof r ? { filter: r, language: r } : r),
            e.languages[r.language] &&
                (n["filter-" + r.filter] = {
                    pattern: RegExp(
                        "(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ].+|\\s*?(?=\r?\n|\r)))+".replace(
                            "<filter_name>",
                            function () {
                                return r.filter;
                            }
                        ),
                        "m"
                    ),
                    lookbehind: !0,
                    inside: {
                        "filter-name": {
                            pattern: /^:[\w-]+/,
                            alias: "variable"
                        },
                        text: {
                            pattern: /\S[\s\S]*/,
                            alias: [r.language, "language-" + r.language],
                            inside: e.languages[r.language]
                        }
                    }
                });
    }
    e.languages.insertBefore("pug", "filter", n);
})(Prism);
(Prism.languages.python = {
    comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
    "string-interpolation": {
        pattern:
            /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern:
                    /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                    "format-spec": {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: !0
                    },
                    "conversion-option": {
                        pattern: /![sra](?=[:}]$)/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            string: /[\s\S]+/
        }
    },
    "triple-quoted-string": {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: !0,
        alias: "string"
    },
    string: {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: !0
    },
    function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: !0
    },
    "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
    decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: !0,
        alias: ["annotation", "punctuation"],
        inside: { punctuation: /\./ }
    },
    keyword:
        /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/,
    builtin:
        /\b(?:__import__|abs|all|any|apply|ascii|basestring|print|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
}),
    (Prism.languages.python[
        "string-interpolation"
    ].inside.interpolation.inside.rest = Prism.languages.python),
    (Prism.languages.py = Prism.languages.python);
!(function (t) {
    var n = t.util.clone(t.languages.javascript),
        e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
    function a(t, n) {
        return (
            (t = t
                .replace(/<S>/g, function () {
                    return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)";
                })
                .replace(/<BRACES>/g, function () {
                    return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})";
                })
                .replace(/<SPREAD>/g, function () {
                    return e;
                })),
            RegExp(t, n)
        );
    }
    (e = a(e).source),
        (t.languages.jsx = t.languages.extend("markup", n)),
        (t.languages.jsx.tag.pattern = a(
            "</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"
        )),
        (t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
        (t.languages.jsx.tag.inside["attr-value"].pattern =
            /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
        (t.languages.jsx.tag.inside.tag.inside["class-name"] =
            /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
        (t.languages.jsx.tag.inside.comment = n.comment),
        t.languages.insertBefore(
            "inside",
            "attr-name",
            { spread: { pattern: a("<SPREAD>"), inside: t.languages.jsx } },
            t.languages.jsx.tag
        ),
        t.languages.insertBefore(
            "inside",
            "special-attr",
            {
                script: {
                    pattern: a("=<BRACES>"),
                    alias: "language-javascript",
                    inside: {
                        "script-punctuation": {
                            pattern: /^=(?=\{)/,
                            alias: "punctuation"
                        },
                        rest: t.languages.jsx
                    }
                }
            },
            t.languages.jsx.tag
        );
    var s = function (t) {
            return t
                ? "string" == typeof t
                    ? t
                    : "string" == typeof t.content
                    ? t.content
                    : t.content.map(s).join("")
                : "";
        },
        g = function (n) {
            for (var e = [], a = 0; a < n.length; a++) {
                var o = n[a],
                    i = !1;
                if (
                    ("string" != typeof o &&
                        ("tag" === o.type &&
                        o.content[0] &&
                        "tag" === o.content[0].type
                            ? "</" === o.content[0].content[0].content
                                ? e.length > 0 &&
                                  e[e.length - 1].tagName ===
                                      s(o.content[0].content[1]) &&
                                  e.pop()
                                : "/>" ===
                                      o.content[o.content.length - 1].content ||
                                  e.push({
                                      tagName: s(o.content[0].content[1]),
                                      openedBraces: 0
                                  })
                            : e.length > 0 &&
                              "punctuation" === o.type &&
                              "{" === o.content
                            ? e[e.length - 1].openedBraces++
                            : e.length > 0 &&
                              e[e.length - 1].openedBraces > 0 &&
                              "punctuation" === o.type &&
                              "}" === o.content
                            ? e[e.length - 1].openedBraces--
                            : (i = !0)),
                    (i || "string" == typeof o) &&
                        e.length > 0 &&
                        0 === e[e.length - 1].openedBraces)
                ) {
                    var r = s(o);
                    a < n.length - 1 &&
                        ("string" == typeof n[a + 1] ||
                            "plain-text" === n[a + 1].type) &&
                        ((r += s(n[a + 1])), n.splice(a + 1, 1)),
                        a > 0 &&
                            ("string" == typeof n[a - 1] ||
                                "plain-text" === n[a - 1].type) &&
                            ((r = s(n[a - 1]) + r), n.splice(a - 1, 1), a--),
                        (n[a] = new t.Token("plain-text", r, null, r));
                }
                o.content && "string" != typeof o.content && g(o.content);
            }
        };
    t.hooks.add("after-tokenize", function (t) {
        ("jsx" !== t.language && "tsx" !== t.language) || g(t.tokens);
    });
})(Prism);
!(function (e) {
    var a = e.util.clone(e.languages.typescript);
    (e.languages.tsx = e.languages.extend("jsx", a)),
        delete e.languages.tsx.parameter,
        delete e.languages.tsx["literal-property"];
    var t = e.languages.tsx.tag;
    (t.pattern = RegExp(
        "(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")",
        t.pattern.flags
    )),
        (t.lookbehind = !0);
})(Prism);
!(function (a) {
    var e = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" },
        n =
            /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
        t = "(?:[^\\\\-]|" + n.source + ")",
        s = RegExp(t + "-" + t),
        i = {
            pattern: /(<|')[^<>']+(?=[>']$)/,
            lookbehind: !0,
            alias: "variable"
        };
    a.languages.regex = {
        "char-class": {
            pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
            lookbehind: !0,
            inside: {
                "char-class-negation": {
                    pattern: /(^\[)\^/,
                    lookbehind: !0,
                    alias: "operator"
                },
                "char-class-punctuation": {
                    pattern: /^\[|\]$/,
                    alias: "punctuation"
                },
                range: {
                    pattern: s,
                    inside: {
                        escape: n,
                        "range-punctuation": { pattern: /-/, alias: "operator" }
                    }
                },
                "special-escape": e,
                "char-set": {
                    pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
                    alias: "class-name"
                },
                escape: n
            }
        },
        "special-escape": e,
        "char-set": {
            pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
            alias: "class-name"
        },
        backreference: [
            { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" },
            {
                pattern: /\\k<[^<>']+>/,
                alias: "keyword",
                inside: { "group-name": i }
            }
        ],
        anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" },
        escape: n,
        group: [
            {
                pattern:
                    /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                alias: "punctuation",
                inside: { "group-name": i }
            },
            { pattern: /\)/, alias: "punctuation" }
        ],
        quantifier: {
            pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
            alias: "number"
        },
        alternation: { pattern: /\|/, alias: "keyword" }
    };
})(Prism);
!(function (e) {
    (e.languages.ruby = e.languages.extend("clike", {
        comment: { pattern: /#.*|^=begin\s[\s\S]*?^=end/m, greedy: !0 },
        "class-name": {
            pattern:
                /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ }
        },
        keyword:
            /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
        operator:
            /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
        punctuation: /[(){}[\].,;]/
    })),
        e.languages.insertBefore("ruby", "operator", {
            "double-colon": { pattern: /::/, alias: "punctuation" }
        });
    var n = {
        pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
        lookbehind: !0,
        inside: {
            content: {
                pattern: /^(#\{)[\s\S]+(?=\}$)/,
                lookbehind: !0,
                inside: e.languages.ruby
            },
            delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" }
        }
    };
    delete e.languages.ruby.function;
    var t =
            "(?:" +
            [
                "([^a-zA-Z0-9\\s{(\\[<=])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1",
                "\\((?:[^()\\\\]|\\\\[^]|\\((?:[^()\\\\]|\\\\[^])*\\))*\\)",
                "\\{(?:[^{}\\\\]|\\\\[^]|\\{(?:[^{}\\\\]|\\\\[^])*\\})*\\}",
                "\\[(?:[^\\[\\]\\\\]|\\\\[^]|\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\])*\\]",
                "<(?:[^<>\\\\]|\\\\[^]|<(?:[^<>\\\\]|\\\\[^])*>)*>"
            ].join("|") +
            ")",
        i =
            '(?:"(?:\\\\.|[^"\\\\\r\n])*"|(?:\\b[a-zA-Z_]\\w*|[^\\s\0-\\x7F]+)[?!]?|\\$.)';
    e.languages.insertBefore("ruby", "keyword", {
        "regex-literal": [
            {
                pattern: RegExp("%r" + t + "[egimnosux]{0,6}"),
                greedy: !0,
                inside: { interpolation: n, regex: /[\s\S]+/ }
            },
            {
                pattern:
                    /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
                lookbehind: !0,
                greedy: !0,
                inside: { interpolation: n, regex: /[\s\S]+/ }
            }
        ],
        variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
        symbol: [
            { pattern: RegExp("(^|[^:]):" + i), lookbehind: !0, greedy: !0 },
            {
                pattern: RegExp("([\r\n{(,][ \t]*)" + i + "(?=:(?!:))"),
                lookbehind: !0,
                greedy: !0
            }
        ],
        "method-definition": {
            pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
            lookbehind: !0,
            inside: {
                function: /\b\w+$/,
                keyword: /^self\b/,
                "class-name": /^\w+/,
                punctuation: /\./
            }
        }
    }),
        e.languages.insertBefore("ruby", "string", {
            "string-literal": [
                {
                    pattern: RegExp("%[qQiIwWs]?" + t),
                    greedy: !0,
                    inside: { interpolation: n, string: /[\s\S]+/ }
                },
                {
                    pattern:
                        /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
                    greedy: !0,
                    inside: { interpolation: n, string: /[\s\S]+/ }
                },
                {
                    pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                        delimiter: {
                            pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
                            inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?/ }
                        },
                        interpolation: n,
                        string: /[\s\S]+/
                    }
                },
                {
                    pattern:
                        /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                        delimiter: {
                            pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
                            inside: {
                                symbol: /\b\w+/,
                                punctuation: /^<<[-~]?'|'$/
                            }
                        },
                        string: /[\s\S]+/
                    }
                }
            ],
            "command-literal": [
                {
                    pattern: RegExp("%x" + t),
                    greedy: !0,
                    inside: {
                        interpolation: n,
                        command: { pattern: /[\s\S]+/, alias: "string" }
                    }
                },
                {
                    pattern:
                        /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
                    greedy: !0,
                    inside: {
                        interpolation: n,
                        command: { pattern: /[\s\S]+/, alias: "string" }
                    }
                }
            ]
        }),
        delete e.languages.ruby.string,
        e.languages.insertBefore("ruby", "number", {
            builtin:
                /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
            constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
        }),
        (e.languages.rb = e.languages.ruby);
})(Prism);
!(function (e) {
    for (
        var a = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", t = 0;
        t < 2;
        t++
    )
        a = a.replace(/<self>/g, function () {
            return a;
        });
    (a = a.replace(/<self>/g, function () {
        return "[^\\s\\S]";
    })),
        (e.languages.rust = {
            comment: [
                {
                    pattern: RegExp("(^|[^\\\\])" + a),
                    lookbehind: !0,
                    greedy: !0
                },
                { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
            ],
            string: {
                pattern:
                    /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
                greedy: !0
            },
            char: {
                pattern:
                    /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
                greedy: !0
            },
            attribute: {
                pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
                greedy: !0,
                alias: "attr-name",
                inside: { string: null }
            },
            "closure-params": {
                pattern:
                    /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                    "closure-punctuation": {
                        pattern: /^\||\|$/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" },
            "fragment-specifier": {
                pattern: /(\$\w+:)[a-z]+/,
                lookbehind: !0,
                alias: "punctuation"
            },
            variable: /\$\w+/,
            "function-definition": {
                pattern: /(\bfn\s+)\w+/,
                lookbehind: !0,
                alias: "function"
            },
            "type-definition": {
                pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
                lookbehind: !0,
                alias: "class-name"
            },
            "module-declaration": [
                {
                    pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
                    lookbehind: !0,
                    alias: "namespace"
                },
                {
                    pattern:
                        /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                    lookbehind: !0,
                    alias: "namespace",
                    inside: { punctuation: /::/ }
                }
            ],
            keyword: [
                /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
                /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
            ],
            function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
            macro: { pattern: /\b\w+!/, alias: "property" },
            constant: /\b[A-Z_][A-Z_\d]+\b/,
            "class-name": /\b[A-Z]\w*\b/,
            namespace: {
                pattern:
                    /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
                inside: { punctuation: /::/ }
            },
            number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
            boolean: /\b(?:false|true)\b/,
            punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
            operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
        }),
        (e.languages.rust["closure-params"].inside.rest = e.languages.rust),
        (e.languages.rust.attribute.inside.string = e.languages.rust.string);
})(Prism);
!(function (e) {
    (e.languages.sass = e.languages.extend("css", {
        comment: {
            pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
            lookbehind: !0,
            greedy: !0
        }
    })),
        e.languages.insertBefore("sass", "atrule", {
            "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                greedy: !0,
                inside: { atrule: /(?:@[\w-]+|[+=])/ }
            }
        }),
        delete e.languages.sass.atrule;
    var r = /\$[-\w]+|#\{\$[-\w]+\}/,
        t = [
            /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
            { pattern: /(\s)-(?=\s)/, lookbehind: !0 }
        ];
    e.languages.insertBefore("sass", "property", {
        "variable-line": {
            pattern: /^[ \t]*\$.+/m,
            greedy: !0,
            inside: { punctuation: /:/, variable: r, operator: t }
        },
        "property-line": {
            pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
            greedy: !0,
            inside: {
                property: [
                    /[^:\s]+(?=\s*:)/,
                    { pattern: /(:)[^:\s]+/, lookbehind: !0 }
                ],
                punctuation: /:/,
                variable: r,
                operator: t,
                important: e.languages.sass.important
            }
        }
    }),
        delete e.languages.sass.property,
        delete e.languages.sass.important,
        e.languages.insertBefore("sass", "punctuation", {
            selector: {
                pattern:
                    /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                lookbehind: !0,
                greedy: !0
            }
        });
})(Prism);
(Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0
    },
    atrule: {
        pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
        inside: { rule: /@[\w-]+/ }
    },
    url: /(?:[-a-z]+-)?url(?=\()/i,
    selector: {
        pattern:
            /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
        inside: {
            parent: { pattern: /&/, alias: "important" },
            placeholder: /%[-\w]+/,
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
    },
    property: {
        pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }
    }
})),
    Prism.languages.insertBefore("scss", "atrule", {
        keyword: [
            /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
            { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 }
        ]
    }),
    Prism.languages.insertBefore("scss", "important", {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }),
    Prism.languages.insertBefore("scss", "function", {
        "module-modifier": {
            pattern: /\b(?:as|hide|show|with)\b/i,
            alias: "keyword"
        },
        placeholder: { pattern: /%[-\w]+/, alias: "selector" },
        statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" },
        boolean: /\b(?:false|true)\b/,
        null: { pattern: /\bnull\b/, alias: "keyword" },
        operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
            lookbehind: !0
        }
    }),
    (Prism.languages.scss.atrule.inside.rest = Prism.languages.scss);
!(function (e) {
    var n = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
        r = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 },
        t = {
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0
            },
            url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
            string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0
            },
            interpolation: null,
            func: null,
            important: /\B!(?:important|optional)\b/i,
            keyword: {
                pattern:
                    /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
                lookbehind: !0
            },
            hexcode: /#[\da-f]{3,6}/i,
            color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                    pattern:
                        /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                    inside: {
                        unit: n,
                        number: r,
                        function: /[\w-]+(?=\()/,
                        punctuation: /[(),]/
                    }
                }
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: n,
            boolean: /\b(?:false|true)\b/,
            operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
            ],
            number: r,
            punctuation: /[{}()\[\];:,]/
        };
    (t.interpolation = {
        pattern: /\{[^\r\n}:]+\}/,
        alias: "variable",
        inside: {
            delimiter: { pattern: /^\{|\}$/, alias: "punctuation" },
            rest: t
        }
    }),
        (t.func = {
            pattern: /[\w-]+\([^)]*\).*/,
            inside: { function: /^[^(]+/, rest: t }
        }),
        (e.languages.stylus = {
            "atrule-declaration": {
                pattern: /(^[ \t]*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: t }
            },
            "variable-declaration": {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: t }
            },
            statement: {
                pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: t }
            },
            "property-declaration": {
                pattern:
                    /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
                lookbehind: !0,
                inside: {
                    property: {
                        pattern: /^[^\s:]+/,
                        inside: { interpolation: t.interpolation }
                    },
                    rest: t
                }
            },
            selector: {
                pattern:
                    /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
                lookbehind: !0,
                inside: {
                    interpolation: t.interpolation,
                    comment: t.comment,
                    punctuation: /[{},]/
                }
            },
            func: t.func,
            string: t.string,
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0
            },
            interpolation: t.interpolation,
            punctuation: /[{}()\[\];:.]/
        });
})(Prism);
(Prism.languages.swift = {
    comment: {
        pattern:
            /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
        lookbehind: !0,
        greedy: !0
    },
    "string-literal": [
        {
            pattern: RegExp(
                '(^|[^"#])(?:"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^(])|[^\\\\\r\n"])*"|"""(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\"]|"(?!""))*""")(?!["#])'
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
                    lookbehind: !0,
                    inside: null
                },
                "interpolation-punctuation": {
                    pattern: /^\)|\\\($/,
                    alias: "punctuation"
                },
                punctuation: /\\(?=[\r\n])/,
                string: /[\s\S]+/
            }
        },
        {
            pattern: RegExp(
                '(^|[^"#])(#+)(?:"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^#])|[^\\\\\r\n])*?"|"""(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?""")\\2'
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
                    lookbehind: !0,
                    inside: null
                },
                "interpolation-punctuation": {
                    pattern: /^\)|\\#+\($/,
                    alias: "punctuation"
                },
                string: /[\s\S]+/
            }
        }
    ],
    directive: {
        pattern: RegExp(
            "#(?:(?:elseif|if)\\b(?:[ \t]*(?:![ \t]*)?(?:\\b\\w+\\b(?:[ \t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \t]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)"
        ),
        alias: "property",
        inside: {
            "directive-name": /^#\w+/,
            boolean: /\b(?:false|true)\b/,
            number: /\b\d+(?:\.\d+)*\b/,
            operator: /!|&&|\|\||[<>]=?/,
            punctuation: /[(),]/
        }
    },
    literal: {
        pattern:
            /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
        alias: "constant"
    },
    "other-directive": { pattern: /#\w+\b/, alias: "property" },
    attribute: { pattern: /@\w+/, alias: "atrule" },
    "function-definition": {
        pattern: /(\bfunc\s+)\w+/,
        lookbehind: !0,
        alias: "function"
    },
    label: {
        pattern:
            /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
        lookbehind: !0,
        alias: "important"
    },
    keyword:
        /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
    boolean: /\b(?:false|true)\b/,
    nil: { pattern: /\bnil\b/, alias: "constant" },
    "short-argument": /\$\d+\b/,
    omit: { pattern: /\b_\b/, alias: "keyword" },
    number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
    punctuation: /[{}[\]();,.:\\]/
}),
    Prism.languages.swift["string-literal"].forEach(function (e) {
        e.inside.interpolation.inside = Prism.languages.swift;
    });
!(function (a) {
    function e(e, n) {
        a.languages[e] &&
            a.languages.insertBefore(e, "comment", { "doc-comment": n });
    }
    var n = a.languages.markup.tag,
        t = {
            pattern: /\/\/\/.*/,
            greedy: !0,
            alias: "comment",
            inside: { tag: n }
        },
        g = {
            pattern: /'''.*/,
            greedy: !0,
            alias: "comment",
            inside: { tag: n }
        };
    e("csharp", t), e("fsharp", t), e("vbnet", g);
})(Prism);
!(function (e) {
    var n = /[*&][^\s[\]{},]+/,
        r =
            /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
        t =
            "(?:" +
            r.source +
            "(?:[ \t]+" +
            n.source +
            ")?|" +
            n.source +
            "(?:[ \t]+" +
            r.source +
            ")?)",
        a =
            "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(
                /<PLAIN>/g,
                function () {
                    return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]";
                }
            ),
        d = "\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";
    function o(e, n) {
        n = (n || "").replace(/m/g, "") + "m";
        var r =
            "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))"
                .replace(/<<prop>>/g, function () {
                    return t;
                })
                .replace(/<<value>>/g, function () {
                    return e;
                });
        return RegExp(r, n);
    }
    (e.languages.yaml = {
        scalar: {
            pattern: RegExp(
                "([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(
                    /<<prop>>/g,
                    function () {
                        return t;
                    }
                )
            ),
            lookbehind: !0,
            alias: "string"
        },
        comment: /#.*/,
        key: {
            pattern: RegExp(
                "((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)"
                    .replace(/<<prop>>/g, function () {
                        return t;
                    })
                    .replace(/<<key>>/g, function () {
                        return "(?:" + a + "|" + d + ")";
                    })
            ),
            lookbehind: !0,
            greedy: !0,
            alias: "atrule"
        },
        directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important"
        },
        datetime: {
            pattern: o(
                "\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"
            ),
            lookbehind: !0,
            alias: "number"
        },
        boolean: {
            pattern: o("false|true", "i"),
            lookbehind: !0,
            alias: "important"
        },
        null: { pattern: o("null|~", "i"), lookbehind: !0, alias: "important" },
        string: { pattern: o(d), lookbehind: !0, greedy: !0 },
        number: {
            pattern: o(
                "[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)",
                "i"
            ),
            lookbehind: !0
        },
        tag: r,
        important: n,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }),
        (e.languages.yml = e.languages.yaml);
})(Prism);
!(function () {
    if (
        "undefined" != typeof Prism &&
        "undefined" != typeof document &&
        document.querySelector
    ) {
        var e,
            t = "line-numbers",
            i = "linkable-line-numbers",
            n = /\n(?!$)/g,
            r = !0;
        Prism.plugins.lineHighlight = {
            highlightLines: function (o, u, c) {
                var h = (u =
                        "string" == typeof u
                            ? u
                            : o.getAttribute("data-line") || "")
                        .replace(/\s+/g, "")
                        .split(",")
                        .filter(Boolean),
                    d = +o.getAttribute("data-line-offset") || 0,
                    f = (
                        (function () {
                            if (void 0 === e) {
                                var t = document.createElement("div");
                                (t.style.fontSize = "13px"),
                                    (t.style.lineHeight = "1.5"),
                                    (t.style.padding = "0"),
                                    (t.style.border = "0"),
                                    (t.innerHTML = "&nbsp;<br />&nbsp;"),
                                    document.body.appendChild(t),
                                    (e = 38 === t.offsetHeight),
                                    document.body.removeChild(t);
                            }
                            return e;
                        })()
                            ? parseInt
                            : parseFloat
                    )(getComputedStyle(o).lineHeight),
                    p = Prism.util.isActive(o, t),
                    g = o.querySelector("code"),
                    m = p ? o : g || o,
                    v = [],
                    y = g.textContent.match(n),
                    b = y ? y.length + 1 : 1,
                    A =
                        g && m != g
                            ? (function (e, t) {
                                  var i = getComputedStyle(e),
                                      n = getComputedStyle(t);
                                  function r(e) {
                                      return +e.substr(0, e.length - 2);
                                  }
                                  return (
                                      t.offsetTop +
                                      r(n.borderTopWidth) +
                                      r(n.paddingTop) -
                                      r(i.paddingTop)
                                  );
                              })(o, g)
                            : 0;
                h.forEach(function (e) {
                    var t = e.split("-"),
                        i = +t[0],
                        n = +t[1] || i;
                    if (!((n = Math.min(b + d, n)) < i)) {
                        var r =
                            o.querySelector(
                                '.line-highlight[data-range="' + e + '"]'
                            ) || document.createElement("div");
                        if (
                            (v.push(function () {
                                r.setAttribute("aria-hidden", "true"),
                                    r.setAttribute("data-range", e),
                                    (r.className =
                                        (c || "") + " line-highlight");
                            }),
                            p && Prism.plugins.lineNumbers)
                        ) {
                            var s = Prism.plugins.lineNumbers.getLine(o, i),
                                l = Prism.plugins.lineNumbers.getLine(o, n);
                            if (s) {
                                var a = s.offsetTop + A + "px";
                                v.push(function () {
                                    r.style.top = a;
                                });
                            }
                            if (l) {
                                var u =
                                    l.offsetTop -
                                    s.offsetTop +
                                    l.offsetHeight +
                                    "px";
                                v.push(function () {
                                    r.style.height = u;
                                });
                            }
                        } else
                            v.push(function () {
                                r.setAttribute("data-start", String(i)),
                                    n > i &&
                                        r.setAttribute("data-end", String(n)),
                                    (r.style.top = (i - d - 1) * f + A + "px"),
                                    (r.textContent = new Array(n - i + 2).join(
                                        " \n"
                                    ));
                            });
                        v.push(function () {
                            r.style.width = o.scrollWidth + "px";
                        }),
                            v.push(function () {
                                m.appendChild(r);
                            });
                    }
                });
                var P = o.id;
                if (p && Prism.util.isActive(o, i) && P) {
                    l(o, i) ||
                        v.push(function () {
                            o.classList.add(i);
                        });
                    var E = parseInt(o.getAttribute("data-start") || "1");
                    s(".line-numbers-rows > span", o).forEach(function (e, t) {
                        var i = t + E;
                        e.onclick = function () {
                            var e = P + "." + i;
                            (r = !1),
                                (location.hash = e),
                                setTimeout(function () {
                                    r = !0;
                                }, 1);
                        };
                    });
                }
                return function () {
                    v.forEach(a);
                };
            }
        };
        var o = 0;
        Prism.hooks.add("before-sanity-check", function (e) {
            var t = e.element.parentElement;
            if (u(t)) {
                var i = 0;
                s(".line-highlight", t).forEach(function (e) {
                    (i += e.textContent.length), e.parentNode.removeChild(e);
                }),
                    i &&
                        /^(?: \n)+$/.test(e.code.slice(-i)) &&
                        (e.code = e.code.slice(0, -i));
            }
        }),
            Prism.hooks.add("complete", function e(i) {
                var n = i.element.parentElement;
                if (u(n)) {
                    clearTimeout(o);
                    var r = Prism.plugins.lineNumbers,
                        s = i.plugins && i.plugins.lineNumbers;
                    l(n, t) && r && !s
                        ? Prism.hooks.add("line-numbers", e)
                        : (Prism.plugins.lineHighlight.highlightLines(n)(),
                          (o = setTimeout(c, 1)));
                }
            }),
            window.addEventListener("hashchange", c),
            window.addEventListener("resize", function () {
                s("pre")
                    .filter(u)
                    .map(function (e) {
                        return Prism.plugins.lineHighlight.highlightLines(e);
                    })
                    .forEach(a);
            });
    }
    function s(e, t) {
        return Array.prototype.slice.call((t || document).querySelectorAll(e));
    }
    function l(e, t) {
        return e.classList.contains(t);
    }
    function a(e) {
        e();
    }
    function u(e) {
        return !!(
            e &&
            /pre/i.test(e.nodeName) &&
            (e.hasAttribute("data-line") || (e.id && Prism.util.isActive(e, i)))
        );
    }
    function c() {
        var e = location.hash.slice(1);
        s(".temporary.line-highlight").forEach(function (e) {
            e.parentNode.removeChild(e);
        });
        var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
        if (t && !document.getElementById(e)) {
            var i = e.slice(0, e.lastIndexOf(".")),
                n = document.getElementById(i);
            n &&
                (n.hasAttribute("data-line") || n.setAttribute("data-line", ""),
                Prism.plugins.lineHighlight.highlightLines(
                    n,
                    t,
                    "temporary "
                )(),
                r &&
                    document
                        .querySelector(".temporary.line-highlight")
                        .scrollIntoView());
        }
    }
})();
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = "line-numbers",
            n = /\n(?!$)/g,
            t = (Prism.plugins.lineNumbers = {
                getLine: function (n, t) {
                    if ("PRE" === n.tagName && n.classList.contains(e)) {
                        var i = n.querySelector(".line-numbers-rows");
                        if (i) {
                            var r =
                                    parseInt(
                                        n.getAttribute("data-start"),
                                        10
                                    ) || 1,
                                s = r + (i.children.length - 1);
                            t < r && (t = r), t > s && (t = s);
                            var l = t - r;
                            return i.children[l];
                        }
                    }
                },
                resize: function (e) {
                    r([e]);
                },
                assumeViewportIndependence: !0
            }),
            i = void 0;
        window.addEventListener("resize", function () {
            (t.assumeViewportIndependence && i === window.innerWidth) ||
                ((i = window.innerWidth),
                r(
                    Array.prototype.slice.call(
                        document.querySelectorAll("pre.line-numbers")
                    )
                ));
        }),
            Prism.hooks.add("complete", function (t) {
                if (t.code) {
                    var i = t.element,
                        s = i.parentNode;
                    if (
                        s &&
                        /pre/i.test(s.nodeName) &&
                        !i.querySelector(".line-numbers-rows") &&
                        Prism.util.isActive(i, e)
                    ) {
                        i.classList.remove(e), s.classList.add(e);
                        var l,
                            o = t.code.match(n),
                            a = o ? o.length + 1 : 1,
                            u = new Array(a + 1).join("<span></span>");
                        (l = document.createElement("span")).setAttribute(
                            "aria-hidden",
                            "true"
                        ),
                            (l.className = "line-numbers-rows"),
                            (l.innerHTML = u),
                            s.hasAttribute("data-start") &&
                                (s.style.counterReset =
                                    "linenumber " +
                                    (parseInt(
                                        s.getAttribute("data-start"),
                                        10
                                    ) -
                                        1)),
                            t.element.appendChild(l),
                            r([s]),
                            Prism.hooks.run("line-numbers", t);
                    }
                }
            }),
            Prism.hooks.add("line-numbers", function (e) {
                (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
            });
    }
    function r(e) {
        if (
            0 !=
            (e = e.filter(function (e) {
                var n,
                    t = ((n = e),
                    n
                        ? window.getComputedStyle
                            ? getComputedStyle(n)
                            : n.currentStyle || null
                        : null)["white-space"];
                return "pre-wrap" === t || "pre-line" === t;
            })).length
        ) {
            var t = e
                .map(function (e) {
                    var t = e.querySelector("code"),
                        i = e.querySelector(".line-numbers-rows");
                    if (t && i) {
                        var r = e.querySelector(".line-numbers-sizer"),
                            s = t.textContent.split(n);
                        r ||
                            (((r = document.createElement("span")).className =
                                "line-numbers-sizer"),
                            t.appendChild(r)),
                            (r.innerHTML = "0"),
                            (r.style.display = "block");
                        var l = r.getBoundingClientRect().height;
                        return (
                            (r.innerHTML = ""),
                            {
                                element: e,
                                lines: s,
                                lineHeights: [],
                                oneLinerHeight: l,
                                sizer: r
                            }
                        );
                    }
                })
                .filter(Boolean);
            t.forEach(function (e) {
                var n = e.sizer,
                    t = e.lines,
                    i = e.lineHeights,
                    r = e.oneLinerHeight;
                (i[t.length - 1] = void 0),
                    t.forEach(function (e, t) {
                        if (e && e.length > 1) {
                            var s = n.appendChild(
                                document.createElement("span")
                            );
                            (s.style.display = "block"), (s.textContent = e);
                        } else i[t] = r;
                    });
            }),
                t.forEach(function (e) {
                    for (
                        var n = e.sizer, t = e.lineHeights, i = 0, r = 0;
                        r < t.length;
                        r++
                    )
                        void 0 === t[r] &&
                            (t[r] =
                                n.children[i++].getBoundingClientRect().height);
                }),
                t.forEach(function (e) {
                    var n = e.sizer,
                        t = e.element.querySelector(".line-numbers-rows");
                    (n.style.display = "none"),
                        (n.innerHTML = ""),
                        e.lineHeights.forEach(function (e, n) {
                            t.children[n].style.height = e + "px";
                        });
                });
        }
    }
})();
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = [],
            t = {},
            n = function () {};
        Prism.plugins.toolbar = {};
        var a = (Prism.plugins.toolbar.registerButton = function (n, a) {
                var r;
                (r =
                    "function" == typeof a
                        ? a
                        : function (e) {
                              var t;
                              return (
                                  "function" == typeof a.onClick
                                      ? (((t =
                                            document.createElement(
                                                "button"
                                            )).type = "button"),
                                        t.addEventListener(
                                            "click",
                                            function () {
                                                a.onClick.call(this, e);
                                            }
                                        ))
                                      : "string" == typeof a.url
                                      ? ((t =
                                            document.createElement("a")).href =
                                            a.url)
                                      : (t = document.createElement("span")),
                                  a.className && t.classList.add(a.className),
                                  (t.textContent = a.text),
                                  t
                              );
                          }),
                    n in t
                        ? console.warn(
                              'There is a button with the key "' +
                                  n +
                                  '" registered already.'
                          )
                        : e.push((t[n] = r));
            }),
            r = (Prism.plugins.toolbar.hook = function (a) {
                var r = a.element.parentNode;
                if (
                    r &&
                    /pre/i.test(r.nodeName) &&
                    !r.parentNode.classList.contains("code-toolbar")
                ) {
                    var o = document.createElement("div");
                    o.classList.add("code-toolbar"),
                        r.parentNode.insertBefore(o, r),
                        o.appendChild(r);
                    var i = document.createElement("div");
                    i.classList.add("toolbar");
                    var l = e,
                        d = (function (e) {
                            for (; e; ) {
                                var t = e.getAttribute("data-toolbar-order");
                                if (null != t)
                                    return (t = t.trim()).length
                                        ? t.split(/\s*,\s*/g)
                                        : [];
                                e = e.parentElement;
                            }
                        })(a.element);
                    d &&
                        (l = d.map(function (e) {
                            return t[e] || n;
                        })),
                        l.forEach(function (e) {
                            var t = e(a);
                            if (t) {
                                var n = document.createElement("div");
                                n.classList.add("toolbar-item"),
                                    n.appendChild(t),
                                    i.appendChild(n);
                            }
                        }),
                        o.appendChild(i);
                }
            });
        a("label", function (e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var n,
                    a,
                    r = t.getAttribute("data-label");
                try {
                    a = document.querySelector("template#" + r);
                } catch (e) {}
                return (
                    a
                        ? (n = a.content)
                        : (t.hasAttribute("data-url")
                              ? ((n = document.createElement("a")).href =
                                    t.getAttribute("data-url"))
                              : (n = document.createElement("span")),
                          (n.textContent = r)),
                    n
                );
            }
        }),
            Prism.hooks.add("complete", r);
    }
})();
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document)
        if (Prism.plugins.toolbar) {
            var e = {
                none: "Plain text",
                plain: "Plain text",
                plaintext: "Plain text",
                text: "Plain text",
                txt: "Plain text",
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                rss: "RSS",
                css: "CSS",
                clike: "C-like",
                js: "JavaScript",
                abap: "ABAP",
                abnf: "ABNF",
                al: "AL",
                antlr4: "ANTLR4",
                g4: "ANTLR4",
                apacheconf: "Apache Configuration",
                apl: "APL",
                aql: "AQL",
                ino: "Arduino",
                arff: "ARFF",
                armasm: "ARM Assembly",
                "arm-asm": "ARM Assembly",
                art: "Arturo",
                asciidoc: "AsciiDoc",
                adoc: "AsciiDoc",
                aspnet: "ASP.NET (C#)",
                asm6502: "6502 Assembly",
                asmatmel: "Atmel AVR Assembly",
                autohotkey: "AutoHotkey",
                autoit: "AutoIt",
                avisynth: "AviSynth",
                avs: "AviSynth",
                "avro-idl": "Avro IDL",
                avdl: "Avro IDL",
                awk: "AWK",
                gawk: "GAWK",
                sh: "Shell",
                basic: "BASIC",
                bbcode: "BBcode",
                bbj: "BBj",
                bnf: "BNF",
                rbnf: "RBNF",
                bqn: "BQN",
                bsl: "BSL (1C:Enterprise)",
                oscript: "OneScript",
                csharp: "C#",
                cs: "C#",
                dotnet: "C#",
                cpp: "C++",
                cfscript: "CFScript",
                cfc: "CFScript",
                cil: "CIL",
                cilkc: "Cilk/C",
                "cilk-c": "Cilk/C",
                cilkcpp: "Cilk/C++",
                "cilk-cpp": "Cilk/C++",
                cilk: "Cilk/C++",
                cmake: "CMake",
                cobol: "COBOL",
                coffee: "CoffeeScript",
                conc: "Concurnas",
                csp: "Content-Security-Policy",
                "css-extras": "CSS Extras",
                csv: "CSV",
                cue: "CUE",
                dataweave: "DataWeave",
                dax: "DAX",
                django: "Django/Jinja2",
                jinja2: "Django/Jinja2",
                "dns-zone-file": "DNS zone file",
                "dns-zone": "DNS zone file",
                dockerfile: "Docker",
                dot: "DOT (Graphviz)",
                gv: "DOT (Graphviz)",
                ebnf: "EBNF",
                editorconfig: "EditorConfig",
                ejs: "EJS",
                etlua: "Embedded Lua templating",
                erb: "ERB",
                "excel-formula": "Excel Formula",
                xlsx: "Excel Formula",
                xls: "Excel Formula",
                fsharp: "F#",
                "firestore-security-rules": "Firestore security rules",
                ftl: "FreeMarker Template Language",
                gml: "GameMaker Language",
                gamemakerlanguage: "GameMaker Language",
                gap: "GAP (CAS)",
                gcode: "G-code",
                gdscript: "GDScript",
                gedcom: "GEDCOM",
                gettext: "gettext",
                po: "gettext",
                glsl: "GLSL",
                gn: "GN",
                gni: "GN",
                "linker-script": "GNU Linker Script",
                ld: "GNU Linker Script",
                "go-module": "Go module",
                "go-mod": "Go module",
                graphql: "GraphQL",
                hbs: "Handlebars",
                hs: "Haskell",
                hcl: "HCL",
                hlsl: "HLSL",
                http: "HTTP",
                hpkp: "HTTP Public-Key-Pins",
                hsts: "HTTP Strict-Transport-Security",
                ichigojam: "IchigoJam",
                "icu-message-format": "ICU Message Format",
                idr: "Idris",
                ignore: ".ignore",
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
                inform7: "Inform 7",
                javadoc: "JavaDoc",
                javadoclike: "JavaDoc-like",
                javastacktrace: "Java stack trace",
                jq: "JQ",
                jsdoc: "JSDoc",
                "js-extras": "JS Extras",
                json: "JSON",
                webmanifest: "Web App Manifest",
                json5: "JSON5",
                jsonp: "JSONP",
                jsstacktrace: "JS stack trace",
                "js-templates": "JS Templates",
                keepalived: "Keepalived Configure",
                kts: "Kotlin Script",
                kt: "Kotlin",
                kumir: "KuMir (КуМир)",
                kum: "KuMir (КуМир)",
                latex: "LaTeX",
                tex: "TeX",
                context: "ConTeXt",
                lilypond: "LilyPond",
                ly: "LilyPond",
                emacs: "Lisp",
                elisp: "Lisp",
                "emacs-lisp": "Lisp",
                llvm: "LLVM IR",
                log: "Log file",
                lolcode: "LOLCODE",
                magma: "Magma (CAS)",
                md: "Markdown",
                "markup-templating": "Markup templating",
                matlab: "MATLAB",
                maxscript: "MAXScript",
                mel: "MEL",
                metafont: "METAFONT",
                mongodb: "MongoDB",
                moon: "MoonScript",
                n1ql: "N1QL",
                n4js: "N4JS",
                n4jsd: "N4JS",
                "nand2tetris-hdl": "Nand To Tetris HDL",
                naniscript: "Naninovel Script",
                nani: "Naninovel Script",
                nasm: "NASM",
                neon: "NEON",
                nginx: "nginx",
                nsis: "NSIS",
                objectivec: "Objective-C",
                objc: "Objective-C",
                ocaml: "OCaml",
                opencl: "OpenCL",
                openqasm: "OpenQasm",
                qasm: "OpenQasm",
                parigp: "PARI/GP",
                objectpascal: "Object Pascal",
                psl: "PATROL Scripting Language",
                pcaxis: "PC-Axis",
                px: "PC-Axis",
                peoplecode: "PeopleCode",
                pcode: "PeopleCode",
                php: "PHP",
                phpdoc: "PHPDoc",
                "php-extras": "PHP Extras",
                "plant-uml": "PlantUML",
                plantuml: "PlantUML",
                plsql: "PL/SQL",
                powerquery: "PowerQuery",
                pq: "PowerQuery",
                mscript: "PowerQuery",
                powershell: "PowerShell",
                promql: "PromQL",
                properties: ".properties",
                protobuf: "Protocol Buffers",
                purebasic: "PureBasic",
                pbfasm: "PureBasic",
                purs: "PureScript",
                py: "Python",
                qsharp: "Q#",
                qs: "Q#",
                q: "Q (kdb+ database)",
                qml: "QML",
                rkt: "Racket",
                cshtml: "Razor C#",
                razor: "Razor C#",
                jsx: "React JSX",
                tsx: "React TSX",
                renpy: "Ren'py",
                rpy: "Ren'py",
                res: "ReScript",
                rest: "reST (reStructuredText)",
                robotframework: "Robot Framework",
                robot: "Robot Framework",
                rb: "Ruby",
                sas: "SAS",
                sass: "Sass (Sass)",
                scss: "Sass (SCSS)",
                "shell-session": "Shell session",
                "sh-session": "Shell session",
                shellsession: "Shell session",
                sml: "SML",
                smlnj: "SML/NJ",
                solidity: "Solidity (Ethereum)",
                sol: "Solidity (Ethereum)",
                "solution-file": "Solution file",
                sln: "Solution file",
                soy: "Soy (Closure Template)",
                sparql: "SPARQL",
                rq: "SPARQL",
                "splunk-spl": "Splunk SPL",
                sqf: "SQF: Status Quo Function (Arma 3)",
                sql: "SQL",
                stata: "Stata Ado",
                iecst: "Structured Text (IEC 61131-3)",
                supercollider: "SuperCollider",
                sclang: "SuperCollider",
                systemd: "Systemd configuration file",
                "t4-templating": "T4 templating",
                "t4-cs": "T4 Text Templates (C#)",
                t4: "T4 Text Templates (C#)",
                "t4-vb": "T4 Text Templates (VB)",
                tap: "TAP",
                tt2: "Template Toolkit 2",
                toml: "TOML",
                trickle: "trickle",
                troy: "troy",
                trig: "TriG",
                ts: "TypeScript",
                tsconfig: "TSConfig",
                uscript: "UnrealScript",
                uc: "UnrealScript",
                uorazor: "UO Razor Script",
                uri: "URI",
                url: "URL",
                vbnet: "VB.Net",
                vhdl: "VHDL",
                vim: "vim",
                "visual-basic": "Visual Basic",
                vba: "VBA",
                vb: "Visual Basic",
                wasm: "WebAssembly",
                "web-idl": "Web IDL",
                webidl: "Web IDL",
                wgsl: "WGSL",
                wiki: "Wiki markup",
                wolfram: "Wolfram language",
                nb: "Mathematica Notebook",
                wl: "Wolfram language",
                xeoracube: "XeoraCube",
                "xml-doc": "XML doc (.net)",
                xojo: "Xojo (REALbasic)",
                xquery: "XQuery",
                yaml: "YAML",
                yml: "YAML",
                yang: "YANG"
            };
            Prism.plugins.toolbar.registerButton("show-language", function (a) {
                var t = a.element.parentNode;
                if (t && /pre/i.test(t.nodeName)) {
                    var o,
                        i =
                            t.getAttribute("data-language") ||
                            e[a.language] ||
                            ((o = a.language)
                                ? (
                                      o.substring(0, 1).toUpperCase() +
                                      o.substring(1)
                                  ).replace(/s(?=cript)/, "S")
                                : o);
                    if (i) {
                        var s = document.createElement("span");
                        return (s.textContent = i), s;
                    }
                }
            });
        } else
            console.warn("Show Languages plugin loaded before Toolbar plugin.");
})();
!(function () {
    if ("undefined" != typeof Prism) {
        var e =
                Object.assign ||
                function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e;
                },
            t = {
                "remove-trailing": "boolean",
                "remove-indent": "boolean",
                "left-trim": "boolean",
                "right-trim": "boolean",
                "break-lines": "number",
                indent: "number",
                "remove-initial-line-feed": "boolean",
                "tabs-to-spaces": "number",
                "spaces-to-tabs": "number"
            };
        (n.prototype = {
            setDefaults: function (t) {
                this.defaults = e(this.defaults, t);
            },
            normalize: function (t, n) {
                for (var r in (n = e(this.defaults, n))) {
                    var i = r.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase();
                    });
                    "normalize" !== r &&
                        "setDefaults" !== i &&
                        n[r] &&
                        this[i] &&
                        (t = this[i].call(this, t, n[r]));
                }
                return t;
            },
            leftTrim: function (e) {
                return e.replace(/^\s+/, "");
            },
            rightTrim: function (e) {
                return e.replace(/\s+$/, "");
            },
            tabsToSpaces: function (e, t) {
                return (
                    (t = 0 | t || 4), e.replace(/\t/g, new Array(++t).join(" "))
                );
            },
            spacesToTabs: function (e, t) {
                return (
                    (t = 0 | t || 4),
                    e.replace(RegExp(" {" + t + "}", "g"), "\t")
                );
            },
            removeTrailing: function (e) {
                return e.replace(/\s*?$/gm, "");
            },
            removeInitialLineFeed: function (e) {
                return e.replace(/^(?:\r?\n|\r)/, "");
            },
            removeIndent: function (e) {
                var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
                return t && t[0].length
                    ? (t.sort(function (e, t) {
                          return e.length - t.length;
                      }),
                      t[0].length ? e.replace(RegExp("^" + t[0], "gm"), "") : e)
                    : e;
            },
            indent: function (e, t) {
                return e.replace(
                    /^[^\S\n\r]*(?=\S)/gm,
                    new Array(++t).join("\t") + "$&"
                );
            },
            breakLines: function (e, t) {
                t = !0 === t ? 80 : 0 | t || 80;
                for (var n = e.split("\n"), i = 0; i < n.length; ++i)
                    if (!(r(n[i]) <= t)) {
                        for (
                            var o = n[i].split(/(\s+)/g), a = 0, l = 0;
                            l < o.length;
                            ++l
                        ) {
                            var s = r(o[l]);
                            (a += s) > t && ((o[l] = "\n" + o[l]), (a = s));
                        }
                        n[i] = o.join("");
                    }
                return n.join("\n");
            }
        }),
            "undefined" != typeof module &&
                module.exports &&
                (module.exports = n),
            (Prism.plugins.NormalizeWhitespace = new n({
                "remove-trailing": !0,
                "remove-indent": !0,
                "left-trim": !0,
                "right-trim": !0
            })),
            Prism.hooks.add("before-sanity-check", function (e) {
                var n = Prism.plugins.NormalizeWhitespace;
                if (
                    (!e.settings ||
                        !1 !== e.settings["whitespace-normalization"]) &&
                    Prism.util.isActive(
                        e.element,
                        "whitespace-normalization",
                        !0
                    )
                )
                    if ((e.element && e.element.parentNode) || !e.code) {
                        var r = e.element.parentNode;
                        if (e.code && r && "pre" === r.nodeName.toLowerCase()) {
                            for (var i in (null == e.settings &&
                                (e.settings = {}),
                            t))
                                if (Object.hasOwnProperty.call(t, i)) {
                                    var o = t[i];
                                    if (r.hasAttribute("data-" + i))
                                        try {
                                            var a = JSON.parse(
                                                r.getAttribute("data-" + i) ||
                                                    "true"
                                            );
                                            typeof a === o &&
                                                (e.settings[i] = a);
                                        } catch (e) {}
                                }
                            for (
                                var l = r.childNodes,
                                    s = "",
                                    c = "",
                                    u = !1,
                                    m = 0;
                                m < l.length;
                                ++m
                            ) {
                                var f = l[m];
                                f == e.element
                                    ? (u = !0)
                                    : "#text" === f.nodeName &&
                                      (u
                                          ? (c += f.nodeValue)
                                          : (s += f.nodeValue),
                                      r.removeChild(f),
                                      --m);
                            }
                            if (
                                e.element.children.length &&
                                Prism.plugins.KeepMarkup
                            ) {
                                var d = s + e.element.innerHTML + c;
                                (e.element.innerHTML = n.normalize(
                                    d,
                                    e.settings
                                )),
                                    (e.code = e.element.textContent);
                            } else
                                (e.code = s + e.code + c),
                                    (e.code = n.normalize(e.code, e.settings));
                        }
                    } else e.code = n.normalize(e.code, e.settings);
            });
    }
    function n(t) {
        this.defaults = e({}, t);
    }
    function r(e) {
        for (var t = 0, n = 0; n < e.length; ++n)
            e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
        return e.length + t;
    }
})();
!(function () {
    function t(t) {
        var e = document.createElement("textarea");
        (e.value = t.getText()),
            (e.style.top = "0"),
            (e.style.left = "0"),
            (e.style.position = "fixed"),
            document.body.appendChild(e),
            e.focus(),
            e.select();
        try {
            var o = document.execCommand("copy");
            setTimeout(function () {
                o ? t.success() : t.error();
            }, 1);
        } catch (e) {
            setTimeout(function () {
                t.error(e);
            }, 1);
        }
        document.body.removeChild(e);
    }
    "undefined" != typeof Prism &&
        "undefined" != typeof document &&
        (Prism.plugins.toolbar
            ? Prism.plugins.toolbar.registerButton(
                  "copy-to-clipboard",
                  function (e) {
                      var o = e.element,
                          n = (function (t) {
                              var e = {
                                  copy: "Copy",
                                  "copy-error": "Press Ctrl+C to copy",
                                  "copy-success": "Copied!",
                                  "copy-timeout": 5e3
                              };
                              for (var o in e) {
                                  for (
                                      var n = "data-prismjs-" + o, c = t;
                                      c && !c.hasAttribute(n);

                                  )
                                      c = c.parentElement;
                                  c && (e[o] = c.getAttribute(n));
                              }
                              return e;
                          })(o),
                          c = document.createElement("button");
                      (c.className = "copy-to-clipboard-button"),
                          c.setAttribute("type", "button");
                      var r = document.createElement("span");
                      return (
                          c.appendChild(r),
                          u("copy"),
                          (function (e, o) {
                              e.addEventListener("click", function () {
                                  !(function (e) {
                                      navigator.clipboard
                                          ? navigator.clipboard
                                                .writeText(e.getText())
                                                .then(e.success, function () {
                                                    t(e);
                                                })
                                          : t(e);
                                  })(o);
                              });
                          })(c, {
                              getText: function () {
                                  return o.textContent;
                              },
                              success: function () {
                                  u("copy-success"), i();
                              },
                              error: function () {
                                  u("copy-error"),
                                      setTimeout(function () {
                                          !(function (t) {
                                              window
                                                  .getSelection()
                                                  .selectAllChildren(t);
                                          })(o);
                                      }, 1),
                                      i();
                              }
                          }),
                          c
                      );
                      function i() {
                          setTimeout(function () {
                              u("copy");
                          }, n["copy-timeout"]);
                      }
                      function u(t) {
                          (r.textContent = n[t]),
                              c.setAttribute("data-copy-state", t);
                      }
                  }
              )
            : console.warn(
                  "Copy to Clipboard plugin loaded before Toolbar plugin."
              ));
})();
"undefined" != typeof Prism &&
    "undefined" != typeof document &&
    document.querySelector &&
    Prism.plugins.toolbar.registerButton("download-file", function (t) {
        var e = t.element.parentNode;
        if (
            e &&
            /pre/i.test(e.nodeName) &&
            e.hasAttribute("data-src") &&
            e.hasAttribute("data-download-link")
        ) {
            var n = e.getAttribute("data-src"),
                a = document.createElement("a");
            return (
                (a.textContent =
                    e.getAttribute("data-download-link-label") || "Download"),
                a.setAttribute("download", ""),
                (a.href = n),
                a
            );
        }
    });
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = { "(": ")", "[": "]", "{": "}" },
            t = { "(": "brace-round", "[": "brace-square", "{": "brace-curly" },
            n = { "${": "{" },
            r = 0,
            c = /^(pair-\d+-)(close|open)$/;
        Prism.hooks.add("complete", function (c) {
            var i = c.element,
                d = i.parentElement;
            if (d && "PRE" == d.tagName) {
                var u = [];
                if (
                    (Prism.util.isActive(i, "match-braces") &&
                        u.push("(", "[", "{"),
                    0 != u.length)
                ) {
                    d.__listenerAdded ||
                        (d.addEventListener("mousedown", function () {
                            var e = d.querySelector("code"),
                                t = s("brace-selected");
                            Array.prototype.slice
                                .call(e.querySelectorAll("." + t))
                                .forEach(function (e) {
                                    e.classList.remove(t);
                                });
                        }),
                        Object.defineProperty(d, "__listenerAdded", {
                            value: !0
                        }));
                    var f = Array.prototype.slice.call(
                            i.querySelectorAll(
                                "span." + s("token") + "." + s("punctuation")
                            )
                        ),
                        h = [];
                    u.forEach(function (c) {
                        for (
                            var i = e[c], d = s(t[c]), u = [], p = [], v = 0;
                            v < f.length;
                            v++
                        ) {
                            var m = f[v];
                            if (0 == m.childElementCount) {
                                var b = m.textContent;
                                (b = n[b] || b) === c
                                    ? (h.push({
                                          index: v,
                                          open: !0,
                                          element: m
                                      }),
                                      m.classList.add(d),
                                      m.classList.add(s("brace-open")),
                                      p.push(v))
                                    : b === i &&
                                      (h.push({
                                          index: v,
                                          open: !1,
                                          element: m
                                      }),
                                      m.classList.add(d),
                                      m.classList.add(s("brace-close")),
                                      p.length && u.push([v, p.pop()]));
                            }
                        }
                        u.forEach(function (e) {
                            var t = "pair-" + r++ + "-",
                                n = f[e[0]],
                                c = f[e[1]];
                            (n.id = t + "open"),
                                (c.id = t + "close"),
                                [n, c].forEach(function (e) {
                                    e.addEventListener("mouseenter", a),
                                        e.addEventListener("mouseleave", o),
                                        e.addEventListener("click", l);
                                });
                        });
                    });
                    var p = 0;
                    h.sort(function (e, t) {
                        return e.index - t.index;
                    }),
                        h.forEach(function (e) {
                            e.open
                                ? (e.element.classList.add(
                                      s("brace-level-" + ((p % 12) + 1))
                                  ),
                                  p++)
                                : ((p = Math.max(0, p - 1)),
                                  e.element.classList.add(
                                      s("brace-level-" + ((p % 12) + 1))
                                  ));
                        });
                }
            }
        });
    }
    function s(e) {
        var t = Prism.plugins.customClass;
        return t ? t.apply(e, "none") : e;
    }
    function i(e) {
        var t = c.exec(e.id);
        return document.querySelector(
            "#" + t[1] + ("open" == t[2] ? "close" : "open")
        );
    }
    function a() {
        Prism.util.isActive(this, "brace-hover", !0) &&
            [this, i(this)].forEach(function (e) {
                e.classList.add(s("brace-hover"));
            });
    }
    function o() {
        [this, i(this)].forEach(function (e) {
            e.classList.remove(s("brace-hover"));
        });
    }
    function l() {
        Prism.util.isActive(this, "brace-select", !0) &&
            [this, i(this)].forEach(function (e) {
                e.classList.add(s("brace-selected"));
            });
    }
})();
