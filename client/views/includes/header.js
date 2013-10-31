Template.header.events({
	//Used for when the user clicks the log out button
	'click #logout-btn' : function(){
		Meteor.logout();
	}
});

Template.header.helpers({
	//Used to get the first name of the current user
	'currentName' : function(){
		return Meteor.user().profile.name.split(" ")[0];
	}
});