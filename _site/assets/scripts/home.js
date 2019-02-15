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

window.onload = function () {

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
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


    $(document).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('onTop');
        } else {
            $('.header').removeClass('onTop');
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


// var sr = ScrollReveal({
//     origin: "bottom",
//     distance: "64px",
//     duration: 800,
//     delay: 0,
//     scale: 0
// });

// sr.reveal('.projects-list a');
// sr.reveal('.posts-list a');

// var header = anime({
//     targets: '.header .overlay-div',
//     translateY: 15,
//     loop: true
// });

// anime.speed = 0.5;

// var handlers = {
//     scrollBottom: function () {
//         window.scrollTo(0, document.body.scrollHeight);
//     }
// }
