Entries = new Meteor.Collection('entries');

Meteor.methods({

	entry: function(entryAttributes){
		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user){
			throw new Meteor.Error(401, "User not found when creating new entry");
		}

		//filling in other keys
		var newEntry = {
			userID: user._id,
			created: new Date().getTime(),
			entryObjects: []
			//NEED TO FILL IN DATA FOR HOLDING ACTUAL DOCUMENTS!!
		};

		//Inserts new project into collection
		var entryID = Entries.insert(newEntry);

		//returns the ID of the new project
		return entryID;
	}
});