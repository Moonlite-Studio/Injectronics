Template.splash.events({
	//This will cause the slow appearing of the input fields
	//when a user clicks to "Sign Up"
	'click #signup': function () {
		$('#effect').slideDown('slow');
	},
	//This event will run when the user clicks the
	//log in button
	'click #logButton': function () {
		var user =  $('#email').val();
		var password = $('#passwd').val();
		Meteor.loginWithPassword(user, password, function (error) {
				Meteor.Router.to('dashboard');
				$('#myModal').modal('hide');
		});
	},

	//This is the event to handle if the user clicks
	//that they have forgotten their password
	'click #forgot-btn': function (){
		console.log("Must fill in forgot password here to be sent to: " + Meteor.user().emails[0].address);
		/*Accounts.forgotPassword({
			email: Meteor.user().emails[0].address
		});
		*/
	},

		'keypress .onSub': function (event) {
		//This will stop the default submitting of the form
		if(event.which === 13){
			var user =  $('#email').val();
			var password = $('#passwd').val();
			Meteor.loginWithPassword(user, password, function (error) {
				Meteor.Router.to('dashboard');
			});
			$('#myModal').modal('hide');
		}
	},

	//This is the event used if a user submits a new
	//user signup form
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

//Hides the dimmed effect
Template.splash.rendered = function () {
	$('#effect').hide();
};