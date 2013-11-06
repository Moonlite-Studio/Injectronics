Template.header.events({
	/**
	 * Logs the user out on click
	 * @return void
	 */
	'click #logout-btn' : function(){
		Meteor.logout();
	}
});

Template.header.helpers({
	/**
	 * Gets the first name of the current user
	 * @return String String value of first name
	 */
	'currentName' : function(){
		return Meteor.user().profile.name.split(" ")[0];
	}
});