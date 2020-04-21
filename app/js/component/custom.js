(function ($, window, document) {
  $(() => {
    //show content after loaded page
    $(".js_loader-init").removeClass("js_loader-init");
    $("body").css("overflow", "auto");

    // Add this year
    $(".js_data").html(new Date().getFullYear());
    // Activate sticky polyfill
    if ($(window).width() > 960) {
      let $sticky_element = $(".js_aside-content");
      Stickyfill.add($sticky_element);
    }
  });
})(window.jQuery, window, document);
