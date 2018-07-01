$(window).scroll(function() {

    if ( $(window).scrollTop() > $("nav").height() ) {
        console.log("shrinking");
        $(".navbar-text").fadeOut(200, function() {
            $(this).addClass("hide");
        });
        window.setTimeout( function() {$("nav").removeClass("navbar-full").addClass("navbar-shrink")}, 1000 );
    } // setTimeout needs to be handed a function handle to execute

    else {
        console.log("growing");
        $("nav").removeClass("navbar-shrink").addClass("navbar-full");
        
        window.setTimeout( function() {$(".navbar-text").fadeIn(200, function() {
            $(this).removeClass("hide");
        })}, 1000);
    }

});