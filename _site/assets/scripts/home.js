$(document).ready(function () {


    // set content margin bottom 
    $('.content').css('margin-bottom', $('.footer').height() + 'px');
    $(window).on('resize', function () {
        // set content margin bottom 
        $('.content').css('margin-bottom', $('.footer').height() + 'px');
        $('.content').scrollTop(0, 0);

    });
});

window.onload = function () {
    console.log("called top");


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

    $(window).scrollTop(0, 0);

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

$(window).scrollTop(0, 0);
