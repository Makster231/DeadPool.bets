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
