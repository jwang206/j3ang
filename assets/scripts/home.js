// $(document).ready(function () {


//     // set content margin bottom 
//     $('.content').css('margin-bottom', $('.footer').height() + 'px');
//     $(window).on('resize', function () {
//         // set content margin bottom 
//         $('.content').css('margin-bottom', $('.footer').height() + 'px');
//         $('.content').scrollTop(0, 0);

//     });
// });

// $(window).scrollTop(0, 0);
$(".img-wrapper").css("height", $('.img-wrapper').width());

$(window).on('resize', function () {
    // set project images height equl to its width
    $(".img-wrapper").css("height", $('.img-wrapper').width());
});


window.onload = function () {

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
        percentPosition: true,
        layoutMode: 'fitRows'
    });

    // filter items on button click
    $('.filter-button-group').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    $('.button-group a.button').on('click', function () {
        $('.button-group a.button').removeClass('active');
        $(this).addClass('active');
    });

    $('.github-corner').css('visibility', 'visible');

    // sticky tab with animation
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
            $('.navbar').stick_in_parent({
                offset_top: $('.header').height()
            });
        } else {
            $('.content').css({
                top: $('.header').height() + "px"
            });
        }
    });

    $('#aname').keyup(function () {
        $('.aname').addClass('typing');
        if ($(this).val().length == 0) {
            $('.aname').removeClass('typing');
        }
    });

    $('#email').keyup(function () {
        $('.email').addClass('typing');
        if ($(this).val().length == 0) {
            $('.email').removeClass('typing');
        }
    });

    $('#message').keyup(function () {
        $('.message').addClass('typing');
        if ($(this).val().length == 0) {
            $('.message').removeClass('typing');
        }
    });
};
