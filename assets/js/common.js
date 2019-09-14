(function($) {
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    updateURL: false
  });

  var isEmail = function(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  var classes = ["loading", "failure", "success", "already-exists"];
  function switchTo(klass) {
    $("." + klass).addClass("shown");
    for (var i = 0; i < classes.length; i++) {
      var cClass = classes[i];
      if (cClass != klass) {
        $("." + cClass).removeClass("shown");
      }
    }
  }

  $("form.the-subscribe-form").on("submit", function(event) {
    event.preventDefault();

    var $subform = $(this);
    var emailInput = $subform.find("input#subscribe");
    var email = emailInput.val();
    if (isEmail(email)) {
      switchTo("loading");

      var docRef = db.collection("subscribers").doc(email);
      docRef
        .get()
        .then(function(docSnapshot) {
          if (docSnapshot.exists) {
            switchTo("already-exists");
            return;
          }
          docRef.set({
            email: emailInput.val(),
            timestamp: new Date().getTime()
          });
          $subform[0].reset();
          switchTo("success");
        })
        .catch(function(err) {
          $subform[0].reset();
          switchTo("failure");
        });
    } else {
      emailInput.css("color", "#f00");
      return false;
    }
  });
})(jQuery);
