Template.notifications.helpers({
	/**
	 * Returns all unread notifications for the current user
	 * @return Collection All undread notifications for the current user
	 */
  notifications: function() {
    return Notifications.find({userID: Meteor.userId(), read: false});
  },
  /**
   * Returns the amount of notifications there are for the current user
   * @return int Amount of notifications for the current user
   */
  notificationCount: function(){
    return Notifications.find({userID: Meteor.userId(), read: false}).count();
  }
});