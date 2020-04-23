"use strict";

(function ($, window, document) {
  function tooltipInit() {
    if ($(window).width() < 640) {
      $(".js_services-tooltip").tooltipster({
        animation: "grow"
      });
    } else {
      $(".js_services-tooltip").tooltipster({
        animation: "grow",
        position: "left",
        side: "top"
      });
    }

    $(".js_aside-tooltip").tooltipster({
      position: "bottom",
      animation: "grow"
    });
  }

  $(function () {
    // Active tooltipster
    tooltipInit();
  });
})(window.jQuery, window, document); //   jQuery.validator.addMethod('phone_mask', function (value, element) {
//     return this.optional(element) || value.length === parseInt($(element).attr('data-minlength'));
//   }, 'Please provide a valid phone');
//   jQuery.validator.addMethod('emailCustom', function (value, element) {
//     return this.optional(element) || /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value);
//   }, 'Please enter a valid email address');
//   jQuery.validator.addMethod('fullName', function (value, element) {
//     return this.optional(element) || /^(([a-zA-ZÀ-ÿ`']{0,}([.]{1})?[ |.\s|`|'|-][a-zA-ZÀ-ÿ]{1,}){1,})([.]?|[']?|[`]?)[ ]?$/.test(value);
//   }, 'Please provide a valid full name');
//   function validationRegistrationForm(form) {
//     form.validate({
//       errorElement: 'label',
//       errorClass: 'error',
//       focusInvalid: false,
//       errorPlacement: function (error, element) {
//         $(element).closest('.form-control').append(error);
//       },
//       highlight: function (element, errorClass, validClass) {
//         let fieldWrap = $(element).closest('.form-control');
//         fieldWrap.addClass('has-error');
//         $(element).addClass('error');
//       },
//       unhighlight: function (element, errorClass, validClass) {
//         $(element).closest('.form-control').removeClass('has-error');
//         $(element).removeClass('error');
//       },
//       rules: {
//         registration_name: {
//           required: true,
//           fullName: true,
//         },
//         registration_login: {
//           required: true,
//           emailCustom: true,
//         },
//         registration_password: {
//           required: true,
//           minlength: 6,
//           maxlength: 20
//         },
//         registration_password_repeat: {
//           equalTo: registration_password
//         },
//         registration_code: {
//           required: false
//         }
//       },
//       messages: {
//         registration_password_repeat: {
//           equalTo: "123"
//         },
//       }
//     });
//   }
//   function validationEnterForm(form) {
//     form.validate({
//       errorElement: 'label',
//       errorClass: 'error',
//       focusInvalid: false,
//       errorPlacement: function (error, element) {
//         $(element).closest('.form-control').append(error);
//       },
//       highlight: function (element, errorClass, validClass) {
//         let fieldWrap = $(element).closest('.form-control');
//         fieldWrap.addClass('has-error');
//         $(element).addClass('error');
//       },
//       unhighlight: function (element, errorClass, validClass) {
//         $(element).closest('.form-control').removeClass('has-error');
//         $(element).removeClass('error');
//       },
//       rules: {
//         enter_login: {
//           required: true,
//           emailCustom: true,
//         },
//         enter_password: {
//           required: true,
//           minlength: 6,
//           maxlength: 20
//         },
//       }
//     });
//   }
//   function submitOnEnter() {
//     $(document).keypress(function (e) {
//       if (e.which === 13) {
//         var activeForm = $('input:focus').closest('form');
//         activeForm.find('button').trigger('click');
//         return false;
//       }
//     });
// }
//   $(() => {
//     submitOnEnter();
//   });
// (function ($, window, document) {
//   function registrationForm() {
//     $(".js_registration-btn").on("click", function (e) {
//       e.preventDefault();
//       alert(1);
//       let $form = $(this).closest("form");
//       let $form_btn = $(this);
//       validationRegistrationForm($form);
//       let isValid = $form.valid();
//       if (!isValid) {
//         return;
//       }
//       $form_btn.addClass("btn--loading").attr("disabled", true);
//       data = {};
//       $.ajax({
//         headers: {
//           "Content-Type": "application/json",
//           "Api-Key": "123",
//         },
//         url: "",
//         type: "POST",
//         dataType: "json",
//         data: JSON.stringify(collectionPostalCodes),
//       })
//         .done(function (res) {
//           alert(success);
//           $form_btn.removeClass("btn--loading").attr("disabled", true);
//         })
//         .fail(function (res, status) {
//           alert(fail);
//           $form_btn.removeClass("btn--loading").attr("disabled", true);
//         });
//     });
//   }
//   $(() => {
//     registrationForm();
//   });
// })(window.jQuery, window, document);
// (function ($, window, document) {
//   function enterForm() {
//     $(".js_enter-btn").on("click", function (e) {
//       e.preventDefault();
//       alert(2);
//       let $form = $(this).closest("form");
//       let $form_btn = $(this);
//       validationRegistrationForm($form);
//       let isValid = $form.valid();
//       if (!isValid) {
//         return;
//       }
//       $form_btn.addClass("btn--loading").attr("disabled", true);
//       data = {};
//       $.ajax({
//         headers: {
//           "Content-Type": "application/json",
//           "Api-Key": "123",
//         },
//         url: "",
//         type: "POST",
//         dataType: "json",
//         data: JSON.stringify(collectionPostalCodes),
//       })
//         .done(function (res) {
//           alert(success);
//           $form_btn.removeClass("btn--loading").attr("disabled", true);
//         })
//         .fail(function (res, status) {
//           alert(fail);
//           $form_btn.removeClass("btn--loading").attr("disabled", true);
//         });
//     });
//   }
//   $(() => {
//     enterForm();
//   });
// })(window.jQuery, window, document);


