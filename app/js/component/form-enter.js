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
