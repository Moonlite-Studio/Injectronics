theme = function () {
	$(function () {
		$(window).scroll(function() {
			if ($(".navbar").offset().top>30) {
				$(".navbar-fixed-top").addClass("sticky");
			}
			else {
				$(".navbar-fixed-top").removeClass("sticky");
			}
		});
	});
};