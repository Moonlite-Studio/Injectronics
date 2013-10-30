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
	addSubscription: function(subID){
		var user = Meteor.user();

		var foundEntry = Meteor.users.findOne(Meteor.userId());

		Meteor.users.update(Meteor.userId(), { $addToSet: {"profile.subscriptions" : subID}});
	}
});