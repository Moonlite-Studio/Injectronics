Template.splash.events({
	'click #signup': function () {
		$('#effect').slideDown('slow');
	}
});

Template.splash.rendered = function () {
	$('#effect').hide();
};