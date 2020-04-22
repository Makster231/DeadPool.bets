(function ($, window, document) {
  const nav = {
    nav_items: $(".js_nav-item"),
    nav_main: "js_nav-main",
    nav_about: "js_nav-about",
    nav_services: "js_nav-services",
    nav_reviews: "js_nav-reviews",
    nav_blog: "js_nav-blog",
  };

  const pages = {
    pages_page: ".js_page",
    pages_main: ".js_main",
    pages_about: ".js_about",
    pages_services: ".js_services",
    pages_reviews: ".js_reviews",
    pages_blog: ".js_blog",
  };

  let {
    nav_items,
    nav_main,
    nav_about,
    nav_services,
    nav_reviews,
    nav_blog,
  } = nav;

  let {
    pages_page,
    pages_main,
    pages_about,
    pages_services,
    pages_reviews,
    pages_blog,
  } = pages;

  function logoClick() {
    $(".js_header-logo").click(function () {
      // if !== main page - redirect
      if (location.pathname !== "/") {
        $(location).attr("href", "./");
      }

      $(pages_page).addClass("js_hidden");
      nav_items.removeClass("js_active");

      $(`${pages_page}${pages_main}`).removeClass("js_hidden");
      $(`.${nav_main}`).addClass("js_active");
    });
  }

  function mainNav() {
    nav_items.click(function () {
      let $this = $(this);
      if ($this.hasClass("js_not-nav-item")) {
        return;
      }

      $(pages_page).addClass("js_hidden");
      nav_items.removeClass("js_active");

      if ($this.hasClass(`${nav_main}`)) {
        $(`${pages_page}${pages_main}`).removeClass("js_hidden");
        $this.addClass("js_active");
        return;
      }

      if ($this.hasClass(`${nav_about}`)) {
        $(`${pages_page}${pages_about}`).removeClass("js_hidden");
        $this.addClass("js_active");
        return;
      }

      if ($this.hasClass(`${nav_services}`)) {
        $(`${pages_page}${pages_services}`).removeClass("js_hidden");
        $this.addClass("js_active");
        return;
      }
      if ($this.hasClass(`${nav_reviews}`)) {
        $(`${pages_page}${pages_reviews}`).removeClass("js_hidden");
        $this.addClass("js_active");
        reviewsSlider();
        return;
      }
      if ($this.hasClass(`${nav_blog}`)) {
        $(`${pages_page}${pages_blog}`).removeClass("js_hidden");
        $this.addClass("js_active");
        return;
      }
    });
  }

  function navBlogPage() {
    $(".js_nav-item").click(function () {
      let $this = $(this);

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
      $(`.${nav_main}`).addClass("js_active");
      return;
    }
    if (location.search === "?menu=about") {
      $(pages_about).removeClass("js_hidden");
      $(`.${nav_about}`).addClass("js_active");
      return;
    }
    if (location.search === "?menu=services") {
      $(pages_services).removeClass("js_hidden");
      $(`.${nav_services}`).addClass("js_active");
      return;
    }
    if (location.search === "?menu=reviews") {
      $(pages_reviews).removeClass("js_hidden");
      $(`.${nav_reviews}`).addClass("js_active");
      return;
    }
    if (location.search === "?menu=blog") {
      $(pages_blog).removeClass("js_hidden");
      $(`.${nav_blog}`).addClass("js_active");
      return;
    }
  }

  $(() => {
    mainNav();
    logoClick();
    if ($(".js_blog-page").length) {
      navBlogPage();
    } else {
      navUtmParams();
    }
  });
})(window.jQuery, window, document);
