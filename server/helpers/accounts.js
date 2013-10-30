//This will run validation on whenever a new
//user is created
Accounts.validateNewUser(function (user) {
	return true;
});

//Whenever a user is created, a verification email
//will also be sent out afterwards that the
//user must complete
Accounts.config({
	sendVerificationEmail : true
});

Meteor.methods({
	/**
	 * Will add a subscription to the users subscription collection
	 * @param subID The ID of the prohect 
	 */
	addSubscription: function(subID){
		var user = Meteor.user();

		Meteor.users.update(Meteor.userId(), { $addToSet: {"profile.subscriptions" : subID}});
	},
	/**
	 * Removes a subscription from a users subscription collection
	 * @param  String subID The id of the project to remove from subscription
	 * @return void 
	 */
	removeSubscription: function(subID){
		var user = Meteor.user();

		Meteor.users.update(Meteor.userId(), { $pull: {"profile.subscriptions" : subID}});
	}
});