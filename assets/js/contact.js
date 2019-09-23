(function($) {
  var $name = $("#name");
  var $email = $("#email");
  var $subject = $("#subject");
  var $message = $("#message");

  $contactForm = $("#contact-form");
  var alertInterval;
  $contactForm.validate({
    submitHandler: function(form) {
      var $form = $(form);
      $.ajax({
        url: "https://us-central1-stemlocalhackday.cloudfunctions.net/sendMail",
        type: "get",
        data: $form.serialize(),
        beforeSubmit: function(argument) {
          //ajax loading icon
        },
        success: function(ajaxResponse) {
          try {
            if (ajaxResponse != "Sent") {
              throw "error";
            } else {
              $(".csi-form-msg")
                .removeClass("alert-danger")
                .addClass("alert-success")
                .text("Message sent successfully.");
              $("#csi-form-modal").modal("show");
              alertInterval = setInterval(function() {
                $("#csi-form-modal").modal("hide");
              }, 5000);
              $form[0].reset();
            }
          } catch (e) {
            console.log(e);
            $(".csi-form-msg")
              .removeClass("alert-success")
              .addClass("alert-danger")
              .text(
                "Sorry, an error has occurred. Please reload the page and try again."
              );
            $("#csi-form-modal").modal("show");
            alertInterval = setInterval(function() {
              $("#csi-form-modal").modal("hide");
            }, 5000);
          }
        },
        error: function(argument) {
          $(".csi-form-msg")
            .removeClass("alert-success")
            .addClass("alert-danger")
            .text(
              "Sorry, we can not communicate with you. Please make sure you are connected with internet."
            );
          $("#csi-form-modal").modal("show");
          alertInterval = setInterval(function() {
            $("#csi-form-modal").modal("hide");
          }, 5000);
        },
        complete: function() {}
      });

      return false;
    },
    errorElement: "p",
    errorClass: "help-block",
    rules: {
      cname: {
        required: true,
        minlength: 3
      },

      cemail: {
        required: true,
        email: true
      },

      csubject: {
        required: true,
        minlength: 5
      },

      cmessage: {
        required: true,
        minlength: 5
      }
    }
  });
})(jQuery);
