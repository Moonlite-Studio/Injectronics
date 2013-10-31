Template.debugEntries.events({
	'click #logButton': function () {
		//Use this function for cycling through a users
		//subscriptions and collecting all they're subscribed
		//items.
		var foundSubscriptions = Meteor.user().profile.subscriptions;
		console.log(foundSubscriptions);

		$.each(foundSubscriptions, function(index, subscription){
			Meteor.call(subscription.functionName, subscription.itemID, function (error, value) {
				console.log(value);
				//Change this to the code needed
			});
		});
	}
});