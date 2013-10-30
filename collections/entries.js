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
			subscriptions: []
			//NEED TO FILL IN DATA FOR HOLDING ACTUAL DOCUMENTS!!
		};

		//Inserts new project into collection
		var entryID = Entries.insert(newEntry);

		//returns the ID of the new project
		return entryID;
	}

	/**
	 * @param object subObject [a New Subscription for the
	 * user.  ]
	 * 
	 * type - String
	 *  This will be for where your entry will come from.
	 *  So for projects a type would be "Project"
	 *  
	 * description - String
	 *  This is a description of the entry coming in.
	 *  This will be displayed for each instance of the entry
	 *  so make it descriptive.
	 *  ex. This Project was recently updated!
	 *  
	 * pictureLink - String
	 *  A Link to the picture that will be displayed for the
	 *  given entry.  This may be changed in time.
	 *  
	 * linkToItem - Object  
	 *  This object will allow us to link to the item the entry
	 *  is talking about.  If you don't wish to link an item
	 *  simply pass an empty object
	 *    itemID - The ID of the Item you wish to link to
	 *    itemFunction - A Function of how to connect to the Item
	 *  
	 * 
	 * 
	 */
	/*	addSubscription: function(subObject){
		var user = Meteor.user();

		var foundEntry = Entries.findOne({"userID": Meteor.userId()});

		foundEntry.subscriptions.push(subObject);
		console.log(foundEntry);

	}
	*/
});