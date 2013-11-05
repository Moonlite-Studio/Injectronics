Subscriptions = new Meteor.Collection('subscriptions');

Meteor.methods({

	subscription: function(projID){
		var user = Meteor.user();
		var subCheck = Subscriptions.findOne({userID: user._id, projectID: projID});
		if(subCheck){
			throw new Meteor.Meteor.Error(401, 'Subscription already exists!', details);
		}
		//filling in other keys
		var sub = {
			userID : user._id,
			projectID : projID

		};

		//Inserts new project into collection
		var subID = Subscriptions.insert(sub);

		//returns the ID of the new project
		return subID;
	},

	
	removeSubscription: function(projID){
		var user = Meteor.user();
		var sub = {
			userID : user._id,
			projectID : projID
		};
		Subscriptions.remove(sub);
	}
});