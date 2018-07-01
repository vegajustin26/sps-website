$(window).scroll(function() {

    var nav = $("nav"); // Cache as variable

    if ( $(window).scrollTop() > 0 && nav.attr("nav-type") == "expanded" ) {
        // $(".navbar-text").fadeOut(500);
        $(".navbar-text").fadeTo("slow", 0, function() {
            $(this).addClass("hide");
        });
        nav.attr("nav-type", "mini");
    }

    else if ( $(window).scrollTop() == 0 && nav.attr("nav-type") == "mini" ) {
        nav.attr("nav-type", "expanded");
        // $(".navbar-text").fadeIn(500);
        $(".navbar-text").removeClass("hide").fadeTo("slow", 1);
    }
})