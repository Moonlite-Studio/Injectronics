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

	//This is the event used if a user submits a new
	//user signup form
	'submit form': function (event) {
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
				subscriptions: [],
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


		Accounts.createUser(options, function () {
			var entry = {};
			//Calls the newly created User's function to create
			//an ectry for the user
			//Meteor.user()
		});
		
	}
});

//Hides the dimmed effect
Template.splash.rendered = function () {
	$('#effect').hide();
};