
window.currentScrollPosition = 0;
$(window).on('scroll touchmove ', function (e) {
    reactToScroll(e);  
});




reactToScroll = function (e) {
    delta = window.currentScrollPosition - $(this).scrollTop();
    window.currentScrollPosition = $(this).scrollTop();
    if (delta < 0 && !$("body").hasClass("reveal")) {
        $("body").addClass("reveal");
        window.scrollTo(0, 0);
        e.preventDefault();
        window.currentScrollPosition = delta
    } else if (delta > 0 && $(this).scrollTop() == 0 && $("body").hasClass("reveal")) {
        $("body").removeClass("reveal");
        
    }

    
}

