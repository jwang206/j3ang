(function ($) {

    $('.content').css({
        top: $('.header').height() + "px",
        "padding-top": "4rem"
    });

    $('.github-corner').css('z-index', '1000');



    function getScrollPercent() {
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    }

    $(window).on('resize scroll', function () {


            sticky();
            getScrollPercent();
            console.log(getScrollPercent());
            // $('.is_stuck').css({
            //     position: "fixed !important;",
            //     width: $('.container').width() / 2 + "px" + "!important;",
            //     right: cSum + "px",
            //     'padding-left': $('article').css('padding-left'),
            // })


            if ($('.project article').hasClass('is_stuck')) {
                var cMargin = parseInt($('.container').css('margin-right'));
                var cPadding = parseInt($('.container').css('padding-right'));
                var cSum = cMargin + cPadding;

                $('.is_stuck').css({
                    position: "fixed !important;",
                    width: $('.container').width() / 2 + "px" + "!important;",
                    right: cSum + "px",
                    'padding-left': $('article').css('padding-left')
                })
            }

            $('.project article').on('sticky_kit:bottom', function (e) {
                $(this).parent().css('position', 'static');
                $('article').css({
                    'visibility': 'hidden'
                });
            }).on('sticky_kit:unbottom', function (e) {
                $('article').css({
                    'visibility': 'visible'
                });
            })
        });

        function sticky() {
            var w = $(window).width();

            var offset = $('.header').outerHeight() + parseInt($('.content').css('padding-top'));

            if (w < 750) {
                $('.project article').trigger('sticky_kit:detach');
                $('.project article').css({
                    right: '0'
                })
            } else {
                $('.project article').stick_in_parent({
                    offset_top: offset,
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
