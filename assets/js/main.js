(function($) {
  var isMobile = function() {
    return window.matchMedia("only screen and (max-width: 760px)").matches;
  };

  var $bgMobile = $("#bg-mobile");
  var $countdown = $("#countdown");
  $(window).on("scroll", function() {
    $bgMobile.css("bottom", "-" + $(this).scrollTop() + "px");
    if (isMobile()) {
      $countdown.css("bottom", "-" + $(this).scrollTop() + "px");
    } else {
      $countdown.css("bottom", "0px");
    }
  });

  var dataTime = $("#countdown").data("date"); // Date Format : Y/m/d

  $("#countdown").countdown(dataTime, function(event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<span class="days">%D <i> DAYS </i></span> ' +
          '<span class="hrs">%H <i> HRS </i></span> ' +
          '<span class="mins">%M <i> MINS </i></span> ' +
          (!isMobile() ? '<span class="secs">%S <i> SECS </i></span>' : "")
      )
    );
  });

  $("#typed-string").typed({
    strings: ["Learning", "Building", "Sharing"],
    // typing speed
    typeSpeed: 55,
    // time before typing starts
    startDelay: 0,
    // backspacing speed
    backSpeed: 0,
    // shuffle the strings
    shuffle: false,
    // time before backspacing
    backDelay: 1200,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // either html or text
    contentType: "html"
  });
})(jQuery);
