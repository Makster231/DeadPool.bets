"use strict";
function reviewsSlider() {
  $reviewSlider_counter < 1 &&
    $reviewSlider.slick({
      lazyLoad: "progressive",
      dots: !1,
      arrows: !0,
      infinite: !0,
      speed: 400,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: !0,
      autoplay: !0,
      autoplaySpeed: 3e3,
      responsive: [{ breakpoint: 960, settings: { slidesToShow: 1 } }],
    }),
    $reviewSlider_counter++;
}
var $reviewSlider_counter = 0,
  $reviewSlider = $(".js_reviews-slider");
!(function (t, e, i) {
  function n() {
    r.click(function () {
      var e = t(this);
      if (!e.hasClass("js_not-nav-item"))
        return (
          t(v).addClass("js_hidden"),
          r.removeClass("js_active"),
          e.hasClass("".concat(c))
            ? (t("".concat(v).concat(u)).removeClass("js_hidden"),
              void e.addClass("js_active"))
            : e.hasClass("".concat(l))
            ? (t("".concat(v).concat(_)).removeClass("js_hidden"),
              void e.addClass("js_active"))
            : e.hasClass("".concat(d))
            ? (t("".concat(v).concat(p)).removeClass("js_hidden"),
              void e.addClass("js_active"))
            : e.hasClass("".concat(f))
            ? (t("".concat(v).concat(m)).removeClass("js_hidden"),
              e.addClass("js_active"),
              void reviewsSlider())
            : e.hasClass("".concat(h))
            ? (t("".concat(v).concat(g)).removeClass("js_hidden"),
              void e.addClass("js_active"))
            : void 0
        );
    });
  }
  function o() {
    t(".js_header-logo").click(function () {
      t(v).addClass("js_hidden"),
        r.removeClass("js_active"),
        t("".concat(v).concat(u)).removeClass("js_hidden"),
        t(".".concat(c)).addClass("js_active");
    });
  }
  var s = {
      nav_items: t(".js_nav-item"),
      nav_main: "js_nav-main",
      nav_about: "js_nav-about",
      nav_services: "js_nav-services",
      nav_reviews: "js_nav-reviews",
      nav_blog: "js_nav-blog",
    },
    a = {
      pages_page: ".js_page",
      pages_main: ".js_main",
      pages_about: ".js_about",
      pages_services: ".js_services",
      pages_reviews: ".js_reviews",
      pages_blog: ".js_blog",
    },
    r = s.nav_items,
    c = s.nav_main,
    l = s.nav_about,
    d = s.nav_services,
    f = s.nav_reviews,
    h = s.nav_blog,
    v = a.pages_page,
    u = a.pages_main,
    _ = a.pages_about,
    p = a.pages_services,
    m = a.pages_reviews,
    g = a.pages_blog;
  t(function () {
    n(), o();
  });
})(window.jQuery, window, document),
  (function (t, e) {
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function n(t, e) {
      for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    }
    function o(t) {
      return parseFloat(t) || 0;
    }
    function s(t) {
      for (var e = 0; t; ) (e += t.offsetTop), (t = t.offsetParent);
      return e;
    }
    function a() {
      function i() {
        t.pageXOffset != h.left
          ? ((h.top = t.pageYOffset), (h.left = t.pageXOffset), _.refreshAll())
          : t.pageYOffset != h.top &&
            ((h.top = t.pageYOffset),
            (h.left = t.pageXOffset),
            v.forEach(function (t) {
              return t._recalcPosition();
            }));
      }
      function n() {
        s = setInterval(function () {
          v.forEach(function (t) {
            return t._fastCheck();
          });
        }, 500);
      }
      function o() {
        clearInterval(s);
      }
      if (!d) {
        (d = !0),
          i(),
          t.addEventListener("scroll", i),
          t.addEventListener("resize", _.refreshAll),
          t.addEventListener("orientationchange", _.refreshAll);
        var s = void 0,
          a = void 0,
          r = void 0;
        "hidden" in e
          ? ((a = "hidden"), (r = "visibilitychange"))
          : "webkitHidden" in e &&
            ((a = "webkitHidden"), (r = "webkitvisibilitychange")),
          r
            ? (e[a] || n(),
              e.addEventListener(r, function () {
                e[a] ? o() : n();
              }))
            : n();
      }
    }
    var r = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      c = !1,
      l = void 0 !== t;
    l && t.getComputedStyle
      ? (function () {
          var t = e.createElement("div");
          ["", "-webkit-", "-moz-", "-ms-"].some(function (e) {
            try {
              t.style.position = e + "sticky";
            } catch (t) {}
            return "" != t.style.position;
          }) && (c = !0);
        })()
      : (c = !0);
    var d = !1,
      f = "undefined" != typeof ShadowRoot,
      h = { top: null, left: null },
      v = [],
      u = (function () {
        function a(t) {
          if ((i(this, a), !(t instanceof HTMLElement)))
            throw new Error("First argument must be HTMLElement");
          if (
            v.some(function (e) {
              return e._node === t;
            })
          )
            throw new Error("Stickyfill is already applied to this node");
          (this._node = t),
            (this._stickyMode = null),
            (this._active = !1),
            v.push(this),
            this.refresh();
        }
        return (
          r(a, [
            {
              key: "refresh",
              value: function () {
                if (!c && !this._removed) {
                  this._active && this._deactivate();
                  var i = this._node,
                    a = getComputedStyle(i),
                    r = {
                      position: a.position,
                      top: a.top,
                      display: a.display,
                      marginTop: a.marginTop,
                      marginBottom: a.marginBottom,
                      marginLeft: a.marginLeft,
                      marginRight: a.marginRight,
                      cssFloat: a.cssFloat,
                    };
                  if (
                    !isNaN(parseFloat(r.top)) &&
                    "table-cell" != r.display &&
                    "none" != r.display
                  ) {
                    this._active = !0;
                    var l = i.style.position;
                    ("sticky" != a.position &&
                      "-webkit-sticky" != a.position) ||
                      (i.style.position = "static");
                    var d = i.parentNode,
                      h = f && d instanceof ShadowRoot ? d.host : d,
                      v = i.getBoundingClientRect(),
                      u = h.getBoundingClientRect(),
                      _ = getComputedStyle(h);
                    (this._parent = {
                      node: h,
                      styles: { position: h.style.position },
                      offsetHeight: h.offsetHeight,
                    }),
                      (this._offsetToWindow = {
                        left: v.left,
                        right: e.documentElement.clientWidth - v.right,
                      }),
                      (this._offsetToParent = {
                        top: v.top - u.top - o(_.borderTopWidth),
                        left: v.left - u.left - o(_.borderLeftWidth),
                        right: -v.right + u.right - o(_.borderRightWidth),
                      }),
                      (this._styles = {
                        position: l,
                        top: i.style.top,
                        bottom: i.style.bottom,
                        left: i.style.left,
                        right: i.style.right,
                        width: i.style.width,
                        marginTop: i.style.marginTop,
                        marginLeft: i.style.marginLeft,
                        marginRight: i.style.marginRight,
                      });
                    var p = o(r.top);
                    this._limits = {
                      start: v.top + t.pageYOffset - p,
                      end:
                        u.top +
                        t.pageYOffset +
                        h.offsetHeight -
                        o(_.borderBottomWidth) -
                        i.offsetHeight -
                        p -
                        o(r.marginBottom),
                    };
                    var m = _.position;
                    "absolute" != m &&
                      "relative" != m &&
                      (h.style.position = "relative"),
                      this._recalcPosition();
                    var g = (this._clone = {});
                    (g.node = e.createElement("div")),
                      n(g.node.style, {
                        width: v.right - v.left + "px",
                        height: v.bottom - v.top + "px",
                        marginTop: r.marginTop,
                        marginBottom: r.marginBottom,
                        marginLeft: r.marginLeft,
                        marginRight: r.marginRight,
                        cssFloat: r.cssFloat,
                        padding: 0,
                        border: 0,
                        borderSpacing: 0,
                        fontSize: "1em",
                        position: "static",
                      }),
                      d.insertBefore(g.node, i),
                      (g.docOffsetTop = s(g.node));
                  }
                }
              },
            },
            {
              key: "_recalcPosition",
              value: function () {
                if (this._active && !this._removed) {
                  var t =
                    h.top <= this._limits.start
                      ? "start"
                      : h.top >= this._limits.end
                      ? "end"
                      : "middle";
                  if (this._stickyMode != t) {
                    switch (t) {
                      case "start":
                        n(this._node.style, {
                          position: "absolute",
                          left: this._offsetToParent.left + "px",
                          right: this._offsetToParent.right + "px",
                          top: this._offsetToParent.top + "px",
                          bottom: "auto",
                          width: "auto",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                        });
                        break;
                      case "middle":
                        n(this._node.style, {
                          position: "fixed",
                          left: this._offsetToWindow.left + "px",
                          right: this._offsetToWindow.right + "px",
                          top: this._styles.top,
                          bottom: "auto",
                          width: "auto",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                        });
                        break;
                      case "end":
                        n(this._node.style, {
                          position: "absolute",
                          left: this._offsetToParent.left + "px",
                          right: this._offsetToParent.right + "px",
                          top: "auto",
                          bottom: 0,
                          width: "auto",
                          marginLeft: 0,
                          marginRight: 0,
                        });
                    }
                    this._stickyMode = t;
                  }
                }
              },
            },
            {
              key: "_fastCheck",
              value: function () {
                this._active &&
                  !this._removed &&
                  (Math.abs(s(this._clone.node) - this._clone.docOffsetTop) >
                    1 ||
                    Math.abs(
                      this._parent.node.offsetHeight - this._parent.offsetHeight
                    ) > 1) &&
                  this.refresh();
              },
            },
            {
              key: "_deactivate",
              value: function () {
                var t = this;
                this._active &&
                  !this._removed &&
                  (this._clone.node.parentNode.removeChild(this._clone.node),
                  delete this._clone,
                  n(this._node.style, this._styles),
                  delete this._styles,
                  v.some(function (e) {
                    return (
                      e !== t && e._parent && e._parent.node === t._parent.node
                    );
                  }) || n(this._parent.node.style, this._parent.styles),
                  delete this._parent,
                  (this._stickyMode = null),
                  (this._active = !1),
                  delete this._offsetToWindow,
                  delete this._offsetToParent,
                  delete this._limits);
              },
            },
            {
              key: "remove",
              value: function () {
                var t = this;
                this._deactivate(),
                  v.some(function (e, i) {
                    if (e._node === t._node) return v.splice(i, 1), !0;
                  }),
                  (this._removed = !0);
              },
            },
          ]),
          a
        );
      })(),
      _ = {
        stickies: v,
        Sticky: u,
        forceSticky: function () {
          (c = !1), a(), this.refreshAll();
        },
        addOne: function (t) {
          if (!(t instanceof HTMLElement)) {
            if (!t.length || !t[0]) return;
            t = t[0];
          }
          for (var e = 0; e < v.length; e++) if (v[e]._node === t) return v[e];
          return new u(t);
        },
        add: function (t) {
          if ((t instanceof HTMLElement && (t = [t]), t.length)) {
            for (
              var e = [],
                i = function (i) {
                  var n = t[i];
                  return n instanceof HTMLElement
                    ? v.some(function (t) {
                        if (t._node === n) return e.push(t), !0;
                      })
                      ? "continue"
                      : void e.push(new u(n))
                    : (e.push(void 0), "continue");
                },
                n = 0;
              n < t.length;
              n++
            )
              i(n);
            return e;
          }
        },
        refreshAll: function () {
          v.forEach(function (t) {
            return t.refresh();
          });
        },
        removeOne: function (t) {
          if (!(t instanceof HTMLElement)) {
            if (!t.length || !t[0]) return;
            t = t[0];
          }
          v.some(function (e) {
            if (e._node === t) return e.remove(), !0;
          });
        },
        remove: function (t) {
          if ((t instanceof HTMLElement && (t = [t]), t.length))
            for (
              var e = function (e) {
                  var i = t[e];
                  v.some(function (t) {
                    if (t._node === i) return t.remove(), !0;
                  });
                },
                i = 0;
              i < t.length;
              i++
            )
              e(i);
        },
        removeAll: function () {
          for (; v.length; ) v[0].remove();
        },
      };
    c || a(),
      "undefined" != typeof module && module.exports
        ? (module.exports = _)
        : l && (t.Stickyfill = _);
  })(window, document),
  (function (t, e, i) {
    function n() {
      var e = { dota: "forecasts-dota", csgo: "forecasts-csgo" },
        i = {
          nav_item: ".js_forecasts-nav--item",
          content_item: ".js_forecasts-content--wrapper",
        },
        n = i.nav_item,
        o = i.content_item;
      t(n).click(function () {
        var i = t(this);
        t(n).removeClass("js_active"),
          i.addClass("js_active"),
          i.attr("data-role") === e.dota
            ? (t("".concat(o, "[data-role=").concat(e.dota, "]")).removeClass(
                "js_hidden"
              ),
              t("".concat(o, "[data-role=").concat(e.csgo, "]")).addClass(
                "js_hidden"
              ))
            : (t("".concat(o, "[data-role=").concat(e.dota, "]")).addClass(
                "js_hidden"
              ),
              t("".concat(o, "[data-role=").concat(e.csgo, "]")).removeClass(
                "js_hidden"
              ));
      });
    }
    t(function () {
      n();
    });
  })(window.jQuery, window, document),
  (function (t, e, i) {
    t(function () {
      t("head").prepend(
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />',
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />',
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />'
      );
    });
  })(window.jQuery, window, document),
  (function (t, e, i) {
    t(function () {
      if (
        (t("body").css("opacity", 1),
        t(".js_data").html(new Date().getFullYear()),
        t(e).width() > 960)
      ) {
        var i = t(".js_aside-content");
        Stickyfill.add(i);
      }
    });
  })(window.jQuery, window, document);
