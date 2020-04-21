let $reviewSlider_counter = 0,
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
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  $reviewSlider_counter++;
}
