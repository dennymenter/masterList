/*!
	Colorbox 1.6.4 (mod by ajar)
	license: MIT
	http://www.jacklmoore.com/colorbox
*/ !(function (t, e, i) {
    var o,
        n,
        r,
        h,
        a,
        s,
        l,
        c,
        d,
        g,
        f,
        u,
        p,
        m,
        w,
        v,
        x,
        y,
        b,
        T,
        C,
        H,
        k,
        W,
        E,
        I,
        M,
        L,
        F,
        R,
        S,
        K,
        P,
        B = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: 0.9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function () {
                return this.rel;
            },
            href: function () {
                return t(this).attr("href");
            },
            title: function () {
                return this.title;
            },
            createImg: function () {
                var e = new Image(),
                    i = t(this).data("cbox-img-attrs");
                return (
                    "object" == typeof i &&
                        t.each(i, function (t, i) {
                            e[t] = i;
                        }),
                    e
                );
            },
            createIframe: function () {
                var i = e.createElement("iframe"),
                    o = t(this).data("cbox-iframe-attrs");
                return (
                    "object" == typeof o &&
                        t.each(o, function (t, e) {
                            i[t] = e;
                        }),
                    "frameBorder" in i && (i.frameBorder = 0),
                    "allowTransparency" in i && (i.allowTransparency = "true"),
                    (i.name = new Date().getTime()),
                    (i.allowFullscreen = !0),
                    i
                );
            },
        },
        O = "colorbox",
        _ = "cbox",
        j = _ + "Element",
        D = _ + "_open",
        N = _ + "_load",
        z = _ + "_complete",
        A = _ + "_cleanup",
        q = _ + "_closed",
        U = _ + "_purge",
        $ = t("<a/>"),
        G = "div",
        Q = 0,
        J = {};
    function V(i, o, n) {
        var r = e.createElement(i);
        return o && (r.id = _ + o), n && (r.style.cssText = n), t(r);
    }
    function X() {
        return i.innerHeight ? i.innerHeight : t(i).height();
    }
    function Y(e, i) {
        i !== Object(i) && (i = {}),
            (this.cache = {}),
            (this.el = e),
            (this.value = function (e) {
                var o;
                return void 0 === this.cache[e] && (void 0 !== (o = t(this.el).attr("data-cbox-" + e)) ? (this.cache[e] = o) : void 0 !== i[e] ? (this.cache[e] = i[e]) : void 0 !== B[e] && (this.cache[e] = B[e])), this.cache[e];
            }),
            (this.get = function (e) {
                var i = this.value(e);
                return t.isFunction(i) ? i.call(this.el, this) : i;
            });
    }
    function Z(t) {
        var e = d.length,
            i = (I + t) % e;
        return i < 0 ? e + i : i;
    }
    function tt(t, e) {
        return Math.round((/%/.test(t) ? ("x" === e ? g.width() : X()) / 100 : 1) * parseInt(t, 10));
    }
    function et(t, e) {
        return t.get("photo") || t.get("photoRegex").test(e);
    }
    function it(t, e) {
        return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e;
    }
    function ot(t) {
        "contains" in n[0] && !n[0].contains(t.target) && t.target !== o[0] && (t.stopPropagation(), n.trigger("focus"));
    }
    function nt(t) {
        nt.str !== t && (n.add(o).removeClass(nt.str).addClass(t), (nt.str = t));
    }
    function rt(i) {
        t(e).trigger(i), $.triggerHandler(i);
    }
    var ht = (function () {
        var t,
            e,
            i = _ + "Slideshow_",
            o = "click." + _;
        function r() {
            clearTimeout(e);
        }
        function h() {
            (C.get("loop") || d[I + 1]) && (r(), (e = setTimeout(K.next, C.get("slideshowSpeed"))));
        }
        function a() {
            v.html(C.get("slideshowStop")).off(o).one(o, s), $.on(z, h).on(N, r), n.removeClass(i + "off").addClass(i + "on");
        }
        function s() {
            r(),
                $.off(z, h).off(N, r),
                v
                    .html(C.get("slideshowStart"))
                    .off(o)
                    .one(o, function () {
                        K.next(), a();
                    }),
                n.removeClass(i + "on").addClass(i + "off");
        }
        function l() {
            (t = !1), v.hide(), r(), $.off(z, h).off(N, r), n.removeClass(i + "off " + i + "on");
        }
        return function () {
            t ? C.get("slideshow") || ($.off(A, l), l()) : C.get("slideshow") && d[1] && ((t = !0), $.one(A, l), C.get("slideshowAuto") ? a() : s(), v.show());
        };
    })();
    function at(r) {
        var g, w;
        if (!R) {
            if (
                ((g = t(r).data(O)),
                (C = new Y(r, g)),
                (w = C.get("rel")),
                (I = 0),
                w && !1 !== w && "nofollow" !== w
                    ? ((d = t("." + j).filter(function () {
                          return new Y(this, t.data(this, O)).get("rel") === w;
                      })),
                      -1 === (I = d.index(C.el)) && ((d = d.add(C.el)), (I = d.length - 1)))
                    : (d = t(C.el)),
                !L)
            ) {
                (L = F = !0),
                    nt(C.get("className")),
                    n.css({ visibility: "hidden", display: "block", opacity: "" }),
                    (f = V(G, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden")),
                    h.css({ width: "", height: "" }).append(f),
                    (H = a.height() + c.height() + h.outerHeight(!0) - h.height()),
                    (k = s.width() + l.width() + h.outerWidth(!0) - h.width()),
                    (W = f.outerHeight(!0)),
                    (E = f.outerWidth(!0));
                var v = tt(C.get("initialWidth"), "x"),
                    x = tt(C.get("initialHeight"), "y"),
                    y = C.get("maxWidth"),
                    P = C.get("maxHeight");
                (C.w = Math.max((!1 !== y ? Math.min(v, tt(y, "x")) : v) - E - k, 0)),
                    (C.h = Math.max((!1 !== P ? Math.min(x, tt(P, "y")) : x) - W - H, 0)),
                    f.css({ width: "", height: C.h }),
                    K.position(),
                    rt(D),
                    C.get("onOpen"),
                    T.add(m).hide(),
                    n.trigger("focus"),
                    C.get("trapFocus") &&
                        e.addEventListener &&
                        (e.addEventListener("focus", ot, !0),
                        $.one(q, function () {
                            e.removeEventListener("focus", ot, !0);
                        })),
                    C.get("returnFocus") &&
                        $.one(q, function () {
                            t(C.el).trigger("focus");
                        });
            }
            var B = parseFloat(C.get("opacity"));
            o.css({ opacity: B == B ? B : "", cursor: C.get("overlayClose") ? "pointer" : "", visibility: "visible" }).show(),
                C.get("closeButton") ? b.html(C.get("close")).appendTo(h) : b.appendTo("<div/>"),
                (function () {
                    var e,
                        o,
                        n,
                        r = K.prep,
                        h = ++Q;
                    (F = !0),
                        (M = !1),
                        rt(U),
                        rt(N),
                        C.get("onLoad"),
                        (C.h = C.get("height") ? tt(C.get("height"), "y") - W - H : C.get("innerHeight") && tt(C.get("innerHeight"), "y")),
                        (C.w = C.get("width") ? tt(C.get("width"), "x") - E - k : C.get("innerWidth") && tt(C.get("innerWidth"), "x")),
                        (C.mw = C.w),
                        (C.mh = C.h),
                        C.get("maxWidth") && ((C.mw = tt(C.get("maxWidth"), "x") - E - k), (C.mw = C.w && C.w < C.mw ? C.w : C.mw));
                    C.get("maxHeight") && ((C.mh = tt(C.get("maxHeight"), "y") - W - H), (C.mh = C.h && C.h < C.mh ? C.h : C.mh));
                    if (
                        ((e = C.get("href")),
                        (S = setTimeout(function () {
                            p.show();
                        }, 100)),
                        C.get("inline"))
                    ) {
                        var a = t(e).eq(0);
                        (n = t("<div>").hide().insertBefore(a)),
                            $.one(U, function () {
                                n.replaceWith(a);
                            }),
                            r(a);
                    } else
                        C.get("iframe")
                            ? r(" ")
                            : C.get("html")
                            ? r(C.get("html"))
                            : et(C, e)
                            ? ((e = it(C, e)),
                              (M = C.get("createImg")),
                              t(M)
                                  .addClass(_ + "Photo")
                                  .on("error." + _, function () {
                                      r(V(G, "Error").html(C.get("imgError")));
                                  })
                                  .one("load", function () {
                                      h === Q &&
                                          setTimeout(function () {
                                              var e;
                                              C.get("retinaImage") && i.devicePixelRatio > 1 && ((M.height = M.height / i.devicePixelRatio), (M.width = M.width / i.devicePixelRatio)),
                                                  C.get("scalePhotos") &&
                                                      ((o = function () {
                                                          (M.height -= M.height * e), (M.width -= M.width * e);
                                                      }),
                                                      C.mw && M.width > C.mw && ((e = (M.width - C.mw) / M.width), o()),
                                                      C.mh && M.height > C.mh && ((e = (M.height - C.mh) / M.height), o())),
                                                  C.h && (M.style.marginTop = Math.max(C.mh - M.height, 0) / 2 + "px"),
                                                  d[1] &&
                                                      (C.get("loop") || d[I + 1]) &&
                                                      ((M.style.cursor = "pointer"),
                                                      t(M).on("click." + _, function () {
                                                          K.next();
                                                      })),
                                                  (M.style.width = M.width + "px"),
                                                  (M.style.height = M.height + "px"),
                                                  r(M);
                                          }, 1);
                                  }),
                              (M.src = e))
                            : e &&
                              u.load(e, C.get("data"), function (e, i) {
                                  h === Q && r("error" === i ? V(G, "Error").html(C.get("xhrError")) : t(this).contents());
                              });
                })();
        }
    }
    function st() {
        n ||
            ((P = !1),
            (g = t(i)),
            (n = V(G)
                .attr({ id: O, class: !1 === t.support.opacity ? _ + "IE" : "", role: "dialog", tabindex: "-1" })
                .hide()),
            (o = V(G, "Overlay").hide()),
            (p = t([V(G, "LoadingOverlay")[0], V(G, "LoadingGraphic")[0]])),
            (r = V(G, "Wrapper")),
            (h = V(G, "Content").append(
                (m = V(G, "Title")),
                (w = V(G, "Current")),
                (y = t('<button type="button"/>').attr({ id: _ + "Previous" })),
                (x = t('<button type="button"/>').attr({ id: _ + "Next" })),
                (v = t('<button type="button"/>').attr({ id: _ + "Slideshow" })),
                p
            )),
            (b = t('<button type="button"/>').attr({ id: _ + "Close" })),
            r
                .append(
                    V(G).append(V(G, "TopLeft"), (a = V(G, "TopCenter")), V(G, "TopRight")),
                    V(G, !1, "clear:left").append((s = V(G, "MiddleLeft")), h, (l = V(G, "MiddleRight"))),
                    V(G, !1, "clear:left").append(V(G, "BottomLeft"), (c = V(G, "BottomCenter")), V(G, "BottomRight"))
                )
                .find("div div")
                .css({ float: "left" }),
            (u = V(G, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;")),
            (T = x.add(y).add(w).add(v))),
            e.body && !n.parent().length && t(e.body).append(o, n.append(r, u));
    }
    function lt() {
        return (
            !!n &&
            (P ||
                ((P = !0),
                x.on("click", function () {
                    K.next();
                }),
                y.on("click", function () {
                    K.prev();
                }),
                b.on("click", function () {
                    K.close();
                }),
                o.on("click", function () {
                    C.get("overlayClose") && K.close();
                }),
                t(e).on("keydown." + _, function (t) {
                    var e = t.keyCode;
                    L && C.get("escKey") && 27 === e && (t.preventDefault(), K.close()), L && C.get("arrowKey") && d[1] && !t.altKey && (37 === e ? (t.preventDefault(), y.on("click")) : 39 === e && (t.preventDefault(), x.on("click")));
                }),
                t.isFunction(t.fn.on) &&
                    t(e).on("click." + _, "." + j, function (t) {
                        t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), at(this));
                    })),
            !0)
        );
    }
    t[O] ||
        (t(st),
        ((K = t.fn[O] = t[O] = function (e, i) {
            var o = this;
            return (
                (e = e || {}),
                t.isFunction(o) && ((o = t("<a/>")), (e.open = !0)),
                o[0]
                    ? (st(),
                      lt() &&
                          (i && (e.onComplete = i),
                          o
                              .each(function () {
                                  var i = t.data(this, O) || {};
                                  t.data(this, O, t.extend(i, e));
                              })
                              .addClass(j),
                          new Y(o[0], e).get("open") && at(o[0])),
                      o)
                    : o
            );
        }).position = function (e, i) {
            var o,
                d,
                f,
                u = 0,
                p = 0,
                m = n.offset();
            function w() {
                (a[0].style.width = c[0].style.width = h[0].style.width = parseInt(n[0].style.width, 10) - k + "px"), (h[0].style.height = s[0].style.height = l[0].style.height = parseInt(n[0].style.height, 10) - H + "px");
            }
            if (
                (g.off("resize." + _),
                n.css({ top: -9e4, left: -9e4 }),
                (d = g.scrollTop()),
                (f = g.scrollLeft()),
                C.get("fixed") ? ((m.top -= d), (m.left -= f), n.css({ position: "fixed" })) : ((u = d), (p = f), n.css({ position: "absolute" })),
                !1 !== C.get("right") ? (p += Math.max(g.width() - C.w - E - k - tt(C.get("right"), "x"), 0)) : !1 !== C.get("left") ? (p += tt(C.get("left"), "x")) : (p += Math.round(Math.max(g.width() - C.w - E - k, 0) / 2)),
                !1 !== C.get("bottom") ? (u += Math.max(X() - C.h - W - H - tt(C.get("bottom"), "y"), 0)) : !1 !== C.get("top") ? (u += tt(C.get("top"), "y")) : (u += Math.round(Math.max(X() - C.h - W - H, 0) / 2)),
                n.css({ top: m.top, left: m.left, visibility: "visible" }),
                (r[0].style.width = r[0].style.height = "9999px"),
                (o = { width: C.w + E + k, height: C.h + W + H, top: u, left: p }),
                e)
            ) {
                var v = 0;
                t.each(o, function (t) {
                    o[t] === J[t] || (v = e);
                }),
                    (e = v);
            }
            (J = o),
                e || n.css(o),
                n.dequeue().animate(o, {
                    duration: e || 0,
                    complete: function () {
                        w(),
                            (F = !1),
                            (r[0].style.width = C.w + E + k + "px"),
                            (r[0].style.height = C.h + W + H + "px"),
                            C.get("reposition") &&
                                setTimeout(function () {
                                    g.on("resize." + _, K.position);
                                }, 1),
                            t.isFunction(i) && i();
                    },
                    step: w,
                });
        }),
        (K.resize = function (t) {
            var e;
            L &&
                ((t = t || {}).width && (C.w = tt(t.width, "x") - E - k),
                t.innerWidth && (C.w = tt(t.innerWidth, "x")),
                f.css({ width: C.w }),
                t.height && (C.h = tt(t.height, "y") - W - H),
                t.innerHeight && (C.h = tt(t.innerHeight, "y")),
                t.innerHeight || t.height || ((e = f.scrollTop()), f.css({ height: "auto" }), (C.h = f.height())),
                f.css({ height: C.h }),
                e && f.scrollTop(e),
                K.position("none" === C.get("transition") ? 0 : C.get("speed")));
        }),
        (K.prep = function (i) {
            if (L) {
                var o,
                    r = "none" === C.get("transition") ? 0 : C.get("speed");
                f.remove(),
                    (f = V(G, "LoadedContent").append(i))
                        .hide()
                        .appendTo(u.show())
                        .css({ width: ((C.w = C.w || f.width()), (C.w = C.mw && C.mw < C.w ? C.mw : C.w), C.w), overflow: C.get("scrolling") ? "auto" : "hidden" })
                        .css({ height: ((C.h = C.h || f.height()), (C.h = C.mh && C.mh < C.h ? C.mh : C.h), C.h) })
                        .prependTo(h),
                    u.hide(),
                    t(M).css({ float: "none" }),
                    nt(C.get("className")),
                    (o = function () {
                        var i,
                            o,
                            h = d.length;
                        function a() {
                            !1 === t.support.opacity && n[0].style.removeAttribute("filter");
                        }
                        L &&
                            ((o = function () {
                                clearTimeout(S), p.hide(), rt(z), C.get("onComplete");
                            }),
                            m.html(C.get("title")).show(),
                            f.show(),
                            h > 1
                                ? ("string" == typeof C.get("current") &&
                                      w
                                          .html(
                                              C.get("current")
                                                  .replace("{current}", I + 1)
                                                  .replace("{total}", h)
                                          )
                                          .show(),
                                  x[C.get("loop") || I < h - 1 ? "show" : "hide"]().html(C.get("next")),
                                  y[C.get("loop") || I ? "show" : "hide"]().html(C.get("previous")),
                                  ht(),
                                  C.get("preloading") &&
                                      t.each([Z(-1), Z(1)], function () {
                                          var i = d[this],
                                              o = new Y(i, t.data(i, O)),
                                              n = o.get("href");
                                          n && et(o, n) && ((n = it(o, n)), (e.createElement("img").src = n));
                                      }))
                                : T.hide(),
                            C.get("iframe")
                                ? ((i = C.get("createIframe")),
                                  C.get("scrolling") || (i.scrolling = "no"),
                                  t(i)
                                      .attr({ src: C.get("href"), class: _ + "Iframe" })
                                      .one("load", o)
                                      .appendTo(f),
                                  $.one(U, function () {
                                      i.src = "//about:blank";
                                  }),
                                  C.get("fastIframe") && t(i).trigger("load"))
                                : o(),
                            "fade" === C.get("transition") ? n.fadeTo(r, 1, a) : a());
                    }),
                    "fade" === C.get("transition")
                        ? n.fadeTo(r, 0, function () {
                              K.position(0, o);
                          })
                        : K.position(r, o);
            }
        }),
        (K.next = function () {
            !F && d[1] && (C.get("loop") || d[I + 1]) && ((I = Z(1)), at(d[I]));
        }),
        (K.prev = function () {
            !F && d[1] && (C.get("loop") || I) && ((I = Z(-1)), at(d[I]));
        }),
        (K.close = function () {
            L &&
                !R &&
                ((R = !0),
                (L = !1),
                rt(A),
                C.get("onCleanup"),
                g.off("." + _),
                o.fadeTo(C.get("fadeOut") || 0, 0),
                n.stop().fadeTo(C.get("fadeOut") || 0, 0, function () {
                    n.hide(),
                        o.hide(),
                        rt(U),
                        f.remove(),
                        setTimeout(function () {
                            (R = !1), rt(q), C.get("onClosed");
                        }, 1);
                }));
        }),
        (K.remove = function () {
            n &&
                (n.stop(),
                t[O].close(),
                n.stop(!1, !0).remove(),
                o.remove(),
                (R = !1),
                (n = null),
                t("." + j)
                    .removeData(O)
                    .removeClass(j),
                t(e)
                    .off("click." + _)
                    .off("keydown." + _));
        }),
        (K.element = function () {
            return t(C.el);
        }),
        (K.settings = B));
})(jQuery, document, window);
