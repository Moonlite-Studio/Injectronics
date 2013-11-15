Template.signInModal.events({
/**
 * If a user presses enter while on a subfield when signing up
 * they will submit the form.  This is done as there is already
 * another form on this page, so we cant call submit form
 * @param  Event event The event that is happening
 * @return void
 */
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

	'click .registerAccount': function (e) {
		changeModal('.signUpModal');
		e.preventDefault();

	},

	'click .returnLogin': function (e) {
		changeModal('.logInModal');
		e.preventDefault();

	},

	'click .newPass': function (e) {
		changeModal('.newPassModal');
		e.preventDefault();

	},

	//This is the event used if a user submits a new
	//user signup form
	'click #signUpButton': function (event) {
		//This will stop the default submitting of the form
		event.preventDefault();

		var time = new Date().getTime();
		var options = {
			email : $('#sign-email').val(),
			password : $('#sign-password').val(),
			//Profile is the object within the user that can
			//be freely edited by the user
			profile : {
				name : ($('#sign-first-name').val() + " " + $('#sign-last-name').val()),
				templateCode : $('#sign-template-code').val(),
				joinDate: time,
				recent: {
					lastLogin: time,
					lastProjectName: "None",
					lastProjectID: "None"
				},
				hr : {
					sickDays: 0,
					vacationDays: 0,
					//Updates in an arryay conataining update objects
					//that contain a value, and how it has changed
					updates : [{
						hrValue: "User",
						valueChanged: "Was Created"
					}]
				}
			}
		};
	}
});
