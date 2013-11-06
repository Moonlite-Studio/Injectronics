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

Template.dashboardEntry.rendered = function(){
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
  } else {
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