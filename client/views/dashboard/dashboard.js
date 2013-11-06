Template.dashboard.helpers({
	/**
	 * This will cycle through all collections that can be
	 * posted to the dashboard and sort them by date and
	 * check if the user is subscribed to wanted entry
	 * @return Array Contains objects of entries to be posted to the dashboard
	 */
	entry: function () {
		var user = Meteor.user();
		var subs = Subscriptions.find({userID: user._id});
		var ids = [];
		subs.forEach(function (post) {
			ids.push(post.projectID);
		});
		var TWELVE_HOURS = new Date() + 12* 60 * 60 * 1000; /* ms */
		var allProjects = new Meteor.Collection(null);
		var projects = Projects.find({}, {sort: {"recentUpdate.updateDate" : -1}}).fetch();

		var i = 0;

		var options = {sort: {"recentUpdate.updateDate" : -1}};
		return Projects.find({$or : [{submitted: {$lte : TWELVE_HOURS}}, {_id : { $in: ids}}]}, options).map(function(project) {
			if(ids.indexOf(project._id) === -1){
				project.description = "This is a new project that has just been made.  Perhaps you would like to subscribe to it?";
			} else {
				project.description =  "This project has been recently updated.";
			}
			project.name = project.title;
			project.submitted = project.recentUpdate.updateDate;
			project.author = project.recentUpdate.updateAuthorName;
			project.projectId = project._id;
			project._rank = i;
			i += 1;
			return project;
		});
		
	}
});