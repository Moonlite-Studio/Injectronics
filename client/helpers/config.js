//Use this function to insert new object into a users entries array
addEntry = function() {
	return Meteor.user().profile.entries.unshift("Hello");
};