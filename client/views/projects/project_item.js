Template.projectItem.events({
	/**
	 * When clicked, will add the subscritption into the users profile
	 * @return void
	 */
	'click #subscribeButton': function () {

		var subs = Meteor.user().profile.subscriptions;
		if(subs.indexOf(this._id) === -1){
			Meteor.call('addSubscription', this._id, function (error, result) {
			});
		}else{
			Meteor.call('removeSubscription', this._id, function (error, result) {
			});
		}
	},

	/**
	 * Used to update the project
	 * @return void
	 */
	'click #updateButton' : function () {
		Meteor.call('updateProject', this._id, function (error, result) {
		});
	}
});

Template.projectItem.helpers({
	/**
	 * This function returns the id of the project
	 * @return String A string containing the id of the project
	 */
	projectId: function () {
		return this._id;
	},
	/**
	 * Used to change the text of the button to correspond to the sunscription of the project
	 * @return String The text for the button
	 */
	projectSubscribed: function(){
		if(Meteor.user().profile.subscriptions.indexOf(this._id) !== -1){
			return "Subscribed!";
		}else{
			return "Click to Subscribe";
		}
	},
	/**
	 * Used to change the styling of the button when subscribed to a project
	 * @return String contains the new class to be inserted into the button
	 */
	btnSubscribed: function(){
		if(Meteor.user().profile.subscriptions.indexOf(this._id) !== -1){
			return "btn-success";
		}else{
			return "btn-danger";
		}
	}
});