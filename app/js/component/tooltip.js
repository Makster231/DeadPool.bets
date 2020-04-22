(function ($, window, document) {
  function tooltipInit() {
    if ($(window).width() < 640) {
      $(".js_services-tooltip").tooltipster({
        animation: "grow",
      });
    } else {
      $(".js_services-tooltip").tooltipster({
        animation: "grow",
        position: "left",
        side: "top",
      });
    }

    $(".js_aside-tooltip").tooltipster({
      position: "bottom",
      animation: "grow",
    });
  }
  $(() => {
    // Active tooltipster
    tooltipInit();
  });
})(window.jQuery, window, document);
