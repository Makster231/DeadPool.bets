// (function ($, window, document) {
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
