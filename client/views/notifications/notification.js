Template.notification.events({
	/**
	 * Changes the clicked notification to read
	 * @return void
	 */
  'click a': function() {
    Notifications.update(this._id, {$set: {read: true}});
  }
});