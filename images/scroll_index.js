window.Qtool = {},
Qtool.float = function(e) {
    var t = {
        nameSpace: "",
        pageWidth: 1e3,
        content: "",
        width: 0,
        height: 0,
        offsetTop: 0,
        zIndex: 360,
        side: "right",
        absolute: 0,
        preTop: 0,
        position: 1
    };
    $.extend(t, e),
    $(function() {
        var e, n, r, i, s, o, u, a, f, l;
        if (t.content) a = $(t.content);
        else {
            a = $(t.selector);
            if (!a[0]) return
        }
        a.hide();
        if ($(window).width() < t.pageWidth + t.width) return;
        e = !window.XMLHttpRequest,
        n = t.nameSpace || "qtoolFloat",
        r = t.side,
        i = t.absolute,
        preTop = t.preTop,
        l = t.offsetTop,
        s = e || t.absolute ? "absolute": "fixed",
        o = "position:" + s + ";" + r + ":50%;margin-" + r + ":-" + (t.pageWidth / 2 + t.width + 1) + "px;display:none;z-index:" + t.zIndex + ";",
        $("body").append('<div id="' + n + '" style="' + o + '"> </div>'),
        u = $("#" + n),
        u.html(a),
        a.show();
        var c = t.height || u.height(),
        h = ($(window).height() - c) / 2;
        if (t.absolute) {
            u.css({
                top: i
            }).show();
            var p = "absolute",
            d, v, m = function() {
                e ? (u.css("position", "absolute"), p == "absolute" ? u[0].style.removeExpression("top") : u[0].style.setExpression("top", "eval(document.documentElement.scrollTop+" + v + ")")) : u.css({
                    position: p,
                    top: v
                })
            };
            if (i <= h + l) {
                p = "fixed",
                v = h + l,
                m();
                return
            }
            $(window).scroll(function() {
                var e = $(this),
                t = e.scrollTop();
                t >= i - (h + l) ? (p = "fixed", v = h + l) : (p = "absolute", v = i);
                if (p == d) return;
                d = p,
                m()
            });
            return
        }
        var g = "top";
        t.position == 0 && (h = 0),
        t.position == 2 && (g = "bottom", h = 0),
        h += l,
        u.css(g, h);
        if (e) {
            var y = l;
            t.position == 1 && (y = "(document.documentElement.clientHeight-" + c + ")/2+" + l),
            t.position == 2 && (y = "document.documentElement.clientHeight-" + c + "-" + l),
            u.css({
                bottom: "auto"
            }),
            u[0].style.setExpression("top", "eval(document.documentElement.scrollTop+" + y + ")")
        }
        preTop ? $(window).scroll(function() {
            clearTimeout(f);
            var e = $(this);
            f = setTimeout(function() {
                var t = e.scrollTop();
                t >= preTop ? u.show() : u.hide()
            },
            50)
        }) : u.show()
    })
},
Qtool.slide = function(e) {
    var t = {
        container: "",
        show: {
            container: "",
            data: null,
            template: ""
        },
        operate: {
            container: "",
            data: null,
            template: "",
            hoverClass: "current",
            fun: null,
            triggerType: "click"
        },
        control: {
            width: "",
            height: "",
            prev: "",
            next: "",
            interval: 5e3,
            animate: {
                type: "dynamic",
                "static": {},
                dynamic: {
                    animateTime: 400,
                    direction: 0
                },
                shadow: {
                    animateTime: 400,
                    zIndex: 1
                }
            }
        }
    };
    $.extend(!0, t, e);
    var n = /{(.*?)}/gi,
    r = t.show,
    i = t.operate,
    s = t.control,
    o = $(r.container),
    u = o.children(),
    a = $(i.container),
    f = a.children(),
    l = s.animate.type,
    c = s.animate[l],
    h = 0,
    p = {
        currIndex: 0,
        preIndex: 0,
        slideCount: 0,
        setOperateClass: function() {
            f.removeClass(i.hoverClass).eq(this.currIndex).addClass(i.hoverClass)
        },
        init: function() {
            this.setOperateClass(),
            this[l].init()
        },
        main: function() {
            r.data && this.assembly(),
            h = u.length;
            if (!h) return;
            this.init(),
            s.interval && this.autoRun(),
            this.handleEvent()
        },
        autoRun: function() {
            this.autoSetTimer && clearInterval(this.autoSetTimer);
            var e = this,
            t = a.children();
            this.autoSetTimer = setInterval(function() {
                e.slideCount = (e.slideCount + 1) % h,
                e.preIndex = e.currIndex,
                e.currIndex = e.slideCount,
                e[l].run()
            },
            s.interval)
        },
        shadow: {
            init: function() {
                var e = c.zIndex;
                u.css({
                    opacity: 0,
                    "z-index": e
                }),
                u.eq(0).css({
                    opacity: 1,
                    "z-index": e + 1
                })
            },
            run: function() {
                var e = this,
                t = p,
                n = t.currIndex,
                r = t.preIndex,
                s = c.zIndex;
                u.eq(r).stop(!0, !0),
                u.eq(n).stop(!0, !0),
                t.setOperateClass(),
                u.eq(n).css({
                    opacity: 1
                }),
                u.eq(r).fadeTo(c.animateTime, 0,
                function() {
                    u.eq(r).css({
                        opacity: 0,
                        "z-index": s
                    }),
                    u.eq(n).css("z-index", s + 1)
                }),
                typeof i.fun == "function" && i.fun(n)
            },
            event: function() {
                var e = this,
                t = p;
                a.children()[i.triggerType](function() {
                    var n = $(this),
                    r = n.index();
                    if (r == t.currIndex) return;
                    t.preIndex = t.currIndex,
                    t.currIndex = r,
                    e.run()
                })
            }
        },
        "static": {
            init: function() {},
            run: function() {
                var e = p,
                t = e.currIndex;
                e.setOperateClass(),
                u.hide(),
                u.eq(t).show(),
                typeof i.fun == "function" && i.fun(t)
            },
            event: function() {
                var e = this,
                t = p;
                a.children()[i.triggerType](function() {
                    var n = $(this).index();
                    t.currIndex = n,
                    e.run()
                })
            }
        },
        dynamic: {
            init: function() {},
            run: function() {
                var e = p,
                t = this,
                n = e.preIndex,
                r = e.currIndex,
                a = {},
                f = c.direction,
                l = s.width || u.eq(0).width(),
                d = s.height || u.eq(0).height(),
                v = "margin-",
                m;
                o.stop(!0, !0),
                typeof i.fun == "function" && i.fun(r),
                e.setOperateClass(),
                f == 0 && (v += "left", m = l),
                f == 1 && (v += "top", m = d);
                var g = function(t) {
                    a[v] = -m,
                    o.css(v, 0),
                    o.animate(a, c.animateTime,
                    function() {
                        u.eq(n).hide(),
                        o.css(v, 0),
                        t && (u.eq(r).show(), o.children().last().remove())
                    }),
                    e.isDirClick = !1
                },
                y = function(t) {
                    a[v] = 0,
                    o.css(v, -m),
                    o.animate(a, c.animateTime,
                    function() {
                        u.eq(n).hide(),
                        t && (u.eq(r).show(), o.children().first().remove())
                    }),
                    e.isDirClick = !1
                };
                u.hide(),
                u.eq(n).show();
                if (e.isDirClick && r == 0 && n == h - 1) {
                    o.append(u.eq(r).clone().show()),
                    g(!0);
                    return
                }
                if (e.isDirClick && r == h - 1 && n == 0) {
                    o.prepend(u.eq(r).clone().show()),
                    y(!0);
                    return
                }
                u.eq(r).show(),
                r > n && g(),
                r < n && y()
            },
            event: function() {
                var e = this,
                t = p;
                a.children()[i.triggerType](function() {
                    var n = $(this),
                    r = n.index();
                    if (r == t.currIndex) return;
                    t.preIndex = t.currIndex,
                    t.currIndex = r,
                    e.run()
                })
            }
        },
        toStr: function(e, t) {
            var e = e.replace(n,
            function(e, n) {
                var r = t[n];
                return r ? r: ""
            });
            return e
        },
        assembly: function() {
            var e = this,
            t = [],
            n = [],
            s = r.data,
            l = i.data;
            $.each(s,
            function(n, i) {
                i.i = n + 1,
                t.push(e.toStr(r.template, i))
            }),
            $.each(l,
            function(t, r) {
                r.i = t + 1,
                n.push(e.toStr(i.template, r))
            }),
            o.html(t.join("")),
            a.html(n.join("")),
            u = o.children(),
            f = a.children()
        },
        handleEvent: function() {
            var e = this;
            this[l].event(),
            s.prev && $(s.prev).click(function() {
                e.isDirClick = !0;
                var t = e.currIndex <= 0 ? h - 1 : e.currIndex - 1;
                f.eq(t)[i.triggerType]()
            }),
            s.next && $(s.next).click(function() {
                e.isDirClick = !0;
                var t = e.currIndex >= h - 1 ? 0 : e.currIndex + 1;
                f.eq(t)[i.triggerType]()
            }),
            s.interval && $(t.container).mouseenter(function() {
                e.autoSetTimer && clearInterval(e.autoSetTimer)
            }).mouseleave(function() {
                e.slideCount = e.currIndex,
                e.autoRun()
            })
        }
    };
    p.main()
}(window.jQuery);