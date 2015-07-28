

$(document).on('scroll touchmove mousewheel', function (e) {
    $("body").addClass("reveal");
    $(document).off('scroll touchmove mousewheel')

    e.preventDefault();
    e.stopPropagation();
    return false;

});


