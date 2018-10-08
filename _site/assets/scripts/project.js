(function ($) {
	$(function () {
		$(window).on('load resize', function () {
			sticky();
		});

		function sticky() {
			var w = $(window).width();

			if (w < 750) {
				$('.project article').trigger('sticky_kit:detach');
			} else {
				$('.project article').stick_in_parent({
					offset_top: $('.header').outerHeight()
				});
			}
		}
	});

	var sr = ScrollReveal({
		origin: "bottom",
		distance: "64px",
		duration: 900,
		delay: 0,
		scale: 1
	});

	sr.reveal('.project li');


	// resize embeded videos
	$(function () {

		var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
			$fluidEl = $("figure");

		$allVideos.each(function () {

			$(this)
				// jQuery .data does not work on object/embed elements
				.attr('data-aspectRatio', this.height / this.width)
				.removeAttr('height')
				.removeAttr('width');

		});

		$(window).resize(function () {

			var newWidth = $fluidEl.width();
			$allVideos.each(function () {

				var $el = $(this);
				$el
					.width(newWidth)
					.height(newWidth * $el.attr('data-aspectRatio'));

			});

		}).resize();

	});

}(jQuery));