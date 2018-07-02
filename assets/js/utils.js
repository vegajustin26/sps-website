$(window).scroll(function() {

    var nav = $("nav"); // Cache as variable

    if ( $(window).scrollTop() > 0 && nav.attr("nav-type") == "expanded" ) {
        $(".navbar-text").fadeOut(500);
        nav.attr("nav-type", "mini");
    }

    else if ( $(window).scrollTop() == 0 && nav.attr("nav-type") == "mini" ) {
        nav.attr("nav-type", "expanded");
        $(".navbar-text").fadeIn(500);
    }
})