var sr = ScrollReveal({
    origin: "bottom",
    distance: "64px",
    duration: 800,
    delay: 0,
    scale: 1
});

sr.reveal('.projects-list a');
sr.reveal('.posts-list a');

var header = anime({
    targets: '.header .overlay-div',
    translateY: 15,
    loop: true
});

anime.speed = 0.1;


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
