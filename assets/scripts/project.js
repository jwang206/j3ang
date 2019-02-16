(function ($) {

    $('.content').css({
        top: $('.header').height() + "px",
        "padding-top": "4rem"
    });

    $('.github-corner').css('z-index', '1000');




    $(function () {
        $(window).on('load resize scroll', function () {
            var cMargin = parseInt($('.container').css('margin-right'));
            var cPadding = parseInt($('.container').css('padding-right'));
            var cSum = cMargin + cPadding;

            sticky();

            $('.is_stuck').css({
                width: $('.container').width() / 2 + "px" + "!important;",
                right: cSum + "px",
                'padding-left': $('article').css('padding-left'),
            })

        });

        function sticky() {
            var w = $(window).width();

            if (w < 750) {
                $('.project article').trigger('sticky_kit:detach');
            } else {
                $('.project article').stick_in_parent({
                    offset_top: $('.header').outerHeight(),
                });
            }
        }
    });

    var sr = ScrollReveal({
        origin: "bottom",
        distance: "64px",
        duration: 900,
        delay: 0.3,
        scale: 1
    });

    sr.reveal('.project li');

}(jQuery));
