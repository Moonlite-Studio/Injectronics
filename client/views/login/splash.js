Template.splash.events({
	//This will cause the slow appearing of the input fields
	//when a user clicks to "Sign Up"
	'click #signup': function () {
		$('#effect').slideDown('slow');
	},
	'click #logButton': function () {
		var user =  $('#email').val();
		var password = $('#passwd').val();
		Meteor.loginWithPassword(user, password, function (error) {
				Meteor.Router.to('dashboard');
		});
	},

	'submit form': function (event) {
		//This will stop the default submitting of the form
		event.preventDefault();

		var options = {
			email : $('#sign-email').val(),
			password : $('#sign-password').val(),
			profile : {
				name : ($('#sign-first-name').val() + " " + $('#sign-last-name').val()),
				templateCode : $('#sign-template-code').val()
			}
		};

		Accounts.createUser(options, function () {
			//Enter code to happen after creation of 
			//user here.
			
		});
	}
});

Template.splash.rendered = function () {
	$('#effect').hide();
};