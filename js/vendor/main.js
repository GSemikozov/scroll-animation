jQuery(document).ready(function($){

	var stage = $("#animation-block");
	if (!$('body').hasClass('mobile-device')) {

		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= ($(window).height() * 2) - ($(window).height() / 2)) {
				stage.removeClass().addClass('frame-3-active');
				if ($(window).width() < 600) {
					$(".content-img.first-step").hide(600);
					$(".content-img.second-step").hide(600);
					$(".content-img.third-step").show(600);
				} else {
					$(".content-img.first-step").fadeOut(600);
					$(".content-img.second-step").fadeOut(600);
					$(".content-img.third-step").fadeIn(600);
				}

			} else if (scroll >= $(window).height() - ($(window).height() / 4)) {
				stage.removeClass().addClass('frame-2-active');
				if ($(window).width() < 600) {
					$(".content-img.first-step").hide(600);
					$(".content-img.second-step").show(600);
					$(".content-img.third-step").hide(600);
				} else {
					$(".content-img.first-step").fadeOut(600);
					$(".content-img.second-step").fadeIn(600);
					$(".content-img.third-step").fadeOut(600);
				}

			} else {
				stage.removeClass().addClass('frame-1-active');
				if ($(window).width() < 600) {
					$(".content-img.first-step").show(600);
					$(".content-img.second-step").hide(600);
					$(".content-img.third-step").hide(600);
				} else {
					$(".content-img.first-step").fadeIn(600);
					$(".content-img.second-step").fadeOut(600);
					$(".content-img.third-step").fadeOut(600);
				}
			}

			if (scroll >= ($(window).height() / 3)) {
				$("#presentation").addClass('fade-out');
			} else {
				$("#presentation").removeClass('fade-out');
			}

			if (scroll >= ($(window).height())) {
				stage.addClass('complete');
			} else {
				stage.removeClass('complete');
			}
		});
	}
});