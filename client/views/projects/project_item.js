Template.projectItem.events({
	/**
	 * When clicked, will add the subscritption into the users profile
	 * @return void
	 */
	'click #subscribeButton': function () {
		var user = Meteor.user();
		if(!Subscriptions.findOne({userID: user._id, projectID: this._id})){
			Meteor.call('subscription', this._id, function (error, result) {
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
	 * Returns the time in a readable format
	 * @return String A readable date string
	 */
	convertedTime: function () {
		return new Date(this.recentUpdate.updateDate).toString();
	},
	/**
	 * Used to change the text of the button to correspond to the sunscription of the project
	 * @return String The text for the button
	 */
	projectSubscribed: function(){
		var user = Meteor.user();
		if(Subscriptions.findOne({userID: user._id, projectID: this._id})){
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
		var user = Meteor.user();
		if(Subscriptions.findOne({userID: user._id, projectID: this._id})){
			return "btn-success";
		}else{
			return "btn-danger";
		}
	}
});

Template.projectItem.rendered = function(){
  // animate post from previous position to new position
  var instance = this;
  var rank = instance.data._rank;
  var $this = $(this.firstNode);
  var postHeight = 80;
  var newPosition = rank * postHeight;
  // if element has a currentPosition (i.e. it's not the first ever render)
  if (typeof(instance.currentPosition) !== 'undefined') {
    var previousPosition = instance.currentPosition;
    // calculate difference between old position and new position and send element there
    var delta = previousPosition - newPosition;
    $this.css("top", delta + "px");
  }else {
    // it's the first ever render, so hide element
    $this.addClass("invisible");
  }
  // let it draw in the old position, then..
  Meteor.defer(function() {
    instance.currentPosition = newPosition;
    // bring element back to its new original position
    $this.css("top",  "0px").removeClass("invisible");
  });
};