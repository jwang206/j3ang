var sr = ScrollReveal({
	origin   : "bottom",
	distance : "64px",
	duration : 800,
	delay    : 0,
	scale    : 1
});

sr.reveal('.projects-list a');
sr.reveal('.posts-list a');

var header = anime({
  targets: '.header .overlay-div',
  translateY: 15,
	loop: true
});

anime.speed = 0.1;
