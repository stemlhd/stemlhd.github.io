(function($) {

    "use strict";


    // Preloder
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(250).fadeOut('slow');
        $('body').delay(250).css({'overflow':'visible'});
    });


    // Wow Animation
    new WOW().init();

    // Navbar fixed on scroll
    $(window).on('scroll', function() {
         var navHeight = $( window ).height();
           if ($(window).scrollTop() > navHeight) {
             $('nav').addClass('fixed');
           }
           else {
             $('nav').removeClass('fixed');
           }
        });



    // CounterUp
    $('.count').counterUp({
        delay: 10, // the delay time in ms
        time: 2000 // the speed time in ms
    });


    // 3d plate-moving
    $('#plate-moving, #plate-moving-two').plate({
      inverse: false,
      perspective: 1000,
      maxRotation: 8,
      animationDuration: 200
    });

    // Parallax 
    $('.parallax').jarallax({
        // parallax effect speed. 0.0 - 1.0
        speed: 0.5
    });

    // Scroll to top
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp',      // Element ID
            scrollDistance: 300,         // Distance from top/bottom before showing element (px)
            scrollFrom: 'top',           // 'top' or 'bottom'
            scrollSpeed: 300,            // Speed back to top (ms)
            easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
            animation: 'fade',           // Fade, slide, none
            animationSpeed: 200,         // Animation speed (ms)
            scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
            scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
            scrollText: 'Scroll to top', // Text for element, can contain HTML
            scrollTitle: false,          // Set a custom <a> title if required.
            scrollImg: true,            // Set true to use image
            activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647           // Z-Index for the overlay
        });
    });



    // discount carousel
    if($('.organizer-carousel').length){
        $('.organizer-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            margin: 50,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:false,
            autoplaySpeed:1000,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsive: {
                0: {
                    items:1,
                },
                600:{
                    items:2,
                },
                1000: {
                    items:3,
                },
            }
        })
    }


    // owl-carousel for client
    if($('.client-carousel').length){
        $('.client-carousel').owlCarousel({
            loop:true,
            nav:false,
            dots:false,
            margin: 50,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:false,
            autoplaySpeed:1000,
            responsive: {
                0: {
                    margin: 10,
                    items: 2
                },
                480: {
                    margin: 10,
                    items: 3
                },
                600:{
                    margin: 20,
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    }

    

    // ----------- Ajax Contact script -----------//
    $(function() {
        // Get the form.
        var form = $('#ajax-contact');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function(event) {
            // Stop the browser from submitting the form.
            event.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function(response) {
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#name').val('');
                    $('#subject').val('');
                    $('#email').val('');
                    $('#message').val('');
                })

                .fail(function(data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });




})(window.jQuery);