var $reviewSlider_counter = 0,
    $reviewSlider = $(".js_reviews-slider");

function reviewsSlider() {
  if ($reviewSlider_counter < 1) {
    $reviewSlider.slick({
      lazyLoad: "progressive",
      dots: false,
      arrows: true,
      infinite: true,
      speed: 400,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [{
        breakpoint: 960,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }

  $reviewSlider_counter++;
}

(function ($, window, document) {
  var nav = {
    nav_items: $(".js_nav-item"),
    nav_main: "js_nav-main",
    nav_about: "js_nav-about",
    nav_services: "js_nav-services",
    nav_reviews: "js_nav-reviews",
    nav_blog: "js_nav-blog"
  };
  var pages = {
    pages_page: ".js_page",
    pages_main: ".js_main",
    pages_about: ".js_about",
    pages_services: ".js_services",
    pages_reviews: ".js_reviews",
    pages_blog: ".js_blog"
  };
  var nav_items = nav.nav_items,
      nav_main = nav.nav_main,
      nav_about = nav.nav_about,
      nav_services = nav.nav_services,
      nav_reviews = nav.nav_reviews,
      nav_blog = nav.nav_blog;
  var pages_page = pages.pages_page,
      pages_main = pages.pages_main,
      pages_about = pages.pages_about,
      pages_services = pages.pages_services,
      pages_reviews = pages.pages_reviews,
      pages_blog = pages.pages_blog;

  function logoClick() {
    $(".js_header-logo").click(function () {
      // if !== main page - redirect
      if (location.pathname !== "/") {
        $(location).attr("href", "./");
      }

      $(pages_page).addClass("js_hidden");
      nav_items.removeClass("js_active");
      $("".concat(pages_page).concat(pages_main)).removeClass("js_hidden");
      $(".".concat(nav_main)).addClass("js_active");
    });
  }

  function mainNav() {
    nav_items.click(function () {
      var $this = $(this);

      if ($this.hasClass("js_not-nav-item")) {
        return;
      }

      $(pages_page).addClass("js_hidden");
      nav_items.removeClass("js_active");

      if ($this.hasClass("".concat(nav_main))) {
        $("".concat(pages_page).concat(pages_main)).removeClass("js_hidden");
        $this.addClass("js_active");
        return;
      }

      if ($this.hasClass("".concat(nav_about))) {
        $("".concat(pages_page).concat(pages_about)).removeClass("js_hidden");
        $this.addClass("js_active");
        return;
      }

      if ($this.hasClass("".concat(nav_services))) {
        $("".concat(pages_page).concat(pages_services)).removeClass("js_hidden");
        $this.addClass("js_active");
        return;
      }

      if ($this.hasClass("".concat(nav_reviews))) {
        $("".concat(pages_page).concat(pages_reviews)).removeClass("js_hidden");
        $this.addClass("js_active");
        reviewsSlider();
        return;
      }

      if ($this.hasClass("".concat(nav_blog))) {
        $("".concat(pages_page).concat(pages_blog)).removeClass("js_hidden");
        $this.addClass("js_active");
        return;
      }
    });
  }

  function navBlogPage() {
    $(".js_nav-item").click(function () {
      var $this = $(this);

      if ($this.hasClass(nav_main)) {
        $(location).attr("href", "./index.html");
      }

      if ($this.hasClass(nav_about)) {
        $(location).attr("href", "./?menu=about");
      }

      if ($this.hasClass(nav_services)) {
        $(location).attr("href", "./?menu=services");
      }

      if ($this.hasClass(nav_reviews)) {
        $(location).attr("href", "./?menu=reviews");
      }

      if ($this.hasClass(nav_blog)) {
        $(location).attr("href", "./?menu=blog");
      }
    });
  }

  function navUtmParams() {
    $(pages_page).addClass("js_hidden");
    nav_items.removeClass("js_active");

    if (location.search === "" || location.search.length > 20) {
      $(pages_main).removeClass("js_hidden");
      $(".".concat(nav_main)).addClass("js_active");
      return;
    }

    if (location.search === "?menu=about") {
      $(pages_about).removeClass("js_hidden");
      $(".".concat(nav_about)).addClass("js_active");
      return;
    }

    if (location.search === "?menu=services") {
      $(pages_services).removeClass("js_hidden");
      $(".".concat(nav_services)).addClass("js_active");
      return;
    }

    if (location.search === "?menu=reviews") {
      $(pages_reviews).removeClass("js_hidden");
      $(".".concat(nav_reviews)).addClass("js_active");
      return;
    }

    if (location.search === "?menu=blog") {
      $(pages_blog).removeClass("js_hidden");
      $(".".concat(nav_blog)).addClass("js_active");
      return;
    }
  }

  $(function () {
    mainNav();
    logoClick();

    if ($(".js_blog-page").length) {
      navBlogPage();
    } else {
      navUtmParams();
    }
  });
})(window.jQuery, window, document);
/*!
  * Stickyfill – `position: sticky` polyfill
  * v. 2.1.0 | https://github.com/wilddeer/stickyfill
  * MIT License
  */


!function (a, b) {
  "use strict";

  function c(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
  }

  function d(a, b) {
    for (var c in b) {
      b.hasOwnProperty(c) && (a[c] = b[c]);
    }
  }

  function e(a) {
    return parseFloat(a) || 0;
  }

  function f(a) {
    for (var b = 0; a;) {
      b += a.offsetTop, a = a.offsetParent;
    }

    return b;
  }

  function g() {
    function c() {
      a.pageXOffset != m.left ? (m.top = a.pageYOffset, m.left = a.pageXOffset, p.refreshAll()) : a.pageYOffset != m.top && (m.top = a.pageYOffset, m.left = a.pageXOffset, n.forEach(function (a) {
        return a._recalcPosition();
      }));
    }

    function d() {
      f = setInterval(function () {
        n.forEach(function (a) {
          return a._fastCheck();
        });
      }, 500);
    }

    function e() {
      clearInterval(f);
    }

    if (!k) {
      k = !0, c(), a.addEventListener("scroll", c), a.addEventListener("resize", p.refreshAll), a.addEventListener("orientationchange", p.refreshAll);
      var f = void 0,
          g = void 0,
          h = void 0;
      "hidden" in b ? (g = "hidden", h = "visibilitychange") : "webkitHidden" in b && (g = "webkitHidden", h = "webkitvisibilitychange"), h ? (b[g] || d(), b.addEventListener(h, function () {
        b[g] ? e() : d();
      })) : d();
    }
  }

  var h = function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
      }
    }

    return function (b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b;
    };
  }(),
      i = !1,
      j = "undefined" != typeof a;

  j && a.getComputedStyle ? !function () {
    var a = b.createElement("div");
    ["", "-webkit-", "-moz-", "-ms-"].some(function (b) {
      try {
        a.style.position = b + "sticky";
      } catch (a) {}

      return "" != a.style.position;
    }) && (i = !0);
  }() : i = !0;

  var k = !1,
      l = "undefined" != typeof ShadowRoot,
      m = {
    top: null,
    left: null
  },
      n = [],
      o = function () {
    function g(a) {
      if (c(this, g), !(a instanceof HTMLElement)) throw new Error("First argument must be HTMLElement");
      if (n.some(function (b) {
        return b._node === a;
      })) throw new Error("Stickyfill is already applied to this node");
      this._node = a, this._stickyMode = null, this._active = !1, n.push(this), this.refresh();
    }

    return h(g, [{
      key: "refresh",
      value: function value() {
        if (!i && !this._removed) {
          this._active && this._deactivate();
          var c = this._node,
              g = getComputedStyle(c),
              h = {
            position: g.position,
            top: g.top,
            display: g.display,
            marginTop: g.marginTop,
            marginBottom: g.marginBottom,
            marginLeft: g.marginLeft,
            marginRight: g.marginRight,
            cssFloat: g.cssFloat
          };

          if (!isNaN(parseFloat(h.top)) && "table-cell" != h.display && "none" != h.display) {
            this._active = !0;
            var j = c.style.position;
            "sticky" != g.position && "-webkit-sticky" != g.position || (c.style.position = "static");
            var k = c.parentNode,
                m = l && k instanceof ShadowRoot ? k.host : k,
                n = c.getBoundingClientRect(),
                o = m.getBoundingClientRect(),
                p = getComputedStyle(m);
            this._parent = {
              node: m,
              styles: {
                position: m.style.position
              },
              offsetHeight: m.offsetHeight
            }, this._offsetToWindow = {
              left: n.left,
              right: b.documentElement.clientWidth - n.right
            }, this._offsetToParent = {
              top: n.top - o.top - e(p.borderTopWidth),
              left: n.left - o.left - e(p.borderLeftWidth),
              right: -n.right + o.right - e(p.borderRightWidth)
            }, this._styles = {
              position: j,
              top: c.style.top,
              bottom: c.style.bottom,
              left: c.style.left,
              right: c.style.right,
              width: c.style.width,
              marginTop: c.style.marginTop,
              marginLeft: c.style.marginLeft,
              marginRight: c.style.marginRight
            };
            var q = e(h.top);
            this._limits = {
              start: n.top + a.pageYOffset - q,
              end: o.top + a.pageYOffset + m.offsetHeight - e(p.borderBottomWidth) - c.offsetHeight - q - e(h.marginBottom)
            };
            var r = p.position;
            "absolute" != r && "relative" != r && (m.style.position = "relative"), this._recalcPosition();
            var s = this._clone = {};
            s.node = b.createElement("div"), d(s.node.style, {
              width: n.right - n.left + "px",
              height: n.bottom - n.top + "px",
              marginTop: h.marginTop,
              marginBottom: h.marginBottom,
              marginLeft: h.marginLeft,
              marginRight: h.marginRight,
              cssFloat: h.cssFloat,
              padding: 0,
              border: 0,
              borderSpacing: 0,
              fontSize: "1em",
              position: "static"
            }), k.insertBefore(s.node, c), s.docOffsetTop = f(s.node);
          }
        }
      }
    }, {
      key: "_recalcPosition",
      value: function value() {
        if (this._active && !this._removed) {
          var a = m.top <= this._limits.start ? "start" : m.top >= this._limits.end ? "end" : "middle";

          if (this._stickyMode != a) {
            switch (a) {
              case "start":
                d(this._node.style, {
                  position: "absolute",
                  left: this._offsetToParent.left + "px",
                  right: this._offsetToParent.right + "px",
                  top: this._offsetToParent.top + "px",
                  bottom: "auto",
                  width: "auto",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0
                });
                break;

              case "middle":
                d(this._node.style, {
                  position: "fixed",
                  left: this._offsetToWindow.left + "px",
                  right: this._offsetToWindow.right + "px",
                  top: this._styles.top,
                  bottom: "auto",
                  width: "auto",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0
                });
                break;

              case "end":
                d(this._node.style, {
                  position: "absolute",
                  left: this._offsetToParent.left + "px",
                  right: this._offsetToParent.right + "px",
                  top: "auto",
                  bottom: 0,
                  width: "auto",
                  marginLeft: 0,
                  marginRight: 0
                });
            }

            this._stickyMode = a;
          }
        }
      }
    }, {
      key: "_fastCheck",
      value: function value() {
        this._active && !this._removed && (Math.abs(f(this._clone.node) - this._clone.docOffsetTop) > 1 || Math.abs(this._parent.node.offsetHeight - this._parent.offsetHeight) > 1) && this.refresh();
      }
    }, {
      key: "_deactivate",
      value: function value() {
        var a = this;
        this._active && !this._removed && (this._clone.node.parentNode.removeChild(this._clone.node), delete this._clone, d(this._node.style, this._styles), delete this._styles, n.some(function (b) {
          return b !== a && b._parent && b._parent.node === a._parent.node;
        }) || d(this._parent.node.style, this._parent.styles), delete this._parent, this._stickyMode = null, this._active = !1, delete this._offsetToWindow, delete this._offsetToParent, delete this._limits);
      }
    }, {
      key: "remove",
      value: function value() {
        var a = this;
        this._deactivate(), n.some(function (b, c) {
          if (b._node === a._node) return n.splice(c, 1), !0;
        }), this._removed = !0;
      }
    }]), g;
  }(),
      p = {
    stickies: n,
    Sticky: o,
    forceSticky: function forceSticky() {
      i = !1, g(), this.refreshAll();
    },
    addOne: function addOne(a) {
      if (!(a instanceof HTMLElement)) {
        if (!a.length || !a[0]) return;
        a = a[0];
      }

      for (var b = 0; b < n.length; b++) {
        if (n[b]._node === a) return n[b];
      }

      return new o(a);
    },
    add: function add(a) {
      if (a instanceof HTMLElement && (a = [a]), a.length) {
        for (var b = [], c = function c(_c) {
          var d = a[_c];
          return d instanceof HTMLElement ? n.some(function (a) {
            if (a._node === d) return b.push(a), !0;
          }) ? "continue" : void b.push(new o(d)) : (b.push(void 0), "continue");
        }, d = 0; d < a.length; d++) {
          c(d);
        }

        return b;
      }
    },
    refreshAll: function refreshAll() {
      n.forEach(function (a) {
        return a.refresh();
      });
    },
    removeOne: function removeOne(a) {
      if (!(a instanceof HTMLElement)) {
        if (!a.length || !a[0]) return;
        a = a[0];
      }

      n.some(function (b) {
        if (b._node === a) return b.remove(), !0;
      });
    },
    remove: function remove(a) {
      if (a instanceof HTMLElement && (a = [a]), a.length) for (var b = function b(_b) {
        var c = a[_b];
        n.some(function (a) {
          if (a._node === c) return a.remove(), !0;
        });
      }, c = 0; c < a.length; c++) {
        b(c);
      }
    },
    removeAll: function removeAll() {
      for (; n.length;) {
        n[0].remove();
      }
    }
  };

  i || g(), "undefined" != typeof module && module.exports ? module.exports = p : j && (a.Stickyfill = p);
}(window, document); // (function ($, window, document) {
//   function asideBannerPosition() {
//     if ($(window).width() > 960) {
//       const asideCls = {
//         aside: $(".js_aside"),
//       };
//       let { aside } = asideCls;
//       let asideTop = aside.offset().top;
//       let scrollTop = $(window).scrollTop();
//       aside.css({
//         transform: "translateY(" + scrollTop + "px)",
//       });
//       // if (scrollTop > asideTop) {
//       //   console.log(1);
//       // }
//     }
//   }
//   $(() => {
//     asideBannerPosition();
//     $(window).scroll(function () {
//       asideBannerPosition();
//     });
//   });
// })(window.jQuery, window, document);

(function ($, window, document) {
  function forecasts() {
    var data_role = {
      dota: "forecasts-dota",
      csgo: "forecasts-csgo"
    };
    var forecasts = {
      nav_item: ".js_forecasts-nav--item",
      content_item: ".js_forecasts-content--wrapper"
    };
    var nav_item = forecasts.nav_item,
        content_item = forecasts.content_item;
    $(nav_item).click(function () {
      var $this = $(this);
      $(nav_item).removeClass("js_active");
      $this.addClass("js_active");

      if ($this.attr("data-role") === data_role.dota) {
        $("".concat(content_item, "[data-role=").concat(data_role.dota, "]")).removeClass("js_hidden");
        $("".concat(content_item, "[data-role=").concat(data_role.csgo, "]")).addClass("js_hidden");
      } else {
        $("".concat(content_item, "[data-role=").concat(data_role.dota, "]")).addClass("js_hidden");
        $("".concat(content_item, "[data-role=").concat(data_role.csgo, "]")).removeClass("js_hidden");
      }
    });
  }

  $(function () {
    forecasts();
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    $("head").prepend('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tooltipster/3.3.0/css/tooltipster.min.css" />', '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />');
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    //show content after loaded page
    $(".js_loader-init").removeClass("js_loader-init");
    $("body").css("overflow", "auto"); // Add this year

    $(".js_data").html(new Date().getFullYear()); // Activate sticky polyfill

    if ($(window).width() > 960) {
      var $sticky_element = $(".js_aside-content");
      Stickyfill.add($sticky_element);
    }
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
