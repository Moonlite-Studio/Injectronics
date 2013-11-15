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
		
		/*Accounts.forgotPassword({
			email: Meteor.user().emails[0].address
		});
*/
	},

	'click #learnMore' : function() {
		Meteor.Router.to('prices')
	},

});

//Hides the dimmed effect
Template.splash.rendered = function () {
	theme();

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

};

/**
 * Changes the Modal with a fadeOut/fadeIn effect from one modal to another.
 * @param  {[String]} newValue [The selector for the new Model]
 */
var changeModal = function (newValue){
	$newForm = $(newValue);

		//The Modal Wrapper (Includes all forms);
		var $form_wrapper = $('#myModal'),

		//The current form is the one with class 'active'
		$currentForm = $form_wrapper.children('.active');

		$currentForm.fadeOut('400', function() {
			//remove class "active" from current form
			$currentForm.removeClass('active');

			//animate the wrapper
			$form_wrapper.stop()
							.animate({
								width: $newForm.data('500') + 'px',
								height: $newForm.data('500') + 'px'
									
							},500,function(){
								//new form gets class "active"
								$newForm.addClass('active');
								//show the new form
								$newForm.fadeIn(400);
							});

		});
};
