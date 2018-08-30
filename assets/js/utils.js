function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

$(window).scroll(function() {

    var nav = $("nav");
    var navText = $(".navbar-text"); 
    var navTextContainer = $(".navbar-text-container");
    var scroll = $(window).scrollTop();
    var maxHeight = convertRemToPixels(1.75);

    if (scroll <= maxHeight) {
        navTextContainer.height(maxHeight - scroll); // sets the height of the container
    } else if (navTextContainer.height() != 0) {
        navTextContainer.height(0);
    }
    
    if (scroll == 0) {
        navText.fadeIn(200);
    } else if (navText.is(":visible")) {
        navText.fadeOut(200);
    }

})