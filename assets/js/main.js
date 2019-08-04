(function($) {
  var dataTime = $("#countdown").data("date"); // Date Format : Y/m/d

  $("#countdown").countdown(dataTime, function(event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<span class="days">%D <i> DAYS </i></span> ' +
          '<span class="hrs">%H <i> HRS </i></span> ' +
          '<span class="mins">%M <i> MINS </i></span> ' +
          '<span class="secs">%S <i> SECS </i></span>'
      )
    );
  });

  $("#typed-string").typed({
    strings: ["Learning", "Building", "Hacking", "Sharing"],
    // typing speed
    typeSpeed: 55,
    // time before typing starts
    startDelay: 0,
    // backspacing speed
    backSpeed: 0,
    // shuffle the strings
    shuffle: false,
    // time before backspacing
    backDelay: 800,
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
