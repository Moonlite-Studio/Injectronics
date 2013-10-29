Template.debugEntries.events({
	'click #logButton': function () {
		console.log(addEntry());
		console.log(Meteor.user().profile);
	}
});