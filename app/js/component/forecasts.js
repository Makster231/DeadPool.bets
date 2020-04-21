(function ($, window, document) {
  function forecasts() {
    const data_role = {
      dota: "forecasts-dota",
      csgo: "forecasts-csgo",
    };

    const forecasts = {
      nav_item: ".js_forecasts-nav--item",
      content_item: ".js_forecasts-content--wrapper",
    };

    let { nav_item, content_item } = forecasts;

    $(nav_item).click(function () {
      let $this = $(this);

      $(nav_item).removeClass("js_active");
      $this.addClass("js_active");

      if ($this.attr("data-role") === data_role.dota) {
        $(`${content_item}[data-role=${data_role.dota}]`).removeClass(
          "js_hidden"
        );
        $(`${content_item}[data-role=${data_role.csgo}]`).addClass("js_hidden");
      } else {
        $(`${content_item}[data-role=${data_role.dota}]`).addClass("js_hidden");
        $(`${content_item}[data-role=${data_role.csgo}]`).removeClass(
          "js_hidden"
        );
      }
    });
  }

  $(() => {
    forecasts();
  });
})(window.jQuery, window, document);
