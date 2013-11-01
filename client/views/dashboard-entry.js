Template.dashboardEntry.helpers({
	/**
	 * Concerts the time into a readable format
	 * @return String containing english readable time
	 */
	convertedTime: function () {
		return new Date(this.submitted).toString();
	},

/**
 * Checks to see if the current entry is currently in the user subscription collection
 * @return boolean returns true if the current entry is in the user subscription table
 */
	userSubscribe: function() {
		if (Meteor.user().profile.subscriptions.indexOf(this.projectId) != -1){
			return true;
		}	else {
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
		console.log("unsubscribe");
		Meteor.call('removeSubscription', this.projectId, function (error, result){});
	},
	/**
	 * Used to add a subscription to the user subscription collection
	 * @return void
	 */
	'click #subscribe' : function () {
		Meteor.call('addSubscription', this.projectId, function (error, result) {});
	}
});