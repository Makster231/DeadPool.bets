//   jQuery.validator.addMethod('phone_mask', function (value, element) {
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
