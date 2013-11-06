Template.dashboardEntry.helpers({
	/**
	 * Concerts the time into a readable format
	 * @return String containing english readable time
	 */
	convertedTime: function () {
		return formatDate(this.submitted);
	},

/**
 * Checks to see if the current entry is currently in the user subscription collection
 * @return boolean returns true if the current entry is in the user subscription table
 */
	userSubscribe: function() {
		var foundItem = Subscriptions.findOne({userID: Meteor.userId(), projectID: this.projectId});
				
			if (foundItem) {
				return true;
			} else {
				return false;
			}
	},

	getAvatar: function (){
		if(this.type === "project"){
			return "img/";
		}
	}
});

Template.dashboardEntry.events({
	/**
	 * Used to unsubscribe an item from the users subscripton collection
	 * @return void
	 */
	'click #unsubscribe': function () {
		Meteor.call('removeSubscription', this.projectId, function (error, result){});
	},
	/**
	 * Used to add a subscription to the user subscription collection
	 * @return void
	 */
	'click #subscribe' : function () {
		Meteor.call('subscription', this.projectId, function (error, result) {});
	}
});