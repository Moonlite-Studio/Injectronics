Template.splash.events({
	

	'click #learnMore' : function() {
		Meteor.Router.to('prices');
	}

});

//Hides the dimmed effect
Template.splash.rendered = function () {
	theme();
	skrollr();
	skrollr.init();

	$('#effect').hide();

	//The Modal Wrapper (Includes all forms);
	var $form_wrapper = $('#myModal'),

	//The current form is the one with class 'active'
	$currentForm = $form_wrapper.children('modal-dialog.active'),

	//The switch form links
	$linkform = $form_wrapper.find('.login-footer');

	$form_wrapper.children().each(function(i){
		var $theForm = $(this);

		//solve the inline display none problem when using fadeIn/fadeOut
		if(!$theForm.hasClass('active'))
			$theForm.hide();
		$theForm.data({
			width : $theForm.width(),
			height : $theForm.height()
		});
	});

	var move = function() {
		var st = $(window).scrollTop();
		var ot = $("#top").offset().top;
		var s = $("#my-navbar");
		var content = $("#splash-content");
		if(st > ot) {
			s.css({
				position: "fixed",
				top: "0px"
			});
			s.addClass("sticky");
			content.addClass("pastNav");
			s.removeClass("beforeNav");
		} else {
			if(st <= ot) {
				s.css({
					position: "relative",
					top: ""
				});
				s.addClass("sticky");
				content.removeClass('pastNav');
				s.addClass("beforeNav");
			}
		}
	};
	$(window).scroll(move);
	move();

};
