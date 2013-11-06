Template.projectPage.helpers({
	//Gets the session ID for the current Project
	//Allowing us to grab the data
	currentProject: function () {
		return Projects.findOne(Session.get('currentProjectId'));
	}
});

/**
 * This will mimic an actual update to the current project
 * @param  Meteor.call('updateProject', this._id, function (error, result) {		});	}} [description]
 * @return {[type]}   [description]
 */
Template.projectPage.events({
	'click #update-btn': function () {
		Meteor.call('updateProject', this._id, function (error, result) {
		});
	}
});