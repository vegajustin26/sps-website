$(function() {
    $('span').remove();
    $('.subscribe-image').remove();
    $('.today-button').addClass('btn btn-xl btn-primary');
    console.log(document.head.querySelector("meta").getAttribute('scrape-date'));
    window.isReady = true;
});
