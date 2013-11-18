Template.footer.events({
	'click #to-top': function () {
		$('html, body').animate({
          scrollTop: $("#top").offset().top
      }, 600);
	}
});