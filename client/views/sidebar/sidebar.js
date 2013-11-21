Template.menu.rendered = function () {
	
/**
 * Create Sidebar Menu
 */
	initAce();
	ace_elements();
	ace_extra();

};

Template.menu.helpers({
	projects: function () {
		return Subscriptions.find({userID:Meteor.user()._id}, {sort:{ created_at : -1}, limit: 5});
	}
});