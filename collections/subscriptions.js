Subscriptions = new Meteor.Collection('subscriptions');

Meteor.methods({

/**
 * Creates a subscrition linking a user and project
 * @param  String proj The project to be subscribed to
 * @return String  The new subscription ID
 */
	subscription: function(proj){
		var user = Meteor.user();
		var subCheck = Subscriptions.findOne({userID: user._id, projectID: proj._id});
		if(subCheck){
			throw new Meteor.Meteor.Error(401, 'Subscription already exists!', details);
		}
		//filling in other keys
		var sub = {
			userID : user._id,
			projectID : proj._id,
			projectName: proj.title

		};

		//Inserts new project into collection
		var subID = Subscriptions.insert(sub);

		//returns the ID of the new project
		return subID;
	},

	/**
	 * Removes a subscription from the subscription table
	 * @param  String projID The ID of the projec to be removed from the subscription
	 * @return void
	 */
	removeSubscription: function(projID){
		var user = Meteor.user();
		var sub = {
			userID : user._id,
			projectID : projID
		};
		Subscriptions.remove(sub);
	}
});